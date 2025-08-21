# HabitFlow - Personal Habit Tracker

A beautiful and functional habit tracking application built with React, TypeScript, and Tailwind CSS. Track your daily habits, build streaks, and visualize your progress with an intuitive interface.

## Features

- ✅ **Daily Habit Tracking** - Check off habits as you complete them
- 🔥 **Streak Tracking** - Monitor your consistency with visual streak counters
- 📊 **Progress Analytics** - View completion rates and daily progress
- 🎨 **Custom Categories** - Organize habits by Health, Productivity, Personal, etc.
- 🎯 **Goal Setting** - Set and track personal habit goals
- 💾 **Local Storage** - Your data persists between browser sessions
- 📱 **Responsive Design** - Works perfectly on desktop and mobile
- 🌟 **Beautiful UI** - Modern design with smooth animations

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Vite** - Fast build tool and dev server

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd habitflow
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Usage

### Adding a New Habit

1. Click the "Add Habit" button in the top right
2. Fill in the habit name and optional description
3. Choose a category and color
4. Click "Add Habit" to save

### Tracking Daily Progress

- Click the circle next to any habit to mark it as complete for today
- Completed habits will show a checkmark and update your streak
- View your daily progress in the stats overview at the top

### Managing Habits

- **Edit**: Click the edit icon to modify habit details
- **Delete**: Click the trash icon to remove a habit
- **Categories**: Organize habits by Health, Productivity, Personal, Social, or Learning

## Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles and Tailwind imports
└── vite-env.d.ts    # Vite type definitions

public/
└── vite.svg         # Default Vite favicon

config files:
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.ts   # Vite configuration
└── eslint.config.js # ESLint configuration
```

## Features in Detail

### Dashboard Overview
- Total habits count
- Daily completion tracking
- Progress percentage
- Best streak display

### Habit Management
- Create habits with custom names and descriptions
- Categorize habits for better organization
- Choose from 8 different color themes
- Edit or delete habits as needed

### Progress Tracking
- Daily check-off system
- Streak counters for consistency
- Completion rate calculations
- Visual progress indicators

### Data Persistence
All habit data is automatically saved to your browser's local storage, so your progress is maintained between sessions.

## Customization

### Adding New Categories
Edit the `CATEGORIES` array in `src/App.tsx`:

```typescript
const CATEGORIES = [
  { name: 'Health', color: 'bg-emerald-500' },
  { name: 'Your Category', color: 'bg-custom-color' },
  // Add more categories
];
```

### Adding New Colors
Edit the `COLORS` array in `src/App.tsx`:

```typescript
const COLORS = [
  'bg-emerald-500',
  'bg-your-color',
  // Add more colors
];
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Happy habit building! 🎯**
