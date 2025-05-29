import About from "./About";
import AllProducts from "./AllProducts";
import Blog from "./Blog";

export default function HomePage() {
  return (
    <div>
      <AllProducts />
      <About />
      <Blog />
    </div>
  );
}
