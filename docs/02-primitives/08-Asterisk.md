---
title: "Asterisk 컴포넌트"
component: "Asterisk"
category: "프리미티브"
status: "안정화"
last_updated: "2024-01-15"
related: ["Text", "Frame", "Label"]
---

# Asterisk 컴포넌트

## 📝 개요

Asterisk는 **필수 입력 필드를 표시**하는 전용 프리미티브 컴포넌트입니다. **빨간색 별표(*)** 를 렌더링하며, 폼 라벨과 함께 사용되어 사용자에게 필수 입력 사항을 명확히 전달합니다. **접근성과 일관성**을 보장하는 최소한의 기능에 집중한 순수 컴포넌트입니다.

### 핵심 특징

- **단일 목적**: 필수 입력 표시만을 위한 전용 컴포넌트
- **시각적 일관성**: Foundation 토큰 기반 빨간색 스타일
- **접근성 고려**: 스크린 리더 호환성 및 의미 전달
- **상태 지원**: disabled 상태에서 투명도 조정
- **최소 의존성**: 순수한 HTML span 요소 기반
- **유연한 배치**: 라벨과 함께 다양한 위치에 배치 가능

## 🔧 Props 인터페이스

```typescript
interface AsteriskProps {
  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 추가 CSS 클래스
   */
  className?: string;
  
  // HTML span 요소의 모든 속성 지원
  [key: string]: any;
}
```

### Props 상세 설명

| Prop | 타입 | 기본값 | 설명 |
|------|------|--------|------|
| `disabled` | `boolean` | `false` | 비활성화 상태 (투명도 50% 적용) |
| `className` | `string` | - | 추가 CSS 클래스명 |

## 💻 기본 사용 예시

### 1. 기본 사용법

```jsx
import { Asterisk } from 'lumir-design-system-shared';

// 기본 필수 표시
<Asterisk />

// 비활성화 상태
<Asterisk disabled />

// 추가 클래스 적용
<Asterisk className="custom-asterisk" />
```

### 2. 라벨과 함께 사용

```jsx
import { Frame, Text, Asterisk } from 'lumir-design-system-shared';

function RequiredLabel() {
  return (
    <Frame display="flex" align="flex-start" gap="xxxs">
      <Text variant="body-2" weight="medium">
        이름
      </Text>
      <Asterisk />
    </Frame>
  );
}
```

### 3. 폼 필드와 함께 사용

```jsx
import { Frame, Text, Asterisk, Interactive } from 'lumir-design-system-shared';

function FormField({ required = false, disabled = false }) {
  return (
    <Frame display="flex" direction="column" gap="xs">
      <Frame display="flex" align="flex-start" gap="xxxs">
        <Text variant="body-2" weight="medium">
          이메일 주소
        </Text>
        {required && <Asterisk disabled={disabled} />}
      </Frame>
      
      <Interactive
        as="input"
        type="email"
        placeholder="example@email.com"
        disabled={disabled}
      />
    </Frame>
  );
}
```

## 🚀 고급 사용 예시

### 1. 다양한 정렬 방식

```jsx
import { Frame, Text, Asterisk } from 'lumir-design-system-shared';

function AlignmentExamples() {
  return (
    <Frame display="flex" direction="column" gap="md">
      {/* 상단 정렬 (기본) */}
      <Frame display="flex" align="flex-start" gap="xxxs">
        <Text variant="heading-3" weight="bold">
          큰 제목
        </Text>
        <Asterisk />
      </Frame>
      
      {/* 중앙 정렬 */}
      <Frame display="flex" align="center" gap="xxxs">
        <Text variant="body-2" weight="medium">
          일반 라벨
        </Text>
        <Asterisk />
      </Frame>
      
      {/* 작은 텍스트와 함께 */}
      <Frame display="flex" align="flex-start" gap="xxxs">
        <Text variant="label-2" weight="medium">
          작은 라벨
        </Text>
        <Asterisk />
      </Frame>
    </Frame>
  );
}
```

### 2. 조건부 렌더링

```jsx
function ConditionalAsterisk({ required, disabled }) {
  return (
    <Frame display="flex" align="center" gap="xxxs">
      <Text variant="body-2">사용자 이름</Text>
      {required && <Asterisk disabled={disabled} />}
    </Frame>
  );
}

// 사용 예시
<ConditionalAsterisk required={true} disabled={false} />
<ConditionalAsterisk required={false} disabled={false} />
<ConditionalAsterisk required={true} disabled={true} />
```

### 3. 복합 라벨 구성

```jsx
function ComplexLabel({ title, description, required, disabled }) {
  return (
    <Frame display="flex" direction="column" gap="xs">
      <Frame display="flex" align="flex-start" gap="xxxs">
        <Text variant="body-2" weight="medium">
          {title}
        </Text>
        {required && <Asterisk disabled={disabled} />}
      </Frame>
      
      {description && (
        <Text variant="label-2" color="secondary-system01-2-rest">
          {description}
        </Text>
      )}
    </Frame>
  );
}

// 사용 예시
<ComplexLabel 
  title="비밀번호" 
  description="8자 이상, 영문/숫자/특수문자 포함" 
  required={true} 
  disabled={false}
/>
```

