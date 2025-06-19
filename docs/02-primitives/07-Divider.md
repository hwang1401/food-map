---
title: "Divider 컴포넌트"
component: "Divider"
category: "프리미티브"
status: "안정화"
last_updated: "2024-01-15"
related: ["Frame", "Surface", "Text"]
---

# Divider 컴포넌트

## 📝 개요

Divider는 **콘텐츠를 시각적으로 구분**하는 프리미티브 컴포넌트입니다. **수평/수직 방향**을 지원하며, 다양한 **두께, 색상, 스타일**을 제공합니다. 모든 시각적 속성은 **Foundation 토큰**만을 사용하여 일관성을 보장합니다.

### 핵심 특징

- **양방향 지원**: 수평(horizontal) 및 수직(vertical) 방향 구분선
- **3가지 두께**: thin(1px), medium(2px), thick(3px)
- **11개 색상 옵션**: 시멘틱 토큰 기반 색상 시스템
- **3가지 스타일**: solid, dashed, dotted
- **유연한 간격 제어**: spacing, spacingX, spacingY 프로퍼티
- **커스텀 길이**: 픽셀, 퍼센트, rem 등 다양한 단위 지원
- **반응형 지원**: 모든 속성에서 ResponsiveValue 사용 가능

## 🔧 Props 인터페이스

```typescript
interface DividerProps extends Omit<React.HTMLAttributes<HTMLHRElement>, 'color'> {
  // 방향 및 외형
  orientation?: 'horizontal' | 'vertical';
  thickness?: 'thin' | 'medium' | 'thick';
  color?: DividerColor;
  variant?: 'solid' | 'dashed' | 'dotted';
  
  // 크기 및 간격
  length?: ResponsiveOrSingle<string | number>;
  spacing?: ResponsiveOrSingle<SpacingValue>;
  spacingY?: ResponsiveOrSingle<SpacingValue>;
  spacingX?: ResponsiveOrSingle<SpacingValue>;
  
  // HTML Props
  className?: string;
  style?: React.CSSProperties;
}
```

### DividerColor (11개 색상)

```typescript
type DividerColor = 
  | 'primary-stroke-1'
  | 'secondary-stroke-1' | 'secondary-stroke-2' | 'secondary-stroke-3' | 'secondary-stroke-inverse'
  | 'cta-stroke-1' | 'cta-stroke-2'
  | 'status-error' | 'status-warning' | 'status-success' | 'status-info' | 'status-focused';
```

| 색상 | Foundation 토큰 | 용도 | 사용 빈도 |
|------|-----------------|------|-----------|
| `primary-stroke-1` | `grey-light-80` | 기본 구분선 | ⭐⭐⭐⭐⭐ |
| `secondary-stroke-1` | `grey-light-60` | 연한 구분선 | ⭐⭐⭐⭐ |
| `secondary-stroke-2` | `grey-light-80` | 표준 구분선 (기본값) | ⭐⭐⭐⭐⭐ |
| `secondary-stroke-3` | `grey-light-100` | 진한 구분선 | ⭐⭐⭐ |
| `secondary-stroke-inverse` | `grey-light-0` | 어두운 배경용 | ⭐⭐ |
| `cta-stroke-1` | `grey-light-80` | CTA 영역 구분 | ⭐⭐ |
| `cta-stroke-2` | `grey-light-80` | CTA 보조 구분 | ⭐ |
| `status-error` | `red-light-40` | 오류 상태 구분 | ⭐⭐ |
| `status-warning` | `orange-light-50` | 경고 상태 구분 | ⭐⭐ |
| `status-success` | `green-light-40` | 성공 상태 구분 | ⭐⭐ |
| `status-info` | `blue-light-40` | 정보 상태 구분 | ⭐⭐ |
| `status-focused` | `grey-light-40` | 포커스 영역 구분 | ⭐ |

### SpacingValue (10개 간격)

```typescript
type SpacingValue = 'none' | 'xxxs' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
```

| 간격 | Foundation 토큰 | 픽셀 값 | 용도 |
|------|-----------------|---------|------|
| `none` | `spacing-0` | 0px | 간격 제거 |
| `xxxs` | `spacing-20` | 2px | 최소 간격 |
| `xxs` | `spacing-40` | 4px | 매우 작은 간격 |
| `xs` | `spacing-60` | 6px | 작은 간격 |
| `sm` | `spacing-80` | 8px | 작은 간격 |
| `md` | `spacing-100` | 10px | 표준 간격 (기본값) |
| `lg` | `spacing-120` | 12px | 큰 간격 |
| `xl` | `spacing-160` | 16px | 매우 큰 간격 |
| `xxl` | `spacing-200` | 20px | 초대형 간격 |
| `xxxl` | `spacing-240` | 24px | 최대 간격 |

