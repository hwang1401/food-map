---
title: 'Field - System 01'
description: 'Professional & Clean 테마의 텍스트 입력 필드 컴포넌트'
date: '2024-12-28'
category: 'System-01 Components'
tags: ['Field', 'Input', 'Form', 'System-01', 'Professional']
version: '1.0.0'
status: 'stable'
---

# Field - System 01

System-01의 Field 컴포넌트는 Professional & Clean 테마에 최적화된 텍스트 입력 필드입니다. GitHub, 백오피스 환경에서 사용되는 깔끔하고 효율적인 디자인을 제공합니다.

## 개요

Field 컴포넌트는 사용자 입력을 받기 위한 텍스트 필드로, Label, Icon 등의 프리미티브 컴포넌트와 결합하여 완전한 입력 경험을 제공합니다.

### 핵심 특징

- **3가지 스타일**: outlined, transparent, filled
- **유연한 라벨 위치**: above, before, none
- **다양한 크기**: md(32px), lg(36px), xlg(40px)
- **동적 너비 조절**: fit-content, fill-width, 커스텀 값
- **상태 관리**: rest, hover, focus, disabled, error
- **접근성**: Label과 input의 적절한 연결
- **아이콘 지원**: 좌우 아이콘 배치 가능

## Props 인터페이스

```typescript
interface FieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  // 스타일 설정
  variant?: 'outlined' | 'transparent' | 'filled';
  labelPosition?: 'above' | 'before' | 'none';
  size?: 'md' | 'lg' | 'xlg';
  fieldWidth?: 'fit-content' | 'fill-width' | ResponsiveOrSingle<string | number>;
  minWidth?: string | number;
  truncateOnFit?: boolean;
  
  // 라벨 및 메시지
  label?: string;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  
  // 상태
  disabled?: boolean;
  error?: boolean;
  
  // 입력 설정
  placeholder?: string;
  value?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  
  // 아이콘
  leftIcon?: IconName;
  rightIcon?: IconName;
  
  // 이벤트 핸들러
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
```

## 기본 사용법

### 기본 필드

```tsx
import { Field } from 'lumir-design-system-01';

function BasicField() {
  return (
    <Field
      label="이름"
      placeholder="이름을 입력하세요"
      helperText="실명을 입력해주세요"
    />
  );
}
```

### 필수 입력 필드

```tsx
function RequiredField() {
  return (
    <Field
      label="이메일"
      placeholder="example@email.com"
      type="email"
      required
      helperText="로그인에 사용될 이메일 주소입니다"
    />
  );
}
```

### 에러 상태

```tsx
function ErrorField() {
  const [email, setEmail] = useState('invalid-email');
  const [error, setError] = useState(true);
  
  return (
    <Field
      label="이메일"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      error={error}
      errorMessage="유효한 이메일 형식이 아닙니다"
      type="email"
    />
  );
}
```

## 스타일 변형

### Outlined (기본)

가장 일반적인 스타일로, 명확한 테두리를 제공합니다.

```tsx
function OutlinedField() {
  return (
    <Field
      variant="outlined"
      label="사용자명"
      placeholder="사용자명을 입력하세요"
    />
  );
}
```

### Transparent

배경이 투명한 미니멀한 스타일입니다.

```tsx
function TransparentField() {
  return (
    <Field
      variant="transparent"
      label="검색"
      placeholder="검색어를 입력하세요"
      leftIcon="search"
    />
  );
}
```

### Filled

배경색이 있는 부드러운 스타일입니다.

```tsx
function FilledField() {
  return (
    <Field
      variant="filled"
      label="메모"
      placeholder="메모를 입력하세요"
    />
  );
}
```

## 크기 변형

### 중간 크기 (기본)

```tsx
function MediumField() {
  return (
    <Field
      size="md"
      label="이름"
      placeholder="이름 입력"
    />
  );
}
```

### 큰 크기

```tsx
function LargeField() {
  return (
    <Field
      size="lg"
      label="제목"
      placeholder="제목을 입력하세요"
    />
  );
}
```

### 매우 큰 크기

```tsx
function ExtraLargeField() {
  return (
    <Field
      size="xlg"
      label="주요 입력"
      placeholder="중요한 정보를 입력하세요"
    />
  );
}
```

## 라벨 위치

