import React, { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

const Trending = () => {
  const firstRowImages = [
    {
      title: "Collection Name 1",
      image: "../../assets/image 22.jpg", // Replace with actual image URL
    },
    {
      title: "Collection Name 2",
      image: "../../assets/image 23.jpg", // Replace with actual image URL
    },
    {
      title: "Collection Name 3",
      image: "../../assets/image 24.jpg", // Replace with actual image URL
    },
    {
      title: "Collection Name 4",
      image: "../../assets/image 25.jpg", // Replace with actual image URL
    },
    {
      title: "Collection Name 5",
      image: "../../assets/image 22.jpg", // Replace with actual image URL
    },
  ];

  const secondRowImages = [
    {
      title: "Shop Lock Parts",
      image: "../../assets/1 235.jpg", // Replace with actual image URL
    },
    {
      title: "Shop Bath Accessories",
      image: "../../assets/2 1.jpg", // Replace with actual image URL
    },
    {
      title: "Shop Lighting",
      image: "../../assets/Untitled-1 1.jpg", // Replace with actual image URL
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % firstRowImages.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + firstRowImages.length) % firstRowImages.length
    );
  };

  const visibleImages = [
    firstRowImages[startIndex],
    firstRowImages[(startIndex + 1) % firstRowImages.length],
    firstRowImages[(startIndex + 2) % firstRowImages.length],
    firstRowImages[(startIndex + 3) % firstRowImages.length],
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8 relative overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-12 transform -translate-y-1/2 text-black text-3xl p-3 z-10"
      >
        <BsArrowLeft />
      </button>

      <h2 className="text-center text-2xl font-bold uppercase mb-8">
        Shop Trending
      </h2>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-12 transform -translate-y-1/2 text-black text-3xl p-3 z-10"
      >
        <BsArrowRight />
      </button>

      {/* Sliding First Row */}
      <div className="relative">
        <div className="flex overflow-hidden space-x-4 justify-center">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/4 text-center transition-all duration-500 bg-gray-50 w-[280px]"
            >
              <img
                src={image.image}
                alt={image.title}
                className="w-full h-[269px] object-cover mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold pb-2">{image.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Static Second Row (unchanged) */}
      <div className="grid grid-cols-3 gap-4 mt-8">
        {secondRowImages.map((image, index) => (
          <div
            key={index}
            className="relative h-[1150] w-[483] overflow-hidden"
          >
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end pb-3 justify-center bg-black bg-opacity-20">
              <h3 className="text-white text-lg font-semibold">
                {image.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
