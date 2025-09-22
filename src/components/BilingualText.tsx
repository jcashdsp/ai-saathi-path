import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Translation, getTranslation } from '@/lib/translations';

interface BilingualTextProps {
  translation: Translation;
  className?: string;
  englishClassName?: string;
  urduClassName?: string;
  as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'div';
}

const BilingualText: React.FC<BilingualTextProps> = ({ 
  translation, 
  className = '', 
  englishClassName = '',
  urduClassName = 'text-sm text-muted-foreground mt-1 font-urdu',
  as: Component = 'div' 
}) => {
  const { language } = useLanguage();

  if (language === 'english') {
    return <Component className={`${className} ${englishClassName}`}>{translation.english}</Component>;
  }

  if (language === 'urdu') {
    return <Component className={`${className} ${urduClassName} font-urdu text-right`}>{translation.urdu}</Component>;
  }

  // Bilingual mode
  return (
    <Component className={className}>
      <div className={englishClassName}>{translation.english}</div>
      <div className={urduClassName}>{translation.urdu}</div>
    </Component>
  );
};

export default BilingualText;