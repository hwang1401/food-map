---
title: "Card 컴포넌트 (System-01)"
component: "Card"
system: "System-01"
category: "복합 컴포넌트"
status: "안정화"
last_updated: "2024-01-15"
related: ["Button", "Badge", "TextDisplay", "Surface", "Frame"]
---

# Card 컴포넌트 (System-01)

## 📝 개요

System-01의 Card 컴포넌트는 **Professional & Clean** 테마를 구현하는 복합 컨테이너 요소입니다. **GitHub, 백오피스** 환경에 최적화되어 있으며, **명확하고 효율적인** 정보 표시와 상호작용을 제공합니다. **Badge, Button, TextDisplay** 등 여러 컴포넌트를 조합하여 완성도 높은 카드 UI를 구성합니다.

### 핵심 특징

- **복합 컴포넌트**: Badge, Button, TextDisplay, 이미지 영역을 통합
- **3가지 변형**: filled, outlined, transparent  
- **유연한 레이아웃**: 버튼 위치, 이미지 표시, 텍스트 정렬 제어
- **Professional 디자인**: 작은 border-radius, 촘촘한 간격으로 비즈니스 환경 최적화
- **완전한 접근성**: 키보드 탐색, 스크린 리더 지원
- **반응형 지원**: width, minWidth, maxWidth 제어
- **이미지 최적화**: object-fit, aspect-ratio, 높이 제어
- **System-01 토큰**: 일관된 시각적 스타일링

## 🔧 Props 인터페이스

```typescript
interface CardProps {
  // 기본 카드 설정
  variant?: 'filled' | 'outlined' | 'transparent';
  title: string; // 필수
  onClick?: () => void;
  
  // 레이아웃 제어
  width?: any;
  minWidth?: any;
  maxWidth?: any;
  
  // 이미지 설정
  imageUrl?: string;
  showImage?: boolean;
  imageHeight?: string | number;
  imageObjectFit?: ObjectFitValue;
  imageObjectPosition?: ObjectPositionValue;
  imageAspectRatio?: AspectRatioValue;
  
  // Badge 설정
  showBadge?: boolean;
  badgeText?: string;
  badgeColor?: BadgeProps['color'];
  badgeIconName?: IconName;
  badgeSize?: BadgeProps['size'];
  badgeStyle?: BadgeProps['style'];
  badgeLayout?: BadgeProps['layout'];
  badgeType?: BadgeProps['type'];
  
  // TextDisplay 설정
  description?: string;
  additionalInfo?: string;
  statusText?: string;
  size?: TextDisplayProps['size'];
  textStyle?: TextDisplayProps['style'];
  showLabel?: boolean;
  labelText?: string;
  showDescription?: boolean;
  showCaption?: boolean;
  captionText?: string;
  
  // Button 설정
  showActionButton?: boolean;
  buttonPosition?: 'top-right' | 'bottom-full' | 'bottom-right';
  buttonVariant?: 'filled' | 'outlined' | 'transparent';
  buttonType?: 'text-icon' | 'text-only' | 'icon-only';
  buttonColorScheme?: 'primary' | 'secondary' | 'cta';
  buttonSize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  buttonText?: string;
  buttonIcon?: IconName;
  buttonRightIcon?: IconName;
  buttonIsFullWidth?: boolean;
  buttonIsSelected?: boolean;
  
  // 이벤트
  actionButton?: {
    onClick?: ButtonProps['onClick'];
    disabled?: boolean;
    isLoading?: boolean;
  };
}
```

## 💻 기본 사용 예시

### 1. 기본 카드

```jsx
import { Card } from 'lumir-design-system-01';

// 최소 구성 카드
<Card 
  title="프로젝트 이름"
  description="프로젝트 설명"
/>

// 이미지가 있는 카드
<Card 
  title="제품명"
  description="제품 설명"
  imageUrl="/images/product.jpg"
/>

// 뱃지가 있는 카드
<Card 
  title="문서 제목"
  description="문서 내용"
  badgeText="새로운"
  badgeColor="success"
/>
```

### 2. 변형별 사용

```jsx
// Filled 카드 (기본)
<Card 
  variant="filled"
  title="Filled Card"
  description="기본 스타일 카드"
/>

// Outlined 카드
<Card 
  variant="outlined"
  title="Outlined Card"
  description="테두리만 있는 카드"
/>

// Transparent 카드
<Card 
  variant="transparent"
  title="Transparent Card"
  description="투명 배경 카드"
/>
```

### 3. 버튼 위치별 사용

```jsx
// 우상단 버튼 (기본)
<Card 
  title="설정"
  description="시스템 설정"
  buttonPosition="top-right"
  buttonIcon="SettingsIcon"
  buttonType="icon-only"
/>

// 하단 우측 버튼
<Card 
  title="문서"
  description="중요한 문서"
  buttonPosition="bottom-right"
  buttonText="더보기"
  buttonType="text-only"
/>

// 하단 전체 너비 버튼
<Card 
  title="상품"
  description="인기 상품"
  buttonPosition="bottom-full"
  buttonText="구매하기"
  buttonType="text-only"
  buttonColorScheme="cta"
/>
```

## 🚀 고급 사용 예시

### 1. 제품 카드

