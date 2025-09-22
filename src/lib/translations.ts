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

// Cultural phrases and celebrations
export const culturalPhrases = {
  excellent: { english: "Excellent!", urdu: "شاباش!" },
  congratulations: { english: "Congratulations!", urdu: "مبارک ہو!" },
  wellDone: { english: "Well done!", urdu: "بہت خوب!" },
  amazing: { english: "Amazing!", urdu: "کمال!" },
  praise: { english: "Well done!", urdu: "آفرین!" },
  keepGoing: { english: "Keep going!", urdu: "جاری رکھیں!" },
  youPassed: { english: "You passed!", urdu: "آپ کامیاب ہو گئے!" },
  tryAgain: { english: "Try again!", urdu: "دوبارہ کوشش کریں!" },
  goodMorning: { english: "Good morning", urdu: "صبح بخیر" },
  goodEvening: { english: "Good evening", urdu: "شام بخیر" },
  scholar: { english: "Scholar", urdu: "عالم" },
  helper: { english: "Helper", urdu: "مددگار" },
  leader: { english: "Leader", urdu: "رہنما" },
  champion: { english: "Champion", urdu: "چیمپیئن" }
};

// Pakistani cultural examples for lessons
export const culturalExamples = {
  shopTypes: [
    { english: "Fruit vendor", urdu: "پھل فروش" },
    { english: "Tea stall", urdu: "چائے کی دکان" },
    { english: "Clothing shop", urdu: "کپڑوں کی دکان" },
    { english: "Mobile shop", urdu: "موبائل کی دکان" },
    { english: "Pharmacy", urdu: "دوا خانہ" },
    { english: "Grocery store", urdu: "کریانہ کی دکان" }
  ],
  festivals: [
    { english: "Eid celebration", urdu: "عید کا جشن" },
    { english: "Ramadan timing", urdu: "رمضان کا وقت" },
    { english: "Independence Day", urdu: "یوم آزادی" },
    { english: "Basant festival", urdu: "بسنت کا تہوار" }
  ],
  pakistaniNames: ["Ali", "Sana", "Ahmed", "Ayesha", "Hassan", "Fatima", "Omar", "Zainab"],
  cities: ["Karachi", "Lahore", "Islamabad", "Faisalabad", "Rawalpindi", "Multan", "Peshawar", "Quetta"],
  banks: ["HBL", "UBL", "MCB", "ABL", "Standard Chartered", "Meezan Bank"],
  paymentMethods: ["JazzCash", "Easypaisa", "SadaPay", "Bank transfer"]
};

// Quiz Data
export const level1Lesson2QuizData = [
  {
    id: "q1-l1l2",
    question: "Double-clicking on a word will select the entire word.",
    correct: true,
    explanation: "Double-clicking is a quick way to select an entire word without dragging.",
    context: "Text Selection"
  },
  {
    id: "q2-l1l2", 
    question: "The keyboard shortcut Ctrl+V is used to copy text.",
    correct: false,
    explanation: "Ctrl+V is used to paste text. Ctrl+C is used to copy text.",
    context: "Copy & Paste"
  },
  {
    id: "q3-l1l2",
    question: "Using exact phrases in \"quotation marks\" makes internet searches more specific.",
    correct: true,
    explanation: "Quotation marks tell search engines to look for the exact phrase, making results more precise.",
    context: "Internet Search"
  },
  {
    id: "q4-l1l2",
    question: "Ctrl+Z is used to paste previously copied text.",
    correct: false, 
    explanation: "Ctrl+Z is used to undo the last action. Ctrl+V is used to paste text.",
    context: "Keyboard Shortcuts"
  },
  {
    id: "q5-l1l2",
    question: "Triple-clicking selects an entire paragraph.",
    correct: true,
    explanation: "Triple-clicking is a quick way to select an entire paragraph at once.",
    context: "Text Selection"
  }
];

