
import React from 'react';
import { Home } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-blue-400" />
              <span className="font-bold text-2xl">RentEase</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your trusted partner in finding the perfect rental home. We connect tenants with quality properties and reliable landlords.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">For Tenants</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Browse Properties</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tenant Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Booking History</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">For Landlords</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">List Property</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Landlord Dashboard</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manage Bookings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Analytics</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RentEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
