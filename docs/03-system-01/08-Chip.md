---
title: 'Chip - System 01'
description: 'Professional & Clean 테마의 칩 컴포넌트'
date: '2024-12-28'
category: 'System-01 Components'
tags: ['Chip', 'Tag', 'Selection', 'System-01', 'Professional']
version: '1.0.0'
status: 'stable'
---

# Chip - System 01

System-01의 Chip 컴포넌트는 Professional & Clean 테마에 최적화된 칩입니다. GitHub, 백오피스 환경에서 사용되는 선택된 항목이나 태그를 표시하는 명확하고 효율적인 디자인을 제공합니다.

## 개요

Chip 컴포넌트는 선택된 항목이나 태그를 표시하는 컴파운드 컴포넌트로, Surface, Frame, Text, Icon 프리미티브를 조합하여 다양한 상호작용이 가능한 칩 경험을 제공합니다.

### 핵심 특징

- **2가지 스타일**: filled, outlined
- **2가지 크기**: sm(12px), md(14px)
- **선택 기능**: 클릭하여 선택/해제 가능
- **삭제 기능**: X 버튼으로 제거 가능
- **상태 관리**: default, hover, pressed, disabled
- **접근성**: 키보드 내비게이션 및 스크린 리더 지원
- **프리미티브 조합**: Surface + Frame + Text + Icon

## Props 인터페이스

```typescript
interface ChipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick' | 'color'> {
  // 내용
  children: React.ReactNode;
  
  // 스타일 설정
  variant?: 'filled' | 'outlined';
  size?: 'sm' | 'md';
  
  // 상태
  state?: 'default' | 'hovered' | 'pressed' | 'disabled';
  disabled?: boolean;
  
  // 기능
  removable?: boolean;
  selectable?: boolean;
  selected?: boolean;
  
  // 이벤트 핸들러
  onClick?: () => void;
  onRemove?: () => void;
}
```

## 기본 사용법

### 기본 칩

```tsx
import { Chip } from 'lumir-design-system-01';

function BasicChip() {
  return (
    <Chip>React</Chip>
  );
}
```

### 선택 가능한 칩

```tsx
function SelectableChip() {
  const [selected, setSelected] = useState(false);
  
  return (
    <Chip 
      selectable 
      selected={selected}
      onClick={() => setSelected(!selected)}
    >
      TypeScript
    </Chip>
  );
}
```

### 삭제 가능한 칩

```tsx
function RemovableChip() {
  const [visible, setVisible] = useState(true);
  
  if (!visible) return null;
  
  return (
    <Chip 
      removable 
      onRemove={() => setVisible(false)}
    >
      JavaScript
    </Chip>
  );
}
```

## 스타일 변형

### Filled (기본)

배경색이 채워진 스타일입니다.

```tsx
function FilledChips() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip variant="filled">기본</Chip>
      <Chip variant="filled" selected>선택됨</Chip>
      <Chip variant="filled" disabled>비활성화</Chip>
    </div>
  );
}
```

### Outlined

테두리만 있는 스타일입니다.

```tsx
function OutlinedChips() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip variant="outlined">기본</Chip>
      <Chip variant="outlined" selected>선택됨</Chip>
      <Chip variant="outlined" disabled>비활성화</Chip>
    </div>
  );
}
```

## 크기 변형

### 작은 크기

```tsx
function SmallChips() {
  return (
    <div style={{ display: 'flex', gap: '6px' }}>
      <Chip size="sm">Small</Chip>
      <Chip size="sm" removable onRemove={() => {}}>
        Small with X
      </Chip>
    </div>
  );
}
```

### 중간 크기 (기본)

```tsx
function MediumChips() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip size="md">Medium</Chip>
      <Chip size="md" removable onRemove={() => {}}>
        Medium with X
      </Chip>
    </div>
  );
}
```

## 상태 변형

### 기본 상태

```tsx
function DefaultState() {
  return (
    <Chip state="default">기본 상태</Chip>
  );
}
```

### 호버 상태

```tsx
function HoveredState() {
  return (
    <Chip state="hovered">호버 상태</Chip>
  );
}
```

### 눌림 상태

