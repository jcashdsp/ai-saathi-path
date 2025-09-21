import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import LearningLevels from "@/components/LearningLevels";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <LearningLevels />
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