```jsx
function ProductCard({ product }) {
  return (
    <Card 
      title={product.name}
      description={product.description}
      imageUrl={product.imageUrl}
      imageHeight="240px"
      imageObjectFit="cover"
      
      // 뱃지 설정
      showBadge={product.isNew}
      badgeText="신상품"
      badgeColor="success"
      badgeSize="sm"
      
      // 버튼 설정
      buttonPosition="bottom-full"
      buttonText="장바구니 담기"
      buttonColorScheme="primary"
      buttonIcon="CartIcon"
      
      // 액션
      onClick={() => viewProduct(product.id)}
      actionButton={{
        onClick: () => addToCart(product.id)
      }}
      
      width="300px"
      maxWidth="400px"
    />
  );
}
```

### 2. 사용자 프로필 카드

```jsx
function UserProfileCard({ user }) {
  return (
    <Card 
      title={user.name}
      description={user.role}
      captionText={user.department}
      
      // 프로필 이미지
      imageUrl={user.avatar}
      imageAspectRatio="square"
      imageHeight="120px"
      imageObjectFit="cover"
      
      // 상태 뱃지
      showBadge={user.isOnline}
      badgeText={user.isOnline ? "온라인" : "오프라인"}
      badgeColor={user.isOnline ? "success" : "secondary"}
      badgeType="round-square"
      
      // 액션 버튼
      buttonPosition="bottom-right"
      buttonText="메시지"
      buttonType="text-icon"
      buttonIcon="MessageIcon"
      buttonSize="sm"
      
      onClick={() => viewProfile(user.id)}
      actionButton={{
        onClick: () => sendMessage(user.id)
      }}
    />
  );
}
```

## 🎨 System-01 디자인 특성

### Professional & Clean 스타일

```jsx
// 비즈니스 환경에 최적화된 스타일
<Card 
  variant="filled"
  title="보고서"
  description="월간 실적 보고서"
  
  // System-01 특성: 작은 border-radius
  // System-01 특성: 촘촘한 간격 (md padding, sm gap)
  // System-01 특성: 명확한 계층 구조
  
  badgeText="완료"
  badgeColor="success"
  
  buttonPosition="top-right"
  buttonIcon="DownloadIcon"
  buttonType="icon-only"
  buttonVariant="transparent"
/>
```

### GitHub 스타일 카드

```jsx
function GitHubStyleCard() {
  return (
    <Card 
      variant="outlined"
      title="lumir-design-system"
      description="React component library with TypeScript"
      
      // GitHub 스타일 뱃지
      badgeText="Public"
      badgeColor="secondary"
      badgeSize="xs"
      
      // GitHub 스타일 정보
      showLabel
      labelText="Language"
      captionText="TypeScript • Updated 2 hours ago"
      
      // GitHub 스타일 액션
      buttonPosition="bottom-right"
      buttonText="Star"
      buttonType="text-icon"
      buttonIcon="StarIcon"
      buttonVariant="outlined"
      buttonSize="sm"
      
      width="100%"
      maxWidth="400px"
    />
  );
}
```

## ♿ 접근성 (Accessibility)

### WCAG 2.1 AA 준수 사항

#### 1. 키보드 접근성

```jsx
// ✅ 키보드 탐색 지원
<Card 
  title="접근 가능한 카드"
  description="키보드로 탐색 가능"
  
  // 카드 클릭 시 포커스 처리
  onClick={() => handleCardClick()}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  }}
  
  // 버튼 접근성
  buttonText="액션"
  actionButton={{
    onClick: handleAction,
    'aria-label': '카드 액션 실행'
  }}
  
  // 전체 카드 접근성
  role="article"
  aria-labelledby="card-title"
  tabIndex={0}
/>
```

## 🔍 System-01 토큰 사용

Card 컴포넌트는 **System-01 시멘틱 토큰**을 사용합니다:

### 배경 및 테두리 토큰

```css
/* Filled 변형 */
background: var(--semantic-secondary-system01-1-rest);
border-color: var(--semantic-secondary-system01-2-rest);
border-width: var(--foundation-foundation-strokewidth-10);

/* Outlined 변형 */
background: transparent;
border-color: var(--semantic-secondary-system01-2-rest);

/* Transparent 변형 */
background: transparent;
border: none;
```

### 간격 및 크기 토큰

```css
/* System-01 특성: 촘촘한 간격 */
padding: var(--foundation-foundation-spacing-100-vertical) 
         var(--foundation-foundation-spacing-100-horizontal); /* md */

gap: var(--foundation-foundation-spacing-80-vertical) 
     var(--foundation-foundation-spacing-80-horizontal); /* sm */

/* 작은 border-radius */
border-radius: var(--foundation-foundation-border-radius-sm); /* 4px */
```

## 📚 관련 컴포넌트

- **Button**: 카드 내 액션 버튼
- **Badge**: 상태 및 카테고리 표시
- **TextDisplay**: 텍스트 정보 표시
- **Surface**: 카드 배경 및 테두리
- **Frame**: 카드 내부 레이아웃
- **Sizing**: 카드 크기 및 이미지 제어

## 🔗 디자인 토큰 레퍼런스

- [System-01 Colors](../01-core/02-Colors.md#system-01-colors)
- [Foundation Spacing](../01-core/03-Spacing.md)
- [Foundation Border](../01-core/04-Border.md)
- [Foundation Border Radius](../01-core/04-Border.md#border-radius)