### 위쪽 라벨 (기본)

```tsx
function AboveLabel() {
  return (
    <Field
      labelPosition="above"
      label="이름"
      placeholder="이름 입력"
    />
  );
}
```

### 앞쪽 라벨

```tsx
function BeforeLabel() {
  return (
    <Field
      labelPosition="before"
      label="이메일"
      placeholder="example@email.com"
    />
  );
}
```

### 라벨 없음

```tsx
function NoLabel() {
  return (
    <Field
      labelPosition="none"
      placeholder="검색어 입력"
      leftIcon="search"
    />
  );
}
```

## 너비 설정

### 내용에 맞춤

```tsx
function FitContentField() {
  return (
    <Field
      fieldWidth="fit-content"
      placeholder="짧은 입력"
      minWidth="120px"
    />
  );
}
```

### 전체 너비

```tsx
function FullWidthField() {
  return (
    <Field
      fieldWidth="fill-width"
      label="긴 텍스트 입력"
      placeholder="전체 너비를 사용하는 입력 필드"
    />
  );
}
```

### 커스텀 너비

```tsx
function CustomWidthField() {
  return (
    <Field
      fieldWidth="300px"
      label="고정 너비"
      placeholder="300px 너비 필드"
    />
  );
}
```

## 아이콘 사용

### 검색 필드

```tsx
function SearchField() {
  return (
    <Field
      variant="transparent"
      placeholder="검색어를 입력하세요"
      leftIcon="search"
      rightIcon="close"
    />
  );
}
```

### 패스워드 필드

```tsx
function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <Field
      type={showPassword ? 'text' : 'password'}
      label="비밀번호"
      placeholder="비밀번호를 입력하세요"
      rightIcon={showPassword ? 'eye-off' : 'eye'}
      onClick={() => setShowPassword(!showPassword)}
    />
  );
}
```

## 고급 사용 예제

### 실시간 유효성 검사

```tsx
function ValidatedField() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      setError(false);
      setErrorMessage('');
    } else if (!emailRegex.test(value)) {
      setError(true);
      setErrorMessage('유효한 이메일 형식이 아닙니다');
    } else {
      setError(false);
      setErrorMessage('');
    }
  };
  
  return (
    <Field
      label="이메일"
      type="email"
      value={email}
      onChange={(e) => {
        setEmail(e.target.value);
        validateEmail(e.target.value);
      }}
      error={error}
      errorMessage={errorMessage}
      required
    />
  );
}
```

### 폼 그룹

```tsx
function FormGroup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Field
        label="이름"
        placeholder="이름을 입력하세요"
        required
      />
      <Field
        label="이메일"
        type="email"
        placeholder="example@email.com"
        required
      />
      <Field
        label="전화번호"
        type="tel"
        placeholder="010-0000-0000"
        leftIcon="phone"
      />
      <Field
        label="웹사이트"
        type="url"
        placeholder="https://example.com"
        leftIcon="globe"
      />
    </div>
  );
}
```

### 인라인 라벨 폼

```tsx
function InlineForm() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Field
        labelPosition="before"
        label="이름"
        placeholder="이름 입력"
        fieldWidth="200px"
      />
      <Field
        labelPosition="before"
        label="나이"
        type="number"
        placeholder="나이"
        fieldWidth="100px"
      />
      <Field
        labelPosition="before"
        label="이메일"
        type="email"
        placeholder="이메일 주소"
        fieldWidth="250px"
      />
    </div>
  );
}
```

## System-01 디자인 특성

### 색상 시스템

- **Primary**: `secondary-system01-1-*` 토큰 사용
- **Text**: `secondary-system01-2-*` 토큰 사용
- **Helper Text**: `secondary-system01-3-*` 토큰 사용
- **Error**: `error-1-rest` 토큰 사용

### 형태적 특징

- **Border Radius**: `sm` 토큰 (작은 모서리)
- **간격**: 컴팩트한 `md` 패딩
- **높이**: 명확한 32px, 36px, 40px 구분
- **Typography**: 14px body-2 텍스트

### 상호작용 패턴

- **Hover**: 미묘한 색상 변화
- **Focus**: 명확한 포커스 링 (2px)
- **Error**: 빨간색 테두리와 메시지
- **Disabled**: 회색조 처리

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

