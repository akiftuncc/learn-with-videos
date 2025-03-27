# VideoHub Mobile App

A React Native (Expo) application for displaying and playing instructional videos for different platforms and apps.

## Features

- Browse videos by platform (Phone, WhatsApp, Facebook, etc.)
- Play videos from AWS S3 bucket
- Internationalization support (i18n)
- Responsive UI for both iOS and Android

## Tech Stack

- React Native / Expo
- TypeScript
- Zustand (State Management)
- i18next (Internationalization)
- React Navigation
- Expo AV (Video Player)

## Getting Started

### Prerequisites

- Node.js (>= 14.0.0)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm start
# or
yarn start
```

4. Use the Expo Go app on your phone to scan the QR code, or press 'i' to open in iOS simulator (macOS with Xcode) or 'a' to open in Android emulator.

## Project Structure

```
src/
├── components/         # Reusable UI components
├── constants/          # App constants and mock data
├── hooks/              # Custom React hooks
├── locales/            # i18n translations
├── navigation/         # Navigation setup
├── screens/            # App screens
├── store/              # Zustand state management
└── types/              # TypeScript type definitions
```

## Customization

To use real video data, update the URLs in `src/constants/mockData.ts` to point to your actual AWS S3 bucket or video hosting service.
