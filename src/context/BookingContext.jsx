import { createContext, useState, useEffect, useContext } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  // Load initial state from LocalStorage
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("myBookings");
    return saved ? JSON.parse(saved) : [];
  });

  // Save to LocalStorage whenever bookings change
  useEffect(() => {
    localStorage.setItem("myBookings", JSON.stringify(bookings));
  }, [bookings]);

  const addBooking = (bookingDetails) => {
    setBookings([...bookings, bookingDetails]);
    alert("Service Booked Successfully!");
  };

  const cancelBooking = (id) => {
    setBookings(bookings.filter((b) => b.id !== id));
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, cancelBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);