
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navbar from '../components/Navbar';
import { Home, Plus, Calendar, User } from 'lucide-react';

const LandlordDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const properties = [
    { id: 1, title: "Modern Downtown Apartment", price: 1200, status: "rented", tenant: "John Doe" },
    { id: 2, title: "Cozy Suburban House", price: 1800, status: "available", tenant: null },
    { id: 3, title: "Studio Loft", price: 800, status: "rented", tenant: "Jane Smith" },
  ];

  const bookings = [
    { id: 1, property: "Modern Downtown Apartment", tenant: "Alice Johnson", date: "2024-01-15", status: "pending" },
    { id: 2, property: "Cozy Suburban House", tenant: "Bob Wilson", date: "2024-01-20", status: "approved" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Landlord Dashboard</h1>
          <p className="text-gray-600">Manage your properties and bookings</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Properties</p>
                  <p className="text-3xl font-bold text-gray-900">3</p>
                </div>
                <Home className="h-8 w-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Rented</p>
                  <p className="text-3xl font-bold text-gray-900">2</p>
                </div>
                <User className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Available</p>
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
                  <p className="text-sm font-medium text-gray-600">Monthly Income</p>
                  <p className="text-3xl font-bold text-gray-900">$2,000</p>
                </div>
                <div className="text-green-600 text-2xl">💰</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'overview' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Properties
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'bookings' 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Bookings
          </button>
        </div>

        {/* Properties Tab */}
        {activeTab === 'overview' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-900">My Properties</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Property
              </Button>
            </div>
            
            <div className="grid gap-6">
              {properties.map((property) => (
                <Card key={property.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {property.title}
                        </h3>
                        <p className="text-gray-600 mb-2">${property.price}/month</p>
                        {property.tenant && (
                          <p className="text-sm text-gray-500">Tenant: {property.tenant}</p>
                        )}
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={property.status === 'rented' ? 'default' : 'secondary'}>
                          {property.status === 'rented' ? 'Rented' : 'Available'}
                        </Badge>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Bookings</h2>
            
            <div className="grid gap-4">
              {bookings.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-gray-900">{booking.property}</h3>
                        <p className="text-gray-600">Tenant: {booking.tenant}</p>
                        <p className="text-sm text-gray-500">Requested: {booking.date}</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={booking.status === 'approved' ? 'default' : 'secondary'}>
                          {booking.status}
                        </Badge>
                        {booking.status === 'pending' && (
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive">
                              Reject
                            </Button>
                          </div>
                        )}
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

export default LandlordDashboard;
