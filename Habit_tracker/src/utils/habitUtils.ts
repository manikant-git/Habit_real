import { Habit } from '../types/habit';

export const getStreak = (habit: Habit): number => {
  const sortedDates = habit.completions.sort().reverse();
  let streak = 0;
  let currentDate = new Date();
  
  for (let i = 0; i < sortedDates.length; i++) {
    const dateStr = currentDate.toISOString().split('T')[0];
    if (sortedDates[i] === dateStr) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else {
      break;
    }
  }
  
  return streak;
};

export const getCompletionRate = (habit: Habit): number => {
  const daysSinceCreated = Math.floor(
    (new Date().getTime() - new Date(habit.createdAt).getTime()) / (1000 * 60 * 60 * 24)
  ) + 1;
  return Math.round((habit.completions.length / daysSinceCreated) * 100);
};

export const getTodayString = (): string => {
  return new Date().toISOString().split('T')[0];
};
