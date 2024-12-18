import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Shop = () => {
  const styles = [
    {
      title: "Traditional",
      image: "../../assets/image 29.jpg", // Replace with actual image URL
    },
    {
      title: "Contemporary",
      image: "../../assets/image 31.jpg", // Replace with actual image URL
    },
    {
      title: "Transitional",
      image: "../../assets/image 32.jpg", // Replace with actual image URL
    },
    {
      title: "Rustic",
      image: "../../assets/image 33.jpg", // Replace with actual image URL
    },
    {
      title: "Modern",
      image: "../../assets/image 34.jpg", // Replace with actual image URL
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % styles.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + styles.length) % styles.length
    );
  };

  const visibleStyles = [
    styles[startIndex],
    styles[(startIndex + 1) % styles.length],
    styles[(startIndex + 2) % styles.length],
    styles[(startIndex + 3) % styles.length],
  ];

  return (
    <div className="w-screen mx-auto px-4 py-8 relative overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-[140px] top-12 transform -translate-y-1/2 text-black text-3xl p-3 z-10"
      >
        <BsArrowLeft />
      </button>

      <h2 className="text-center text-2xl font-bold uppercase mb-8">
        Shop by Style
      </h2>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-[140px] top-12 transform -translate-y-1/2 text-black text-3xl p-3 z-10"
      >
        <BsArrowRight />
      </button>

      {/* Styles Grid */}
      <div className="relative">
        <div className="flex overflow-hidden space-x-4 justify-center">
          {visibleStyles.map((style, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/4 text-center transition-all duration-500 bg-gray-50 w-[280px]"
            >
              <img
                src={style.image}
                alt={style.title}
                className="w-full h-[269px] object-cover mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold pb-2">{style.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-black text-white mt-8 py-6 px-4 text-center">
        <h3 className="text-xl font-bold mb-2">Need Help?</h3>
        <p className="text-sm mb-4">
          Our trained experts are here to answer your questions, help determine
          replacement hardware, or assist you as you start your new project.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="py-2 px-4 bg-white text-black border border-white rounded">
            800-358-2469
          </button>
          <button className="py-2 px-4 bg-white text-black border border-white rounded">
            Live Chat
          </button>
          <button className="py-2 px-4 bg-white text-black border border-white rounded">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shop;
