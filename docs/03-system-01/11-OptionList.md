---
title: 'OptionList - System 01'
description: 'Professional & Clean 테마의 옵션 리스트 컴포넌트'
date: '2024-12-28'
category: 'System-01 Components'
tags: ['OptionList', 'Selection', 'Dropdown', 'Menu', 'System-01', 'Professional']
version: '1.0.0'
status: 'stable'
---

# OptionList - System 01

System-01의 OptionList 컴포넌트는 Professional & Clean 테마에 최적화된 선택 옵션 아이템입니다. ComboBox, 드롭다운 메뉴, 선택 목록 등에서 사용할 수 있는 범용적인 컴포넌트로, GitHub, 백오피스 환경에서 다양한 선택 인터페이스를 구성할 수 있습니다.

## 개요

OptionList 컴포넌트는 선택 가능한 옵션 아이템을 표현하는 컴파운드 컴포넌트로, Surface, Frame, Text, Radio, Checkbox 프리미티브를 조합하여 다양한 타입의 선택 옵션을 제공합니다.

### 핵심 특징

- **6가지 타입**: menu-header, single-select, radio, multi-select, radio-component, checkbox-component
- **6가지 상태**: default, hovered, pressed, focused, disabled, selected
- **통합 인터페이스**: Radio, Checkbox 컴포넌트 내장 지원
- **상호작용**: 클릭, 호버, 키보드 접근성
- **프리미티브 조합**: Surface + Frame + Text + Radio + Checkbox

## Props 인터페이스

```typescript
interface OptionListProps {
  // 기본 설정
  type?: 'menu-header' | 'single-select' | 'radio' | 'multi-select' | 'radio-component' | 'checkbox-component';
  state?: 'default' | 'hovered' | 'pressed' | 'focused' | 'disabled' | 'selected';
  selected?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  
  // 이벤트 핸들러
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  
  // Radio 관련 props
  radioName?: string;
  radioValue?: string;
  radioChecked?: boolean;
  onRadioChange?: (value: string) => void;
  
  // Checkbox 관련 props
  checkboxName?: string;
  checkboxValue?: string;
  checkboxChecked?: boolean;
  checkboxIndeterminate?: boolean;
  onCheckboxChange?: (checked: boolean) => void;
}
```

## 기본 사용법

### 단순 선택 옵션

```tsx
import { OptionList } from 'lumir-design-system-01';

function BasicOption() {
  return (
    <OptionList type="single-select">
      옵션 1
    </OptionList>
  );
}
```

### 메뉴 헤더

```tsx
function MenuHeader() {
  return (
    <OptionList type="menu-header">
      카테고리
    </OptionList>
  );
}
```

### 선택된 옵션

```tsx
function SelectedOption() {
  return (
    <OptionList 
      type="single-select" 
      selected={true}
      onClick={() => console.log('선택됨')}
    >
      선택된 옵션
    </OptionList>
  );
}
```

## 타입별 사용법

### Menu Header

카테고리나 그룹 제목으로 사용됩니다.

```tsx
function MenuHeaderExample() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <OptionList type="menu-header">
        파일 작업
      </OptionList>
      <OptionList type="single-select">새 파일</OptionList>
      <OptionList type="single-select">열기</OptionList>
      <OptionList type="single-select">저장</OptionList>
    </div>
  );
}
```

### Single Select

단일 선택 옵션으로 사용됩니다.

```tsx
function SingleSelectExample() {
  const [selected, setSelected] = useState<string | null>(null);
  
  const options = ['옵션 1', '옵션 2', '옵션 3'];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
      {options.map(option => (
        <OptionList
          key={option}
          type="single-select"
          selected={selected === option}
          onClick={() => setSelected(option)}
        >
          {option}
        </OptionList>
      ))}
    </div>
  );
}
```

### Radio Component

내장된 Radio 컴포넌트를 사용합니다.

