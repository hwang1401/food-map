---
title: 'SegmentButton - System 01'
description: 'Professional & Clean 테마의 세그먼트 버튼 컴포넌트'
date: '2024-12-28'
category: 'System-01 Components'
tags: ['SegmentButton', 'Selection', 'Toggle', 'Button', 'System-01', 'Professional']
version: '1.0.0'
status: 'stable'
---

# SegmentButton - System 01

System-01의 SegmentButton 컴포넌트는 Professional & Clean 테마에 최적화된 세그먼트 선택 버튼입니다. GitHub, 백오피스 환경에서 사용되는 토글 버튼 그룹으로, 관련된 옵션들을 시각적으로 그룹화하여 명확한 선택 인터페이스를 제공합니다.

## 개요

SegmentButton 컴포넌트는 여러 관련 옵션을 하나의 그룹으로 묶어 단일 또는 다중 선택을 지원하는 컴파운드 컴포넌트입니다. Surface, Frame, Button 프리미티브를 조합하여 iOS 스타일의 세그먼트 컨트롤과 유사한 경험을 제공합니다.

### 핵심 특징

- **2가지 모드**: single(단일 선택), multi(다중 선택)
- **3가지 크기**: sm, md, lg
- **2가지 스타일**: primary, secondary
- **컴포넌트 구성**: SegmentButton + SegmentButton.Item
- **상태 관리**: controlled/uncontrolled 지원
- **프리미티브 조합**: Surface + Frame + Button

## Props 인터페이스

```typescript
interface SegmentButtonProps {
  // 기본 설정
  mode: 'single' | 'multi';
  selectedValues?: string[];
  defaultSelectedValues?: string[];
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  
  // 이벤트 핸들러
  onChange?: (values: string[]) => void;
  
  // 컨텐츠
  children: React.ReactNode;
}

interface SegmentButtonItemProps {
  value: string;
  disabled?: boolean;
  children: React.ReactNode;
}
```

## 기본 사용법

### 단일 선택 모드

```tsx
import { SegmentButton } from 'lumir-design-system-01';

function SingleSelection() {
  const [selected, setSelected] = useState(['view']);
  
  return (
    <SegmentButton
      mode="single"
      selectedValues={selected}
      onChange={setSelected}
    >
      <SegmentButton.Item value="edit">편집</SegmentButton.Item>
      <SegmentButton.Item value="view">보기</SegmentButton.Item>
      <SegmentButton.Item value="preview">미리보기</SegmentButton.Item>
    </SegmentButton>
  );
}
```

### 다중 선택 모드

```tsx
function MultiSelection() {
  const [selected, setSelected] = useState(['bold']);
  
  return (
    <SegmentButton
      mode="multi"
      selectedValues={selected}
      onChange={setSelected}
    >
      <SegmentButton.Item value="bold">B</SegmentButton.Item>
      <SegmentButton.Item value="italic">I</SegmentButton.Item>
      <SegmentButton.Item value="underline">U</SegmentButton.Item>
    </SegmentButton>
  );
}
```

### Uncontrolled 모드

```tsx
function UncontrolledSegment() {
  return (
    <SegmentButton
      mode="single"
      defaultSelectedValues={['option2']}
      onChange={(values) => console.log('선택됨:', values)}
    >
      <SegmentButton.Item value="option1">옵션 1</SegmentButton.Item>
      <SegmentButton.Item value="option2">옵션 2</SegmentButton.Item>
      <SegmentButton.Item value="option3">옵션 3</SegmentButton.Item>
    </SegmentButton>
  );
}
```

## 크기 변형

### 작은 크기 (sm)

```tsx
function SmallSegment() {
  const [selected, setSelected] = useState(['small']);
  
  return (
    <SegmentButton
      mode="single"
      size="sm"
      selectedValues={selected}
      onChange={setSelected}
    >
      <SegmentButton.Item value="small">작음</SegmentButton.Item>
      <SegmentButton.Item value="medium">보통</SegmentButton.Item>
      <SegmentButton.Item value="large">큼</SegmentButton.Item>
    </SegmentButton>
  );
}
```

### 중간 크기 (md, 기본)

```tsx
function MediumSegment() {
  const [selected, setSelected] = useState(['medium']);
  
  return (
    <SegmentButton
      mode="single"
      size="md"
      selectedValues={selected}
      onChange={setSelected}
    >
      <SegmentButton.Item value="small">작음</SegmentButton.Item>
      <SegmentButton.Item value="medium">보통</SegmentButton.Item>
      <SegmentButton.Item value="large">큼</SegmentButton.Item>
    </SegmentButton>
  );
}
```

### 큰 크기 (lg)

