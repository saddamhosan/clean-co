import { Route, Routes } from "react-router-dom";
import About from "./Component/Pages/About/About";
import Contact from "./Component/Pages/Contact/Contact";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login/Login";
import Register from "./Component/Pages/Register/Register";
import Services from "./Component/Pages/Services/Services";
import Navbar from "./Component/Shared/Navbar";


function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
