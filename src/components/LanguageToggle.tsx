import React from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/contexts/LanguageContext";
import { ChevronDown, Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { translations, getTranslation } from "@/lib/translations";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  const languageOptions: { value: Language; label: { english: string; urdu: string } }[] = [
    { value: 'english', label: translations.language.english },
    { value: 'urdu', label: translations.language.urdu },
    { value: 'bilingual', label: translations.language.bilingual }
  ];

  const getCurrentLanguageLabel = () => {
    const currentOption = languageOptions.find(option => option.value === language);
    return currentOption ? getTranslation(currentOption.label, 'english') : 'Bilingual';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center space-x-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{getCurrentLanguageLabel()}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40">
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => setLanguage(option.value)}
            className={language === option.value ? "bg-accent" : ""}
          >
            <div className="flex flex-col">
              <span>{option.label.english}</span>
              <span className="text-xs text-muted-foreground">{option.label.urdu}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;