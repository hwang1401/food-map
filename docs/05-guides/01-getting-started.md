---
title: 'Getting Started'
description: 'Lumir 디자인 시스템 시작하기'
date: '2024-12-28'
category: 'Guides'
tags: ['Getting Started', 'Installation', 'Setup', 'Quick Start']
version: '1.0.0'
status: 'stable'
---

# Getting Started

Lumir 디자인 시스템을 프로젝트에 도입하고 사용하는 방법을 안내합니다.

## 🎯 시스템 개요

Lumir 디자인 시스템은 5가지 시스템 테마를 지원하는 모노레포 구조의 디자인 시스템입니다.

### 지원 시스템

- **System-01**: Professional & Clean (GitHub, 백오피스)
- **System-02**: Friendly & Bright (커머스, 소비자 대상)
- **System-03**: Modern & Software (Discord, Slack) - *개발 예정*
- **System-04**: Aerospace Control (위성 컨트롤, 미션 크리티컬) - *개발 예정*
- **System-05**: Aerospace Dashboard (우주 항공 대시보드) - *개발 예정*

## 📦 설치

### NPM 설치

```bash
# 프리미티브 (공통)
npm install lumir-design-system-shared

# System-01 (Professional & Clean)
npm install lumir-design-system-01

# System-02 (Friendly & Bright)
npm install lumir-design-system-02
```

### Yarn 설치

```bash
# 프리미티브 (공통)
yarn add lumir-design-system-shared

# System-01 (Professional & Clean)
yarn add lumir-design-system-01

# System-02 (Friendly & Bright)
yarn add lumir-design-system-02
```

## 🚀 빠른 시작

### 1. Foundation 토큰 설정

모든 컴포넌트는 Foundation 토큰을 기반으로 작동합니다. CSS 파일을 먼저 import 해야 합니다.

```tsx
// App.tsx 또는 main.tsx
import 'lumir-design-system-shared/foundation-tokens.css';

function App() {
  return (
    <div className="App">
      {/* 앱 컨텐츠 */}
    </div>
  );
}
```

### 2. 컴포넌트 사용

#### System-01 사용 예제

```tsx
import React, { useState } from 'react';
import { Button, Card, Field, Badge } from 'lumir-design-system-01';

function ProfessionalApp() {
  const [name, setName] = useState('');
  
  return (
    <Card variant="outlined">
      <div style={{ padding: '24px' }}>
        <h2>사용자 정보</h2>
        
        <Field
          label="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="이름을 입력하세요"
        />
        
        <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
          <Button variant="filled" color="primary">
            저장
          </Button>
          <Button variant="outlined" color="secondary">
            취소
          </Button>
        </div>
        
        <Badge color="primary" style="filled" size="sm">
          Professional
        </Badge>
      </div>
    </Card>
  );
}
```

#### System-02 사용 예제

```tsx
import React, { useState } from 'react';
import { Button, Card, Field, Chip } from 'lumir-design-system-02';

function FriendlyApp() {
  const [email, setEmail] = useState('');
  const [selectedTags, setSelectedTags] = useState(['electronics']);
  
  return (
    <Card variant="filled">
      <div style={{ padding: '24px' }}>
        <h2>관심 상품 설정</h2>
        
        <Field
          label="이메일"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력하세요"
          leftIcon="LineIconsMailIcon"
        />
        
        <div style={{ marginTop: '16px' }}>
          <h3>관심 카테고리</h3>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            <Chip
              variant="filled"
              selectable
              selected={selectedTags.includes('electronics')}
              onClick={() => {
                setSelectedTags(prev => 
                  prev.includes('electronics')
                    ? prev.filter(tag => tag !== 'electronics')
                    : [...prev, 'electronics']
                );
              }}
            >
              전자제품
            </Chip>
            <Chip
              variant="filled"
              selectable
              selected={selectedTags.includes('fashion')}
              onClick={() => {
                setSelectedTags(prev => 
                  prev.includes('fashion')
                    ? prev.filter(tag => tag !== 'fashion')
                    : [...prev, 'fashion']
                );
              }}
            >
              패션
            </Chip>
          </div>
        </div>
        
        <Button 
          variant="filled" 
          color="cta"
          style={{ marginTop: '24px', width: '100%' }}
        >
          설정 완료
        </Button>
      </div>
    </Card>
  );
}
```

