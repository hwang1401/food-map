---
title: 'Foundation Tokens'
description: 'Lumir 디자인 시스템의 Foundation 토큰 시스템'
date: '2024-12-28'
category: 'Guides'
tags: ['Foundation', 'Tokens', 'CSS Variables', 'Design System']
version: '1.0.0'
status: 'stable'
---

# Foundation Tokens

Lumir 디자인 시스템의 모든 디자인 속성은 Foundation 토큰을 통해 관리됩니다. 이 가이드는 토큰 시스템의 구조와 사용 방법을 설명합니다.

## 🎯 토큰 시스템 개요

Foundation 토큰은 CSS Custom Properties(CSS Variables)로 구현된 디자인 토큰입니다. 모든 컴포넌트는 하드코딩된 값 대신 이 토큰들을 사용하여 일관성을 보장합니다.

### 핵심 원칙

1. **일관성**: 모든 시스템에서 동일한 토큰 구조 사용
2. **확장성**: 새로운 시스템 추가 시 토큰 재사용
3. **유지보수성**: 중앙 집중식 디자인 값 관리
4. **접근성**: WCAG 2.1 AA 기준을 만족하는 색상 대비

## 📁 토큰 카테고리

### 1. 색상 토큰 (Color)

```css
/* 기본 색상 팔레트 */
--foundation-foundation-color-blue-light-0: #f5f9ff;
--foundation-foundation-color-blue-light-10: #e6f2ff;
--foundation-foundation-color-blue-light-20: #cce5ff;
--foundation-foundation-color-blue-light-30: #99ccff;
--foundation-foundation-color-blue-light-40: #66b3ff;
--foundation-foundation-color-blue-light-50: #3399ff;
--foundation-foundation-color-blue-light-60: #0080ff;

--foundation-foundation-color-blue-dark-50: #1976d2;
--foundation-foundation-color-blue-dark-60: #1565c0;
--foundation-foundation-color-blue-dark-70: #0d47a1;
--foundation-foundation-color-blue-dark-80: #0a3d91;
--foundation-foundation-color-blue-dark-90: #073381;
--foundation-foundation-color-blue-dark-100: #042971;

/* 그레이스케일 */
--foundation-foundation-color-grey-light-0: #ffffff;
--foundation-foundation-color-grey-light-10: #f8f9fa;
--foundation-foundation-color-grey-light-20: #e9ecef;
--foundation-foundation-color-grey-light-30: #dee2e6;
--foundation-foundation-color-grey-light-40: #ced4da;
--foundation-foundation-color-grey-light-50: #adb5bd;
--foundation-foundation-color-grey-light-60: #6c757d;

--foundation-foundation-color-grey-dark-60: #495057;
--foundation-foundation-color-grey-dark-70: #343a40;
--foundation-foundation-color-grey-dark-80: #212529;
--foundation-foundation-color-grey-dark-90: #1a1d20;
--foundation-foundation-color-grey-dark-100: #000000;
```

#### 색상 사용 예제

```tsx
// ✅ 올바른 사용법
const styles = {
  backgroundColor: 'var(--foundation-foundation-color-blue-light-50)',
  color: 'var(--foundation-foundation-color-grey-dark-80)',
  borderColor: 'var(--foundation-foundation-color-grey-light-30)'
};

// ❌ 잘못된 사용법 (하드코딩)
const styles = {
  backgroundColor: '#3399ff',
  color: '#212529',
  borderColor: '#dee2e6'
};
```

### 2. 간격 토큰 (Spacing)

```css
/* 기본 간격 */
--foundation-foundation-spacing-xs: 4px;
--foundation-foundation-spacing-sm: 8px;
--foundation-foundation-spacing-md: 16px;
--foundation-foundation-spacing-lg: 24px;
--foundation-foundation-spacing-xl: 32px;
--foundation-foundation-spacing-2xl: 48px;
--foundation-foundation-spacing-3xl: 64px;

/* 세밀한 간격 */
--foundation-foundation-spacing-25: 2px;
--foundation-foundation-spacing-50: 4px;
--foundation-foundation-spacing-100: 8px;
--foundation-foundation-spacing-150: 12px;
--foundation-foundation-spacing-200: 16px;
--foundation-foundation-spacing-300: 24px;
--foundation-foundation-spacing-400: 32px;

/* 수직/수평 특화 간격 */
--foundation-foundation-spacing-100-vertical: 8px;
--foundation-foundation-spacing-100-horizontal: 8px;
--foundation-foundation-spacing-200-vertical: 16px;
--foundation-foundation-spacing-200-horizontal: 16px;

/* 터치 타겟 */
--foundation-foundation-spacing-touch-target: 44px;
```

