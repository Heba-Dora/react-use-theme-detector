# React Use Theme Detector

[![CI](https://github.com/heba-dora/react-use-theme-detector/actions/workflows/ci.yml/badge.svg)](https://github.com/heba-dora/react-use-theme-detector/actions/workflows/ci.yml)

A highly performant, SSR-safe React hook for detecting and subscribing to system theme preferences (dark/light mode) using `window.matchMedia`.

## Installation

```bash
npm install react-use-theme-detector
```

## Features
- 🚀 **Performant**: Uses native `matchMedia` event listeners.
- 🛡️ **SSR Safe**: Checks environment safely, preventing hydration mismatch errors on Next.js and Remix.
- 📦 **Strictly Typed**: Full TypeScript support.
- ✅ **Tested**: Comprehensive Jest coverage.

## Usage

```tsx
import { useThemeDetector } from 'react-use-theme-detector';

function App() {
  const isDarkTheme = useThemeDetector();

  return (
    <div style={{ background: isDarkTheme ? '#000' : '#fff' }}>
      Current theme is {isDarkTheme ? 'Dark' : 'Light'}
    </div>
  );
}
```

## License
MIT
