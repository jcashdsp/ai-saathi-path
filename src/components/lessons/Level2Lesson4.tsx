import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Clock, Megaphone, Lightbulb, Target, Smartphone } from "lucide-react";

const Level2Lesson4 = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4">
            Level 2 • Lesson 4
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Shopkeeper Ad Project: Create Your First AI Advertisement
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              20-25 minutes
            </div>
            <div className="flex items-center gap-2">
              <Megaphone className="h-4 w-4" />
              Hands-on business project
            </div>
          </div>
        </div>

        {/* Learning Objective */}
        <Card className="mb-8 border-level-2/20 bg-gradient-to-r from-level-2/5 to-transparent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-level-2" />
              Project Objective
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground">
              Create compelling advertisements for a local Pakistani business using AI, focusing on WhatsApp marketing, Facebook posts, and shop signage that connects with local customers.
            </p>
          </CardContent>
        </Card>

        {/* Business Scenarios */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-level-2" />
              Choose Your Business Scenario
            </CardTitle>
            <CardDescription>
              Pick one business type to create ads for throughout this project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  icon: "🥘",
                  business: "Biryani Shop",
                  target: "Families, office workers",
                  challenges: "Competition, convincing quality, peak hours"
                },
                {
                  icon: "👔",
                  business: "Tailor Shop", 
                  target: "Wedding customers, professionals",
                  challenges: "Seasonal business, custom fitting trust"
                },
                {
                  icon: "📱",
                  business: "Mobile Repair",
                  target: "Students, working people",
                  challenges: "Trust issues, quick service expectation"
                },
                {
                  icon: "🛍️",
                  business: "Ladies Clothing",
                  target: "Women aged 20-45",
                  challenges: "Fashion trends, online competition"
                },
                {
                  icon: "🍞",
                  business: "Bakery",
                  target: "Local families, morning customers", 
                  challenges: "Fresh products, early morning rush"
                },
                {
                  icon: "🏥",
                  business: "Medical Store",
                  target: "All ages, nearby residents",
                  challenges: "Trust, medicine availability, price"
                }
              ].map((scenario, index) => (
                <div key={index} className="border border-border rounded-lg p-4 hover:border-level-2/30 cursor-pointer">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{scenario.icon}</span>
                    <h4 className="font-semibold text-foreground">{scenario.business}</h4>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p><strong>Target:</strong> <span className="text-muted-foreground">{scenario.target}</span></p>
                    <p><strong>Challenges:</strong> <span className="text-muted-foreground">{scenario.challenges}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Ad Creation Steps */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>📝 Step-by-Step Ad Creation Process</CardTitle>
            <CardDescription>
              Follow these steps to create effective AI-powered advertisements
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                step: "1",
                title: "Identify Your Target Customer",
                description: "Who exactly buys from your shop?",
                example: "Young families in the neighborhood who want fresh, affordable biryani for dinner",
                prompt: "Help me identify the target customers for my [business type] in [area]. What are their needs, budget, and shopping habits?"
              },
              {
                step: "2", 
                title: "Find Your Unique Selling Point",
                description: "What makes your shop special?",
                example: "Only shop that makes biryani with 100% desi ghee and delivers within 30 minutes",
                prompt: "What could be unique selling points for my [business type]? Consider quality, price, service, location, or special features."
              },
              {
                step: "3",
                title: "Create Emotional Connection",
                description: "How does your product make people feel?",
                example: "Brings back memories of grandmother's cooking, makes family dinner special",
                prompt: "How can my [business type] connect emotionally with Pakistani families? What feelings or memories should my ads evoke?"
              },
              {
                step: "4",
                title: "Write Platform-Specific Ads",
                description: "Different platforms need different approaches",
                example: "WhatsApp: Personal message style, Facebook: Visual with details, Shop sign: Quick attention grabber",
                prompt: "Create a [platform] ad for my [business] targeting [customer type]. Use [tone] and include [key benefit]. Keep it under [word limit]."
              }
            ].map((step, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-level-2 text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-green-50 border border-green-200 p-3 rounded">
                    <p className="text-xs font-medium text-green-800 mb-1">EXAMPLE:</p>
                    <p className="text-sm text-green-700">"{step.example}"</p>
                  </div>
                  
                  <div className="bg-level-2/5 border border-level-2/20 p-3 rounded">
                    <p className="text-xs font-medium text-level-2 mb-1">AI PROMPT TO USE:</p>
                    <p className="text-sm font-mono">"{step.prompt}"</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Platform-Specific Templates */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-level-2" />
              Platform-Specific Ad Templates
            </CardTitle>
            <CardDescription>
              Ready-to-use formats for different marketing channels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              {
                platform: "WhatsApp Status/Messages",
                format: "Personal & Direct",
                template: `🥘 *Ghar jaisa biryani* 🏠\n\nAaj ka special: Chicken Biryani\n✅ 100% desi ghee\n✅ 30 minutes mein delivery\n✅ Family pack Rs. 1200\n\nOrder now: 03XX-XXXXXXX\n📍 [Your location]`,
                tips: ["Use emojis", "Keep under 100 words", "Include phone number", "Personal tone"]
              },
              {
                platform: "Facebook Post",
                format: "Visual & Detailed",
                template: `🌟 **Taste the Tradition** 🌟\n\nMade with love, just like Nani's recipe!\n\n👨‍🍳 Fresh ingredients daily\n🕐 Hot & ready in 30 minutes\n🚚 Free delivery above Rs. 1000\n💝 Special family discounts\n\nDon't just eat biryani, experience it!\n\nCall: 03XX-XXXXXXX\nLocation: [Your address]\n\n#Biryani #DesiFood #FamilyTime #HomeMade`,
                tips: ["Add photos", "Use hashtags", "Include address", "Engaging story"]
              },
              {
                platform: "Shop Signage",
                format: "Quick & Eye-catching",
                template: `🥘 BIRYANI HOUSE 🥘\n"Ghar Jaisa Swaad"\n\n✨ DESI GHEE GUARANTEE ✨\n🚚 30-MIN DELIVERY\n📱 Call: 03XX-XXX\n\n[Large, colorful text with contrasting colors]`,
                tips: ["Large fonts", "Bright colors", "Maximum 20 words", "Phone number visible"]
              },
              {
                platform: "Google My Business",
                format: "Professional & Informative", 
                template: `Authentic Biryani Restaurant serving traditional Pakistani flavors since [year]. Fresh ingredients, homestyle cooking, fast delivery. Perfect for family dinners and office lunches.\n\nSpecialties: Chicken Biryani, Mutton Karahi, Fresh Naan\nDelivery: 30 minutes\nPayment: Cash, JazzCash, EasyPaisa`,
                tips: ["Professional tone", "Include specialties", "Payment methods", "Operating hours"]
              }
            ].map((template, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline">{template.platform}</Badge>
                  <span className="text-sm text-muted-foreground">{template.format}</span>
                </div>
                
                <div className="bg-muted p-3 rounded mb-3">
                  <p className="text-xs font-medium text-muted-foreground mb-2">TEMPLATE:</p>
                  <pre className="text-sm whitespace-pre-wrap font-mono">{template.template}</pre>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {template.tips.map((tip, i) => (
                    <div key={i} className="bg-level-2/10 text-level-2 text-xs px-2 py-1 rounded">
                      💡 {tip}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Practice Exercise */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>🎯 Your Turn: Create Complete Ad Campaign</CardTitle>
            <CardDescription>
              Use AI to create a full marketing campaign for your chosen business
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
              <h4 className="font-semibold text-yellow-800 mb-2">📋 Project Checklist</h4>
              <div className="space-y-2 text-sm">
                {[
                  "Choose your business type from above scenarios",
                  "Use AI to identify target customers and pain points",
                  "Create unique selling proposition with AI help",
                  "Write WhatsApp message (under 100 words)",
                  "Create Facebook post (150-200 words with hashtags)",
                  "Design shop sign text (under 20 words)",
                  "Test all ads with friends or family for feedback"
                ].map((task, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>{task}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-level-2/5 border border-level-2/20 p-4 rounded">
              <h4 className="font-semibold text-level-2 mb-2">🤖 Pro AI Prompts for This Project</h4>
              <div className="space-y-2 text-sm">
                {[
                  '"Analyze the local market for [business type] in Pakistani neighborhoods. What are the main customer concerns and buying motivations?"',
                  '"Create a WhatsApp marketing message for [business] that feels personal and trustworthy to Pakistani families."',
                  '"Write a Facebook ad that tells the story of [business] connecting with local community values and traditions."',
                  '"Design catchy shop signage text that works in both English and Urdu for [business type]."'
                ].map((prompt, index) => (
                  <div key={index} className="bg-background border border-border p-2 rounded font-mono text-xs">
                    {prompt}
                  </div>
                ))}
              </div>
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
              By the end of this project, you should have:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Created complete ad campaign for one business type",
                "Used AI to research target customers and market",
                "Written platform-specific content (WhatsApp, Facebook, signage)",
                "Applied emotional connection and local cultural elements",
                "Included clear call-to-action and contact information",
                "Tested ads with real people for feedback",
                "Understood how AI speeds up marketing creation process",
                "Gained confidence in using AI for business communication"
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
            ← Previous: Translate & Simplify
          </Button>
          <Button>
            Next: Review & Practice →
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Level2Lesson4;