```tsx
function PressedState() {
  return (
    <Chip state="pressed">눌림 상태</Chip>
  );
}
```

### 비활성화 상태

```tsx
function DisabledState() {
  return (
    <Chip disabled>비활성화 상태</Chip>
  );
}
```

## 고급 사용 예제

### 태그 선택기

```tsx
function TagSelector() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const availableTags = ['React', 'TypeScript', 'JavaScript', 'CSS', 'HTML'];
  
  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };
  
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {availableTags.map(tag => (
        <Chip
          key={tag}
          selectable
          selected={selectedTags.includes(tag)}
          onClick={() => toggleTag(tag)}
        >
          {tag}
        </Chip>
      ))}
    </div>
  );
}
```

### 필터 칩

```tsx
function FilterChips() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['React']);
  
  const filters = [
    { id: 'react', label: 'React' },
    { id: 'vue', label: 'Vue.js' },
    { id: 'angular', label: 'Angular' },
    { id: 'svelte', label: 'Svelte' },
  ];
  
  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };
  
  return (
    <div>
      <h4>프레임워크 필터</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {filters.map(filter => (
          <Chip
            key={filter.id}
            variant="outlined"
            selectable
            selected={activeFilters.includes(filter.id)}
            onClick={() => toggleFilter(filter.id)}
          >
            {filter.label}
          </Chip>
        ))}
      </div>
    </div>
  );
}
```

### 입력된 태그 관리

```tsx
function TagInput() {
  const [tags, setTags] = useState(['React', 'TypeScript']);
  const [inputValue, setInputValue] = useState('');
  
  const addTag = () => {
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };
  
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTag();
    }
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="태그 입력..."
          style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <button onClick={addTag}>추가</button>
      </div>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {tags.map(tag => (
          <Chip
            key={tag}
            removable
            onRemove={() => removeTag(tag)}
          >
            {tag}
          </Chip>
        ))}
      </div>
    </div>
  );
}
```

### ComboBox 선택 항목

```tsx
function ComboBoxSelection() {
  const [selectedItems, setSelectedItems] = useState([
    'React',
    'TypeScript',
    'Tailwind CSS'
  ]);
  
  const removeItem = (item: string) => {
    setSelectedItems(prev => prev.filter(i => i !== item));
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <label>선택된 기술 스택:</label>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '6px',
        padding: '8px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        minHeight: '40px'
      }}>
        {selectedItems.map(item => (
          <Chip
            key={item}
            size="sm"
            removable
            onRemove={() => removeItem(item)}
          >
            {item}
          </Chip>
        ))}
      </div>
    </div>
  );
}
```

## System-01 디자인 특성

### 색상 시스템

- **기본 상태**: `secondary-system01-2-*` 토큰 사용
- **선택 상태**: `primary-system01-1-*` 토큰 사용
- **텍스트**: 배경에 따른 적절한 대비 색상
- **비활성화**: `*-disabled` 토큰 사용

### 형태적 특징

- **Border Radius**: `pill` 토큰 (완전한 둥근 모서리)
- **간격**: 컴팩트한 `xxs`, `xs` 패딩
- **크기**: sm(12px), md(14px) 텍스트
- **아이콘**: close 아이콘으로 삭제 기능

### 상호작용 패턴

- **Hover**: 배경색 변화
- **Click**: 선택 상태 토글
- **Remove**: X 버튼 클릭으로 삭제
- **Focus**: 키보드 접근성 지원

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

```tsx
// 키보드 내비게이션 지원
<Chip 
  selectable 
  onClick={() => {}}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // 선택 토글
    }
  }}
>
  키보드 접근 가능한 칩
</Chip>
```

### 스크린 리더 지원

```tsx
// 적절한 역할과 상태 제공
<Chip 
  selectable 
  selected={true}
  role="button"
  aria-pressed={true}
  aria-label="React 태그, 선택됨"
>
  React
</Chip>

// 삭제 버튼 접근성
<Chip 
  removable 
  onRemove={() => {}}
  aria-label="JavaScript 태그"
>
  JavaScript
  {/* X 버튼에 aria-label="JavaScript 태그 제거" 자동 적용 */}
</Chip>
```

