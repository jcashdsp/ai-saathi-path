// Progress tracking utilities for AI Saathi Path
// Handles localStorage for lesson completion, quiz scores, and achievements

export interface LessonProgress {
  lessonId: string;
  levelId: number;
  completed: boolean;
  quizScore?: number;
  completedAt?: string;
  timeSpent?: number;
}

export interface UserProgress {
  lessons: LessonProgress[];
  points: number;
  badges: string[];
  currentLevel: number;
  lastActive: string;
}

export interface QuizResult {
  score: number;
  totalQuestions: number;
  correct: number;
  passed: boolean;
  timeSpent: number;
  answers: { questionId: string; correct: boolean; selectedAnswer: string }[];
}

// Storage key
const PROGRESS_KEY = 'ai-saathi-progress';

// Get user progress from localStorage
export const getUserProgress = (): UserProgress => {
  try {
    const stored = localStorage.getItem(PROGRESS_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading progress:', error);
  }
  
  // Default progress
  return {
    lessons: [],
    points: 0,
    badges: [],
    currentLevel: 1,
    lastActive: new Date().toISOString()
  };
};

// Save user progress to localStorage
export const saveUserProgress = (progress: UserProgress): void => {
  try {
    progress.lastActive = new Date().toISOString();
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  } catch (error) {
    console.error('Error saving progress:', error);
  }
};

// Check if lesson is completed
export const isLessonCompleted = (levelId: number, lessonId: string): boolean => {
  const progress = getUserProgress();
  return progress.lessons.some(
    lesson => lesson.levelId === levelId && 
              lesson.lessonId === lessonId && 
              lesson.completed
  );
};

// Mark lesson as completed with quiz result
export const completeLesson = (
  levelId: number, 
  lessonId: string, 
  quizResult?: QuizResult,
  timeSpent: number = 0
): void => {
  const progress = getUserProgress();
  
  // Remove existing entry if any
  progress.lessons = progress.lessons.filter(
    lesson => !(lesson.levelId === levelId && lesson.lessonId === lessonId)
  );
  
  // Add new completion
  const lessonProgress: LessonProgress = {
    levelId,
    lessonId,
    completed: true,
    quizScore: quizResult?.score,
    completedAt: new Date().toISOString(),
    timeSpent
  };
  
  progress.lessons.push(lessonProgress);
  
  // Award points
  const basePoints = 10;
  const bonusPoints = quizResult?.passed ? Math.floor(quizResult.score * 0.1) : 0;
  progress.points += basePoints + bonusPoints;
  
  // Check for new badges
  checkAndAwardBadges(progress, levelId);
  
  saveUserProgress(progress);
};

// Get lesson progress for a specific lesson
export const getLessonProgress = (levelId: number, lessonId: string): LessonProgress | null => {
  const progress = getUserProgress();
  return progress.lessons.find(
    lesson => lesson.levelId === levelId && lesson.lessonId === lessonId
  ) || null;
};

// Get completion percentage for a level
export const getLevelProgress = (levelId: number, totalLessons: number): number => {
  const progress = getUserProgress();
  const completedLessons = progress.lessons.filter(
    lesson => lesson.levelId === levelId && lesson.completed
  ).length;
  
  return Math.round((completedLessons / totalLessons) * 100);
};

// Badge system
const BADGES = {
  'first-lesson': { name: 'First Steps', icon: '🌟', requirement: 'Complete your first lesson' },
  'level-1-complete': { name: 'Computer Basics', icon: '💻', requirement: 'Complete all Level 1 lessons' },
  'level-2-complete': { name: 'AI Communicator', icon: '🗣️', requirement: 'Complete all Level 2 lessons' },
  'level-3-complete': { name: 'Automation Expert', icon: '⚡', requirement: 'Complete all Level 3 lessons' },
  'quiz-master': { name: 'Quiz Master', icon: '🎯', requirement: 'Score 90%+ on 5 quizzes' },
  'speed-learner': { name: 'Speed Learner', icon: '🚀', requirement: 'Complete a lesson in under 10 minutes' },
  'dedicated-student': { name: 'Dedicated Student', icon: '📚', requirement: 'Learn for 7 days in a row' },
  'cultural-expert': { name: 'Cultural Expert', icon: '🇵🇰', requirement: 'Complete all Pakistani context exercises' }
};

// Check and award new badges
const checkAndAwardBadges = (progress: UserProgress, levelId: number): void => {
  const newBadges: string[] = [];
  
  // First lesson badge
  if (progress.lessons.length === 1 && !progress.badges.includes('first-lesson')) {
    newBadges.push('first-lesson');
  }
  
  // Level completion badges
  const level1Lessons = progress.lessons.filter(l => l.levelId === 1 && l.completed);
  const level2Lessons = progress.lessons.filter(l => l.levelId === 2 && l.completed);
  const level3Lessons = progress.lessons.filter(l => l.levelId === 3 && l.completed);
  
  if (level1Lessons.length >= 4 && !progress.badges.includes('level-1-complete')) {
    newBadges.push('level-1-complete');
  }
  
  if (level2Lessons.length >= 5 && !progress.badges.includes('level-2-complete')) {
    newBadges.push('level-2-complete');
  }
  
  if (level3Lessons.length >= 3 && !progress.badges.includes('level-3-complete')) {
    newBadges.push('level-3-complete');
  }
  
  // Quiz master badge
  const highScoreQuizzes = progress.lessons.filter(l => l.quizScore && l.quizScore >= 90);
  if (highScoreQuizzes.length >= 5 && !progress.badges.includes('quiz-master')) {
    newBadges.push('quiz-master');
  }
  
  // Speed learner badge
  const fastLessons = progress.lessons.filter(l => l.timeSpent && l.timeSpent < 10 * 60 * 1000); // 10 minutes in ms
  if (fastLessons.length >= 1 && !progress.badges.includes('speed-learner')) {
    newBadges.push('speed-learner');
  }
  
  progress.badges = [...progress.badges, ...newBadges];
};

// Get badge information
export const getBadgeInfo = (badgeId: string) => {
  return BADGES[badgeId as keyof typeof BADGES];
};

// Get all available badges
export const getAllBadges = () => {
  return BADGES;
};

// Reset progress (for testing/development)
export const resetProgress = (): void => {
  localStorage.removeItem(PROGRESS_KEY);
};