```tsx
function RadioComponentExample() {
  const [selectedValue, setSelectedValue] = useState('option1');
  
  const options = [
    { value: 'option1', label: '옵션 1' },
    { value: 'option2', label: '옵션 2' },
    { value: 'option3', label: '옵션 3' },
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {options.map(option => (
        <OptionList
          key={option.value}
          type="radio-component"
          radioName="example-radio"
          radioValue={option.value}
          radioChecked={selectedValue === option.value}
          onRadioChange={setSelectedValue}
        >
          {option.label}
        </OptionList>
      ))}
    </div>
  );
}
```

### Checkbox Component

내장된 Checkbox 컴포넌트를 사용합니다.

```tsx
function CheckboxComponentExample() {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);
  
  const options = [
    { value: 'feature1', label: '기능 1' },
    { value: 'feature2', label: '기능 2' },
    { value: 'feature3', label: '기능 3' },
  ];
  
  const handleCheckboxChange = (value: string, checked: boolean) => {
    setCheckedItems(prev => 
      checked 
        ? [...prev, value]
        : prev.filter(item => item !== value)
    );
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {options.map(option => (
        <OptionList
          key={option.value}
          type="checkbox-component"
          checkboxName={option.value}
          checkboxValue={option.value}
          checkboxChecked={checkedItems.includes(option.value)}
          onCheckboxChange={(checked) => handleCheckboxChange(option.value, checked)}
        >
          {option.label}
        </OptionList>
      ))}
    </div>
  );
}
```

## 상태 변형

### 기본 상태들

```tsx
function StateExamples() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      <OptionList state="default">기본 상태</OptionList>
      <OptionList state="hovered">호버 상태</OptionList>
      <OptionList state="pressed">눌림 상태</OptionList>
      <OptionList state="focused">포커스 상태</OptionList>
      <OptionList state="selected">선택 상태</OptionList>
      <OptionList state="disabled" disabled>비활성화 상태</OptionList>
    </div>
  );
}
```

## 고급 사용 예제

### ComboBox 옵션 리스트

```tsx
function ComboBoxOptions() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ];
  
  return (
    <div style={{ position: 'relative', width: '200px' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '8px 12px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          backgroundColor: 'white',
          textAlign: 'left'
        }}
      >
        {selectedValue ? options.find(o => o.value === selectedValue)?.label : '선택하세요'}
      </button>
      
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginTop: '4px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          zIndex: 1000
        }}>
          {options.map(option => (
            <OptionList
              key={option.value}
              type="single-select"
              selected={selectedValue === option.value}
              onClick={() => {
                setSelectedValue(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </OptionList>
          ))}
        </div>
      )}
    </div>
  );
}
```

### 다단계 메뉴

