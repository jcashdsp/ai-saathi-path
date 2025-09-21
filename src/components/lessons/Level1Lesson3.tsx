import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, Lightbulb, Zap, ArrowDownRight } from "lucide-react";

interface Level1Lesson3Props {
  onComplete: () => void;
  onBack: () => void;
}

const Level1Lesson3 = ({ onComplete, onBack }: Level1Lesson3Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      id: 0,
      title: "Welcome to If-This-Then-That Logic",
      content: "Learn the foundation of automation thinking",
      type: "intro"
    },
    {
      id: 1,
      title: "What is If-This-Then-That?",
      content: "Understanding conditional logic in everyday life",
      type: "theory",
      concept: "If-This-Then-That (IFTTT) is simple logic that drives all automation. If something happens (trigger), then do something else (action)."
    },
    {
      id: 2,
      title: "Real-Life Examples",
      content: "IFTTT logic surrounds us in daily life",
      type: "examples",
      examples: [
        {
          if: "If it starts raining",
          then: "Then I take an umbrella",
          icon: "🌧️"
        },
        {
          if: "If I receive a WhatsApp message",
          then: "Then my phone makes a sound",
          icon: "📱"
        },
        {
          if: "If it's 6 AM",
          then: "Then my alarm rings",
          icon: "⏰"
        },
        {
          if: "If I press the light switch",
          then: "Then the light turns on",
          icon: "💡"
        }
      ]
    },
    {
      id: 3,
      title: "Digital Automation Examples",
      content: "How IFTTT works in technology",
      type: "examples",
      examples: [
        {
          if: "If I get an email",
          then: "Then save it to Google Drive",
          icon: "📧"
        },
        {
          if: "If someone posts on Instagram", 
          then: "Then share it to Facebook",
          icon: "📸"
        },
        {
          if: "If the weather changes",
          then: "Then send me a notification",
          icon: "🌤️"
        },
        {
          if: "If I enter my home WiFi area",
          then: "Then turn on smart lights",
          icon: "🏠"
        }
      ]
    },
    {
      id: 4,
      title: "Practice: Create Your Own Logic",
      content: "Think of your own If-This-Then-That scenarios",
      type: "practice",
      prompts: [
        "Think of 3 daily routines that follow If-This-Then-That logic",
        "Imagine how you could automate your WhatsApp responses",
        "What would you do IF someone sends you a business inquiry?",
        "How could you automatically organize your photos?"
      ]
    },
    {
      id: 5,
      title: "Why This Matters for AI",
      content: "How IFTTT thinking prepares you for AI",
      type: "theory",
      connections: [
        "AI follows the same If-This-Then-That logic",
        "You'll create AI workflows using this thinking",
        "Understanding triggers and actions is key to AI automation",
        "This logic helps you break down complex problems"
      ]
    },
    {
      id: 6,
      title: "Congratulations!",
      content: "You understand the foundation of automation logic",
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
              Lesson 3 of 4
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            If-This-Then-That Logic
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
                    Understanding If-This-Then-That logic is the key to thinking like a computer 
                    and creating powerful automations. Let's start simple!
                  </p>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.concept && (
                <div className="space-y-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-accent" />
                      Key Concept
                    </h3>
                    <p className="text-lg leading-relaxed">{currentStepData.concept}</p>
                  </div>
                  
                  {/* Visual representation */}
                  <div className="flex items-center justify-center gap-4 p-6 bg-muted rounded-lg">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mb-2">
                        IF
                      </div>
                      <p className="text-sm text-muted-foreground">Trigger/Condition</p>
                    </div>
                    <ArrowDownRight className="h-8 w-8 text-muted-foreground" />
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mb-2">
                        THEN
                      </div>
                      <p className="text-sm text-muted-foreground">Action/Result</p>
                    </div>
                  </div>
                </div>
              )}

              {currentStepData.type === "examples" && currentStepData.examples && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Examples:</h3>
                  <div className="grid gap-4">
                    {currentStepData.examples.map((example, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                        <div className="text-3xl">{example.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 text-sm">
                            <Badge variant="outline" className="text-xs">IF</Badge>
                            <span className="text-muted-foreground">{example.if}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm mt-1">
                            <Badge variant="secondary" className="text-xs">THEN</Badge>
                            <span className="text-muted-foreground">{example.then}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.connections && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    Connection to AI:
                  </h3>
                  <div className="grid gap-3">
                    {currentStepData.connections.map((connection, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center">
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
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-accent" />
                      Think & Practice:
                    </h3>
                    <div className="grid gap-4">
                      {currentStepData.prompts.map((prompt, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </div>
                          <span>{prompt}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      💡 Take a moment to really think about these. Write down your ideas!
                    </p>
                  </div>

                  {/* Interactive thinking box */}
                  <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Your Ideas Space:</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Use this mental space to think of your own If-This-Then-That examples:
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">
                        IF: _________________________________
                      </div>
                      <div className="text-sm text-muted-foreground">
                        THEN: _______________________________
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStepData.type === "completion" && (
                <div className="text-center space-y-4">
                  <CheckCircle className="h-16 w-16 text-success mx-auto" />
                  <h3 className="text-xl font-semibold">Lesson Complete!</h3>
                  <p className="text-muted-foreground">
                    You now understand the fundamental logic that drives all automation and AI. 
                    This thinking pattern will be crucial in your AI journey!
                  </p>
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
              {currentStep === steps.length - 1 ? "Complete Lesson" : "Next"}
              {currentStep < steps.length - 1 && <ArrowRight className="h-4 w-4 ml-2" />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level1Lesson3;