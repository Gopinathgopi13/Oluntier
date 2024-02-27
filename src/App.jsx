import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Service from "./Components/Service/Service";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Categories from "./Components/Service/Categories";
;

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/service" element={<Service></Service>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/categories/:id" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
