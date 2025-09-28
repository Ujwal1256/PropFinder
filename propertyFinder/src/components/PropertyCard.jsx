import React from 'react';
import { Heart, MapPin, Bed, Bath, Square, Phone, Mail } from 'lucide-react';

export function PropertyCard({ property, isFavorite, onToggleFavorite, onPropertyClick }) {
  const formatPrice = (price, status) => {
    if (status === 'for-rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    onToggleFavorite(property.id);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer group overflow-hidden"
      onClick={() => onPropertyClick(property)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className={`absolute top-3 right-3 p-2 rounded-full shadow-md transition-all duration-200 ${
            isFavorite
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-white text-gray-400 hover:text-red-500 hover:bg-gray-50'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-current' : ''}`} />
        </button>

        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-3 left-3 bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            Featured
          </div>
        )}

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
        {/* Price */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
            {property.title}
          </h3>
          <span className="text-xl font-bold text-blue-600 whitespace-nowrap ml-2">
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
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <div className="flex items-center space-x-4">
            {property.bedrooms > 0 && (
              <div className="flex items-center">
                <Bed className="h-4 w-4 mr-1" />
                <span>{property.bedrooms} bed</span>
              </div>
            )}
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1" />
              <span>{property.bathrooms} bath</span>
            </div>
            <div className="flex items-center">
              <Square className="h-4 w-4 mr-1" />
              <span>{property.area} sq ft</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        {/* Agent Info */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <div className="flex items-center">
            <img
              src={property.agent.photo}
              alt={property.agent.name}
              className="h-8 w-8 rounded-full object-cover mr-2"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{property.agent.name}</p>
              <p className="text-xs text-gray-500">Agent</p>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <a
              href={`tel:${property.agent.phone}`}
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-md transition-colors duration-200"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${property.agent.email}`}
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-md transition-colors duration-200"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}