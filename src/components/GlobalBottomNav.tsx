import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Home, Trophy, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/lib/translations";
import LanguageToggle from "./LanguageToggle";

interface GlobalBottomNavProps {
  onPrevious?: () => void;
  onNext?: () => void;
  onHome?: () => void;
  showPrevious?: boolean;
  showNext?: boolean;
  nextLabel?: string;
  previousLabel?: string;
  disabled?: boolean;
  className?: string;
}

const GlobalBottomNav = ({ 
  onPrevious, 
  onNext, 
  onHome,
  showPrevious = true, 
  showNext = true,
  nextLabel,
  previousLabel,
  disabled = false,
  className = ""
}: GlobalBottomNavProps) => {
  const { language } = useLanguage();

  const defaultNextLabel = getTranslation({ english: "Next", urdu: "اگلا" }, language);
  const defaultPreviousLabel = getTranslation({ english: "Previous", urdu: "پچھلا" }, language);
  const homeLabel = getTranslation({ english: "Home", urdu: "ہوم" }, language);
  const progressLabel = getTranslation({ english: "Progress", urdu: "پیش قدمی" }, language);

  const handleHome = () => {
    if (onHome) {
      onHome();
    } else {
      window.location.href = '/';
    }
  };

  const handleProgress = () => {
    window.location.href = '/progress';
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border z-40 ${className}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left side - Previous button */}
          <div className="flex items-center gap-2">
            {showPrevious && onPrevious && (
              <Button
                variant="outline"
                onClick={onPrevious}
                disabled={disabled}
                size="sm"
                className="cultural-border"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                {previousLabel || defaultPreviousLabel}
              </Button>
            )}
          </div>

          {/* Center - Home and Progress buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              onClick={handleHome}
              size="sm"
              className="flex items-center gap-2"
            >
              <Home className="h-4 w-4" />
              <span className="hidden sm:inline">{homeLabel}</span>
            </Button>
            
            <Button
              variant="ghost"
              onClick={handleProgress}
              size="sm"
              className="flex items-center gap-2"
            >
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">{progressLabel}</span>
            </Button>

            <div className="hidden md:block">
              <LanguageToggle />
            </div>
          </div>

          {/* Right side - Next button */}
          <div className="flex items-center gap-2">
            <div className="md:hidden">
              <LanguageToggle />
            </div>
            
            {showNext && onNext && (
              <Button
                onClick={onNext}
                disabled={disabled}
                size="sm"
                className="bg-cultural-primary hover:bg-cultural-primary/90"
              >
                {nextLabel || defaultNextLabel}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalBottomNav;