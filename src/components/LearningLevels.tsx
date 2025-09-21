import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Monitor, MessageCircle, Workflow, Building, TrendingUp, ArrowRight } from "lucide-react";

const learningLevels = [
  {
    id: 1,
    title: "Computer Basics",
    subtitle: "Foundation Skills",
    description: "Master mouse, keyboard, internet safety, and basic computer operations",
    duration: "55 mins",
    lessons: 4,
    icon: Monitor,
    color: "level-1",
    topics: ["Mouse & Keyboard", "Copy/Paste/Search", "If This Then That", "Internet Safety"],
    completed: false
  },
  {
    id: 2,
    title: "Talking to AI", 
    subtitle: "Communication Skills",
    description: "Master AI communication: debunk myths, ask smart questions, translate languages, and create business ads",
    duration: "90 mins",
    lessons: 5,
    icon: MessageCircle,
    color: "level-2", 
    topics: ["AI Myths vs Reality", "CLEAR Question Method", "Translate & Simplify", "Shopkeeper Ad Project", "Family Business Helper"],
    completed: false
  },
  {
    id: 3,
    title: "Workflows",
    subtitle: "Automation Basics", 
    description: "Build your first automated workflows and time-saving systems",
    duration: "60 mins",
    lessons: 4,
    icon: Workflow,
    color: "level-3",
    topics: ["What is Workflow?", "WhatsApp → Sheet", "Daily Reminders", "Auto Translate"],
    completed: false
  },
  {
    id: 4,
    title: "Real-Life Projects",
    subtitle: "Applied Learning",
    description: "Create actual AI-powered solutions for shops, schools, and families", 
    duration: "75 mins",
    lessons: 3,
    icon: Building,
    color: "level-4",
    topics: ["Auto-Reply Bot", "Teacher Assistant", "Family Reminder Bot"],
    completed: false
  },
  {
    id: 5,
    title: "Business & Earning",
    subtitle: "Income Generation",
    description: "Turn your AI skills into freelancing opportunities and local services",
    duration: "70 mins", 
    lessons: 3,
    icon: TrendingUp,
    color: "level-5",
    topics: ["Find Pain Points", "Package AI Services", "Freelancing Tips"],
    completed: false
  }
];

const LearningLevels = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Learning Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Progress through 5 carefully designed levels. Each builds on the previous, 
            taking you from complete beginner to AI-powered entrepreneur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {learningLevels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <Card 
                key={level.id} 
                className={`relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl ${
                  index === 2 ? 'lg:col-span-1 lg:col-start-2' : ''
                } ${index >= 3 ? 'md:col-span-1' : ''}`}
                style={{
                  background: `linear-gradient(135deg, hsl(var(--${level.color}) / 0.1), hsl(var(--card)))`
                }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className={`p-3 rounded-xl bg-gradient-level`}>
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Level {level.id}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{level.title}</CardTitle>
                  <CardDescription className="text-accent font-medium">
                    {level.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {level.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {level.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <CheckCircle className="h-4 w-4" />
                      {level.lessons} lessons
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-foreground">What you'll learn:</div>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {level.topics.map((topic, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="h-1 w-1 bg-accent rounded-full"></div>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button 
                    className="w-full mt-6" 
                    variant={level.id === 1 || level.id === 2 ? "default" : "outline"}
                    onClick={() => {
                      if (level.id === 2) {
                        window.location.href = '/level-2';
                      }
                    }}
                  >
                    {level.id === 1 ? "Start Here" : level.id === 2 ? "Start Level 2" : "Coming Soon"}
                  </Button>
                </CardContent>

                {/* Level connector line */}
                {index < learningLevels.length - 1 && (
                  <div className="hidden lg:block absolute -right-8 top-1/2 w-16 h-0.5 bg-gradient-to-r from-border to-transparent"></div>
                )}
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="px-8 py-6 text-lg">
            Start Your Journey Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LearningLevels;