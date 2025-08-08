import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import RoomCard from "../components/RoomCard";
import BookingForm from "../components/BookingForm";
import Dining from "../components/Dining";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BookingForm />
      <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", padding: "20px"}}>
        <RoomCard image="https://plus.unsplash.com/premium_photo-1661879252375-7c1db1932572?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" title="Deluxe Room" price="120" />
        <RoomCard image="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" title="Suite Room" price="200" />
        <RoomCard image="https://plus.unsplash.com/premium_photo-1674676471380-1258cb31b3ac?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D" title="Standard Room" price="80" />
      </div>
      <Dining />
      <Footer />
    </>
  );
}