import { useBooking } from "../context/BookingContext";
import { FaTrash, FaCalendarCheck } from "react-icons/fa";

const Dashboard = () => {
  const { bookings, cancelBooking } = useBooking();

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
        <FaCalendarCheck /> My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl shadow">
          <p className="text-gray-500 text-lg">You haven't booked any services yet.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="p-4">Service</th>
                <th className="p-4">Date & Time</th>
                <th className="p-4">Price</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id} className="border-b hover:bg-gray-50">
                  <td className="p-4 flex items-center gap-3">
                    <img src={booking.image} className="w-12 h-12 rounded object-cover" alt="" />
                    <span className="font-semibold">{booking.serviceName}</span>
                  </td>
                  <td className="p-4">
                    <div className="text-sm font-bold">{booking.date}</div>
                    <div className="text-xs text-gray-500">{booking.time}</div>
                  </td>
                  <td className="p-4 font-bold text-gray-700">${booking.price}</td>
                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold uppercase">
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button 
                      onClick={() => cancelBooking(booking.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Dashboard;