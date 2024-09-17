import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <ImageGallery />
      </Router>
    </AuthProvider>
  );
}

export default App;
