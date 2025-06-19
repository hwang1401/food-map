---
title: 'Label - System 01'
description: 'Professional & Clean 테마의 폼 라벨 컴포넌트'
date: '2024-12-28'
category: 'System-01 Components'
tags: ['Label', 'Form', 'Accessibility', 'System-01', 'Professional']
version: '1.0.0'
status: 'stable'
---

# Label - System 01

System-01의 Label 컴포넌트는 Professional & Clean 테마에 최적화된 폼 라벨입니다. GitHub, 백오피스 환경에서 사용되는 명확하고 효율적인 라벨 디자인을 제공합니다.

## 개요

Label 컴포넌트는 폼 요소에 사용되는 라벨로, Text와 Asterisk 프리미티브 컴포넌트를 조합하여 접근성이 뛰어난 라벨 경험을 제공합니다.

### 핵심 특징

- **3가지 크기**: sm(12px), md(14px), lg(16px)
- **3가지 폰트 두께**: regular, medium, bold
- **필수 입력 표시**: 빨간색 별표(*) 지원
- **정렬 옵션**: top, center 정렬
- **상태 관리**: rest, disabled 상태
- **접근성**: 시멘틱 HTML label 요소 사용
- **프리미티브 조합**: Text + Asterisk 컴포넌트 활용

## Props 인터페이스

```typescript
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  // 크기 설정
  size?: 'sm' | 'md' | 'lg';
  
  // 폰트 두께
  type?: 'regular' | 'medium' | 'bold';
  
  // 상태
  disabled?: boolean;
  
  // 필수 입력 표시
  asterisk?: boolean;
  
  // 별표 정렬
  align?: 'top' | 'center';
  
  // 인터랙션 상태
  interactionState?: 'rest' | 'hovered' | 'pressed' | 'disabled';
  
  // 추가 클래스
  className?: string;
}
```

## 기본 사용법

### 기본 라벨

```tsx
import { Label } from 'lumir-design-system-01';

function BasicLabel() {
  return (
    <Label>이름</Label>
  );
}
```

### 필수 입력 라벨

```tsx
function RequiredLabel() {
  return (
    <Label asterisk type="medium">
      이메일 주소
    </Label>
  );
}
```

### 비활성화 라벨

```tsx
function DisabledLabel() {
  return (
    <Label disabled>
      비활성화된 필드
    </Label>
  );
}
```

## 크기 변형

### 작은 크기

```tsx
function SmallLabel() {
  return (
    <Label size="sm" asterisk>
      작은 라벨
    </Label>
  );
}
```

### 중간 크기 (기본)

```tsx
function MediumLabel() {
  return (
    <Label size="md" asterisk>
      중간 라벨
    </Label>
  );
}
```

### 큰 크기

```tsx
function LargeLabel() {
  return (
    <Label size="lg" asterisk>
      큰 라벨
    </Label>
  );
}
```

## 폰트 두께 변형

### 일반 두께 (기본)

```tsx
function RegularLabel() {
  return (
    <Label type="regular">
      일반 두께 라벨
    </Label>
  );
}
```

### 중간 두께

```tsx
function MediumLabel() {
  return (
    <Label type="medium" asterisk>
      중간 두께 라벨
    </Label>
  );
}
```

### 굵은 두께

```tsx
function BoldLabel() {
  return (
    <Label type="bold">
      굵은 두께 라벨
    </Label>
  );
}
```

## 정렬 옵션

### 상단 정렬 (기본)

```tsx
function TopAlignLabel() {
  return (
    <Label align="top" asterisk>
      상단 정렬 라벨
    </Label>
  );
}
```

### 중앙 정렬

```tsx
function CenterAlignLabel() {
  return (
    <Label align="center" asterisk>
      중앙 정렬 라벨
    </Label>
  );
}
```

## 폼과 함께 사용

### 기본 폼 라벨

```tsx
function FormWithLabels() {
  return (
    <form>
      <div style={{ marginBottom: '16px' }}>
        <Label htmlFor="name" asterisk type="medium">
          이름
        </Label>
        <input id="name" type="text" required />
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <Label htmlFor="email" asterisk type="medium">
          이메일
        </Label>
        <input id="email" type="email" required />
      </div>
      
      <div style={{ marginBottom: '16px' }}>
        <Label htmlFor="phone">
          전화번호 (선택사항)
        </Label>
        <input id="phone" type="tel" />
      </div>
    </form>
  );
}
```

