import React from 'react';
import { X, Filter } from 'lucide-react';

export function FilterSidebar({ filters, onFiltersChange, isOpen, onClose }) {
  const propertyTypes = ['apartment', 'house', 'office', 'commercial'];
  const amenitiesList = [
    'Gym', 'Swimming Pool', 'Parking', 'Garden', 'Rooftop Terrace',
    'Concierge', 'In-unit Laundry', 'Air Conditioning', 'Fireplace',
    'Garage', 'Security System', 'Near Transit'
  ];

  const handlePropertyTypeChange = (type, checked) => {
    const currentTypes = filters.propertyType || [];
    const newTypes = checked
      ? [...currentTypes, type]
      : currentTypes.filter(t => t !== type);
    
    onFiltersChange({ ...filters, propertyType: newTypes });
  };

  const handleAmenityChange = (amenity, checked) => {
    const currentAmenities = filters.amenities || [];
    const newAmenities = checked
      ? [...currentAmenities, amenity]
      : currentAmenities.filter(a => a !== amenity);
    
    onFiltersChange({ ...filters, amenities: newAmenities });
  };

  const handlePriceChange = (min, max) => {
    onFiltersChange({
      ...filters,
      priceRange: { min, max }
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      status: 'all',
      sortBy: 'date-newest'
    });
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:relative inset-y-0 left-0 z-50 w-80 bg-white shadow-xl lg:shadow-none transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Status Filter */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Property Status
            </label>
            <div className="space-y-2">
              {[
                { value: 'all', label: 'All Properties' },
                { value: 'for-sale', label: 'For Sale' },
                { value: 'for-rent', label: 'For Rent' }
              ].map((option) => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name="status"
                    value={option.value}
                    checked={filters.status === option.value}
                    onChange={(e) => onFiltersChange({ ...filters, status: e.target.value })}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Property Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Property Type
            </label>
            <div className="space-y-2">
              {propertyTypes.map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters.propertyType || []).includes(type)}
                    onChange={(e) => handlePropertyTypeChange(type, e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700 capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Range */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Price Range
            </label>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <input
                  type="number"
                  placeholder="Min"
                  value={filters.priceRange?.min || ''}
                  onChange={(e) => handlePriceChange(
                    parseInt(e.target.value) || 0,
                    filters.priceRange?.max || 10000000
                  )}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={filters.priceRange?.max || ''}
                  onChange={(e) => handlePriceChange(
                    filters.priceRange?.min || 0,
                    parseInt(e.target.value) || 10000000
                  )}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Bedrooms */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Minimum Bedrooms
            </label>
            <select
              value={filters.bedrooms || ''}
              onChange={(e) => onFiltersChange({
                ...filters,
                bedrooms: e.target.value ? parseInt(e.target.value) : undefined
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
            </select>
          </div>

          {/* Bathrooms */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Minimum Bathrooms
            </label>
            <select
              value={filters.bathrooms || ''}
              onChange={(e) => onFiltersChange({
                ...filters,
                bathrooms: e.target.value ? parseInt(e.target.value) : undefined
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Any</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
            </select>
          </div>

          {/* Amenities */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Amenities
            </label>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {amenitiesList.map((amenity) => (
                <label key={amenity} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={(filters.amenities || []).includes(amenity)}
                    onChange={(e) => handleAmenityChange(amenity, e.target.checked)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters */}
          <button
            onClick={clearAllFilters}
            className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors duration-200"
          >
            Clear All Filters
          </button>
        </div>
      </div>
    </>
  );
}