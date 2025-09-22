import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

export interface TrueFalseQuestion {
  id: string;
  question: string;
  correct: boolean;
  explanation: string;
  context?: string;
}

interface TrueFalseQuizProps {
  questions: TrueFalseQuestion[];
  title: string;
  description?: string;
  onComplete: (score: number, correct: number, answers: any[]) => void;
  passingScore?: number;
}

export const TrueFalseQuiz: React.FC<TrueFalseQuizProps> = ({
  questions,
  title,
  description,
  onComplete,
  passingScore = 70
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: { selected: boolean; correct: boolean } }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime] = useState(Date.now());

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answer: boolean) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === question.correct;
    
    setAnswers(prev => ({
      ...prev,
      [question.id]: {
        selected: answer,
        correct: isCorrect
      }
    }));
    
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      completeQuiz();
    }
  };

  const completeQuiz = () => {
    const correctAnswers = Object.values(answers).filter(a => a.correct).length;
    const score = Math.round((correctAnswers / questions.length) * 100);
    const timeSpent = Date.now() - startTime;
    
    const answerData = Object.entries(answers).map(([questionId, answer]) => ({
      questionId,
      correct: answer.correct,
      selectedAnswer: answer.selected.toString()
    }));

    setQuizCompleted(true);
    onComplete(score, correctAnswers, answerData);
  };

  const correctAnswers = Object.values(answers).filter(a => a.correct).length;
  const finalScore = quizCompleted ? Math.round((correctAnswers / questions.length) * 100) : 0;

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
            <Badge variant="outline">True/False</Badge>
            {question.context && (
              <Badge variant="secondary" className="text-xs">
                {question.context}
              </Badge>
            )}
          </div>
          <CardTitle className="text-lg leading-relaxed">
            {question.question}
          </CardTitle>
          {description && currentQuestion === 0 && (
            <CardDescription>{description}</CardDescription>
          )}
        </CardHeader>
        
        <CardContent className="space-y-6">
          {/* Answer Buttons */}
          {!showExplanation && (
            <div className="grid grid-cols-2 gap-4">
              <Button
                size="lg"
                variant={selectedAnswer === true ? "default" : "outline"}
                onClick={() => handleAnswer(true)}
                disabled={showExplanation}
                className="h-16 text-lg font-semibold"
              >
                ✅ True
              </Button>
              <Button
                size="lg"
                variant={selectedAnswer === false ? "default" : "outline"}
                onClick={() => handleAnswer(false)}
                disabled={showExplanation}
                className="h-16 text-lg font-semibold"
              >
                ❌ False
              </Button>
            </div>
          )}

          {/* Explanation */}
          {showExplanation && (
            <div className="space-y-4">
              <div className={`p-4 rounded-lg border ${
                answers[question.id]?.correct 
                  ? 'border-success/20 bg-success/5' 
                  : 'border-destructive/20 bg-destructive/5'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  {answers[question.id]?.correct ? (
                    <>
                      <CheckCircle className="h-5 w-5 text-success" />
                      <span className="font-semibold text-success">Correct!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5 text-destructive" />
                      <span className="font-semibold text-destructive">Incorrect</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-foreground">
                  <strong>Answer:</strong> {question.correct ? "True" : "False"}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {question.explanation}
                </p>
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