### 색상 대비

- **일반 텍스트**: 4.5:1 이상 (WCAG AA)
- **선택된 칩**: 4.5:1 이상
- **비활성화 칩**: 3:1 이상
- **포커스 인디케이터**: 3:1 이상

### 터치 접근성

- **최소 터치 영역**: 32×32px (sm), 36×36px (md)
- **적절한 간격**: 인접 칩과 6-8px 간격

## Foundation 토큰 사용

### 색상 토큰

```css
/* 기본 배경 (filled) */
background-color: var(--foundation-foundation-color-secondary-system01-2-rest);

/* 선택된 배경 (filled) */
background-color: var(--foundation-foundation-color-primary-system01-1-rest);

/* 테두리 색상 (outlined) */
border-color: var(--foundation-foundation-color-secondary-system01-1-rest);

/* 텍스트 색상 */
color: var(--foundation-foundation-color-secondary-system01-1-rest);
```

### 크기 토큰

```css
/* 작은 크기 패딩 */
padding: var(--foundation-foundation-spacing-xxs);

/* 중간 크기 패딩 */
padding: var(--foundation-foundation-spacing-xs);

/* 간격 */
gap: var(--foundation-foundation-spacing-xxs);
```

### 모서리 토큰

```css
/* 완전한 둥근 모서리 */
border-radius: var(--foundation-foundation-border-radius-pill);

/* 삭제 버튼 모서리 */
border-radius: var(--foundation-foundation-border-radius-sm);
```

## 성능 최적화

### 메모이제이션

```tsx
import { memo } from 'react';

const OptimizedChip = memo(Chip);

// 불필요한 리렌더링 방지
function TagList({ tags }) {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {tags.map(tag => (
        <OptimizedChip key={tag} removable onRemove={() => removeTag(tag)}>
          {tag}
        </OptimizedChip>
      ))}
    </div>
  );
}
```

### 가상화 (많은 칩)

```tsx
import { FixedSizeList as List } from 'react-window';

function VirtualizedChips({ chips }) {
  const ChipRow = ({ index, style }) => (
    <div style={style}>
      <Chip key={chips[index]}>{chips[index]}</Chip>
    </div>
  );
  
  return (
    <List
      height={200}
      itemCount={chips.length}
      itemSize={40}
    >
      {ChipRow}
    </List>
  );
}
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 간결하고 명확한 텍스트 사용
- 관련된 칩들을 그룹화
- 선택 상태를 명확히 표시
- 적절한 크기 선택
- 키보드 접근성 고려

✅ **적절한 사용 예시**
```tsx
// 태그 선택
<Chip selectable selected={true} onClick={toggle}>
  React
</Chip>

// 필터 칩
<Chip variant="outlined" removable onRemove={remove}>
  JavaScript
</Chip>
```

### 주의사항

❌ **DON'T**
- 너무 긴 텍스트 사용
- 과도한 칩 사용
- 불명확한 삭제 동작
- 일관성 없는 크기 혼용

❌ **피해야 할 예시**
```tsx
// 너무 긴 텍스트
<Chip>매우 긴 텍스트로 칩의 크기가 너무 커지는 경우</Chip>

// 불명확한 상태
<Chip selectable selected={undefined}>
  상태 불명확
</Chip>
```

### 크기 선택 가이드

- **sm**: 공간이 제한적인 경우, ComboBox 내부
- **md**: 일반적인 사용 (가장 많이 사용)

### 변형 선택 가이드

- **filled**: 강조가 필요한 선택된 항목
- **outlined**: 미묘한 표시가 필요한 필터나 옵션

## 관련 컴포넌트

- **Badge**: 상태 표시 (읽기 전용)
- **Button**: 액션 버튼 (칩과 구분)
- **ComboBox**: 선택된 항목 표시에 칩 사용
- **Text**: 칩 내 텍스트 렌더링
- **Icon**: 삭제 버튼 아이콘

## 참고 자료

- [Material Design Chips](https://material.io/components/chips)
- [WCAG 2.1 Button 가이드라인](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [접근 가능한 태그 입력](https://inclusive-components.design/a-todo-list/) 