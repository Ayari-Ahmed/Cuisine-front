import React from 'react';
import aboutUsImg from "../assets/img2.jpg"; // Replace with the path to your image

const AboutUs = () => {
  return (
    <div className="about-us-section my-8 flex justify-center items-center bg-orange-50 p-8 " >
      
      <div className="text-section w-1/2 p-6">
        <h2 className="text-3xl font-bold text-pink-600 mb-4">ABOUT US</h2>
        <p className="text-lg mb-6">
        Discover the joy of effortless cooking with Dar Batch, your ultimate culinary companion. Our innovative app simplifies the recipe-finding process. You can easily manage your ingredients, create personalized shopping lists.
        </p>
      </div>

      {/* Image Section */}
      <div className="image-section w-[20%]">
        <img src={aboutUsImg} alt="About Us" className="w-full h-auto rounded-lg object-cover" />
      </div>
    </div>
  );
};

export default AboutUs;