### 4. 폼 섹션에서의 사용

```jsx
function FormSection() {
  const fields = [
    { name: 'name', label: '이름', required: true, disabled: false },
    { name: 'email', label: '이메일', required: true, disabled: false },
    { name: 'phone', label: '전화번호', required: false, disabled: false },
    { name: 'company', label: '회사명', required: false, disabled: true }
  ];

  return (
    <Frame display="flex" direction="column" gap="lg">
      <Text variant="heading-2">사용자 정보</Text>
      
      {fields.map((field) => (
        <Frame key={field.name} display="flex" direction="column" gap="xs">
          <Frame display="flex" align="flex-start" gap="xxxs">
            <Text variant="body-2" weight="medium">
              {field.label}
            </Text>
            {field.required && <Asterisk disabled={field.disabled} />}
          </Frame>
          
          <Interactive
            as="input"
            type="text"
            placeholder={`${field.label}을 입력하세요`}
            disabled={field.disabled}
          />
        </Frame>
      ))}
    </Frame>
  );
}
```

## ♿ 접근성 (Accessibility)

### WCAG 2.1 AA 준수 사항

#### 1. 의미 전달
- **시각적 표시**: 빨간색 별표로 필수 입력 시각적 표시
- **스크린 리더 지원**: `<span>` 요소로 텍스트 내용 전달
- **명확한 의미**: 필수 입력 필드임을 명확히 전달

```jsx
// ✅ 접근성 고려된 사용
<label>
  <Frame display="flex" align="flex-start" gap="xxxs">
    <Text>이름</Text>
    <Asterisk />
  </Frame>
  <input type="text" required aria-required="true" />
</label>

// ❌ 접근성 부족한 사용
<div>
  <span>이름</span><Asterisk />
  <input type="text" />
</div>
```

#### 2. 색상 대비
Foundation 토큰 기반 색상으로 **WCAG AA 기준** 준수:

| 상태 | 색상 토큰 | 배경 대비 | 상태 |
|------|-----------|-----------|------|
| 기본 | `red-light-40` | 4.82:1 | ✅ AA |
| 비활성화 | `red-light-40` (50% 투명도) | 2.41:1 | ⚠️ 보조 표시 |

#### 3. 키보드 접근성
- **포커스 불가**: 장식적 요소로 키보드 포커스를 받지 않음
- **부모 요소 포커스**: 라벨이나 입력 필드의 포커스로 의미 전달
- **논리적 순서**: Tab 순서에 영향을 주지 않음

### 접근성 검증 체크리스트

```jsx
// ✅ 접근성 검증 통과 예시
function AccessibleForm() {
  return (
    <form>
      <fieldset>
        <legend>필수 정보 입력</legend>
        
        <label htmlFor="username">
          <Frame display="flex" align="flex-start" gap="xxxs">
            <Text>사용자명</Text>
            <Asterisk />
          </Frame>
        </label>
        <input 
          id="username"
          type="text" 
          required 
          aria-required="true"
          aria-describedby="username-help"
        />
        <Text id="username-help" variant="label-2">
          * 표시는 필수 입력 항목입니다
        </Text>
        
        <label htmlFor="email">
          <Frame display="flex" align="flex-start" gap="xxxs">
            <Text>이메일</Text>
            <Asterisk />
          </Frame>
        </label>
        <input 
          id="email"
          type="email" 
          required 
          aria-required="true"
        />
      </fieldset>
    </form>
  );
}
```

## 🔍 Foundation 토큰 사용

Asterisk 컴포넌트는 **Foundation 토큰**을 사용합니다:

### 색상 토큰

```css
.asterisk {
  color: var(--foundation-foundation-color-red-light-40);
  font-family: var(--foundation-foundation-font-fontfamily-base);
}

.disabled {
  color: var(--foundation-foundation-color-red-light-40);
  opacity: 0.5;
}
```

### 간격 토큰

```css
.asterisk {
  margin-left: 4px; /* xxxs 간격에 해당 */
}
```

**참고**: 현재 하드코딩된 `4px` 값은 Foundation 토큰으로 개선이 필요합니다:

```css
/* 개선 권장 사항 */
.asterisk {
  margin-left: var(--foundation-foundation-spacing-40-horizontal); /* 4px */
}
```

## 📊 성능 최적화

### 1. 렌더링 최적화
```jsx
// ✅ 최적화된 사용 - 조건부 렌더링
const OptimizedLabel = React.memo(({ children, required, disabled }) => (
  <Frame display="flex" align="center" gap="xxxs">
    <Text variant="body-2">{children}</Text>
    {required && <Asterisk disabled={disabled} />}
  </Frame>
));

// ✅ 리스트에서의 최적화
function OptimizedFormFields({ fields }) {
  return (
    <Frame display="flex" direction="column" gap="md">
      {fields.map((field) => (
        <Frame key={field.id} display="flex" direction="column" gap="xs">
          <OptimizedLabel required={field.required} disabled={field.disabled}>
            {field.label}
          </OptimizedLabel>
          <Interactive as="input" {...field.inputProps} />
        </Frame>
      ))}
    </Frame>
  );
}
```

