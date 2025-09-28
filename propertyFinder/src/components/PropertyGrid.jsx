import React from 'react';
import { PropertyCard } from './PropertyCard';
import { useFavorites } from '../hooks/useFavourites';

export function PropertyGrid({ properties, filters, onPropertyClick, loading }) {
  const { isFavorite, toggleFavorite } = useFavorites();

  // Filter properties based on current filters
  const filteredProperties = properties.filter(property => {
    // Status filter
    if (filters.status && filters.status !== 'all' && property.status !== filters.status) {
      return false;
    }

    // Property type filter
    if (filters.propertyType && filters.propertyType.length > 0) {
      if (!filters.propertyType.includes(property.type)) {
        return false;
      }
    }

    // Price range filter
    if (filters.priceRange) {
      if (filters.priceRange.min && property.price < filters.priceRange.min) {
        return false;
      }
      if (filters.priceRange.max && property.price > filters.priceRange.max) {
        return false;
      }
    }

    // Bedrooms filter
    if (filters.bedrooms && property.bedrooms < filters.bedrooms) {
      return false;
    }

    // Bathrooms filter
    if (filters.bathrooms && property.bathrooms < filters.bathrooms) {
      return false;
    }

    // Amenities filter
    if (filters.amenities && filters.amenities.length > 0) {
      const hasAllAmenities = filters.amenities.every(amenity =>
        property.amenities.includes(amenity)
      );
      if (!hasAllAmenities) {
        return false;
      }
    }

    return true;
  });

  // Sort properties
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (filters.sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'date-oldest':
        return new Date(a.listedDate).getTime() - new Date(b.listedDate).getTime();
      case 'date-newest':
      default:
        return new Date(b.listedDate).getTime() - new Date(a.listedDate).getTime();
    }
  });

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-3 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded mb-4 w-1/2"></div>
              <div className="flex justify-between">
                <div className="h-8 bg-gray-200 rounded-full w-24"></div>
                <div className="h-8 bg-gray-200 rounded w-16"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (sortedProperties.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <svg className="mx-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No properties found</h3>
        <p className="text-gray-500">Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {sortedProperties.map(property => (
        <PropertyCard
          key={property.id}
          property={property}
          isFavorite={isFavorite(property.id)}
          onToggleFavorite={toggleFavorite}
          onPropertyClick={onPropertyClick}
        />
      ))}
    </div>
  );
}