### ResponsiveOrSingle

```typescript
type ResponsiveOrSingle<T> = T | {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  wide?: T;
}
```

## 💻 기본 사용 예시

### 1. 수평 구분선 (기본)

```jsx
// 기본 수평 구분선
<Divider />

// 두께와 색상 지정
<Divider thickness="medium" color="primary-stroke-1" />

// 점선 스타일
<Divider variant="dashed" color="secondary-stroke-1" />

// 간격 조정
<Divider spacing="lg" />
```

### 2. 수직 구분선

```jsx
// 기본 수직 구분선
<div style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
  <span>왼쪽 콘텐츠</span>
  <Divider orientation="vertical" />
  <span>오른쪽 콘텐츠</span>
</div>

// 두꺼운 수직 구분선
<Divider 
  orientation="vertical" 
  thickness="thick" 
  color="cta-stroke-1" 
/>
```

### 3. 커스텀 길이

```jsx
// 50% 너비의 수평 구분선
<Divider length="50%" />

// 200px 길이의 수평 구분선
<Divider length="200px" />

// 100px 높이의 수직 구분선
<Divider orientation="vertical" length="100px" />

// rem 단위 사용
<Divider length="10rem" />
```

### 4. 간격 제어

```jsx
// 전체 간격 설정
<Divider spacing="xl" />

// 수직 간격만 설정 (수평 구분선용)
<Divider spacingY="lg" />

// 수평 간격만 설정 (수직 구분선용)
<Divider orientation="vertical" spacingX="md" />
```

### 5. 상태별 색상 사용

```jsx
// 오류 상태 구분선
<Divider color="status-error" thickness="medium" />

// 성공 상태 구분선
<Divider color="status-success" variant="dashed" />

// 경고 상태 구분선
<Divider color="status-warning" thickness="thick" />

// 정보 상태 구분선
<Divider color="status-info" />
```

## 🎨 반응형 사용

### 1. 반응형 두께

```jsx
<Divider 
  thickness={{
    mobile: 'thin',
    tablet: 'medium',
    desktop: 'thick'
  }}
/>
```

### 2. 반응형 간격

```jsx
<Divider 
  spacing={{
    mobile: 'sm',
    tablet: 'md',
    desktop: 'lg'
  }}
/>
```

### 3. 반응형 길이

```jsx
<Divider 
  length={{
    mobile: '100%',
    tablet: '80%',
    desktop: '60%'
  }}
/>
```

## 🚀 고급 사용 예시

### 1. 콘텐츠 구분

```jsx
import { Divider, Text, Frame } from 'lumir-design-system-shared';

function ContentSection() {
  return (
    <Frame display="flex" direction="column" gap="md">
      <Text variant="heading-2">사용자 정보</Text>
      <Text variant="body-2">이름: 홍길동</Text>
      <Text variant="body-2">이메일: hong@example.com</Text>
      
      <Divider thickness="thin" color="secondary-stroke-2" />
      
      <Text variant="heading-3">연락처</Text>
      <Text variant="body-2">전화: 010-1234-5678</Text>
      <Text variant="body-2">주소: 서울시 강남구</Text>
      
      <Divider thickness="medium" color="cta-stroke-1" variant="dashed" />
      
      <Text variant="body-2">정보 수정일: 2024년 1월 15일</Text>
    </Frame>
  );
}
```

### 2. 수직 메뉴 구분

```jsx
function NavigationMenu() {
  return (
    <Frame display="flex" align="center" gap="md">
      <Text variant="link">홈</Text>
      <Divider orientation="vertical" thickness="thin" color="secondary-stroke-1" />
      <Text variant="link">제품</Text>
      <Divider orientation="vertical" thickness="thin" color="secondary-stroke-1" />
      <Text variant="link">서비스</Text>
      <Divider orientation="vertical" thickness="thin" color="secondary-stroke-1" />
      <Text variant="link">문의</Text>
    </Frame>
  );
}
```

### 3. 카드 내부 구분

```jsx
function ProductCard() {
  return (
    <Frame padding="lg" border="1px solid var(--foundation-foundation-color-grey-light-80)">
      <Text variant="heading-3">스마트폰</Text>
      <Text variant="body-2">최신 기술이 적용된 플래그십 모델</Text>
      
      <Divider 
        thickness="thin" 
        color="secondary-stroke-2" 
        spacing="md" 
      />
      
      <Frame display="flex" justify="between" align="center">
        <Text variant="body-1" weight="bold">₩1,200,000</Text>
        <Text variant="body-2" color="status-success">재고 있음</Text>
      </Frame>
    </Frame>
  );
}
```

