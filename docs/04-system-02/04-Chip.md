---
title: 'Chip - System 02'
description: 'Friendly & Bright 테마의 칩 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['Chip', 'Tag', 'Selection', 'Filter', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# Chip - System 02

System-02의 Chip 컴포넌트는 Friendly & Bright 테마에 최적화된 칩입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 선택된 항목이나 태그를 표시하는 컴팩트한 요소를 제공합니다.

## 개요

Chip 컴포넌트는 선택된 항목, 태그, 필터를 표시하는 컴포넌트로, Surface, Frame, Text, Icon 프리미티브를 조합하여 다양한 상태와 상호작용을 지원하는 칩을 제공합니다.

### 핵심 특징

- **2가지 변형**: filled, outlined
- **2가지 크기**: sm, md
- **4가지 상태**: default, hovered, pressed, disabled
- **선택 가능**: selectable 옵션으로 토글 기능
- **삭제 가능**: removable 옵션으로 제거 기능
- **Pill 형태**: 완전히 둥근 모서리로 친근한 느낌
- **프리미티브 조합**: Surface + Frame + Text + Icon

## Props 인터페이스

```typescript
interface ChipProps {
  // 컨텐츠
  children: React.ReactNode;
  
  // 스타일 변형
  variant?: 'filled' | 'outlined';
  size?: 'sm' | 'md';
  
  // 상태
  state?: 'default' | 'hovered' | 'pressed' | 'disabled';
  disabled?: boolean;
  selected?: boolean;
  
  // 기능
  selectable?: boolean;
  removable?: boolean;
  
  // 이벤트
  onClick?: () => void;
  onRemove?: () => void;
}
```

## 기본 사용법

### 기본 칩

```tsx
import { Chip } from 'lumir-design-system-02';

function BasicChips() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Chip>기본 칩</Chip>
      <Chip variant="outlined">아웃라인 칩</Chip>
      <Chip disabled>비활성화</Chip>
    </div>
  );
}
```

### 크기 변형

```tsx
function ChipSizes() {
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Chip size="sm">Small</Chip>
      <Chip size="md">Medium</Chip>
    </div>
  );
}
```

### 선택 가능한 칩

```tsx
function SelectableChips() {
  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  
  const toggleChip = (chipId: string) => {
    setSelectedChips(prev => 
      prev.includes(chipId)
        ? prev.filter(id => id !== chipId)
        : [...prev, chipId]
    );
  };
  
  const chips = ['React', 'TypeScript', 'Design', 'System'];
  
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {chips.map(chip => (
        <Chip
          key={chip}
          selectable
          selected={selectedChips.includes(chip)}
          onClick={() => toggleChip(chip)}
        >
          {chip}
        </Chip>
      ))}
    </div>
  );
}
```

## 변형 스타일

### Filled vs Outlined

```tsx
function ChipVariants() {
  const [selectedFilled, setSelectedFilled] = useState(false);
  const [selectedOutlined, setSelectedOutlined] = useState(false);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <h4>Filled 변형</h4>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Chip variant="filled">기본</Chip>
          <Chip 
            variant="filled" 
            selectable 
            selected={selectedFilled}
            onClick={() => setSelectedFilled(!selectedFilled)}
          >
            선택 가능
          </Chip>
          <Chip variant="filled" disabled>비활성화</Chip>
        </div>
      </div>
      
      <div>
        <h4>Outlined 변형</h4>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Chip variant="outlined">기본</Chip>
          <Chip 
            variant="outlined" 
            selectable 
            selected={selectedOutlined}
            onClick={() => setSelectedOutlined(!selectedOutlined)}
          >
            선택 가능
          </Chip>
          <Chip variant="outlined" disabled>비활성화</Chip>
        </div>
      </div>
    </div>
  );
}
```

## 삭제 가능한 칩

### 기본 삭제 기능

```tsx
function RemovableChips() {
  const [chips, setChips] = useState([
    'JavaScript',
    'React',
    'TypeScript',
    'CSS',
    'HTML'
  ]);
  
  const removeChip = (chipToRemove: string) => {
    setChips(prev => prev.filter(chip => chip !== chipToRemove));
  };
  
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {chips.map(chip => (
        <Chip
          key={chip}
          removable
          onRemove={() => removeChip(chip)}
        >
          {chip}
        </Chip>
      ))}
    </div>
  );
}
```

