import React from "react";

const Collections = () => {
  const collections = [
    {
      title: "HOLLYWOOD HILLS COLLECTION",
      image: "../../assets/Frame 83.jpg", // Replace with actual image URL
      button: "Shop Collection",
    },
    {
      title: "MINNEAPOLIS COLLECTION",
      image: "../../assets/image 41.jpg", // Replace with actual image URL
      button: "Shop Collection",
    },
    {
      title: "DEL MAR COLLECTION",
      image: "../../assets/image 42.jpg", // Replace with actual image URL
      button: "Shop Collection",
    },
    {
      title: "ENTRANCE SETS",
      image: "../../assets/image 38.jpg", // Replace with actual image URL
      button: "Shop Now",
      description: "Standard or Mortise Installation",
    },
    {
      title: "TOUCHSCREEN HANDLESETS",
      image: "../../assets/image 39.jpg", // Replace with actual image URL
      button: "Shop Now",
      description: "Available in multiple designs and finishes",
    },
  ];

  return (
    <div className="w-full mx-auto px-4 py-8 overflow-hidden">
      {/* Header */}
      <h2 className="text-center text-2xl font-bold uppercase mb-8 border-b-2 border-stone-500 pb-5">
        Explore Collections
      </h2>

      {/* Collections Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {collections.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center justify-center"
          >
            <h3 className="mt-4 text-lg font-semibold pb-3">{item.title}</h3>
            <img
              src={item.image}
              alt={item.title}
              className="w-[320px] h-[240px] object-cover"
            />
            <button className="mt-2 py-2 px-4 text-black underline underline-offset-4 uppercase text-sm hover:text-gray-950">
              {item.button}
            </button>
          </div>
        ))}
      </div>

      {/* Additional Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {collections.slice(3).map((item, index) => (
          <div
            key={index}
            className="text-center flex flex-col items-center justify-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[600px] h-[400px] object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
            {item.description && (
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            )}
            <button className="mt-2 py-2 px-4 text-black border-2 border-black hover:bg-black hover:text-white uppercase text-sm">
              {item.button}
            </button>
          </div>
        ))}
      </div>

      {/* Pro Section */}
      <div className="bg-black text-white py-6 px-4 mt-12 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="text-4xl mr-4">
            <i className="fas fa-user-circle"></i> {/* Replace with proper icon */}
          </div>
          <div>
            <h3 className="text-lg font-semibold">ARE YOU A BALDWIN PRO?</h3>
            <p className="text-sm">
              Create an account today for additional benefits!
            </p>
          </div>
        </div>
        <div className="flex">
          <button className="bg-white text-black py-2 px-4 uppercase font-semibold text-sm mr-4">
            Sign Up Now
          </button>
          <button className="border border-white py-2 px-4 uppercase font-semibold text-sm">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collections;
