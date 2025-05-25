
import React from 'react';
import PropertyCard from './PropertyCard';

const PropertyGrid = () => {
  const sampleProperties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: 1200,
      location: "Downtown, City Center",
      bedrooms: 2,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      available: true
    },
    {
      id: 2,
      title: "Cozy Suburban House",
      price: 1800,
      location: "Suburban District",
      bedrooms: 3,
      bathrooms: 2,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      available: true
    },
    {
      id: 3,
      title: "Luxury Mountain View Villa",
      price: 2500,
      location: "Mountain View Heights",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      available: false
    },
    {
      id: 4,
      title: "Studio Loft",
      price: 800,
      location: "Arts District",
      bedrooms: 1,
      bathrooms: 1,
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      available: true
    },
    {
      id: 5,
      title: "Family Home with Garden",
      price: 2200,
      location: "Green Valley",
      bedrooms: 4,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      available: true
    },
    {
      id: 6,
      title: "Urban Penthouse",
      price: 3500,
      location: "Skyline District",
      bedrooms: 3,
      bathrooms: 3,
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      available: true
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Properties
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our handpicked selection of premium rental properties available now
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sampleProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          View All Properties
        </button>
      </div>
    </section>
  );
};

export default PropertyGrid;