#### 간격 사용 예제

```tsx
// ✅ 올바른 사용법
const containerStyles = {
  padding: 'var(--foundation-foundation-spacing-md)',
  margin: 'var(--foundation-foundation-spacing-sm)',
  gap: 'var(--foundation-foundation-spacing-100)'
};

// 반응형 간격
const responsiveStyles = `
  .container {
    padding: var(--foundation-foundation-spacing-lg);
  }
  
  @media (max-width: 768px) {
    .container {
      padding: var(--foundation-foundation-spacing-md);
    }
  }
  
  @media (max-width: 480px) {
    .container {
      padding: var(--foundation-foundation-spacing-sm);
    }
  }
`;
```

### 3. 폰트 토큰 (Font)

```css
/* 폰트 크기 */
--foundation-foundation-font-fontsize-100: 12px;
--foundation-foundation-font-fontsize-120: 14px;
--foundation-foundation-font-fontsize-140: 16px;
--foundation-foundation-font-fontsize-160: 18px;
--foundation-foundation-font-fontsize-180: 20px;
--foundation-foundation-font-fontsize-200: 24px;
--foundation-foundation-font-fontsize-240: 28px;
--foundation-foundation-font-fontsize-320: 32px;

/* 폰트 가중치 */
--foundation-foundation-font-weight-normal: 400;
--foundation-foundation-font-weight-medium: 500;
--foundation-foundation-font-weight-semibold: 600;
--foundation-foundation-font-weight-bold: 700;

/* 라인 높이 */
--foundation-foundation-font-lineheight-tight: 1.25;
--foundation-foundation-font-lineheight-normal: 1.5;
--foundation-foundation-font-lineheight-relaxed: 1.75;

/* 폰트 패밀리 */
--foundation-foundation-font-family-primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--foundation-foundation-font-family-mono: 'SF Mono', Monaco, 'Cascadia Code', monospace;
```

#### 폰트 사용 예제

```tsx
// ✅ 올바른 사용법
const textStyles = {
  fontSize: 'var(--foundation-foundation-font-fontsize-140)',
  fontWeight: 'var(--foundation-foundation-font-weight-medium)',
  lineHeight: 'var(--foundation-foundation-font-lineheight-normal)',
  fontFamily: 'var(--foundation-foundation-font-family-primary)'
};

// 타이포그래피 스케일
const headingStyles = {
  h1: {
    fontSize: 'var(--foundation-foundation-font-fontsize-320)',
    fontWeight: 'var(--foundation-foundation-font-weight-bold)',
    lineHeight: 'var(--foundation-foundation-font-lineheight-tight)'
  },
  h2: {
    fontSize: 'var(--foundation-foundation-font-fontsize-240)',
    fontWeight: 'var(--foundation-foundation-font-weight-semibold)',
    lineHeight: 'var(--foundation-foundation-font-lineheight-tight)'
  },
  body: {
    fontSize: 'var(--foundation-foundation-font-fontsize-140)',
    fontWeight: 'var(--foundation-foundation-font-weight-normal)',
    lineHeight: 'var(--foundation-foundation-font-lineheight-normal)'
  }
};
```

### 4. 그림자 토큰 (Shadow)

```css
/* 기본 그림자 */
--foundation-foundation-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--foundation-foundation-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
--foundation-foundation-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
--foundation-foundation-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);

/* 레벨별 그림자 */
--foundation-foundation-shadow-10: 0 1px 3px rgba(0, 0, 0, 0.12);
--foundation-foundation-shadow-20: 0 4px 8px rgba(0, 0, 0, 0.12);
--foundation-foundation-shadow-30: 0 8px 16px rgba(0, 0, 0, 0.15);
--foundation-foundation-shadow-40: 0 16px 32px rgba(0, 0, 0, 0.15);

/* 특수 그림자 */
--foundation-foundation-shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);
--foundation-foundation-shadow-focus: 0 0 0 3px rgba(59, 130, 246, 0.1);
```

