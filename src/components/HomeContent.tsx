"use client";

import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';

const HomeContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

  }, []);
  
  return (
    <section className="hero h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: "url('/watchbackground.jpg')" }}>
      <div className="container mx-auto text-white text-center">
        <h1 className="text-6xl font-bold drop-shadow-md" data-aos="fade-up">Welcome Watch Mania</h1>
        <p className="text-2xl mt-4">Discover timeless elegance and precision with our exclusive collection of watches. From classic designs to modern styles, each piece is crafted to perfection, blending functionality with sophistication. Find the perfect watch to complement your style and make every moment unforgettable</p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold">Shop Now</button>
      </div>
    </section>
  );
};

export default HomeContent;