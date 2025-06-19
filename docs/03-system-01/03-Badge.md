---
title: "Badge 컴포넌트 (System-01)"
component: "Badge"
system: "System-01"
category: "복합 컴포넌트"
status: "안정화"
last_updated: "2024-01-15"
related: ["Text", "Icon", "Surface", "Frame"]
---

# Badge 컴포넌트 (System-01)

## 📝 개요

System-01의 Badge 컴포넌트는 **Professional & Clean** 테마를 구현하는 상태 표시 요소입니다. **GitHub, 백오피스** 환경에 최적화되어 있으며, **명확하고 간결한** 정보 전달을 제공합니다. **Text와 Icon**을 조합하여 다양한 상태와 카테고리를 시각적으로 표현합니다.

### 핵심 특징

- **Professional 디자인**: 명확하고 깔끔한 비즈니스 환경 최적화
- **5가지 색상**: primary, secondary, cta, error, warning
- **3가지 크기**: sm(12px), md(14px), lg(16px) 텍스트
- **3가지 레이아웃**: text-only, text+icon, icon-only
- **3가지 스타일**: filled, outlined, transparent
- **2가지 형태**: round-square, circle
- **System-01 토큰**: 일관된 시각적 스타일링
- **접근성 완벽 지원**: WCAG 2.1 AA 준수

## 🔧 Props 인터페이스

```typescript
interface BadgeProps {
  // 필수 속성
  color: 'primary' | 'secondary' | 'cta' | 'error' | 'warning';
  
  // 선택적 속성
  size?: 'sm' | 'md' | 'lg';
  layout?: 'text+icon' | 'only text' | 'only icon';
  style?: 'filled' | 'outlined' | 'transparent';
  type?: 'round-square' | 'circle';
  
  // 콘텐츠
  text?: string;
  iconName?: IconName;
  iconType?: 'line' | 'flat';
  
  // 상태
  disabled?: boolean;
  
  // 기타
  className?: string;
}
```

### Color (5가지 색상)

| 색상 | System-01 토큰 | 용도 | 사용 빈도 |
|------|-----------------|------|-----------|
| `primary` | `primary-system01-*` | 주요 정보, 브랜드 (파란색) | ⭐⭐⭐⭐⭐ |
| `secondary` | `secondary-system01-*` | 일반 정보, 중성 (회색) | ⭐⭐⭐⭐ |
| `cta` | `cta-system01-*` | 중요한 호출 (강조색) | ⭐⭐⭐ |
| `error` | `error-*` | 오류, 위험 상태 (빨간색) | ⭐⭐⭐ |
| `warning` | `warning-*` | 경고, 주의 상태 (노란색) | ⭐⭐⭐ |

### Size (3가지 크기)

| 크기 | 텍스트 | 아이콘 | 패딩 | 용도 |
|------|--------|--------|------|------|
| `sm` | 12px | 12px | xxs | 컴팩트한 UI, 테이블 |
| `md` | 14px | 16px | xxs | 표준 사용 |
| `lg` | 16px | 16px | xxs | 강조가 필요한 경우 |

### Layout (3가지 레이아웃)

| 레이아웃 | 구성 | 용도 | 예시 |
|----------|------|------|------|
| `only text` | 텍스트만 | 간단한 상태 표시 | "신규", "완료" |
| `text+icon` | 아이콘 + 텍스트 | 의미 강화 | "✓ 완료", "⚠ 경고" |
| `only icon` | 아이콘만 | 공간 절약 | "✓", "✗" |

### Style (3가지 스타일)

| 스타일 | 배경 | 테두리 | 용도 | 사용 빈도 |
|--------|------|--------|------|-----------|
| `filled` | 색상 배경 | 없음 | 강한 강조 | ⭐⭐⭐⭐⭐ |
| `outlined` | 투명 배경 | 색상 테두리 | 적당한 강조 | ⭐⭐⭐⭐ |
| `transparent` | 투명 배경 | 없음 | 최소한의 강조 | ⭐⭐⭐ |

## 💻 기본 사용 예시

### 1. 기본 뱃지

```jsx
import { Badge } from 'lumir-design-system-01';

// 기본 Primary 뱃지
<Badge color="primary" text="새로운" />

// Secondary 뱃지
<Badge color="secondary" text="일반" />

// 상태별 뱃지
<Badge color="error" text="오류" />
<Badge color="warning" text="경고" />
<Badge color="cta" text="중요" />
```

### 2. 크기별 사용

```jsx
<Badge color="primary" size="sm" text="Small" />
<Badge color="primary" size="md" text="Medium" />
<Badge color="primary" size="lg" text="Large" />
```

### 3. 스타일별 사용

