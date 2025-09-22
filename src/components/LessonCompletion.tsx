import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Star, Trophy, Sparkles } from "lucide-react";
import { getUserProgress, getBadgeInfo } from "@/lib/progress";

interface LessonCompletionProps {
  levelId: number;
  lessonId: string;
  lessonTitle: string;
  score?: number;
  timeSpent?: number;
  onContinue: () => void;
  isLastLesson?: boolean;
}

export const LessonCompletion: React.FC<LessonCompletionProps> = ({
  levelId,
  lessonId, 
  lessonTitle,
  score,
  timeSpent,
  onContinue,
  isLastLesson = false
}) => {
  const [showCelebration, setShowCelebration] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const userProgress = getUserProgress();

  // Get any newly earned badges
  const recentBadges = userProgress.badges.slice(-2); // Show last 2 badges

  useEffect(() => {
    // Trigger celebration animation
    setShowCelebration(true);
    setConfettiActive(true);
    
    // Stop confetti after animation
    const timer = setTimeout(() => setConfettiActive(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (ms?: number) => {
    if (!ms) return null;
    const minutes = Math.floor(ms / 60000);
    return `${minutes} min${minutes !== 1 ? 's' : ''}`;
  };

  const getEncouragementMessage = () => {
    const messages = [
      "شاباش! (Excellent work!)",
      "بہت اچھا! (Very good!)",
      "مبارک ہو! (Congratulations!)",
      "آپ بہت تیز ہیں! (You're very quick!)",
      "واہ واہ! (Wow, amazing!)"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  return (
    <div className="min-h-screen bg-background py-8 relative overflow-hidden">
      {/* Confetti Animation */}
      {confettiActive && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            >
              {Math.random() > 0.5 ? '🎉' : '⭐'}
            </div>
          ))}
        </div>
      )}

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        {/* Main Completion Card */}
        <Card className={`border-success/30 bg-gradient-to-br from-success/10 to-primary/5 transition-all duration-1000 ${
          showCelebration ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}>
          <CardHeader className="text-center pb-4">
            {/* Success Icon with Pakistani truck art style border */}
            <div className="relative mx-auto mb-6">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto relative">
                <div className="absolute inset-0 rounded-full border-4 border-dashed border-success/30 animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-2 border-success/50"></div>
                <CheckCircle className="h-10 w-10 text-success-foreground" />
              </div>
              {/* Decorative stars around the icon */}
              <Star className="absolute -top-2 -right-2 h-6 w-6 text-warning animate-bounce" />
              <Star className="absolute -bottom-2 -left-2 h-4 w-4 text-accent animate-bounce delay-200" />
              <Sparkles className="absolute -top-2 -left-2 h-5 w-5 text-primary animate-bounce delay-500" />
            </div>

            <div className="space-y-2">
              <Badge className="bg-success text-success-foreground text-lg px-4 py-1">
                ✅ Lesson Complete!
              </Badge>
              
              <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">
                {lessonTitle}
              </CardTitle>
              
              <p className="text-lg text-success font-semibold">
                {getEncouragementMessage()}
              </p>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Performance Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {score !== undefined && (
                <div className="text-center p-4 rounded-lg bg-card border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">{score}%</div>
                  <div className="text-sm text-muted-foreground">Quiz Score</div>
                  {score >= 90 && <div className="text-xs text-success mt-1">🏆 Excellent!</div>}
                  {score >= 70 && score < 90 && <div className="text-xs text-primary mt-1">👍 Good job!</div>}
                </div>
              )}
              
              <div className="text-center p-4 rounded-lg bg-card border border-border">
                <div className="text-3xl font-bold text-level-2 mb-1">+10</div>
                <div className="text-sm text-muted-foreground">Points Earned</div>
                {score && score >= 85 && <div className="text-xs text-accent mt-1">🌟 Bonus points!</div>}
              </div>
              
              {timeSpent && (
                <div className="text-center p-4 rounded-lg bg-card border border-border md:col-span-2">
                  <div className="text-xl font-bold text-foreground mb-1">{formatTime(timeSpent)}</div>
                  <div className="text-sm text-muted-foreground">Time Spent</div>
                  {timeSpent < 10 * 60 * 1000 && <div className="text-xs text-warning mt-1">⚡ Speed learner!</div>}
                </div>
              )}
            </div>

            {/* New Badges */}
            {recentBadges.length > 0 && (
              <div className="p-4 rounded-lg bg-gradient-to-r from-accent/10 to-warning/10 border border-accent/20">
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-accent">New Badge{recentBadges.length > 1 ? 's' : ''} Earned!</span>
                  </div>
                  <div className="flex justify-center gap-3">
                    {recentBadges.map((badgeId) => {
                      const badge = getBadgeInfo(badgeId);
                      return badge ? (
                        <Badge key={badgeId} className="bg-accent text-accent-foreground px-3 py-1">
                          {badge.icon} {badge.name}
                        </Badge>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Progress Summary */}
            <div className="text-center space-y-2 pt-2">
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <span>Total Points:</span>
                <Badge variant="outline" className="font-bold">
                  {userProgress.points}
                </Badge>
              </div>
              
              {!isLastLesson && (
                <p className="text-sm text-muted-foreground">
                  Ready for your next challenge? Keep up the great momentum!
                </p>
              )}
              
              {isLastLesson && (
                <p className="text-sm text-primary font-medium">
                  🎉 Congratulations! You've completed Level {levelId}!
                </p>
              )}
            </div>

            {/* Continue Button */}
            <div className="text-center pt-4">
              <Button 
                onClick={onContinue}
                size="lg"
                className="px-8 py-3 text-lg font-semibold bg-gradient-to-r from-primary to-level-2 hover:from-primary/90 hover:to-level-2/90"
              >
                {isLastLesson ? (
                  <>
                    Complete Level {levelId}
                    <Trophy className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Continue Learning
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
              
              <p className="text-xs text-muted-foreground mt-3">
                {isLastLesson ? "تبریکات! (Congratulations!)" : "آگے بڑھتے رہیں! (Keep moving forward!)"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Cultural Design Elements */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-6xl opacity-10 animate-pulse delay-1000">
          🌟
        </div>
        <div className="absolute top-1/3 right-8 transform -translate-y-1/2 text-4xl opacity-10 animate-pulse delay-1500">
          🎯
        </div>
        <div className="absolute bottom-1/4 left-1/4 text-3xl opacity-10 animate-pulse delay-700">
          ⭐
        </div>
      </div>
    </div>
  );
};