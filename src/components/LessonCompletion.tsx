import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Trophy, Clock, Star, Sparkles, Award, Crown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import BilingualText from "@/components/BilingualText";
import { culturalPhrases } from "@/lib/translations";
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
      { english: "Excellent work! Keep it up!", urdu: "شاندار کام! جاری رکھیں!" },
      { english: "You're making great progress!", urdu: "آپ بہترین ترقی کر رہے ہیں!" },
      { english: "Well done! Ready for the next challenge?", urdu: "بہت خوب! اگلے چیلنج کے لیے تیار ہیں؟" },
      { english: "Outstanding effort! You're a fast learner!", urdu: "شاندار کوشش! آپ تیزی سے سیکھ رہے ہیں!" },
      { english: "Keep going! You're doing amazing!", urdu: "جاری رکھیں! آپ کمال کر رہے ہیں!" }
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  const encouragement = getEncouragementMessage();
  const { language } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-cultural-gold/5 to-pakistan-green/5 islamic-pattern">
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
              {i % 4 === 0 && '🎉'}
              {i % 4 === 1 && '⭐'}
              {i % 4 === 2 && '🌙'}
              {i % 4 === 3 && '✨'}
            </div>
          ))}
        </div>
      )}

      <Card className="w-full max-w-2xl border-2 truck-art-border bg-gradient-to-br from-success/5 to-cultural-emerald/5 shadow-elegant celebration-glow">
        <CardHeader className="text-center pb-6 space-y-6 islamic-pattern">
          {/* Cultural Celebration Animation */}
          <div className="relative">
            <div className={`w-28 h-28 bg-gradient-cultural rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-700 ${
              showCelebration ? 'scale-110 celebration-glow' : 'scale-100'
            } border-4 border-cultural-gold/30`}>
              <div className="flex items-center gap-2">
                <Crown className="h-10 w-10 text-white animate-bounce" />
                <Star className="h-8 w-8 text-cultural-gold animate-pulse" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <CardTitle className="text-4xl font-bold">
                <span className="bg-gradient-cultural bg-clip-text text-transparent">
                  🎉 
                  <BilingualText 
                    translation={culturalPhrases.congratulations}
                    className="inline-block mx-2"
                    englishClassName="text-3xl font-bold"
                    urduClassName="text-2xl font-urdu font-bold"
                  />
                  🎉
                </span>
              </CardTitle>
              
              <CardDescription className="text-xl font-medium text-cultural-emerald">
                {lessonTitle}
              </CardDescription>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-to-r from-cultural-gold/10 to-cultural-emerald/10 border border-cultural-gold/20">
              <BilingualText 
                translation={encouragement}
                englishClassName="text-lg font-medium text-cultural-emerald"
                urduClassName="text-lg font-urdu font-medium text-pakistan-green urdu-animate"
              />
            </div>
          </div>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {score !== undefined && (
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-cultural-gold/10 to-cultural-emerald/10 border border-cultural-gold/20">
                <div className="text-4xl font-bold text-pakistan-green mb-2">{score}%</div>
                <div className="text-sm text-muted-foreground font-urdu-ltr">Quiz Score / کوئز اسکور</div>
                {score >= 90 && <div className="text-xs text-success mt-2">🏆 شاندار! / Excellent!</div>}
                {score >= 70 && score < 90 && <div className="text-xs text-primary mt-2">👍 اچھا! / Good job!</div>}
              </div>
            )}
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-truck-art-blue/10 to-pakistan-green/10 border border-pakistan-green/20">
              <div className="text-4xl font-bold text-cultural-emerald mb-2">+15</div>
              <div className="text-sm text-muted-foreground font-urdu-ltr">Points Earned / کمائے پوائنٹس</div>
              {score && score >= 85 && <div className="text-xs text-accent mt-2">🌟 بونس! / Bonus!</div>}
            </div>
            
            {timeSpent && (
              <div className="text-center p-6 rounded-lg bg-gradient-to-br from-cultural-ruby/10 to-truck-art-pink/10 border border-cultural-ruby/20 md:col-span-2">
                <div className="text-2xl font-bold text-foreground mb-2">{formatTime(timeSpent)}</div>
                <div className="text-sm text-muted-foreground font-urdu-ltr">Time Spent / وقت</div>
                {timeSpent < 10 * 60 * 1000 && <div className="text-xs text-warning mt-2">⚡ تیز! / Speed learner!</div>}
              </div>
            )}
          </div>

          {/* Continue Button */}
          <div className="text-center pt-6">
            <Button 
              onClick={onContinue}
              size="lg"
              className="px-12 py-4 text-xl font-bold bg-gradient-cultural hover:scale-105 transition-all duration-300 celebration-glow"
            >
              {isLastLesson ? (
                <>
                  <Crown className="mr-3 h-6 w-6" />
                  Complete Level {levelId} / لیول مکمل کریں
                  <Trophy className="ml-3 h-6 w-6" />
                </>
              ) : (
                <>
                  <Star className="mr-3 h-5 w-5" />
                  Continue Learning / سیکھنا جاری رکھیں
                  <Sparkles className="ml-3 h-5 w-5" />
                </>
              )}
            </Button>
            
            <p className="text-base text-cultural-emerald mt-4 font-urdu-ltr">
              {isLastLesson ? "مبارک ہو! Congratulations! 🎊" : "بہترین! Keep moving forward! 🌟"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
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