import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Clock, Users, CheckCircle, Lock, Play, Workflow, Zap, Bot } from "lucide-react";
import Level3Lesson1 from "../components/lessons/Level3Lesson1";

const Level3 = () => {
  const [currentLesson, setCurrentLesson] = useState<number | null>(null);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const lessons = [
    {
      id: 1,
      title: "What is a Workflow?",
      description: "Learn the basics of workflows with real-life Pakistani examples",
      duration: "15-20 min",
      status: "available" as const,
      component: Level3Lesson1,
      icon: Workflow
    },
    {
      id: 2,
      title: "Automation Basics",
      description: "See how computers and AI can automate everyday workflows",
      duration: "15-20 min", 
      status: "coming-soon" as const,
      component: null,
      icon: Zap
    },
    {
      id: 3,
      title: "Your First AI Workflow",
      description: "Build your first automated process combining AI with workflows",
      duration: "20-25 min",
      status: "coming-soon" as const,
      component: null,
      icon: Bot
    }
  ];

  // If viewing a lesson, render that lesson component
  if (currentLesson) {
    const lesson = lessons.find(l => l.id === currentLesson);
    if (lesson?.component) {
      const LessonComponent = lesson.component;
      return <LessonComponent />;
    }
  }

  const progressPercentage = (completedLessons.length / lessons.length) * 100;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Header */}
      <div className="mb-8">
        <Button variant="ghost" className="mb-4" asChild>
          <a href="/" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Levels
          </a>
        </Button>
        
        <Badge variant="secondary" className="mb-4 bg-level-3/10 text-level-3 border-level-3/20">
          Level 3
        </Badge>
        
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-level-3 to-level-3/70 bg-clip-text text-transparent">
          AI Workflows & Automation
        </h1>
        
        <p className="text-xl text-muted-foreground mb-6">
          Learn how to connect AI into step-by-step workflows that save time and automate daily tasks
        </p>
        
        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            50-65 minutes total
          </span>
          <span className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            3 lessons
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{completedLessons.length}/{lessons.length} lessons completed</span>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-muted [&>div]:bg-level-3" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Course Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Course Overview</CardTitle>
              <CardDescription>
                Master the art of creating automated workflows using AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                In this level, you'll learn how to think in workflows - breaking down complex tasks into 
                simple steps that can be automated. Perfect for shopkeepers, students, and anyone who 
                wants to save time on repetitive tasks.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-foreground">Duration:</span>
                  <span className="text-muted-foreground ml-2">50-65 minutes</span>
                </div>
                <div>
                  <span className="font-medium text-foreground">Level:</span>
                  <span className="text-muted-foreground ml-2">Intermediate</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Outcomes */}
          <Card className="border-level-3/20 bg-gradient-to-br from-level-3/5 to-transparent">
            <CardHeader>
              <CardTitle className="text-level-3">What You'll Master</CardTitle>
              <CardDescription>
                Essential skills for creating efficient AI-powered workflows
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-level-3 flex-shrink-0" />
                  <span>🔄 Understand workflows in daily life and business</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-level-3 flex-shrink-0" />
                  <span>⚡ Learn the basics of automation and AI assistance</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-level-3 flex-shrink-0" />
                  <span>🤖 Build your first AI-powered automated workflow</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-level-3 flex-shrink-0" />
                  <span>🏪 Apply workflow thinking to business and family tasks</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Prerequisites */}
          <Card>
            <CardHeader>
              <CardTitle>Prerequisites</CardTitle>
              <CardDescription>
                What you need to know before starting Level 3
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <div>
                  <p className="font-medium text-green-800 dark:text-green-200">Level 2 Completed</p>
                  <p className="text-sm text-green-600 dark:text-green-300">
                    You should know the CLEAR method, translation, and ad creation
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar - Lessons */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Course Lessons</CardTitle>
              <CardDescription>
                {lessons.length} lessons • 50-65 minutes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {lessons.map((lesson) => {
                const IconComponent = lesson.icon;
                const isCompleted = completedLessons.includes(lesson.id);
                const isAvailable = lesson.status === "available";
                
                return (
                  <Card 
                    key={lesson.id} 
                    className={`cursor-pointer transition-all duration-200 ${
                      isAvailable 
                        ? "hover:shadow-md border-level-3/20 hover:border-level-3/40" 
                        : "opacity-60 cursor-not-allowed"
                    } ${isCompleted ? "bg-level-3/5 border-level-3/30" : ""}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className={`p-2 rounded-lg ${
                          isCompleted 
                            ? "bg-level-3/20 text-level-3" 
                            : isAvailable 
                              ? "bg-muted text-level-3" 
                              : "bg-muted text-muted-foreground"
                        }`}>
                          {isCompleted ? (
                            <CheckCircle className="h-4 w-4" />
                          ) : isAvailable ? (
                            <IconComponent className="h-4 w-4" />
                          ) : (
                            <Lock className="h-4 w-4" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">{lesson.title}</h4>
                          <p className="text-xs text-muted-foreground mb-2 line-clamp-2">
                            {lesson.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {lesson.duration}
                            </span>
                            
                            {isAvailable ? (
                              <Button 
                                size="sm" 
                                variant="ghost"
                                onClick={() => setCurrentLesson(lesson.id)}
                                className="h-6 px-2 text-level-3 hover:text-level-3/80 hover:bg-level-3/10"
                              >
                                <Play className="h-3 w-3 mr-1" />
                                Start
                              </Button>
                            ) : (
                              <Badge variant="outline" className="text-xs">
                                Coming Soon
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <Card className="bg-gradient-to-r from-level-3/10 to-level-3/5 border-level-3/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4 text-level-3">
              Ready to Master AI Workflows?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Start with understanding workflows in everyday life, then learn how AI can 
              automate these processes to save you time and effort.
            </p>
            <Button 
              size="lg" 
              onClick={() => setCurrentLesson(1)}
              className="bg-level-3 hover:bg-level-3/90 text-white"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Level 3
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Level3;