export const level1Lesson4QuizData = [
  {
    id: "q1-l1l4",
    question: "What makes a password strong?",
    options: [
      "Using your name and birthday", 
      "Using at least 8 characters with mix of letters, numbers, and symbols",
      "Using the same password for all accounts",
      "Using only lowercase letters"
    ],
    correctAnswer: 1,
    explanation: "Strong passwords need length and complexity - mixing uppercase, lowercase, numbers, and symbols makes them harder to guess.",
    context: "Password Security"
  },
  {
    id: "q2-l1l4",
    question: "You receive an SMS saying \"You won ₨50,000 in lottery! Send bank details to claim.\" What should you do?",
    options: [
      "Send your bank details immediately",
      "Call the number to verify",
      "Delete the message - you can't win a lottery you didn't enter", 
      "Share the news with friends first"
    ],
    correctAnswer: 2,
    explanation: "Legitimate lotteries don't contact random winners via SMS. This is a common scam to steal bank information.",
    context: "Scam Recognition"
  },
  {
    id: "q3-l1l4", 
    question: "When is it safe to enter your password on a website?",
    options: [
      "Only on websites that start with https://",
      "On any website that looks official", 
      "When the website asks nicely",
      "Only when using Internet Explorer"
    ],
    correctAnswer: 0,
    explanation: "HTTPS (the 's' stands for secure) encrypts data between you and the website, protecting your password from hackers.",
    context: "Safe Browsing"
  },
  {
    id: "q4-l1l4",
    question: "What should you do if you receive a call saying \"Your computer has a virus, give us remote access\"?",
    options: [
      "Give them access to fix the problem",
      "Hang up immediately - legitimate tech companies don't make such calls",
      "Ask for their company details first",
      "Transfer them to a tech-savvy family member"
    ],
    correctAnswer: 1,
    explanation: "Real tech companies like Microsoft or Google never call customers randomly about viruses. This is a common scam.",
    context: "Tech Support Scams"
  },
  {
    id: "q5-l1l4",
    question: "Which password is strongest?",
    options: [
      "ahmed123",
      "Pakistan1947", 
      "Blue$Car7@Night",
      "password"
    ],
    correctAnswer: 2,
    explanation: "Blue$Car7@Night is strong because it's long, uses mixed case, numbers, symbols, and isn't based on personal information.",
    context: "Password Examples"
  }
];

export const level2Lesson3QuizData = [
  {
    id: "q1-l2l3",
    title: "Basic Translation Practice",
    instructions: "Match the English phrases with their correct Urdu translations",
    pairs: [
      {
        id: "pair1",
        left: "Good morning",
        right: "صبح بخیر",
        explanation: "A common daily greeting"
      },
      {
        id: "pair2", 
        left: "Thank you very much",
        right: "بہت شکریہ",
        explanation: "Polite expression of gratitude"
      },
      {
        id: "pair3",
        left: "Please wait a moment",
        right: "براہ کرم ایک منٹ انتظار کریں",
        explanation: "Courteous request for patience"
      },
      {
        id: "pair4",
        left: "Your order is ready",
        right: "آپ کا آرڈر تیار ہے", 
        explanation: "Common business communication"
      }
    ],
    context: "Daily Communication"
  },
  {
    id: "q2-l2l3",
    title: "Text Simplification",
    instructions: "Match complex text with simplified versions",
    pairs: [
      {
        id: "simple1",
        left: "Hypertension requires immediate medical attention",
        right: "ہائی بلڈ پریشر کا فوری علاج ضروری ہے",
        explanation: "Medical term simplified for patients"
      },
      {
        id: "simple2",
        left: "Documentation must be submitted prior to deadline",
        right: "کاغذات آخری تاریخ سے پہلے جمع کریں",
        explanation: "Formal instruction made clear"
      },
      {
        id: "simple3",
        left: "Device storage capacity has been exceeded",
        right: "فون کی میموری بھر گئی ہے",
        explanation: "Technical message in simple terms"
      },
      {
        id: "simple4",
        left: "Authentication credentials are required",
        right: "پاس ورڈ درکار ہے",
        explanation: "Tech jargon simplified"
      }
    ],
    context: "Simplification Practice"
  }
];

export const getTranslation = (translation: Translation, language: 'english' | 'urdu' | 'bilingual'): string => {
  if (language === 'english') return translation.english;
  if (language === 'urdu') return translation.urdu;
  return `${translation.english} / ${translation.urdu}`;
};