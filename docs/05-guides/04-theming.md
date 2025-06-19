---
title: 'Theming Guide'
description: 'Lumir 디자인 시스템 테마 커스터마이징 가이드'
date: '2024-12-28'
category: 'Guides'
tags: ['Theming', 'Customization', 'CSS Variables', 'Design Tokens']
version: '1.0.0'
status: 'stable'
---

# Theming Guide

Lumir 디자인 시스템의 테마 시스템을 활용하여 브랜드에 맞는 디자인을 구현하는 방법을 안내합니다.

## 🎨 테마 시스템 개요

### 기본 구조

Lumir 디자인 시스템은 Foundation 토큰을 기반으로 한 유연한 테마 시스템을 제공합니다.

```
Foundation Tokens (기본 색상, 간격, 폰트 등)
    ↓
System Themes (System-01, System-02, ...)
    ↓
Custom Brand Themes (고객 브랜드별 커스터마이징)
```

### 테마 레이어

1. **Foundation Layer**: 기본 디자인 토큰
2. **System Layer**: 시스템별 특화 스타일
3. **Brand Layer**: 브랜드별 커스터마이징
4. **Component Layer**: 컴포넌트별 세부 조정

## 🔧 기본 테마 커스터마이징

### CSS Custom Properties 오버라이드

```css
/* 브랜드 테마 파일: brand-theme.css */
:root {
  /* 브랜드 색상 오버라이드 */
  --foundation-foundation-color-blue-light-50: #your-primary-color;
  --foundation-foundation-color-blue-dark-50: #your-primary-dark;
  --foundation-foundation-color-green-light-50: #your-success-color;
  --foundation-foundation-color-red-light-50: #your-error-color;
  
  /* 브랜드 폰트 */
  --foundation-foundation-font-family-primary: 'Your Brand Font', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* 브랜드 간격 조정 */
  --foundation-foundation-spacing-brand-sm: 6px;
  --foundation-foundation-spacing-brand-md: 18px;
  --foundation-foundation-spacing-brand-lg: 28px;
  
  /* 브랜드 반지름 */
  --foundation-foundation-border-radius-brand: 8px;
}

/* 다크 모드 브랜드 테마 */
@media (prefers-color-scheme: dark) {
  :root {
    --foundation-foundation-color-blue-light-50: #your-primary-color-dark;
    --foundation-foundation-color-blue-dark-50: #your-primary-light;
  }
}
```

### 사용 예제

```tsx
// App.tsx
import 'lumir-design-system-shared/foundation-tokens.css';
import './brand-theme.css'; // 브랜드 테마 적용

function App() {
  return (
    <div className="app">
      <Button variant="filled" color="primary">
        브랜드 색상이 적용된 버튼
      </Button>
    </div>
  );
}
```

## 🎯 시스템별 테마 커스터마이징

### System-01 (Professional & Clean) 커스터마이징

```css
/* system-01-custom.css */
:root {
  /* Professional 테마 색상 조정 */
  --system-01-primary: #your-professional-blue;
  --system-01-secondary: #your-professional-gray;
  --system-01-accent: #your-professional-accent;
  
  /* Professional 테마 간격 */
  --system-01-spacing-compact: var(--foundation-foundation-spacing-sm);
  --system-01-spacing-comfortable: var(--foundation-foundation-spacing-md);
  
  /* Professional 테마 반지름 */
  --system-01-border-radius: var(--foundation-foundation-border-radius-sm);
}

/* System-01 컴포넌트 커스터마이징 */
.lumir-system-01 .button-primary {
  background-color: var(--system-01-primary);
  border-radius: var(--system-01-border-radius);
  padding: var(--system-01-spacing-compact) var(--system-01-spacing-comfortable);
}
```

### System-02 (Friendly & Bright) 커스터마이징

```css
/* system-02-custom.css */
:root {
  /* Friendly 테마 색상 조정 */
  --system-02-primary: #your-friendly-color;
  --system-02-secondary: #your-friendly-secondary;
  --system-02-cta: #your-cta-color;
  
  /* Friendly 테마 반지름 (더 둥글게) */
  --system-02-border-radius: var(--foundation-foundation-border-radius-xl);
  --system-02-border-radius-large: var(--foundation-foundation-border-radius-2xl);
  
  /* Friendly 테마 그림자 */
  --system-02-shadow: var(--foundation-foundation-shadow-md);
}

/* System-02 컴포넌트 커스터마이징 */
.lumir-system-02 .button-filled {
  background-color: var(--system-02-primary);
  border-radius: var(--system-02-border-radius);
  box-shadow: var(--system-02-shadow);
}
```

## 🌈 고급 테마 커스터마이징

### 컴포넌트별 세밀한 조정

