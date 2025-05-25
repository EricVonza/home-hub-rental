
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '../components/Navbar';
import { Home, Calendar, User, Heart } from 'lucide-react';

const TenantDashboard = () => {
  const [activeTab, setActiveTab] = useState('bookings');

  const bookings = [
    { id: 1, property: "Modern Downtown Apartment", landlord: "John Smith", date: "2024-01-15", status: "approved", price: 1200 },
    { id: 2, property: "Cozy Suburban House", landlord: "Sarah Wilson", date: "2024-01-20", status: "pending", price: 1800 },
  ];

  const favorites = [
    { id: 1, title: "Luxury Mountain View Villa", price: 2500, location: "Mountain View Heights" },
    { id: 2, title: "Urban Penthouse", price: 3500, location: "Skyline District" },
  ];

  const currentRental = {
    property: "Modern Downtown Apartment",
    landlord: "John Smith",
    rentDue: "2024-02-01",
    amount: 1200
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Tenant Dashboard</h1>
          <p className="text-gray-600">Manage your bookings and rentals</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Current Rental</p>
                  <p className="text-3xl font-bold text-gray-900">1</p>
                </div>
                <Home className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pending Bookings</p>
                  <p className="text-3xl font-bold text-gray-900">1</p>
                </div>
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Favorites</p>
                  <p className="text-3xl font-bold text-gray-900">2</p>
                </div>
                <Heart className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Next Rent Due</p>
                  <p className="text-xl font-bold text-gray-900">Feb 1</p>
                </div>
                <div className="text-green-600 text-2xl">💰</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Current Rental Card */}
        <Card className="mb-8 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">Current Rental</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold text-blue-900">{currentRental.property}</h3>
                <p className="text-blue-700">Landlord: {currentRental.landlord}</p>
                <p className="text-blue-700">Rent: ${currentRental.amount}/month</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-blue-600">Next payment due</p>
                <p className="text-lg font-semibold text-blue-900">{currentRental.rentDue}</p>
                <Button size="sm" className="mt-2">
                  Pay Rent
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'bookings' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            My Bookings
          </button>
          <button
            onClick={() => setActiveTab('favorites')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'favorites' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Favorites
          </button>
        </div>

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">My Bookings</h2>
            
            <div className="grid gap-4">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{booking.property}</h3>
                        <p className="text-gray-600">Landlord: {booking.landlord}</p>
                        <p className="text-gray-600">${booking.price}/month</p>
                        <p className="text-sm text-gray-500">Requested: {booking.date}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={booking.status === 'approved' ? 'default' : 'secondary'}>
                          {booking.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Favorites Tab */}
        {activeTab === 'favorites' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Favorite Properties</h2>
            
            <div className="grid gap-4">
              {favorites.map((property) => (
                <Card key={property.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{property.title}</h3>
                        <p className="text-gray-600">📍 {property.location}</p>
                        <p className="text-blue-600 font-semibold">${property.price}/month</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4 mr-2 text-red-500" />
                          Remove
                        </Button>
                        <Button size="sm">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TenantDashboard;
