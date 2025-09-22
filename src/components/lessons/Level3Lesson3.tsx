import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, Settings, Play, Coffee, MessageSquare, BarChart, Clock } from "lucide-react";
import { MixMatchQuiz } from "@/components/quiz/MixMatchQuiz";
import { LessonCompletion } from "@/components/LessonCompletion";
import { completeLesson } from "@/lib/progress";
import { useLanguage } from "@/contexts/LanguageContext";
import BilingualText from "@/components/BilingualText";
import { culturalPhrases } from "@/lib/translations";

// Quiz data for Level 3 Lesson 3
const level3Lesson3QuizData = [
  {
    id: "workflow-practice",
    title: "Match Tea Stall Workflow Steps with Automation Tools",
    instructions: "Ali wants to automate his tea stall business. Match each manual step with the right automation solution.",
    pairs: [
      {
        id: "customer-order",
        left: "Customer calls to place tea order",
        right: "WhatsApp Business auto-reply: 'Order received! Ready in 10 minutes'",
        explanation: "Auto-replies immediately confirm orders and set expectations"
      },
      {
        id: "inventory-check",
        left: "Check if milk and tea leaves are sufficient",
        right: "Google Sheets formula alerts when inventory goes below 5 units",
        explanation: "Automated inventory tracking prevents stockouts"
      },
      {
        id: "payment-record",
        left: "Write down daily sales in notebook",
        right: "Digital payment apps (JazzCash/Easypaisa) automatically record transactions",
        explanation: "Digital payments create automatic sales records"
      },
      {
        id: "customer-ready",
        left: "Call customer when tea is ready for pickup",
        right: "Automated SMS/WhatsApp: 'Your tea is ready! Please collect'",
        explanation: "Automated notifications save time and reduce missed calls"
      }
    ],
    context: "Karachi Tea Stall"
  },
  {
    id: "business-workflow-match",
    title: "Match Pakistani Business Problems with Workflow Solutions",
    instructions: "Match common Pakistani business challenges with appropriate automation solutions.",
    pairs: [
      {
        id: "clothing-shop",
        left: "Fatima manually messages 100 customers about Eid sale every year",
        right: "WhatsApp Broadcast List sends sale message to all customers at once",
        explanation: "Broadcast lists allow one message to reach many customers simultaneously"
      },
      {
        id: "tuition-center",
        left: "Teacher forgets to send homework reminders to parents",
        right: "Google Calendar automatically sends homework reminders every evening",
        explanation: "Calendar automation ensures consistent communication with parents"
      },
      {
        id: "medical-clinic",
        left: "Receptionist manually calls patients to confirm appointments",
        right: "Appointment booking system automatically sends confirmation SMS",
        explanation: "Automated confirmations reduce no-shows and save staff time"
      },
      {
        id: "restaurant",
        left: "Chef manually tracks which ingredients are running low",
        right: "Inventory app sends alerts when ingredients drop below minimum level",
        explanation: "Automated inventory management prevents ingredient shortages"
      }
    ],
    context: "Pakistani Small Business"
  }
];

interface Level3Lesson3Props {
  onComplete: () => void;
  onBack: () => void;
}

