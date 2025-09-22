import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, ArrowRight, Star, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import BilingualText from "@/components/BilingualText";
import { culturalPhrases } from "@/lib/translations";

export interface MultipleChoiceQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option
  explanation: string;
  context?: string;
}

interface MultipleChoiceQuizProps {
  questions: MultipleChoiceQuestion[];
  title: string;
  description?: string;
  onComplete: (score: number, correct: number, answers: any[]) => void;
  passingScore?: number;
}

export const MultipleChoiceQuiz: React.FC<MultipleChoiceQuizProps> = ({
  questions,
  title,
  description,
  onComplete,
  passingScore = 70
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: { selected: number; correct: boolean } }>({});
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime] = useState(Date.now());

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    const isCorrect = optionIndex === question.correctAnswer;
    
    setAnswers(prev => ({
      ...prev,
      [question.id]: {
        selected: optionIndex,
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
    const isPassed = finalScore >= passingScore;
    const celebrationMessage = isPassed ? culturalPhrases.congratulations : culturalPhrases.tryAgain;
    const encouragementMessage = isPassed ? culturalPhrases.wellDone : culturalPhrases.keepGoing;

    return (
      <Card className={`border-2 ${isPassed ? 'border-success/20 bg-success/5 truck-art-border celebration-glow' : 'border-warning/20 bg-warning/5'}`}>
        <CardHeader className="text-center islamic-pattern">
          <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
            isPassed ? 'bg-gradient-cultural' : 'bg-gradient-to-br from-warning to-warning/80'
          }`}>
            {isPassed ? (
              <div className="flex items-center gap-1">
                <Star className="h-8 w-8 text-white" />
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            ) : (
              <XCircle className="h-8 w-8 text-white" />
            )}
          </div>
          
          <div className="space-y-2">
            <CardTitle className="text-2xl">
              {isPassed ? "🎉✨🌙" : "📚💪"} 
              <BilingualText 
                translation={celebrationMessage}
                className="inline-block ml-2"
                englishClassName="text-xl font-bold"
                urduClassName="text-lg font-urdu font-bold text-cultural-emerald"
              />
            </CardTitle>
            <CardDescription>
              <BilingualText 
                translation={encouragementMessage}
                englishClassName="text-base"
                urduClassName="font-urdu text-base text-muted-foreground"
              />
              <div className="mt-2 text-sm">
                {isPassed 
                  ? `Score: ${finalScore}% - بہترین!` 
                  : `Score: ${finalScore}% - مزید محنت کریں!`
                }
              </div>
            </CardDescription>
          </div>
        </CardHeader>
        
        <CardContent className="text-center space-y-6">
          <div className="grid grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-cultural-gold/10 to-cultural-emerald/10">
              <div className="text-3xl font-bold text-cultural-emerald">{correctAnswers}</div>
              <div className="text-sm text-muted-foreground font-urdu-ltr">
                Correct / درست
              </div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-truck-art-blue/10 to-pakistan-green/10">
              <div className="text-3xl font-bold text-pakistan-green">{finalScore}%</div>
              <div className="text-sm text-muted-foreground font-urdu-ltr">
                Score / اسکور
              </div>
            </div>
          </div>
          
          {isPassed ? (
            <div className="space-y-3">
              <Badge className="bg-gradient-cultural text-white px-6 py-2 text-base">
                ✅ Passed! / کامیاب! 🌟
              </Badge>
              <div className="text-sm text-cultural-emerald font-medium">
                شاندار! You've mastered this topic! 🎊
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <Badge variant="outline" className="border-warning text-warning px-6 py-2">
                📖 Review & Try Again / نظرثانی کریں
              </Badge>
              <div className="text-sm text-muted-foreground">
                Need {passingScore}% to pass / کامیابی کے لیے {passingScore}% درکار
              </div>
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
            <Badge variant="outline">Multiple Choice</Badge>
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
          {/* Answer Options */}
          {!showExplanation && (
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  size="lg"
                  variant={selectedAnswer === index ? "default" : "outline"}
                  onClick={() => handleAnswer(index)}
                  disabled={showExplanation}
                  className="w-full h-auto p-4 text-left justify-start whitespace-normal"
                >
                  <span className="font-semibold mr-3 text-primary">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  <span className="flex-1">{option}</span>
                </Button>
              ))}
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
                <div className="flex items-center gap-2 mb-3">
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
                
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Correct Answer:</strong> {String.fromCharCode(65 + question.correctAnswer)}. {question.options[question.correctAnswer]}
                  </p>
                  {!answers[question.id]?.correct && (
                    <p className="text-sm text-muted-foreground">
                      <strong>You selected:</strong> {String.fromCharCode(65 + (selectedAnswer || 0))}. {question.options[selectedAnswer || 0]}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Explanation:</strong> {question.explanation}
                  </p>
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