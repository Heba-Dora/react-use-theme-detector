import { renderHook } from '@testing-library/react';
import { useThemeDetector } from '../useThemeDetector';

describe('useThemeDetector', () => {
  let mockMatchMedia: jest.Mock;
  let mockAddEventListener: jest.Mock;
  let mockRemoveEventListener: jest.Mock;

  beforeEach(() => {
    mockAddEventListener = jest.fn();
    mockRemoveEventListener = jest.fn();
    
    mockMatchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: mockAddEventListener,
      removeEventListener: mockRemoveEventListener,
    }));

    window.matchMedia = mockMatchMedia;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize correctly with false', () => {
    const { result } = renderHook(() => useThemeDetector());
    expect(result.current).toBe(false);
    expect(mockMatchMedia).toHaveBeenCalledWith('(prefers-color-scheme: dark)');
  });

  it('should be safe to use in SSR environments without window', () => {
    const originalWindow = global.window;
    // @ts-ignore
    delete global.window;
    
    expect(() => {
      renderHook(() => useThemeDetector());
    }).not.toThrow();
    
    global.window = originalWindow;
  });
});
