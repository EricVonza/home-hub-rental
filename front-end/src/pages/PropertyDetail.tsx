
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '../components/Navbar';
import { Heart, Calendar, User, Home } from 'lucide-react';

const PropertyDetail = () => {
  const { id } = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Sample property data - in a real app, this would be fetched based on the ID
  const property = {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 1200,
    location: "Downtown, City Center",
    bedrooms: 2,
    bathrooms: 2,
    area: 850,
    description: "Beautiful modern apartment in the heart of downtown. Features include updated kitchen with stainless steel appliances, hardwood floors throughout, large windows with city views, and in-unit washer/dryer. Perfect for professionals or small families.",
    images: [
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027"
    ],
    available: true,
    landlord: {
      name: "John Smith",
      rating: 4.8,
      properties: 12
    },
    amenities: ["WiFi", "Parking", "Gym", "Pool", "Laundry", "Pet Friendly"],
    rules: ["No smoking", "No parties", "Pet deposit required"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="md:col-span-2">
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            {property.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${property.title} ${index + 2}`}
                className="w-full h-44 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Details */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex justify-between items-start mb-4">
                <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
              
              <p className="text-xl text-blue-600 font-semibold mb-2">
                ${property.price}/month
              </p>
              
              <p className="text-gray-600 mb-4">📍 {property.location}</p>
              
              <div className="flex space-x-6 text-sm text-gray-600 mb-6">
                <span>🛏️ {property.bedrooms} bedrooms</span>
                <span>🚿 {property.bathrooms} bathrooms</span>
                <span>📐 {property.area} sq ft</span>
              </div>

              <Badge variant={property.available ? "default" : "secondary"} className="mb-6">
                {property.available ? "Available" : "Rented"}
              </Badge>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-700">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>House Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {property.rules.map((rule, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <span className="text-red-500">•</span>
                      <span className="text-gray-700">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Book This Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-900">${property.price}</p>
                  <p className="text-blue-700">per month</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Move-in Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Lease Duration
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>6 months</option>
                      <option>12 months</option>
                      <option>18 months</option>
                      <option>24 months</option>
                    </select>
                  </div>
                </div>

                {property.available ? (
                  <Button className="w-full" size="lg">
                    Request Booking
                  </Button>
                ) : (
                  <Button className="w-full" size="lg" disabled>
                    Not Available
                  </Button>
                )}

                <Button variant="outline" className="w-full">
                  Contact Landlord
                </Button>
              </CardContent>
            </Card>

            {/* Landlord Info */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Landlord Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{property.landlord.name}</h3>
                    <p className="text-sm text-gray-600">⭐ {property.landlord.rating} rating</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <p>🏠 {property.landlord.properties} properties managed</p>
                  <p>📅 Joined in 2020</p>
                  <p>✓ Verified landlord</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
