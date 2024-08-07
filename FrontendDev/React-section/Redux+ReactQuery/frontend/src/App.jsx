import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import PublicNavbar from "./components/PublicNavbar";
import Login from "./components/Login";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <PublicNavbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
