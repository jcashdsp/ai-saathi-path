import React, { useState, useRef } from 'react';
import { Volume2, VolumeX, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface AudioPronunciationProps {
  word: string;
  urduText: string;
  audioUrl?: string;
  className?: string;
}

export const AudioPronunciation: React.FC<AudioPronunciationProps> = ({
  word,
  urduText,
  audioUrl,
  className = ""
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playPronunciation = async () => {
    if (audioUrl) {
      try {
        setIsLoading(true);
        
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }

        audioRef.current = new Audio(audioUrl);
        
        audioRef.current.addEventListener('loadstart', () => setIsLoading(true));
        audioRef.current.addEventListener('canplay', () => setIsLoading(false));
        audioRef.current.addEventListener('play', () => setIsPlaying(true));
        audioRef.current.addEventListener('ended', () => setIsPlaying(false));
        audioRef.current.addEventListener('error', () => {
          setIsLoading(false);
          setIsPlaying(false);
        });

        await audioRef.current.play();
      } catch (error) {
        console.error('Audio playback failed:', error);
        setIsLoading(false);
        setIsPlaying(false);
      }
    } else {
      // Fallback: Use Web Speech API for text-to-speech
      if ('speechSynthesis' in window) {
        setIsPlaying(true);
        const utterance = new SpeechSynthesisUtterance(urduText);
        utterance.lang = 'ur-PK';
        utterance.rate = 0.8;
        
        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);
        
        speechSynthesis.speak(utterance);
      }
    }
  };

  const stopPronunciation = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className={`inline-flex items-center gap-1 ${className}`}>
            <span className="font-medium text-foreground border-b border-dashed border-primary/50 cursor-help">
              {word}
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 hover:bg-primary/10 transition-colors"
              onClick={isPlaying ? stopPronunciation : playPronunciation}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="h-3 w-3 animate-spin text-primary" />
              ) : isPlaying ? (
                <VolumeX className="h-3 w-3 text-primary" />
              ) : (
                <Volume2 className="h-3 w-3 text-primary" />
              )}
            </Button>
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <div className="text-center">
            <p className="font-medium">{word}</p>
            <p className="text-sm text-muted-foreground direction-rtl font-urdu">
              {urduText}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {isPlaying ? "Click to stop" : "Click to hear pronunciation"}
            </p>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};