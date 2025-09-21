import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Trophy, Clock, CheckCircle, Target, TrendingUp, Calendar, Award } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const ProgressPage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    getUser();
  }, []);

  // Mock data - would come from actual user progress in real app
  const userStats = {
    totalLessons: 19,
    completedLessons: 0,
    currentLevel: 1,
    studyStreak: 0,
    totalStudyTime: 0,
    certificatesEarned: 0
  };

  const levelProgress = [
    {
      level: 1,
      title: "Computer Basics",
      completed: 0,
      total: 4,
      status: "current"
    },
    {
      level: 2, 
      title: "Talking to AI",
      completed: 0,
      total: 5,
      status: "locked"
    },
    {
      level: 3,
      title: "Workflows", 
      completed: 0,
      total: 4,
      status: "locked"
    },
    {
      level: 4,
      title: "Real-Life Projects",
      completed: 0,
      total: 3,
      status: "locked"
    },
    {
      level: 5,
      title: "Business & Earning",
      completed: 0,
      total: 3,
      status: "locked" 
    }
  ];

  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first lesson",
      icon: "🎯",
      earned: false,
      requirement: "Complete 1 lesson"
    },
    {
      id: 2,
      title: "Week Warrior",
      description: "Study for 7 days straight",
      icon: "🔥",
      earned: false,
      requirement: "7-day study streak"
    },
    {
      id: 3,
      title: "Level Master",
      description: "Complete an entire level",
      icon: "🏆",
      earned: false,
      requirement: "Complete Level 1"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "lesson_started",
      title: "Started Computer Basics journey",
      date: "Today",
      icon: "📚"
    }
  ];

  const overallProgress = (userStats.completedLessons / userStats.totalLessons) * 100;

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Track Your Progress</CardTitle>
            <CardDescription>
              Sign in to see your learning journey and achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => navigate("/auth")}
              className="w-full"
            >
              Sign In to View Progress
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

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
              Your Learning Progress
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-2xl">
              Track your journey, celebrate achievements, and see how far you've come 
              in your AI learning adventure.
            </p>
            
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold">{Math.round(overallProgress)}%</div>
                <div className="text-sm text-primary-foreground/80">Overall Progress</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{userStats.studyStreak}</div>
                <div className="text-sm text-primary-foreground/80">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{userStats.completedLessons}</div>
                <div className="text-sm text-primary-foreground/80">Lessons Complete</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Level {userStats.currentLevel}</div>
                <div className="text-sm text-primary-foreground/80">Current Level</div>
              </div>
            </div>
            
            <Progress value={overallProgress} className="h-2 bg-primary-foreground/20" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="levels">Levels</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold">{userStats.totalStudyTime}h</div>
                  <div className="text-sm text-muted-foreground">Total Study Time</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Trophy className="h-8 w-8 mx-auto mb-2 text-accent" />
                  <div className="text-2xl font-bold">{userStats.certificatesEarned}</div>
                  <div className="text-sm text-muted-foreground">Certificates</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 mx-auto mb-2 text-success" />
                  <div className="text-2xl font-bold">{userStats.completedLessons}</div>
                  <div className="text-sm text-muted-foreground">Lessons Done</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-8 w-8 mx-auto mb-2 text-warning" />
                  <div className="text-2xl font-bold">{userStats.studyStreak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </CardContent>
              </Card>
            </div>

            {/* Current Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Current Level Progress</CardTitle>
                <CardDescription>
                  You're currently working on Level {userStats.currentLevel}: Computer Basics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>Level 1: Computer Basics</span>
                    <span>0/4 lessons completed</span>
                  </div>
                  <Progress value={0} />
                  <Button 
                    onClick={() => navigate("/level-1")}
                    className="w-full"
                  >
                    Continue Learning
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="levels" className="space-y-6">
            <div className="grid gap-4">
              {levelProgress.map((level) => {
                const progress = (level.completed / level.total) * 100;
                const isLocked = level.status === "locked";
                const isCurrent = level.status === "current";
                
                return (
                  <Card key={level.level} className={`${isLocked ? 'opacity-60' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            Level {level.level}: {level.title}
                            {isCurrent && <Badge>Current</Badge>}
                            {isLocked && <Badge variant="outline">Locked</Badge>}
                          </CardTitle>
                          <CardDescription>
                            {level.completed} of {level.total} lessons completed
                          </CardDescription>
                        </div>
                        {level.completed === level.total && (
                          <Trophy className="h-6 w-6 text-accent" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <Progress value={progress} />
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{Math.round(progress)}% Complete</span>
                          {!isLocked && (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => navigate(`/level-${level.level}`)}
                            >
                              {isCurrent ? "Continue" : "Start"}
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={`${!achievement.earned ? 'opacity-60' : ''}`}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{achievement.icon}</div>
                    <h3 className="font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {achievement.description}
                    </p>
                    <Badge variant={achievement.earned ? "default" : "outline"}>
                      {achievement.earned ? "Earned" : achievement.requirement}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>
                  Your learning activity from the past week
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-center gap-3 p-3 border rounded-lg">
                      <div className="text-2xl">{activity.icon}</div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.title}</div>
                        <div className="text-sm text-muted-foreground">{activity.date}</div>
                      </div>
                    </div>
                  ))}
                  
                  {recentActivity.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No recent activity. Start learning to see your progress here!
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProgressPage;