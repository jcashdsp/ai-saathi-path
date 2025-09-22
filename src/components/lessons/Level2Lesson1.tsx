import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, AlertTriangle, Lightbulb, Zap } from "lucide-react";
import { TrueFalseQuiz } from "@/components/quiz/TrueFalseQuiz";
import { getUserProgress } from "@/lib/progress";
import { VideoPlayer } from "@/components/media/VideoPlayer";
import { SubtitleToggle } from "@/components/media/SubtitleToggle";
import { AudioPronunciation } from "@/components/media/AudioPronunciation";
import BilingualText from "@/components/BilingualText";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, getTranslation } from "@/lib/translations";

interface Level2Lesson1Props {
  onComplete?: () => void;
  onBack?: () => void;
}

const Level2Lesson1: React.FC<Level2Lesson1Props> = ({ onComplete, onBack }) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [lessonCompleted, setLessonCompleted] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'urdu'>('english');
  const [showSubtitles, setShowSubtitles] = useState(true);
  const { language } = useLanguage();
  
  const lessonProgress = getUserProgress();

  // Quiz questions with bilingual support
  const quizQuestions = [
    {
      id: "myth-consciousness",
      question: getTranslation(translations.level2Lesson1.quiz.question1.question, language),
      correct: false,
      explanation: getTranslation(translations.level2Lesson1.quiz.question1.explanation, language),
      context: "Understanding AI consciousness and human-like thinking capabilities"
    },
    {
      id: "myth-jobs", 
      question: getTranslation(translations.level2Lesson1.quiz.question2.question, language),
      correct: false, 
      explanation: getTranslation(translations.level2Lesson1.quiz.question2.explanation, language),
      context: "AI impact on employment and job transformation"
    }
  ];

  const handleQuizComplete = (score: number, correct: number, answers: any[]) => {
    console.log(`Quiz completed with score: ${score}%`);
    setLessonCompleted(true);
    
    if (score >= 70) {
      // In a real app, you would save progress to backend/localStorage
      console.log('Progress saved:', {
        lessonId: 'level-2-lesson-1',
        completed: true,
        score,
        timeSpent: Date.now(),
        answers
      });
      
      if (onComplete) {
        onComplete();
      }
    }
  };

  const handleStartQuiz = () => {
    setShowQuiz(true);
  };

  const handleBackToLesson = () => {
    setShowQuiz(false);
  };

  if (showQuiz) {
    return (
      <TrueFalseQuiz
        questions={quizQuestions}
        title={getTranslation(translations.level2Lesson1.quiz.title, language)}
        description={getTranslation(translations.level2Lesson1.quiz.description, language)}
        onComplete={handleQuizComplete}
      />
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
              {getTranslation(translations.ui.back, language)} to Level 2
            </Button>
            
            <Badge variant="outline">
              Level 2 • Lesson 1
            </Badge>

            {lessonProgress && (
              <Badge className="bg-success text-success-foreground">
                ✅ Completed
              </Badge>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            <BilingualText translation={translations.level2Lesson1.title} as="span" />
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
              <BilingualText translation={translations.level2Lesson1.objectives.title} as="span" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <BilingualText translation={translations.level2Lesson1.objectives.objective1} />
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <BilingualText translation={translations.level2Lesson1.objectives.objective2} />
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <BilingualText translation={translations.level2Lesson1.objectives.objective3} />
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Enhanced Video Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📹 Video Lesson</CardTitle>
            <CardDescription>
              Learn about AI myths and reality with examples from Pakistan
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Subtitle Controls */}
            <SubtitleToggle
              currentLanguage={currentLanguage}
              onLanguageChange={setCurrentLanguage}
              showSubtitles={showSubtitles}
              onToggleSubtitles={setShowSubtitles}
            />
            
            {/* Video Player */}
            <VideoPlayer
              videoUrl="dQw4w9WgXcQ" // Sample YouTube video ID - replace with actual educational content
              title="AI Myths vs Reality: A Pakistani Perspective"
              description="Understanding what AI really is and how it's being used in Pakistan today"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm mt-4">
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
              <BilingualText translation={translations.level2Lesson1.mythsSection.title} as="span" />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Myth 1: AI Consciousness */}
            <div className="border border-border rounded-lg p-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive" className="text-xs">MYTH</Badge>
                    <span className="text-lg">🧠</span>
                  </div>
                  <BilingualText translation={translations.level2Lesson1.mythsSection.myth1.title} className="text-sm text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="text-xs bg-success text-success-foreground">REALITY</Badge>
                    <CheckCircle className="h-4 w-4 text-success" />
                  </div>
                  <BilingualText translation={translations.level2Lesson1.mythsSection.myth1.reality} className="text-sm text-foreground font-medium" />
                </div>
              </div>
            </div>

            {/* Myth 2: Job Replacement */}
            <div className="border border-border rounded-lg p-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive" className="text-xs">MYTH</Badge>
                    <span className="text-lg">💼</span>
                  </div>
                  <BilingualText translation={translations.level2Lesson1.mythsSection.myth2.title} className="text-sm text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="text-xs bg-success text-success-foreground">REALITY</Badge>
                    <CheckCircle className="h-4 w-4 text-success" />
                  </div>
                  <BilingualText translation={translations.level2Lesson1.mythsSection.myth2.reality} className="text-sm text-foreground font-medium" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-World Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-level-2" />
              <BilingualText translation={translations.level2Lesson1.realitySection.title} as="span" />
            </CardTitle>
            <CardDescription>
              Real examples of how AI is already helping people in Pakistan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm">
                  <div className="h-1.5 w-1.5 bg-level-2 rounded-full mt-2 flex-shrink-0"></div>
                  <BilingualText translation={translations.level2Lesson1.realitySection.education} />
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <div className="h-1.5 w-1.5 bg-level-2 rounded-full mt-2 flex-shrink-0"></div>
                  <BilingualText translation={translations.level2Lesson1.realitySection.agriculture} />
                </div>
                <div className="flex items-start gap-2 text-sm">
                  <div className="h-1.5 w-1.5 bg-level-2 rounded-full mt-2 flex-shrink-0"></div>
                  <BilingualText translation={translations.level2Lesson1.realitySection.healthcare} />
                </div>
              </div>
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
                {getTranslation(translations.ui.startQuiz, language)}
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
            {getTranslation(translations.ui.back, language)} to Level 2
          </Button>
          {lessonProgress && (
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