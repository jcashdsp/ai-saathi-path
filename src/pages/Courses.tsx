import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Monitor, MessageCircle, Workflow, Building, TrendingUp, Clock, CheckCircle, Play } from "lucide-react";

const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      id: 1,
      title: "Computer Basics",
      subtitle: "Foundation Skills",
      description: "Master mouse, keyboard, internet safety, and basic computer operations",
      duration: "55 mins",
      lessons: 4,
      icon: Monitor,
      color: "level-1",
      progress: 0,
      status: "available",
      route: "/level-1"
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
      progress: 0,
      status: "available",
      route: "/level-2"
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
      progress: 0,
      status: "available",
      route: "/level-3"
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
      progress: 0,
      status: "coming-soon",
      route: "#"
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
      progress: 0,
      status: "coming-soon",
      route: "#"
    }
  ];

  const totalLessons = courses.reduce((sum, course) => sum + course.lessons, 0);
  const completedLessons = 0; // This would come from user progress data
  const overallProgress = (completedLessons / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-primary-foreground hover:text-primary-foreground/80"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              All Courses
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl">
              Complete learning path from computer basics to AI-powered business solutions. 
              Progress through 5 levels designed for South Asian learners.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{Math.round(overallProgress)}%</div>
                <div className="text-sm text-primary-foreground/80">Overall Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{totalLessons}</div>
                <div className="text-sm text-primary-foreground/80">Total Lessons</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-primary-foreground/80">Learning Levels</div>
              </div>
            </div>
            
            <Progress value={overallProgress} className="h-2 bg-primary-foreground/20" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Learning Path */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Your Learning Path</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Follow this structured path from complete beginner to AI entrepreneur. 
            Each level builds on the previous one.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => {
              const IconComponent = course.icon;
              const isAvailable = course.status === "available";
              
              return (
                <Card 
                  key={course.id}
                  className={`relative overflow-hidden transition-all hover:scale-105 hover:shadow-xl ${
                    !isAvailable ? 'opacity-75' : ''
                  }`}
                  style={{
                    background: `linear-gradient(135deg, hsl(var(--${course.color}) / 0.1), hsl(var(--card)))`
                  }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-3 rounded-xl bg-gradient-level">
                        <IconComponent className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Level {course.id}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-accent font-medium">
                      {course.subtitle}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {course.description}
                    </p>
                    
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" />
                        {course.lessons} lessons
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-1" />
                    </div>

                    <Button 
                      className="w-full mt-6" 
                      variant={isAvailable ? "default" : "outline"}
                      disabled={!isAvailable}
                      onClick={() => {
                        if (isAvailable && course.route !== "#") {
                          navigate(course.route);
                        }
                      }}
                    >
                      {!isAvailable ? (
                        "Coming Soon"
                      ) : course.progress > 0 ? (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Continue
                        </>
                      ) : (
                        "Start Course"
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Learning Tips */}
        <Card>
          <CardHeader>
            <CardTitle>Learning Tips for Success</CardTitle>
            <CardDescription>
              Make the most of your AI learning journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">Recommended Learning Approach:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-accent rounded-full"></div>
                    Complete courses in order - each builds on the previous
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-accent rounded-full"></div>
                    Practice exercises actively - don't just watch
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-accent rounded-full"></div>
                    Join the community for support and networking
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-accent rounded-full"></div>
                    Apply skills to your real-life situations
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Study Schedule:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-accent rounded-full"></div>
                    Dedicate 30-60 minutes per day for consistent progress
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-accent rounded-full"></div>
                    Take breaks between lessons to process information
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-accent rounded-full"></div>
                    Review previous lessons before starting new ones
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1 w-1 bg-accent rounded-full"></div>
                    Practice with real examples from your work/life
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Courses;