### 4. 상태별 섹션 구분

```jsx
function StatusSections() {
  return (
    <Frame display="flex" direction="column" gap="lg">
      {/* 오류 섹션 */}
      <Frame>
        <Text variant="body-2" color="status-error">오류가 발생했습니다</Text>
        <Divider color="status-error" thickness="medium" spacing="sm" />
      </Frame>
      
      {/* 경고 섹션 */}
      <Frame>
        <Text variant="body-2" color="status-warning">주의가 필요합니다</Text>
        <Divider color="status-warning" thickness="medium" spacing="sm" />
      </Frame>
      
      {/* 성공 섹션 */}
      <Frame>
        <Text variant="body-2" color="status-success">작업이 완료되었습니다</Text>
        <Divider color="status-success" thickness="medium" spacing="sm" />
      </Frame>
    </Frame>
  );
}
```

## ♿ 접근성 (Accessibility)

### WCAG 2.1 AA 준수 사항

#### 1. 시맨틱 구조
- **`<hr>` 요소 사용**: 의미론적으로 올바른 구분선 요소
- **명확한 역할**: 스크린 리더가 구분선을 인식
- **적절한 마크업**: 콘텐츠 구분 의미 전달

```jsx
// ✅ 올바른 사용
<section>
  <h2>첫 번째 섹션</h2>
  <p>첫 번째 콘텐츠</p>
  <Divider /> {/* hr 요소로 렌더링 */}
  <h2>두 번째 섹션</h2>
  <p>두 번째 콘텐츠</p>
</section>

// ❌ 잘못된 사용 - 장식용으로만 사용
<div>
  <Divider /> {/* 의미 없는 구분선 */}
</div>
```

#### 2. 색상 대비
모든 색상 옵션은 **WCAG AA 기준(3:1 이상)** 을 준수합니다:

| 색상 | 배경 대비 | 상태 |
|------|-----------|------|
| `primary-stroke-1` | 4.51:1 | ✅ AA |
| `secondary-stroke-1` | 3.67:1 | ✅ AA |
| `secondary-stroke-2` | 4.51:1 | ✅ AA |
| `secondary-stroke-3` | 6.20:1 | ✅ AAA |
| `status-error` | 4.82:1 | ✅ AA |
| `status-warning` | 3.21:1 | ✅ AA |
| `status-success` | 4.94:1 | ✅ AA |
| `status-info` | 4.76:1 | ✅ AA |

#### 3. 키보드 접근성
- **포커스 불가**: Divider는 장식적 요소로 키보드 포커스를 받지 않음
- **스크린 리더 지원**: `<hr>` 요소의 기본 접근성 기능 활용
- **의미 전달**: 콘텐츠 구분 역할을 명확히 전달

### 접근성 검증 체크리스트

```jsx
// ✅ 접근성 검증 통과 예시
function AccessibleContent() {
  return (
    <article>
      <header>
        <h1>제품 리뷰</h1>
      </header>
      
      <section>
        <h2>기본 정보</h2>
        <p>제품에 대한 기본 정보입니다.</p>
      </section>
      
      <Divider color="secondary-stroke-2" /> {/* 의미적 구분 */}
      
      <section>
        <h2>상세 리뷰</h2>
        <p>제품에 대한 상세한 리뷰입니다.</p>
      </section>
      
      <Divider color="secondary-stroke-2" />
      
      <footer>
        <p>작성일: 2024년 1월 15일</p>
      </footer>
    </article>
  );
}
```

## 🔍 Foundation 토큰 사용

Divider 컴포넌트는 **100% Foundation 토큰**을 사용합니다:

### 색상 토큰

```css
/* 기본 색상 */
.divider--color-primary-stroke-1 {
  border-color: var(--foundation-foundation-color-grey-light-80);
}

.divider--color-secondary-stroke-2 {
  border-color: var(--foundation-foundation-color-grey-light-80);
}

/* 상태 색상 */
.divider--color-status-error {
  border-color: var(--foundation-foundation-color-red-light-40);
}

.divider--color-status-success {
  border-color: var(--foundation-foundation-color-green-light-40);
}
```

### 두께 토큰

```css
.divider--thickness-thin {
  border-width: var(--foundation-foundation-strokewidth-10); /* 1px */
}

.divider--thickness-medium {
  border-width: var(--foundation-foundation-strokewidth-20); /* 2px */
}

.divider--thickness-thick {
  border-width: var(--foundation-foundation-strokewidth-30); /* 3px */
}
```

