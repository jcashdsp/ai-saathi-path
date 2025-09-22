import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Home, MousePointer, Hand, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, getTranslation } from "@/lib/translations";
import { TrueFalseQuiz } from "@/components/quiz/TrueFalseQuiz";
import { LessonCompletion } from "@/components/LessonCompletion";
import { completeLesson } from "@/lib/progress";

interface Level1Lesson1Props {
  onComplete: () => void;
  onBack: () => void;
}

const Level1Lesson1 = ({ onComplete, onBack }: Level1Lesson1Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [startTime] = useState(Date.now());
  const { language } = useLanguage();

  const steps = [
    {
      id: 0,
      title: getTranslation({ english: "Welcome to Mouse & Keyboard Mastery", urdu: "ماؤس اور کی بورڈ میں مہارت" }, language),
      content: getTranslation({ english: "Learn the essential skills for computer navigation", urdu: "کمپیوٹر نیویگیشن کے لیے ضروری مہارتیں سیکھیں" }, language),
      type: "intro"
    },
    {
      id: 1,
      title: getTranslation({ english: "Mouse Basics", urdu: "ماؤس کی بنیادی باتیں" }, language),
      content: getTranslation({ english: "Understanding your mouse and basic operations", urdu: "اپنے ماؤس اور بنیادی آپریشنز کو سمجھنا" }, language),
      type: "theory",
      points: [
        getTranslation({ english: "Left click: Select and activate", urdu: "بائیں کلک: منتخب کریں اور فعال کریں" }, language),
        getTranslation({ english: "Right click: Open context menus", urdu: "دائیں کلک: سیاق مینو کھولیں" }, language),
        getTranslation({ english: "Scroll wheel: Move up and down pages", urdu: "اسکرول وہیل: صفحات کو اوپر نیچے کریں" }, language),
        getTranslation({ english: "Double-click: Open files and programs", urdu: "ڈبل کلک: فائلیں اور پروگرام کھولیں" }, language)
      ]
    },
    {
      id: 2,
      title: getTranslation({ english: "Cultural Context: Pakistani Computer Usage", urdu: "ثقافتی تناظر: پاکستانی کمپیوٹر کا استعمال" }, language),
      content: getTranslation({ english: "How Pakistani students and families use computers", urdu: "پاکستانی طلباء اور خاندان کمپیوٹر کیسے استعمال کرتے ہیں" }, language),
      type: "cultural",
      examples: [
        {
          title: getTranslation({ english: "Student Life", urdu: "طلبا کی زندگی" }, language),
          description: getTranslation({ english: "Ahmed from Karachi uses mouse to navigate online classes and submit assignments", urdu: "کراچی کا احمد آن لائن کلاسز اور اسائنمنٹس جمع کرنے کے لیے ماؤس استعمال کرتا ہے" }, language),
          icon: "🎓"
        },
        {
          title: getTranslation({ english: "Family Business", urdu: "خاندانی کاروبار" }, language),
          description: getTranslation({ english: "Fatima helps her father's shop by using computer for inventory management", urdu: "فاطمہ اپنے والد کی دکان میں انوینٹری منیجمنٹ کے لیے کمپیوٹر استعمال کرتی ہے" }, language),
          icon: "🏪"
        }
      ]
    },
    {
      id: 3,
      title: getTranslation({ english: "Keyboard Shortcuts", urdu: "کی بورڈ شارٹ کٹس" }, language),
      content: getTranslation({ english: "Essential keyboard combinations for efficiency", urdu: "کارکردگی کے لیے ضروری کی بورڈ کامبینیشن" }, language),
      type: "theory",
      shortcuts: [
        { keys: "Ctrl + C", action: getTranslation({ english: "Copy text or files", urdu: "ٹیکسٹ یا فائلیں کاپی کریں" }, language) },
        { keys: "Ctrl + V", action: getTranslation({ english: "Paste copied content", urdu: "کاپی شدہ مواد پیسٹ کریں" }, language) },
        { keys: "Ctrl + Z", action: getTranslation({ english: "Undo last action", urdu: "آخری عمل کو منسوخ کریں" }, language) },
        { keys: "Alt + Tab", action: getTranslation({ english: "Switch between open programs", urdu: "کھلے ہوئے پروگراموں کے درمیان تبدیل کریں" }, language) }
      ]
    },
    {
      id: 4,
      title: getTranslation({ english: "Test Your Knowledge", urdu: "اپنے علم کو آزمائیں" }, language),
      content: getTranslation({ english: "Quick quiz to check your understanding", urdu: "اپنی سمجھ کو جانچنے کے لیے فوری کوئز" }, language),
      type: "quiz"
    }
  ];

  const quizData = [
    {
      id: 1,
      question: getTranslation({ 
        english: "What does a right-click on the mouse do?", 
        urdu: "ماؤس پر دائیں کلک کیا کرتا ہے؟" 
      }, language),
      correct: true,
      correctAnswer: true,
      explanation: getTranslation({ 
        english: "Right-click opens context menus with additional options", 
        urdu: "دائیں کلک اضافی اختیارات کے ساتھ سیاق مینو کھولتا ہے" 
      }, language)
    },
    {
      id: 2,
      question: getTranslation({ 
        english: "Ctrl + C is used to copy content", 
        urdu: "Ctrl + C مواد کاپی کرنے کے لیے استعمال ہوتا ہے" 
      }, language),
      correct: true,
      correctAnswer: true,
      explanation: getTranslation({ 
        english: "Correct! Ctrl + C is the universal copy shortcut", 
        urdu: "درست! Ctrl + C یونیورسل کاپی شارٹ کٹ ہے" 
      }, language)
    },
    {
      id: 3,
      question: getTranslation({ 
        english: "Double-clicking always deletes files", 
        urdu: "ڈبل کلک کرنا ہمیشہ فائلیں حذف کرتا ہے" 
      }, language),
      correct: false,
      correctAnswer: false,
      explanation: getTranslation({ 
        english: "False! Double-clicking opens files and folders, it doesn't delete them", 
        urdu: "غلط! ڈبل کلک فائلیں اور فولڈرز کھولتا ہے، انہیں حذف نہیں کرتا" 
      }, language)
    }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleQuizComplete = (score: number, correct: number, answers: any[]) => {
    setQuizScore(score);
    setQuizCompleted(true);
    
    if (score >= 70) {
      setShowCompletion(true);
      const timeSpent = Date.now() - startTime;
      const quizResult = {
        score: score,
        totalQuestions: quizData.length,
        correct: correct,
        passed: score >= 70,
        timeSpent,
        answers: answers || []
      };
      completeLesson(1, 'lesson1', quizResult, timeSpent);
    }
  };

  const handleLessonComplete = () => {
    onComplete();
  };

  const handleHome = () => {
    window.location.href = '/';
  };

  if (showCompletion) {
    return (
      <LessonCompletion
        levelId={1}
        lessonId="lesson1"
        score={quizScore}
        onNext={handleLessonComplete}
        language={language}
      />
    );
  }

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground border-b-4 border-cultural-accent">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-primary-foreground hover:text-primary-foreground/80"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {getTranslation({ english: "Back to Level 1", urdu: "لیول 1 پر واپس" }, language)}
            </Button>
            <Button
              variant="ghost"
              onClick={handleHome}
              className="text-primary-foreground hover:text-primary-foreground/80"
            >
              <Home className="h-4 w-4 mr-2" />
              {getTranslation({ english: "Home", urdu: "ہوم" }, language)}
            </Button>
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              {getTranslation({ english: "Lesson 1 of 5", urdu: "سبق 1 از 5" }, language)}
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {getTranslation({ english: "Mouse & Keyboard Mastery", urdu: "ماؤس اور کی بورڈ میں مہارت" }, language)}
          </h1>
          <p className="text-primary-foreground/90 mb-4">
            {getTranslation({ english: `Step ${currentStep + 1} of ${steps.length}`, urdu: `قدم ${currentStep + 1} از ${steps.length}` }, language)}: {currentStepData.title}
          </p>
          
          <Progress value={progress} className="h-2 bg-primary-foreground/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="cultural-border">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-cultural-primary text-primary-foreground cultural-pattern">
                  <MousePointer className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>{currentStepData.title}</CardTitle>
                  <CardDescription>{currentStepData.content}</CardDescription>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {currentStepData.type === "intro" && (
                <div className="text-center space-y-4">
                  <div className="text-6xl">🖱️</div>
                  <p className="text-lg text-muted-foreground">
                    {getTranslation({ 
                      english: "Master essential mouse and keyboard skills that form the foundation for all computer work. These skills will make everything else easier!", 
                      urdu: "تمام کمپیوٹر کے کام کی بنیاد بننے والی ماؤس اور کی بورڈ کی ضروری مہارتوں میں مہارت حاصل کریں۔ یہ مہارتیں باقی سب کچھ آسان بنا دیں گی!" 
                    }, language)}
                  </p>
                </div>
              )}

              {currentStepData.type === "cultural" && currentStepData.examples && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold cultural-text">
                    {getTranslation({ english: "Pakistani Examples:", urdu: "پاکستانی مثالیں:" }, language)}
                  </h3>
                  <div className="grid gap-4">
                    {currentStepData.examples.map((example, index) => (
                      <div key={index} className="cultural-border p-4 rounded-lg bg-cultural-bg">
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">{example.icon}</div>
                          <div>
                            <h4 className="font-semibold cultural-text">{example.title}</h4>
                            <p className="text-muted-foreground mt-1">{example.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.points && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    {getTranslation({ english: "Key Concepts:", urdu: "اہم تصورات:" }, language)}
                  </h3>
                  <div className="grid gap-3">
                    {currentStepData.points.map((point, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <Hand className="h-5 w-5 text-cultural-primary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.shortcuts && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    {getTranslation({ english: "Essential Shortcuts:", urdu: "ضروری شارٹ کٹس:" }, language)}
                  </h3>
                  <div className="grid gap-3">
                    {currentStepData.shortcuts.map((shortcut, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="font-mono cultural-border">
                            {shortcut.keys}
                          </Badge>
                          <span>{shortcut.action}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "quiz" && !quizCompleted && (
                <TrueFalseQuiz
                  questions={quizData}
                  onComplete={handleQuizComplete}
                  title={getTranslation({ english: "Mouse & Keyboard Quiz", urdu: "ماؤس اور کی بورڈ کوئز" }, language)}
                />
              )}

              {currentStepData.type === "quiz" && quizCompleted && (
                <div className="text-center space-y-4 cultural-border p-6 rounded-lg bg-cultural-bg">
                  <div className="text-4xl">🎉</div>
                  <h3 className="text-xl font-semibold cultural-text">
                    {getTranslation({ english: "Quiz Complete!", urdu: "کوئز مکمل!" }, language)}
                  </h3>
                  <p className="text-muted-foreground">
                    {getTranslation({ english: `Score: ${quizScore}%`, urdu: `اسکور: ${quizScore}%` }, language)}
                  </p>
                  {quizScore >= 70 ? (
                    <p className="text-success font-semibold">
                      {getTranslation({ english: "Excellent! You're ready for the next lesson.", urdu: "بہترین! آپ اگلے سبق کے لیے تیار ہیں۔" }, language)}
                    </p>
                  ) : (
                    <p className="text-muted-foreground">
                      {getTranslation({ english: "Practice more and try again!", urdu: "مزید مشق کریں اور دوبارہ کوشش کریں!" }, language)}
                    </p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="cultural-border"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {getTranslation({ english: "Previous", urdu: "پچھلا" }, language)}
            </Button>
            
            {currentStepData.type !== "quiz" && (
              <Button onClick={handleNext} className="bg-cultural-primary hover:bg-cultural-primary/90">
                {getTranslation({ english: "Next", urdu: "اگلا" }, language)}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level1Lesson1;