import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterSidebar } from './components/FilterSidebar';
import { PropertyGrid } from './components/PropertyGrid';
import { SortControls } from './components/SortControls';
import { PropertyModal } from './components/PropertyModal';
import { FavoritesModal } from './components/FavouritesModal';
import { mockProperties } from './data/mockProperties';
import { useFavorites } from './hooks/useFavourites';
import './App.css'


function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    status: 'all',
    sortBy: 'date-newest'
  });
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [showFavorites, setShowFavorites] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { favorites, isFavorite, toggleFavorite, removeFromFavorites } = useFavorites();

  // Filter properties based on search query
  const searchFilteredProperties = useMemo(() => {
    if (!searchQuery.trim()) return mockProperties;
    
    const query = searchQuery.toLowerCase();
    return mockProperties.filter(property => 
      property.title.toLowerCase().includes(query) ||
      property.description.toLowerCase().includes(query) ||
      property.location.address.toLowerCase().includes(query) ||
      property.location.city.toLowerCase().includes(query) ||
      property.location.state.toLowerCase().includes(query) ||
      property.amenities.some(amenity => amenity.toLowerCase().includes(query)) ||
      property.agent.name.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Get favorite properties
  const favoriteProperties = useMemo(() => {
    return mockProperties.filter(property => favorites.includes(property.id));
  }, [favorites]);

  // Count filtered properties for display
  const filteredPropertiesCount = useMemo(() => {
    return searchFilteredProperties.filter(property => {
      // Apply the same filters as PropertyGrid
      if (filters.status && filters.status !== 'all' && property.status !== filters.status) {
        return false;
      }
      if (filters.propertyType && filters.propertyType.length > 0) {
        if (!filters.propertyType.includes(property.type)) {
          return false;
        }
      }
      if (filters.priceRange) {
        if (filters.priceRange.min && property.price < filters.priceRange.min) {
          return false;
        }
        if (filters.priceRange.max && property.price > filters.priceRange.max) {
          return false;
        }
      }
      if (filters.bedrooms && property.bedrooms < filters.bedrooms) {
        return false;
      }
      if (filters.bathrooms && property.bathrooms < filters.bathrooms) {
        return false;
      }
      if (filters.amenities && filters.amenities.length > 0) {
        const hasAllAmenities = filters.amenities.every(amenity =>
          property.amenities.includes(amenity)
        );
        if (!hasAllAmenities) {
          return false;
        }
      }
      return true;
    }).length;
  }, [searchFilteredProperties, filters]);

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleClosePropertyModal = () => {
    setSelectedProperty(null);
  };

  const handleShowFavorites = () => {
    setShowFavorites(true);
  };

  const handleCloseFavorites = () => {
    setShowFavorites(false);
  };

  const handleRemoveFromFavorites = (propertyId) => {
    removeFromFavorites(propertyId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header
        onSearchChange={handleSearchChange}
        searchQuery={searchQuery}
        onShowFavorites={handleShowFavorites}
        favoritesCount={favorites.length}
      />

      <div className="flex">
        {/* Filter Sidebar */}
        <FilterSidebar
          filters={filters}
          onFiltersChange={handleFiltersChange}
          isOpen={isFilterSidebarOpen}
          onClose={() => setIsFilterSidebarOpen(false)}
        />

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Sort Controls */}
            <SortControls
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onToggleFilters={() => setIsFilterSidebarOpen(true)}
              resultCount={filteredPropertiesCount}
            />

            {/* Properties Grid */}
            <PropertyGrid
              properties={searchFilteredProperties}
              filters={filters}
              onPropertyClick={handlePropertyClick}
              loading={loading}
            />
          </div>
        </main>
      </div>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          isOpen={!!selectedProperty}
          onClose={handleClosePropertyModal}
          isFavorite={isFavorite(selectedProperty.id)}
          onToggleFavorite={toggleFavorite}
        />
      )}

      {/* Favorites Modal */}
      <FavoritesModal
        isOpen={showFavorites}
        onClose={handleCloseFavorites}
        favoriteProperties={favoriteProperties}
        onPropertyClick={handlePropertyClick}
        onRemoveFromFavorites={handleRemoveFromFavorites}
      />
    </div>
  );
}

export default App;