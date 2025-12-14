import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { servicesData } from "../data/services";
import { FaStar, FaCheckCircle, FaTools, FaUserShield, FaClock } from "react-icons/fa";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  
  // URL Filter Logic
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    if (categoryParam) {
      setCategory(categoryParam);
      // Scroll to services section if a filter is clicked from footer
      document.getElementById("services-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      setCategory("All");
    }
  }, [location]);

  const filteredServices = servicesData.filter((service) => {
    return (
      (category === "All" || service.category === category) &&
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const categories = ["All", "Cleaning", "Repair", "Tech", "Automotive"];

  return (
    <div>
      {/* --- HERO SECTION --- */}
      <div className="relative bg-black text-white py-20 rounded-xl mb-12 overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{backgroundImage: 'url(https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000)'}}
        ></div> 
        
        <div className="relative z-10 container mx-auto text-center px-4">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Professional Services, <br/> Right at Your Doorstep
          </h1>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            From home cleaning to tech repairs, ServicesWalay connects you with top-rated experts in minutes.
          </p>

        {}
          <div className="group relative bg-white h-16 rounded-full shadow-2xl max-w-lg mx-auto flex items-center overflow-hidden">
            
          {}
           {}
            <input
              type="text"
              placeholder="What service do you need?"
              className="peer w-full h-full bg-transparent outline-none text-gray-800 transition-all duration-700 ease-in-out 
                         pl-32 
                         group-hover:pl-8 group-hover:pr-32 
                         focus:pl-8 focus:pr-32"
              onChange={(e) => setSearchTerm(e.target.value)}
            />

      {}
      {}
            <button 
              onClick={() => document.getElementById("services-section").scrollIntoView({ behavior: "smooth" })}
              className="absolute left-1 top-1 bottom-1 w-28 bg-blue-600 text-white rounded-full font-bold shadow-lg 
                         transition-all duration-700 ease-in-out 
                         group-hover:left-[calc(100%-7.25rem)] 
                         peer-focus:left-[calc(100%-7.25rem)]"
            >
              Find
            </button>
            
          </div>
      
          {/* --- END SEARCH BAR --- */}

        </div>
      </div>

      {/* --- WHY CHOOSE US --- */}
      <div className="py-12 bg-white rounded-xl shadow-sm mb-12 px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Why Choose ServicesWalay?</h2>
          <p className="text-gray-500 mt-2">We ensure quality, safety, and satisfaction.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-blue-600 text-2xl mb-4">
              <FaUserShield />
            </div>
            <h3 className="text-xl font-bold mb-2">Verified Professionals</h3>
            <p className="text-gray-600 text-sm">Every provider is vetted, background-checked, and trained to ensure safety.</p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-green-600 text-2xl mb-4">
              <FaCheckCircle />
            </div>
            <h3 className="text-xl font-bold mb-2">Satisfaction Guaranteed</h3>
            <p className="text-gray-600 text-sm">We don't just finish the job; we ensure you are happy with the result.</p>
          </div>
          <div className="p-6 border rounded-xl hover:shadow-lg transition">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-yellow-600 text-2xl mb-4">
              <FaClock />
            </div>
            <h3 className="text-xl font-bold mb-2">On-Time Service</h3>
            <p className="text-gray-600 text-sm">We value your time. Our pros arrive on schedule, every single time.</p>
          </div>
        </div>
      </div>

      {/* --- SERVICES LIST SECTION --- */}
      <div id="services-section" className="mb-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Explore Our Services</h2>
          
          {/* Categories Filter */}
          <div className="flex gap-2 mt-4 md:mt-0 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm font-medium ${
                  category === cat ? "bg-blue-600 text-white shadow-md" : "bg-white border text-gray-600 hover:bg-gray-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 border border-gray-100">
                <div className="h-48 overflow-hidden relative">
                   <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                   <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-bold shadow flex items-center">
                     <FaStar className="text-yellow-400 mr-1" /> {service.rating}
                   </span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-blue-500 uppercase tracking-wider">{service.category}</span>
                  <h3 className="text-lg font-bold mt-1 text-gray-800 line-clamp-1">{service.name}</h3>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{service.description}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t">
                    <span className="text-lg font-extrabold text-gray-900">${service.price}</span>
                    <Link to={`/service/${service.id}`} className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-gray-100 rounded-xl">
              <p className="text-gray-500 text-lg">No services found matching your search.</p>
              <button onClick={() => {setCategory("All"); setSearchTerm("")}} className="mt-4 text-blue-600 font-bold hover:underline">Clear Filters</button>
            </div>
          )}
        </div>
      </div>

      {/* --- ABOUT US SECTION --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
           <img 
             src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1000" 
             alt="Team Meeting" 
             className="rounded-2xl shadow-2xl"
           />
        </div>
        <div>
          <h4 className="text-blue-600 font-bold uppercase tracking-wide mb-2">About ServicesWalay</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Empowering Your Life with Expert Help</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            ServicesWalay was born from a simple idea: finding reliable help shouldn't be a struggle. We connect you with skilled professionals who take pride in their work. 
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-green-500 mr-3" /> 100% Money-back Guarantee
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-green-500 mr-3" /> 24/7 Customer Support
            </li>
            <li className="flex items-center text-gray-700">
              <FaCheckCircle className="text-green-500 mr-3" /> Secure Online Payments
            </li>
          </ul>
          <Link to="/" className="bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition">
            Learn More
          </Link>
        </div>
      </div>

      {/* --- CTA BANNER --- */}
      <div className="bg-gray-900 rounded-2xl p-12 text-center text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to fix your home problems?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Join thousands of satisfied customers who trust ServicesWalay for their daily needs.</p>
          <button 
             onClick={() => document.getElementById("services-section").scrollIntoView({ behavior: "smooth" })}
             className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition"
          >
            Get Started Today
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;