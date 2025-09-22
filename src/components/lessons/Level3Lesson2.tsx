import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, Workflow, Zap, MessageSquare, Clock, Star } from "lucide-react";
import { MultipleChoiceQuiz } from "@/components/quiz/MultipleChoiceQuiz";
import { LessonCompletion } from "@/components/LessonCompletion";
import { completeLesson } from "@/lib/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import BilingualText from "@/components/BilingualText";
import { culturalPhrases } from "@/lib/translations";

// Quiz data for Level 3 Lesson 2
const level3Lesson2QuizData = [
  {
    id: "workflow-identification",
    question: "Ali runs a tea stall in Karachi. Every morning he follows these steps: Check WhatsApp orders → Prepare ingredients → Boil water → Make tea → Send 'Ready!' message to customers. This is an example of:",
    options: [
      "A random set of activities",
      "A business workflow",
      "A personal hobby",
      "A computer program"
    ],
    correctAnswer: 1,
    explanation: "یہ ایک business workflow ہے! Ali کے یہ steps ایک منظم عمل ہیں جو business results دیتے ہیں۔ AI اس قسم کے workflows کو automate کر سکتا ہے۔",
    context: "Karachi Tea Stall"
  },
  {
    id: "automation-benefits",
    question: "Fatima owns a clothing shop in Lahore. She manually sends WhatsApp messages to 50 customers about new Eid collections every week. What would be the biggest benefit of automating this task?",
    options: [
      "She could sleep more",
      "Save time and avoid mistakes",
      "Customers would be happier", 
      "Her phone battery would last longer"
    ],
    correctAnswer: 1,
    explanation: "Time saving اور mistakes سے بچنا automation کا سب سے بڑا فائدہ ہے! Fatima 2-3 گھنٹے بچا کر دوسرے important کاموں پر focus کر سکتی ہے۔",
    context: "Lahore Fashion Business"
  },
  {
    id: "trigger-action",
    question: "Ahmed wants to automate his mobile shop's inventory alerts. When phone stock goes below 5 units, he wants an automatic WhatsApp message sent to his supplier. In this workflow, what is the TRIGGER?",
    options: [
      "WhatsApp message being sent",
      "Ahmed checking his inventory", 
      "Stock level going below 5 units",
      "The supplier responding"
    ],
    correctAnswer: 2,
    explanation: "Stock level below 5 یہ trigger ہے! یہ وہ condition ہے جو automation کو start کرتی ہے۔ Action یہ ہے کہ WhatsApp message بھیجا جانا۔",
    context: "Mobile Shop Automation"
  },
  {
    id: "whatsapp-business",
    question: "Sana uses WhatsApp Business for her home-based bakery in Islamabad. She wants to send automatic 'Thank you' messages when customers place orders. This is an example of:",
    options: [
      "Customer service automation",
      "Manual customer service",
      "Social media marketing",
      "Inventory management"
    ],
    correctAnswer: 0,
    explanation: "یہ customer service automation ہے! Automatic responses customers کو better experience دیتے ہیں اور Sana کا وقت بچاتے ہیں۔",
    context: "Islamabad Home Bakery"
  },
  {
    id: "workflow-steps",
    question: "Hassan runs a small restaurant in Faisalabad. His order workflow is: Customer calls → Take order → Calculate bill → Prepare food → Call customer when ready → Collect payment. How many steps are in this workflow?",
    options: [
      "4 steps",
      "5 steps", 
      "6 steps",
      "7 steps"
    ],
    correctAnswer: 2,
    explanation: "6 steps ہیں! Each clear action ایک step ہے: 1) Customer calls, 2) Take order, 3) Calculate bill, 4) Prepare food, 5) Call customer, 6) Collect payment.",
    context: "Faisalabad Restaurant"
  }
];

interface Level3Lesson2Props {
  onComplete: () => void;
  onBack: () => void;
}

