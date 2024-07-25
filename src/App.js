import { BestCourses } from "./components/BestCourses";
import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarqueeComponent } from "./components/Marquee";
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
      </div>
    </div>
  );
}

export default App;
