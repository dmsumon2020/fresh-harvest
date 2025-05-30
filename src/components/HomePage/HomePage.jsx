import About from "./About";
import AllProducts from "./AllProducts";
import Blog from "./Blog";
import Promotion from "./Promotion";
import Slider from "./Slider";
import Testimonial from "./Testimonial";

export default function HomePage() {
  return (
    <div>
      <Slider />
      <AllProducts />
      <About />
      <Promotion />
      <Testimonial />
      <Blog />
    </div>
  );
}