const Level3Lesson3 = ({ onComplete, onBack }: Level3Lesson3Props) => {
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
      title: "Welcome to Hands-on Workflow Practice",
      content: "Build your first automated workflow step-by-step",
      type: "intro"
    },
    {
      id: 1,
      title: "Meet Ali - Tea Stall Owner in Karachi",
      content: "Let's help Ali automate his daily business operations",
      type: "scenario",
      character: {
        name: "Ali Ahmed",
        business: "Tea Stall in Saddar Market, Karachi",
        dailyCustomers: "50-80 customers",
        currentProblems: [
          "Forgets to call customers when tea is ready",
          "Runs out of milk without realizing", 
          "Loses track of daily earnings",
          "Customers wait without knowing order status"
        ],
        goals: [
          "Save 2 hours daily on repetitive tasks",
          "Never run out of ingredients",
          "Keep customers informed automatically",
          "Track daily sales without manual work"
        ]
      }
    },
    {
      id: 2,
      title: "Step 1: Map Ali's Current Process",
      content: "Understanding the existing workflow before automation",
      type: "analysis",
      currentWorkflow: [
        {
          step: 1,
          action: "Customer calls for tea order",
          time: "30 seconds",
          issues: ["Sometimes misses calls", "No order confirmation"],
          icon: "📞"
        },
        {
          step: 2,
          action: "Check if milk and tea are available",
          time: "1 minute",
          issues: ["Forgets to check inventory", "Runs out mid-day"],
          icon: "🥛"
        },
        {
          step: 3,
          action: "Prepare tea according to customer preference",
          time: "8 minutes",
          issues: ["No issues - Ali is expert at this!"],
          icon: "☕"
        },
        {
          step: 4,
          action: "Call customer when ready",
          time: "30 seconds",
          issues: ["Forgets to call", "Customer number busy"],
          icon: "📱"
        },
        {
          step: 5,
          action: "Collect payment and note in book",
          time: "1 minute",
          issues: ["Handwriting unclear", "Calculation errors"],
          icon: "💰"
        }
      ]
    },
    {
      id: 3,
      title: "Step 2: Identify Automation Opportunities",
      content: "Which steps can we make automatic?",
      type: "opportunities",
      automationPlan: [
        {
          task: "Order Confirmation",
          current: "Manual phone call back and forth",
          automated: "WhatsApp Business auto-reply confirms order",
          difficulty: "Easy",
          cost: "Free",
          timeSaved: "2 hours/day"
        },
        {
          task: "Inventory Alerts",
          current: "Check milk/tea manually throughout day",
          automated: "Smart tracking sends alert when low",
          difficulty: "Medium",
          cost: "Rs. 500/month",
          timeSaved: "30 minutes/day"
        },
        {
          task: "Customer Notifications",
          current: "Call each customer when tea is ready",
          automated: "Automatic WhatsApp: 'Your tea is ready!'",
          difficulty: "Medium",
          cost: "Rs. 200/month",  
          timeSaved: "1 hour/day"
        },
        {
          task: "Sales Tracking",
          current: "Write sales in notebook, calculate manually",
          automated: "Digital payments auto-record in spreadsheet",
          difficulty: "Hard",
          cost: "Rs. 300/month",
          timeSaved: "45 minutes/day"
        }
      ]
    },
    {
      id: 4,
      title: "Step 3: Building the First Automation",
      content: "Let's set up WhatsApp Business auto-reply",
      type: "implementation",
      tutorial: {
        title: "WhatsApp Business Auto-Reply Setup",
        description: "Most important automation for Pakistani small businesses",
        steps: [
          {
            step: "Download WhatsApp Business",
            detail: "Free app from Google Play Store",
            screenshot: "Install and verify with business phone number"
          },
          {
            step: "Create Business Profile",
            detail: "Add Ali's Tea Stall details",
            screenshot: "Business name, address, opening hours, description"
          },
          {
            step: "Set Up Away Message",
            detail: "Automatic reply when busy making tea",
            screenshot: "Message: سلام! آپ کا آرڈر مل گیا۔ 10 منٹ میں تیار ہوگا!"
          },
          {
            step: "Create Quick Replies",
            detail: "Common responses for frequent questions",
            screenshot: "Tea ready, Price list, Location directions"
          },
          {
            step: "Test the System",
            detail: "Ask family member to send test message",
            screenshot: "Verify auto-reply works correctly"
          }
        ]
      }
    },
    {
      id: 5,
      title: "Step 4: Measuring Success",
      content: "How to know if automation is working",
      type: "metrics",
      successIndicators: [
        {
          metric: "Time Saved",
          before: "12 hours/day working",
          after: "9 hours/day working",
          measurement: "Track daily hours spent on business tasks",
          icon: "⏰"
        },
        {
          metric: "Customer Satisfaction",
          before: "Customers complain about waiting without updates",
          after: "Customers know order status immediately",
          measurement: "Ask customers for feedback, count complaints",
          icon: "😊"
        },
        {
          metric: "Revenue Growth",
          before: "Rs. 3,000/day average",
          after: "Rs. 3,800/day average (serve more customers)",
          measurement: "Compare monthly earnings",
          icon: "📈"
        },
        {
          metric: "Stress Level",
          before: "Constantly worried about forgetting something",
          after: "More relaxed, systems handle routine tasks",
          measurement: "Personal assessment, better sleep",
          icon: "💆‍♂️"
        }
      ]
    },
    {
      id: 6,
      title: "Step 5: Scaling Up",
      content: "Next automation opportunities for Ali",
      type: "expansion",
      futureAutomations: [
        {
          priority: "High",
          automation: "Inventory Management System",
          description: "Automatically track milk, tea, sugar consumption",
          tools: "Google Sheets + IFTTT",
          estimatedCost: "Rs. 500/month",
          timeToImplement: "1 week"
        },
        {
          priority: "Medium", 
          automation: "Digital Payment Integration",
          description: "Accept JazzCash/Easypaisa, auto-record sales",
          tools: "JazzCash Business Account",
          estimatedCost: "Rs. 300/month",
          timeToImplement: "3 days"
        },
        {
          priority: "Low",
          automation: "Social Media Marketing",
          description: "Automatically post daily specials on Facebook",
          tools: "Facebook Pages + Scheduling tools",
          estimatedCost: "Rs. 800/month",
          timeToImplement: "2 weeks"
        }
      ]
    },
    {
      id: 7,
      title: "Your Turn: Practice Quiz",
      content: "Apply what you learned about workflow automation",
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
        totalQuestions: 5, // Assuming 5 questions for Level 3 Lesson 3
        correct: correct,
        passed: score >= 70,
        timeSpent,
        answers: answers || []
      };
      completeLesson(3, 'lesson3', quizResult, timeSpent);
    }
  };

  const handleLessonComplete = () => {
    onComplete();
  };

  if (showCompletion) {
    return (
      <LessonCompletion
        levelId={3}
        lessonId="lesson3"
        lessonTitle="Hands-on Workflow Practice"
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
                translation={{ english: "Workflow Practice Quiz", urdu: "ورک فلو مشق کوئز" }}
                englishClassName="text-3xl font-bold"
                urduClassName="text-2xl font-urdu font-bold"
              />
            </h1>
            <p className="text-muted-foreground">
              <BilingualText 
                translation={{ english: "Match workflow problems with automation solutions", urdu: "ورک فلو کے مسائل کو خودکار حل کے ساتھ ملائیں" }}
              />
            </p>
          </div>

          <MixMatchQuiz
            questions={level3Lesson3QuizData}
            title="Hands-on Workflow Practice"
            description="Match business challenges with automation solutions"
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
                translation={{ english: "Lesson 3 of 3", urdu: "سبق 3 از 3" }}
              />
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            <BilingualText 
              translation={{ english: "Hands-on Workflow Practice", urdu: "عملی ورک فلو مشق" }}
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
                  <Settings className="h-5 w-5" />
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
                  <div className="text-6xl">🛠️</div>
                  <p className="text-lg text-muted-foreground">
                    <BilingualText 
                      translation={{ 
                        english: "Follow along as we build a real automation system for a Pakistani tea stall owner. You'll learn by doing!", 
                        urdu: "ہمارے ساتھ چلیں جب ہم ایک پاکستانی چائے کی دکان کے مالک کے لیے حقیقی خودکار نظام بناتے ہیں۔ آپ کرکے سیکھیں گے!" 
                      }}
                      englishClassName="text-lg text-muted-foreground"
                      urduClassName="text-base font-urdu text-muted-foreground"
                    />
                  </p>
                </div>
              )}

              {currentStepData.type === "scenario" && currentStepData.character && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-cultural-gold/10 to-cultural-emerald/10 border border-cultural-gold/20 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-6xl">☕</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-cultural-emerald mb-2">{currentStepData.character.name}</h3>
                        <p className="text-cultural-gold font-medium mb-4">{currentStepData.character.business}</p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold text-destructive mb-2">
                              <BilingualText 
                                translation={{ english: "Daily Problems:", urdu: "روزانہ کے مسائل:" }}
                              />
                            </h4>
                            <ul className="space-y-1 text-sm">
                              {currentStepData.character.currentProblems.map((problem, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-destructive mt-1">•</span>
                                  <span>{problem}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-success mb-2">
                              <BilingualText 
                                translation={{ english: "Goals:", urdu: "مقاصد:" }}
                              />
                            </h4>
                            <ul className="space-y-1 text-sm">
                              {currentStepData.character.goals.map((goal, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <span className="text-success mt-1">•</span>
                                  <span>{goal}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="mt-4 p-3 bg-truck-art-blue/10 rounded border">
                          <p className="text-sm">
                            <strong>Daily Customers:</strong> {currentStepData.character.dailyCustomers}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStepData.type === "analysis" && currentStepData.currentWorkflow && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    <BilingualText 
                      translation={{ english: "Ali's Current Tea Order Process:", urdu: "علی کا موجودہ چائے آرڈر عمل:" }}
                    />
                  </h3>
                  <div className="space-y-3">
                    {currentStepData.currentWorkflow.map((workflow, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-gradient-to-r from-muted/50 to-transparent">
                        <div className="flex items-start gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-level-3 text-primary-foreground text-sm flex items-center justify-center">
                              {workflow.step}
                            </div>
                            <div className="text-2xl">{workflow.icon}</div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold">{workflow.action}</h4>
                              <Badge variant="outline" className="text-xs">
                                <Clock className="h-3 w-3 mr-1" />
                                {workflow.time}
                              </Badge>
                            </div>
                            <div className="space-y-2">
                              <div>
                                <Badge variant="destructive" className="text-xs mb-1">Issues</Badge>
                                <ul className="text-sm text-muted-foreground">
                                  {workflow.issues.map((issue, issueIndex) => (
                                    <li key={issueIndex} className="flex items-start gap-1">
                                      <span>•</span>
                                      <span>{issue}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "opportunities" && currentStepData.automationPlan && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    <BilingualText 
                      translation={{ english: "Automation Opportunities Analysis:", urdu: "خودکار بنانے کے مواقع کا تجزیہ:" }}
                    />
                  </h3>
                  <div className="grid gap-4">
                    {currentStepData.automationPlan.map((plan, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-cultural-gold/5">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-semibold text-cultural-emerald mb-2">{plan.task}</h4>
                            <Badge 
                              variant="outline" 
                              className={`text-xs ${
                                plan.difficulty === 'Easy' ? 'bg-success/10 text-success border-success/20' :
                                plan.difficulty === 'Medium' ? 'bg-warning/10 text-warning border-warning/20' :
                                'bg-destructive/10 text-destructive border-destructive/20'
                              }`}
                            >
                              {plan.difficulty}
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <div>
                              <Badge variant="destructive" className="text-xs mb-1">Current</Badge>
                              <p className="text-sm">{plan.current}</p>
                            </div>
                            <div>
                              <Badge variant="default" className="text-xs mb-1 bg-success">Automated</Badge>
                              <p className="text-sm">{plan.automated}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-truck-art-blue/10 p-2 rounded text-center">
                              <p className="text-xs text-muted-foreground">Cost</p>
                              <p className="font-semibold text-truck-art-blue">{plan.cost}</p>
                            </div>
                            <div className="bg-success/10 p-2 rounded text-center">
                              <p className="text-xs text-muted-foreground">Time Saved</p>
                              <p className="font-semibold text-success">{plan.timeSaved}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "implementation" && currentStepData.tutorial && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-success" />
                    <BilingualText 
                      translation={{ english: "Step-by-Step Implementation:", urdu: "قدم بہ قدم عمل درآمد:" }}
                    />
                  </h3>
                  <div className="bg-success/5 border border-success/20 rounded-lg p-6">
                    <h4 className="font-semibold text-success mb-2">{currentStepData.tutorial.title}</h4>
                    <p className="text-muted-foreground mb-4">{currentStepData.tutorial.description}</p>
                    
                    <div className="space-y-4">
                      {currentStepData.tutorial.steps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4 p-3 bg-muted/50 rounded">
                          <div className="w-8 h-8 rounded-full bg-success text-success-foreground text-sm flex items-center justify-center flex-shrink-0">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h5 className="font-medium mb-1">{step.step}</h5>
                            <p className="text-sm text-muted-foreground mb-2">{step.detail}</p>
                            <div className="bg-success/10 p-2 rounded text-xs">
                              <Badge variant="outline" className="text-xs mb-1">Example</Badge>
                              <p>{step.screenshot}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {currentStepData.type === "metrics" && currentStepData.successIndicators && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <BarChart className="h-5 w-5 text-level-3" />
                    <BilingualText 
                      translation={{ english: "Measuring Success:", urdu: "کامیابی کی پیمائش:" }}
                    />
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentStepData.successIndicators.map((indicator, index) => (
                      <div key={index} className="border rounded-lg p-4 bg-level-3/5">
                        <div className="flex items-start gap-3">
                          <div className="text-2xl">{indicator.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-level-3 mb-2">{indicator.metric}</h4>
                            <div className="space-y-2 text-sm">
                              <div>
                                <Badge variant="destructive" className="text-xs mb-1">Before</Badge>
                                <p>{indicator.before}</p>
                              </div>
                              <div>
                                <Badge variant="default" className="text-xs mb-1 bg-success">After</Badge>
                                <p>{indicator.after}</p>
                              </div>
                              <div>
                                <Badge variant="outline" className="text-xs mb-1">How to Measure</Badge>
                                <p className="text-muted-foreground">{indicator.measurement}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "expansion" && currentStepData.futureAutomations && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">
                    <BilingualText 
                      translation={{ english: "Next Steps - Future Automations:", urdu: "اگلے قدم - مستقبل کی خودکاری:" }}
                    />
                  </h3>
                  <div className="space-y-4">
                    {currentStepData.futureAutomations.map((automation, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-start gap-4">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              automation.priority === 'High' ? 'bg-destructive/10 text-destructive border-destructive/20' :
                              automation.priority === 'Medium' ? 'bg-warning/10 text-warning border-warning/20' :
                              'bg-muted text-muted-foreground border-muted'
                            }`}
                          >
                            {automation.priority} Priority
                          </Badge>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-2">{automation.automation}</h4>
                            <p className="text-sm text-muted-foreground mb-3">{automation.description}</p>
                            <div className="grid md:grid-cols-3 gap-3 text-xs">
                              <div>
                                <span className="text-muted-foreground">Tools:</span>
                                <p className="font-medium">{automation.tools}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Cost:</span>
                                <p className="font-medium">{automation.estimatedCost}</p>
                              </div>
                              <div>
                                <span className="text-muted-foreground">Time:</span>
                                <p className="font-medium">{automation.timeToImplement}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "quiz" && (
                <div className="text-center space-y-4">
                  <div className="text-6xl">🎯</div>
                  <h3 className="text-xl font-semibold">
                    <BilingualText 
                      translation={{ english: "Ready to Practice Workflow Matching?", urdu: "ورک فلو ملانے کی مشق کے لیے تیار ہیں؟" }}
                    />
                  </h3>
                  <p className="text-muted-foreground">
                    <BilingualText 
                      translation={{ 
                        english: "Match business problems with the right automation solutions!", 
                        urdu: "کاروباری مسائل کو صحیح خودکار حل کے ساتھ ملائیں!" 
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
                    <Play className="mr-2 h-5 w-5" />
                    <BilingualText 
                      translation={{ english: "Start Practice Quiz", urdu: "مشقی کوئز شروع کریں" }}
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
                  english: currentStep === steps.length - 1 ? "Start Practice Quiz" : "Next",
                  urdu: currentStep === steps.length - 1 ? "مشقی کوئز شروع کریں" : "اگلا"
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

export default Level3Lesson3;