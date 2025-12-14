import { useState } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/services";
import { FaStar } from "react-icons/fa";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredServices = servicesData.filter((service) => {
    return (
      (category === "All" || service.category === category) &&
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const categories = ["All", "Cleaning", "Repair", "Tech"];

  return (
    <div>
      {/* Hero / Filter Section */}
      <div className="my-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Find the Perfect Service</h1>
        
        {/* Search */}
        <input
          type="text"
          placeholder="Search for services..."
          className="border p-3 rounded-lg w-full max-w-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Categories */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full transition-all ${
                category === cat ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredServices.map((service) => (
          <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
            <img src={service.image} alt={service.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">{service.category}</span>
                <span className="flex items-center text-yellow-500 text-sm"><FaStar className="mr-1" /> {service.rating}</span>
              </div>
              <h3 className="text-lg font-bold mt-2">{service.name}</h3>
              <p className="text-gray-500 text-sm mt-1">{service.description.substring(0, 50)}...</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-bold text-gray-800">${service.price}</span>
                <Link to={`/service/${service.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;