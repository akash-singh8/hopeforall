import Navbar from "./components/Navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Hope4All from "./components/Hope4All";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Services from "./components/Services";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hope4all" element={<Hope4All />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/approach" element={<Approach />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
