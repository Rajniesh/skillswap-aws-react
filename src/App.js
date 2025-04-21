import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Messages from "./pages/Messages";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import NotFound from "./pages/NotFound";
import Community from "./pages/Community";
import Navbar from "./components/Navbar";
import ProfilePage from "./pages/ProfilePage";
function App() {
  return (
    <>
      <Navbar /> {/* This will navbar on everypage*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/register" element={<Register />} />
        <Route path="/community" element={<Community />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
