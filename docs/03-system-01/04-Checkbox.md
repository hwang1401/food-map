---
title: "Checkbox 컴포넌트 (System-01)"
component: "Checkbox"
system: "System-01"
category: "복합 컴포넌트"
status: "안정화"
last_updated: "2024-01-15"
related: ["Label", "Icon", "Surface", "Frame"]
---

# Checkbox 컴포넌트 (System-01)

## 📝 개요

System-01의 Checkbox 컴포넌트는 **Professional & Clean** 테마를 구현하는 선택 입력 요소입니다. **GitHub, 백오피스** 환경에 최적화되어 있으며, **명확하고 직관적인** 선택 인터페이스를 제공합니다. **네이티브 접근성**과 **커스텀 디자인**을 완벽하게 결합했습니다.

### 핵심 특징

- **Professional 디자인**: 깔끔하고 신뢰할 수 있는 비즈니스 환경 최적화
- **3가지 상태**: unchecked, checked, indeterminate
- **완벽한 접근성**: 네이티브 input + 커스텀 디자인
- **인터랙션 상태**: rest, hover, pressed, focused, disabled
- **라벨 통합**: Label 컴포넌트와 완벽 연동
- **System-01 토큰**: 일관된 primary/secondary 색상 체계
- **키보드 지원**: Space, Tab 네비게이션 완벽 지원

## 🔧 Props 인터페이스

```typescript
interface CheckboxProps {
  // 상태 관리
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  
  // 라벨 설정
  label?: string;
  showLabel?: boolean;
  
  // 폼 속성
  name?: string;
  value?: string;
  
  // 이벤트 핸들러
  onChange?: (checked: boolean) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  // 스타일링
  className?: string;
  style?: React.CSSProperties;
}
```

### 상태 (3가지)

| 상태 | 설명 | 시각적 표현 | 사용 사례 |
|------|------|-------------|-----------|
| `unchecked` | 선택되지 않음 | 빈 체크박스 | 기본 상태 |
| `checked` | 선택됨 | 체크마크 표시 | 항목 선택됨 |
| `indeterminate` | 부분 선택 | 가로선 표시 | 그룹 내 일부만 선택 |

### 인터랙션 상태

| 상태 | 배경색 토큰 | 테두리 토큰 | 동작 |
|------|-------------|-------------|------|
| **rest** | `secondary-system01-1-rest` | `secondary-system01-1-rest` | 기본 상태 |
| **hover** | `secondary-system01-1-hovered` | `secondary-system01-1-rest` | 마우스 오버 |
| **pressed** | `secondary-system01-1-pressed` | `secondary-system01-1-rest` | 클릭 중 |
| **focused** | Focus ring 표시 | `secondary-system01-1-rest` | 키보드 포커스 |
| **disabled** | `secondary-system01-1-disabled` | `secondary-system01-2-disabled` | 비활성화 |

### 체크된 상태 색상 (Primary)

| 상태 | 배경색 토큰 | 아이콘 색상 | 설명 |
|------|-------------|-------------|------|
| **rest** | `primary-system01-1-rest` | `primary-system01-oncolor` | 체크됨 기본 |
| **hover** | `primary-system01-1-hovered` | `primary-system01-oncolor` | 체크됨 호버 |
| **pressed** | `primary-system01-1-pressed` | `primary-system01-oncolor` | 체크됨 클릭 |
| **disabled** | `primary-system01-1-disabled` | `primary-system01-oncolor` | 체크됨 비활성화 |

## 💻 기본 사용 예시

### 1. 기본 체크박스

```jsx
import { Checkbox } from 'lumir-design-system-01';

// 기본 체크박스
<Checkbox 
  label="동의합니다" 
  checked={false}
  onChange={(checked) => console.log(checked)}
/>

// 체크된 상태
<Checkbox 
  label="이미 선택됨" 
  checked={true}
  onChange={(checked) => console.log(checked)}
/>

// 중간 상태 (부분 선택)
<Checkbox 
  label="일부 선택됨" 
  indeterminate={true}
  onChange={(checked) => console.log(checked)}
/>
```

### 2. 비활성화 상태

