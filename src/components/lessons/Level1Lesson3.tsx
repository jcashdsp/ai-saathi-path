import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Home, Lightbulb, Zap, ArrowDownRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, getTranslation } from "@/lib/translations";
import { MixMatchQuiz } from "@/components/quiz/MixMatchQuiz";
import { LessonCompletion } from "@/components/LessonCompletion";
import { completeLesson } from "@/lib/progress";

interface Level1Lesson3Props {
  onComplete: () => void;
  onBack: () => void;
}

const Level1Lesson3 = ({ onComplete, onBack }: Level1Lesson3Props) => {
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
      title: getTranslation({ english: "Welcome to If-This-Then-That Logic", urdu: "اگر یہ تو پھر وہ منطق میں خوش آمدید" }, language),
      content: getTranslation({ english: "Learn the foundation of automation thinking", urdu: "خودکاری کی سوچ کی بنیاد سیکھیں" }, language),
      type: "intro"
    },
    {
      id: 1,
      title: getTranslation({ english: "What is If-This-Then-That?", urdu: "اگر یہ تو پھر وہ کیا ہے؟" }, language),
      content: getTranslation({ english: "Understanding conditional logic in everyday life", urdu: "روزمرہ زندگی میں شرطی منطق کو سمجھنا" }, language),
      type: "theory",
      concept: getTranslation({ 
        english: "If-This-Then-That (IFTTT) is simple logic that drives all automation. If something happens (trigger), then do something else (action). It's like saying 'If it rains, then I take an umbrella.'", 
        urdu: "اگر یہ تو پھر وہ (IFTTT) سادہ منطق ہے جو تمام خودکاری کو چلاتی ہے۔ اگر کچھ ہوتا ہے (محرک)، تو پھر کچھ اور کریں (عمل)۔ یہ کہنے جیسا ہے 'اگر بارش ہو تو میں چھتری لیتا ہوں۔'" 
      }, language)
    },
    {
      id: 2,
      title: getTranslation({ english: "Pakistani Daily Life Examples", urdu: "پاکستانی روزمرہ زندگی کی مثالیں" }, language),
      content: getTranslation({ english: "IFTTT logic in Pakistani culture", urdu: "پاکستانی ثقافت میں IFTTT منطق" }, language),
      type: "examples",
      examples: [
        {
          if: getTranslation({ english: "If Azaan time arrives", urdu: "اگر اذان کا وقت آجائے" }, language),
          then: getTranslation({ english: "Then I pause my work for prayer", urdu: "تو میں نماز کے لیے کام رک دیتا ہوں" }, language),
          icon: "🕌"
        },
        {
          if: getTranslation({ english: "If electricity goes (load shedding)", urdu: "اگر بجلی چلی جائے (لوڈ شیڈنگ)" }, language),
          then: getTranslation({ english: "Then I turn on the generator", urdu: "تو میں جنریٹر چالو کردیتا ہوں" }, language),
          icon: "⚡"
        },
        {
          if: getTranslation({ english: "If guests arrive unexpectedly", urdu: "اگر مہمان اچانک آجائیں" }, language),
          then: getTranslation({ english: "Then mama quickly prepares chai", urdu: "تو امی جلدی سے چائے تیار کرتی ہیں" }, language),
          icon: "🫖"
        },
        {
          if: getTranslation({ english: "If cricket match starts", urdu: "اگر کرکٹ میچ شروع ہوجائے" }, language),
          then: getTranslation({ english: "Then the whole mohalla gathers", urdu: "تو پورا محلہ جمع ہوجاتا ہے" }, language),
          icon: "🏏"
        }
      ]
    },
    {
      id: 3,
      title: getTranslation({ english: "Technology Examples", urdu: "ٹیکنالوجی کی مثالیں" }, language),
      content: getTranslation({ english: "How IFTTT works in digital world", urdu: "ڈیجیٹل دنیا میں IFTTT کیسے کام کرتا ہے" }, language),
      type: "examples",
      examples: [
        {
          if: getTranslation({ english: "If WhatsApp message received", urdu: "اگر واٹس ایپ میسج آئے" }, language),
          then: getTranslation({ english: "Then phone makes notification sound", urdu: "تو فون نوٹیفیکیشن کی آواز کرے" }, language),
          icon: "📱"
        },
        {
          if: getTranslation({ english: "If JazzCash payment received", urdu: "اگر جاز کیش پیمنٹ آئے" }, language),
          then: getTranslation({ english: "Then SMS confirmation is sent", urdu: "تو ایس ایم ایس تصدیق بھیجی جائے" }, language),
          icon: "💳"
        },
        {
          if: getTranslation({ english: "If YouTube video uploads", urdu: "اگر یوٹیوب ویڈیو اپلوڈ ہو" }, language),
          then: getTranslation({ english: "Then auto-share to Facebook page", urdu: "تو فیس بک پیج پر خودکار شیئر کریں" }, language),
          icon: "📺"
        },
        {
          if: getTranslation({ english: "If online order placed", urdu: "اگر آن لائن آرڈر دیا جائے" }, language),
          then: getTranslation({ english: "Then TCS rider gets delivery notification", urdu: "تو TCS رائیڈر کو ڈیلیوری کی اطلاع ملے" }, language),
          icon: "📦"
        }
      ]
    },
    {
      id: 4,
      title: getTranslation({ english: "Practice: Create Your Logic", urdu: "پریکٹس: اپنی منطق بنائیں" }, language),
      content: getTranslation({ english: "Think of your own scenarios", urdu: "اپنے حالات کے بارے میں سوچیں" }, language),
      type: "practice",
      prompts: [
        getTranslation({ english: "Think: If you receive a business WhatsApp, then what should happen?", urdu: "سوچیں: اگر آپ کو کاروباری واٹس ایپ آئے، تو کیا ہونا چاہیے؟" }, language),
        getTranslation({ english: "Family: If mama calls during work hours, then...?", urdu: "خاندان: اگر امی کام کے اوقات میں فون کریں، تو...؟" }, language),
        getTranslation({ english: "Studies: If assignment deadline approaches, then...?", urdu: "پڑھائی: اگر اسائنمنٹ کی آخری تاریخ آ رہی ہو، تو...؟" }, language),
        getTranslation({ english: "Business: If customer leaves 5-star review, then...?", urdu: "کاروبار: اگر گاہک 5 ستارہ جائزہ دے، تو...؟" }, language)
      ]
    },
    {
      id: 5,
      title: getTranslation({ english: "Connection to AI", urdu: "AI سے تعلق" }, language),
      content: getTranslation({ english: "Why this matters for artificial intelligence", urdu: "مصنوعی ذہانت کے لیے یہ کیوں اہم ہے" }, language),
      type: "theory",
      connections: [
        getTranslation({ english: "AI systems use If-This-Then-That logic for decisions", urdu: "AI سسٹم فیصلوں کے لیے اگر یہ تو پھر وہ منطق استعمال کرتے ہیں" }, language),
        getTranslation({ english: "ChatGPT responds based on 'If user asks X, then answer Y'", urdu: "ChatGPT 'اگر صارف X پوچھے تو Y جواب دے' کی بنیاد پر جواب دیتا ہے" }, language),
        getTranslation({ english: "Smart home devices: 'If motion detected, then turn on lights'", urdu: "اسمارٹ گھریلو آلات: 'اگر حرکت محسوس ہو تو لائٹس چالو کرو'" }, language),
        getTranslation({ english: "This logic helps you create automation workflows", urdu: "یہ منطق آپ کو خودکاری کے ورک فلوز بنانے میں مدد کرتی ہے" }, language)
      ]
    },
    {
      id: 6,
      title: getTranslation({ english: "Test Your Understanding", urdu: "اپنی سمجھ کو آزمائیں" }, language),
      content: getTranslation({ english: "Match scenarios with their logic", urdu: "حالات کو ان کی منطق سے ملائیں" }, language),
      type: "quiz"
    }
  ];

  const quizData = {
    instructions: getTranslation({ 
      english: "Match each 'IF' condition with its correct 'THEN' action", 
      urdu: "ہر 'اگر' شرط کو اس کے صحیح 'تو پھر' عمل سے ملائیں" 
    }, language),
    pairs: [
      {
        left: getTranslation({ english: "IF: Ramadan month starts", urdu: "اگر: رمضان کا مہینہ شروع ہو" }, language),
        right: getTranslation({ english: "THEN: Change daily routine for sehri/iftar", urdu: "تو: سحری/افطار کے لیے روزانہ کا معمول بدلیں" }, language)
      },
      {
        left: getTranslation({ english: "IF: Phone battery below 20%", urdu: "اگر: فون کی بیٹری 20% سے کم" }, language),
        right: getTranslation({ english: "THEN: Turn on power saving mode", urdu: "تو: پاور سیونگ موڈ آن کریں" }, language)
      },
      {
        left: getTranslation({ english: "IF: Rain starts in Karachi", urdu: "اگر: کراچی میں بارش شروع ہو" }, language),
        right: getTranslation({ english: "THEN: Traffic jams increase everywhere", urdu: "تو: ہر جگہ ٹریفک جام بڑھ جاتا ہے" }, language)
      },
      {
        left: getTranslation({ english: "IF: Biryani is cooking", urdu: "اگر: بریانی پک رہی ہو" }, language),
        right: getTranslation({ english: "THEN: Whole house smells amazing", urdu: "تو: پورے گھر میں زبردست خوشبو آتی ہے" }, language)
      }
    ]
  };

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
        totalQuestions: quizData.pairs.length,
        correct: correct,
        passed: score >= 70,
        timeSpent,
        answers: answers || []
      };
      completeLesson(1, 'lesson3', quizResult, timeSpent);
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
        lessonId="lesson3"
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
              {getTranslation({ english: "Lesson 3 of 5", urdu: "سبق 3 از 5" }, language)}
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {getTranslation({ english: "If-This-Then-That Logic", urdu: "اگر یہ تو پھر وہ منطق" }, language)}
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
                  <Lightbulb className="h-5 w-5" />
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
                  <div className="text-6xl">🤖</div>
                  <p className="text-lg text-muted-foreground">
                    {getTranslation({ 
                      english: "Understanding If-This-Then-That logic is the key to thinking like a computer and creating powerful automations. Let's start with familiar Pakistani examples!", 
                      urdu: "اگر یہ تو پھر وہ منطق کو سمجھنا کمپیوٹر کی طرح سوچنے اور طاقتور خودکاری بنانے کی کلید ہے۔ آئیے پاکستانی مثالوں سے شروع کرتے ہیں!" 
                    }, language)}
                  </p>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.concept && (
                <div className="space-y-4">
                  <div className="cultural-border p-6 rounded-lg bg-cultural-bg">
                    <h3 className="text-lg font-semibold mb-3 cultural-text flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      {getTranslation({ english: "Key Concept", urdu: "اہم تصور" }, language)}
                    </h3>
                    <p className="text-lg leading-relaxed">{currentStepData.concept}</p>
                  </div>
                  
                  {/* Visual representation */}
                  <div className="flex items-center justify-center gap-4 p-6 bg-muted rounded-lg cultural-pattern">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-cultural-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-2">
                        {getTranslation({ english: "IF", urdu: "اگر" }, language)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {getTranslation({ english: "Trigger/Condition", urdu: "محرک/شرط" }, language)}
                      </p>
                    </div>
                    <ArrowDownRight className="h-8 w-8 text-cultural-accent" />
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-cultural-accent text-accent-foreground flex items-center justify-center text-xl font-bold mb-2">
                        {getTranslation({ english: "THEN", urdu: "تو" }, language)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {getTranslation({ english: "Action/Result", urdu: "عمل/نتیجہ" }, language)}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {currentStepData.type === "examples" && currentStepData.examples && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold cultural-text">
                    {getTranslation({ english: "Examples:", urdu: "مثالیں:" }, language)}
                  </h3>
                  <div className="grid gap-4">
                    {currentStepData.examples.map((example, index) => (
                      <div key={index} className="cultural-border p-4 rounded-lg bg-cultural-bg">
                        <div className="flex items-center gap-4">
                          <div className="text-3xl">{example.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 text-sm mb-1">
                              <Badge variant="outline" className="text-xs cultural-border">
                                {getTranslation({ english: "IF", urdu: "اگر" }, language)}
                              </Badge>
                              <span className="text-muted-foreground">{example.if}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Badge variant="secondary" className="text-xs">
                                {getTranslation({ english: "THEN", urdu: "تو" }, language)}
                              </Badge>
                              <span className="text-muted-foreground">{example.then}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.connections && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2 cultural-text">
                    <Zap className="h-5 w-5" />
                    {getTranslation({ english: "Connection to AI:", urdu: "AI سے تعلق:" }, language)}
                  </h3>
                  <div className="grid gap-3">
                    {currentStepData.connections.map((connection, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-cultural-accent text-accent-foreground text-sm flex items-center justify-center mt-0.5">
                          {index + 1}
                        </div>
                        <span>{connection}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "practice" && currentStepData.prompts && (
                <div className="space-y-4">
                  <div className="cultural-border p-4 rounded-lg bg-cultural-bg">
                    <h3 className="text-lg font-semibold mb-3 cultural-text flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      {getTranslation({ english: "Think & Practice:", urdu: "سوچیں اور مشق کریں:" }, language)}
                    </h3>
                    <div className="grid gap-4">
                      {currentStepData.prompts.map((prompt, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-cultural-accent text-accent-foreground text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </div>
                          <span>{prompt}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      💡 {getTranslation({ english: "Take a moment to really think about these. Write down your ideas!", urdu: "ان کے بارے میں واقعی سوچنے کے لیے وقت نکالیں۔ اپنے خیالات لکھیں!" }, language)}
                    </p>
                  </div>

                  {/* Interactive thinking box */}
                  <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-4 cultural-pattern">
                    <h4 className="font-medium mb-2">
                      {getTranslation({ english: "Your Ideas Space:", urdu: "آپ کے خیالات کی جگہ:" }, language)}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      {getTranslation({ 
                        english: "Use this mental space to think of your own If-This-Then-That examples:", 
                        urdu: "اپنی اگر یہ تو پھر وہ مثالیں سوچنے کے لیے اس ذہنی جگہ کا استعمال کریں:" 
                      }, language)}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">
                        {getTranslation({ english: "IF: _________________________________", urdu: "اگر: _________________________________" }, language)}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {getTranslation({ english: "THEN: _______________________________", urdu: "تو: _______________________________" }, language)}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStepData.type === "quiz" && !quizCompleted && (
                <MixMatchQuiz
                  instructions={quizData.instructions}
                  pairs={quizData.pairs}
                  onComplete={handleQuizComplete}
                  title={getTranslation({ english: "If-This-Then-That Logic Quiz", urdu: "اگر یہ تو پھر وہ منطق کوئز" }, language)}
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
                      {getTranslation({ 
                        english: "Excellent! You understand the logic that drives all automation.", 
                        urdu: "بہترین! آپ اس منطق کو سمجھتے ہیں جو تمام خودکاری کو چلاتی ہے۔" 
                      }, language)}
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

export default Level1Lesson3;