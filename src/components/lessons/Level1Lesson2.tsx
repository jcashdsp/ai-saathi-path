import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, CheckCircle, Copy, Search, FileText } from "lucide-react";

interface Level1Lesson2Props {
  onComplete: () => void;
  onBack: () => void;
}

const Level1Lesson2 = ({ onComplete, onBack }: Level1Lesson2Props) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      id: 0,
      title: "Welcome to Copy, Paste & Search",
      content: "Master text manipulation and information finding",
      type: "intro"
    },
    {
      id: 1,
      title: "Text Selection Techniques",
      content: "Learn how to select text efficiently",
      type: "theory",
      techniques: [
        "Single click: Place cursor at a position",
        "Click and drag: Select continuous text",
        "Double-click: Select entire word",
        "Triple-click: Select entire paragraph",
        "Ctrl+A: Select all text in document"
      ]
    },
    {
      id: 2,
      title: "Practice: Text Selection",
      content: "Try selecting text in different ways",
      type: "practice",
      exercises: [
        "Select a single word by double-clicking it",
        "Select a sentence by clicking and dragging", 
        "Select all text with Ctrl+A",
        "Practice clicking to position your cursor"
      ]
    },
    {
      id: 3,
      title: "Copy and Paste Operations",
      content: "Master the fundamental text manipulation skills",
      type: "theory",
      operations: [
        { action: "Copy", shortcut: "Ctrl+C", description: "Copy selected text to clipboard" },
        { action: "Cut", shortcut: "Ctrl+X", description: "Cut (move) selected text to clipboard" },
        { action: "Paste", shortcut: "Ctrl+V", description: "Paste clipboard content" },
        { action: "Undo", shortcut: "Ctrl+Z", description: "Undo last action" }
      ]
    },
    {
      id: 4,
      title: "Practice: Copy & Paste",
      content: "Apply your copy-paste skills",
      type: "practice",
      exercises: [
        "Select this text and copy it (Ctrl+C)",
        "Open a notepad or text editor",
        "Paste the text there (Ctrl+V)",
        "Try cutting text (Ctrl+X) and pasting elsewhere"
      ]
    },
    {
      id: 5,
      title: "Effective Internet Searching",
      content: "Learn to find information quickly online",
      type: "theory",
      searchTips: [
        "Use specific keywords instead of full sentences",
        "Put exact phrases in \"quotation marks\"",
        "Use + for required words, - to exclude words",
        "Try different search engines (Google, Bing, DuckDuckGo)",
        "Check multiple sources for accuracy"
      ]
    },
    {
      id: 6,
      title: "Practice: Internet Search",
      content: "Apply effective search techniques",
      type: "practice",
      exercises: [
        'Search for "computer mouse types" in Google',
        'Try searching for: keyboard shortcuts Windows',
        'Search for your city weather forecast',
        'Practice copying information from websites'
      ]
    },
    {
      id: 7,
      title: "Congratulations!",
      content: "You've mastered text manipulation and searching",
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
              Lesson 2 of 4
            </Badge>
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Copy, Paste & Search
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
                  <Copy className="h-5 w-5" />
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
                  <div className="text-6xl">📝</div>
                  <p className="text-lg text-muted-foreground">
                    Learn essential text manipulation and information searching skills. 
                    These abilities will save you hours of work!
                  </p>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.techniques && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Text Selection Methods:</h3>
                  <div className="grid gap-3">
                    {currentStepData.techniques.map((technique, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                        <FileText className="h-5 w-5 text-primary" />
                        <span>{technique}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.operations && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Copy & Paste Operations:</h3>
                  <div className="grid gap-3">
                    {currentStepData.operations.map((operation, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div className="flex items-center gap-3">
                          <Badge variant="outline" className="font-mono min-w-[80px]">
                            {operation.shortcut}
                          </Badge>
                          <div>
                            <span className="font-medium">{operation.action}</span>
                            <div className="text-sm text-muted-foreground">
                              {operation.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "theory" && currentStepData.searchTips && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Search Tips:
                  </h3>
                  <div className="grid gap-3">
                    {currentStepData.searchTips.map((tip, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                        <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center mt-0.5">
                          {index + 1}
                        </div>
                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {currentStepData.type === "practice" && currentStepData.exercises && (
                <div className="space-y-4">
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Copy className="h-5 w-5 text-accent" />
                      Practice Exercises:
                    </h3>
                    <div className="grid gap-3">
                      {currentStepData.exercises.map((exercise, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-accent text-accent-foreground text-sm flex items-center justify-center mt-0.5">
                            {index + 1}
                          </div>
                          <span>{exercise}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      💡 Practice makes perfect! Try each exercise multiple times.
                    </p>
                  </div>

                  {/* Sample text for practice */}
                  {currentStep === 2 && (
                    <div className="bg-muted/50 border-2 border-dashed border-border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Practice Text:</h4>
                      <p className="text-muted-foreground">
                        This is sample text for you to practice selecting. Try double-clicking 
                        on individual words, or click and drag to select entire sentences. 
                        You can also use Ctrl+A to select all the text in this box.
                      </p>
                    </div>
                  )}
                </div>
              )}

              {currentStepData.type === "completion" && (
                <div className="text-center space-y-4">
                  <CheckCircle className="h-16 w-16 text-success mx-auto" />
                  <h3 className="text-xl font-semibold">Lesson Complete!</h3>
                  <p className="text-muted-foreground">
                    You can now efficiently manipulate text and find information online. 
                    These skills will be useful in every digital task!
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

export default Level1Lesson2;