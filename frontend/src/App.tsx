import Navbar from "./components/Navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Hope4All from "./components/Hope4All";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Services from "./components/Services";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonorPgae from "./components/DonorPgae";
import DonorForm from "./components/DonorForm";

function MainHome() {
  return (
    <>
      <Home />
      <Hope4All />
      <Approach />
      <Contact />
    </>
  );
}
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/donor" element={<DonorPgae />} />
        <Route path="/raise-fund" element={<DonorForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