#### 그림자 사용 예제

```tsx
// ✅ 올바른 사용법
const cardStyles = {
  boxShadow: 'var(--foundation-foundation-shadow-md)',
  
  // 호버 상태
  '&:hover': {
    boxShadow: 'var(--foundation-foundation-shadow-lg)'
  }
};

// 포커스 스타일
const focusStyles = {
  '&:focus': {
    outline: 'none',
    boxShadow: 'var(--foundation-foundation-shadow-focus)'
  }
};
```

### 5. 테두리 토큰 (Border)

```css
/* 테두리 반지름 */
--foundation-foundation-border-radius-none: 0;
--foundation-foundation-border-radius-sm: 4px;
--foundation-foundation-border-radius-md: 6px;
--foundation-foundation-border-radius-lg: 8px;
--foundation-foundation-border-radius-xl: 12px;
--foundation-foundation-border-radius-2xl: 16px;
--foundation-foundation-border-radius-full: 9999px;

/* 테두리 두께 */
--foundation-foundation-border-width-0: 0;
--foundation-foundation-border-width-1: 1px;
--foundation-foundation-border-width-2: 2px;
--foundation-foundation-border-width-4: 4px;

/* 테두리 스타일 */
--foundation-foundation-border-style-solid: solid;
--foundation-foundation-border-style-dashed: dashed;
--foundation-foundation-border-style-dotted: dotted;
```

#### 테두리 사용 예제

```tsx
// ✅ 올바른 사용법
const borderStyles = {
  border: `var(--foundation-foundation-border-width-1) var(--foundation-foundation-border-style-solid) var(--foundation-foundation-color-grey-light-30)`,
  borderRadius: 'var(--foundation-foundation-border-radius-md)'
};

// 시스템별 차이점
const system01Border = {
  borderRadius: 'var(--foundation-foundation-border-radius-sm)' // 4px
};

const system02Border = {
  borderRadius: 'var(--foundation-foundation-border-radius-xl)' // 12px
};
```

## 🎨 시스템별 토큰 활용

### System-01: Professional & Clean

```css
/* System-01 특화 토큰 사용 패턴 */
.system01-component {
  /* 작은 반지름 */
  border-radius: var(--foundation-foundation-border-radius-sm);
  
  /* 차분한 색상 */
  background-color: var(--foundation-foundation-color-grey-light-0);
  border-color: var(--foundation-foundation-color-grey-light-30);
  
  /* 적당한 간격 */
  padding: var(--foundation-foundation-spacing-200);
  
  /* 미묘한 그림자 */
  box-shadow: var(--foundation-foundation-shadow-sm);
}
```

### System-02: Friendly & Bright

```css
/* System-02 특화 토큰 사용 패턴 */
.system02-component {
  /* 큰 반지름 */
  border-radius: var(--foundation-foundation-border-radius-xl);
  
  /* 밝은 색상 */
  background-color: var(--foundation-foundation-color-blue-light-10);
  border-color: var(--foundation-foundation-color-blue-light-40);
  
  /* 넉넉한 간격 */
  padding: var(--foundation-foundation-spacing-300);
  
  /* 뚜렷한 그림자 */
  box-shadow: var(--foundation-foundation-shadow-md);
}
```

## 🔧 토큰 커스터마이징

### CSS Custom Properties 오버라이드

```css
/* 프로젝트별 커스터마이징 */
:root {
  /* 브랜드 색상 오버라이드 */
  --foundation-foundation-color-blue-light-50: #your-brand-blue;
  --foundation-foundation-color-blue-dark-50: #your-brand-dark-blue;
  
  /* 폰트 패밀리 오버라이드 */
  --foundation-foundation-font-family-primary: 'Your Brand Font', sans-serif;
  
  /* 간격 오버라이드 */
  --foundation-foundation-spacing-md: 20px; /* 기본 16px에서 변경 */
}
```

### 다크 모드 지원

