import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ServiceDetails from "./pages/ServiceDetails";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Navigation from "./components/Navigation";
const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/:service" element={<ServiceDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
