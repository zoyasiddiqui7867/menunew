import React, { useState, useEffect } from 'react';

const categories = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snacks', 'Drinks'];

const MenuSection = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch('https://easydevrestoapi.vercel.app/menu');
        if (!res.ok) throw new Error('Failed to fetch menu');
        const data = await res.json();
        setMenuItems(data);
        setFilteredItems(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredItems(menuItems);
    } else {
      const filtered = menuItems.filter(
        (item) =>
          item.category?.toLowerCase() === selectedCategory.toLowerCase()
      );
      setFilteredItems(filtered);
    }
  }, [selectedCategory, menuItems]);

  if (loading) return <p className="text-center py-10">Loading menu...</p>;
  if (error) return <p className="text-center py-10 text-red-600">{error}</p>;
  if (filteredItems.length === 0)
    return <p className="text-center py-10">No menu items found.</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16" id="menu">
      <h3 className="text-3xl font-bold text-center mb-6">Our Menu</h3>

      {/* Category Filter Buttons */}
      <div className="flex justify-center mb-8 space-x-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition mb-2
              ${
                selectedCategory === cat
                  ? 'bg-teal-900 text-white'
                  : 'bg-teal-600 text-teal-200 hover:bg-teal-800'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-gray-800"
          >
            <img
              src={item.image}
              alt={item.name || item.title || 'Dish'}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">
              {item.name || item.title || item.dish || 'Dish Name'}
            </h4>
            <p className="text-gray-600 mb-2">{item.description}</p>
            <span className="text-teal-700 font-bold">
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;


