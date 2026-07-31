# Todo App

A simple Todo App built with React Native and Expo.

## Features

- Add, toggle (complete), and delete todos
- Dark/light theme support
- Clean, intuitive UI

## Getting Started

### Prerequisites

- Node.js 22+
- npm or yarn
- Expo Go app (for mobile testing) or Android/iOS simulator

### Installation

```sh
# Clone the repository
git clone https://github.com/nexoai361-png/todo-app.git
cd todo-app

# Install dependencies
npm install

# Start the development server
npm start
```

### Running on Mobile

1. Install the [Expo Go](https://expo.dev/go) app on your iOS or Android device
2. Scan the QR code from the terminal output
3. The app will load instantly on your device

### Building Standalone Apps

This project uses [EAS Build](https://docs.expo.dev/build/introduction/) for building standalone apps.

#### Build Android APK

```sh
# Install EAS CLI globally
npm install -g eas-cli

# Build Android APK
eas build -p android --profile preview
```

#### Build iOS App

```sh
# Build iOS app
eas build -p ios --profile preview
```

### GitHub Actions

This project includes a GitHub Actions workflow that:
- Runs linting and tests on every push/PR
- Builds Android APK using EAS Build

The workflow triggers on all branches. To use EAS Build in GitHub Actions, add your `EXPO_TOKEN` as a repository secret in GitHub.

## Project Structure

```
├── App.tsx              # Main app component
├── __tests__/           # Test files
├── .github/workflows/   # GitHub Actions workflows
├── eas.json             # EAS Build configuration
├── app.json             # Expo configuration
├── package.json
└── tsconfig.json
```

## Available Scripts

- `npm start` - Start the Expo dev server
- `npm run android` - Open app in Android emulator or Expo Go
- `npm run ios` - Open app in iOS simulator or Expo Go
- `npm run lint` - Run ESLint
- `npm test` - Run Jest tests
- `npm run build:android` - Build Android APK (local)
- `npm run build:ios` - Build iOS app (local)

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [EAS Build Documentation](https://docs.expo.dev/build/introduction/)