### 2. Bundle 크기
- **최소 의존성**: 순수 HTML span 요소만 사용
- **CSS 최적화**: 최소한의 스타일 규칙
- **Tree-shaking**: 사용하지 않을 때 번들에서 제외

## 🎯 시스템별 가이드라인

### System-01 (Professional & Clean)
```jsx
// GitHub, 백오피스용 - 명확하고 간결한 표시
<Frame display="flex" align="flex-start" gap="xxxs">
  <Text variant="body-2" weight="medium">필드명</Text>
  <Asterisk />
</Frame>
```

### System-02 (Friendly & Bright)
```jsx
// 커머스, 소비자용 - 친근하고 명확한 표시
<Frame display="flex" align="center" gap="xxxs">
  <Text variant="body-2" weight="medium">필드명</Text>
  <Asterisk />
</Frame>
```

### System-03 (Modern & Software)
```jsx
// Discord, Slack용 - 현대적이고 기능적인 표시
<Frame display="flex" align="flex-start" gap="xxxs">
  <Text variant="body-2" weight="medium">필드명</Text>
  <Asterisk />
</Frame>
```

### System-04 (Aerospace Control)
```jsx
// 위성 컨트롤용 - 명확하고 안정적인 표시
<Frame display="flex" align="flex-start" gap="xxxs">
  <Text variant="body-2" weight="bold">필드명</Text>
  <Asterisk />
</Frame>
```

### System-05 (Aerospace Dashboard)
```jsx
// 우주 항공 대시보드용 - 정밀하고 전문적인 표시
<Frame display="flex" align="flex-start" gap="xxxs">
  <Text variant="body-2" weight="medium">필드명</Text>
  <Asterisk />
</Frame>
```

## 🚫 사용 시 주의사항

### 1. 단일 목적 사용
```jsx
// ✅ 올바른 사용 - 필수 입력 표시
<Frame display="flex" align="center" gap="xxxs">
  <Text>이름</Text>
  <Asterisk />
</Frame>

// ❌ 잘못된 사용 - 장식 목적
<Frame>
  <Asterisk />
  <Text>중요한 내용</Text>
  <Asterisk />
</Frame>
```

### 2. 적절한 위치 배치
```jsx
// ✅ 올바른 사용 - 라벨 바로 옆
<label>
  <Frame display="flex" align="center" gap="xxxs">
    <Text>필드명</Text>
    <Asterisk />
  </Frame>
  <input type="text" required />
</label>

// ❌ 잘못된 사용 - 떨어진 위치
<Frame>
  <Text>필드명</Text>
  <input type="text" required />
  <Asterisk />
</Frame>
```

### 3. 접근성 고려
```jsx
// ✅ 올바른 사용 - 의미 있는 구조
<label htmlFor="field">
  <Frame display="flex" align="center" gap="xxxs">
    <Text>필드명</Text>
    <Asterisk />
  </Frame>
</label>
<input id="field" type="text" required aria-required="true" />

// ❌ 잘못된 사용 - 의미 없는 구조
<div>
  <span>필드명</span>
  <Asterisk />
  <input type="text" />
</div>
```

### 4. 하드코딩 금지
```jsx
// ❌ 절대 금지 - 하드코딩된 스타일
<span style={{ color: 'red' }}>*</span>

// ✅ 올바른 사용 - 컴포넌트 사용
<Asterisk />
```

## 🔧 개선 권장 사항

### 1. Foundation 토큰 완전 적용
현재 일부 하드코딩된 값들을 Foundation 토큰으로 개선:

```css
/* 현재 */
.asterisk {
  margin-left: 4px;
}

/* 개선 권장 */
.asterisk {
  margin-left: var(--foundation-foundation-spacing-40-horizontal);
}
```

### 2. 반응형 지원 고려
필요시 반응형 크기 조정 기능 추가:

```typescript
// 미래 개선 가능성
interface AsteriskProps {
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  className?: string;
}
```

### 3. 접근성 향상
ARIA 속성 추가 고려:

```typescript
// 미래 개선 가능성
interface AsteriskProps {
  'aria-label'?: string;
  disabled?: boolean;
  className?: string;
}
```

## 📚 관련 컴포넌트

- **Text**: 라벨 텍스트와 함께 사용
- **Frame**: 레이아웃 구성에 사용
- **Label**: 복합 라벨 컴포넌트에서 활용
- **Interactive**: 폼 입력 요소와 함께 사용

## 🔗 디자인 토큰 레퍼런스

- [Foundation Colors](../01-core/02-Colors.md#status-colors)
- [Foundation Typography](../01-core/04-Typography.md)
- [Foundation Spacing](../01-core/03-Spacing.md) 