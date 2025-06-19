---
title: 'ComboBox - System 01'
description: 'Professional & Clean 테마의 콤보박스 컴포넌트'
date: '2024-12-28'
category: 'System-01 Components'
tags: ['ComboBox', 'Dropdown', 'Select', 'Search', 'System-01', 'Professional']
version: '1.0.0'
status: 'stable'
---

# ComboBox - System 01

System-01의 ComboBox 컴포넌트는 Professional & Clean 테마에 최적화된 콤보박스입니다. GitHub, 백오피스 환경에서 사용되는 검색 기능과 단일/다중 선택을 지원하는 효율적인 드롭다운 메뉴를 제공합니다.

## 개요

ComboBox 컴포넌트는 Field를 기반으로 하는 선택 가능한 드롭다운 메뉴로, 검색 기능, 단일/다중 선택을 지원하며 선택된 항목을 Chip으로 표시하는 복합 컴포넌트입니다.

### 핵심 특징

- **검색 기능**: 옵션 필터링 및 실시간 검색
- **단일/다중 선택**: 용도에 따른 선택 모드
- **칩 표시**: 다중 선택 시 Chip으로 선택 항목 표시
- **그룹화**: 옵션을 카테고리별로 그룹화
- **방향 설정**: 위/아래 드롭다운 방향 선택
- **Field 통합**: Field 컴포넌트의 모든 기능 활용
- **접근성**: WCAG 2.1 AA 준수 키보드 내비게이션

## Props 인터페이스

```typescript
interface ComboBoxOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}

interface ComboBoxProps {
  // 옵션 설정
  options: ComboBoxOption[];
  value?: string | string[];
  
  // 기능 설정
  multiple?: boolean;
  searchable?: boolean;
  
  // 표시 설정
  placeholder?: string;
  label?: string;
  direction?: 'up' | 'down';
  
  // Field 설정
  fieldVariant?: 'outlined' | 'transparent' | 'filled';
  fieldSize?: 'md' | 'lg' | 'xlg';
  fieldWidth?: 'fit-content' | 'fill-width' | string | number;
  labelPosition?: 'above' | 'before' | 'none';
  leftIcon?: string;
  
  // 상태
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;
  helperText?: string;
  
  // 이벤트 핸들러
  onChange?: (value: string | string[]) => void;
  onSearch?: (searchTerm: string) => void;
  onToggle?: (isOpen: boolean) => void;
}
```

## 기본 사용법

### 단일 선택 ComboBox

```tsx
import { ComboBox } from 'lumir-design-system-01';

function SingleSelect() {
  const [value, setValue] = useState('');
  
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ];
  
  return (
    <ComboBox
      options={options}
      value={value}
      placeholder="프레임워크를 선택하세요"
      label="프레임워크"
      onChange={(newValue) => setValue(newValue as string)}
    />
  );
}
```

### 다중 선택 ComboBox

```tsx
function MultiSelect() {
  const [values, setValues] = useState<string[]>([]);
  
  const options = [
    { value: 'js', label: 'JavaScript' },
    { value: 'ts', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
  ];
  
  return (
    <ComboBox
      options={options}
      value={values}
      multiple
      placeholder="언어를 선택하세요"
      label="프로그래밍 언어"
      onChange={(newValues) => setValues(newValues as string[])}
    />
  );
}
```

### 검색 가능한 ComboBox

```tsx
function SearchableComboBox() {
  const [value, setValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  
  const options = [
    { value: 'react', label: 'React' },
    { value: 'react-native', label: 'React Native' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'vue-native', label: 'Vue Native' },
    { value: 'angular', label: 'Angular' },
    { value: 'ionic', label: 'Ionic' },
  ];
  
  return (
    <ComboBox
      options={options}
      value={value}
      searchable
      placeholder="검색하여 선택하세요"
      label="기술 스택"
      onChange={(newValue) => setValue(newValue as string)}
      onSearch={(term) => setSearchTerm(term)}
    />
  );
}
```

## 기능별 사용법

### 그룹화된 옵션