- **Tab**: 필드로 포커스 이동
- **Shift+Tab**: 이전 요소로 포커스 이동
- **모든 텍스트 입력**: 일반적인 타이핑 동작

### 스크린 리더 지원

```tsx
// 라벨과 입력 필드 자동 연결
<Field
  label="이메일 주소"
  placeholder="example@email.com"
  required
  helperText="로그인에 사용됩니다"
/>

// aria-describedby 자동 설정으로 헬퍼 텍스트 연결
// aria-required="true" 자동 설정
// aria-invalid="true" 에러 시 자동 설정
```

### 색상 대비

- **일반 텍스트**: 4.5:1 이상
- **에러 텍스트**: 4.5:1 이상
- **플레이스홀더**: 3:1 이상
- **포커스 인디케이터**: 3:1 이상

### 터치 접근성

- **최소 터치 영역**: 44×44px (size="xlg")
- **적절한 간격**: 인접 요소와 8px 이상 간격

## Foundation 토큰 사용

### 색상 토큰

```css
/* 텍스트 색상 */
color: var(--foundation-foundation-color-secondary-system01-2-rest);

/* 배경 색상 (filled variant) */
background-color: var(--foundation-foundation-color-secondary-system01-1-rest);

/* 테두리 색상 */
border-color: var(--foundation-foundation-color-secondary-system01-1-rest);

/* 에러 색상 */
border-color: var(--foundation-foundation-color-error-1-rest);
```

### 크기 토큰

```css
/* 높이 */
height: var(--foundation-foundation-sizing-height-lg); /* 32px */
height: var(--foundation-foundation-sizing-height-xl); /* 36px */
height: var(--foundation-foundation-sizing-height-xxl); /* 40px */

/* 간격 */
gap: var(--foundation-foundation-spacing-sm);
padding: var(--foundation-foundation-spacing-md);
```

### 테두리 토큰

```css
/* 모서리 */
border-radius: var(--foundation-foundation-border-radius-sm);

/* 테두리 두께 */
border-width: var(--foundation-foundation-border-width-thin);
```

## 성능 최적화

### 메모이제이션

```tsx
import { memo } from 'react';

const OptimizedField = memo(Field);

// 불필요한 리렌더링 방지
function FormComponent() {
  const [name, setName] = useState('');
  
  return (
    <OptimizedField
      label="이름"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

### 디바운싱

```tsx
import { useMemo } from 'react';
import { debounce } from 'lodash';

function SearchField() {
  const [query, setQuery] = useState('');
  
  const debouncedSearch = useMemo(
    () => debounce((value: string) => {
      // API 호출 등 무거운 작업
      console.log('Searching for:', value);
    }, 300),
    []
  );
  
  return (
    <Field
      placeholder="검색어 입력"
      leftIcon="search"
      onChange={(e) => {
        setQuery(e.target.value);
        debouncedSearch(e.target.value);
      }}
    />
  );
}
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확한 라벨 제공
- 적절한 플레이스홀더 사용
- 에러 메시지는 구체적으로 작성
- 필수 필드에는 required 속성 사용
- 관련된 필드들은 논리적으로 그룹화

✅ **적절한 사용 예시**
```tsx
// 명확한 라벨과 도움말
<Field
  label="비밀번호"
  type="password"
  placeholder="8자 이상 입력"
  helperText="영문, 숫자, 특수문자 조합"
  required
/>
```

### 주의사항

❌ **DON'T**
- 라벨 없이 플레이스홀더만 사용
- 모호한 에러 메시지
- 너무 많은 필수 필드
- 부적절한 input type 사용

❌ **피해야 할 예시**
```tsx
// 라벨 없이 플레이스홀더만 사용
<Field placeholder="입력하세요" /> // 접근성 문제

// 모호한 에러 메시지
<Field error errorMessage="오류" /> // 구체적이지 않음
```

## 관련 컴포넌트

- **Label**: 필드 라벨 표시
- **Icon**: 필드 내 아이콘 표시
- **Surface**: 필드 배경 및 테두리
- **Text**: 헬퍼 텍스트 및 에러 메시지
- **Frame**: 레이아웃 구성

## 참고 자료

- [WCAG 2.1 폼 가이드라인](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)
- [HTML Input 요소 명세](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
- [접근 가능한 폼 디자인](https://webaim.org/techniques/forms/) 