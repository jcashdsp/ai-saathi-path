import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp, Play, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TranscriptSegment {
  id: string;
  startTime: number;
  endTime: number;
  text: string;
  urduText?: string;
  speaker?: string;
}

interface InteractiveTranscriptProps {
  segments: TranscriptSegment[];
  title?: string;
  onSeekTo?: (timeInSeconds: number) => void;
  showUrdu?: boolean;
  className?: string;
}

export const InteractiveTranscript: React.FC<InteractiveTranscriptProps> = ({
  segments,
  title = "Video Transcript",
  onSeekTo,
  showUrdu = false,
  className = ""
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSegmentClick = (segment: TranscriptSegment) => {
    setActiveSegment(segment.id);
    if (onSeekTo) {
      onSeekTo(segment.startTime);
    }
    
    // Clear active state after animation
    setTimeout(() => setActiveSegment(null), 2000);
  };

  const previewSegments = segments.slice(0, 3);
  const displaySegments = isExpanded ? segments : previewSegments;

  return (
    <Card className={`bg-card ${className}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-card-foreground flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            {title}
          </CardTitle>
          <Badge variant="secondary" className="text-xs">
            {segments.length} segments
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-3">
        {displaySegments.map((segment) => (
          <div
            key={segment.id}
            className={cn(
              "group p-3 rounded-lg border border-border transition-all duration-300 cursor-pointer hover:border-primary/50 hover:bg-muted/50",
              activeSegment === segment.id && "border-primary bg-primary/5 scale-[1.02]"
            )}
            onClick={() => handleSegmentClick(segment)}
          >
            <div className="flex items-start gap-3">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
              >
                <Play className="h-3 w-3 text-primary" />
              </Button>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs font-mono">
                    {formatTime(segment.startTime)}
                  </Badge>
                  {segment.speaker && (
                    <Badge variant="secondary" className="text-xs">
                      {segment.speaker}
                    </Badge>
                  )}
                </div>
                
                <p className="text-sm text-foreground leading-relaxed mb-1">
                  {segment.text}
                </p>
                
                {showUrdu && segment.urduText && (
                  <p className="text-sm text-muted-foreground direction-rtl font-urdu leading-relaxed">
                    {segment.urduText}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
        
        {segments.length > 3 && (
          <Button
            variant="outline"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-4 hover:bg-muted transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-4 w-4 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="h-4 w-4 mr-2" />
                Show All {segments.length} Segments
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};