
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PropertyGrid from '../components/PropertyGrid';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <PropertyGrid />
      <Footer />
    </div>
  );
};

export default Index;
