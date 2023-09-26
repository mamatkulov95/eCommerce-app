import NewProducts from "@/components/newProducts";
import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";

export default function Home() {
  return (
    <div className="app">
      <Hero />
      <NewProducts />
      <Instagram />
    </div>
  );
}
