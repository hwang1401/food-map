---
title: 'OptionList - System 02'
description: 'Friendly & Bright 테마의 옵션 리스트 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['OptionList', 'List', 'Selection', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# OptionList - System 02

System-02의 OptionList 컴포넌트는 Friendly & Bright 테마에 최적화된 옵션 리스트 아이템입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, ComboBox나 드롭다운의 개별 옵션을 표시하는 인터페이스를 제공합니다.

## 개요

OptionList 컴포넌트는 선택 가능한 리스트 아이템을 위한 컴포넌트로, Surface, Frame, Text, Icon과 함께 Checkbox, Radio 컴포넌트를 조합하여 다양한 형태의 옵션 인터페이스를 제공합니다.

### 핵심 특징

- **6가지 타입**: menu-header, single-select, radio, multi-select, radio-component, checkbox-component
- **6가지 상태**: rest, hovered, pressed, focused, disabled, selected
- **컴포넌트 통합**: Checkbox, Radio 컴포넌트 완전 통합
- **더 둥근 모서리**: xl radius로 친근한 느낌
- **프리미티브 조합**: Surface + Frame + Text + Icon + Checkbox/Radio

## Props 인터페이스

```typescript
interface OptionListProps {
  // 내용
  children: React.ReactNode;
  
  // 타입
  type?: 'menu-header' | 'single-select' | 'radio' | 'multi-select' | 'radio-component' | 'checkbox-component';
  
  // 상태
  selected?: boolean;
  disabled?: boolean;
  
  // 값
  value?: string;
  
  // 이벤트
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onChange?: (selected: boolean, value?: string) => void;
  
  // 스타일
  className?: string;
  style?: React.CSSProperties;
}
```

## 기본 사용법

### 기본 옵션

```tsx
import { OptionList } from 'lumir-design-system-02';

function BasicOption() {
  return (
    <OptionList type="single-select">
      기본 옵션
    </OptionList>
  );
}
```

### 체크박스 옵션

```tsx
function CheckboxOption() {
  const [selected, setSelected] = useState(false);
  
  return (
    <OptionList
      type="checkbox-component"
      selected={selected}
      onChange={setSelected}
    >
      체크박스 옵션
    </OptionList>
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

- **ComboBox**: 드롭다운 옵션으로 사용
- **Checkbox**: 다중 선택 옵션
- **Radio**: 단일 선택 옵션 