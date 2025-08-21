# Contributing to HabitFlow

Thank you for your interest in contributing to HabitFlow! This document provides guidelines and information for contributors.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Create a new branch for your feature: `git checkout -b feature/your-feature-name`

## Development Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Running the Development Server
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

## Code Style Guidelines

### TypeScript
- Use TypeScript for all new code
- Define proper interfaces and types
- Avoid `any` types when possible

### React
- Use functional components with hooks
- Follow React best practices
- Use proper prop types and interfaces

### Styling
- Use Tailwind CSS classes
- Follow the existing color scheme
- Ensure responsive design

### File Organization
- Keep components in `src/components/`
- Keep types in `src/types/`
- Keep utilities in `src/utils/`
- Keep constants in `src/constants/`

## Commit Guidelines

### Commit Message Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```
feat(habits): add habit editing functionality
fix(storage): resolve local storage persistence issue
docs(readme): update installation instructions
```

## Pull Request Process

1. Ensure your code follows the style guidelines
2. Update documentation if needed
3. Add tests for new functionality
4. Ensure all tests pass
5. Update the README.md if needed
6. Submit a pull request with a clear description

## Feature Requests

When suggesting new features:

1. Check if the feature already exists
2. Open an issue with the "enhancement" label
3. Provide a clear description of the feature
4. Explain the use case and benefits
5. Consider implementation complexity

## Bug Reports

When reporting bugs:

1. Check if the bug has already been reported
2. Open an issue with the "bug" label
3. Provide steps to reproduce
4. Include expected vs actual behavior
5. Add screenshots if applicable
6. Include browser/environment information

## Code Review Process

All contributions go through code review:

1. Maintainers will review your pull request
2. Address any feedback or requested changes
3. Once approved, your code will be merged

## Questions?

If you have questions about contributing:

1. Check existing issues and discussions
2. Open a new issue with the "question" label
3. Join our community discussions

Thank you for contributing to HabitFlow! 🎯
