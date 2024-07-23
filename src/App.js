import { Features } from "./components/Features";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MarqueeComponent } from "./components/Marquee";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Hero />
        <MarqueeComponent />
        <Features />
      </div>
    </div>
  );
}

export default App;
