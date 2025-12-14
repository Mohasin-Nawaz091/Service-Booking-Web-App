import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { servicesData } from "../data/services";
import { useBooking } from "../context/BookingContext";

const BookingPage = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === parseInt(id));
  const { addBooking } = useBooking();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    notes: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBooking = {
      id: Date.now(), // Unique ID for the booking
      serviceName: service.name,
      price: service.price,
      image: service.image,
      ...formData,
      status: "Confirmed"
    };
    addBooking(newBooking);
    navigate("/dashboard");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6">Book: {service.name}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Your Name</label>
          <input required type="text" className="w-full border p-2 rounded mt-1" 
            onChange={(e) => setFormData({...formData, name: e.target.value})} />
        </div>
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input required type="date" className="w-full border p-2 rounded mt-1" 
              onChange={(e) => setFormData({...formData, date: e.target.value})} />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">Time</label>
            <input required type="time" className="w-full border p-2 rounded mt-1" 
              onChange={(e) => setFormData({...formData, time: e.target.value})} />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Notes</label>
          <textarea className="w-full border p-2 rounded mt-1" rows="3"
            onChange={(e) => setFormData({...formData, notes: e.target.value})} ></textarea>
        </div>
        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700">
          Confirm Booking (${service.price})
        </button>
      </form>
    </div>
  );
};

export default BookingPage;