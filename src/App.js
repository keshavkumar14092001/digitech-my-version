import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Carrers from "./pages/Carrers";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<AboutUs />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/carrers' element={<Carrers />} />
          <Route exact path='/industries' element={<Industries />} />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;