### 선택과 삭제 조합

```tsx
function SelectableRemovableChips() {
  const [chips, setChips] = useState([
    { id: '1', label: 'Frontend', selected: true },
    { id: '2', label: 'Backend', selected: false },
    { id: '3', label: 'Mobile', selected: true },
    { id: '4', label: 'DevOps', selected: false }
  ]);
  
  const toggleChip = (chipId: string) => {
    setChips(prev => prev.map(chip => 
      chip.id === chipId 
        ? { ...chip, selected: !chip.selected }
        : chip
    ));
  };
  
  const removeChip = (chipId: string) => {
    setChips(prev => prev.filter(chip => chip.id !== chipId));
  };
  
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {chips.map(chip => (
        <Chip
          key={chip.id}
          selectable
          removable
          selected={chip.selected}
          onClick={() => toggleChip(chip.id)}
          onRemove={() => removeChip(chip.id)}
        >
          {chip.label}
        </Chip>
      ))}
    </div>
  );
}
```

## 고급 사용 예제

### 태그 입력 시스템

```tsx
function TagInput() {
  const [tags, setTags] = useState(['React', 'TypeScript']);
  const [inputValue, setInputValue] = useState('');
  
  const addTag = () => {
    if (inputValue.trim() && !tags.includes(inputValue.trim())) {
      setTags(prev => [...prev, inputValue.trim()]);
      setInputValue('');
    }
  };
  
  const removeTag = (tagToRemove: string) => {
    setTags(prev => prev.filter(tag => tag !== tagToRemove));
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };
  
  return (
    <div style={{ maxWidth: '400px' }}>
      <h3>기술 스택 태그</h3>
      
      {/* 태그 표시 영역 */}
      <div style={{ 
        display: 'flex', 
        gap: '6px', 
        flexWrap: 'wrap',
        marginBottom: '12px',
        minHeight: '32px',
        padding: '8px',
        border: '1px solid #e1e5e9',
        borderRadius: '6px',
        backgroundColor: '#f8f9fa'
      }}>
        {tags.map(tag => (
          <Chip
            key={tag}
            size="sm"
            removable
            onRemove={() => removeTag(tag)}
          >
            {tag}
          </Chip>
        ))}
        {tags.length === 0 && (
          <span style={{ color: '#666', fontSize: '14px' }}>
            태그를 추가해주세요
          </span>
        )}
      </div>
      
      {/* 입력 영역 */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="태그 입력..."
          style={{
            flex: 1,
            padding: '8px 12px',
            border: '1px solid #dee2e6',
            borderRadius: '4px',
            fontSize: '14px'
          }}
        />
        <button
          onClick={addTag}
          disabled={!inputValue.trim()}
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
            opacity: inputValue.trim() ? 1 : 0.6
          }}
        >
          추가
        </button>
      </div>
    </div>
  );
}
```

### 필터 칩 시스템

