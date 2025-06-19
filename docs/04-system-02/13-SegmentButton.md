---
title: 'SegmentButton - System 02'
description: 'Friendly & Bright 테마의 세그먼트 버튼 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['SegmentButton', 'Toggle', 'Selection', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# SegmentButton - System 02

System-02의 SegmentButton 컴포넌트는 Friendly & Bright 테마에 최적화된 세그먼트 선택 버튼입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 토글 버튼 그룹을 위한 인터페이스를 제공합니다.

## 개요

SegmentButton 컴포넌트는 여러 옵션 중 하나 또는 여러 개를 선택할 수 있는 세그먼트 버튼 컴포넌트로, Surface, Frame, Text, Icon 프리미티브를 조합하여 토글 가능한 버튼 그룹 인터페이스를 제공합니다.

### 핵심 특징

- **2가지 모드**: single (단일 선택), multi (다중 선택)
- **3가지 크기**: sm, md, lg
- **2가지 스타일**: filled, outlined
- **아이콘 지원**: 텍스트와 아이콘 조합
- **더 둥근 모서리**: xl radius로 친근한 느낌
- **프리미티브 조합**: Surface + Frame + Text + Icon

## Props 인터페이스

```typescript
interface SegmentButtonProps {
  // 옵션
  options: SegmentOption[];
  
  // 선택 모드
  mode?: 'single' | 'multi';
  
  // 선택된 값
  value?: string | string[];
  
  // 스타일
  variant?: 'filled' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  
  // 이벤트
  onChange?: (value: string | string[]) => void;
  
  // 스타일
  className?: string;
  style?: React.CSSProperties;
}
```

## 기본 사용법

### 단일 선택

```tsx
import { SegmentButton } from 'lumir-design-system-02';

function SingleSelect() {
  const [value, setValue] = useState('list');
  
  const options = [
    { value: 'grid', label: '그리드', icon: 'LineIconsGridIcon' },
    { value: 'list', label: '리스트', icon: 'LineIconsListIcon' }
  ];
  
  return (
    <SegmentButton
      mode="single"
      options={options}
      value={value}
      onChange={setValue}
    />
  );
}
```

### 다중 선택

```tsx
function MultiSelect() {
  const [values, setValues] = useState(['bold']);
  
  const options = [
    { value: 'bold', label: 'B', icon: 'LineIconsBoldIcon' },
    { value: 'italic', label: 'I', icon: 'LineIconsItalicIcon' },
    { value: 'underline', label: 'U', icon: 'LineIconsUnderlineIcon' }
  ];
  
  return (
    <SegmentButton
      mode="multi"
      options={options}
      value={values}
      onChange={setValues}
    />
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **선택 안됨**: `secondary-system02-1-rest` 배경
- **선택됨**: `primary-system02-1-rest` 배경
- **Outlined**: `secondary-system02-1-rest` 테두리

### 형태적 특징 (더 친근한 디자인)

- **Border Radius**: `xl` 토큰 (더 둥근 모서리)
- **크기별 높이**: sm(32px), md(40px), lg(48px)
- **연결된 형태**: 인접한 버튼들이 자연스럽게 연결

## Foundation 토큰 사용

```css
/* 선택된 상태 */
background-color: var(--foundation-foundation-color-primary-system02-1-rest);

/* 선택 안된 상태 */
background-color: var(--foundation-foundation-color-secondary-system02-1-rest);

/* Border Radius */
border-radius: var(--foundation-foundation-border-radius-xl);
```

## 관련 컴포넌트

- **Button**: 개별 액션 버튼
- **Tab**: 탭 내비게이션
- **Chip**: 선택 가능한 태그 