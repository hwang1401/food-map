---
title: 'Field - System 02'
description: 'Friendly & Bright 테마의 필드 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['Field', 'Input', 'Form', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# Field - System 02

System-02의 Field 컴포넌트는 Friendly & Bright 테마에 최적화된 입력 필드입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 다양한 형태의 텍스트 입력 인터페이스를 제공합니다.

## 개요

Field 컴포넌트는 텍스트 입력을 위한 기본 컴포넌트로, Surface, Frame, Text, Icon과 함께 Label 컴포넌트를 조합하여 완전한 입력 필드 인터페이스를 제공합니다.

### 핵심 특징

- **3가지 변형**: outlined, transparent, filled
- **3가지 크기**: md, lg, xlg
- **아이콘 지원**: 좌우 아이콘 배치
- **라벨 통합**: Label 컴포넌트 완전 통합
- **상태 관리**: rest, focused, error, disabled
- **더 둥근 모서리**: xl radius로 친근한 느낌
- **프리미티브 조합**: Surface + Frame + Text + Icon + Label

## Props 인터페이스

```typescript
interface FieldProps {
  // 기본 설정
  variant?: 'outlined' | 'transparent' | 'filled';
  size?: 'md' | 'lg' | 'xlg';
  width?: 'fit-content' | 'fill-width' | string | number;
  
  // 내용
  value?: string;
  placeholder?: string;
  type?: string;
  
  // 라벨
  label?: string;
  labelPosition?: 'above' | 'before' | 'none';
  showLabel?: boolean;
  
  // 아이콘
  leftIcon?: string;
  rightIcon?: string;
  
  // 상태
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  
  // 메시지
  errorMessage?: string;
  helperText?: string;
  
  // 이벤트
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
```

## 기본 사용법

### 기본 필드

```tsx
import { Field } from 'lumir-design-system-02';

function BasicField() {
  const [value, setValue] = useState('');
  
  return (
    <Field
      label="이름"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="이름을 입력해주세요"
    />
  );
}
```

### 아이콘이 있는 필드

```tsx
function IconField() {
  const [email, setEmail] = useState('');
  
  return (
    <Field
      label="이메일"
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="이메일을 입력해주세요"
      leftIcon="LineIconsMailIcon"
    />
  );
}
```

## 변형 스타일

### Outlined (기본)

```tsx
function OutlinedFields() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Field
        variant="outlined"
        label="기본 필드"
        placeholder="텍스트 입력"
      />
      <Field
        variant="outlined"
        label="검색"
        placeholder="검색어 입력"
        leftIcon="LineIconsSearchIcon"
      />
    </div>
  );
}
```

### Filled

```tsx
function FilledFields() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Field
        variant="filled"
        label="사용자명"
        placeholder="사용자명 입력"
        leftIcon="LineIconsUserIcon"
      />
      <Field
        variant="filled"
        label="비밀번호"
        type="password"
        placeholder="비밀번호 입력"
        leftIcon="LineIconsLockIcon"
      />
    </div>
  );
}
```

### Transparent

```tsx
function TransparentFields() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Field
        variant="transparent"
        label="투명 필드"
        placeholder="배경 없는 입력"
      />
      <Field
        variant="transparent"
        label="검색"
        placeholder="검색..."
        leftIcon="LineIconsSearchIcon"
      />
    </div>
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **Outlined**: `secondary-system02-2-rest` 테두리
- **Filled**: `secondary-system02-1-rest` 배경
- **Focused**: `primary-system02-1-rest` 테두리
- **Error**: `error-system02-1-rest` 테두리

### 형태적 특징 (더 친근한 디자인)

- **Border Radius**: `xl` 토큰 (더 둥근 모서리)
- **크기별 높이**: md(40px), lg(48px), xlg(56px)
- **패딩**: 넓은 내부 여백으로 편안한 느낌
- **아이콘 간격**: 적절한 아이콘-텍스트 간격

## Foundation 토큰 사용

```css
/* 테두리 색상 */
border-color: var(--foundation-foundation-color-secondary-system02-2-rest);
border-color: var(--foundation-foundation-color-primary-system02-1-rest); /* 포커스 */

/* 배경 색상 */
background-color: var(--foundation-foundation-color-secondary-system02-1-rest);

/* Border Radius */
border-radius: var(--foundation-foundation-border-radius-xl);
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확한 라벨과 placeholder 제공
- 적절한 input type 사용
- 에러 메시지로 사용자 가이드

✅ **커머스 환경 최적화**
```tsx
// 검색 필드
<Field
  variant="outlined"
  placeholder="상품, 브랜드 검색"
  leftIcon="LineIconsSearchIcon"
/>

// 로그인 필드
<Field
  label="이메일"
  type="email"
  leftIcon="LineIconsMailIcon"
  required
/>
```

### 주의사항

❌ **DON'T**
- 너무 긴 placeholder 텍스트
- 불명확한 라벨
- 접근성 속성 누락

## 관련 컴포넌트

- **Label**: 필드 라벨
- **ComboBox**: 선택 가능한 입력
- **Surface**: 필드 배경
- **Icon**: 필드 아이콘

## 참고 자료

- [Input Design Best Practices](https://uxplanet.org/designing-perfect-text-field-clarity-accessibility-and-user-experience-9c5f0e8f92db)
- [Form Field Guidelines](https://uxdesign.cc/design-better-forms-96fadca0f49c) 