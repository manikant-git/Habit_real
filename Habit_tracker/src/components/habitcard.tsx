import React from 'react';
import { Edit3, Trash2, Flame, TrendingUp } from 'lucide-react';
import { Habit } from '../types/habit';
import { getStreak, getCompletionRate, getTodayString } from '../utils/habitUtils';

interface HabitCardProps {
  habit: Habit;
  onToggleCompletion: (id: string) => void;
  onEdit: (habit: Habit) => void;
  onDelete: (id: string) => void;
}

export const HabitCard: React.FC<HabitCardProps> = ({
  habit,
  onToggleCompletion,
  onEdit,
  onDelete,
}) => {
  const today = getTodayString();
  const isCompleted = habit.completions.includes(today);
  const streak = getStreak(habit);
  const completionRate = getCompletionRate(habit);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => onToggleCompletion(habit.id)}
            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
              isCompleted
                ? `${habit.color} border-transparent text-white shadow-lg scale-110`
                : 'border-gray-300 hover:border-emerald-500 hover:bg-emerald-50'
            }`}
          >
            {isCompleted && (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h3 className={`font-semibold text-lg ${isCompleted ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                {habit.name}
              </h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${habit.color} text-white`}>
                {habit.category}
              </span>
            </div>
            
            {habit.description && (
              <p className="text-gray-600 text-sm mb-2">{habit.description}</p>
            )}

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Flame size={16} className="text-orange-500" />
                <span>{streak} day streak</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp size={16} className="text-blue-500" />
                <span>{completionRate}% completion rate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-4">
          <button
            onClick={() => onEdit(habit)}
            className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
          >
            <Edit3 size={16} />
          </button>
          <button
            onClick={() => onDelete(habit.id)}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
