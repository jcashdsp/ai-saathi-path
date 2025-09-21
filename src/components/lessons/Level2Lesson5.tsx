import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Trophy, ArrowRight, Lightbulb, Users, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Level2Lesson5 = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            Level 2 • Lesson 5
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Review & Practice: Master AI Communication
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              10-15 minutes
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              Level completion & Level 3 preparation
            </div>
          </div>
        </div>

        {/* Learning Objective */}
        <Card className="mb-8 border-level-2/20 bg-gradient-to-r from-level-2/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-level-2" />
              Lesson Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Consolidate all Level 2 skills, practice real-world scenarios, and prepare for Level 3: AI Workflows & Automation with confidence.
            </p>
          </CardContent>
        </Card>

        {/* Level 2 Skills Review */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-level-2" />
              What You've Mastered in Level 2
            </CardTitle>
            <CardDescription>
              Celebrate your AI communication achievements!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  lesson: "Lesson 1: Myth vs Reality",
                  skills: [
                    "✅ Separated AI facts from fiction",
                    "✅ Reduced fear and built confidence", 
                    "✅ Understood AI as a helpful tool",
                    "✅ Recognized AI limitations and strengths"
                  ]
                },
                {
                  lesson: "Lesson 2: Smart Questions",
                  skills: [
                    "✅ Mastered the CLEAR method",
                    "✅ Learned to provide context to AI",
                    "✅ Asked specific, actionable questions",
                    "✅ Got better AI responses consistently"
                  ]
                },
                {
                  lesson: "Lesson 3: Translate & Simplify", 
                  skills: [
                    "✅ Translated between English and Urdu",
                    "✅ Simplified complex documents",
                    "✅ Helped family members understand forms",
                    "✅ Adapted language for different audiences"
                  ]
                },
                {
                  lesson: "Lesson 4: Business Ads",
                  skills: [
                    "✅ Created AI-powered advertisements",
                    "✅ Targeted local Pakistani customers",
                    "✅ Used multiple marketing platforms",
                    "✅ Applied emotional connection in ads"
                  ]
                }
              ].map((section, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-semibold text-level-2">{section.lesson}</h4>
                  <div className="space-y-1">
                    {section.skills.map((skill, i) => (
                      <p key={i} className="text-sm text-muted-foreground">{skill}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Challenge Scenarios */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-level-2" />
              Final Challenge: Real-World Scenarios
            </CardTitle>
            <CardDescription>
              Test your skills with these practical Pakistani situations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                scenario: "🏥 Medical Emergency",
                situation: "Your elderly father received a medical report in English with complex terms. The family is worried about the diagnosis.",
                challenge: "Use AI to translate and simplify the medical report for your family to understand clearly.",
                aiPrompt: "Translate this medical report to simple Urdu and explain what it means for an elderly patient and their family.",
                skills: ["Translation", "Simplification", "Family help"]
              },
              {
                scenario: "📱 Digital Business Growth",
                situation: "Your cousin's small electronics shop wants to compete with big stores. They need online marketing but don't know how to start.",
                challenge: "Help create a complete digital marketing strategy using AI for social media and customer communication.",
                aiPrompt: "Create a WhatsApp Business strategy for a small electronics shop competing with larger stores in Pakistan.",
                skills: ["Business ads", "Smart questions", "Platform-specific content"]
              },
              {
                scenario: "🏫 School Communication",
                situation: "Your child's school sent a complicated notice about new fee structure and admission requirements for the next year.",
                challenge: "Simplify the notice and create questions to ask the school administration for clarification.",
                aiPrompt: "Simplify this school notice and suggest important questions parents should ask about the new policies.",
                skills: ["Simplification", "Question formation", "Clear communication"]
              },
              {
                scenario: "🏠 Government Form Help",
                situation: "Your neighbor needs help filling out a gas connection application form that has confusing technical and legal language.",
                challenge: "Use AI to understand the form requirements and explain each section in simple Urdu.",
                aiPrompt: "Explain each section of this government form in simple Urdu and list what documents are needed.",
                skills: ["Translation", "Document understanding", "Community help"]
              }
            ].map((scenario, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-2xl">{scenario.scenario.split(' ')[0]}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{scenario.scenario.slice(3)}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{scenario.situation}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-yellow-50 border border-yellow-200 p-3 rounded">
                    <p className="text-xs font-medium text-yellow-800 mb-1">YOUR CHALLENGE:</p>
                    <p className="text-sm text-yellow-700">{scenario.challenge}</p>
                  </div>
                  
                  <div className="bg-level-2/5 border border-level-2/20 p-3 rounded">
                    <p className="text-xs font-medium text-level-2 mb-1">SUGGESTED AI PROMPT:</p>
                    <p className="text-sm font-mono">"{scenario.aiPrompt}"</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {scenario.skills.map((skill, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Community Impact */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-level-2" />
              Your AI Communication Impact
            </CardTitle>
            <CardDescription>
              How your new skills can help your community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">🏠 For Your Family</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Help elderly parents understand medical prescriptions</li>
                  <li>• Translate children's school communications</li>
                  <li>• Simplify banking and insurance documents</li>
                  <li>• Create family WhatsApp announcements</li>
                  <li>• Assist with online shopping and services</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">🏘️ For Your Community</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Help neighbors with government forms</li>
                  <li>• Support local businesses with digital marketing</li>
                  <li>• Translate community notices and announcements</li>
                  <li>• Create clear instructions for community projects</li>
                  <li>• Bridge language gaps in local organizations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Level 3 Preview */}
        <Card className="mb-8 border-level-3/20 bg-gradient-to-r from-level-3/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ArrowRight className="h-5 w-5 text-level-3" />
              Ready for Level 3: AI Workflows & Automation?
            </CardTitle>
            <CardDescription>
              Take your AI skills to the next level with automation
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🔄</div>
                <h4 className="font-semibold text-foreground">Workflows</h4>
                <p className="text-sm text-muted-foreground">Learn how tasks connect step-by-step</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">⚡</div>
                <h4 className="font-semibold text-foreground">Automation</h4>
                <p className="text-sm text-muted-foreground">Let AI handle repetitive tasks</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🏪</div>
                <h4 className="font-semibold text-foreground">Business Growth</h4>
                <p className="text-sm text-muted-foreground">Scale your work with smart systems</p>
              </div>
            </div>
            
            <div className="bg-level-3/10 border border-level-3/20 p-4 rounded">
              <h4 className="font-semibold text-level-3 mb-2">What You'll Build in Level 3:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Automatic customer response system for your business</li>
                <li>• Daily task automation for repetitive work</li>
                <li>• Smart inventory management workflow</li>
                <li>• Family schedule and reminder automation</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Completion Badge */}
        <Card className="mb-8 border-success/20 bg-success/5">
          <CardHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-success rounded-full flex items-center justify-center mb-4">
              <Trophy className="h-8 w-8 text-success-foreground" />
            </div>
            <CardTitle className="text-success">🎉 Congratulations! Level 2 Complete 🎉</CardTitle>
            <CardDescription>
              You've mastered AI communication - from myths to marketing!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4">
              <div className="flex justify-center">
                <Progress value={100} className="w-48 h-3" />
              </div>
              <p className="text-sm text-muted-foreground">
                You're now equipped to confidently communicate with AI, help your family and community, 
                and create effective business content. Ready to automate your workflows?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <Button variant="outline">
                  📖 Review Level 2 Lessons
                </Button>
                <Link to="/level-3">
                  <Button size="lg" className="px-8">
                    Continue to Level 3: Workflows & Automation →
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Indicators */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-success" />
              Level 2 Success Indicators
            </CardTitle>
            <CardDescription>
              Confirm you've achieved these communication milestones:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Can distinguish AI myths from reality confidently",
                "Use CLEAR method to ask effective AI questions",
                "Translate and simplify content for family members",
                "Create compelling business advertisements with AI",
                "Help community members with AI communication",
                "Feel comfortable using AI for daily tasks",
                "Understand when and how to use AI appropriately",
                "Ready to learn AI automation and workflows"
              ].map((indicator, index) => (
                <div key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                  <span>{indicator}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button variant="outline">
            ← Previous: Shopkeeper Ad Project
          </Button>
          <Link to="/level-3">
            <Button size="lg">
              <MessageSquare className="h-4 w-4 mr-2" />
              Start Level 3: AI Workflows →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Level2Lesson5;