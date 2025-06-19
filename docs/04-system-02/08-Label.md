---
title: 'Label - System 02'
description: 'Friendly & Bright 테마의 라벨 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['Label', 'Text', 'Form', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# Label - System 02

System-02의 Label 컴포넌트는 Friendly & Bright 테마에 최적화된 라벨입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 폼 요소나 콘텐츠의 제목을 표시하는 텍스트 라벨을 제공합니다.

## 개요

Label 컴포넌트는 폼 요소와 연결되는 라벨 텍스트를 제공하는 컴포넌트로, Text 프리미티브를 기반으로 하여 접근성과 스타일링을 모두 지원하는 라벨 인터페이스를 제공합니다.

### 핵심 특징

- **3가지 크기**: sm, md, lg
- **2가지 위치**: above, before
- **필수 표시**: asterisk 옵션으로 * 표시
- **접근성 지원**: htmlFor 속성으로 폼 요소 연결
- **Text 기반**: Text 프리미티브의 모든 스타일 옵션 지원
- **프리미티브 조합**: Text

## Props 인터페이스

```typescript
interface LabelProps {
  // 내용
  children: React.ReactNode;
  
  // 크기
  size?: 'sm' | 'md' | 'lg';
  
  // 접근성
  htmlFor?: string;
  
  // 필수 표시
  required?: boolean;
  asterisk?: boolean;
  
  // 스타일
  className?: string;
  style?: React.CSSProperties;
}
```

## 기본 사용법

### 기본 라벨

```tsx
import { Label } from 'lumir-design-system-02';

function BasicLabel() {
  return (
    <div>
      <Label htmlFor="username">사용자명</Label>
      <input id="username" type="text" />
    </div>
  );
}
```

### 필수 입력 라벨

```tsx
function RequiredLabel() {
  return (
    <div>
      <Label htmlFor="email" required>이메일</Label>
      <input id="email" type="email" required />
    </div>
  );
}
```

### 크기 변형

```tsx
function LabelSizes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Label size="sm">Small 라벨</Label>
      <Label size="md">Medium 라벨</Label>
      <Label size="lg">Large 라벨</Label>
    </div>
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **기본 텍스트**: `secondary-system02-2-rest`
- **필수 표시**: `error-system02-1-rest` (빨간색 *)

### 형태적 특징 (더 친근한 디자인)

- **폰트 크기**: sm(12px), md(14px), lg(16px)
- **폰트 무게**: medium (500)
- **라인 높이**: 1.4배로 여유로운 높이

## Foundation 토큰 사용

```css
/* 텍스트 색상 */
color: var(--foundation-foundation-color-secondary-system02-2-rest);

/* 필수 표시 색상 */
color: var(--foundation-foundation-color-error-system02-1-rest);

/* 폰트 크기 */
font-size: var(--foundation-foundation-font-fontsize-120); /* sm */
font-size: var(--foundation-foundation-font-fontsize-140); /* md */
font-size: var(--foundation-foundation-font-fontsize-160); /* lg */
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확하고 간결한 라벨 텍스트
- htmlFor 속성으로 폼 요소 연결
- 필수 입력 시 required 속성 사용

✅ **커머스 환경 최적화**
```tsx
// 회원가입 폼
<Label htmlFor="password" required>비밀번호</Label>

// 상품 검색
<Label htmlFor="search">상품 검색</Label>

// 배송지 입력
<Label htmlFor="address" required>배송 주소</Label>
```

### 주의사항

❌ **DON'T**
- 너무 긴 라벨 텍스트
- htmlFor 속성 누락
- 불명확한 라벨 내용

## 관련 컴포넌트

- **Field**: 입력 필드와 함께 사용
- **Checkbox**: 체크박스 라벨
- **Radio**: 라디오 버튼 라벨
- **Text**: 기본 텍스트 프리미티브

## 참고 자료

- [Label Best Practices](https://www.w3.org/WAI/tutorials/forms/labels/)
- [Form Label Guidelines](https://uxdesign.cc/design-better-forms-96fadca0f49c) 