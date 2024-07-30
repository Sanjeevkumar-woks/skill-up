import { BestCourses } from "../components/BestCourses";
import { Features } from "../components/Features";
import { Hero } from "../components/Hero";
import { Join } from "../components/Join";
import { MarqueeComponent } from "../components/Marquee";
import { NewsBlogs } from "../components/NewsBlogs";
import { Workshop } from "../components/Workshop";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeComponent />
      <Features />
      <BestCourses />
      <Workshop />
      <NewsBlogs />
      <Join />
    </>
  );
}
