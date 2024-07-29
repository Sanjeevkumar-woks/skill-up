import { BestCourses } from "./components/BestCourses";
import { CopyRight } from "./components/Copy-Rigth";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Join } from "./components/Join";
import { MarqueeComponent } from "./components/Marquee";
import { NewsBlogs } from "./components/NewsBlogs";
import { Workshop } from "./components/Workshop";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Hero />
        <MarqueeComponent />
        <Features />
        <BestCourses />
        <Workshop />
        <NewsBlogs />
        <Join />
        <Footer />
        <CopyRight />
      </div>
    </div>
  );
}

export default App;