```jsx
// Filled 뱃지 (기본)
<Badge 
  color="primary" 
  style="filled" 
  text="Filled Badge" 
/>

// Outlined 뱃지
<Badge 
  color="primary" 
  style="outlined" 
  text="Outlined Badge" 
/>

// Transparent 뱃지
<Badge 
  color="primary" 
  style="transparent" 
  text="Transparent Badge" 
/>
```

### 4. 레이아웃별 사용

```jsx
// 텍스트만
<Badge 
  color="primary" 
  layout="only text" 
  text="텍스트만" 
/>

// 아이콘 + 텍스트
<Badge 
  color="success" 
  layout="text+icon" 
  text="완료" 
  iconName="LineIconsCheckmarkCheckmarkIcon"
/>

// 아이콘만
<Badge 
  color="error" 
  layout="only icon" 
  iconName="LineIconsCloseCloseIcon"
/>
```

### 5. 형태별 사용

```jsx
// 둥근 사각형 (기본)
<Badge 
  color="primary" 
  type="round-square" 
  text="둥근 사각형" 
/>

// 원형
<Badge 
  color="primary" 
  type="circle" 
  text="원형" 
/>
```

## 🚀 고급 사용 예시

### 1. 상태 표시 뱃지

```jsx
function StatusBadges() {
  return (
    <Frame display="flex" gap="sm">
      <Badge 
        color="success" 
        layout="text+icon"
        text="활성" 
        iconName="LineIconsCheckmarkCheckmarkIcon"
        size="sm"
      />
      
      <Badge 
        color="error" 
        layout="text+icon"
        text="비활성" 
        iconName="LineIconsCloseCloseIcon"
        size="sm"
      />
      
      <Badge 
        color="warning" 
        layout="text+icon"
        text="대기중" 
        iconName="LineIconsTimerIcon"
        size="sm"
      />
      
      <Badge 
        color="secondary" 
        layout="text+icon"
        text="보류" 
        iconName="LineIconsPauseIcon"
        size="sm"
      />
    </Frame>
  );
}
```

### 2. 카테고리 뱃지

```jsx
function CategoryBadges() {
  const categories = [
    { name: "Frontend", color: "primary" },
    { name: "Backend", color: "secondary" },
    { name: "Design", color: "cta" },
    { name: "DevOps", color: "warning" }
  ];

  return (
    <Frame display="flex" gap="xs" wrap>
      {categories.map((category) => (
        <Badge 
          key={category.name}
          color={category.color}
          style="outlined"
          text={category.name}
          size="sm"
        />
      ))}
    </Frame>
  );
}
```

### 3. 알림 뱃지

```jsx
function NotificationBadge({ count }) {
  if (count === 0) return null;
  
  return (
    <Badge 
      color="error"
      type="circle"
      layout="only text"
      text={count > 99 ? "99+" : count.toString()}
      size="sm"
    />
  );
}

// 사용 예시
<Frame display="flex" align="center" gap="xs">
  <Icon name="BellIcon" size="md" />
  <NotificationBadge count={5} />
</Frame>
```

### 4. 테이블 상태 뱃지

```jsx
function TableStatusCell({ status }) {
  const statusConfig = {
    completed: {
      color: "success",
      text: "완료",
      iconName: "LineIconsCheckmarkCheckmarkIcon"
    },
    in_progress: {
      color: "warning", 
      text: "진행중",
      iconName: "LineIconsTimerIcon"
    },
    failed: {
      color: "error",
      text: "실패",
      iconName: "LineIconsCloseCloseIcon"
    },
    pending: {
      color: "secondary",
      text: "대기",
      iconName: "LineIconsPauseIcon"
    }
  };

  const config = statusConfig[status];
  if (!config) return null;

  return (
    <Badge 
      color={config.color}
      layout="text+icon"
      text={config.text}
      iconName={config.iconName}
      size="sm"
      style="filled"
    />
  );
}
```

### 5. 우선순위 뱃지

```jsx
function PriorityBadge({ priority }) {
  const priorityConfig = {
    high: {
      color: "error",
      text: "높음",
      style: "filled"
    },
    medium: {
      color: "warning",
      text: "중간", 
      style: "filled"
    },
    low: {
      color: "secondary",
      text: "낮음",
      style: "outlined"
    }
  };

  const config = priorityConfig[priority];
  if (!config) return null;

  return (
    <Badge 
      color={config.color}
      text={config.text}
      style={config.style}
      size="sm"
    />
  );
}
```

### 6. 버전 뱃지

```jsx
function VersionBadge({ version, isLatest, isDeprecated }) {
  let color = "secondary";
  let iconName = undefined;
  
  if (isLatest) {
    color = "success";
    iconName = "LineIconsStarFilledIcon";
  } else if (isDeprecated) {
    color = "error"; 
    iconName = "LineIconsWarningIcon";
  }

  return (
    <Badge 
      color={color}
      layout={iconName ? "text+icon" : "only text"}
      text={version}
      iconName={iconName}
      style="outlined"
      size="sm"
    />
  );
}

// 사용 예시
<Frame display="flex" gap="xs">
  <VersionBadge version="v2.1.0" isLatest={true} />
  <VersionBadge version="v2.0.0" />
  <VersionBadge version="v1.5.0" isDeprecated={true} />
</Frame>
```