### 간격 토큰

```css
.divider--spacing-md {
  margin: var(--foundation-foundation-spacing-100-vertical) 
          var(--foundation-foundation-spacing-100-horizontal);
}

.divider--spacing-y-lg {
  margin-top: var(--foundation-foundation-spacing-120-vertical);
  margin-bottom: var(--foundation-foundation-spacing-120-vertical);
}
```

## 📊 성능 최적화

### 1. CSS 최적화
- **CSS 모듈 사용**: 스타일 충돌 방지 및 번들 크기 최적화
- **조건부 클래스**: 필요한 스타일만 적용
- **Foundation 토큰**: CSS 변수 활용으로 런타임 최적화

### 2. 렌더링 최적화
```jsx
// ✅ 최적화된 사용
const MemoizedDivider = React.memo(Divider);

function OptimizedList({ items }) {
  return (
    <Frame>
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <Text>{item.content}</Text>
          {index < items.length - 1 && (
            <MemoizedDivider color="secondary-stroke-2" />
          )}
        </React.Fragment>
      ))}
    </Frame>
  );
}
```

### 3. Bundle 크기
- **프리미티브 컴포넌트**: 최소한의 의존성
- **Tree-shaking 지원**: 사용하지 않는 스타일 제거
- **CSS 압축**: 프로덕션 빌드에서 자동 최적화

## 🎯 시스템별 가이드라인

### System-01 (Professional & Clean)
```jsx
// GitHub, 백오피스용 - 미니멀하고 명확한 구분
<Divider 
  thickness="thin" 
  color="secondary-stroke-2" 
  spacing="md" 
/>
```

### System-02 (Friendly & Bright)
```jsx
// 커머스, 소비자용 - 부드럽고 친근한 구분
<Divider 
  thickness="thin" 
  color="secondary-stroke-1" 
  variant="dashed" 
  spacing="lg" 
/>
```

### System-03 (Modern & Software)
```jsx
// Discord, Slack용 - 현대적이고 기능적인 구분
<Divider 
  thickness="medium" 
  color="primary-stroke-1" 
  spacing="sm" 
/>
```

### System-04 (Aerospace Control)
```jsx
// 위성 컨트롤용 - 명확하고 안정적인 구분
<Divider 
  thickness="thick" 
  color="secondary-stroke-3" 
  spacing="md" 
/>
```

### System-05 (Aerospace Dashboard)
```jsx
// 우주 항공 대시보드용 - 정밀하고 전문적인 구분
<Divider 
  thickness="medium" 
  color="cta-stroke-1" 
  spacing="lg" 
/>
```

## 🚫 사용 시 주의사항

### 1. 과도한 사용 금지
```jsx
// ❌ 잘못된 사용 - 너무 많은 구분선
<Frame>
  <Text>제목</Text>
  <Divider />
  <Text>부제목</Text>
  <Divider />
  <Text>내용 1</Text>
  <Divider />
  <Text>내용 2</Text>
  <Divider />
</Frame>

// ✅ 올바른 사용 - 적절한 구분
<Frame>
  <Frame>
    <Text>제목</Text>
    <Text>부제목</Text>
  </Frame>
  <Divider />
  <Frame>
    <Text>내용 1</Text>
    <Text>내용 2</Text>
  </Frame>
</Frame>
```

### 2. 의미 없는 장식 금지
```jsx
// ❌ 잘못된 사용 - 장식 목적
<Frame>
  <Divider color="status-success" />
  <Text>단순 장식용</Text>
  <Divider color="status-success" />
</Frame>

// ✅ 올바른 사용 - 콘텐츠 구분
<Frame>
  <section>
    <Text>첫 번째 섹션</Text>
  </section>
  <Divider />
  <section>
    <Text>두 번째 섹션</Text>
  </section>
</Frame>
```

### 3. 하드코딩된 스타일 금지
```jsx
// ❌ 절대 금지 - 하드코딩된 스타일
<Divider style={{ borderColor: '#ccc', borderWidth: '2px' }} />

// ✅ 올바른 사용 - Props 활용
<Divider thickness="medium" color="secondary-stroke-2" />
```

## 📚 관련 컴포넌트

- **Frame**: Divider와 함께 레이아웃 구성
- **Surface**: 배경 영역과 함께 구분선 사용
- **Text**: 텍스트 콘텐츠와 함께 구분

## 🔗 디자인 토큰 레퍼런스

- [Foundation Colors](../01-core/02-Colors.md#stroke-colors)
- [Foundation Spacing](../01-core/03-Spacing.md)
- [Foundation Border](../01-core/04-Border.md#stroke-width)
</rewritten_file> 