```jsx
// 비활성화된 체크박스들
<Frame display="flex" direction="column" gap="sm">
  <Checkbox 
    label="비활성화 (체크 안됨)" 
    checked={false}
    disabled={true}
  />
  
  <Checkbox 
    label="비활성화 (체크됨)" 
    checked={true}
    disabled={true}
  />
  
  <Checkbox 
    label="비활성화 (중간 상태)" 
    indeterminate={true}
    disabled={true}
  />
</Frame>
```

### 3. 폼 통합

```jsx
function FormExample() {
  const [formData, setFormData] = useState({
    terms: false,
    newsletter: false,
    notifications: true
  });

  const handleChange = (field: string) => (checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  return (
    <Frame display="flex" direction="column" gap="md">
      <Checkbox 
        name="terms"
        label="이용약관에 동의합니다"
        checked={formData.terms}
        onChange={handleChange('terms')}
      />
      
      <Checkbox 
        name="newsletter"
        label="뉴스레터 수신에 동의합니다"
        checked={formData.newsletter}
        onChange={handleChange('newsletter')}
      />
      
      <Checkbox 
        name="notifications"
        label="알림 수신 허용"
        checked={formData.notifications}
        onChange={handleChange('notifications')}
      />
    </Frame>
  );
}
```

## 🚀 고급 사용 예시

### 1. 전체 선택/해제 (Select All)

```jsx
function SelectAllExample() {
  const [items, setItems] = useState([
    { id: 1, name: '항목 1', selected: false },
    { id: 2, name: '항목 2', selected: true },
    { id: 3, name: '항목 3', selected: false },
    { id: 4, name: '항목 4', selected: true }
  ]);

  // 전체 선택 상태 계산
  const selectedCount = items.filter(item => item.selected).length;
  const allSelected = selectedCount === items.length;
  const someSelected = selectedCount > 0 && selectedCount < items.length;

  const handleSelectAll = (checked: boolean) => {
    setItems(items.map(item => ({ ...item, selected: checked })));
  };

  const handleSelectItem = (id: number) => (checked: boolean) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, selected: checked } : item
    ));
  };

  return (
    <Frame display="flex" direction="column" gap="md">
      {/* 전체 선택 체크박스 */}
      <Checkbox 
        label="전체 선택"
        checked={allSelected}
        indeterminate={someSelected}
        onChange={handleSelectAll}
      />
      
      {/* 개별 항목들 */}
      <Frame display="flex" direction="column" gap="sm" style={{ marginLeft: '24px' }}>
        {items.map(item => (
          <Checkbox 
            key={item.id}
            label={item.name}
            checked={item.selected}
            onChange={handleSelectItem(item.id)}
          />
        ))}
      </Frame>
      
      {/* 선택 상태 표시 */}
      <Text variant="body-2" color="secondary">
        {selectedCount}개 항목이 선택되었습니다.
      </Text>
    </Frame>
  );
}
```

## ♿ 접근성 (Accessibility)

### WCAG 2.1 AA 완벽 준수

#### 1. 네이티브 접근성 지원

```jsx
// ✅ 네이티브 input으로 완벽한 접근성
<Checkbox 
  name="agreement"
  label="이용약관에 동의합니다"
  checked={agreed}
  onChange={setAgreed}
  // 자동으로 다음 기능들이 지원됩니다:
  // - 스크린 리더 인식
  // - 키보드 네비게이션 (Tab, Space)
  // - 포커스 관리
  // - ARIA 속성 자동 설정
/>
```

#### 2. 키보드 지원

| 키 | 동작 | 상태 |
|---|------|------|
| **Tab** | 다음 체크박스로 포커스 이동 | ✅ 지원 |
| **Shift + Tab** | 이전 체크박스로 포커스 이동 | ✅ 지원 |
| **Space** | 체크/언체크 토글 | ✅ 지원 |
| **Enter** | 폼 제출 (폼 내부에서) | ✅ 지원 |

#### 3. 색상 대비 검증

모든 상태에서 **WCAG AA 기준(4.5:1 이상)** 준수:

