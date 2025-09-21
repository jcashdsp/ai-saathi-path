import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, MessageSquare, Target, ArrowRight, X } from "lucide-react";

const Level2Lesson2 = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            Level 2 • Lesson 2
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Talking to AI: How to Ask Questions
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              20-25 minutes
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Master the CLEAR method
            </div>
          </div>
        </div>

        {/* Learning Objective */}
        <Card className="mb-8 border-level-2/20 bg-gradient-to-r from-level-2/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-level-2" />
              Learning Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Learn how to communicate effectively with AI using the CLEAR method to get useful, relevant answers every time.
            </p>
          </CardContent>
        </Card>

        {/* The CLEAR Method */}
        <Card className="mb-8 border-level-2/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-level-2" />
              The CLEAR Method for AI Questions
            </CardTitle>
            <CardDescription>
              A simple framework to get better AI responses every time
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                letter: "C",
                word: "Context",
                description: "Give background information",
                example: "I'm a shopkeeper in Lahore selling women's clothes...",
                color: "bg-red-500"
              },
              {
                letter: "L", 
                word: "Language",
                description: "Specify your preferred language",
                example: "Please respond in simple Urdu...",
                color: "bg-orange-500"
              },
              {
                letter: "E",
                word: "Examples",
                description: "Show what you want or don't want",
                example: "Like this format: 1. Point one, 2. Point two...",
                color: "bg-yellow-500"
              },
              {
                letter: "A",
                word: "Action",
                description: "Be specific about what you want AI to do",
                example: "Write a Facebook ad, Translate this text, Explain this concept...",
                color: "bg-green-500"
              },
              {
                letter: "R",
                word: "Result",
                description: "Define the format or length you want",
                example: "In 3 bullet points, As a WhatsApp message, In 50 words...",
                color: "bg-blue-500"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-4 border border-border rounded-lg">
                <div className={`${item.color} text-white h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                  {item.letter}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{item.word}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <div className="bg-muted p-2 rounded text-xs font-mono">
                    {item.example}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Bad vs Good Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>❌ Bad vs ✅ Good Questions</CardTitle>
            <CardDescription>
              See the difference between vague and effective AI questions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                topic: "Getting Recipe Help",
                bad: "Tell me about food",
                good: "I want to cook chicken biryani for 6 people in Lahore. Please give me a simple recipe in Urdu with ingredients list and step-by-step cooking instructions.",
                improvements: ["Added specific dish", "Mentioned serving size", "Requested language", "Asked for specific format"]
              },
              {
                topic: "Business Translation",
                bad: "Translate this",
                good: "I'm writing a WhatsApp message to customers about my tailoring shop's Eid discount. Please translate this English text into polite, respectful Urdu that older customers will appreciate: 'Special 20% discount on all Eid clothes until March 15th.'",
                improvements: ["Gave context", "Specified tone", "Mentioned audience", "Included deadline"]
              },
              {
                topic: "Learning Help",
                bad: "Help with computer",
                good: "I'm 45 years old and new to computers. Please explain in simple Urdu how to copy text from a Word document and paste it into WhatsApp. Give me 5 easy steps that I can follow on my Windows laptop.",
                improvements: ["Shared experience level", "Asked for specific skill", "Requested step count", "Mentioned device type"]
              }
            ].map((example, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-4">{example.topic}</h4>
                
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <X className="h-4 w-4 text-destructive" />
                      <Badge variant="destructive" className="text-xs">BAD QUESTION</Badge>
                    </div>
                    <div className="bg-destructive/10 border border-destructive/20 p-3 rounded text-sm">
                      "{example.bad}"
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-success" />
                      <Badge variant="default" className="text-xs bg-success text-success-foreground">GOOD QUESTION</Badge>
                    </div>
                    <div className="bg-success/10 border border-success/20 p-3 rounded text-sm">
                      "{example.good}"
                    </div>
                  </div>
                </div>
                
                <div className="bg-muted p-3 rounded">
                  <p className="text-xs font-medium text-muted-foreground mb-2">IMPROVEMENTS MADE:</p>
                  <div className="flex flex-wrap gap-2">
                    {example.improvements.map((improvement, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {improvement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Pakistani Context Examples */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🇵🇰 Pakistani Context Questions</CardTitle>
            <CardDescription>
              Perfect questions for common Pakistani situations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                situation: "🏪 Shopkeeper Advertisement",
                question: "I run a mobile phone shop in Karachi's Saddar area. Write a Facebook post in Urdu announcing that we now repair all iPhone models. Make it sound trustworthy and professional for customers aged 25-45."
              },
              {
                situation: "🎓 Student Assignment Help", 
                question: "I'm a Grade 10 student in Lahore. Help me write a 200-word essay about Pakistan Day in simple English. Include 3 main points: history, celebration, and importance."
              },
              {
                situation: "👨‍⚕️ Medical Translation",
                question: "My doctor gave me this prescription in English medical terms. Please translate it into simple Urdu and explain what each medicine is for, so I can understand my treatment better."
              },
              {
                situation: "🍳 Cooking Instructions",
                question: "My mother-in-law wants to teach me her famous haleem recipe. Help me write down her verbal instructions in organized steps in Urdu, so I don't forget anything."
              },
              {
                situation: "💼 Job Application",
                question: "I'm applying for a data entry job in Islamabad. Help me write a professional WhatsApp message to the hiring manager in English, introducing myself and showing interest in the position."
              }
            ].map((example, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <div className="text-lg flex-shrink-0">{example.situation.split(' ')[0]}</div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground mb-2">{example.situation.split(' ').slice(1).join(' ')}</h4>
                    <div className="bg-level-2/10 border border-level-2/20 p-3 rounded text-sm">
                      "{example.question}"
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Interactive Exercise */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🎮 Practice Exercise: Fix the Questions</CardTitle>
            <CardDescription>
              Improve these vague questions using the CLEAR method
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  bad: "Write something about Eid",
                  hint: "What type of writing? For whom? In which language? What about Eid specifically?"
                },
                {
                  bad: "Help me with WhatsApp",
                  hint: "What specific WhatsApp task? What's your skill level? What device are you using?"
                },
                {
                  bad: "Translate", 
                  hint: "Translate what text? From which language to which? For what purpose?"
                }
              ].map((item, index) => (
                <div key={index} className="border border-border rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="destructive" className="text-xs">NEEDS IMPROVEMENT</Badge>
                  </div>
                  <p className="font-mono text-sm bg-muted p-2 rounded mb-3">"{item.bad}"</p>
                  <p className="text-xs text-muted-foreground mb-3">💡 {item.hint}</p>
                  <div className="bg-success/5 border border-success/20 rounded p-3">
                    <p className="text-xs font-medium text-success mb-2">YOUR IMPROVED VERSION:</p>
                    <div className="min-h-[60px] bg-background border border-border rounded p-2 text-sm">
                      [Click here to practice writing your improved question...]
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
                "Write specific AI questions instead of vague ones",
                "Use the CLEAR method for better AI responses",
                "Break complex tasks into smaller, clear steps", 
                "Ask for content in your preferred language and tone",
                "Provide context that helps AI understand your needs",
                "Request specific formats (lists, steps, paragraphs)",
                "Feel confident asking AI for help with Pakistani contexts",
                "Know how to refine questions when AI responses aren't helpful"
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
            ← Previous: AI Myths vs Reality
          </Button>
          <Button>
            Next: Translate & Simplify →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Level2Lesson2;