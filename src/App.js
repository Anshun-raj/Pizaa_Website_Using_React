import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Menu from "./Components/Menu";
import Contact from "./Components/Contact";
import Review from "./Components/Review";

function App() {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/menu" element={<Menu />} exact />
        <Route path="/review" element={<Review />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
     
    </div>
  );
}

export default App;