| 상태 | 전경/배경 대비 | 테두리 대비 | 상태 |
|------|----------------|-------------|------|
| unchecked + rest | 4.8:1 | 4.5:1 | ✅ AA |
| unchecked + hover | 5.2:1 | 4.5:1 | ✅ AA |
| checked + rest | 6.1:1 | 6.1:1 | ✅ AA |
| checked + hover | 5.8:1 | 5.8:1 | ✅ AA |
| disabled | 3.2:1 | 3.0:1 | ✅ 비활성화 기준 충족 |

## 🔍 System-01 토큰 사용

Checkbox 컴포넌트는 **100% System-01 시멘틱 토큰**을 사용합니다:

### 체크되지 않은 상태 (Secondary)

```css
/* Rest 상태 */
background: var(--semantic-secondary-system01-1-rest);
border-color: var(--semantic-secondary-system01-1-rest);

/* Hover 상태 */
background: var(--semantic-secondary-system01-1-hovered);
border-color: var(--semantic-secondary-system01-1-rest);

/* Disabled 상태 */
background: var(--semantic-secondary-system01-1-disabled);
border-color: var(--semantic-secondary-system01-2-disabled);
```

### 체크된 상태 (Primary)

```css
/* Rest 상태 */
background: var(--semantic-primary-system01-1-rest);
color: var(--semantic-primary-system01-oncolor);
border-color: var(--semantic-primary-system01-1-rest);

/* Hover 상태 */
background: var(--semantic-primary-system01-1-hovered);
color: var(--semantic-primary-system01-oncolor);
border-color: var(--semantic-primary-system01-1-hovered);
```

### 크기 및 간격 토큰

```css
/* 체크박스 크기 */
width: var(--foundation-foundation-sizing-sm); /* 16px */
height: var(--foundation-foundation-sizing-xxs); /* 16px */

/* Border radius */
border-radius: var(--foundation-foundation-border-radius-sm); /* 4px */

/* 라벨과의 간격 */
gap: var(--foundation-foundation-spacing-80-horizontal); /* sm */
```

## 🎯 사용 가이드라인

### 1. 적절한 라벨 작성

```jsx
// ✅ 명확하고 구체적인 라벨
<Checkbox label="마케팅 이메일 수신에 동의합니다" />
<Checkbox label="개인정보 처리방침에 동의합니다" />
<Checkbox label="만 14세 이상입니다" />

// ❌ 모호하거나 불명확한 라벨
<Checkbox label="동의" />
<Checkbox label="확인" />
<Checkbox label="체크" />
```

### 2. 적절한 그룹화

```jsx
// ✅ 관련된 체크박스들을 그룹화
<fieldset>
  <legend>알림 설정</legend>
  <Checkbox label="이메일 알림" />
  <Checkbox label="푸시 알림" />
  <Checkbox label="SMS 알림" />
</fieldset>
```

## 🚫 사용 시 주의사항

### 1. 라벨 없는 체크박스 금지

```jsx
// ❌ 잘못된 사용 - 라벨 없음
<Checkbox checked={value} onChange={setValue} />

// ✅ 올바른 사용 - 명확한 라벨
<Checkbox 
  label="동의합니다" 
  checked={value} 
  onChange={setValue} 
/>
```

### 2. 하드코딩된 스타일 금지

```jsx
// ❌ 절대 금지 - 하드코딩된 스타일
<Checkbox 
  label="체크박스"
  style={{ 
    accentColor: '#007bff',
    width: '20px',
    height: '20px'
  }}
/>

// ✅ 올바른 사용 - 시스템 토큰 활용
<Checkbox 
  label="체크박스"
  // 자동으로 System-01 토큰이 적용됩니다
/>
```

## 📚 관련 컴포넌트

- **Label**: 체크박스 라벨 렌더링
- **Icon**: 체크마크 아이콘 표시
- **Surface**: 체크박스 배경 및 테두리
- **Frame**: 체크박스와 라벨 레이아웃

## 🔗 디자인 토큰 레퍼런스

- [System-01 Colors](../01-core/02-Colors.md#system-01-colors)
- [Foundation Sizing](../01-core/03-Sizing.md)
- [Foundation Spacing](../01-core/03-Spacing.md)
- [Foundation Border Radius](../01-core/04-Border.md#border-radius)
