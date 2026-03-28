import { useEffect, useState } from 'react';

/**
 * A highly performant, SSR-safe React hook to detect system dark mode preference.
 */
export function useThemeDetector(): boolean {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    // SSR Safe fallback
    if (typeof window === 'undefined' || !window.matchMedia) {
      return;
    }

    const darkThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkTheme(darkThemeQuery.matches);

    const themeChangeListener = (e: MediaQueryListEvent) => {
      setIsDarkTheme(e.matches);
    };

    // Modern browsers support addEventListener on MediaQueryList
    if (darkThemeQuery.addEventListener) {
      darkThemeQuery.addEventListener('change', themeChangeListener);
      return () => darkThemeQuery.removeEventListener('change', themeChangeListener);
    } 
    
    // Fallback for older Safari
    if (darkThemeQuery.addListener) {
      darkThemeQuery.addListener(themeChangeListener);
      return () => darkThemeQuery.removeListener(themeChangeListener);
    }
  }, []);

  return isDarkTheme;
}
