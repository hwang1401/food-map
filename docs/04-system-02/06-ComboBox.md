---
title: 'ComboBox - System 02'
description: 'Friendly & Bright 테마의 콤보박스 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['ComboBox', 'Dropdown', 'Selection', 'Search', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# ComboBox - System 02

System-02의 ComboBox 컴포넌트는 Friendly & Bright 테마에 최적화된 콤보박스입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 검색 가능한 드롭다운 선택 인터페이스를 제공합니다.

## 개요

ComboBox 컴포넌트는 Field, OptionList, Chip 컴포넌트를 조합하여 검색 기능과 다중 선택을 지원하는 고급 드롭다운 인터페이스를 제공합니다.

### 핵심 특징

- **단일/다중 선택**: multiple 옵션으로 선택 모드 변경
- **검색 기능**: searchable 옵션으로 실시간 필터링
- **Chip 통합**: 선택된 항목을 Chip으로 표시
- **Field 기반**: Field 컴포넌트의 모든 스타일 옵션 지원
- **키보드 접근성**: 화살표 키, Enter, Escape 지원
- **프리미티브 조합**: Field + OptionList + Chip

## Props 인터페이스

```typescript
interface ComboBoxProps {
  // 옵션
  options: ComboBoxOption[];
  value?: string | string[];
  
  // 기능
  multiple?: boolean;
  searchable?: boolean;
  disabled?: boolean;
  
  // Field 설정
  placeholder?: string;
  label?: string;
  fieldVariant?: 'outlined' | 'transparent' | 'filled';
  fieldSize?: 'md' | 'lg' | 'xlg';
  fieldWidth?: 'fit-content' | 'fill-width' | string | number;
  labelPosition?: 'above' | 'before' | 'none';
  leftIcon?: string;
  
  // 상태
  errorMessage?: string;
  helperText?: string;
  required?: boolean;
  direction?: 'up' | 'down';
  
  // 이벤트
  onChange?: (value: string | string[]) => void;
  onSearch?: (searchTerm: string) => void;
  onToggle?: (isOpen: boolean) => void;
}
```

## 기본 사용법

### 단일 선택

```tsx
import { ComboBox } from 'lumir-design-system-02';

function SingleSelect() {
  const [value, setValue] = useState('');
  
  const options = [
    { value: 'apple', label: 'Apple' },
    { value: 'samsung', label: 'Samsung' },
    { value: 'lg', label: 'LG' }
  ];
  
  return (
    <ComboBox
      label="브랜드 선택"
      options={options}
      value={value}
      onChange={(newValue) => setValue(newValue as string)}
      placeholder="브랜드를 선택해주세요"
    />
  );
}
```

### 다중 선택

```tsx
function MultiSelect() {
  const [values, setValues] = useState<string[]>([]);
  
  const options = [
    { value: 'electronics', label: '전자제품' },
    { value: 'fashion', label: '패션' },
    { value: 'home', label: '홈&리빙' },
    { value: 'beauty', label: '뷰티' }
  ];
  
  return (
    <ComboBox
      label="관심 카테고리"
      options={options}
      value={values}
      multiple
      onChange={(newValues) => setValues(newValues as string[])}
      placeholder="카테고리를 선택해주세요"
    />
  );
}
```

### 검색 가능한 ComboBox

```tsx
function SearchableComboBox() {
  const [value, setValue] = useState('');
  
  const options = [
    { value: 'seoul', label: '서울특별시' },
    { value: 'busan', label: '부산광역시' },
    { value: 'incheon', label: '인천광역시' },
    { value: 'daegu', label: '대구광역시' },
    { value: 'gwangju', label: '광주광역시' }
  ];
  
  return (
    <ComboBox
      label="지역 선택"
      options={options}
      value={value}
      searchable
      onChange={(newValue) => setValue(newValue as string)}
      placeholder="지역을 검색하거나 선택해주세요"
      leftIcon="LineIconsLocationIcon"
    />
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **Field 기반**: Field 컴포넌트의 System-02 색상 시스템 사용
- **드롭다운**: `secondary-system02-1-rest` 배경
- **선택된 옵션**: `primary-system02-1-rest` 하이라이트

### 형태적 특징 (더 친근한 디자인)

- **Border Radius**: Field와 동일한 xl radius
- **그림자**: 드롭다운에 자연스러운 shadow-20
- **Chip 스타일**: 선택된 항목을 pill 형태로 표시
- **간격**: 넓은 패딩과 간격으로 여유로운 느낌

## Foundation 토큰 사용

```css
/* 드롭다운 배경 */
background-color: var(--foundation-foundation-color-secondary-system02-1-rest);

/* 그림자 */
box-shadow: var(--foundation-foundation-shadow-20);

/* Border Radius */
border-radius: var(--foundation-foundation-border-radius-xl);
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 옵션이 많을 때 검색 기능 활용
- 다중 선택 시 명확한 라벨 제공
- 적절한 placeholder 텍스트 사용

✅ **커머스 환경 최적화**
```tsx
// 카테고리 선택
<ComboBox
  label="상품 카테고리"
  options={categories}
  searchable
  multiple
/>

// 브랜드 필터
<ComboBox
  label="브랜드"
  options={brands}
  searchable
  placeholder="브랜드 검색..."
/>
```

### 주의사항

❌ **DON'T**
- 너무 많은 옵션을 한 번에 표시
- 검색 없이 긴 목록 제공
- 불명확한 옵션 라벨 사용

## 관련 컴포넌트

- **Field**: 입력 필드 기반
- **OptionList**: 드롭다운 옵션
- **Chip**: 선택된 항목 표시
- **Surface**: 드롭다운 배경

## 참고 자료

- [ComboBox Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Dropdown Design Best Practices](https://uxplanet.org/dropdown-design-101-types-and-best-practices-5b6c57e6b3f7) 