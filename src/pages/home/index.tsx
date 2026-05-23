import Ads from "@/features/home/components/Ads";
import Hero from "@/features/home/components/Hero";
import Products from "@/features/products/container/Products";
import Footer from "@/layout/Footer";

const HomePage = () => (
  <main>
    <Hero />
    <Products />
    <Ads />
    <Footer />
  </main>
);
export default HomePage;
