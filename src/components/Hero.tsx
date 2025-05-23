
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Perfect
            <span className="block text-yellow-400">Rental Home</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Discover amazing properties from trusted landlords. Your dream home is just a click away.
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter location..."
                    className="w-full text-gray-900"
                  />
                </div>
                <div className="flex-1">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Property Type</option>
                    <option>Apartment</option>
                    <option>House</option>
                    <option>Studio</option>
                    <option>Condo</option>
                  </select>
                </div>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Search Properties
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
