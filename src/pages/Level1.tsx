import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle, Clock, Play, Monitor, MousePointer, Copy, Shield, Lightbulb } from "lucide-react";
import Level1Lesson1 from "@/components/lessons/Level1Lesson1";
import Level1Lesson2 from "@/components/lessons/Level1Lesson2";
import Level1Lesson3 from "@/components/lessons/Level1Lesson3";
import Level1Lesson4 from "@/components/lessons/Level1Lesson4";

const Level1 = () => {
  const [currentLesson, setCurrentLesson] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const navigate = useNavigate();

  const lessons = [
    {
      id: 1,
      title: "Mouse & Keyboard Mastery",
      description: "Learn essential mouse operations, keyboard shortcuts, and navigation basics",
      duration: "15 mins",
      status: "available",
      component: Level1Lesson1,
      icon: MousePointer
    },
    {
      id: 2,
      title: "Copy, Paste & Search",
      description: "Master text manipulation and effective internet searching techniques",
      duration: "15 mins", 
      status: "available",
      component: Level1Lesson2,
      icon: Copy
    },
    {
      id: 3,
      title: "If This Then That Logic",
      description: "Understand basic automation concepts and logical thinking patterns",
      duration: "15 mins",
      status: "available", 
      component: Level1Lesson3,
      icon: Lightbulb
    },
    {
      id: 4,
      title: "Internet Safety Basics",
      description: "Stay safe online with password security and scam recognition",
      duration: "10 mins",
      status: "available",
      component: Level1Lesson4,
      icon: Shield
    }
  ];

  const progress = (completedLessons.length / lessons.length) * 100;

  const handleLessonComplete = (lessonId: number) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
    setCurrentLesson(null);
  };

  if (currentLesson) {
    const lesson = lessons.find(l => l.id === currentLesson);
    if (lesson) {
      const LessonComponent = lesson.component;
      return (
        <LessonComponent
          onComplete={() => handleLessonComplete(currentLesson)}
          onBack={() => setCurrentLesson(null)}
        />
      );
    }
  }

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
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              Level 1
            </Badge>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Computer Basics - Foundation Skills
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl">
              Master the essential computer skills that form the foundation for your AI learning journey. 
              Perfect for complete beginners.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{Math.round(progress)}%</div>
                <div className="text-sm text-primary-foreground/80">Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">55</div>
                <div className="text-sm text-primary-foreground/80">Minutes Total</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">4</div>
                <div className="text-sm text-primary-foreground/80">Lessons</div>
              </div>
            </div>
            
            <Progress value={progress} className="h-2 bg-primary-foreground/20" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Course Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="h-5 w-5" />
                  Course Overview
                </CardTitle>
                <CardDescription>
                  Build essential computer skills step by step
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  This foundation course covers the basic computer skills every modern learner needs. 
                  You'll learn to navigate with confidence, manipulate text effectively, understand 
                  simple automation concepts, and stay safe online.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">What You'll Learn:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Essential mouse and keyboard operations</li>
                      <li>• Text selection, copying, and pasting</li>
                      <li>• Effective internet searching techniques</li>
                      <li>• Basic automation thinking patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">You'll Be Able To:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Navigate any computer confidently</li>
                      <li>• Find information online quickly</li>
                      <li>• Understand basic logic concepts</li>
                      <li>• Protect yourself from online threats</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Prerequisites */}
            <Card>
              <CardHeader>
                <CardTitle>Prerequisites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This course is designed for complete beginners. You only need:
                </p>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Access to a computer or laptop
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Basic curiosity to learn
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Internet connection
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    Willingness to practice
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lessons sidebar */}
          <div className="space-y-6">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-lg">Lessons</CardTitle>
                <CardDescription>
                  {completedLessons.length} of {lessons.length} completed
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {lessons.map((lesson) => {
                  const IconComponent = lesson.icon;
                  const isCompleted = completedLessons.includes(lesson.id);
                  const isAvailable = lesson.status === "available";
                  
                  return (
                    <div key={lesson.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${
                          isCompleted 
                            ? 'bg-success text-success-foreground' 
                            : isAvailable 
                              ? 'bg-primary text-primary-foreground' 
                              : 'bg-muted text-muted-foreground'
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : (
                            <IconComponent className="h-4 w-4" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm mb-1">{lesson.title}</h3>
                          <p className="text-xs text-muted-foreground mb-2 leading-relaxed">
                            {lesson.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {lesson.duration}
                            </div>
                            {isAvailable && !isCompleted && (
                              <Button 
                                size="sm" 
                                onClick={() => setCurrentLesson(lesson.id)}
                                className="h-7 px-3 text-xs"
                              >
                                <Play className="h-3 w-3 mr-1" />
                                Start
                              </Button>
                            )}
                            {isCompleted && (
                              <Badge variant="outline" className="text-xs">
                                Completed
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Call to action */}
            <Card className="bg-gradient-level text-primary-foreground border-0">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold mb-2">Ready to Start?</h3>
                <p className="text-sm text-primary-foreground/90 mb-4">
                  Begin your journey with essential computer skills that will prepare you for AI learning.
                </p>
                <Button 
                  variant="secondary" 
                  className="w-full"
                  onClick={() => setCurrentLesson(1)}
                  disabled={completedLessons.includes(1)}
                >
                  {completedLessons.includes(1) ? "Lesson 1 Completed" : "Start Lesson 1"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level1;