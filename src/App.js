import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Courses from "./Pages/Courses";
import HomePage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Private from "./Pages/PrivatePolicy";
import Privacy from "./Pages/PrivacyPolicy";
import Refund from "./Pages/RefundNReturnPolicy";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import NotFoundPage from "./Pages/NotFoundPage";
import { CopyRight } from "./components/Copy-Rigth";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/programs" element={<Courses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/private-policy" element={<Private />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/refunds-returns" element={<Refund />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <CopyRight />
    </div>
  );
}

export default App;
