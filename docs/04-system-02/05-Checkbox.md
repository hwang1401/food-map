---
title: 'Checkbox - System 02'
description: 'Friendly & Bright 테마의 체크박스 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['Checkbox', 'Input', 'Selection', 'Form', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# Checkbox - System 02

System-02의 Checkbox 컴포넌트는 Friendly & Bright 테마에 최적화된 체크박스입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 다중 선택이나 옵션 설정을 위한 입력 요소를 제공합니다.

## 개요

Checkbox 컴포넌트는 사용자가 여러 옵션 중 하나 이상을 선택할 수 있는 입력 컴포넌트로, Surface, Frame, Icon과 함께 Label 컴포넌트를 조합하여 완전한 체크박스 인터페이스를 제공합니다.

### 핵심 특징

- **3가지 상태**: unchecked, checked, indeterminate
- **4가지 인터랙션 상태**: rest, hovered, pressed, disabled
- **라벨 통합**: Label 컴포넌트 완전 통합
- **접근성 지원**: 네이티브 input과 커스텀 디자인 조합
- **더 둥근 모서리**: xl radius로 친근한 느낌
- **프리미티브 조합**: Surface + Frame + Icon + Label

## Props 인터페이스

```typescript
interface CheckboxProps {
  // 상태
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  
  // 라벨
  label?: string;
  showLabel?: boolean;
  
  // Form 관련
  name?: string;
  value?: string;
  
  // 이벤트
  onChange?: (checked: boolean) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  // 스타일
  className?: string;
  style?: React.CSSProperties;
}
```

## 기본 사용법

### 기본 체크박스

```tsx
import { Checkbox } from 'lumir-design-system-02';

function BasicCheckbox() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Checkbox
      label="기본 체크박스"
      checked={checked}
      onChange={setChecked}
    />
  );
}
```

### 라벨 없는 체크박스

```tsx
function NoLabelCheckbox() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Checkbox
      checked={checked}
      onChange={setChecked}
      showLabel={false}
      aria-label="라벨 없는 체크박스"
    />
  );
}
```

### 비활성화 상태

```tsx
function DisabledCheckboxes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Checkbox
        label="비활성화 (체크 안됨)"
        checked={false}
        disabled
      />
      <Checkbox
        label="비활성화 (체크됨)"
        checked={true}
        disabled
      />
    </div>
  );
}
```

## 중간 상태 (Indeterminate)

### 부모-자식 체크박스

```tsx
function IndeterminateCheckbox() {
  const [parentChecked, setParentChecked] = useState(false);
  const [childrenChecked, setChildrenChecked] = useState([false, false, false]);
  
  const handleParentChange = (checked: boolean) => {
    setParentChecked(checked);
    setChildrenChecked([checked, checked, checked]);
  };
  
  const handleChildChange = (index: number, checked: boolean) => {
    const newChildren = [...childrenChecked];
    newChildren[index] = checked;
    setChildrenChecked(newChildren);
    
    const checkedCount = newChildren.filter(Boolean).length;
    if (checkedCount === 0) {
      setParentChecked(false);
    } else if (checkedCount === newChildren.length) {
      setParentChecked(true);
    } else {
      setParentChecked(false); // indeterminate는 부모에서 계산
    }
  };
  
  const isIndeterminate = childrenChecked.some(Boolean) && !childrenChecked.every(Boolean);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Checkbox
        label="전체 선택"
        checked={parentChecked && childrenChecked.every(Boolean)}
        indeterminate={isIndeterminate}
        onChange={handleParentChange}
      />
      
      <div style={{ marginLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Checkbox
          label="옵션 1"
          checked={childrenChecked[0]}
          onChange={(checked) => handleChildChange(0, checked)}
        />
        <Checkbox
          label="옵션 2"
          checked={childrenChecked[1]}
          onChange={(checked) => handleChildChange(1, checked)}
        />
        <Checkbox
          label="옵션 3"
          checked={childrenChecked[2]}
          onChange={(checked) => handleChildChange(2, checked)}
        />
      </div>
    </div>
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **체크 안됨**: `secondary-system02-1-rest` 배경, `secondary-system02-1-rest` 테두리
- **체크됨**: `primary-system02-1-rest` 배경, `primary-system02-oncolor` 아이콘
- **중간 상태**: `primary-system02-1-rest` 배경, 작은 막대 표시
- **비활성화**: `-disabled` 토큰 사용

### 형태적 특징 (더 친근한 디자인)

- **Border Radius**: `xl` 토큰 (더 둥근 모서리)
- **크기**: 20×20px (터치 친화적 크기)
- **아이콘**: LineIcons 체크마크, xs 크기
- **라벨 간격**: sm 간격 (8px)

## Foundation 토큰 사용

### 색상 토큰

```css
/* 체크 안된 상태 */
background-color: var(--foundation-foundation-color-secondary-system02-1-rest);
border-color: var(--foundation-foundation-color-secondary-system02-1-rest);

/* 체크된 상태 */
background-color: var(--foundation-foundation-color-primary-system02-1-rest);
color: var(--foundation-foundation-color-primary-system02-oncolor);
```

### 크기 토큰

```css
/* Border Radius */
border-radius: var(--foundation-foundation-border-radius-xl);

/* 간격 */
gap: var(--foundation-foundation-spacing-sm);
```

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

```tsx
// 네이티브 input 사용으로 키보드 접근성 자동 지원
<Checkbox
  label="키보드 접근 가능"
  checked={checked}
  onChange={setChecked}
  onFocus={() => console.log('포커스')}
  onBlur={() => console.log('블러')}
/>
```

### 스크린 리더 지원

```tsx
// 적절한 라벨과 상태 정보
<Checkbox
  label="이용약관 동의"
  checked={agreed}
  onChange={setAgreed}
  aria-describedby="terms-description"
/>
<div id="terms-description">
  서비스 이용을 위해 필수로 동의해야 합니다.
</div>
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확하고 간결한 라벨 사용
- 관련된 옵션들을 그룹화
- 필수/선택 여부 명시
- 적절한 기본값 설정

✅ **커머스 환경 최적화**
```tsx
// 배송 옵션
<Checkbox label="무료배송 (5만원 이상)" />

// 필터 옵션
<Checkbox label="할인상품만 보기" />

// 약관 동의
<Checkbox label="개인정보 처리방침 동의 (필수)" />
```

### 주의사항

❌ **DON'T**
- 너무 긴 라벨 텍스트 사용
- 모호한 의미의 라벨
- 필수/선택 구분 없이 사용
- 접근성 속성 누락

## 관련 컴포넌트

- **Radio**: 단일 선택 입력
- **Label**: 체크박스 라벨
- **Button**: 폼 제출 버튼
- **Surface**: 체크박스 배경
- **Icon**: 체크마크 아이콘

## 참고 자료

- [Checkbox Design Best Practices](https://uxplanet.org/checkbox-design-best-practices-9d11e2f8e7a7)
- [Accessible Checkboxes](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- [Form Design Guidelines](https://uxdesign.cc/design-better-forms-96fadca0f49c) 