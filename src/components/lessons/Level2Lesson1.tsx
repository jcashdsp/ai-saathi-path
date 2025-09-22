import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, AlertTriangle, Lightbulb, Users, Zap, ArrowLeft, ArrowRight } from "lucide-react";
import { TrueFalseQuiz, type TrueFalseQuestion } from "@/components/quiz/TrueFalseQuiz";
import { completeLesson, getLessonProgress } from "@/lib/progress";

interface Level2Lesson1Props {
  onComplete?: () => void;
  onBack?: () => void;
}

const Level2Lesson1: React.FC<Level2Lesson1Props> = ({ onComplete, onBack }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime] = useState(Date.now());
  
  const lessonProgress = getLessonProgress(2, "lesson-1");

  // Quiz questions based on the myth vs reality content
  const quizQuestions: TrueFalseQuestion[] = [
    {
      id: "q1",
      question: "AI has feelings and consciousness like humans do",
      correct: false,
      explanation: "AI is an advanced calculator that follows patterns - it has no emotions or awareness. It processes data and generates responses but doesn't experience feelings.",
      context: "AI Nature"
    },
    {
      id: "q2", 
      question: "AI chatbots are already helping banks in Pakistan answer customer questions 24/7",
      correct: true,
      explanation: "Yes! HBL and other Pakistani banks use AI chatbots to help customers with basic questions anytime. This is a real-world application of AI in Pakistan today.",
      context: "Pakistani AI Use"
    },
    {
      id: "q3",
      question: "AI always gives 100% correct answers and never makes mistakes",
      correct: false,
      explanation: "AI can make errors, especially with local information or new situations. It's only as good as the data it was trained on and should always be double-checked.",
      context: "AI Limitations"
    },
    {
      id: "q4",
      question: "You need to be a programmer to ask AI questions and get useful answers",
      correct: false,
      explanation: "Anyone who can type a question can benefit from AI tools. You don't need programming knowledge to use ChatGPT, Google Translate, or other AI applications.",
      context: "AI Accessibility"
    },
    {
      id: "q5",
      question: "AI can translate between Urdu and English instantly",
      correct: true,
      explanation: "Yes! Google Translate, Microsoft Translator, and other AI tools can translate between Urdu and English in real-time, helping with communication and learning.",
      context: "Translation AI"
    }
  ];

  const handleQuizComplete = (score: number, correct: number, answers: any[]) => {
    setQuizCompleted(true);
    const timeSpent = Date.now() - startTime;
    
    // Save lesson completion with quiz result
    completeLesson(2, "lesson-1", {
      score,
      totalQuestions: quizQuestions.length,
      correct,
      passed: score >= 70,
      timeSpent,
      answers
    }, timeSpent);

    // Auto-advance after a short delay if passed
    if (score >= 70) {
      setTimeout(() => {
        onComplete?.();
      }, 2000);
    }
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleBackToLesson = () => {
    setShowQuiz(false);
    setQuizCompleted(false);
  };

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-8">
            <Button
              variant="ghost"
              onClick={handleBackToLesson}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Lesson
            </Button>
            
            <Badge variant="outline" className="mb-4">
              Level 2 • Lesson 1 • Quiz
            </Badge>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
              Test Your AI Knowledge
            </h1>
            <p className="text-muted-foreground">
              Let's see how well you can separate AI myths from reality
            </p>
          </div>

          <TrueFalseQuiz
            questions={quizQuestions}
            title="Myth vs Reality Quiz"
            description="Identify whether each statement is a myth or reality about AI"
            onComplete={handleQuizComplete}
            passingScore={70}
          />

          {quizCompleted && (
            <div className="mt-8 text-center">
              <Button onClick={onComplete} size="lg" className="mr-4">
                Continue to Next Lesson <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={handleBackToLesson}>
                Review Lesson
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Button
              variant="ghost"
              onClick={onBack}
              size="sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Level 2
            </Button>
            
            <Badge variant="outline">
              Level 2 • Lesson 1
            </Badge>

            {lessonProgress?.completed && (
              <Badge className="bg-success text-success-foreground">
                ✅ Completed
              </Badge>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Myth vs Reality of AI
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              15-20 minutes
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Clear AI misconceptions
            </div>
          </div>
        </div>

        {/* Learning Objective */}
        <Card className="mb-8 border-level-2/20 bg-gradient-to-r from-level-2/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-level-2" />
              Learning Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Distinguish between common myths and real truths about AI, reducing fear and confusion while building realistic expectations.
            </p>
          </CardContent>
        </Card>

        {/* Video Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📹 Video Lesson</CardTitle>
            <CardDescription>
              Watch the full lesson with English audio and Urdu/Hindi subtitles
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
              <div className="text-center">
                <div className="h-16 w-16 bg-level-2 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="text-muted-foreground">Video player loading...</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Available in: English (Audio) | اردو/हिंदी (Subtitles)
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-success rounded-full"></div>
                Introduction (2 min)
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-warning rounded-full"></div>
                Common Myths (6 min)
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-level-2 rounded-full"></div>
                Real Examples (5 min)
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Myths vs Reality */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Common AI Myths vs Reality
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                myth: "AI is like a human brain with feelings and consciousness",
                reality: "AI is an advanced calculator that follows patterns - no emotions or awareness",
                icon: "🧠"
              },
              {
                myth: "AI will take all our jobs and replace humans completely",
                reality: "AI changes work and creates new jobs like AI trainers, supervisors, and engineers",
                icon: "💼"
              },
              {
                myth: "AI knows everything and never makes mistakes",
                reality: "AI only knows what it's trained on and can make errors, especially with local info",
                icon: "🎯"
              },
              {
                myth: "AI is dangerous like in movies (robots taking over)",
                reality: "AI is a helpful tool for education, healthcare, business when used responsibly",
                icon: "🛡️"
              },
              {
                myth: "Only tech experts and programmers can use AI",
                reality: "Anyone who can type a question can benefit from AI tools",
                icon: "👥"
              },
              {
                myth: "AI is only available in English and for foreign countries",
                reality: "AI works in Urdu, Hindi, and helps with local Pakistani problems",
                icon: "🌍"
              }
            ].map((item, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive" className="text-xs">MYTH</Badge>
                      <span className="text-lg">{item.icon}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.myth}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="default" className="text-xs bg-success text-success-foreground">REALITY</Badge>
                      <CheckCircle className="h-4 w-4 text-success" />
                    </div>
                    <p className="text-sm text-foreground font-medium">{item.reality}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Real-World Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-level-2" />
              AI in Pakistan Today
            </CardTitle>
            <CardDescription>
              Real examples of how AI is already helping people in Pakistan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: "Banking & Business",
                  examples: [
                    "HBL chatbots answering customer questions 24/7",
                    "JazzCash using AI to detect fraud and protect accounts",
                    "Small businesses using WhatsApp Business AI responses"
                  ]
                },
                {
                  category: "Healthcare & Education", 
                  examples: [
                    "Doctors using AI to read X-rays and medical scans faster",
                    "Students using AI for instant Urdu-English translation",
                    "Online tutoring platforms with AI-powered personalized learning"
                  ]
                },
                {
                  category: "Daily Life & Agriculture",
                  examples: [
                    "Weather prediction apps helping farmers plan crops",
                    "Google Translate working offline for Urdu conversations", 
                    "Voice assistants understanding Urdu and Punjabi commands"
                  ]
                },
                {
                  category: "Local Innovation",
                  examples: [
                    "Pakistani startups building AI for traffic management",
                    "AI-powered delivery route optimization for local businesses",
                    "Automated customer service for utility companies like K-Electric"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-semibold text-foreground">{section.category}</h4>
                  <ul className="space-y-2">
                    {section.examples.map((example, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 bg-level-2 rounded-full mt-2 flex-shrink-0"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Success Indicators */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              Success Indicators
            </CardTitle>
            <CardDescription>
              By the end of this lesson, you should be able to:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "✅ Identify at least 3 AI myths and explain their realities",
                "✅ Explain that AI is a tool, not a human-like entity", 
                "✅ Give 2 real-world examples of AI use in Pakistan",
                "✅ Feel less intimidated by AI technology",
                "✅ Understand AI has limitations and can make mistakes",
                "✅ Know that anyone can learn to use AI effectively"
              ].map((indicator, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{indicator.replace('✅ ', '')}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quiz Call to Action */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>🎯 Ready to Test Your Knowledge?</CardTitle>
            <CardDescription>
              Take the quiz to see how well you understand AI myths vs reality
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <Button onClick={handleStartQuiz} size="lg" className="px-8">
                Start Quiz
              </Button>
              <p className="text-xs text-muted-foreground mt-2">
                Need 70% or higher to pass
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Level 2
          </Button>
          {lessonProgress?.completed && (
            <Button onClick={onComplete}>
              Next: How to Ask Questions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Level2Lesson1;