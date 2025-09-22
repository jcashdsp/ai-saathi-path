import { useState, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, ArrowRight, GripVertical } from "lucide-react";

export interface MixMatchPair {
  id: string;
  left: string;
  right: string;
  explanation?: string;
}

export interface MixMatchQuestion {
  id: string;
  title: string;
  instructions: string;
  pairs: MixMatchPair[];
  context?: string;
}

interface MixMatchQuizProps {
  questions: MixMatchQuestion[];
  title: string;
  description?: string;
  onComplete: (score: number, correct: number, answers: any[]) => void;
  passingScore?: number;
}

export const MixMatchQuiz: React.FC<MixMatchQuizProps> = ({
  questions,
  title,
  description,
  onComplete,
  passingScore = 70
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: { matches: { [key: string]: string }, correct: boolean, score: number } }>({});
  const [matches, setMatches] = useState<{ [key: string]: string }>({});
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime] = useState(Date.now());

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  // Shuffle right items for each question
  const [shuffledRightItems] = useState(() => {
    return questions.map(q => {
      const items = [...q.pairs.map(p => ({ id: p.id, text: p.right }))];
      // Simple shuffle
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
      }
      return items;
    });
  });

  const handleDragStart = (e: React.DragEvent, itemId: string) => {
    setDraggedItem(itemId);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (draggedItem) {
      setMatches(prev => ({
        ...prev,
        [targetId]: draggedItem
      }));
      setDraggedItem(null);
    }
  };

  const handleSubmitAnswers = () => {
    // Check how many matches are correct
    let correctCount = 0;
    question.pairs.forEach(pair => {
      if (matches[pair.id] === pair.id) {
        correctCount++;
      }
    });

    const score = Math.round((correctCount / question.pairs.length) * 100);
    const isCorrect = score >= passingScore;

    setAnswers(prev => ({
      ...prev,
      [question.id]: {
        matches: { ...matches },
        correct: isCorrect,
        score
      }
    }));

    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
      setMatches({});
      setShowExplanation(false);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    const totalScore = Object.values(answers).reduce((sum, answer) => sum + answer.score, 0) / Object.keys(answers).length;
    const correctAnswers = Object.values(answers).filter(a => a.correct).length;
    
    const answerData = Object.entries(answers).map(([questionId, answer]) => ({
      questionId,
      correct: answer.correct,
      selectedAnswer: JSON.stringify(answer.matches)
    }));

    setQuizCompleted(true);
    onComplete(Math.round(totalScore), correctAnswers, answerData);
  };

  const correctAnswers = Object.values(answers).filter(a => a.correct).length;
  const finalScore = quizCompleted 
    ? Math.round(Object.values(answers).reduce((sum, answer) => sum + answer.score, 0) / Math.max(Object.keys(answers).length, 1))
    : 0;

  if (quizCompleted) {
    return (
      <Card className="border-success/20 bg-success/5">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-success-foreground" />
          </div>
          <CardTitle>
            {finalScore >= passingScore ? "🎉 Quiz Completed!" : "Quiz Finished"}
          </CardTitle>
          <CardDescription>
            {finalScore >= passingScore 
              ? `Excellent work! You scored ${finalScore}%` 
              : `You scored ${finalScore}%. Keep practicing!`
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">{correctAnswers}</div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">{finalScore}%</div>
              <div className="text-sm text-muted-foreground">Score</div>
            </div>
          </div>
          
          {finalScore >= passingScore && (
            <Badge className="bg-success text-success-foreground">
              ✅ Passed! Keep going!
            </Badge>
          )}
          
          {finalScore < passingScore && (
            <div className="text-sm text-muted-foreground">
              Need {passingScore}% to pass. Review the lesson and try again!
            </div>
          )}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>{title}</span>
          <span>Question {currentQuestion + 1} of {questions.length}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Question Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">Match Pairs</Badge>
            {question.context && (
              <Badge variant="secondary" className="text-xs">
                {question.context}
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg leading-relaxed">
            {question.title}
          </CardTitle>
          <CardDescription>
            {question.instructions}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Matching Interface */}
          {!showExplanation && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  Match These
                </h4>
                {question.pairs.map((pair) => (
                  <div
                    key={pair.id}
                    className="p-4 border-2 border-dashed border-border rounded-lg min-h-[60px] flex items-center justify-between transition-colors hover:border-primary/50"
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, pair.id)}
                  >
                    <span className="text-sm font-medium">{pair.left}</span>
                    {matches[pair.id] && (
                      <Badge variant="secondary" className="ml-2">
                        Matched
                      </Badge>
                    )}
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                  With These
                </h4>
                {shuffledRightItems[currentQuestion]?.map((item) => {
                  const isUsed = Object.values(matches).includes(item.id);
                  return (
                    <div
                      key={item.id}
                      draggable={!isUsed}
                      onDragStart={(e) => handleDragStart(e, item.id)}
                      className={`p-4 border rounded-lg cursor-move flex items-center gap-2 transition-all ${
                        isUsed 
                          ? 'opacity-50 bg-muted cursor-not-allowed' 
                          : 'hover:border-primary hover:bg-primary/5 active:scale-95'
                      }`}
                    >
                      <GripVertical className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Submit Button */}
          {!showExplanation && Object.keys(matches).length === question.pairs.length && (
            <Button 
              onClick={handleSubmitAnswers}
              className="w-full"
              size="lg"
            >
              Submit Answers
            </Button>
          )}

          {/* Explanation */}
          {showExplanation && (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg border ${
                answers[question.id]?.correct 
                  ? 'border-success/20 bg-success/5' 
                  : 'border-destructive/20 bg-destructive/5'
              }`}>
                <div className="flex items-center gap-2 mb-3">
                  {answers[question.id]?.correct ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="font-semibold text-success">Great job!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-destructive" />
                      <span className="font-semibold text-destructive">Review needed</span>
                    </>
                  )}
                  <Badge variant="outline" className="ml-auto">
                    {answers[question.id]?.score}%
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  <p className="text-sm font-semibold">Correct matches:</p>
                  {question.pairs.map((pair) => (
                    <div key={pair.id} className="flex items-start justify-between text-sm">
                      <span className="font-medium">{pair.left}</span>
                      <span className="text-center px-2">↔</span>
                      <span className="text-muted-foreground">{pair.right}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                onClick={handleNext}
                className="w-full"
                size="lg"
              >
                {currentQuestion + 1 === questions.length ? (
                  "Complete Quiz"
                ) : (
                  <>
                    Next Question
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};