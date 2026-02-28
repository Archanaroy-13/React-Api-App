import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ApiShowcase from "@/components/ApiShowcase";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <HeroSection />
      <FeaturesSection />
      <ApiShowcase />
      <AboutSection />
    </main>
    <Footer />
  </div>
);

export default Index;