## 🎨 테마 선택 가이드

### System-01: Professional & Clean
**사용 사례**: 백오피스, 관리자 도구, B2B 서비스, 전문 도구

**특징**:
- 깔끔하고 정돈된 디자인
- 높은 정보 밀도
- 효율성 중심의 인터페이스
- 차분한 색상 팔레트

```tsx
// System-01 권장 사용법
import { Button, Table, Field, Badge } from 'lumir-design-system-01';

function AdminDashboard() {
  return (
    <div>
      <Button variant="outlined" size="sm">
        데이터 내보내기
      </Button>
      <Badge color="primary" style="outlined" size="sm">
        관리자
      </Badge>
    </div>
  );
}
```

### System-02: Friendly & Bright
**사용 사례**: 커머스, 소비자 앱, 마케팅 페이지, 소셜 서비스

**특징**:
- 친근하고 매력적인 디자인
- 둥근 모서리와 부드러운 형태
- 밝고 활기찬 색상
- 터치 친화적 크기

```tsx
// System-02 권장 사용법
import { Button, Card, Chip, Field } from 'lumir-design-system-02';

function ShoppingApp() {
  return (
    <Card variant="filled">
      <Button variant="filled" color="cta" size="lg">
        지금 구매하기
      </Button>
      <Chip variant="filled" size="md">
        무료배송
      </Chip>
    </Card>
  );
}
```

## 🔧 TypeScript 설정

Lumir 디자인 시스템은 TypeScript를 완전 지원합니다.

```json
// tsconfig.json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "jsx": "react-jsx",
    "declaration": true,
    "skipLibCheck": true
  }
}
```

## 🎭 CSS-in-JS 지원

### Styled Components

```tsx
import styled from 'styled-components';
import { Button } from 'lumir-design-system-01';

const CustomButton = styled(Button)`
  margin: var(--foundation-foundation-spacing-md);
  
  &:hover {
    transform: translateY(-2px);
    transition: transform 0.2s ease;
  }
`;
```

### Emotion

```tsx
import { css } from '@emotion/react';
import { Button } from 'lumir-design-system-02';

const buttonStyles = css`
  border-radius: var(--foundation-foundation-border-radius-xl);
  box-shadow: var(--foundation-foundation-shadow-20);
`;

function CustomButton() {
  return (
    <Button css={buttonStyles} variant="filled">
      커스텀 버튼
    </Button>
  );
}
```

## 📱 반응형 디자인

Foundation 토큰을 활용한 반응형 디자인:

```css
.responsive-container {
  padding: var(--foundation-foundation-spacing-md);
  
  @media (max-width: 768px) {
    padding: var(--foundation-foundation-spacing-sm);
  }
  
  @media (max-width: 480px) {
    padding: var(--foundation-foundation-spacing-xs);
  }
}
```

```tsx
import { Button, Card } from 'lumir-design-system-02';

function ResponsiveComponent() {
  return (
    <Card className="responsive-container">
      <Button 
        variant="filled" 
        size="lg"
        style={{ 
          width: '100%',
          minHeight: 'var(--foundation-foundation-spacing-touch-target)' // 44px
        }}
      >
        터치 친화적 버튼
      </Button>
    </Card>
  );
}
```

## 🌙 다크 모드 지원

Foundation 토큰은 자동으로 다크 모드를 지원합니다:

```css
/* 자동으로 다크 모드 적용 */
@media (prefers-color-scheme: dark) {
  :root {
    /* Foundation 토큰이 자동으로 다크 모드 값으로 변경됨 */
  }
}
```