```tsx
function FilterChips() {
  const [filters, setFilters] = useState({
    category: [],
    price: [],
    brand: [],
    rating: []
  });
  
  const filterOptions = {
    category: ['전자제품', '패션', '홈&리빙', '뷰티', '스포츠'],
    price: ['10만원 이하', '10-50만원', '50-100만원', '100만원 이상'],
    brand: ['Apple', 'Samsung', 'LG', 'Sony', 'Nike'],
    rating: ['⭐⭐⭐⭐⭐ 5점', '⭐⭐⭐⭐ 4점 이상', '⭐⭐⭐ 3점 이상']
  };
  
  const toggleFilter = (category: keyof typeof filters, value: string) => {
    setFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };
  
  const clearAllFilters = () => {
    setFilters({
      category: [],
      price: [],
      brand: [],
      rating: []
    });
  };
  
  const getTotalFilterCount = () => {
    return Object.values(filters).flat().length;
  };
  
  return (
    <div style={{ maxWidth: '600px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h3>상품 필터</h3>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#666' }}>
            {getTotalFilterCount()}개 필터 적용됨
          </span>
          <button
            onClick={clearAllFilters}
            disabled={getTotalFilterCount() === 0}
            style={{
              padding: '4px 8px',
              fontSize: '12px',
              backgroundColor: 'transparent',
              color: '#007bff',
              border: '1px solid #007bff',
              borderRadius: '4px',
              cursor: getTotalFilterCount() > 0 ? 'pointer' : 'not-allowed',
              opacity: getTotalFilterCount() > 0 ? 1 : 0.5
            }}
          >
            전체 해제
          </button>
        </div>
      </div>
      
      {Object.entries(filterOptions).map(([category, options]) => (
        <div key={category} style={{ marginBottom: '16px' }}>
          <h4 style={{ 
            fontSize: '14px', 
            fontWeight: 'bold', 
            marginBottom: '8px',
            textTransform: 'capitalize'
          }}>
            {category === 'category' ? '카테고리' :
             category === 'price' ? '가격' :
             category === 'brand' ? '브랜드' : '평점'}
          </h4>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {options.map(option => (
              <Chip
                key={option}
                size="sm"
                variant="outlined"
                selectable
                selected={filters[category].includes(option)}
                onClick={() => toggleFilter(category, option)}
              >
                {option}
              </Chip>
            ))}
          </div>
        </div>
      ))}
      
      {/* 선택된 필터 요약 */}
      {getTotalFilterCount() > 0 && (
        <div style={{ 
          marginTop: '20px',
          padding: '12px',
          backgroundColor: '#f8f9fa',
          borderRadius: '6px'
        }}>
          <h4 style={{ fontSize: '14px', marginBottom: '8px' }}>선택된 필터:</h4>
          <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
            {Object.entries(filters).map(([category, values]) =>
              values.map(value => (
                <Chip
                  key={`${category}-${value}`}
                  size="sm"
                  removable
                  onRemove={() => toggleFilter(category, value)}
                >
                  {value}
                </Chip>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
```

### ComboBox 태그 선택

```tsx
function ComboBoxTags() {
  const [selectedTags, setSelectedTags] = useState(['React', 'TypeScript']);
  const [isOpen, setIsOpen] = useState(false);
  
  const availableTags = [
    'React', 'TypeScript', 'JavaScript', 'CSS', 'HTML',
    'Node.js', 'Python', 'Java', 'C++', 'Go',
    'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Express'
  ];
  
  const unselectedTags = availableTags.filter(tag => !selectedTags.includes(tag));
  
  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags(prev => [...prev, tag]);
    }
  };
  
  const removeTag = (tag: string) => {
    setSelectedTags(prev => prev.filter(t => t !== tag));
  };
  
  return (
    <div style={{ maxWidth: '500px' }}>
      <h3>기술 스택 선택</h3>
      
      {/* 선택된 태그 표시 */}
      <div style={{ 
        marginBottom: '12px',
        minHeight: '40px',
        padding: '8px',
        border: '2px solid #e1e5e9',
        borderRadius: '6px',
        backgroundColor: 'white'
      }}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {selectedTags.map(tag => (
            <Chip
              key={tag}
              size="sm"
              removable
              onRemove={() => removeTag(tag)}
            >
              {tag}
            </Chip>
          ))}
          {selectedTags.length === 0 && (
            <span style={{ 
              color: '#999', 
              fontSize: '14px',
              lineHeight: '24px'
            }}>
              기술 스택을 선택해주세요
            </span>
          )}
        </div>
      </div>
      
      {/* 드롭다운 토글 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '8px 12px',
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <span>기술 스택 추가</span>
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      
      {/* 사용 가능한 태그 목록 */}
      {isOpen && (
        <div style={{ 
          marginTop: '8px',
          padding: '12px',
          border: '1px solid #dee2e6',
          borderRadius: '4px',
          backgroundColor: 'white',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {unselectedTags.map(tag => (
              <Chip
                key={tag}
                size="sm"
                variant="outlined"
                selectable
                onClick={() => {
                  addTag(tag);
                  setIsOpen(false);
                }}
              >
                {tag}
              </Chip>
            ))}
            {unselectedTags.length === 0 && (
              <span style={{ color: '#666', fontSize: '14px' }}>
                모든 태그가 선택되었습니다
              </span>
            )}
          </div>
        </div>
      )}
      
      {/* 선택 요약 */}
      <div style={{ 
        marginTop: '16px',
        fontSize: '14px',
        color: '#666'
      }}>
        총 {selectedTags.length}개의 기술 스택이 선택되었습니다
      </div>
    </div>
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **Filled 기본**: `secondary-system02-1-rest` 배경
- **Filled 선택**: `primary-system02-1-rest` 배경, `primary-system02-oncolor` 텍스트
- **Outlined 기본**: `secondary-system02-1-rest` 테두리
- **Outlined 선택**: `primary-system02-1-rest` 테두리와 텍스트

### 형태적 특징 (더 친근한 디자인)

- **Border Radius**: `pill` 토큰 (완전히 둥근 모서리)
- **크기별 패딩**: sm(4px), md(6px)
- **텍스트 크기**: sm(caption-1), md(body-2)
- **아이콘 크기**: sm(xs), md(sm)

### 상태별 색상 변화

- **Hover**: `-hovered` 토큰으로 밝은 상태
- **Pressed**: `-pressed` 토큰으로 어두운 상태
- **Disabled**: `-disabled` 토큰으로 비활성 상태

## Foundation 토큰 사용

### 색상 토큰

```css
/* Filled 변형 */
background-color: var(--foundation-foundation-color-secondary-system02-1-rest);
background-color: var(--foundation-foundation-color-primary-system02-1-rest); /* 선택시 */

