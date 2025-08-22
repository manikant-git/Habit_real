import React from 'react';
import { Target, Calendar, TrendingUp, Flame } from 'lucide-react';
import { Habit } from '../types/habit';
import { getStreak, getTodayString } from '../utils/habitutils';

interface StatsOverviewProps {
  habits: Habit[];
}

export const StatsOverview: React.FC<StatsOverviewProps> = ({ habits }) => {
  const today = getTodayString();
  const totalHabits = habits.length;
  const completedToday = habits.filter(habit => habit.completions.includes(today)).length;
  const totalCompletionRate = totalHabits > 0 ? Math.round((completedToday / totalHabits) * 100) : 0;
  const bestStreak = habits.length > 0 ? Math.max(...habits.map(getStreak), 0) : 0;

  return (
    <>
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Habits</p>
              <p className="text-2xl font-bold text-gray-900">{totalHabits}</p>
            </div>
            <Target className="text-gray-400" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Completed Today</p>
              <p className="text-2xl font-bold text-emerald-600">{completedToday}</p>
            </div>
            <Calendar className="text-emerald-400" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Today's Progress</p>
              <p className="text-2xl font-bold text-blue-600">{totalCompletionRate}%</p>
            </div>
            <TrendingUp className="text-blue-400" size={24} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Best Streak</p>
              <p className="text-2xl font-bold text-orange-600">{bestStreak}</p>
            </div>
            <Flame className="text-orange-400" size={24} />
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      {totalHabits > 0 && (
        <div className="bg-white rounded-xl p-6 shadow-sm border mb-8">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-900">Today's Progress</h3>
            <span className="text-sm text-gray-600">{completedToday} of {totalHabits} completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${totalCompletionRate}%` }}
            ></div>
          </div>
        </div>
      )}
    </>
  );
};
