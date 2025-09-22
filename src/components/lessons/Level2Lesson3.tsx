import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, Languages, FileText, ArrowLeftRight, Globe, ArrowLeft } from "lucide-react";
import { MixMatchQuiz } from "@/components/quiz/MixMatchQuiz";
import { LessonCompletion } from "@/components/LessonCompletion";
import { level2Lesson3QuizData } from "@/lib/translations";
import { completeLesson } from "@/lib/progress";
import BilingualText from "@/components/BilingualText";

interface Level2Lesson3Props {
  onComplete: () => void;
  onBack: () => void;
}

const Level2Lesson3 = ({ onComplete, onBack }: Level2Lesson3Props) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [startTime] = useState(Date.now());

  const handleQuizComplete = (score: number, correct: number, answers: any[]) => {
    setQuizScore(score);
    setQuizCompleted(true);
    setShowQuiz(false);
    
    if (score >= 70) {
      setShowCompletion(true);
    } else {
      // Stay on lesson, show retry option
      setShowQuiz(false);
    }
  };

  const handleLessonComplete = () => {
    const timeSpent = Date.now() - startTime;
    const quizResult = {
      score: quizScore,
      totalQuestions: level2Lesson3QuizData.length,
      correct: Math.round((quizScore / 100) * level2Lesson3QuizData.length),
      passed: quizScore >= 70,
      timeSpent,
      answers: [] // Would be populated from actual quiz answers
    };
    completeLesson(2, "lesson3", quizResult, timeSpent);
    onComplete();
  };

  // Show lesson completion screen
  if (showCompletion) {
    return (
      <LessonCompletion
        levelId={2}
        lessonId="lesson3"
        lessonTitle="Translate & Simplify: AI as Your Helper"
        score={quizScore}
        timeSpent={Date.now() - startTime}
        onContinue={handleLessonComplete}
        isLastLesson={false}
      />
    );
  }

  // Show quiz
  if (showQuiz) {
    return (
      <div className="min-h-screen bg-background">
        <div className="bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center gap-4 mb-4">
              <Button
                variant="ghost"
                onClick={() => setShowQuiz(false)}
                className="text-primary-foreground hover:text-primary-foreground/80"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Lesson
              </Button>
              <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
                Translation Quiz
              </Badge>
            </div>
            
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              <BilingualText 
                translation={{
                  english: "Translation & Simplification Quiz",
                  urdu: "ترجمہ اور آسان بنانے کا کوئز"
                }}
              />
            </h1>
            <p className="text-primary-foreground/90 mb-4">
              <BilingualText 
                translation={{
                  english: "Match English phrases with Urdu translations and complex text with simplified versions",
                  urdu: "انگریزی جملوں کو اردو ترجمے سے اور پیچیدہ متن کو آسان متن سے ملائیں"
                }}
              />
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <MixMatchQuiz
              questions={level2Lesson3QuizData}
              title="Translation & Simplification Quiz"
              description="Drag and drop to match the correct pairs."
              onComplete={handleQuizComplete}
              passingScore={70}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            Level 2 • Lesson 3
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Translate & Simplify: AI as Your Helper
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              15-20 minutes
            </div>
            <div className="flex items-center gap-2">
              <Languages className="h-4 w-4" />
              Master translation & simplification
            </div>
          </div>
        </div>

        {/* Learning Objective */}
        <Card className="mb-8 border-level-2/20 bg-gradient-to-r from-level-2/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-level-2" />
              Learning Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Use AI to translate between English/Urdu/Hindi and simplify complex text for easier understanding in daily life situations.
            </p>
          </CardContent>
        </Card>

        {/* Translation Basics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowLeftRight className="h-5 w-5 text-level-2" />
              Translation Basics with AI
            </CardTitle>
            <CardDescription>
              AI translates meaning, not just words - making communication natural
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Simple Translation Examples */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">🇬🇧 English to Urdu</h4>
                <div className="space-y-3">
                  {[
                    {
                      english: "The sky is beautiful today",
                      urdu: "آج کا آسمان خوبصورت ہے",
                      context: "Simple daily observation"
                    },
                    {
                      english: "Please send the payment by Friday",
                      urdu: "برائے کرم جمعہ تک رقم بھیج دیں",
                      context: "Business communication"
                    },
                    {
                      english: "Your order is ready for pickup",
                      urdu: "آپ کا آرڈر لینے کے لیے تیار ہے",
                      context: "Shop notification"
                    }
                  ].map((example, index) => (
                    <div key={index} className="border border-border rounded-lg p-3">
                      <div className="bg-blue-50 p-2 rounded text-sm mb-2">
                        <strong>English:</strong> "{example.english}"
                      </div>
                      <div className="bg-green-50 p-2 rounded text-sm mb-2">
                        <strong>اردو:</strong> "{example.urdu}"
                      </div>
                      <p className="text-xs text-muted-foreground">{example.context}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">🇵🇰 Urdu to English</h4>
                <div className="space-y-3">
                  {[
                    {
                      urdu: "میں آپ کی دکان پر کل آؤں گا",
                      english: "I will come to your shop tomorrow",
                      context: "Customer message"
                    },
                    {
                      urdu: "یہ دوائی دن میں تین بار لیں",
                      english: "Take this medicine three times a day",
                      context: "Medical instruction"
                    },
                    {
                      urdu: "عید مبارک! آپ کے لیے خصوصی رعایت",
                      english: "Eid Mubarak! Special discount for you",
                      context: "Festival greeting"
                    }
                  ].map((example, index) => (
                    <div key={index} className="border border-border rounded-lg p-3">
                      <div className="bg-green-50 p-2 rounded text-sm mb-2">
                        <strong>اردو:</strong> "{example.urdu}"
                      </div>
                      <div className="bg-blue-50 p-2 rounded text-sm mb-2">
                        <strong>English:</strong> "{example.english}"
                      </div>
                      <p className="text-xs text-muted-foreground">{example.context}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Advanced Translation Features */}
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-3">🎯 Smart Translation Tips</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong>Cultural Context:</strong>
                  <p className="text-muted-foreground">AI understands "Assalam-o-Alaikum" and formal vs informal tone</p>
                </div>
                <div>
                  <strong>Business Tone:</strong>
                  <p className="text-muted-foreground">Can translate casual to professional or vice versa</p>
                </div>
                <div>
                  <strong>Age-Appropriate:</strong>
                  <p className="text-muted-foreground">Adjusts language for children, adults, or elderly</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Simplification Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-level-2" />
              Simplifying Complex Information
            </CardTitle>
            <CardDescription>
              Turn complicated text into easy-to-understand language
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                category: "Medical Documents",
                complex: "Hypertension is the elevation of arterial blood pressure above the normal range, which may lead to cardiovascular complications if left untreated.",
                simple: "ہائی بلڈ پریشر وہ ہوتا ہے جب آپ کا بلڈ پریشر نارمل سے زیادہ ہو جائے۔ اگر اس کا علاج نہ کریں تو دل کی بیماری ہو سکتی ہے۔",
                context: "Doctor's prescription explanation"
              },
              {
                category: "Government Forms",
                complex: "The applicant must submit documentary evidence of domicile verification along with attested photocopies of educational credentials.",
                simple: "آپ کو یہ کاغذات جمع کرنے ہیں: ۱) رہائشی سرٹیفکیٹ ۲) تعلیمی سرٹیفکیٹس کی تصدیق شدہ کاپیاں",
                context: "Job application requirements"
              },
              {
                category: "Banking Notices", 
                complex: "Your account will be debited with applicable service charges for non-maintenance of minimum balance as per the terms and conditions.",
                simple: "آپ کے اکاؤنٹ میں کم پیسے ہیں، اس لیے بینک کچھ فیس کاٹے گا۔ کم سے کم بیلنس برقرار رکھیں۔",
                context: "Bank SMS explanation"
              },
              {
                category: "School Letters",
                complex: "Pursuant to the academic calendar, the institution will observe winter vacations from December 20th to January 5th, and all curricular activities shall remain suspended during this period.",
                simple: "اسکول میں سردیوں کی چھٹیاں 20 دسمبر سے 5 جنوری تک ہوں گی۔ اس دوران کوئی کلاس نہیں ہوگی۔",
                context: "Parent notification"
              }
            ].map((example, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="text-xs">{example.category}</Badge>
                  <span className="text-xs text-muted-foreground">{example.context}</span>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">COMPLEX (Original):</p>
                    <div className="bg-red-50 border border-red-200 p-3 rounded text-sm">
                      "{example.complex}"
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">SIMPLE (AI Simplified):</p>
                    <div className="bg-green-50 border border-green-200 p-3 rounded text-sm">
                      "{example.simple}"
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Real-Life Applications */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🏠 Real-Life Applications</CardTitle>
            <CardDescription>
              How translation and simplification help in daily Pakistani life
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: "🏪",
                  title: "For Shop Owners",
                  applications: [
                    "Translate product descriptions for online listings",
                    "Simplify supplier agreements and contracts",
                    "Create bilingual WhatsApp auto-replies",
                    "Convert complex tax documents to simple Urdu"
                  ]
                },
                {
                  icon: "👨‍👩‍👧‍👦",
                  title: "For Families",
                  applications: [
                    "Understand children's school notices and reports",
                    "Translate medical prescriptions and instructions",
                    "Simplify banking and insurance documents",
                    "Help elderly family members understand tech terms"
                  ]
                },
                {
                  icon: "🎓",
                  title: "For Students",
                  applications: [
                    "Translate research materials from English to Urdu",
                    "Simplify complex academic concepts",
                    "Convert formal essays to conversational explanations",
                    "Help with bilingual presentations and assignments"
                  ]
                },
                {
                  icon: "💼",
                  title: "For Professionals",
                  applications: [
                    "Translate emails and business correspondence",
                    "Simplify legal documents and contracts",
                    "Create multilingual marketing materials",
                    "Convert technical jargon to client-friendly language"
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{category.icon}</span>
                    <h4 className="font-semibold text-foreground">{category.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {category.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 bg-level-2 rounded-full mt-2 flex-shrink-0"></div>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Interactive Exercises */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🎮 Practice Exercises</CardTitle>
            <CardDescription>
              Try these translation and simplification challenges
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                title: "📝 Government Form Challenge",
                task: "Simplify this government notice into easy Urdu:",
                text: "All eligible candidates must report to the designated examination center with requisite documentation including CNIC, domicile certificate, and educational transcripts.",
                hint: "Think: What documents? Where to go? When?"
              },
              {
                title: "🏥 Medical Translation",
                task: "Translate this prescription instruction for elderly patients:",
                text: "Take one tablet twice daily after meals, avoid alcohol, and report any adverse reactions immediately.",
                hint: "Use simple Urdu words that elderly people understand"
              },
              {
                title: "📱 Tech Simplification",
                task: "Explain this tech message in simple Urdu:",
                text: "Your device storage is approaching maximum capacity. Please delete unnecessary files or move them to cloud storage.",
                hint: "What's the problem? What should they do?"
              }
            ].map((exercise, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">{exercise.title}</h4>
                <p className="text-sm text-muted-foreground mb-3">{exercise.task}</p>
                
                <div className="bg-yellow-50 border border-yellow-200 p-3 rounded mb-3">
                  <p className="text-sm font-mono">"{exercise.text}"</p>
                </div>
                
                <p className="text-xs text-muted-foreground mb-3">💡 {exercise.hint}</p>
                
                <div className="bg-level-2/5 border border-level-2/20 rounded p-3">
                  <p className="text-xs font-medium text-level-2 mb-2">YOUR TRANSLATION/SIMPLIFICATION:</p>
                  <div className="min-h-[60px] bg-background border border-border rounded p-2 text-sm">
                    [Practice writing your answer here...]
                  </div>
                </div>
              </div>
            ))}
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
                "Translate between English and Urdu confidently",
                "Simplify complex documents for family members",
                "Use AI for business communication in both languages",
                "Help elderly relatives understand official documents",
                "Convert technical jargon into everyday language",
                "Adapt tone and formality level as needed",
                "Recognize when cultural context matters in translation",
                "Feel comfortable asking AI to explain complex concepts"
              ].map((indicator, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quiz Section */}
        <Card className="mb-8 border-level-2/20 bg-gradient-to-r from-level-2/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-level-2" />
              Ready for the Quiz?
            </CardTitle>
            <CardDescription>
              Test your understanding with a translation and simplification matching exercise
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Practice matching English phrases with their Urdu translations and complex text with simplified versions. 
              You need 70% or higher to complete this lesson.
            </p>
            
            {quizCompleted && quizScore < 70 && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-sm text-destructive">
                  Previous attempt: {quizScore}%. You need 70% to pass. Try again!
                </p>
              </div>
            )}
            
            {quizCompleted && quizScore >= 70 && (
              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <p className="text-sm text-success">
                  Great job! You scored {quizScore}%. Ready to complete the lesson?
                </p>
              </div>
            )}

            <Button onClick={() => setShowQuiz(true)} size="lg" className="w-full">
              {quizCompleted && quizScore < 70 ? "Retry Quiz" : "Start Translation Quiz"}
            </Button>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous: How to Ask Questions
          </Button>
          <Button onClick={() => setShowQuiz(true)} disabled={!quizCompleted || quizScore < 70}>
            Next: Shopkeeper Ad Project →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Level2Lesson3;