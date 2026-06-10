# 🇬🇧 English Words - Interactive Vocabulary Trainer

A modern, interactive web application for learning English vocabulary with Polish translations. Built with React, TypeScript, and Material-UI, featuring over 3,000 words from the Oxford word list.

## 🌟 Features

### 📚 Learning Modes

- **Write Mode**: Type the English translation of Polish words
- **Multiple Choice Mode**: Select the correct translation from multiple options

### 🎯 Interactive Learning Tools

- **Smart Word Hints**: Progressive letter-by-letter hints to help you learn
- **Letter Bank**: Shows all unique letters in the correct answer with color coding
- **Progress Tracking**: Real-time statistics for correct and incorrect answers
- **Adaptive Learning**: Words are selected randomly and avoid repetition until all are used

### ⚙️ Customizable Settings

- **Dark/Light Theme**: Toggle between themes for comfortable learning
- **Hint Controls**: Enable/disable word hints and letter hints
- **Difficulty Adjustment**: Customize number of options in multiple choice mode (4-20)
- **Learning Mode Switch**: Seamlessly switch between writing and multiple choice

### 📊 Progress Analytics

- **Answer Statistics**: Track your correct and incorrect answers
- **Recent Performance**: View your most recent answers for quick review
- **Visual Feedback**: Color-coded chips for easy progress visualization

### 🎨 Modern UI/UX

- **Material-UI Design**: Clean, modern interface with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Accessibility**: Full keyboard navigation and screen reader support

## 🚀 Live Demo

Visit the live application: [https://bitlogicforge.github.io/englishWords](https://bitlogicforge.github.io/englishWords)

## 🛠️ Technology Stack

- **Frontend**: React 19 with TypeScript
- **State Management**: Redux Toolkit
- **UI Framework**: Material-UI (MUI) v7
- **Routing**: React Router DOM v7
- **Build Tool**: Vite
- **Deployment**: GitHub Pages with automated CI/CD

## 📦 Installation & Setup

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/bitlogicforge/englishWords.git
   cd englishWords
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production version
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run lint:fix` - Fix auto-fixable ESLint issues
- `npm run format` - Format code with Prettier
- `npm run deploy` - Deploy to GitHub Pages

## 📖 How to Use

### Getting Started

1. **Navigate to Exercise Page**: Click on "Exercise" in the navigation menu
2. **Choose Your Mode**: Use settings to switch between "Write" and "Multiple Choice" modes
3. **Start Learning**: Polish words will be displayed - provide the English translation

### Write Mode

- Type the English translation of the displayed Polish word
- Use hints if needed (can be toggled in settings)
- Press "Check" or Enter to verify your answer

### Multiple Choice Mode

- Select the correct English translation from the provided options
- Number of options can be customized (4-20) in settings
- Instant feedback on your selection

### Customization

- **Theme**: Toggle dark/light mode in settings
- **Hints**: Enable/disable word hints and letter hints
- **Difficulty**: Adjust number of multiple choice options

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BadWordsStats.tsx      # Incorrect answers statistics
│   ├── CheckButton.tsx        # Answer verification button
│   ├── CurrentWord.tsx        # Display current Polish word
│   ├── GoodWordsStats.tsx     # Correct answers statistics
│   ├── Header.tsx             # Application header
│   ├── InputAnswer.tsx        # Text input for answers
│   ├── LettersHint.tsx        # Letter bank hint system
│   ├── Menu.tsx               # Navigation menu
│   ├── OptionsWords.tsx       # Multiple choice options
│   ├── Settings.tsx           # Settings panel
│   ├── Word.tsx               # Progressive word hint display
│   └── WordsStats.tsx         # Reusable statistics component
├── config/              # Configuration files
│   ├── menuItems.ts           # Navigation configuration
│   └── settings.ts            # App settings
├── data/                # Static data
│   └── wordsall.json          # 3000+ English-Polish word pairs
├── hooks/               # Custom React hooks
├── pages/               # Page components
│   ├── ExercisePage.tsx       # Main learning interface
│   ├── HomePage.tsx           # Landing page
│   └── SettingsPage.tsx       # Settings page
├── store/               # Redux store
│   ├── appSlice.ts            # App-wide state (theme, settings)
│   ├── lessonSlice.ts         # Learning session state
│   ├── store.ts               # Store configuration
│   └── hooks.ts               # Typed Redux hooks
└── utils/               # Utility functions
    ├── answerUtils.ts         # Answer validation logic
    ├── listFunctions.ts       # Array manipulation utilities
    ├── textUtils.ts           # Text processing utilities
    └── wordFunctions.ts       # Word-specific utilities
```

## 🎯 Key Features Explained

### Smart Learning Algorithm

- **No Repetition**: Words are tracked to avoid showing the same word twice until all are attempted
- **Random Selection**: Fair distribution ensures exposure to all vocabulary
- **Progress Persistence**: Your session progress is maintained during use

### Adaptive Hints System

- **Progressive Reveals**: In write mode, hints reveal letters progressively based on your input
- **Letter Bank**: Shows all unique letters in the answer with visual feedback
- **Customizable**: All hints can be enabled/disabled based on your preference

### Performance Tracking

- **Real-time Stats**: See your correct/incorrect answer counts instantly
- **Recent History**: Quick access to your last 5 answers in each category
- **Visual Feedback**: Color-coded interface for immediate understanding

## 🌐 Deployment

This application is automatically deployed to GitHub Pages using GitHub Actions. The deployment process:

1. **Automatic Build**: Triggered on push to main branch
2. **Production Optimization**: Vite creates optimized build with asset compression
3. **GitHub Pages**: Deployed to `gh-pages` branch with proper routing for SPA

### Manual Deployment

```bash
npm run build
npm run deploy
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use Material-UI components consistently
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 Data Source

The vocabulary database contains over 3,000 carefully selected English-Polish word pairs based on:

- Oxford English word lists
- Common vocabulary for English learners
- Balanced difficulty progression

## 📧 Contact

**Developer**: BitLogicForge
**Email**: bitlogicforge@gmail.com
**GitHub**: [@bitlogicforge](https://github.com/bitlogicforge)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Oxford Dictionary for vocabulary reference
- Material-UI team for the excellent component library
- React and TypeScript communities for amazing tools
- All contributors who help improve this learning tool

---

**Happy Learning! 🎓📚**

_Start your English vocabulary journey today and expand your language skills with interactive, engaging exercises._
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
