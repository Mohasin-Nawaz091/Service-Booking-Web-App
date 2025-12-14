import { useParams, Link } from "react-router-dom";
import { servicesData } from "../data/services";

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === parseInt(id));

  if (!service) return <div>Service not found</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden my-10 flex flex-col md:flex-row">
      <img src={service.image} alt={service.name} className="w-full md:w-1/2 object-cover h-64 md:h-auto" />
      <div className="p-8 md:w-1/2 flex flex-col justify-center">
        <span className="text-blue-600 font-semibold">{service.category}</span>
        <h1 className="text-3xl font-bold mt-2">{service.name}</h1>
        <p className="text-gray-600 mt-4">{service.description}</p>
        <div className="mt-6 text-2xl font-bold text-gray-800">${service.price}</div>
        
        <Link 
          to={`/book/${service.id}`}
          className="mt-8 block w-full text-center bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceDetails;