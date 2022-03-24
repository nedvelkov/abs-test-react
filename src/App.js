import React from "react";
import Navbar from "./components/Navbar";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import FindFlights from "./pages/FindFlights";
import BookSeat from "./pages/BookSeat";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/details" element={<Detail />} />
        <Route path="/findflights" element={<FindFlights />} />
        <Route path="/bookseat" element={<BookSeat />} />
      </Routes>
    </>
  );
}

export default App;