```css
/* component-overrides.css */

/* 버튼 컴포넌트 커스터마이징 */
.custom-button {
  /* 기본 Foundation 토큰 사용 */
  background: linear-gradient(
    135deg, 
    var(--foundation-foundation-color-blue-light-40),
    var(--foundation-foundation-color-blue-light-60)
  );
  border: var(--foundation-foundation-border-width-2) solid var(--foundation-foundation-color-blue-dark-50);
  border-radius: var(--foundation-foundation-border-radius-lg);
  
  /* 호버 효과 */
  transition: all 0.2s ease;
}

.custom-button:hover {
  background: linear-gradient(
    135deg, 
    var(--foundation-foundation-color-blue-light-50),
    var(--foundation-foundation-color-blue-light-70)
  );
  transform: translateY(-2px);
  box-shadow: var(--foundation-foundation-shadow-lg);
}

/* 카드 컴포넌트 커스터마이징 */
.custom-card {
  background-color: var(--foundation-foundation-color-grey-light-0);
  border: var(--foundation-foundation-border-width-1) solid var(--foundation-foundation-color-grey-light-20);
  border-radius: var(--foundation-foundation-border-radius-xl);
  padding: var(--foundation-foundation-spacing-lg);
  box-shadow: var(--foundation-foundation-shadow-md);
  
  /* 브랜드 액센트 */
  border-left: 4px solid var(--foundation-foundation-color-blue-light-50);
}
```

### 테마 전환 시스템

```tsx
// ThemeProvider.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'system-01' | 'system-02' | 'custom-brand';
type ColorScheme = 'light' | 'dark' | 'auto';

interface ThemeContextType {
  theme: Theme;
  colorScheme: ColorScheme;
  setTheme: (theme: Theme) => void;
  setColorScheme: (scheme: ColorScheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('system-01');
  const [colorScheme, setColorScheme] = useState<ColorScheme>('auto');

  useEffect(() => {
    // 테마 클래스 적용
    document.documentElement.className = `lumir-${theme} color-scheme-${colorScheme}`;
    
    // 다크 모드 감지
    if (colorScheme === 'auto') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => {
        document.documentElement.setAttribute('data-color-scheme', e.matches ? 'dark' : 'light');
      };
      
      mediaQuery.addEventListener('change', handleChange);
      handleChange({ matches: mediaQuery.matches } as MediaQueryListEvent);
      
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      document.documentElement.setAttribute('data-color-scheme', colorScheme);
    }
  }, [theme, colorScheme]);

  return (
    <ThemeContext.Provider value={{ theme, colorScheme, setTheme, setColorScheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
```

### 테마 선택기 컴포넌트

```tsx
// ThemeSelector.tsx
function ThemeSelector() {
  const { theme, colorScheme, setTheme, setColorScheme } = useTheme();

  return (
    <div className="theme-selector">
      <div>
        <label htmlFor="theme-select">테마 선택:</label>
        <select 
          id="theme-select"
          value={theme} 
          onChange={(e) => setTheme(e.target.value as Theme)}
        >
          <option value="system-01">Professional & Clean</option>
          <option value="system-02">Friendly & Bright</option>
          <option value="custom-brand">Custom Brand</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="color-scheme-select">색상 모드:</label>
        <select 
          id="color-scheme-select"
          value={colorScheme} 
          onChange={(e) => setColorScheme(e.target.value as ColorScheme)}
        >
          <option value="auto">자동</option>
          <option value="light">라이트</option>
          <option value="dark">다크</option>
        </select>
      </div>
    </div>
  );
}
```

## 🎨 브랜드별 테마 생성

### 브랜드 색상 팔레트 정의

```typescript
// brand-colors.ts
export const brandColors = {
  // 주요 브랜드 색상
  primary: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3', // 메인 브랜드 색상
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1'
  },
  
  // 보조 색상
  secondary: {
    50: '#fce4ec',
    100: '#f8bbd9',
    200: '#f48fb1',
    300: '#f06292',
    400: '#ec407a',
    500: '#e91e63', // 메인 보조 색상
    600: '#d81b60',
    700: '#c2185b',
    800: '#ad1457',
    900: '#880e4f'
  },
  
  // 기능적 색상
  success: '#4caf50',
  warning: '#ff9800',
  error: '#f44336',
  info: '#2196f3'
};

// Foundation 토큰에 매핑
export const brandTokenMapping = {
  '--foundation-foundation-color-blue-light-50': brandColors.primary[500],
  '--foundation-foundation-color-blue-dark-50': brandColors.primary[700],
  '--foundation-foundation-color-green-light-50': brandColors.success,
  '--foundation-foundation-color-red-light-50': brandColors.error,
  '--foundation-foundation-color-yellow-light-50': brandColors.warning
};
```

### 동적 테마 생성기

