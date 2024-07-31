import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import HomePage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import NotFoundPage from "./Pages/NotFoundPage";
import { CopyRight } from "./components/Copy-Rigth";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import PrivatePolicy from "./Pages/PrivatePolicy";
import RefundReturnPolicy from "./Pages/RefundNReturnPolicy";
import Affiliate from "./Pages/Affiliate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Affiliate" element={<Affiliate />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<Courses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/private-policy" element={<PrivatePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/refunds-returns" element={<RefundReturnPolicy />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <CopyRight />
      </BrowserRouter>
    </div>
  );
}

export default App;