```tsx
function NestedMenu() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  
  const menuData = {
    file: {
      label: '파일',
      items: ['새 파일', '열기', '저장', '다른 이름으로 저장']
    },
    edit: {
      label: '편집',
      items: ['실행 취소', '다시 실행', '복사', '붙여넣기']
    },
    view: {
      label: '보기',
      items: ['확대', '축소', '전체 화면']
    }
  };
  
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  return (
    <div style={{ width: '250px', border: '1px solid #ccc', borderRadius: '4px' }}>
      {Object.entries(menuData).map(([categoryId, category]) => (
        <div key={categoryId}>
          <OptionList
            type="menu-header"
            onClick={() => toggleCategory(categoryId)}
          >
            {category.label}
          </OptionList>
          
          {expandedCategories.includes(categoryId) && (
            <div style={{ paddingLeft: '16px' }}>
              {category.items.map(item => (
                <OptionList
                  key={item}
                  type="single-select"
                  selected={selectedItem === item}
                  onClick={() => setSelectedItem(item)}
                >
                  {item}
                </OptionList>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

### 필터 목록

```tsx
function FilterList() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(['active']);
  
  const filters = [
    { value: 'all', label: '전체', type: 'radio' },
    { value: 'active', label: '활성', type: 'radio' },
    { value: 'inactive', label: '비활성', type: 'radio' },
  ];
  
  const features = [
    { value: 'notifications', label: '알림' },
    { value: 'darkMode', label: '다크 모드' },
    { value: 'autoSave', label: '자동 저장' },
  ];
  
  const handleRadioChange = (value: string) => {
    setSelectedFilters([value]);
  };
  
  const handleCheckboxChange = (value: string, checked: boolean) => {
    setSelectedFilters(prev => 
      checked 
        ? [...prev, value]
        : prev.filter(item => item !== value)
    );
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <OptionList type="menu-header">상태 필터</OptionList>
      {filters.map(filter => (
        <OptionList
          key={filter.value}
          type="radio-component"
          radioName="status-filter"
          radioValue={filter.value}
          radioChecked={selectedFilters.includes(filter.value)}
          onRadioChange={handleRadioChange}
        >
          {filter.label}
        </OptionList>
      ))}
      
      <OptionList type="menu-header">기능 설정</OptionList>
      {features.map(feature => (
        <OptionList
          key={feature.value}
          type="checkbox-component"
          checkboxValue={feature.value}
          checkboxChecked={selectedFilters.includes(feature.value)}
          onCheckboxChange={(checked) => handleCheckboxChange(feature.value, checked)}
        >
          {feature.label}
        </OptionList>
      ))}
    </div>
  );
}
```

### 검색 가능한 옵션 리스트

```tsx
function SearchableOptions() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedValues, setSelectedValues] = useState<string[]>([]);
  
  const allOptions = [
    'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Angular',
    'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Redis'
  ];
  
  const filteredOptions = allOptions.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleToggle = (value: string, checked: boolean) => {
    setSelectedValues(prev => 
      checked 
        ? [...prev, value]
        : prev.filter(item => item !== value)
    );
  };
  
  return (
    <div style={{ width: '250px' }}>
      <input
        type="text"
        placeholder="기술 스택 검색..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          marginBottom: '8px'
        }}
      />
      
      <div style={{ 
        maxHeight: '200px', 
        overflowY: 'auto',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}>
        {filteredOptions.length === 0 ? (
          <div style={{ padding: '16px', textAlign: 'center', color: '#666' }}>
            검색 결과가 없습니다
          </div>
        ) : (
          filteredOptions.map(option => (
            <OptionList
              key={option}
              type="checkbox-component"
              checkboxValue={option}
              checkboxChecked={selectedValues.includes(option)}
              onCheckboxChange={(checked) => handleToggle(option, checked)}
            >
              {option}
            </OptionList>
          ))
        )}
      </div>
      
      {selectedValues.length > 0 && (
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#666' }}>
          선택됨: {selectedValues.join(', ')}
        </div>
      )}
    </div>
  );
}
```

## System-01 디자인 특성

### 색상 시스템

- **기본 상태**: `secondary-system01-1-rest` 배경
- **호버 상태**: `secondary-system01-1-hovered` 배경
- **눌림 상태**: `secondary-system01-1-pressed` 배경
- **선택 상태**: `secondary-system01-1-selected` 배경
- **비활성화**: `secondary-system01-1-disabled` 배경 및 텍스트

### 타입별 특징

- **Menu Header**: `caption-1` 텍스트, `bold` 폰트 웨이트
- **일반 옵션**: `body-2` 텍스트, `regular` 폰트 웨이트
- **Radio/Checkbox**: 내장 컴포넌트의 기본 스타일 적용

### 상호작용 패턴

- **클릭**: 선택 상태 변경
- **호버**: 배경색 변화
- **포커스**: 테두리 표시
- **키보드**: 접근성 지원

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

```tsx
// 키보드 내비게이션 지원
<OptionList
  type="single-select"
  onClick={handleSelect}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleSelect();
    }
  }}
>
  키보드 접근 가능한 옵션
</OptionList>
```

### 스크린 리더 지원

```tsx
// Radio 그룹
<div role="radiogroup" aria-labelledby="radio-group-label">
  <div id="radio-group-label">선택 옵션</div>
  {options.map(option => (
    <OptionList
      key={option.value}
      type="radio-component"
      radioName="option-group"
      radioValue={option.value}
      radioChecked={selected === option.value}
      onRadioChange={setSelected}
      aria-label={`${option.label} 선택`}
    >
      {option.label}
    </OptionList>
  ))}