## 🎨 System-01 디자인 특성

### Professional & Clean 스타일

```jsx
// 비즈니스 환경에 최적화된 스타일
<Frame display="flex" gap="sm">
  <Badge 
    color="primary" 
    text="승인됨"
    style="filled"
    // System-01 특성: 작은 border-radius (sm)
    // System-01 특성: 명확한 색상 대비
    // System-01 특성: 간결한 텍스트
  />
  
  <Badge 
    color="secondary" 
    text="검토중"
    style="outlined"
    // System-01 특성: 얇은 테두리
    // System-01 특성: 중성적인 회색
  />
</Frame>
```

### GitHub 스타일 뱃지

```jsx
function GitHubStyleBadges() {
  return (
    <Frame display="flex" gap="xs">
      <Badge 
        color="success"
        text="Public"
        style="outlined"
        size="sm"
      />
      
      <Badge 
        color="secondary"
        text="MIT"
        style="filled"
        size="sm"
      />
      
      <Badge 
        color="primary"
        layout="text+icon"
        text="v2.1.0"
        iconName="LineIconsTagIcon"
        style="outlined"
        size="sm"
      />
      
      <Badge 
        color="warning"
        layout="text+icon"
        text="Beta"
        iconName="LineIconsWarningIcon"
        style="filled"
        size="sm"
      />
    </Frame>
  );
}
```

## ♿ 접근성 (Accessibility)

### WCAG 2.1 AA 준수 사항

#### 1. 색상 대비
모든 색상 조합이 **WCAG AA 기준(4.5:1 이상)** 준수:

| 스타일 | 색상 | 배경 대비 | 상태 |
|--------|------|-----------|------|
| filled | primary | 6.2:1 | ✅ AA |
| filled | secondary | 4.8:1 | ✅ AA |
| filled | error | 5.1:1 | ✅ AA |
| filled | warning | 4.6:1 | ✅ AA |
| outlined | primary | 4.6:1 | ✅ AA |
| outlined | secondary | 4.5:1 | ✅ AA |

#### 2. 의미 전달

```jsx
// ✅ 색상과 텍스트로 이중 정보 전달
<Badge 
  color="error" 
  layout="text+icon"
  text="오류" 
  iconName="LineIconsCloseCloseIcon"
  // 색상, 텍스트, 아이콘으로 삼중 정보 전달
/>

// ✅ 아이콘 전용 뱃지에 접근성 정보
<Badge 
  color="success" 
  layout="only icon"
  iconName="LineIconsCheckmarkCheckmarkIcon"
  aria-label="완료됨"
/>
```

#### 3. 스크린 리더 지원

```jsx
// ✅ 의미있는 텍스트 제공
<Badge 
  color="warning"
  text="주의 필요"
  layout="text+icon"
  iconName="LineIconsWarningIcon"
  role="status"
  aria-label="주의가 필요한 상태입니다"
/>

// ✅ 숫자 뱃지의 명확한 의미 전달
<Badge 
  color="error"
  text="5"
  type="circle"
  aria-label="5개의 읽지 않은 알림"
/>
```

## 🔍 System-01 토큰 사용

Badge 컴포넌트는 **100% System-01 시멘틱 토큰**을 사용합니다:

### Primary 색상 토큰

```css
/* Primary Filled */
background: var(--semantic-primary-system01-1-rest);
color: var(--semantic-primary-system01-oncolor);

/* Primary Outlined */
border-color: var(--semantic-primary-system01-1-rest);
color: var(--semantic-primary-system01-1-rest);

/* Primary Transparent */
color: var(--semantic-primary-system01-1-rest);
```

### Secondary 색상 토큰

```css
/* Secondary Filled */
background: var(--semantic-secondary-system01-2-rest);
color: var(--semantic-secondary-system01-2-rest);

/* Secondary Outlined */
border-color: var(--semantic-secondary-system01-1-rest);
color: var(--semantic-secondary-system01-1-rest);
```

### 상태 색상 토큰

```css
/* Error */
background: var(--semantic-error-1-rest);
color: var(--semantic-error-oncolor);

/* Warning */
background: var(--semantic-warning-1-rest);
color: var(--semantic-warning-oncolor);

/* CTA */
background: var(--semantic-cta-system01-1-rest);
color: var(--semantic-cta-system01-oncolor);
```

### 크기 및 간격 토큰