### Field 컴포넌트와 함께

```tsx
import { Field } from 'lumir-design-system-01';

function FieldWithCustomLabel() {
  return (
    <div>
      <Label htmlFor="custom-field" size="lg" type="bold" asterisk>
        중요한 입력 필드
      </Label>
      <Field
        id="custom-field"
        labelPosition="none"
        placeholder="값을 입력하세요"
        required
      />
    </div>
  );
}
```

## 고급 사용 예제

### 동적 필수 표시

```tsx
function DynamicRequiredLabel() {
  const [isRequired, setIsRequired] = useState(false);
  
  return (
    <div>
      <Label asterisk={isRequired} type={isRequired ? 'medium' : 'regular'}>
        동적 필수 필드
      </Label>
      <button onClick={() => setIsRequired(!isRequired)}>
        {isRequired ? '선택사항으로 변경' : '필수로 변경'}
      </button>
    </div>
  );
}
```

### 상태별 라벨 그룹

```tsx
function LabelStates() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Label size="md" type="regular">
        일반 상태
      </Label>
      
      <Label size="md" type="medium" asterisk>
        필수 입력
      </Label>
      
      <Label size="md" type="regular" disabled>
        비활성화 상태
      </Label>
      
      <Label size="md" type="bold">
        강조 라벨
      </Label>
    </div>
  );
}
```

### 크기별 라벨 그룹

```tsx
function LabelSizes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Label size="sm" asterisk>
        작은 크기 (12px)
      </Label>
      
      <Label size="md" asterisk>
        중간 크기 (14px)
      </Label>
      
      <Label size="lg" asterisk>
        큰 크기 (16px)
      </Label>
    </div>
  );
}
```

### 복합 폼 라벨

```tsx
function ComplexFormLabels() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      <div>
        <Label htmlFor="firstName" size="md" type="medium" asterisk>
          이름
        </Label>
        <input id="firstName" type="text" required />
      </div>
      
      <div>
        <Label htmlFor="lastName" size="md" type="medium" asterisk>
          성
        </Label>
        <input id="lastName" type="text" required />
      </div>
      
      <div style={{ gridColumn: 'span 2' }}>
        <Label htmlFor="address" size="lg" type="bold" asterisk>
          주소
        </Label>
        <input id="address" type="text" required />
      </div>
      
      <div>
        <Label htmlFor="city" size="sm">
          도시
        </Label>
        <input id="city" type="text" />
      </div>
      
      <div>
        <Label htmlFor="zipCode" size="sm">
          우편번호
        </Label>
        <input id="zipCode" type="text" />
      </div>
    </div>
  );
}
```

## System-01 디자인 특성

### 색상 시스템

- **기본 텍스트**: `secondary-system01-1-rest` 토큰
- **비활성화**: `secondary-system01-1-disabled` 토큰
- **필수 표시**: `error-1-rest` 토큰 (빨간색 별표)

### 타이포그래피 매핑

- **sm (12px)**: `label-2` variant 사용
- **md (14px)**: `body-2` variant 사용
- **lg (16px)**: `heading-3` variant 사용

### 폰트 두께 매핑

- **regular**: `400` weight
- **medium**: `500` weight  
- **bold**: `600`(lg) / `700`(md,sm) weight

### 간격 시스템

- **별표 간격**: `xxxs` gap 토큰 사용
- **정렬**: flexbox 기반 top/center 정렬

## 접근성 (WCAG 2.1 AA)

### 시멘틱 HTML

```tsx
// 올바른 라벨 연결
<Label htmlFor="email">이메일</Label>
<input id="email" type="email" />

// 또는 라벨 내부에 input 포함
<Label>
  이메일
  <input type="email" />
</Label>
```

### 스크린 리더 지원

- **시멘틱 요소**: HTML `<label>` 요소 사용
- **자동 연결**: `htmlFor` 속성으로 입력 필드와 자동 연결
- **필수 표시**: 별표(*)는 시각적 표시이며, `required` 속성으로 의미 전달

