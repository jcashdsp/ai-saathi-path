import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Languages, 
  Smartphone, 
  Trophy, 
  Users, 
  Clock, 
  Target,
  Zap,
  Heart
} from "lucide-react";

const features = [
  {
    icon: Languages,
    title: "Dual Language Support",
    description: "Learn in English with Urdu/Hindi subtitles and cultural context",
    badge: "Accessibility First",
    color: "success"
  },
  {
    icon: Smartphone, 
    title: "Mobile Optimized",
    description: "Complete courses on your phone - perfect for Pakistan's mobile-first market",
    badge: "On-the-Go Learning",
    color: "primary"
  },
  {
    icon: Target,
    title: "Practical Focus", 
    description: "No theory - only real projects you can use immediately",
    badge: "Results Driven", 
    color: "accent"
  },
  {
    icon: Clock,
    title: "Micro-Learning",
    description: "Lessons designed for busy lives - 10-30 minutes each",
    badge: "Time Efficient",
    color: "warning"
  },
  {
    icon: Trophy,
    title: "Gamified Progress",
    description: "Earn badges, track streaks, and compete with friends",
    badge: "Stay Motivated",
    color: "level-4"
  },
  {
    icon: Users,
    title: "Community Support", 
    description: "Connect with learners across Pakistan and get help in your language",
    badge: "Never Alone",
    color: "level-2"
  },
  {
    icon: Zap,
    title: "AI-Powered Tutoring",
    description: "Get personalized help and instant feedback on your projects",
    badge: "Smart Learning",
    color: "level-3"
  },
  {
    icon: Heart,
    title: "Cultural Relevance",
    description: "Examples from Pakistani businesses, schools, and family life",
    badge: "Locally Relevant",
    color: "level-5"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose AI Seekho?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the unique challenges of learning technology in South Asia. 
            Our platform is designed specifically for our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className={`p-3 rounded-xl`}
                      style={{ 
                        backgroundColor: `hsl(var(--${feature.color}) / 0.1)`,
                        border: `1px solid hsl(var(--${feature.color}) / 0.2)`
                      }}
                    >
                      <IconComponent 
                        className="h-6 w-6"
                        style={{ color: `hsl(var(--${feature.color}))` }}
                      />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="text-xs"
                      style={{ 
                        backgroundColor: `hsl(var(--${feature.color}) / 0.1)`,
                        color: `hsl(var(--${feature.color}))`
                      }}
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${feature.color})), transparent)`
                  }}
                />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;