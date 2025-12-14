import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BookingProvider } from "./context/BookingContext";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import BookingPage from "./pages/BookingPage";
import Dashboard from "./pages/Dashboard";
import { FaCalendarAlt, FaHome } from "react-icons/fa";
import './index.css'; // <--- THIS LINE IS CRITICAL

function App() {
  return (
    <BookingProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
          {/* Navbar */}
          <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-2xl font-bold text-blue-600">ServicePro</Link>
              <div className="flex gap-6">
                <Link to="/" className="flex items-center gap-2 hover:text-blue-500"><FaHome /> Home</Link>
                <Link to="/dashboard" className="flex items-center gap-2 hover:text-blue-500"><FaCalendarAlt /> My Bookings</Link>
              </div>
            </div>
          </nav>

          {/* Routes */}
          <div className="container mx-auto p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/service/:id" element={<ServiceDetails />} />
              <Route path="/book/:id" element={<BookingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
        </div>
      </Router>
    </BookingProvider>
  );
}

export default App;