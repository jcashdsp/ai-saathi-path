import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-accent/20 rounded-full text-accent-foreground text-sm font-medium">
                🚀 Transform Your Future with AI
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground leading-tight">
                Master AI & 
                <span className="block text-accent"> Unlock Opportunities</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
                From computer basics to building AI-powered solutions. Learn practical skills that matter in Pakistan & South Asia. 
                <span className="font-semibold"> English lessons with Urdu/Hindi support.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Start Learning Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-primary-foreground/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">5</div>
                <div className="text-sm text-primary-foreground/80">Learning Levels</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-primary-foreground/80">Hands-on Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">100%</div>
                <div className="text-sm text-primary-foreground/80">Practical Focus</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-card rounded-3xl p-8 shadow-2xl">
              <img 
                src={heroImage} 
                alt="People learning AI and computer skills together"
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-level opacity-10 rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ✨ AI-Powered
            </div>
            <div className="absolute -bottom-4 -left-4 bg-warning text-warning-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              🌟 Urdu Support
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;