### 색상 대비

- **일반 텍스트**: 4.5:1 이상 (WCAG AA)
- **비활성화 텍스트**: 3:1 이상
- **필수 표시 별표**: 4.5:1 이상 (빨간색)

### 키보드 접근성

- **포커스 없음**: 라벨 자체는 포커스 대상이 아님
- **연결된 입력으로 포커스**: 라벨 클릭 시 연결된 입력 필드로 포커스 이동

## Foundation 토큰 사용

### 색상 토큰

```css
/* 기본 텍스트 색상 */
color: var(--foundation-foundation-color-secondary-system01-1-rest);

/* 비활성화 텍스트 색상 */
color: var(--foundation-foundation-color-secondary-system01-1-disabled);

/* 필수 표시 별표 색상 (Asterisk 컴포넌트) */
color: var(--foundation-foundation-color-error-1-rest);
```

### 타이포그래피 토큰

```css
/* 작은 크기 (12px) */
font-size: var(--foundation-foundation-font-fontsize-120);
line-height: var(--foundation-foundation-font-lineheight-120);

/* 중간 크기 (14px) */
font-size: var(--foundation-foundation-font-fontsize-140);
line-height: var(--foundation-foundation-font-lineheight-140);

/* 큰 크기 (16px) */
font-size: var(--foundation-foundation-font-fontsize-160);
line-height: var(--foundation-foundation-font-lineheight-160);
```

### 간격 토큰

```css
/* 별표와 텍스트 간격 */
gap: var(--foundation-foundation-spacing-xxxs);
```

## 성능 최적화

### 메모이제이션

```tsx
import { memo } from 'react';

const OptimizedLabel = memo(Label);

// 불필요한 리렌더링 방지
function FormComponent() {
  const [value, setValue] = useState('');
  
  return (
    <div>
      <OptimizedLabel htmlFor="input" asterisk>
        변경되지 않는 라벨
      </OptimizedLabel>
      <input 
        id="input"
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
      />
    </div>
  );
}
```

### 조건부 렌더링 최적화

```tsx
function ConditionalLabel({ isRequired, children }) {
  // asterisk prop 변경을 최소화
  return (
    <Label 
      asterisk={isRequired} 
      type={isRequired ? 'medium' : 'regular'}
    >
      {children}
    </Label>
  );
}
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확하고 간결한 라벨 텍스트 사용
- 필수 필드에는 asterisk 속성 사용
- htmlFor 속성으로 입력 필드와 연결
- 일관된 크기와 두께 사용
- 의미에 맞는 폰트 두께 선택

✅ **적절한 사용 예시**
```tsx
// 명확한 라벨과 필수 표시
<Label htmlFor="email" asterisk type="medium">
  이메일 주소
</Label>
<input id="email" type="email" required />
```

### 주의사항

❌ **DON'T**
- 라벨 없이 플레이스홀더만 사용
- 모호하거나 긴 라벨 텍스트
- 불필요한 굵은 폰트 남용
- 입력 필드와 연결하지 않은 라벨

❌ **피해야 할 예시**
```tsx
// 입력 필드와 연결되지 않은 라벨
<Label>이메일</Label>
<input type="email" /> // id/htmlFor 연결 없음

// 모호한 라벨
<Label>정보</Label> // 어떤 정보인지 불명확
```

### 크기 선택 가이드

- **sm**: 보조 정보, 캡션 라벨
- **md**: 일반적인 폼 라벨 (가장 많이 사용)
- **lg**: 중요한 섹션 라벨, 그룹 제목

### 폰트 두께 선택 가이드

- **regular**: 일반적인 라벨
- **medium**: 필수 입력 라벨, 강조가 필요한 라벨
- **bold**: 섹션 제목, 매우 중요한 라벨

## 관련 컴포넌트

- **Asterisk**: 필수 입력 표시 (*)
- **Text**: 텍스트 렌더링
- **Field**: 입력 필드 (내장 라벨 포함)
- **Surface**: 색상 및 테마 적용

## 참고 자료

- [WCAG 2.1 라벨 가이드라인](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html)
- [HTML Label 요소 명세](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
- [접근 가능한 폼 라벨](https://webaim.org/techniques/forms/controls) 