```tsx
function GroupedOptions() {
  const [value, setValue] = useState('');
  
  const options = [
    { value: 'js', label: 'JavaScript', group: 'Languages' },
    { value: 'ts', label: 'TypeScript', group: 'Languages' },
    { value: 'python', label: 'Python', group: 'Languages' },
    { value: 'react', label: 'React', group: 'Frameworks' },
    { value: 'vue', label: 'Vue.js', group: 'Frameworks' },
    { value: 'angular', label: 'Angular', group: 'Frameworks' },
    { value: 'node', label: 'Node.js', group: 'Runtime' },
    { value: 'deno', label: 'Deno', group: 'Runtime' },
  ];
  
  return (
    <ComboBox
      options={options}
      value={value}
      placeholder="기술을 선택하세요"
      label="기술 스택"
      onChange={(newValue) => setValue(newValue as string)}
    />
  );
}
```

### 위쪽으로 열리는 드롭다운

```tsx
function UpwardDropdown() {
  const [value, setValue] = useState('');
  
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  
  return (
    <div style={{ marginTop: '200px' }}>
      <ComboBox
        options={options}
        value={value}
        direction="up"
        placeholder="위쪽으로 열림"
        label="방향 설정"
        onChange={(newValue) => setValue(newValue as string)}
      />
    </div>
  );
}
```

### 비활성화된 옵션

```tsx
function DisabledOptions() {
  const [value, setValue] = useState('');
  
  const options = [
    { value: 'available', label: 'Available Option' },
    { value: 'disabled', label: 'Disabled Option', disabled: true },
    { value: 'another', label: 'Another Available' },
  ];
  
  return (
    <ComboBox
      options={options}
      value={value}
      placeholder="옵션을 선택하세요"
      label="옵션 상태"
      onChange={(newValue) => setValue(newValue as string)}
    />
  );
}
```

## Field 통합 기능

### Field 스타일 변형

```tsx
function FieldVariants() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ComboBox
        options={options}
        value={value1}
        fieldVariant="outlined"
        placeholder="Outlined"
        label="Outlined ComboBox"
        onChange={(newValue) => setValue1(newValue as string)}
      />
      
      <ComboBox
        options={options}
        value={value2}
        fieldVariant="filled"
        placeholder="Filled"
        label="Filled ComboBox"
        onChange={(newValue) => setValue2(newValue as string)}
      />
      
      <ComboBox
        options={options}
        value={value3}
        fieldVariant="transparent"
        placeholder="Transparent"
        label="Transparent ComboBox"
        onChange={(newValue) => setValue3(newValue as string)}
      />
    </div>
  );
}
```

### Field 크기 및 너비

```tsx
function FieldSizing() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  
  const options = [
    { value: 'small', label: 'Small Option' },
    { value: 'medium', label: 'Medium Option' },
    { value: 'large', label: 'Large Option' },
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ComboBox
        options={options}
        value={value1}
        fieldSize="md"
        fieldWidth="200px"
        placeholder="Medium Size"
        label="크기: Medium"
        onChange={(newValue) => setValue1(newValue as string)}
      />
      
      <ComboBox
        options={options}
        value={value2}
        fieldSize="lg"
        fieldWidth="fill-width"
        placeholder="Large Size"
        label="크기: Large"
        onChange={(newValue) => setValue2(newValue as string)}
      />
      
      <ComboBox
        options={options}
        value={value3}
        fieldSize="xlg"
        fieldWidth="fit-content"
        placeholder="Extra Large Size"
        label="크기: Extra Large"
        onChange={(newValue) => setValue3(newValue as string)}
      />
    </div>
  );
}
```

### 라벨 위치 설정

```tsx
function LabelPositions() {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ComboBox
        options={options}
        value={value1}
        labelPosition="above"
        placeholder="위쪽 라벨"
        label="Above Label"
        onChange={(newValue) => setValue1(newValue as string)}
      />
      
      <ComboBox
        options={options}
        value={value2}
        labelPosition="before"
        placeholder="앞쪽 라벨"
        label="Before Label"
        onChange={(newValue) => setValue2(newValue as string)}
      />
      
      <ComboBox
        options={options}
        value={value3}
        labelPosition="none"
        placeholder="라벨 없음"
        onChange={(newValue) => setValue3(newValue as string)}
      />
    </div>
  );
}
```

