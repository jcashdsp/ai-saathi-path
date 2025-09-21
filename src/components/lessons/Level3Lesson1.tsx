import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Workflow, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Level3Lesson1 = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <Button variant="ghost" className="mb-4 text-level-3 hover:text-level-3/80">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Level 3
        </Button>
        
        <Badge variant="secondary" className="mb-2 bg-level-3/10 text-level-3 border-level-3/20">
          Level 3 • Lesson 1
        </Badge>
        
        <h1 className="text-4xl font-bold mb-2 text-foreground">What is a Workflow?</h1>
        <div className="flex items-center gap-4 text-muted-foreground mb-4">
          <span>15-20 minutes</span>
          <span>•</span>
          <span>Beginner</span>
        </div>
        <p className="text-xl text-muted-foreground">
          Understand how tasks connect together step by step
        </p>
      </div>

      <div className="space-y-8">
        {/* Learning Objective */}
        <Card className="border-level-3/20 bg-gradient-to-br from-level-3/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-level-3">
              <Workflow className="h-5 w-5" />
              Learning Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Learn the concept of workflows and automation using simple, everyday 
              examples from daily life and small businesses in Pakistan.
            </p>
          </CardContent>
        </Card>

        {/* Everyday Workflow Examples */}
        <Card>
          <CardHeader>
            <CardTitle>🧩 Everyday Workflow Examples</CardTitle>
            <CardDescription>
              Workflows are everywhere in our daily lives - here are some you already know!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-muted/30">
                <h4 className="font-semibold mb-2">Morning Routine</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Wake up</span> → <span>Brush teeth</span> → <span>Make tea</span> → <span>Go to work</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 bg-muted/30">
                <h4 className="font-semibold mb-2">Shopkeeper Sales Process</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Customer enters</span> → <span>Choose product</span> → <span>Calculate price</span> → <span>Take payment</span> → <span>Give receipt</span>
                </div>
              </div>
              
              <div className="border rounded-lg p-4 bg-muted/30">
                <h4 className="font-semibold mb-2">Food Delivery Process</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Take order</span> → <span>Prepare food</span> → <span>Pack items</span> → <span>Assign driver</span> → <span>Deliver</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Practice Activity */}
        <Card className="border-level-3/20">
          <CardHeader>
            <CardTitle>🎮 Practice Activity</CardTitle>
            <CardDescription>
              Let's practice! Arrange the steps of a "tea stall order" workflow in the correct order:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-3 text-muted-foreground">Steps (in random order):</h4>
                <div className="space-y-2">
                  <div className="border rounded p-3 bg-muted/50">Boil water</div>
                  <div className="border rounded p-3 bg-muted/50">Take order from customer</div>
                  <div className="border rounded p-3 bg-muted/50">Add tea leaves & milk</div>
                  <div className="border rounded p-3 bg-muted/50">Serve tea in cup</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-level-3">Correct Order:</h4>
                <div className="space-y-2">
                  <div className="border rounded p-3 bg-level-3/10 border-level-3/20">1. Take order from customer</div>
                  <div className="border rounded p-3 bg-level-3/10 border-level-3/20">2. Boil water</div>
                  <div className="border rounded p-3 bg-level-3/10 border-level-3/20">3. Add tea leaves & milk</div>
                  <div className="border rounded p-3 bg-level-3/10 border-level-3/20">4. Serve tea in cup</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Insight */}
        <Card className="bg-gradient-to-r from-level-3/10 to-level-3/5 border-level-3/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-level-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-level-3 mb-2">Key Insight</h4>
                <p className="text-foreground">
                  Every workflow has clear steps that must happen in order. When we understand these steps, 
                  we can find ways to make them faster or let AI help us automate some parts!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Indicators */}
        <Card>
          <CardHeader>
            <CardTitle>✅ Success Indicators</CardTitle>
            <CardDescription>
              By the end of this lesson, you should be able to:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-level-3" />
                <span>Explain what a workflow is using everyday examples</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-level-3" />
                <span>Identify the steps in a simple workflow</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-level-3" />
                <span>Understand that AI can help automate steps in workflows</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-12 pt-8 border-t">
        <Button variant="outline" className="text-muted-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Level 2
        </Button>
        
        <Button className="bg-level-3 hover:bg-level-3/90 text-white">
          Next: Automation Basics
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default Level3Lesson1;