```css
/* 패딩 */
padding: var(--foundation-foundation-spacing-40-vertical) 
         var(--foundation-foundation-spacing-40-horizontal); /* xxs */

/* 아이콘-텍스트 간격 */
gap: var(--foundation-foundation-spacing-40-horizontal); /* xxs */

/* Border radius */
border-radius: var(--foundation-foundation-border-radius-sm); /* 4px */
```

## 📊 성능 최적화

### 1. 렌더링 최적화

```jsx
// ✅ 메모이제이션으로 불필요한 리렌더링 방지
const OptimizedBadge = React.memo(Badge);

// ✅ 조건부 렌더링 최적화
function ConditionalBadge({ show, ...props }) {
  if (!show) return null;
  return <OptimizedBadge {...props} />;
}

// ✅ 뱃지 리스트 최적화
function BadgeList({ items }) {
  return (
    <Frame display="flex" gap="xs" wrap>
      {items.map((item) => (
        <OptimizedBadge 
          key={item.id}
          color={item.color}
          text={item.text}
        />
      ))}
    </Frame>
  );
}
```

### 2. 번들 크기 최적화

```jsx
// ✅ 동적 아이콘 로딩
const iconMap = {
  success: 'LineIconsCheckmarkCheckmarkIcon',
  error: 'LineIconsCloseCloseIcon',
  warning: 'LineIconsWarningIcon',
  info: 'LineIconsInfoIcon'
};

function SmartBadge({ status, text }) {
  const iconName = iconMap[status];
  
  return (
    <Badge 
      color={status}
      layout={iconName ? "text+icon" : "only text"}
      text={text}
      iconName={iconName}
    />
  );
}
```

## 🎯 사용 가이드라인

### 1. 적절한 색상 선택

```jsx
// ✅ 올바른 색상 사용
<Frame display="flex" gap="sm">
  <Badge color="success" text="성공" />      {/* 긍정적 상태 */}
  <Badge color="error" text="실패" />        {/* 부정적 상태 */}
  <Badge color="warning" text="주의" />      {/* 경고 상태 */}
  <Badge color="primary" text="정보" />      {/* 일반 정보 */}
  <Badge color="secondary" text="기본" />    {/* 중성적 정보 */}
</Frame>

// ❌ 잘못된 색상 사용
<Badge color="error" text="성공" />         {/* 의미와 색상 불일치 */}
<Badge color="success" text="오류" />       {/* 의미와 색상 불일치 */}
```

### 2. 적절한 크기 선택

```jsx
// ✅ 컨텍스트에 맞는 크기
function ResponsiveBadges() {
  return (
    <Frame display="flex" direction="column" gap="md">
      {/* 테이블 내부 - 작은 크기 */}
      <Badge size="sm" color="success" text="완료" />
      
      {/* 일반 UI - 중간 크기 */}
      <Badge size="md" color="primary" text="신규" />
      
      {/* 강조가 필요한 경우 - 큰 크기 */}
      <Badge size="lg" color="error" text="중요" />
    </Frame>
  );
}
```

## 🚫 사용 시 주의사항

### 1. 과도한 사용 금지

```jsx
// ❌ 잘못된 사용 - 너무 많은 뱃지
<Frame display="flex" gap="xs">
  <Badge color="primary" text="새로운" />
  <Badge color="success" text="인기" />
  <Badge color="warning" text="할인" />
  <Badge color="error" text="마감임박" />
  <Badge color="cta" text="추천" />
</Frame>

// ✅ 올바른 사용 - 핵심 정보만
<Frame display="flex" gap="xs">
  <Badge color="error" text="마감임박" />
  <Badge color="success" text="할인" />
</Frame>
```

### 2. 의미 없는 뱃지 금지

```jsx
// ❌ 잘못된 사용 - 의미 없는 장식
<Badge color="primary" text="예쁜 뱃지" />

// ✅ 올바른 사용 - 명확한 의미
<Badge color="primary" text="신규 기능" />
```

### 3. 하드코딩된 스타일 금지

```jsx
// ❌ 절대 금지 - 하드코딩된 스타일
<Badge 
  color="primary"
  text="뱃지"
  style={{ backgroundColor: '#007bff', color: 'white' }}
/>

// ✅ 올바른 사용 - 시스템 토큰 활용
<Badge 
  color="primary"
  style="filled"
  text="뱃지"
/>
```

## 📚 관련 컴포넌트

- **Text**: 뱃지 내 텍스트 렌더링
- **Icon**: 뱃지 내 아이콘 표시
- **Surface**: 뱃지 배경 및 테두리
- **Frame**: 뱃지 내부 레이아웃

## 🔗 디자인 토큰 레퍼런스

- [System-01 Colors](../01-core/02-Colors.md#system-01-colors)
- [Foundation Typography](../01-core/04-Typography.md)
- [Foundation Spacing](../01-core/03-Spacing.md)
- [Foundation Border Radius](../01-core/04-Border.md#border-radius)
</rewritten_file> 