const Level3Lesson2 = ({ onComplete, onBack }: Level3Lesson2Props) => {
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
      title: "Welcome to AI Workflows",
      content: "Discover how AI can automate your daily business tasks",
      type: "intro"
    },
    {
      id: 1,
      title: "What Makes a Good Workflow?",
      content: "Understanding the building blocks of automation",
      type: "theory",
      characteristics: [
        {
          title: "Repeatable Steps",
          description: "Same actions done regularly",
          example: "Daily WhatsApp customer updates",
          icon: "🔄"
        },
        {
          title: "Clear Triggers",
          description: "Specific events that start the workflow",
          example: "New order received, low inventory alert",
          icon: "⚡"
        },
        {
          title: "Measurable Results",
          description: "You can see when it's complete",
          example: "Message sent, invoice generated",
          icon: "✅"
        },
        {
          title: "Time-Consuming",
          description: "Tasks that take significant time manually",
          example: "Sending 50 individual messages",
          icon: "⏰"
        }
      ]
    },
    {
      id: 2,
      title: "Pakistani Business Automation Examples",
      content: "Real scenarios from local businesses",
      type: "examples",
      businesses: [
        {
          business: "Karachi Grocery Store",
          owner: "Amna",
          manual: "Calls 20 suppliers daily to check prices",
          automated: "AI automatically compares prices from supplier websites and sends her a daily report",
          benefit: "Saves 2 hours daily, gets better deals",
          complexity: "Medium"
        },
        {
          business: "Lahore Wedding Planner", 
          owner: "Zain",
          manual: "Manually tracks payment due dates for 15 clients",
          automated: "AI sends automatic WhatsApp reminders 3 days before payment due",
          benefit: "No missed payments, happy clients",
          complexity: "Easy"
        },
        {
          business: "Islamabad Tuition Center",
          owner: "Dr. Sarah",
          manual: "Creates monthly attendance reports for 100 students",
          automated: "AI generates reports from digital attendance and emails parents automatically",
          benefit: "Zero manual work, parents stay informed",
          complexity: "Hard"
        }
      ]
    },
    {
      id: 3,
      title: "WhatsApp Business Automation", 
      content: "Most popular automation for Pakistani businesses",
      type: "focus",
      whatsappFeatures: [
        {
          feature: "Auto-Reply Messages",
          use: "Instant response when customers message",
          example: "سلام! آپ کا پیغام مل گیا ہے۔ 30 منٹ میں جواب دیں گے۔",
          setup: "Free - Built into WhatsApp Business"
        },
        {
          feature: "Scheduled Messages",
          use: "Send promotional messages at specific times", 
          example: "Daily 9 AM: Today's fresh items available!",
          setup: "Requires automation tools like Zapier"
        },
        {
          feature: "Order Confirmations",
          use: "Automatic confirmation when order received",
          example: "Order confirmed! Total: Rs. 500. Delivery in 30 minutes.",
          setup: "Integration with ordering system needed"
        }
      ]
    },
    {
      id: 4,
      title: "Simple Automation Tools for Pakistan",
      content: "Tools that work well in Pakistani business context",
      type: "tools",
      categories: [
        {
          category: "Beginner (Free/Cheap)",
          tools: [
            { name: "WhatsApp Business", use: "Auto-replies, catalogs", cost: "Free" },
            { name: "Google Sheets + Forms", use: "Order collection, automatic calculations", cost: "Free" },
            { name: "If This Then That (IFTTT)", use: "Connect apps together", cost: "$3/month" }
          ]
        },
        {
          category: "Intermediate (Small Investment)",
          tools: [
            { name: "Zapier", use: "Advanced app connections", cost: "$20/month" },
            { name: "Google Workspace", use: "Business email automation", cost: "$6/month" },
            { name: "Calendly", use: "Automatic appointment booking", cost: "$10/month" }
          ]
        }
      ]
    },
    {
      id: 5,
      title: "Your First Workflow Planning",
      content: "Let's identify a workflow in your life",
      type: "practice",
      exercise: "Think about your daily routine or business. Identify one repetitive task that takes more than 15 minutes daily.",
      examples: [
        "Sending good morning messages to family WhatsApp groups",
        "Checking and responding to customer inquiries",
        "Creating daily sales reports",
        "Sending appointment reminders to clients",
        "Updating inventory counts"
      ]
    },
    {
      id: 6,
      title: "Quiz Time!",
      content: "Test your workflow automation knowledge",
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
      const quizResult = {
        score: score,
        totalQuestions: 4, // Assuming 4 questions for Level 3 Lesson 2
        correct: correct,
        passed: score >= 70,
        timeSpent,
        answers: answers || []
      };
      completeLesson(3, 'lesson2', quizResult, timeSpent);
    }
  };

  const handleLessonComplete = () => {
    onComplete();
  };

  if (showCompletion) {
    return (
      <LessonCompletion
        levelId={3}
        lessonId="lesson2"
        lessonTitle="AI Workflows Basics"
        score={quizScore}
        timeSpent={Date.now() - startTime}
        onContinue={handleLessonComplete}
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
                translation={{ english: "AI Workflows Quiz", urdu: "AI ورک فلو کوئز" }}
                englishClassName="text-3xl font-bold"
                urduClassName="text-2xl font-urdu font-bold"
              />
            </h1>
            <p className="text-muted-foreground">
              <BilingualText 
                translation={{ english: "Test your understanding of business workflows", urdu: "کاروباری ورک فلو کی اپنی سمجھ کا امتحان لیں" }}
              />
            </p>
          </div>

          <MultipleChoiceQuiz
            questions={level3Lesson2QuizData}
            title="AI Workflows Basics"
            description="Answer these questions about workflows and automation"
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
      <div className="bg-gradient-level text-primary-foreground">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button
              variant="ghost"
              onClick={onBack}
              className="text-primary-foreground hover:text-primary-foreground/80"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              <BilingualText 
                translation={{ english: "Back to Level 3", urdu: "لیول 3 پر واپس" }}
              />
            </Button>
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              <BilingualText 
                translation={{ english: "Lesson 2 of 3", urdu: "سبق 2 از 3" }}
              />
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            <BilingualText 
              translation={{ english: "AI Workflows Basics", urdu: "AI ورک فلو کی بنیادی باتیں" }}
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
                <div className="p-2 rounded-lg bg-level-3 text-primary-foreground">
                  <Workflow className="h-5 w-5" />
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
                    <BilingualText 
                      translation={{ 
                        english: "Learn how Pakistani businesses use AI to automate repetitive tasks and save valuable time every day!", 
                        urdu: "جانیں کہ پاکستانی کاروبار کیسے AI استعمال کرکے بار بار ہونے والے کام خودکار بناتے ہیں اور ہر روز قیمتی وقت بچاتے ہیں!" 
                      }}
                      englishClassName="text-lg text-muted-foreground"
                      urduClassName="text-base font-urdu text-muted-foreground"
                    />
                  </p>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.characteristics && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    <BilingualText 
                      translation={{ english: "What Makes a Task Perfect for AI Automation:", urdu: "کون سا کام AI automation کے لیے بہترین ہے:" }}
                    />
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentStepData.characteristics.map((char, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-gradient-to-br from-level-3/5 to-cultural-emerald/5">
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">{char.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-level-3 mb-1">{char.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{char.description}</p>
                            <div className="text-sm">
                              <Badge variant="outline" className="text-xs bg-cultural-gold/10">Example</Badge>
                              <p className="mt-1">{char.example}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "examples" && currentStepData.businesses && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    <BilingualText 
                      translation={{ english: "Real Pakistani Business Success Stories:", urdu: "حقیقی پاکستانی کاروباری کامیابی کی کہانیاں:" }}
                    />
                  </h3>
                  <div className="space-y-4">
                    {currentStepData.businesses.map((business, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-cultural-gold/5">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-semibold text-cultural-emerald mb-2">{business.business}</h4>
                            <p className="text-sm text-muted-foreground">Owner: {business.owner}</p>
                            <Badge 
                              variant="outline" 
                              className={`text-xs mt-2 ${
                                business.complexity === 'Easy' ? 'bg-success/10 text-success border-success/20' :
                                business.complexity === 'Medium' ? 'bg-warning/10 text-warning border-warning/20' :
                                'bg-destructive/10 text-destructive border-destructive/20'
                              }`}
                            >
                              {business.complexity} Setup
                            </Badge>
                          </div>
                          <div>
                            <div className="space-y-3">
                              <div>
                                <Badge variant="destructive" className="text-xs mb-1">Before (Manual)</Badge>
                                <p className="text-sm">{business.manual}</p>
                              </div>
                              <div>
                                <Badge variant="default" className="text-xs mb-1 bg-success">After (AI)</Badge>
                                <p className="text-sm">{business.automated}</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="bg-truck-art-blue/10 p-3 rounded border">
                              <Star className="h-4 w-4 text-truck-art-blue mb-1" />
                              <p className="text-sm font-medium text-truck-art-blue">Benefit:</p>
                              <p className="text-sm">{business.benefit}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "focus" && currentStepData.whatsappFeatures && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-success" />
                    <BilingualText 
                      translation={{ english: "WhatsApp Business Automation Features:", urdu: "واٹس ایپ بزنس کی خودکار خصوصیات:" }}
                    />
                  </h3>
                  <div className="grid gap-4">
                    {currentStepData.whatsappFeatures.map((feature, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-success/5">
                        <div className="grid md:grid-cols-4 gap-4 items-start">
                          <div>
                            <h4 className="font-semibold text-success mb-1">{feature.feature}</h4>
                            <p className="text-sm text-muted-foreground">{feature.use}</p>
                          </div>
                          <div className="md:col-span-2">
                            <Badge variant="outline" className="text-xs mb-2">Example Message</Badge>
                            <div className="bg-success/10 p-3 rounded border font-mono text-sm">
                              {feature.example}
                            </div>
                          </div>
                          <div>
                            <Badge variant="secondary" className="text-xs mb-1">Setup Required</Badge>
                            <p className="text-sm">{feature.setup}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "tools" && currentStepData.categories && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    <BilingualText 
                      translation={{ english: "Automation Tools for Pakistani Businesses:", urdu: "پاکستانی کاروبار کے لیے خودکار آلات:" }}
                    />
                  </h3>
                  <div className="space-y-6">
                    {currentStepData.categories.map((category, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <h4 className="font-semibold text-cultural-emerald mb-3 flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          {category.category}
                        </h4>
                        <div className="grid md:grid-cols-3 gap-3">
                          {category.tools.map((tool, toolIndex) => (
                            <div key={toolIndex} className="bg-muted/50 p-3 rounded">
                              <div className="flex items-center justify-between mb-2">
                                <h5 className="font-medium text-sm">{tool.name}</h5>
                                <Badge variant="outline" className="text-xs">{tool.cost}</Badge>
                              </div>
                              <p className="text-xs text-muted-foreground">{tool.use}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "practice" && (
                <div className="space-y-4">
                  <div className="bg-level-3/10 border border-level-3/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-level-3" />
                      <BilingualText 
                        translation={{ english: "Practice Exercise:", urdu: "مشق کی مثال:" }}
                      />
                    </h3>
                    <p className="text-foreground mb-4">{currentStepData.exercise}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-medium text-cultural-emerald">
                        <BilingualText 
                          translation={{ english: "Common Examples from Pakistani Businesses:", urdu: "پاکستانی کاروبار کی عام مثالیں:" }}
                        />
                      </h4>
                      {currentStepData.examples.map((example, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                          <div className="w-8 h-8 rounded-full bg-level-3 text-primary-foreground text-sm flex items-center justify-center">
                            {index + 1}
                          </div>
                          <span className="text-sm">{example}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-cultural-gold/10 border border-cultural-gold/20 rounded">
                      <h4 className="font-medium mb-2 text-cultural-emerald">
                        <BilingualText 
                          translation={{ english: "Your Turn - Think About:", urdu: "آپ کی باری - سوچیں:" }}
                        />
                      </h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>• Which task takes most of your daily time?</p>
                        <p>• کیا یہ کام روزانہ کرنا پڑتا ہے؟</p>
                        <p>• Can this be broken into clear steps?</p>
                        <p>• کیا یہ steps ہمیشہ same order میں ہوتے ہیں؟</p>
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
                      translation={{ english: "Ready to Test Your Knowledge?", urdu: "اپنے علم کو آزمانے کے لیے تیار ہیں؟" }}
                    />
                  </h3>
                  <p className="text-muted-foreground">
                    <BilingualText 
                      translation={{ 
                        english: "Quiz about Pakistani business workflows and automation!", 
                        urdu: "پاکستانی کاروباری workflows اور automation کے بارے میں کوئز!" 
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

export default Level3Lesson2;