import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Story = () => {
  const images = [
    "../../assets/image 45.jpg", // Replace with actual image URLs
    "../../assets/image 46.jpg",
    "../../assets/image 47.jpg",
    "../../assets/image48.jpg",
    "../../assets/image 49.jpg"
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const visibleImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
    images[(startIndex + 3) % images.length],
    images[(startIndex + 4) % images.length],
  ];

  return (
    <section className="bg-black text-white py-12 px-6 overflow-hidden">
      {/* Story Section */}
      <div className="flex flex-wrap justify-between items-center mb-10">
        {/* Left Image */}
        <div className="flex-1 min-w-[849px] mr-6 ml-6">
          <img
            src="../../assets/house.jpg"
            alt="Baldwin Brass Center"
            className="w-full h-[481]"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 min-w-[300px] ml-20 mr-20">
          <h2 className="text-3xl font-bold uppercase mb-4 overflow-hidden">Our Story</h2>
          <h3 className="text-lg font-semibold mb-6">Baldwin is What We Do</h3>
          <p className="text-m leading-relaxed mb-6">
            Family owned and operated since 1991, we are Baldwin's flagship store 
            and remain the largest showroom dedicated to Baldwin Hardware products. 
            All of our sales and customer service staff are factory trained and 
            certified. Our 40+ years of Baldwin experience allows us to provide 
            excellent customer service with the largest inventory at the best pricing, 
            guaranteed.
          </p>
          <a
            href="/learn-more"
            className="text-m border-b border-white hover:text-gray-400 hover:border-gray-400"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="text-center">
        <div className="flex items-center gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">Follow Us For Inspiration</h2>
            <p className="text-m mb-6">@BALDWINHARDWAREDIRECT</p>
          </div>

          {/* Right Section */}
          <div className="flex-2 flex justify-end gap-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black"
            >
              <BsArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-black"
            >
              <BsArrowRight />
            </button>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          {visibleImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-[256px] h-[256px] object-cover rounded"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
