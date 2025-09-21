import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, MousePointer, Hand, Eye } from "lucide-react";

interface Level1Lesson1Props {
  onComplete: () => void;
  onBack: () => void;
}

const Level1Lesson1 = ({ onComplete, onBack }: Level1Lesson1Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      id: 0,
      title: "Welcome to Mouse & Keyboard Mastery",
      content: "Learn the essential skills for computer navigation",
      type: "intro"
    },
    {
      id: 1,
      title: "Mouse Basics",
      content: "Understanding your mouse and basic operations",
      type: "theory",
      points: [
        "Left click: Select and activate",
        "Right click: Open context menus", 
        "Scroll wheel: Move up and down pages",
        "Double-click: Open files and programs"
      ]
    },
    {
      id: 2,
      title: "Practice: Mouse Operations",
      content: "Try these mouse actions on your computer",
      type: "practice",
      exercises: [
        "Single-click on your desktop",
        "Right-click to see the context menu",
        "Double-click on a folder to open it", 
        "Use scroll wheel to move up/down this page"
      ]
    },
    {
      id: 3,
      title: "Keyboard Shortcuts",
      content: "Essential keyboard combinations for efficiency",
      type: "theory",
      shortcuts: [
        { keys: "Ctrl + C", action: "Copy text or files" },
        { keys: "Ctrl + V", action: "Paste copied content" },
        { keys: "Ctrl + Z", action: "Undo last action" },
        { keys: "Alt + Tab", action: "Switch between open programs" }
      ]
    },
    {
      id: 4,
      title: "Practice: Keyboard Shortcuts",
      content: "Try these shortcuts with any text",
      type: "practice",
      exercises: [
        "Select some text and press Ctrl+C",
        "Press Ctrl+V to paste it somewhere else",
        "Press Ctrl+Z to undo the paste",
        "Press Alt+Tab to switch programs"
      ]
    },
    {
      id: 5,
      title: "Congratulations!",
      content: "You've mastered basic mouse and keyboard operations",
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
              Lesson 1 of 4
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Mouse & Keyboard Mastery
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
                    Master essential mouse and keyboard skills that form the foundation 
                    for all computer work. These skills will make everything else easier!
                  </p>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.points && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Key Concepts:</h3>
                  <div className="grid gap-3">
                    {currentStepData.points.map((point, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <Hand className="h-5 w-5 text-primary" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.shortcuts && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Essential Shortcuts:</h3>
                  <div className="grid gap-3">
                    {currentStepData.shortcuts.map((shortcut, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="font-mono">
                            {shortcut.keys}
                          </Badge>
                          <span>{shortcut.action}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "practice" && currentStepData.exercises && (
                <div className="space-y-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Eye className="h-5 w-5 text-accent" />
                      Practice These Actions:
                    </h3>
                    <div className="grid gap-3">
                      {currentStepData.exercises.map((exercise, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center">
                            {index + 1}
                          </div>
                          <span>{exercise}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      💡 Take your time and practice each action. There's no rush!
                    </p>
                  </div>
                </div>
              )}

              {currentStepData.type === "completion" && (
                <div className="text-center space-y-4">
                  <CheckCircle className="h-16 w-16 text-success mx-auto" />
                  <h3 className="text-xl font-semibold">Lesson Complete!</h3>
                  <p className="text-muted-foreground">
                    You now have the foundational mouse and keyboard skills needed 
                    for efficient computer use. Ready for the next lesson?
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

export default Level1Lesson1;