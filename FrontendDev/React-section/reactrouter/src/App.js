// import logo from "./logo.svg";
import "./App.css";
import "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
