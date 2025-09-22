import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, Folder, FileText, Image, Star } from "lucide-react";
import { TrueFalseQuiz } from "@/components/quiz/TrueFalseQuiz";
import { LessonCompletion } from "@/components/LessonCompletion";
import { completeLesson } from "@/lib/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import BilingualText from "@/components/BilingualText";
import { culturalPhrases } from "@/lib/translations";

// Quiz data for Level 1 Lesson 5
const level1Lesson5QuizData = [
  {
    id: "file-organization",
    question: "Fatima runs a clothing shop in Lahore. She should create separate folders for her Eid collection photos, regular inventory, and customer orders to stay organized.",
    correct: true,
    explanation: "بالکل درست! Separate folders help organize different types of files. Fatima کو اپنے کاروبار کو منظم رکھنے کے لیے الگ الگ folders بنانے چاہیے۔",
    context: "Business Organization"
  },
  {
    id: "file-naming",
    question: "Ahmed saves all his family photos with names like 'Photo1', 'Photo2', 'Photo3'. This is the best way to name family photos.",
    correct: false,
    explanation: "یہ best practice نہیں! Better names would be like 'Eid2024_Family' or 'Wedding_Karachi_2024'. Clear names help you find files quickly.",
    context: "Photo Organization"
  },
  {
    id: "backup-importance",
    question: "Hassan keeps all his business documents only on his computer. If his computer breaks, he might lose important files like invoices and customer records.",
    correct: true,
    explanation: "یہ خطرناک ہے! Hassan کو backup رکھنا چاہیے Google Drive یا cloud storage میں۔ Business documents کا backup ضروری ہے۔",
    context: "Data Safety"
  },
  {
    id: "file-extensions",
    question: "Sana creates a document in Microsoft Word. The file will automatically have a .docx extension, and she should not change it.",
    correct: true,
    explanation: "بالکل ٹھیک! File extensions (جیسے .docx, .jpg, .pdf) بتاتے ہیں کہ file کس قسم کی ہے۔ انہیں change نہیں کرنا چاہیے۔",
    context: "File Types"
  },
  {
    id: "folder-structure",
    question: "Ayesha wants to organize her university files. She should create one main folder called 'University' and put all her documents inside without any subfolders.",
    correct: false,
    explanation: "یہ confusing ہوگا! Better approach: 'University' main folder کے اندر 'Semester 1', 'Semester 2' جیسے subfolders بنانا۔",
    context: "Educational Organization"
  }
];

interface Level1Lesson5Props {
  onComplete: () => void;
  onBack: () => void;
}

