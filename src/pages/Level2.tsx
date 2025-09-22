import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, MessageCircle, Play, Lock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Import lesson components
import Level2Lesson1 from "@/components/lessons/Level2Lesson1";
import Level2Lesson2 from "@/components/lessons/Level2Lesson2";
import Level2Lesson3 from "@/components/lessons/Level2Lesson3";
import Level2Lesson4 from "@/components/lessons/Level2Lesson4";
import Level2Lesson5 from "@/components/lessons/Level2Lesson5";

// Import progress utilities
import { getUserProgress, getLevelProgress, isLessonCompleted } from "@/lib/progress";
import { LessonCompletion } from "@/components/LessonCompletion";

const Level2 = () => {
  const [currentLesson, setCurrentLesson] = useState<number | null>(null);
  const [showCompletion, setShowCompletion] = useState<{
    lessonId: string;
    title: string;
    score?: number;
    timeSpent?: number;
    isLastLesson?: boolean;
  } | null>(null);
  
  const userProgress = getUserProgress();

  const lessons = [
    {
      id: 1,
      lessonId: "lesson-1",
      title: "Myth vs Reality of AI",
      description: "Separate facts from fiction and reduce AI fears",
      duration: "15-20 min",
      status: "available",
      component: Level2Lesson1
    },
    {
      id: 2,
      lessonId: "lesson-2", 
      title: "How to Ask Questions",
      description: "Master the CLEAR method for better AI responses",
      duration: "20-25 min", 
      status: "available",
      component: Level2Lesson2
    },
    {
      id: 3,
      lessonId: "lesson-3",
      title: "Translate & Simplify",
      description: "Use AI to bridge language gaps and simplify complex info",
      duration: "15-20 min",
      status: "available", 
      component: Level2Lesson3
    },
    {
      id: 4,
      lessonId: "lesson-4",
      title: "Shopkeeper Ad Project",
      description: "Create your first AI-powered business advertisement",
      duration: "20-25 min",
      status: "available",
      component: Level2Lesson4
    },
    {
      id: 5,
      lessonId: "lesson-5",
      title: "Review & Practice",
      description: "Consolidate skills and prepare for Level 3",
      duration: "10-15 min",
      status: "available",
      component: Level2Lesson5
    }
  ];

  const completionRate = getLevelProgress(2, lessons.length);
  const completedLessons = lessons.filter(lesson => 
    isLessonCompleted(2, lesson.lessonId)
  );

  // Handle lesson completion
  const handleLessonComplete = (lessonId: number, score?: number, timeSpent?: number) => {
    const lesson = lessons.find(l => l.id === lessonId);
    if (!lesson) return;

    const isLastLesson = lessonId === lessons.length;
    
    setShowCompletion({
      lessonId: lesson.lessonId,
      title: lesson.title,
      score,
      timeSpent,
      isLastLesson
    });
  };

  // Handle continuing from completion screen
  const handleContinueFromCompletion = () => {
    if (!showCompletion) return;

    const currentLessonIndex = lessons.findIndex(l => l.lessonId === showCompletion.lessonId);
    
    if (showCompletion.isLastLesson) {
      // Navigate to Level 3 or back to main menu
      setCurrentLesson(null);
      setShowCompletion(null);
    } else {
      // Go to next lesson
      const nextLesson = lessons[currentLessonIndex + 1];
      if (nextLesson) {
        setCurrentLesson(nextLesson.id);
        setShowCompletion(null);
      }
    }
  };

  // Handle going back to level overview
  const handleBackToOverview = () => {
    setCurrentLesson(null);
    setShowCompletion(null);
  };

  // Show completion screen
  if (showCompletion) {
    return (
      <LessonCompletion
        levelId={2}
        lessonId={showCompletion.lessonId}
        lessonTitle={showCompletion.title}
        score={showCompletion.score}
        timeSpent={showCompletion.timeSpent}
        isLastLesson={showCompletion.isLastLesson}
        onContinue={handleContinueFromCompletion}
      />
    );
  }

  // If viewing a specific lesson
  if (currentLesson) {
    const lesson = lessons.find(l => l.id === currentLesson);
    if (lesson?.component) {
      const LessonComponent = lesson.component;
      return (
        <LessonComponent 
          onComplete={() => handleLessonComplete(lesson.id)}
          onBack={handleBackToOverview}
        />
      );
    }
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to All Levels
          </Link>
          
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-3 rounded-xl bg-gradient-level">
              <MessageCircle className="h-8 w-8 text-primary-foreground" />
            </div>
            <Badge variant="outline" className="text-sm">
              Level 2
            </Badge>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Talking to AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Master AI communication: debunk myths, ask smart questions, translate languages, and create business ads
          </p>
          
          {/* Progress */}
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{completedLessons.length}/{lessons.length} lessons</span>
            </div>
            <Progress value={completionRate} className="h-2" />
          </div>

          {/* Progress Message */}
          {completedLessons.length > 0 && (
            <div className="mt-4">
              <Badge className="bg-success text-success-foreground">
                🎉 {completedLessons.length} lesson{completedLessons.length !== 1 ? 's' : ''} completed!
              </Badge>
            </div>
          )}
        </div>

        {/* Course Overview */}
        <Card className="mb-8 border-level-2/20 bg-gradient-to-r from-level-2/5 to-transparent">
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-foreground">90 mins</div>
                <p className="text-sm text-muted-foreground">Total Duration</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">5</div>
                <p className="text-sm text-muted-foreground">Practical Lessons</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">🇵🇰</div>
                <p className="text-sm text-muted-foreground">Pakistani Context</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Outcomes */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>What You'll Master</CardTitle>
            <CardDescription>
              By the end of Level 2, you'll be confidently communicating with AI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "🎯 Distinguish AI myths from reality",
                "❓ Ask effective questions using the CLEAR method", 
                "🌍 Translate between English, Urdu, and Hindi",
                "📄 Simplify complex documents and information",
                "📱 Create business ads and marketing content",
                "🏪 Apply AI to real Pakistani business scenarios",
                "👨‍👩‍👧‍👦 Help family members with AI tools",
                "🚀 Feel confident using AI for daily tasks"
              ].map((outcome, index) => (
                <div key={index} className="flex items-start gap-3 text-sm">
                  <div className="text-lg flex-shrink-0">{outcome.split(' ')[0]}</div>
                  <span>{outcome.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Lessons */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Course Lessons</h2>
          
          {lessons.map((lesson, index) => {
            const isCompleted = isLessonCompleted(2, lesson.lessonId);
            const lessonProgress = userProgress.lessons.find(
              l => l.levelId === 2 && l.lessonId === lesson.lessonId
            );
            
            return (
              <Card 
                key={lesson.id} 
                className={`transition-all hover:shadow-lg ${
                  lesson.status === 'available' ? 'cursor-pointer hover:border-level-2/30' : 'opacity-60'
                } ${
                  isCompleted ? 'border-success/30 bg-success/5' : ''
                }`}
                onClick={() => lesson.status === 'available' && setCurrentLesson(lesson.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      {/* Lesson Number */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${
                        isCompleted 
                          ? 'bg-success text-success-foreground' 
                          : lesson.status === 'available'
                          ? 'bg-level-2 text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {isCompleted ? 
                          <CheckCircle className="h-6 w-6" /> : 
                          lesson.id
                        }
                      </div>
                      
                      {/* Lesson Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold text-foreground">
                            {lesson.title}
                          </h3>
                          {lesson.status === 'coming-soon' && (
                            <Badge variant="outline" className="text-xs">
                              Coming Soon
                            </Badge>
                          )}
                          {isCompleted && (
                            <Badge className="bg-success text-success-foreground text-xs">
                              ✅ Complete
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">
                          {lesson.description}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {lesson.duration}
                          </div>
                          {lessonProgress?.quizScore && (
                            <div className="flex items-center gap-1">
                              <span>Score: {lessonProgress.quizScore}%</span>
                            </div>
                          )}
                          <div className="flex items-center gap-1">
                            {lesson.status === 'available' ? (
                              <Play className="h-3 w-3" />
                            ) : (
                              <Lock className="h-3 w-3" />
                            )}
                            {lesson.status === 'available' ? 'Ready to start' : 'Coming soon'}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    {lesson.status === 'available' && (
                      <Button 
                        variant={isCompleted ? "outline" : "default"}
                        size="sm"
                      >
                        {isCompleted ? 'Review' : 'Start'}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Prerequisites Check */}
        <Card className="mt-8 border-warning/20 bg-warning/5">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-warning-foreground">
              ⚡ Prerequisites Check
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Make sure you've completed Level 1 skills before starting:
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              {[
                "✅ Comfortable with mouse and keyboard",
                "✅ Know how to copy and paste text",
                "✅ Understand IF-THEN logic thinking",
                "✅ Basic internet safety awareness"
              ].map((prereq, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="text-success">{prereq.split(' ')[0]}</div>
                  <span>{prereq.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-8">
          {lessons.some(l => l.status === 'available') && (
            <Button 
              size="lg" 
              onClick={() => {
                // Find first incomplete lesson or first lesson
                const nextLesson = lessons.find(l => !isLessonCompleted(2, l.lessonId)) || lessons[0];
                setCurrentLesson(nextLesson.id);
              }}
              className="px-8 py-6 text-lg"
            >
              {completedLessons.length > 0 ? 'Continue Learning' : 'Start Level 2'}
            </Button>
          )}
          
          {/* Progress Summary */}
          {completedLessons.length > 0 && (
            <div className="mt-4 text-sm text-muted-foreground">
              <span>Current Points: </span>
              <Badge variant="outline" className="font-bold">
                {userProgress.points}
              </Badge>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Level2;