## 고급 사용 예제

### 동적 옵션 로딩

```tsx
function DynamicOptions() {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<ComboBoxOption[]>([]);
  const [loading, setLoading] = useState(false);
  
  const fetchOptions = async (searchTerm: string) => {
    setLoading(true);
    try {
      // API 호출 시뮬레이션
      const response = await fetch(`/api/search?q=${searchTerm}`);
      const data = await response.json();
      setOptions(data.map((item: any) => ({
        value: item.id,
        label: item.name,
        group: item.category
      })));
    } catch (error) {
      console.error('옵션 로딩 실패:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleSearch = (searchTerm: string) => {
    if (searchTerm.length >= 2) {
      fetchOptions(searchTerm);
    }
  };
  
  return (
    <ComboBox
      options={options}
      value={value}
      searchable
      placeholder="2글자 이상 입력하여 검색"
      label="동적 검색"
      helperText={loading ? '검색 중...' : '최소 2글자 이상 입력하세요'}
      onChange={(newValue) => setValue(newValue as string)}
      onSearch={handleSearch}
    />
  );
}
```

### 폼 통합

```tsx
function FormIntegration() {
  const [formData, setFormData] = useState({
    framework: '',
    languages: [] as string[],
    experience: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const frameworkOptions = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue.js' },
    { value: 'angular', label: 'Angular' },
  ];
  
  const languageOptions = [
    { value: 'js', label: 'JavaScript' },
    { value: 'ts', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
  ];
  
  const experienceOptions = [
    { value: 'junior', label: '주니어 (1-3년)' },
    { value: 'mid', label: '미드레벨 (3-7년)' },
    { value: 'senior', label: '시니어 (7년+)' },
  ];
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.framework) {
      newErrors.framework = '프레임워크를 선택해주세요';
    }
    
    if (formData.languages.length === 0) {
      newErrors.languages = '최소 하나의 언어를 선택해주세요';
    }
    
    if (!formData.experience) {
      newErrors.experience = '경험 수준을 선택해주세요';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('폼 제출:', formData);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ComboBox
        options={frameworkOptions}
        value={formData.framework}
        placeholder="프레임워크를 선택하세요"
        label="주요 프레임워크"
        required
        errorMessage={errors.framework}
        onChange={(value) => setFormData(prev => ({ ...prev, framework: value as string }))}
      />
      
      <ComboBox
        options={languageOptions}
        value={formData.languages}
        multiple
        placeholder="언어를 선택하세요"
        label="사용 가능한 언어"
        required
        errorMessage={errors.languages}
        onChange={(value) => setFormData(prev => ({ ...prev, languages: value as string[] }))}
      />
      
      <ComboBox
        options={experienceOptions}
        value={formData.experience}
        placeholder="경험 수준을 선택하세요"
        label="경험 수준"
        required
        errorMessage={errors.experience}
        onChange={(value) => setFormData(prev => ({ ...prev, experience: value as string }))}
      />
      
      <button type="submit">제출</button>
    </form>
  );
}
```

### 커스텀 필터링

```tsx
function CustomFiltering() {
  const [value, setValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState<ComboBoxOption[]>([]);
  
  const allOptions = [
    { value: 'react', label: 'React', group: 'Frontend' },
    { value: 'vue', label: 'Vue.js', group: 'Frontend' },
    { value: 'angular', label: 'Angular', group: 'Frontend' },
    { value: 'node', label: 'Node.js', group: 'Backend' },
    { value: 'django', label: 'Django', group: 'Backend' },
    { value: 'rails', label: 'Ruby on Rails', group: 'Backend' },
  ];
  
  const customFilter = (searchTerm: string) => {
    if (!searchTerm) {
      setFilteredOptions(allOptions);
      return;
    }
    
    // 커스텀 필터링 로직
    const filtered = allOptions.filter(option => {
      const matchesLabel = option.label.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGroup = option.group?.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesLabel || matchesGroup;
    });
    
    setFilteredOptions(filtered);
  };
  
  useEffect(() => {
    customFilter('');
  }, []);
  
  return (
    <ComboBox
      options={filteredOptions}
      value={value}
      searchable
      placeholder="라벨이나 그룹으로 검색"
      label="커스텀 필터링"
      helperText="기술명이나 카테고리로 검색 가능"
      onChange={(newValue) => setValue(newValue as string)}
      onSearch={customFilter}
    />
  );
}
```