</div>

// Checkbox 그룹
<div role="group" aria-labelledby="checkbox-group-label">
  <div id="checkbox-group-label">기능 설정</div>
  {features.map(feature => (
    <OptionList
      key={feature.value}
      type="checkbox-component"
      checkboxValue={feature.value}
      checkboxChecked={enabled.includes(feature.value)}
      onCheckboxChange={(checked) => toggleFeature(feature.value, checked)}
      aria-label={`${feature.label} ${enabled.includes(feature.value) ? '활성화됨' : '비활성화됨'}`}
    >
      {feature.label}
    </OptionList>
  ))}
</div>
```

### 색상 대비

- **일반 텍스트**: 4.5:1 이상 (WCAG AA)
- **선택된 옵션**: 4.5:1 이상
- **비활성화 옵션**: 3:1 이상
- **포커스 인디케이터**: 3:1 이상

## Foundation 토큰 사용

### 색상 토큰

```css
/* 호버 배경 */
background-color: var(--foundation-foundation-color-secondary-system01-1-hovered);

/* 선택 배경 */
background-color: var(--foundation-foundation-color-secondary-system01-1-selected);

/* 포커스 테두리 */
border-color: var(--foundation-foundation-color-primary-system01-1-rest);
```

### 크기 토큰

```css
/* 높이 */
height: var(--foundation-foundation-sizing-lg); /* 32px */

/* 패딩 */
padding: var(--foundation-foundation-spacing-sm);

/* 간격 */
gap: var(--foundation-foundation-spacing-xs);
```

## 성능 최적화

### 가상화 (많은 옵션)

```tsx
import { FixedSizeList as List } from 'react-window';

function VirtualizedOptions({ options }) {
  const OptionRow = ({ index, style }) => (
    <div style={style}>
      <OptionList
        key={options[index].value}
        type="single-select"
        onClick={() => handleSelect(options[index])}
      >
        {options[index].label}
      </OptionList>
    </div>
  );
  
  return (
    <List
      height={300}
      itemCount={options.length}
      itemSize={32}
    >
      {OptionRow}
    </List>
  );
}
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확하고 간결한 옵션 텍스트 사용
- 적절한 타입 선택 (단일/다중 선택)
- 일관된 옵션 구조 유지
- 키보드 접근성 고려
- 메뉴 헤더로 그룹화

✅ **적절한 사용 예시**
```tsx
// 단일 선택
<OptionList type="single-select" selected={selected === 'option1'}>
  옵션 1
</OptionList>

// 그룹 헤더
<OptionList type="menu-header">
  카테고리
</OptionList>
```

### 주의사항

❌ **DON'T**
- 너무 긴 옵션 텍스트 사용
- 불명확한 선택 상태
- 일관성 없는 타입 혼용
- 접근성 속성 누락

❌ **피해야 할 예시**
```tsx
// 너무 긴 텍스트
<OptionList>
  매우 긴 옵션 텍스트로 인해 레이아웃이 깨지는 경우
</OptionList>

// 불명확한 상태
<OptionList selected={undefined}>
  상태 불명확
</OptionList>
```

### 타입 선택 가이드

- **menu-header**: 카테고리, 그룹 제목
- **single-select**: 단일 선택 옵션
- **radio-component**: 라디오 버튼이 필요한 경우
- **checkbox-component**: 다중 선택이 필요한 경우

## 관련 컴포넌트

- **ComboBox**: OptionList를 옵션으로 사용
- **Radio**: radio-component 타입에서 사용
- **Checkbox**: checkbox-component 타입에서 사용
- **Text**: 옵션 텍스트 렌더링
- **Surface**: 옵션 배경 및 상태 표시

## 참고 자료

- [ARIA Listbox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)
- [Material Design Selection](https://material.io/components/selection-controls)
- [접근 가능한 선택 컨트롤](https://inclusive-components.design/toggle-button/) 