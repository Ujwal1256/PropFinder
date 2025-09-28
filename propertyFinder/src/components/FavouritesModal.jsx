import React from 'react';
import { X, Heart, MapPin, Bed, Bath, Square } from 'lucide-react';

export function FavoritesModal({ 
  isOpen, 
  onClose, 
  favoriteProperties, 
  onPropertyClick,
  onRemoveFromFavorites 
}) {
  if (!isOpen) return null;

  const formatPrice = (price, status) => {
    if (status === 'for-rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <Heart className="h-5 w-5 mr-2 text-red-500" />
            My Favorites ({favoriteProperties.length})
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 hover:bg-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[calc(90vh-100px)] overflow-y-auto">
          {favoriteProperties.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="mx-auto h-16 w-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites yet</h3>
              <p className="text-gray-500">Start browsing properties and click the heart icon to save your favorites.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {favoriteProperties.map(property => (
                <div
                  key={property.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer group"
                  onClick={() => onPropertyClick(property)}
                >
                  {/* Image */}
                  <div className="relative h-48">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Remove from favorites */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveFromFavorites(property.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
                    >
                      <Heart className="h-4 w-4 fill-current" />
                    </button>

                    {/* Status Badge */}
                    <div className={`absolute bottom-3 left-3 px-2 py-1 rounded-md text-xs font-semibold ${
                      property.status === 'for-sale'
                        ? 'bg-green-500 text-white'
                        : 'bg-orange-500 text-white'
                    }`}>
                      {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    {/* Title and Price */}
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900 line-clamp-1 flex-1">
                        {property.title}
                      </h3>
                      <span className="text-lg font-bold text-blue-600 whitespace-nowrap ml-2">
                        {formatPrice(property.price, property.status)}
                      </span>
                    </div>

                    {/* Location */}
                    <div className="flex items-center text-gray-500 mb-3">
                      <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                      <span className="text-sm line-clamp-1">
                        {property.location.address}, {property.location.city}
                      </span>
                    </div>

                    {/* Property Details */}
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        {property.bedrooms > 0 && (
                          <div className="flex items-center">
                            <Bed className="h-4 w-4 mr-1" />
                            <span>{property.bedrooms}</span>
                          </div>
                        )}
                        <div className="flex items-center">
                          <Bath className="h-4 w-4 mr-1" />
                          <span>{property.bathrooms}</span>
                        </div>
                        <div className="flex items-center">
                          <Square className="h-4 w-4 mr-1" />
                          <span>{property.area} sq ft</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}