### 선택 제한

```tsx
function SelectionLimit() {
  const [values, setValues] = useState<string[]>([]);
  const maxSelections = 3;
  
  const options = [
    { value: 'skill1', label: 'JavaScript' },
    { value: 'skill2', label: 'TypeScript' },
    { value: 'skill3', label: 'React' },
    { value: 'skill4', label: 'Vue.js' },
    { value: 'skill5', label: 'Angular' },
    { value: 'skill6', label: 'Node.js' },
  ];
  
  const handleChange = (newValues: string | string[]) => {
    const selectedValues = newValues as string[];
    
    if (selectedValues.length <= maxSelections) {
      setValues(selectedValues);
    }
  };
  
  return (
    <ComboBox
      options={options}
      value={values}
      multiple
      placeholder="최대 3개까지 선택 가능"
      label="핵심 기술 (최대 3개)"
      helperText={`${values.length}/${maxSelections}개 선택됨`}
      errorMessage={values.length >= maxSelections ? '최대 선택 수에 도달했습니다' : undefined}
      onChange={handleChange}
    />
  );
}
```

## System-01 디자인 특성

### 색상 시스템

- **Field 배경**: `secondary-system01-1-rest` 토큰 사용
- **드롭다운 배경**: `secondary-system01-1-rest` 토큰
- **선택된 옵션**: `primary-system01-1-*` 토큰
- **테두리**: `secondary-system01-1-rest` 토큰

### 형태적 특징

- **Border Radius**: `sm` 토큰 (작은 둥근 모서리)
- **간격**: 컴팩트한 `xs`, `sm` 패딩
- **그림자**: 드롭다운에 미묘한 그림자 효과
- **아이콘**: 드롭다운 화살표 및 검색 아이콘

### 상호작용 패턴

- **드롭다운 토글**: 클릭 또는 키보드 (Enter, Space)
- **검색**: 실시간 필터링
- **선택**: 단일 클릭으로 선택/해제
- **칩 제거**: X 버튼 클릭

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

```tsx
// 키보드 내비게이션 지원
<ComboBox
  options={options}
  value={value}
  onKeyDown={(e) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        // 드롭다운 토글
        break;
      case 'Escape':
        // 드롭다운 닫기
        break;
      case 'ArrowDown':
        // 다음 옵션으로 이동
        break;
      case 'ArrowUp':
        // 이전 옵션으로 이동
        break;
    }
  }}
/>
```

### 스크린 리더 지원

```tsx
// 적절한 ARIA 속성 제공
<ComboBox
  options={options}
  value={value}
  aria-label="프레임워크 선택"
  aria-describedby="framework-help"
  role="combobox"
  aria-expanded={isOpen}
  aria-haspopup="listbox"
/>
```

### 색상 대비

- **일반 텍스트**: 4.5:1 이상 (WCAG AA)
- **선택된 옵션**: 4.5:1 이상
- **비활성화 옵션**: 3:1 이상
- **포커스 인디케이터**: 3:1 이상

### 터치 접근성

- **최소 터치 영역**: 44×44px
- **적절한 간격**: 옵션 간 충분한 간격
- **드래그 앤 드롭**: 다중 선택 시 칩 재정렬 지원

## Foundation 토큰 사용

### 색상 토큰

