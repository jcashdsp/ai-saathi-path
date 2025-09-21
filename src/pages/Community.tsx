import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageCircle, Users, Star, Trophy, ExternalLink, Heart, Share, Calendar } from "lucide-react";

const Community = () => {
  const navigate = useNavigate();

  const communityStats = [
    { label: "Active Members", value: "2,500+", icon: Users },
    { label: "Success Stories", value: "150+", icon: Star },
    { label: "Daily Messages", value: "500+", icon: MessageCircle },
    { label: "Countries", value: "12", icon: Trophy }
  ];

  const successStories = [
    {
      id: 1,
      name: "Ahmed Hassan",
      location: "Lahore, Pakistan", 
      story: "Started with Level 1 computer basics. Now I run AI automation services for local shops and earn ₨25,000/month extra income!",
      achievement: "Freelancer",
      timeframe: "3 months",
      avatar: "AH"
    },
    {
      id: 2,
      name: "Fatima Sheikh",
      location: "Karachi, Pakistan",
      story: "Used AI workflows to automate my family's textile business inventory. Saved 15 hours/week and increased efficiency by 40%.",
      achievement: "Business Owner", 
      timeframe: "2 months",
      avatar: "FS"
    },
    {
      id: 3,
      name: "Ravi Kumar",
      location: "Mumbai, India",
      story: "Applied Level 2 AI communication skills to create content for social media. Now managing 5+ client accounts!",
      achievement: "Digital Marketer",
      timeframe: "4 months", 
      avatar: "RK"
    }
  ];

  const communityGroups = [
    {
      id: 1,
      name: "WhatsApp Study Group",
      description: "Daily discussions, Q&A, and peer support in Urdu/Hindi/English",
      members: "800+",
      platform: "WhatsApp",
      link: "#whatsapp-group",
      icon: MessageCircle
    },
    {
      id: 2,
      name: "Facebook Community",
      description: "Share projects, celebrate achievements, and network with learners",
      members: "1,200+", 
      platform: "Facebook",
      link: "#facebook-group",
      icon: Users
    },
    {
      id: 3,
      name: "Discord Server",
      description: "Real-time chat, study sessions, and technical support",
      members: "500+",
      platform: "Discord", 
      link: "#discord-server",
      icon: MessageCircle
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Weekly AI Q&A Session",
      date: "Every Saturday, 7 PM PKT",
      description: "Live session with instructors and community experts",
      type: "Recurring"
    },
    {
      id: 2,
      title: "Success Story Showcase",
      date: "Last Sunday of Month",
      description: "Community members share their AI implementation stories",
      type: "Monthly"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-primary-foreground hover:text-primary-foreground/80"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </div>
          
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Community & Support
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl">
              Join thousands of learners from Pakistan, India, Bangladesh, and beyond. 
              Get support, share success, and grow together.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              {communityStats.map((stat) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent className="h-5 w-5 text-accent" />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/80">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Community Groups */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Join Our Learning Communities</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Connect with fellow learners, get instant support, and stay motivated on your AI journey.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {communityGroups.map((group) => {
              const IconComponent = group.icon;
              return (
                <Card key={group.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <Badge variant="outline">{group.members}</Badge>
                    </div>
                    <CardTitle className="text-lg">{group.name}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {group.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" variant="outline">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Join {group.platform}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Real stories from community members who transformed their careers and businesses with AI skills.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story) => (
              <Card key={story.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-level rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {story.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold">{story.name}</h3>
                      <p className="text-sm text-muted-foreground">{story.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="secondary">{story.achievement}</Badge>
                    <Badge variant="outline">{story.timeframe}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    "{story.story}"
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                      <Heart className="h-3 w-3" />
                      Like
                    </button>
                    <button className="flex items-center gap-1 hover:text-foreground transition-colors">
                      <Share className="h-3 w-3" />
                      Share
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Community Events</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Regular events to help you learn faster and connect with the community.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge variant="outline">{event.type}</Badge>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="text-accent font-medium">
                    {event.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <Button variant="outline" className="w-full">
                    Set Reminder
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Guidelines */}
        <Card>
          <CardHeader>
            <CardTitle>Community Guidelines</CardTitle>
            <CardDescription>
              Help us maintain a supportive and inclusive learning environment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-3">👍 Do:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Help fellow learners with questions and challenges</li>
                  <li>• Share your progress and celebrate others' achievements</li>
                  <li>• Use respectful language in all communications</li>
                  <li>• Provide constructive feedback and suggestions</li>
                  <li>• Share relevant resources and learning materials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">❌ Don't:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Spam or promote unrelated content</li>
                  <li>• Use offensive or discriminatory language</li>
                  <li>• Share copyrighted materials without permission</li>
                  <li>• Engage in arguments or personal attacks</li>
                  <li>• Post off-topic content in learning channels</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;