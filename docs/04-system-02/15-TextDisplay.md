---
title: 'TextDisplay - System 02'
description: 'Friendly & Bright 테마의 텍스트 디스플레이 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['TextDisplay', 'Text', 'Information', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# TextDisplay - System 02

System-02의 TextDisplay 컴포넌트는 Friendly & Bright 테마에 최적화된 텍스트 표시 컴포넌트입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 구조화된 정보 표시를 위한 텍스트 인터페이스를 제공합니다.

## 개요

TextDisplay 컴포넌트는 정보를 구조화하여 표시하는 컴포넌트로, Text와 Icon 프리미티브를 조합하여 라벨, 주요 텍스트, 설명, 캡션을 포함한 완전한 텍스트 표시 인터페이스를 제공합니다.

### 핵심 특징

- **5가지 크기**: xsm, sm, md, lg, xlg
- **2가지 정렬**: left, center
- **4가지 아이콘 위치**: left, right, top, bottom
- **4가지 텍스트 요소**: label, primary, description, caption
- **유연한 구성**: 필요한 텍스트 요소만 선택적 사용
- **프리미티브 조합**: Text + Icon

## Props 인터페이스

```typescript
interface TextDisplayProps {
  // 크기 및 정렬
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  align?: 'left' | 'center';
  
  // 아이콘
  icon?: string;
  iconPosition?: 'left' | 'right' | 'top' | 'bottom';
  
  // 텍스트 내용
  label?: string;
  primaryText?: string;
  description?: string;
  caption?: string;
  
  // 스타일
  className?: string;
  style?: React.CSSProperties;
}
```

## 기본 사용법

### 기본 텍스트 표시

```tsx
import { TextDisplay } from 'lumir-design-system-02';

function BasicTextDisplay() {
  return (
    <TextDisplay
      label="상품명"
      primaryText="Apple iPhone 15 Pro"
      description="최신 프로 모델"
      caption="128GB / 자연 티타늄"
    />
  );
}
```

### 아이콘이 있는 텍스트

```tsx
function IconTextDisplay() {
  return (
    <TextDisplay
      icon="LineIconsShoppingBagIcon"
      iconPosition="left"
      primaryText="주문 완료"
      description="상품이 성공적으로 주문되었습니다"
      size="lg"
    />
  );
}
```

### 가격 표시

```tsx
function PriceDisplay() {
  return (
    <TextDisplay
      label="할인가"
      primaryText="₩1,299,000"
      description="정가 ₩1,499,000"
      caption="13% 할인"
      align="center"
      size="md"
    />
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **Label**: `secondary-system02-2-rest`
- **Primary**: `secondary-system02-3-rest` (강조)
- **Description**: `secondary-system02-2-rest`
- **Caption**: `secondary-system02-1-rest` (보조)

### 형태적 특징 (더 친근한 디자인)

- **간격**: 텍스트 요소 간 적절한 여백
- **아이콘 간격**: 아이콘과 텍스트 간 자연스러운 간격
- **라인 높이**: 1.4배로 여유로운 높이

## Foundation 토큰 사용

```css
/* 텍스트 색상 */
color: var(--foundation-foundation-color-secondary-system02-3-rest); /* Primary */
color: var(--foundation-foundation-color-secondary-system02-2-rest); /* Label, Description */
color: var(--foundation-foundation-color-secondary-system02-1-rest); /* Caption */

/* 폰트 크기 */
font-size: var(--foundation-foundation-font-fontsize-120); /* xsm */
font-size: var(--foundation-foundation-font-fontsize-140); /* sm */
font-size: var(--foundation-foundation-font-fontsize-160); /* md */
font-size: var(--foundation-foundation-font-fontsize-180); /* lg */
font-size: var(--foundation-foundation-font-fontsize-200); /* xlg */
```

## 관련 컴포넌트

- **Card**: 카드 내 텍스트 표시
- **Text**: 기본 텍스트 프리미티브
- **Icon**: 텍스트와 함께 사용되는 아이콘 