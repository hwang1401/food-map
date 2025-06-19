---
title: 'Menu - System 02'
description: 'Friendly & Bright 테마의 메뉴 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['Menu', 'Navigation', 'Accordion', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# Menu - System 02

System-02의 Menu 컴포넌트는 Friendly & Bright 테마에 최적화된 메뉴 헤더입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 아코디언이나 GNB 메뉴의 헤더 역할을 하는 인터페이스를 제공합니다.

## 개요

Menu 컴포넌트는 메뉴 헤더를 위한 컴포넌트로, Surface, Frame, Text, Icon 프리미티브를 조합하여 확장/축소 가능한 메뉴 인터페이스를 제공합니다.

### 핵심 특징

- **3가지 크기**: md, lg, xlg
- **6가지 상태**: rest, hovered, pressed, focused, disabled, selected
- **아이콘 지원**: 좌우 아이콘과 확장 아이콘
- **확장 상태**: expanded 옵션으로 열림/닫힘 표시
- **더 둥근 모서리**: xl radius로 친근한 느낌
- **프리미티브 조합**: Surface + Frame + Text + Icon

## Props 인터페이스

```typescript
interface MenuProps {
  // 내용
  children: React.ReactNode;
  
  // 크기
  size?: 'md' | 'lg' | 'xlg';
  
  // 상태
  expanded?: boolean;
  disabled?: boolean;
  selected?: boolean;
  
  // 아이콘
  leftIcon?: string;
  rightIcon?: string;
  expandIcon?: string;
  
  // 이벤트
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onToggle?: (expanded: boolean) => void;
  
  // 스타일
  className?: string;
  style?: React.CSSProperties;
}
```

## 기본 사용법

### 기본 메뉴

```tsx
import { Menu } from 'lumir-design-system-02';

function BasicMenu() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Menu
      expanded={expanded}
      onToggle={setExpanded}
    >
      카테고리
    </Menu>
  );
}
```

### 아이콘이 있는 메뉴

```tsx
function IconMenu() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Menu
      leftIcon="LineIconsShoppingBagIcon"
      expanded={expanded}
      onToggle={setExpanded}
    >
      쇼핑 카테고리
    </Menu>
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **Rest**: `secondary-system02-1-rest` 배경
- **Hover**: `secondary-system02-1-hovered` 배경
- **Selected**: `primary-system02-1-rest` 배경

### 형태적 특징 (더 친근한 디자인)

- **Border Radius**: `xl` 토큰 (더 둥근 모서리)
- **크기별 높이**: md(40px), lg(48px), xlg(56px)
- **패딩**: 넓은 내부 여백으로 편안한 느낌

## Foundation 토큰 사용

```css
/* 배경 색상 */
background-color: var(--foundation-foundation-color-secondary-system02-1-rest);
background-color: var(--foundation-foundation-color-primary-system02-1-rest); /* 선택됨 */

/* Border Radius */
border-radius: var(--foundation-foundation-border-radius-xl);
```

## 관련 컴포넌트

- **OptionList**: 메뉴 하위 항목
- **Surface**: 메뉴 배경
- **Icon**: 메뉴 아이콘 