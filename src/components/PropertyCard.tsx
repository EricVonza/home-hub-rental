
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  image: string;
  available: boolean;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge variant={property.available ? "default" : "secondary"}>
            {property.available ? "Available" : "Rented"}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            ${property.price}/month
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {property.title}
        </h3>
        <p className="text-gray-600 mb-4">
          📍 {property.location}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <span>🛏️ {property.bedrooms} bed{property.bedrooms !== 1 ? 's' : ''}</span>
          <span>🚿 {property.bathrooms} bath{property.bathrooms !== 1 ? 's' : ''}</span>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
            View Details
          </button>
          {property.available && (
            <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