```tsx
function LargeSegment() {
  const [selected, setSelected] = useState(['large']);
  
  return (
    <SegmentButton
      mode="single"
      size="lg"
      selectedValues={selected}
      onChange={setSelected}
    >
      <SegmentButton.Item value="small">작음</SegmentButton.Item>
      <SegmentButton.Item value="medium">보통</SegmentButton.Item>
      <SegmentButton.Item value="large">큼</SegmentButton.Item>
    </SegmentButton>
  );
}
```

## 스타일 변형

### Primary 스타일 (기본)

```tsx
function PrimarySegment() {
  const [selected, setSelected] = useState(['option1']);
  
  return (
    <SegmentButton
      mode="single"
      variant="primary"
      selectedValues={selected}
      onChange={setSelected}
    >
      <SegmentButton.Item value="option1">Primary 1</SegmentButton.Item>
      <SegmentButton.Item value="option2">Primary 2</SegmentButton.Item>
    </SegmentButton>
  );
}
```

### Secondary 스타일

```tsx
function SecondarySegment() {
  const [selected, setSelected] = useState(['option1']);
  
  return (
    <SegmentButton
      mode="single"
      variant="secondary"
      selectedValues={selected}
      onChange={setSelected}
    >
      <SegmentButton.Item value="option1">Secondary 1</SegmentButton.Item>
      <SegmentButton.Item value="option2">Secondary 2</SegmentButton.Item>
    </SegmentButton>
  );
}
```

## 고급 사용 예제

### 텍스트 포맷팅 도구

```tsx
function TextFormattingToolbar() {
  const [formatting, setFormatting] = useState<string[]>([]);
  const [alignment, setAlignment] = useState(['left']);
  
  return (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <SegmentButton
        mode="multi"
        size="sm"
        selectedValues={formatting}
        onChange={setFormatting}
      >
        <SegmentButton.Item value="bold">B</SegmentButton.Item>
        <SegmentButton.Item value="italic">I</SegmentButton.Item>
        <SegmentButton.Item value="underline">U</SegmentButton.Item>
        <SegmentButton.Item value="strikethrough">S</SegmentButton.Item>
      </SegmentButton>
      
      <SegmentButton
        mode="single"
        size="sm"
        selectedValues={alignment}
        onChange={setAlignment}
      >
        <SegmentButton.Item value="left">←</SegmentButton.Item>
        <SegmentButton.Item value="center">↔</SegmentButton.Item>
        <SegmentButton.Item value="right">→</SegmentButton.Item>
        <SegmentButton.Item value="justify">⟷</SegmentButton.Item>
      </SegmentButton>
    </div>
  );
}
```

### 차트 뷰 선택기

```tsx
function ChartViewSelector() {
  const [viewType, setViewType] = useState(['line']);
  const [timeRange, setTimeRange] = useState(['week']);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          차트 유형
        </label>
        <SegmentButton
          mode="single"
          selectedValues={viewType}
          onChange={setViewType}
        >
          <SegmentButton.Item value="line">선형</SegmentButton.Item>
          <SegmentButton.Item value="bar">막대</SegmentButton.Item>
          <SegmentButton.Item value="pie">원형</SegmentButton.Item>
          <SegmentButton.Item value="area">영역</SegmentButton.Item>
        </SegmentButton>
      </div>
      
      <div>
        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
          기간 선택
        </label>
        <SegmentButton
          mode="single"
          selectedValues={timeRange}
          onChange={setTimeRange}
        >
          <SegmentButton.Item value="day">일</SegmentButton.Item>
          <SegmentButton.Item value="week">주</SegmentButton.Item>
          <SegmentButton.Item value="month">월</SegmentButton.Item>
          <SegmentButton.Item value="year">년</SegmentButton.Item>
        </SegmentButton>
      </div>
    </div>
  );
}
```

### 필터 컨트롤