const Level1Lesson5 = ({ onComplete, onBack }: Level1Lesson5Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showCompletion, setShowCompletion] = useState(false);
  const [quizScore, setQuizScore] = useState(0);
  const [startTime] = useState(Date.now());
  const { language } = useLanguage();

  const steps = [
    {
      id: 0,
      title: "Welcome to File Management",
      content: "Learn to organize your digital files like a pro",
      type: "intro"
    },
    {
      id: 1,
      title: "Why File Organization Matters",
      content: "Real-life examples from Pakistani families and businesses",
      type: "theory",
      examples: [
        {
          scenario: "Ali's Photo Collection",
          problem: "Ali has 500+ photos on his phone - Eid celebrations, family weddings, business meetings - all mixed together.",
          solution: "Create folders: 'Family Events', 'Business', 'Eid Celebrations', 'Weddings'",
          icon: "📸"
        },
        {
          scenario: "Sana's School Documents",
          problem: "Sana saves all university assignments in one folder and can't find her semester 1 project.",
          solution: "Organize by: 'Semester 1', 'Semester 2', then by subjects inside each",
          icon: "📚"
        },
        {
          scenario: "Hassan's Shop Records",
          problem: "Hassan's business invoices, inventory lists, and customer info are scattered everywhere.",
          solution: "Separate folders: 'Invoices 2024', 'Inventory', 'Customer Database'",
          icon: "🏪"
        }
      ]
    },
    {
      id: 2,
      title: "File Naming Best Practices",
      content: "How to name files so you can find them easily",
      type: "theory",
      tips: [
        {
          wrong: "Document1.docx",
          right: "Business_Plan_2024.docx",
          reason: "Clear, descriptive names help you find files quickly"
        },
        {
          wrong: "IMG_001.jpg",
          right: "Eid_Family_Photo_2024.jpg",
          reason: "Include date and event for easy searching"
        },
        {
          wrong: "invoice.pdf",
          right: "Invoice_Ahmed_March2024.pdf",
          reason: "Include client name and date"
        }
      ]
    },
    {
      id: 3,
      title: "Creating Folder Structure",
      content: "Step-by-step guide to organizing your files",
      type: "practice",
      steps: [
        "Create main categories (Personal, Work, Education)",
        "Add subcategories (Personal → Family → Eid Photos)",
        "Use consistent naming (YYYY-MM-DD format for dates)",
        "Keep similar files together",
        "Regular cleanup - delete unnecessary files"
      ]
    },
    {
      id: 4,
      title: "Backup & Safety",
      content: "Protecting your important files",
      type: "theory",
      backupMethods: [
        {
          method: "Cloud Storage",
          examples: "Google Drive, OneDrive, Dropbox",
          benefit: "Access files from anywhere, automatic backup",
          cost: "Free storage available"
        },
        {
          method: "External Drive",
          examples: "USB drive, External hard disk",
          benefit: "Complete control, works offline",
          cost: "One-time purchase"
        },
        {
          method: "Email to Yourself",
          examples: "Important documents via Gmail",
          benefit: "Simple and free",
          cost: "Free but limited space"
        }
      ]
    },
    {
      id: 5,
      title: "Practice Time",
      content: "Let's organize a sample file collection",
      type: "practice",
      scenario: "You are helping Fatima organize her computer files. She has: Wedding photos, Eid recipes, university notes, business invoices, family videos, and job applications."
    },
    {
      id: 6,
      title: "Quiz Time!",
      content: "Test your file management knowledge",
      type: "quiz"
    }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep === steps.length - 1 && !showQuiz) {
      setShowQuiz(true);
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
      completeLesson('1', 'lesson5', score, timeSpent);
    }
  };

  const handleLessonComplete = () => {
    onComplete();
  };

  if (showCompletion) {
    return (
      <LessonCompletion
        levelId={1}
        lessonId="lesson5"
        lessonTitle="File Management & Organization"
        score={quizScore}
        timeSpent={Date.now() - startTime}
        onContinue={handleLessonComplete}
        isLastLesson={true}
      />
    );
  }

  if (showQuiz) {
    return (
      <div className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6">
            <Button
              variant="ghost"
              onClick={() => setShowQuiz(false)}
              className="mb-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Lesson
            </Button>
            
            <h1 className="text-3xl font-bold mb-2">
              <BilingualText 
                translation={{ english: "File Management Quiz", urdu: "فائل منظوری کا کوئز" }}
                englishClassName="text-3xl font-bold"
                urduClassName="text-2xl font-urdu font-bold"
              />
            </h1>
            <p className="text-muted-foreground">
              <BilingualText 
                translation={{ english: "Test your file organization skills", urdu: "اپنی فائل تنظیم کی مہارت کا امتحان لیں" }}
              />
            </p>
          </div>

          <TrueFalseQuiz
            questions={level1Lesson5QuizData}
            title="File Management & Organization"
            description="Answer these questions about organizing files and folders"
            onComplete={handleQuizComplete}
            passingScore={70}
          />
        </div>
      </div>
    );
  }

  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-primary-foreground hover:text-primary-foreground/80"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <BilingualText 
                translation={{ english: "Back to Level 1", urdu: "لیول 1 پر واپس" }}
              />
            </Button>
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              <BilingualText 
                translation={{ english: "Lesson 5 of 5", urdu: "سبق 5 از 5" }}
              />
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            <BilingualText 
              translation={{ english: "File Management & Organization", urdu: "فائل کا انتظام اور تنظیم" }}
              englishClassName="text-2xl md:text-3xl font-bold"
              urduClassName="text-xl md:text-2xl font-urdu font-bold"
            />
          </h1>
          <p className="text-primary-foreground/90 mb-4">
            <BilingualText 
              translation={{ 
                english: `Step ${currentStep + 1} of ${steps.length}: ${currentStepData.title}`, 
                urdu: `قدم ${currentStep + 1} از ${steps.length}: ${currentStepData.title}` 
              }}
            />
          </p>
          
          <Progress value={progress} className="h-2 bg-primary-foreground/20" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                  <Folder className="h-5 w-5" />
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
                  <div className="text-6xl">📁</div>
                  <p className="text-lg text-muted-foreground">
                    <BilingualText 
                      translation={{ 
                        english: "Learn to organize your digital files like a Pakistani professional - from family photos to business documents!", 
                        urdu: "اپنی ڈیجیٹل فائلوں کو منظم کرنا سیکھیں - خاندانی تصاویر سے لے کر کاروباری دستاویزات تک!" 
                      }}
                      englishClassName="text-lg text-muted-foreground"
                      urduClassName="text-base font-urdu text-muted-foreground"
                    />
                  </p>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.examples && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    <BilingualText 
                      translation={{ english: "Real Pakistani Examples:", urdu: "حقیقی پاکستانی مثالیں:" }}
                    />
                  </h3>
                  <div className="grid gap-4">
                    {currentStepData.examples.map((example, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-gradient-to-br from-cultural-gold/5 to-cultural-emerald/5">
                        <div className="flex items-start gap-3">
                          <div className="text-3xl">{example.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-cultural-emerald mb-2">{example.scenario}</h4>
                            <div className="space-y-2">
                              <div className="text-sm">
                                <Badge variant="destructive" className="mr-2 text-xs">Problem</Badge>
                                <span className="text-muted-foreground">{example.problem}</span>
                              </div>
                              <div className="text-sm">
                                <Badge variant="default" className="mr-2 text-xs bg-success">Solution</Badge>
                                <span className="text-foreground">{example.solution}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.tips && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    <BilingualText 
                      translation={{ english: "Naming Best Practices:", urdu: "نام رکھنے کے بہترین طریقے:" }}
                    />
                  </h3>
                  <div className="grid gap-4">
                    {currentStepData.tips.map((tip, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Badge variant="destructive" className="text-xs">❌ Wrong</Badge>
                            <div className="font-mono text-sm bg-destructive/10 p-2 rounded">{tip.wrong}</div>
                          </div>
                          <div className="space-y-2">
                            <Badge variant="default" className="text-xs bg-success">✅ Right</Badge>
                            <div className="font-mono text-sm bg-success/10 p-2 rounded">{tip.right}</div>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mt-3">{tip.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.backupMethods && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    <BilingualText 
                      translation={{ english: "Backup Methods for Pakistani Users:", urdu: "پاکستانی صارفین کے لیے بیک اپ کے طریقے:" }}
                    />
                  </h3>
                  <div className="grid gap-4">
                    {currentStepData.backupMethods.map((method, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-cultural-gold/5">
                        <div className="flex items-start gap-3">
                          <Star className="h-5 w-5 text-cultural-gold mt-1" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-cultural-emerald mb-1">{method.method}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{method.examples}</p>
                            <div className="grid md:grid-cols-2 gap-2 text-sm">
                              <div>
                                <Badge variant="outline" className="text-xs mb-1">Benefit</Badge>
                                <p>{method.benefit}</p>
                              </div>
                              <div>
                                <Badge variant="outline" className="text-xs mb-1">Cost</Badge>
                                <p>{method.cost}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "practice" && currentStepData.steps && (
                <div className="space-y-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-accent" />
                      <BilingualText 
                        translation={{ english: "Step-by-Step Guide:", urdu: "قدم بہ قدم رہنمائی:" }}
                      />
                    </h3>
                    <div className="grid gap-3">
                      {currentStepData.steps.map((step, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center">
                            {index + 1}
                          </div>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStepData.type === "practice" && currentStepData.scenario && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    <BilingualText 
                      translation={{ english: "Practice Scenario:", urdu: "مشق کا منظرنامہ:" }}
                    />
                  </h3>
                  <div className="bg-truck-art-blue/10 border border-truck-art-blue/20 rounded-lg p-6">
                    <p className="text-foreground mb-4">{currentStepData.scenario}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-truck-art-blue">
                          <BilingualText 
                            translation={{ english: "Suggested Folder Structure:", urdu: "تجویز کردہ فولڈر ڈھانچہ:" }}
                          />
                        </h4>
                        <div className="space-y-1 text-sm font-mono bg-muted p-3 rounded">
                          <div>📁 Personal</div>
                          <div className="ml-4">📁 Family Photos</div>
                          <div className="ml-8">📸 Wedding_Photos</div>
                          <div className="ml-8">🎥 Family_Videos</div>
                          <div className="ml-4">📁 Recipes</div>
                          <div className="ml-8">🍽️ Eid_Recipes</div>
                          <div>📁 Education</div>
                          <div className="ml-4">📚 University_Notes</div>
                          <div>📁 Work</div>
                          <div className="ml-4">💼 Job_Applications</div>
                          <div className="ml-4">📋 Business_Invoices</div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-cultural-emerald">
                          <BilingualText 
                            translation={{ english: "Why This Works:", urdu: "یہ کیوں کام کرتا ہے:" }}
                          />
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                            <span>Clear categories (Personal, Education, Work)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                            <span>Logical subcategories</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                            <span>Easy to find specific files</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                            <span>Room for growth and new files</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStepData.type === "quiz" && (
                <div className="text-center space-y-4">
                  <div className="text-6xl">🧠</div>
                  <h3 className="text-xl font-semibold">
                    <BilingualText 
                      translation={{ english: "Ready for the Quiz?", urdu: "کوئز کے لیے تیار ہیں؟" }}
                    />
                  </h3>
                  <p className="text-muted-foreground">
                    <BilingualText 
                      translation={{ 
                        english: "Test your file management knowledge with Pakistani scenarios!", 
                        urdu: "پاکستانی حالات کے ساتھ اپنی فائل منظوری کے علم کا امتحان لیں!" 
                      }}
                      englishClassName="text-muted-foreground"
                      urduClassName="font-urdu text-muted-foreground"
                    />
                  </p>
                  <Button 
                    onClick={() => setShowQuiz(true)}
                    size="lg"
                    className="bg-gradient-cultural hover:scale-105 transition-all duration-300"
                  >
                    <BilingualText 
                      translation={{ english: "Start Quiz", urdu: "کوئز شروع کریں" }}
                    />
                  </Button>
                </div>
              )}

            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <BilingualText 
                translation={{ english: "Previous", urdu: "پچھلا" }}
              />
            </Button>
            
            <Button onClick={handleNext}>
              <BilingualText 
                translation={{ 
                  english: currentStep === steps.length - 1 ? "Start Quiz" : "Next",
                  urdu: currentStep === steps.length - 1 ? "کوئز شروع کریں" : "اگلا"
                }}
              />
              {currentStep < steps.length - 1 && <ArrowRight className="h-4 w-4 ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level1Lesson5;