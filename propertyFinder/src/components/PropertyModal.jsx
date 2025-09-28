import React, { useState } from 'react';
import { 
  X, Heart, MapPin, Bed, Bath, Square, Phone, Mail, 
  Car, Wifi, Dumbbell, TreePine, Shield, Calendar,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { InquiryForm } from './InquiryForm';

export function PropertyModal({ property, isOpen, onClose, isFavorite, onToggleFavorite }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showInquiryForm, setShowInquiryForm] = useState(false);

  if (!isOpen) return null;

  const formatPrice = (price, status) => {
    if (status === 'for-rent') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const getAmenityIcon = (amenity) => {
    const iconMap = {
      'Parking': <Car className="h-4 w-4" />,
      'Garage': <Car className="h-4 w-4" />,
      'Gym': <Dumbbell className="h-4 w-4" />,
      'Garden': <TreePine className="h-4 w-4" />,
      'High-speed Internet': <Wifi className="h-4 w-4" />,
      'Security System': <Shield className="h-4 w-4" />,
    };
    return iconMap[amenity] || <div className="h-4 w-4 bg-blue-500 rounded-full" />;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">{property.title}</h2>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onToggleFavorite(property.id)}
              className={`p-2 rounded-full transition-all duration-200 ${
                isFavorite
                  ? 'bg-red-500 text-white hover:bg-red-600'
                  : 'bg-gray-100 text-gray-400 hover:text-red-500 hover:bg-red-50'
              }`}
            >
              <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 hover:bg-gray-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative h-80 bg-gray-200">
          <img
            src={property.images[currentImageIndex]}
            alt={`${property.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {property.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
              
              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {property.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Status Badge */}
          <div className={`absolute top-4 left-4 px-3 py-1 rounded-md text-sm font-semibold ${
            property.status === 'for-sale'
              ? 'bg-green-500 text-white'
              : 'bg-orange-500 text-white'
          }`}>
            {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              {/* Price and Location */}
              <div className="mb-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {formatPrice(property.price, property.status)}
                </div>
                <div className="flex items-center text-gray-500">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{property.location.address}, {property.location.city}, {property.location.state} {property.location.zipCode}</span>
                </div>
              </div>

              {/* Property Details */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {property.bedrooms > 0 && (
                  <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
                    <Bed className="h-5 w-5 text-gray-500 mr-2" />
                    <div>
                      <div className="font-semibold">{property.bedrooms}</div>
                      <div className="text-sm text-gray-500">Bed{property.bedrooms > 1 ? 's' : ''}</div>
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
                  <Bath className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <div className="font-semibold">{property.bathrooms}</div>
                    <div className="text-sm text-gray-500">Bath{property.bathrooms > 1 ? 's' : ''}</div>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
                  <Square className="h-5 w-5 text-gray-500 mr-2" />
                  <div>
                    <div className="font-semibold">{property.area}</div>
                    <div className="text-sm text-gray-500">Sq Ft</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Amenities</h3>
                <div className="grid grid-cols-2 gap-2">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center bg-gray-50 rounded-lg p-3">
                      {getAmenityIcon(amenity)}
                      <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Info */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Property Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Property Type:</span>
                    <span className="text-gray-900 capitalize">{property.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Listed Date:</span>
                    <span className="text-gray-900">
                      {new Date(property.listedDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Last Updated:</span>
                    <span className="text-gray-900">
                      {new Date(property.updatedDate).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              {/* Agent Info */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Agent</h3>
                <div className="flex items-center mb-4">
                  <img
                    src={property.agent.photo}
                    alt={property.agent.name}
                    className="h-16 w-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{property.agent.name}</h4>
                    <p className="text-gray-500 text-sm">Real Estate Agent</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    {property.agent.phone}
                  </a>
                  <a
                    href={`mailto:${property.agent.email}`}
                    className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    {property.agent.email}
                  </a>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => setShowInquiryForm(!showInquiryForm)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    {showInquiryForm ? 'Hide Inquiry Form' : 'Send Inquiry'}
                  </button>
                  <a
                    href={`tel:${property.agent.phone}`}
                    className="w-full bg-white border border-blue-600 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-50 transition-colors duration-200 text-center block"
                  >
                    Call Now
                  </a>
                </div>
              </div>

              {/* Inquiry Form */}
              {showInquiryForm && (
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <InquiryForm
                    property={property}
                    onSubmit={(inquiry) => {
                      console.log('Inquiry submitted:', inquiry);
                      setShowInquiryForm(false);
                    }}
                  />
                </div>
              )}

              {/* Virtual Tour */}
              {property.virtualTour && (
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Virtual Tour</h3>
                  <p className="text-gray-600 mb-4">Take a virtual tour of this property from the comfort of your home.</p>
                  <a
                    href={property.virtualTour}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Start Virtual Tour
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}