import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Languages, Captions } from 'lucide-react';
import { Card } from '@/components/ui/card';

type Language = 'english' | 'urdu';

interface SubtitleToggleProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
  showSubtitles: boolean;
  onToggleSubtitles: (show: boolean) => void;
  className?: string;
}

export const SubtitleToggle: React.FC<SubtitleToggleProps> = ({
  currentLanguage,
  onLanguageChange,
  showSubtitles,
  onToggleSubtitles,
  className = ""
}) => {
  return (
    <Card className={`p-3 bg-card/80 backdrop-blur-sm ${className}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Captions className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-card-foreground">Subtitles</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant={showSubtitles ? "default" : "outline"}
            size="sm"
            onClick={() => onToggleSubtitles(!showSubtitles)}
            className="text-xs h-7"
          >
            {showSubtitles ? "ON" : "OFF"}
          </Button>
          
          {showSubtitles && (
            <div className="flex items-center gap-1">
              <Languages className="h-3 w-3 text-muted-foreground" />
              <div className="flex gap-1">
                <Button
                  variant={currentLanguage === 'english' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onLanguageChange('english')}
                  className="text-xs h-7 px-2"
                >
                  EN
                </Button>
                <Button
                  variant={currentLanguage === 'urdu' ? "default" : "ghost"}
                  size="sm"
                  onClick={() => onLanguageChange('urdu')}
                  className="text-xs h-7 px-2"
                >
                  اردو
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {showSubtitles && (
        <div className="mt-2 pt-2 border-t border-border">
          <Badge variant="outline" className="text-xs">
            {currentLanguage === 'english' ? 'English Subtitles' : 'اردو سب ٹائٹلز'}
          </Badge>
        </div>
      )}
    </Card>
  );
};