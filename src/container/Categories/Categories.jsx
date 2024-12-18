import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Categories = () => {
  const categories = [
    {
      title: "Cabinet Hardware",
      image: "../../assets/image 34.jpg", // Replace with actual image URL
    },
    {
      title: "Ornaments",
      image: "../../assets/image 35.jpg", // Replace with actual image URL
    },
    {
      title: "Hinges",
      image: "../../assets/image 36.jpg", // Replace with actual image URL
    },
    {
      title: "Pocket Door Hardware",
      image: "../../assets/image 37.jpg", // Replace with actual image URL
    },
    {
      title: "Locks",
      image: "../../assets/image 34.jpg", // Replace with actual image URL
    },
    {
      title: "Handles",
      image: "../../assets/image 35.jpg", // Replace with actual image URL
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      (prevIndex - 1 + categories.length) % categories.length
    );
  };

  const visibleCategories = [
    categories[startIndex],
    categories[(startIndex + 1) % categories.length],
    categories[(startIndex + 2) % categories.length],
    categories[(startIndex + 3) % categories.length],
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
        Popular Categories
      </h2>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-0 top-12 transform -translate-y-1/2 text-black text-3xl p-3 z-10"
      >
        <BsArrowRight />
      </button>

      {/* Categories Grid */}
      <div className="relative">
        <div className="flex overflow-hidden space-x-4 justify-center">
          {visibleCategories.map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-1/4 text-center transition-all duration-500 bg-gray-50 w-[280]"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-[269px] object-cover mx-auto"
              />
              <h3 className="mt-4 text-lg font-semibold">{category.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* View All Products Button */}
      <div className="text-center mt-8">
        <button className="py-2 px-4 text-black uppercase font-semibold underline underline-offset-4">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Categories;