```typescript
// theme-generator.ts
interface BrandThemeConfig {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
  };
  typography: {
    fontFamily: string;
    fontSizes?: {
      sm?: string;
      md?: string;
      lg?: string;
    };
  };
  spacing: {
    scale?: number; // 1.0 = 기본, 1.2 = 20% 증가
  };
  borderRadius: {
    scale?: number;
  };
}

export function generateTheme(config: BrandThemeConfig): string {
  const { colors, typography, spacing, borderRadius } = config;
  
  // 색상 팔레트 생성 (라이트/다크 변형 포함)
  const colorPalette = generateColorPalette(colors.primary);
  
  return `
    /* ${config.name} Brand Theme */
    :root {
      /* Primary Colors */
      --foundation-foundation-color-blue-light-50: ${colorPalette.light[500]};
      --foundation-foundation-color-blue-dark-50: ${colorPalette.dark[500]};
      
      /* Secondary Colors */
      --foundation-foundation-color-grey-light-50: ${colors.secondary};
      
      /* Functional Colors */
      --foundation-foundation-color-green-light-50: ${colors.success};
      --foundation-foundation-color-yellow-light-50: ${colors.warning};
      --foundation-foundation-color-red-light-50: ${colors.error};
      
      /* Typography */
      --foundation-foundation-font-family-primary: ${typography.fontFamily};
      ${typography.fontSizes ? generateFontSizes(typography.fontSizes) : ''}
      
      /* Spacing */
      ${spacing.scale ? generateSpacing(spacing.scale) : ''}
      
      /* Border Radius */
      ${borderRadius.scale ? generateBorderRadius(borderRadius.scale) : ''}
    }
    
    /* Dark Mode */
    @media (prefers-color-scheme: dark) {
      :root {
        --foundation-foundation-color-blue-light-50: ${colorPalette.dark[400]};
        --foundation-foundation-color-blue-dark-50: ${colorPalette.light[400]};
      }
    }
  `;
}

function generateColorPalette(baseColor: string) {
  // 색상 팔레트 생성 로직 (예: chroma-js 사용)
  // 실제 구현에서는 색상 라이브러리 활용
  return {
    light: {
      100: lighten(baseColor, 0.4),
      200: lighten(baseColor, 0.3),
      300: lighten(baseColor, 0.2),
      400: lighten(baseColor, 0.1),
      500: baseColor,
      600: darken(baseColor, 0.1),
      700: darken(baseColor, 0.2),
      800: darken(baseColor, 0.3),
      900: darken(baseColor, 0.4)
    },
    dark: {
      // 다크 모드용 팔레트
      100: darken(baseColor, 0.4),
      200: darken(baseColor, 0.3),
      300: darken(baseColor, 0.2),
      400: darken(baseColor, 0.1),
      500: baseColor,
      600: lighten(baseColor, 0.1),
      700: lighten(baseColor, 0.2),
      800: lighten(baseColor, 0.3),
      900: lighten(baseColor, 0.4)
    }
  };
}
```

### 테마 적용 예제

```tsx
// 브랜드 테마 사용 예제
const myBrandTheme: BrandThemeConfig = {
  name: 'MyCompany',
  colors: {
    primary: '#6366f1', // Indigo
    secondary: '#64748b', // Slate
    success: '#10b981', // Emerald
    warning: '#f59e0b', // Amber
    error: '#ef4444' // Red
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    fontSizes: {
      sm: '14px',
      md: '16px',
      lg: '18px'
    }
  },
  spacing: {
    scale: 1.1 // 10% 더 넉넉한 간격
  },
  borderRadius: {
    scale: 1.5 // 50% 더 둥근 모서리
  }
};

// 테마 적용
function App() {
  useEffect(() => {
    const themeCSS = generateTheme(myBrandTheme);
    const styleElement = document.createElement('style');
    styleElement.textContent = themeCSS;
    document.head.appendChild(styleElement);
    
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="app">
        <ThemeSelector />
        <Button variant="filled" color="primary">
          브랜드 테마 버튼
        </Button>
      </div>
    </ThemeProvider>
  );
}
```

## 🔄 테마 전환 애니메이션

### 부드러운 테마 전환

```css
/* theme-transitions.css */
:root {
  /* 전환 애니메이션 */
  --theme-transition-duration: 0.3s;
  --theme-transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
}

/* 전환 대상 속성들 */
* {
  transition: 
    background-color var(--theme-transition-duration) var(--theme-transition-timing),
    border-color var(--theme-transition-duration) var(--theme-transition-timing),
    color var(--theme-transition-duration) var(--theme-transition-timing),
    box-shadow var(--theme-transition-duration) var(--theme-transition-timing);
}

/* 움직임 감소 설정 존중 */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none;
  }
}

/* 테마 전환 중 깜빡임 방지 */
.theme-transitioning {
  pointer-events: none;
}
```

### 테마 전환 훅