```css
/* 드롭다운 배경 */
background-color: var(--foundation-foundation-color-secondary-system01-1-rest);

/* 테두리 */
border-color: var(--foundation-foundation-color-secondary-system01-1-rest);

/* 선택된 옵션 */
background-color: var(--foundation-foundation-color-primary-system01-1-rest);
```

### 크기 토큰

```css
/* 드롭다운 패딩 */
padding: var(--foundation-foundation-spacing-xs);

/* 옵션 간격 */
gap: var(--foundation-foundation-spacing-xxs);

/* 최대 높이 */
max-height: 200px;
```

### 모서리 토큰

```css
/* 드롭다운 모서리 */
border-radius: var(--foundation-foundation-border-radius-sm);

/* 칩 모서리 */
border-radius: var(--foundation-foundation-border-radius-pill);
```

## 성능 최적화

### 가상화 (많은 옵션)

```tsx
import { FixedSizeList as List } from 'react-window';

function VirtualizedComboBox({ options }) {
  const OptionItem = ({ index, style }) => (
    <div style={style}>
      <OptionList onClick={() => handleSelect(options[index].value)}>
        {options[index].label}
      </OptionList>
    </div>
  );
  
  return (
    <ComboBox
      options={options}
      renderDropdown={({ filteredOptions }) => (
        <List
          height={200}
          itemCount={filteredOptions.length}
          itemSize={40}
        >
          {OptionItem}
        </List>
      )}
    />
  );
}
```

### 디바운싱 검색

```tsx
import { useMemo } from 'react';
import { debounce } from 'lodash';

function DebouncedSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const debouncedSearch = useMemo(
    () => debounce((term: string) => {
      // API 호출 또는 필터링 로직
      performSearch(term);
    }, 300),
    []
  );
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
    debouncedSearch(term);
  };
  
  return (
    <ComboBox
      options={options}
      searchable
      onSearch={handleSearch}
    />
  );
}
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확하고 간결한 옵션 라벨 사용
- 적절한 그룹화로 옵션 정리
- 검색 가능한 옵션이 많을 때 searchable 사용
- 다중 선택 시 선택 개수 제한 고려
- 적절한 플레이스홀더와 라벨 제공

✅ **적절한 사용 예시**
```tsx
// 그룹화된 옵션
<ComboBox
  options={groupedOptions}
  placeholder="기술을 선택하세요"
  label="기술 스택"
  searchable
/>

// 다중 선택 with 제한
<ComboBox
  options={options}
  multiple
  placeholder="최대 3개까지 선택"
  helperText={`${selected.length}/3개 선택됨`}
/>
```

### 주의사항

❌ **DON'T**
- 너무 많은 옵션을 그룹화 없이 제공
- 불명확한 옵션 라벨 사용
- 검색 없이 50개 이상의 옵션 제공
- 다중 선택에서 무제한 선택 허용
- 비일관적인 옵션 구조

❌ **피해야 할 예시**
```tsx
// 너무 많은 옵션
<ComboBox options={hundredsOfOptions} />

// 불명확한 라벨
<ComboBox options={[
  { value: 'opt1', label: 'Option 1' },
  { value: 'opt2', label: 'Option 2' }
]} />
```

### 옵션 수에 따른 가이드

- **1-10개**: 기본 ComboBox
- **10-50개**: 검색 기능 권장
- **50개 이상**: 검색 필수, 그룹화 권장
- **100개 이상**: 가상화 고려

### 선택 모드 가이드

- **단일 선택**: 하나의 값만 필요한 경우
- **다중 선택**: 여러 값이 필요하지만 제한적인 경우
- **태그 입력**: 자유로운 다중 입력이 필요한 경우

## 관련 컴포넌트

- **Field**: ComboBox의 기본 입력 필드
- **OptionList**: 드롭다운 옵션 렌더링
- **Chip**: 다중 선택 시 선택된 항목 표시
- **Label**: 라벨 표시
- **Divider**: 그룹 구분선

## 참고 자료

- [ARIA Combobox Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)
- [Material Design Select](https://material.io/components/menus)
- [접근 가능한 ComboBox](https://inclusive-components.design/a-todo-list/) 