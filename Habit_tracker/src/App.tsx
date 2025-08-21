import React, { useState, useEffect } from 'react';
import { Plus, Target } from 'lucide-react';
import { Habit, HabitFormData } from './types/habit';
import { HabitCard } from './components/HabitCard';
import { StatsOverview } from './components/StatsOverview';
import { HabitForm } from './components/HabitForm';
import { getTodayString } from './utils/habitUtils';

function App() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingHabit, setEditingHabit] = useState<Habit | null>(null);
  const [formData, setFormData] = useState<HabitFormData>({
    name: '',
    description: '',
    category: 'Health',
    color: 'bg-emerald-500',
  });

  const today = getTodayString();

  useEffect(() => {
    const saved = localStorage.getItem('habits');
    if (saved) {
      setHabits(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('habits', JSON.stringify(habits));
  }, [habits]);

  const handleSubmit = () => {
    if (!formData.name.trim()) return;

    if (editingHabit) {
      // Update existing habit
      setHabits(habits.map(habit => 
        habit.id === editingHabit.id 
          ? { ...habit, ...formData }
          : habit
      ));
      setEditingHabit(null);
    } else {
      // Add new habit
      const habit: Habit = {
        id: Date.now().toString(),
        name: formData.name,
        description: formData.description,
        category: formData.category,
        color: formData.color,
        createdAt: today,
        completions: [],
      };
      setHabits([...habits, habit]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', description: '', category: 'Health', color: 'bg-emerald-500' });
    setShowAddForm(false);
    setEditingHabit(null);
  };

  const deleteHabit = (id: string) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const toggleCompletion = (id: string) => {
    setHabits(habits.map(habit => {
      if (habit.id === id) {
        const completions = habit.completions.includes(today)
          ? habit.completions.filter(date => date !== today)
          : [...habit.completions, today];
        return { ...habit, completions };
      }
      return habit;
    }));
  };

  const handleEdit = (habit: Habit) => {
    setEditingHabit(habit);
    setFormData({
      name: habit.name,
      description: habit.description,
      category: habit.category,
      color: habit.color,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <Target className="text-emerald-500" />
                HabitFlow
              </h1>
              <p className="text-gray-600 mt-1">Build better habits, one day at a time</p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors shadow-lg hover:shadow-xl"
            >
              <Plus size={20} />
              Add Habit
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <StatsOverview habits={habits} />

        {/* Add/Edit Habit Form */}
        {(showAddForm || editingHabit) && (
          <HabitForm
            formData={formData}
            onFormDataChange={setFormData}
            onSubmit={handleSubmit}
            onCancel={resetForm}
            isEditing={!!editingHabit}
          />
        )}

        {/* Habits List */}
        {habits.length === 0 ? (
          <div className="text-center py-12">
            <Target className="mx-auto text-gray-300 mb-4" size={48} />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No habits yet</h3>
            <p className="text-gray-600 mb-6">Start building better habits by adding your first one!</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg inline-flex items-center gap-2 transition-colors"
            >
              <Plus size={20} />
              Add Your First Habit
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {habits.map((habit) => (
              <HabitCard
                key={habit.id}
                habit={habit}
                onToggleCompletion={toggleCompletion}
                onEdit={handleEdit}
                onDelete={deleteHabit}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