```tsx
// useThemeTransition.ts
export function useThemeTransition() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const transitionTheme = useCallback((newTheme: Theme) => {
    setIsTransitioning(true);
    document.documentElement.classList.add('theme-transitioning');
    
    // 테마 변경
    document.documentElement.className = `lumir-${newTheme}`;
    
    // 전환 완료 후 상태 리셋
    setTimeout(() => {
      setIsTransitioning(false);
      document.documentElement.classList.remove('theme-transitioning');
    }, 300);
  }, []);

  return { isTransitioning, transitionTheme };
}
```

## 🧪 테마 테스트

### 테마 일관성 검증

```typescript
// theme-validator.ts
interface ThemeValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

export function validateTheme(themeCSS: string): ThemeValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // 필수 토큰 검증
  const requiredTokens = [
    '--foundation-foundation-color-blue-light-50',
    '--foundation-foundation-color-grey-light-0',
    '--foundation-foundation-font-family-primary',
    '--foundation-foundation-spacing-md'
  ];

  requiredTokens.forEach(token => {
    if (!themeCSS.includes(token)) {
      errors.push(`필수 토큰이 누락되었습니다: ${token}`);
    }
  });

  // 색상 대비 검증
  const colorPairs = extractColorPairs(themeCSS);
  colorPairs.forEach(({ foreground, background, context }) => {
    const contrast = calculateContrast(foreground, background);
    if (contrast < 4.5) {
      errors.push(`색상 대비 기준 미달: ${context} (${contrast.toFixed(2)}:1)`);
    } else if (contrast < 7.0) {
      warnings.push(`색상 대비 개선 권장: ${context} (${contrast.toFixed(2)}:1)`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

// 테마 테스트 스위트
describe('Theme Validation', () => {
  test('기본 테마 검증', () => {
    const result = validateTheme(defaultThemeCSS);
    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  test('브랜드 테마 검증', () => {
    const brandTheme = generateTheme(myBrandTheme);
    const result = validateTheme(brandTheme);
    expect(result.isValid).toBe(true);
  });
});
```

## 📱 반응형 테마

### 디바이스별 테마 조정

```css
/* responsive-theme.css */
:root {
  /* 기본 (데스크톱) */
  --adaptive-spacing: var(--foundation-foundation-spacing-md);
  --adaptive-font-size: var(--foundation-foundation-font-fontsize-140);
  --adaptive-border-radius: var(--foundation-foundation-border-radius-md);
}

/* 태블릿 */
@media (max-width: 768px) {
  :root {
    --adaptive-spacing: var(--foundation-foundation-spacing-lg);
    --adaptive-font-size: var(--foundation-foundation-font-fontsize-160);
    --adaptive-border-radius: var(--foundation-foundation-border-radius-lg);
  }
}

/* 모바일 */
@media (max-width: 480px) {
  :root {
    --adaptive-spacing: var(--foundation-foundation-spacing-xl);
    --adaptive-font-size: var(--foundation-foundation-font-fontsize-180);
    --adaptive-border-radius: var(--foundation-foundation-border-radius-xl);
  }
}

/* 터치 디바이스 */
@media (pointer: coarse) {
  :root {
    /* 터치 친화적 크기 */
    --adaptive-touch-target: var(--foundation-foundation-spacing-touch-target);
    --adaptive-spacing: var(--foundation-foundation-spacing-lg);
  }
}
```

## 🚨 테마 사용 시 주의사항

### DO ✅

```css
/* Foundation 토큰 기반 커스터마이징 */
.custom-component {
  background-color: var(--foundation-foundation-color-blue-light-50);
  padding: var(--foundation-foundation-spacing-md);
  border-radius: var(--foundation-foundation-border-radius-lg);
}

/* 시스템 일관성 유지 */
.system-01-custom {
  border-radius: var(--foundation-foundation-border-radius-sm); /* System-01 스타일 */
}

.system-02-custom {
  border-radius: var(--foundation-foundation-border-radius-xl); /* System-02 스타일 */
}
```

### DON'T ❌

```css
/* 하드코딩된 값 사용 */
.bad-custom {
  background-color: #3399ff; /* ❌ */
  padding: 16px; /* ❌ */
  border-radius: 8px; /* ❌ */
}

/* 시스템 일관성 무시 */
.inconsistent {
  border-radius: 20px; /* ❌ 시스템 기준과 다름 */
}
```

## 📚 관련 가이드

1. **[Getting Started](./01-getting-started.md)** - 디자인 시스템 시작하기
2. **[Foundation Tokens](./02-foundation-tokens.md)** - 토큰 시스템
3. **[Accessibility Guide](./03-accessibility.md)** - 접근성 가이드라인
4. **[Migration Guide](./05-migration.md)** - 기존 프로젝트 마이그레이션

---

**브랜드 아이덴티티를 반영한 일관된 테마로 사용자 경험을 향상시키세요!** 