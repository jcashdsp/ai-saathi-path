import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, AlertTriangle, Lock, Eye } from "lucide-react";

interface Level1Lesson4Props {
  onComplete: () => void;
  onBack: () => void;
}

const Level1Lesson4 = ({ onComplete, onBack }: Level1Lesson4Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      id: 0,
      title: "Welcome to Internet Safety Basics",
      content: "Learn to protect yourself online",
      type: "intro"
    },
    {
      id: 1,
      title: "Password Security",
      content: "Creating strong passwords that keep you safe",
      type: "theory",
      passwordRules: [
        "Use at least 8 characters (12+ is better)",
        "Mix uppercase, lowercase, numbers, and symbols",
        "Avoid personal information (name, birthday, phone)",
        "Use different passwords for different accounts",
        "Never share passwords with anyone"
      ]
    },
    {
      id: 2,
      title: "Password Examples",
      content: "Good vs Bad password examples",
      type: "examples",
      examples: [
        {
          password: "ahmed123",
          type: "bad",
          reason: "Too simple, uses common name + numbers"
        },
        {
          password: "MyBirthday1990",
          type: "bad", 
          reason: "Uses personal information"
        },
        {
          password: "Sun&Moon#42!",
          type: "good",
          reason: "Strong mix of characters, not personal"
        },
        {
          password: "Blue$Car7@Night",
          type: "good",
          reason: "Long, complex, memorable phrase"
        }
      ]
    },
    {
      id: 3,
      title: "Common Online Scams",
      content: "Recognizing and avoiding internet scams",
      type: "theory",
      scams: [
        {
          type: "Fake Prize Messages",
          warning: "\"You've won $1000! Click here now!\"",
          reality: "Real prizes don't come through random messages"
        },
        {
          type: "Urgent Bank Messages",
          warning: "\"Your account will close! Update now!\"",
          reality: "Banks never ask for passwords via email/SMS"
        },
        {
          type: "Too-Good Deals",
          warning: "\"iPhone for ₨5,000 only! Limited time!\"",
          reality: "If it seems too good to be true, it probably is"
        },
        {
          type: "Fake Tech Support",
          warning: "\"Your computer has virus! Call immediately!\"",
          reality: "Real tech companies don't call you randomly"
        }
      ]
    },
    {
      id: 4,
      title: "Safe Browsing Habits",
      content: "Practices to keep you secure online",
      type: "theory",
      habits: [
        "Only download software from official websites",
        "Check website URLs carefully (look for https://)",
        "Don't click suspicious links in emails or messages",
        "Log out of accounts when using shared computers",
        "Keep your browser and software updated"
      ]
    },
    {
      id: 5,
      title: "Practice: Security Check",
      content: "Apply your security knowledge",
      type: "practice",
      scenarios: [
        {
          situation: "You receive an SMS saying 'Congratulations! You won ₨50,000 in lottery. Send your bank details to claim.'",
          question: "What should you do?",
          answer: "Delete the message. You can't win a lottery you didn't enter."
        },
        {
          situation: "A website asks for your password but the URL shows 'http://' instead of 'https://'",
          question: "Is this safe?", 
          answer: "No! Only enter passwords on secure 'https://' sites."
        }
      ]
    },
    {
      id: 6,
      title: "Congratulations!",
      content: "You're now equipped with essential internet safety skills",
      type: "completion"
    }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (!completedSteps.includes(currentStep)) {
      setCompletedSteps([...completedSteps, currentStep]);
    }
    
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

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
              Back to Level 1
            </Button>
            <Badge variant="outline" className="border-primary-foreground/30 text-primary-foreground">
              Lesson 4 of 4
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Internet Safety Basics
          </h1>
          <p className="text-primary-foreground/90 mb-4">
            Step {currentStep + 1} of {steps.length}: {currentStepData.title}
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
                  <Shield className="h-5 w-5" />
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
                  <div className="text-6xl">🛡️</div>
                  <p className="text-lg text-muted-foreground">
                    Stay safe online with essential security knowledge. These skills will 
                    protect you from scams, theft, and other internet dangers.
                  </p>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.passwordRules && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Lock className="h-5 w-5" />
                    Strong Password Rules:
                  </h3>
                  <div className="grid gap-3">
                    {currentStepData.passwordRules.map((rule, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-success text-success-foreground text-sm flex items-center justify-center">
                          ✓
                        </div>
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "examples" && currentStepData.examples && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Password Examples:</h3>
                  <div className="grid gap-4">
                    {currentStepData.examples.map((example, index) => (
                      <div key={index} className={`p-4 rounded-lg border-2 ${
                        example.type === "good" 
                          ? "bg-success/10 border-success/20" 
                          : "bg-destructive/10 border-destructive/20"
                      }`}>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant={example.type === "good" ? "default" : "destructive"}>
                            {example.type === "good" ? "✓ Good" : "✗ Bad"}
                          </Badge>
                          <code className="bg-muted px-2 py-1 rounded text-sm">
                            {example.password}
                          </code>
                        </div>
                        <p className="text-sm text-muted-foreground">{example.reason}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.scams && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Common Scams to Avoid:
                  </h3>
                  <div className="grid gap-4">
                    {currentStepData.scams.map((scam, index) => (
                      <div key={index} className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                        <div className="font-medium text-destructive mb-2">
                          {scam.type}
                        </div>
                        <div className="bg-muted p-3 rounded mb-2 text-sm font-mono">
                          "{scam.warning}"
                        </div>
                        <div className="text-sm text-muted-foreground">
                          <strong>Reality:</strong> {scam.reality}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.habits && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Safe Browsing Habits:
                  </h3>
                  <div className="grid gap-3">
                    {currentStepData.habits.map((habit, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-success text-success-foreground text-sm flex items-center justify-center">
                          {index + 1}
                        </div>
                        <span>{habit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "practice" && currentStepData.scenarios && (
                <div className="space-y-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-accent" />
                      Security Scenarios:
                    </h3>
                    <div className="grid gap-6">
                      {currentStepData.scenarios.map((scenario, index) => (
                        <div key={index} className="space-y-3">
                          <div className="p-3 bg-muted rounded">
                            <h4 className="font-medium mb-2">Scenario {index + 1}:</h4>
                            <p className="text-sm">{scenario.situation}</p>
                          </div>
                          <div className="text-sm font-medium text-accent">
                            {scenario.question}
                          </div>
                          <details className="text-sm">
                            <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
                              Click to see answer
                            </summary>
                            <div className="mt-2 p-3 bg-success/10 border border-success/20 rounded">
                              {scenario.answer}
                            </div>
                          </details>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      💡 Practice identifying these scenarios in real life!
                    </p>
                  </div>
                </div>
              )}

              {currentStepData.type === "completion" && (
                <div className="text-center space-y-4">
                  <CheckCircle className="h-16 w-16 text-success mx-auto" />
                  <h3 className="text-xl font-semibold">Level 1 Complete!</h3>
                  <p className="text-muted-foreground">
                    You now have essential computer skills and internet safety knowledge. 
                    You're ready to start your AI learning journey in Level 2!
                  </p>
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6">
                    <p className="text-sm">
                      <strong>🎉 Congratulations!</strong> You've completed all Level 1 lessons. 
                      You're now ready for Level 2: Talking to AI!
                    </p>
                  </div>
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
              Previous
            </Button>
            
            <Button onClick={handleNext}>
              {currentStep === steps.length - 1 ? "Complete Level 1" : "Next"}
              {currentStep < steps.length - 1 && <ArrowRight className="h-4 w-4 ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level1Lesson4;