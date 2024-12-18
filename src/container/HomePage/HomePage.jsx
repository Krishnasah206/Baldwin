import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

const HomePage = () => {
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (section) => {
    setDropdown(dropdown === section ? null : section);
  };

  // Dropdown menus array
  const menus = [
    {
      title: "Door Hardware",
      items: [
        "Handles and Knobs",
        "Locks and Deadbolts",
        "Hinges",
        "Door Stops and Holders",
        "Door Closers",
      ],
    },
    {
      title: "Accessories",
      items: [
        "Bathroom Accessories",
        "Cabinet Accessories",
        "Miscellaneous Hardware",
        "Decorative Additions",
      ],
    },
    {
      title: "Cabinet Hardware", // No items
    },
    {
      title: "Lighting",
      items: [
        "Indoor Lighting",
        "Outdoor Lighting",
        "Specialized Lighting",
        "Lighting Accessories",
      ],
    },
    {
      title: "Lock Parts",
      items: [
        "Replacement Components",
        "Smart Lock Add-Ons",
        "Handles and Knobs",
        "Installation Kits",
        "Rekeying Tools",
      ],
    },
    {
      title: "Ornaments", // No items
    },
    {
      title: "Finishes", // No items
    },
    {
      title: "Our Story", // No items
    },
  ];

  return (
    <div className="homepage overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-screen flex flex-col text-white text-center pt-12"
        style={{ backgroundImage: "url('../../assets/Homepage 1.jpg')" }}
      >
        {/* Navigation Links */}
        <nav className="bg-transparent h-[250px] text-white w-full border-gray-900 py-2 z-20 mt-4">
          <ul className="flex justify-center text-sm space-x-6">
            {/* Dropdown Menu Items */}
            {menus.map((menu, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => toggleDropdown(menu.title)}
                onMouseLeave={() => toggleDropdown(null)}
              >
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm"
                >
                  {menu.title}
                  {/* Render arrows only if the menu has items */}
                  {menu.items && dropdown === menu.title && <FaAngleUp size={12} />}
                  {menu.items && dropdown !== menu.title && <FaAngleDown size={12} />}
                </button>

                {/* Dropdown Content */}
                {dropdown === menu.title && menu.items && (
                  <div
                    key={idx}
                    className="top-full left-0 z-50 mt-2 w-56 rounded-md shadow-lg bg-gray-700"
                  >
                    <div className="py-1">
                      {menu.items.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-600"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Hero Content */}
        <div className="justify-center items-center">
          <div className="text-center mt-15">
            <h2 className="text-4xl font-bold mb-3 overflow-hidden">Experience Luxury</h2>
            <p className="text-lg mb-4">Largest Inventory. Best Prices.</p>
            <button className="bg-white text-black px-6 py-2 text-lg font-medium hover:bg-black hover:text-white border border-transparent hover:border-white transition">
              Shop Now
            </button>
          </div>
        </div>
        

        {/* Footer Notice */}
        <div className="absolute bottom-0 bg-black w-full text-center py-2">
          <p className="text-xs">
            🔑 FREE KEYING SERVICE: Key new locks to your existing Baldwin key or match them all
            for an easy install upon arrival.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