```css
/* 다크 모드 토큰 */
@media (prefers-color-scheme: dark) {
  :root {
    --foundation-foundation-color-grey-light-0: #1a1d20;
    --foundation-foundation-color-grey-light-10: #212529;
    --foundation-foundation-color-grey-light-20: #343a40;
    --foundation-foundation-color-grey-light-30: #495057;
    
    --foundation-foundation-color-grey-dark-60: #adb5bd;
    --foundation-foundation-color-grey-dark-70: #ced4da;
    --foundation-foundation-color-grey-dark-80: #e9ecef;
    --foundation-foundation-color-grey-dark-90: #f8f9fa;
    --foundation-foundation-color-grey-dark-100: #ffffff;
  }
}
```

## 🧪 토큰 검증 도구

### CSS 린터 규칙

```json
// .stylelintrc.json
{
  "rules": {
    "declaration-property-value-disallowed-list": {
      "color": ["/^(?!var\\(--foundation-)/"],
      "background-color": ["/^(?!var\\(--foundation-)/"],
      "border-color": ["/^(?!var\\(--foundation-)/"],
      "font-size": ["/^(?!var\\(--foundation-)/"],
      "padding": ["/^(?!var\\(--foundation-)/"],
      "margin": ["/^(?!var\\(--foundation-)/"]
    }
  }
}
```

### 토큰 사용 검증 함수

```typescript
// 토큰 사용 여부 검증
function validateTokenUsage(cssValue: string): boolean {
  const tokenPattern = /^var\(--foundation-foundation-/;
  const hardcodedPatterns = [
    /#[0-9a-fA-F]{3,6}/, // 헥스 색상
    /rgb\(/, // RGB 색상
    /\d+px/, // 픽셀 값
    /\d+rem/, // rem 값
    /\d+em/ // em 값
  ];
  
  // 토큰 사용 시 통과
  if (tokenPattern.test(cssValue)) {
    return true;
  }
  
  // 하드코딩된 값 감지 시 실패
  return !hardcodedPatterns.some(pattern => pattern.test(cssValue));
}

// 사용 예제
console.log(validateTokenUsage('var(--foundation-foundation-color-blue-light-50)')); // true
console.log(validateTokenUsage('#3399ff')); // false
console.log(validateTokenUsage('16px')); // false
```

## 📊 색상 대비 검증

### WCAG 2.1 AA 기준 검증

```typescript
// 색상 대비 계산 함수
function calculateContrast(color1: string, color2: string): number {
  // 실제 구현에서는 color parsing과 luminance 계산 필요
  // 여기서는 예시 값 반환
  return 4.5; // WCAG AA 기준
}

// 토큰 조합 검증
const colorCombinations = [
  {
    foreground: 'var(--foundation-foundation-color-grey-dark-80)',
    background: 'var(--foundation-foundation-color-grey-light-0)',
    contrast: 8.38, // AAA 등급
    status: 'excellent'
  },
  {
    foreground: 'var(--foundation-foundation-color-grey-light-60)',
    background: 'var(--foundation-foundation-color-grey-light-0)',
    contrast: 2.92, // 기준 미달
    status: 'fail'
  }
];
```

### 자동 색상 개선 제안

```typescript
// 색상 대비 개선 제안
function suggestBetterContrast(foreground: string, background: string) {
  const currentContrast = calculateContrast(foreground, background);
  
  if (currentContrast < 4.5) {
    return {
      current: {
        foreground,
        background,
        contrast: currentContrast,
        status: 'fail'
      },
      suggestions: [
        {
          foreground: 'var(--foundation-foundation-color-grey-dark-80)',
          background,
          contrast: 8.38,
          status: 'excellent'
        }
      ]
    };
  }
  
  return { status: 'pass' };
}
```

## 🔍 토큰 사용 패턴

### 컴포넌트별 권장 토큰

