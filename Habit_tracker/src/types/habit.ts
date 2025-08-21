export interface Habit {
  id: string;
  name: string;
  description: string;
  category: string;
  color: string;
  createdAt: string;
  completions: string[]; // Array of dates in YYYY-MM-DD format
}

export interface Category {
  name: string;
  color: string;
}

export interface HabitFormData {
  name: string;
  description: string;
  category: string;
  color: string;
}</parameter>
