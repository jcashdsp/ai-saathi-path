export interface Translation {
  english: string;
  urdu: string;
}

export const translations = {
  // Navigation
  nav: {
    courses: { english: "Courses", urdu: "کورسز" },
    community: { english: "Community", urdu: "کمیونٹی" },
    progress: { english: "Progress", urdu: "پیش قدمی" },
    login: { english: "Login", urdu: "لاگ ان" },
    signUpFree: { english: "Sign Up Free", urdu: "مفت رجسٹر کریں" }
  },

  // Language Toggle
  language: {
    english: { english: "English", urdu: "انگلش" },
    urdu: { english: "Urdu", urdu: "اردو" },
    bilingual: { english: "Bilingual", urdu: "دو زبانہ" }
  },

  // Level 2 Lesson 1
  level2Lesson1: {
    title: { english: "AI Myths vs Reality", urdu: "AI کے خرافات بمقابلہ حقیقت" },
    subtitle: { english: "Understanding What AI Can and Cannot Do", urdu: "سمجھیں کہ AI کیا کر سکتا ہے اور کیا نہیں" },
    
    objectives: {
      title: { english: "Learning Objectives", urdu: "تعلیمی مقاصد" },
      objective1: { english: "Distinguish between AI myths and facts", urdu: "AI کے خرافات اور حقائق میں فرق کریں" },
      objective2: { english: "Understand current AI capabilities", urdu: "موجودہ AI کی صلاحیات کو سمجھیں" },
      objective3: { english: "Recognize real-world AI applications in Pakistan", urdu: "پاکستان میں AI کے حقیقی استعمالات پہچانیں" }
    },

    mythsSection: {
      title: { english: "Common AI Myths", urdu: "AI کے عام خرافات" },
      myth1: {
        title: { english: "Myth: AI will replace all jobs", urdu: "خرافہ: AI تمام ملازمتیں ختم کر دے گا" },
        reality: { english: "Reality: AI augments human capabilities, creating new job categories while transforming existing ones.", urdu: "حقیقت: AI انسانی صلاحیات کو بڑھاتا ہے، نئے ملازمتی کیٹگریز بناتا ہے اور موجودہ کو تبدیل کرتا ہے۔" }
      },
      myth2: {
        title: { english: "Myth: AI is conscious and can think like humans", urdu: "خرافہ: AI واعی ہے اور انسانوں کی طرح سوچ سکتا ہے" },
        reality: { english: "Reality: Current AI systems are pattern recognition tools without consciousness or genuine understanding.", urdu: "حقیقت: موجودہ AI سسٹمز pattern recognition کے آلات ہیں جن میں شعور یا حقیقی سمجھ نہیں۔" }
      }
    },

    realitySection: {
      title: { english: "AI in Pakistan Today", urdu: "آج پاکستان میں AI" },
      education: { english: "Education: AI tutoring platforms helping students in rural areas", urdu: "تعلیم: AI ٹیوٹرنگ پلیٹ فارمز دیہی علاقوں کے طلباء کی مدد کر رہے ہیں" },
      agriculture: { english: "Agriculture: Smart farming solutions for crop monitoring", urdu: "زراعت: فصلوں کی نگرانی کے لیے سمارٹ فارمنگ حل" },
      healthcare: { english: "Healthcare: AI-powered diagnostic tools in major hospitals", urdu: "صحت: بڑے ہسپتالوں میں AI پر مبنی تشخیصی آلات" }
    },

    quiz: {
      title: { english: "Test Your Understanding", urdu: "اپنی سمجھ کا امتحان" },
      description: { english: "Answer these true/false questions about AI myths and reality.", urdu: "AI کے خرافات اور حقیقت کے بارے میں ان درست/غلط سوالات کے جوابات دیں۔" },
      
      question1: {
        question: { english: "AI systems are conscious and can think independently like humans.", urdu: "AI سسٹمز واعی ہیں اور انسانوں کی طرح خود مختار سوچ سکتے ہیں۔" },
        explanation: { english: "Current AI systems are sophisticated pattern recognition tools but lack consciousness, emotions, or true understanding. They process data and provide outputs based on training, not genuine thought.", urdu: "موجودہ AI سسٹمز نفیس pattern recognition کے آلات ہیں لیکن ان میں شعور، جذبات، یا حقیقی سمجھ نہیں۔ وہ ڈیٹا پروسیس کرتے ہیں اور تربیت کی بنیاد پر نتائج دیتے ہیں، حقیقی سوچ نہیں۔" }
      },
      
      question2: {
        question: { english: "AI will completely eliminate all human jobs in the next decade.", urdu: "AI اگلی دہائی میں تمام انسانی ملازمتوں کو مکمل طور پر ختم کر دے گا۔" },
        explanation: { english: "While AI will transform many jobs, history shows that technological advances typically create new types of employment while changing existing roles. AI is more likely to augment human capabilities than completely replace them.", urdu: "اگرچہ AI بہت سی ملازمتوں کو تبدیل کرے گا، تاریخ بتاتی ہے کہ تکنیکی ترقی عام طور پر نئی قسم کی ملازمتیں بناتی ہے جبکہ موجودہ کردار تبدیل کرتی ہے۔ AI انسانی صلاحیات کو مکمل طور پر تبدیل کرنے کے بجائے انہیں بہتر بنانے کا زیادہ امکان ہے۔" }
      }
    }
  },

  // Common UI Elements
  ui: {
    next: { english: "Next", urdu: "اگلا" },
    previous: { english: "Previous", urdu: "پچھلا" },
    back: { english: "Back", urdu: "واپس" },
    continue: { english: "Continue", urdu: "جاری رکھیں" },
    start: { english: "Start", urdu: "شروع" },
    complete: { english: "Complete", urdu: "مکمل" },
    true: { english: "True", urdu: "درست" },
    false: { english: "False", urdu: "غلط" },
    submit: { english: "Submit", urdu: "جمع کریں" },
    startQuiz: { english: "Start Quiz", urdu: "کوئز شروع کریں" },
    backToLesson: { english: "Back to Lesson", urdu: "سبق پر واپس" }
  }
};

export const getTranslation = (translation: Translation, language: 'english' | 'urdu' | 'bilingual'): string => {
  if (language === 'english') return translation.english;
  if (language === 'urdu') return translation.urdu;
  return `${translation.english} / ${translation.urdu}`;
};