```typescript
// 버튼 컴포넌트 토큰 패턴
const buttonTokens = {
  system01: {
    borderRadius: 'var(--foundation-foundation-border-radius-sm)',
    padding: 'var(--foundation-foundation-spacing-100) var(--foundation-foundation-spacing-200)',
    fontSize: 'var(--foundation-foundation-font-fontsize-140)',
    fontWeight: 'var(--foundation-foundation-font-weight-medium)'
  },
  system02: {
    borderRadius: 'var(--foundation-foundation-border-radius-xl)',
    padding: 'var(--foundation-foundation-spacing-150) var(--foundation-foundation-spacing-300)',
    fontSize: 'var(--foundation-foundation-font-fontsize-140)',
    fontWeight: 'var(--foundation-foundation-font-weight-medium)'
  }
};

// 카드 컴포넌트 토큰 패턴
const cardTokens = {
  system01: {
    borderRadius: 'var(--foundation-foundation-border-radius-md)',
    padding: 'var(--foundation-foundation-spacing-300)',
    boxShadow: 'var(--foundation-foundation-shadow-sm)',
    border: 'var(--foundation-foundation-border-width-1) var(--foundation-foundation-border-style-solid) var(--foundation-foundation-color-grey-light-30)'
  },
  system02: {
    borderRadius: 'var(--foundation-foundation-border-radius-2xl)',
    padding: 'var(--foundation-foundation-spacing-400)',
    boxShadow: 'var(--foundation-foundation-shadow-md)',
    border: 'none'
  }
};
```

## 📱 반응형 토큰 전략

### 브레이크포인트 기반 토큰

```css
/* 반응형 간격 토큰 */
:root {
  --spacing-responsive-sm: var(--foundation-foundation-spacing-sm);
  --spacing-responsive-md: var(--foundation-foundation-spacing-md);
  --spacing-responsive-lg: var(--foundation-foundation-spacing-lg);
}

@media (max-width: 768px) {
  :root {
    --spacing-responsive-lg: var(--foundation-foundation-spacing-md);
    --spacing-responsive-md: var(--foundation-foundation-spacing-sm);
  }
}

@media (max-width: 480px) {
  :root {
    --spacing-responsive-md: var(--foundation-foundation-spacing-xs);
    --spacing-responsive-sm: var(--foundation-foundation-spacing-25);
  }
}
```

### 컨테이너 쿼리 지원

```css
/* 컨테이너 기반 토큰 */
.adaptive-component {
  container-type: inline-size;
  padding: var(--foundation-foundation-spacing-md);
}

@container (max-width: 400px) {
  .adaptive-component {
    padding: var(--foundation-foundation-spacing-sm);
    font-size: var(--foundation-foundation-font-fontsize-120);
  }
}

@container (min-width: 600px) {
  .adaptive-component {
    padding: var(--foundation-foundation-spacing-lg);
    font-size: var(--foundation-foundation-font-fontsize-160);
  }
}
```

## 🚨 토큰 사용 시 주의사항

### DO ✅

```css
/* 토큰 사용 */
.component {
  color: var(--foundation-foundation-color-grey-dark-80);
  background-color: var(--foundation-foundation-color-grey-light-0);
  padding: var(--foundation-foundation-spacing-md);
  border-radius: var(--foundation-foundation-border-radius-sm);
}

/* 토큰 조합 */
.button-primary {
  background-color: var(--foundation-foundation-color-blue-light-50);
  color: var(--foundation-foundation-color-grey-light-0);
  border: var(--foundation-foundation-border-width-1) solid var(--foundation-foundation-color-blue-dark-50);
}
```

### DON'T ❌

```css
/* 하드코딩된 값 */
.component {
  color: #212529;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 4px;
}

/* 토큰과 하드코딩 혼용 */
.mixed-approach {
  color: var(--foundation-foundation-color-grey-dark-80); /* ✅ */
  background-color: #ffffff; /* ❌ */
  padding: 16px; /* ❌ */
  border-radius: var(--foundation-foundation-border-radius-sm); /* ✅ */
}
```

## 📚 관련 가이드

1. **[Getting Started](./01-getting-started.md)** - 디자인 시스템 시작하기
2. **[Accessibility Guide](./03-accessibility.md)** - 접근성 가이드라인
3. **[Theming Guide](./04-theming.md)** - 테마 커스터마이징
4. **[Migration Guide](./05-migration.md)** - 기존 프로젝트 마이그레이션

---

**Foundation 토큰을 활용하여 일관되고 확장 가능한 디자인 시스템을 구축하세요!** 