```tsx
function DarkModeComponent() {
  return (
    <Card variant="outlined">
      {/* 자동으로 다크 모드 색상 적용 */}
      <Button variant="filled" color="primary">
        다크 모드 지원 버튼
      </Button>
    </Card>
  );
}
```

## 🔍 개발자 도구

### Storybook 설정

```bash
# Storybook 설치 및 설정
npx storybook@latest init

# Foundation 토큰을 Storybook에 추가
# .storybook/preview.js
import 'lumir-design-system-shared/foundation-tokens.css';
```

### 디버깅 도구

```tsx
// 개발 환경에서 컴포넌트 props 확인
import { Button } from 'lumir-design-system-01';

function DebugComponent() {
  return (
    <Button 
      variant="filled"
      color="primary"
      // 개발 환경에서만 표시되는 디버그 정보
      data-debug="button-primary"
      onMouseEnter={() => {
        if (process.env.NODE_ENV === 'development') {
          console.log('Button hovered:', { variant: 'filled', color: 'primary' });
        }
      }}
    >
      디버그 버튼
    </Button>
  );
}
```

## 📋 체크리스트

프로젝트에 Lumir 디자인 시스템을 도입할 때 확인해야 할 사항들:

### 설치 체크리스트

- [ ] Foundation 토큰 CSS 파일 import
- [ ] 필요한 시스템 패키지 설치 (system-01, system-02)
- [ ] TypeScript 타입 정의 확인
- [ ] Storybook 설정 (선택사항)

### 개발 체크리스트

- [ ] 하드코딩된 CSS 값 대신 Foundation 토큰 사용
- [ ] 접근성 속성 (aria-label, role 등) 추가
- [ ] 반응형 디자인 고려
- [ ] 다크 모드 테스트
- [ ] 키보드 내비게이션 테스트

### 배포 체크리스트

- [ ] 모든 컴포넌트 props 검증
- [ ] 브라우저 호환성 테스트
- [ ] 성능 최적화 확인
- [ ] Lighthouse 접근성 점수 95점 이상
- [ ] 번들 크기 최적화

## 🆘 문제 해결

### 자주 발생하는 문제

#### 1. Foundation 토큰이 적용되지 않음

```tsx
// ❌ 잘못된 방법
import { Button } from 'lumir-design-system-01';
// Foundation CSS 누락

// ✅ 올바른 방법
import 'lumir-design-system-shared/foundation-tokens.css';
import { Button } from 'lumir-design-system-01';
```

#### 2. 타입 에러

```tsx
// ❌ 잘못된 props
<Button variant="invalid" color="wrong">버튼</Button>

// ✅ 올바른 props
<Button variant="filled" color="primary">버튼</Button>
```

#### 3. 스타일 충돌

```css
/* ❌ 전역 스타일이 컴포넌트 스타일을 덮어씀 */
button {
  background: red !important;
}

/* ✅ Foundation 토큰 사용 */
.custom-button {
  background-color: var(--foundation-foundation-color-primary-system01-1-rest);
}
```

## 📚 다음 단계

1. **[Foundation Tokens Guide](./02-foundation-tokens.md)** - 토큰 시스템 이해하기
2. **[Accessibility Guide](./03-accessibility.md)** - 접근성 가이드라인
3. **[Theming Guide](./04-theming.md)** - 테마 커스터마이징
4. **[Migration Guide](./05-migration.md)** - 기존 프로젝트 마이그레이션

## 🤝 지원 및 커뮤니티

- **GitHub Issues**: 버그 리포트 및 기능 요청
- **Discussions**: 사용법 질문 및 커뮤니티 토론
- **Discord**: 실시간 개발자 지원

---

**Lumir 디자인 시스템으로 일관되고 접근 가능한 사용자 인터페이스를 구축하세요!** 