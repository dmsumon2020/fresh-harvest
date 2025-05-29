import About from "./About";
import AllProducts from "./AllProducts";
import Blog from "./Blog";
import Testimonial from "./Testimonial";

export default function HomePage() {
  return (
    <div>
      <AllProducts />
      <About />
      <Testimonial />
      <Blog />
    </div>
  );
}
