import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