```tsx
function FilterControls() {
  const [status, setStatus] = useState(['active']);
  const [category, setCategory] = useState<string[]>([]);
  const [priority, setPriority] = useState(['medium']);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px' }}>
      <div>
        <h4>상태 필터</h4>
        <SegmentButton
          mode="single"
          size="sm"
          selectedValues={status}
          onChange={setStatus}
        >
          <SegmentButton.Item value="all">전체</SegmentButton.Item>
          <SegmentButton.Item value="active">활성</SegmentButton.Item>
          <SegmentButton.Item value="inactive">비활성</SegmentButton.Item>
          <SegmentButton.Item value="pending">대기</SegmentButton.Item>
        </SegmentButton>
      </div>
      
      <div>
        <h4>카테고리 (다중 선택)</h4>
        <SegmentButton
          mode="multi"
          size="sm"
          selectedValues={category}
          onChange={setCategory}
        >
          <SegmentButton.Item value="frontend">Frontend</SegmentButton.Item>
          <SegmentButton.Item value="backend">Backend</SegmentButton.Item>
          <SegmentButton.Item value="design">Design</SegmentButton.Item>
          <SegmentButton.Item value="qa">QA</SegmentButton.Item>
        </SegmentButton>
      </div>
      
      <div>
        <h4>우선순위</h4>
        <SegmentButton
          mode="single"
          size="sm"
          selectedValues={priority}
          onChange={setPriority}
        >
          <SegmentButton.Item value="low">낮음</SegmentButton.Item>
          <SegmentButton.Item value="medium">보통</SegmentButton.Item>
          <SegmentButton.Item value="high">높음</SegmentButton.Item>
          <SegmentButton.Item value="urgent">긴급</SegmentButton.Item>
        </SegmentButton>
      </div>
      
      <div style={{ padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <strong>현재 필터:</strong>
        <ul style={{ margin: '8px 0', paddingLeft: '20px' }}>
          <li>상태: {status[0] || '없음'}</li>
          <li>카테고리: {category.length > 0 ? category.join(', ') : '없음'}</li>
          <li>우선순위: {priority[0] || '없음'}</li>
        </ul>
      </div>
    </div>
  );
}
```

## System-01 디자인 특성

### 색상 시스템

- **컨테이너**: `secondary-system01-1-rest` 배경
- **선택된 버튼**: `filled` variant, `primary` colorScheme
- **비선택 버튼**: `transparent` variant, `secondary` colorScheme
- **구분선**: 회색 테두리로 버튼 간 구분

### 형태적 특징

- **Border Radius**: `sm` 토큰 (외곽), 내부 버튼은 위치에 따라 조정
- **구분선**: 마지막 버튼 제외하고 오른쪽 테두리
- **버튼 크기**: Button 컴포넌트의 크기 시스템 따름

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

```tsx
// 키보드 내비게이션 지원
<SegmentButton
  mode="single"
  selectedValues={selected}
  onChange={setSelected}
  onKeyDown={(e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      // 좌우 화살표로 옵션 간 이동
    }
  }}
>
  <SegmentButton.Item value="option1">옵션 1</SegmentButton.Item>
  <SegmentButton.Item value="option2">옵션 2</SegmentButton.Item>
</SegmentButton>
```

### 스크린 리더 지원

```tsx
// 적절한 ARIA 속성 제공
<div role="group" aria-labelledby="segment-label">
  <div id="segment-label">보기 모드 선택</div>
  <SegmentButton
    mode="single"
    selectedValues={viewMode}
    onChange={setViewMode}
  >
    <SegmentButton.Item value="list" aria-label="리스트 보기">
      목록
    </SegmentButton.Item>
    <SegmentButton.Item value="grid" aria-label="그리드 보기">
      격자
    </SegmentButton.Item>
  </SegmentButton>
</div>
```

## Foundation 토큰 사용

### 색상 토큰

```css
/* 컨테이너 배경 */
background-color: var(--foundation-foundation-color-secondary-system01-1-rest);

/* 구분선 */
border-right: 1px solid var(--foundation-foundation-color-grey-light-80);
```

### 크기 토큰

```css
/* 모서리 */
border-radius: var(--foundation-foundation-border-radius-sm);
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 관련된 옵션들을 그룹화
- 명확하고 간결한 라벨 사용
- 적절한 모드 선택 (단일/다중)
- 기본 선택값 제공

✅ **적절한 사용 예시**
```tsx
// 뷰 모드 선택
<SegmentButton mode="single">
  <SegmentButton.Item value="list">목록</SegmentButton.Item>
  <SegmentButton.Item value="grid">격자</SegmentButton.Item>
</SegmentButton>

// 텍스트 서식
<SegmentButton mode="multi">
  <SegmentButton.Item value="bold">B</SegmentButton.Item>
  <SegmentButton.Item value="italic">I</SegmentButton.Item>
</SegmentButton>
```

### 주의사항

❌ **DON'T**
- 관련 없는 옵션들을 하나로 묶기
- 너무 많은 옵션 (5개 이하 권장)
- 불명확한 아이콘이나 라벨
- 모드와 맞지 않는 사용

## 관련 컴포넌트

- **Button**: 개별 세그먼트 아이템
- **Tab**: 탭 네비게이션이 필요한 경우
- **Radio**: 단일 선택이 필요한 경우
- **Checkbox**: 다중 선택이 필요한 경우

## 참고 자료

- [iOS Segmented Control](https://developer.apple.com/design/human-interface-guidelines/segmented-controls)
- [Material Design Selection](https://material.io/components/selection-controls) 