/* Outlined 변형 */
border-color: var(--foundation-foundation-color-secondary-system02-1-rest);
color: var(--foundation-foundation-color-primary-system02-1-rest); /* 선택시 */
```

### 크기 토큰

```css
/* Border Radius */
border-radius: var(--foundation-foundation-border-radius-pill);

/* 패딩 */
padding: var(--foundation-foundation-spacing-xxs); /* sm */
padding: var(--foundation-foundation-spacing-xs); /* md */
```

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

```tsx
// 키보드 이벤트 지원
<Chip
  selectable
  onClick={handleSelect}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleSelect();
    }
  }}
  tabIndex={0}
>
  선택 가능한 칩
</Chip>
```

### 스크린 리더 지원

```tsx
// 적절한 ARIA 속성
<Chip
  selectable
  selected={isSelected}
  aria-pressed={isSelected}
  aria-label={`${chipText} ${isSelected ? '선택됨' : '선택 안됨'}`}
  role="button"
>
  {chipText}
</Chip>

// 삭제 가능한 칩
<Chip
  removable
  onRemove={handleRemove}
  aria-label={`${chipText} 태그, 삭제하려면 엔터키를 누르세요`}
>
  {chipText}
</Chip>
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 관련된 항목들을 그룹화하여 표시
- 명확한 라벨과 의미 사용
- 적절한 크기와 간격 유지
- 일관된 선택/해제 상태 표시

✅ **커머스 환경 최적화**
```tsx
// 카테고리 필터
<Chip variant="outlined" selectable>
  전자제품
</Chip>

// 태그 입력
<Chip removable onRemove={handleRemove}>
  React
</Chip>

// 선택된 옵션
<Chip selected>
  무료배송
</Chip>
```

### 주의사항

❌ **DON'T**
- 너무 많은 칩을 한 번에 표시
- 불명확한 라벨 사용
- 삭제 기능 없는 긴 목록
- 접근성 속성 누락

## 관련 컴포넌트

- **Badge**: 상태 표시용 라벨
- **Button**: 액션 버튼
- **ComboBox**: 다중 선택 드롭다운
- **Text**: 칩 라벨
- **Icon**: 삭제 아이콘

## 참고 자료

- [Chip Design Patterns](https://material.io/components/chips)
- [Tag Input Best Practices](https://uxplanet.org/designing-tag-input-components-8e95b5f3b2e4)
- [Accessible Chip Components](https://www.w3.org/WAI/ARIA/apg/patterns/button/) 