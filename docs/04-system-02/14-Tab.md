---
title: 'Tab - System 02'
description: 'Friendly & Bright 테마의 탭 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['Tab', 'Navigation', 'Content', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# Tab - System 02

System-02의 Tab 컴포넌트는 Friendly & Bright 테마에 최적화된 탭 내비게이션입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 콘텐츠 영역 전환을 위한 탭 인터페이스를 제공합니다.

## 개요

Tab 컴포넌트는 여러 콘텐츠 패널 간의 전환을 위한 탭 내비게이션 컴포넌트로, Surface, Frame, Text, Icon 프리미티브를 조합하여 탭 인터페이스를 제공합니다.

### 핵심 특징

- **2가지 크기**: lg, md
- **아이콘 지원**: 탭별 아이콘 표시
- **비활성화**: 개별 탭 비활성화 가능
- **테두리 옵션**: showBorder로 하단 테두리 표시
- **더 둥근 모서리**: xl radius로 친근한 느낌
- **프리미티브 조합**: Surface + Frame + Text + Icon

## Props 인터페이스

```typescript
interface TabProps {
  // 탭 항목들
  tabs: TabItem[];
  
  // 선택된 탭
  selectedTab?: string;
  
  // 크기
  size?: 'lg' | 'md';
  
  // 스타일
  showBorder?: boolean;
  
  // 이벤트
  onTabChange?: (tabValue: string) => void;
  
  // 스타일
  className?: string;
  style?: React.CSSProperties;
}

interface TabItem {
  value: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}
```

## 기본 사용법

### 기본 탭

```tsx
import { Tab } from 'lumir-design-system-02';

function BasicTab() {
  const [selectedTab, setSelectedTab] = useState('products');
  
  const tabs = [
    { value: 'products', label: '상품' },
    { value: 'reviews', label: '리뷰' },
    { value: 'qna', label: 'Q&A' }
  ];
  
  return (
    <Tab
      tabs={tabs}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
    />
  );
}
```

### 아이콘이 있는 탭

```tsx
function IconTab() {
  const [selectedTab, setSelectedTab] = useState('overview');
  
  const tabs = [
    { value: 'overview', label: '개요', icon: 'LineIconsHomeIcon' },
    { value: 'products', label: '상품', icon: 'LineIconsShoppingBagIcon' },
    { value: 'orders', label: '주문', icon: 'LineIconsReceiptIcon' },
    { value: 'analytics', label: '분석', icon: 'LineIconsChartIcon' }
  ];
  
  return (
    <Tab
      tabs={tabs}
      selectedTab={selectedTab}
      onTabChange={setSelectedTab}
      size="lg"
      showBorder
    />
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **선택 안된 탭**: `secondary-system02-2-rest` 텍스트
- **선택된 탭**: `primary-system02-1-rest` 텍스트 및 언더라인
- **호버**: `primary-system02-1-hovered` 배경

### 형태적 특징 (더 친근한 디자인)

- **Border Radius**: `xl` 토큰 (더 둥근 모서리)
- **크기별 높이**: md(40px), lg(48px)
- **언더라인**: 선택된 탭에 부드러운 언더라인

## Foundation 토큰 사용

```css
/* 선택된 탭 */
color: var(--foundation-foundation-color-primary-system02-1-rest);
border-bottom-color: var(--foundation-foundation-color-primary-system02-1-rest);

/* 선택 안된 탭 */
color: var(--foundation-foundation-color-secondary-system02-2-rest);

/* Border Radius */
border-radius: var(--foundation-foundation-border-radius-xl);
```

## 관련 컴포넌트

- **SegmentButton**: 세그먼트 선택
- **Menu**: 메뉴 내비게이션
- **Button**: 액션 버튼 