---
title: 'Card - System 02'
description: 'Friendly & Bright 테마의 카드 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['Card', 'Container', 'Layout', 'Product', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# Card - System 02

System-02의 Card 컴포넌트는 Friendly & Bright 테마에 최적화된 카드입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 상품 정보나 콘텐츠를 구조화하여 표시하는 컨테이너를 제공합니다.

## 개요

Card 컴포넌트는 관련 정보를 그룹화하여 표시하는 복합 컴포넌트로, Surface, Frame, Sizing과 함께 Badge, Button, TextDisplay 컴포넌트를 조합하여 완전한 카드 인터페이스를 제공합니다.

### 핵심 특징

- **3가지 변형**: filled, outlined, transparent
- **이미지 지원**: 상품 이미지, 프로필 이미지 등
- **뱃지 통합**: 상태, 할인, 신상품 표시
- **버튼 통합**: 3가지 위치 (top-right, bottom-full, bottom-right)
- **텍스트 표시**: TextDisplay 컴포넌트 완전 통합
- **반응형 지원**: 유연한 크기 조정
- **더 둥근 모서리**: xl radius로 친근한 느낌
- **프리미티브 조합**: Surface + Frame + Sizing + Badge + Button + TextDisplay

## Props 인터페이스

```typescript
interface CardProps {
  // 기본 설정
  variant?: 'filled' | 'outlined' | 'transparent';
  title: string;
  description?: string;
  onClick?: () => void;
  
  // 크기 및 레이아웃
  width?: any;
  minWidth?: any;
  maxWidth?: any;
  
  // 이미지 설정
  showImage?: boolean;
  imageUrl?: string;
  imageHeight?: string | number;
  imageObjectFit?: ObjectFitValue;
  imageObjectPosition?: ObjectPositionValue;
  imageAspectRatio?: AspectRatioValue;
  
  // 뱃지 설정
  showBadge?: boolean;
  badgeText?: string;
  badgeColor?: 'primary' | 'secondary' | 'cta' | 'error' | 'warning';
  badgeIconName?: IconName;
  badgeSize?: 'sm' | 'md' | 'lg';
  badgeStyle?: 'filled' | 'outlined' | 'transparent';
  badgeLayout?: 'text+icon' | 'only text' | 'only icon';
  badgeType?: 'round-square' | 'circle';
  
  // 버튼 설정
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
  
  // TextDisplay 설정
  size?: TextDisplayProps['size'];
  textStyle?: TextDisplayProps['style'];
  showLabel?: boolean;
  labelText?: string;
  showDescription?: boolean;
  showCaption?: boolean;
  captionText?: string;
  
  // 액션 버튼 이벤트
  actionButton?: {
    iconName?: IconName;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    disabled?: boolean;
    isLoading?: boolean;
    buttonProps?: Partial<ButtonProps>;
  };
}
```

## 기본 사용법

### 기본 카드

```tsx
import { Card } from 'lumir-design-system-02';

function BasicCard() {
  return (
    <Card
      title="기본 카드"
      description="카드 설명이 여기에 들어갑니다."
      onClick={() => console.log('카드 클릭')}
    />
  );
}
```

### 이미지가 있는 카드

```tsx
function ImageCard() {
  return (
    <Card
      title="상품명"
      description="상품 설명"
      imageUrl="https://example.com/product.jpg"
      showImage={true}
      imageHeight="200"
      onClick={() => console.log('상품 클릭')}
    />
  );
}
```

### 뱃지가 있는 카드

```tsx
function BadgeCard() {
  return (
    <Card
      title="신상품"
      description="새로 출시된 상품입니다."
      badgeText="NEW"
      badgeColor="primary"
      badgeIconName="LineIconsStarIcon"
      badgeLayout="text+icon"
      showBadge={true}
    />
  );
}
```

## 변형 스타일

### Filled (기본)

```tsx
function FilledCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
      <Card
        variant="filled"
        title="Filled 카드"
        description="기본 filled 스타일 카드입니다."
        badgeText="Default"
        badgeColor="primary"
      />
      <Card
        variant="filled"
        title="이미지 카드"
        description="이미지가 포함된 카드입니다."
        imageUrl="https://via.placeholder.com/300x200"
        badgeText="Image"
        badgeColor="cta"
      />
    </div>
  );
}
```

### Outlined

```tsx
function OutlinedCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
      <Card
        variant="outlined"
        title="Outlined 카드"
        description="테두리만 있는 카드입니다."
        badgeText="Outlined"
        badgeColor="secondary"
      />
      <Card
        variant="outlined"
        title="버튼 카드"
        description="액션 버튼이 있는 카드입니다."
        buttonText="액션"
        buttonIcon="LineIconsPlusIcon"
        showActionButton={true}
      />
    </div>
  );
}
```

### Transparent

```tsx
function TransparentCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
      <Card
        variant="transparent"
        title="Transparent 카드"
        description="배경이 투명한 카드입니다."
        badgeText="Clean"
        badgeColor="primary"
        badgeStyle="outlined"
      />
      <Card
        variant="transparent"
        title="미니멀 카드"
        description="최소한의 스타일로 콘텐츠에 집중합니다."
        showImage={false}
        showBadge={false}
        showActionButton={false}
      />
    </div>
  );
}
```

## 버튼 위치 변형

### Top-Right 버튼

```tsx
function TopRightButton() {
  return (
    <Card
      title="좋아요 버튼"
      description="우상단에 하트 버튼이 있습니다."
      imageUrl="https://via.placeholder.com/300x200"
      buttonPosition="top-right"
      buttonType="icon-only"
      buttonIcon="LineIconsHeartIcon"
      buttonVariant="outlined"
      buttonColorScheme="cta"
      showActionButton={true}
      actionButton={{
        onClick: () => console.log('좋아요!')
      }}
    />
  );
}
```

### Bottom-Full 버튼

```tsx
function BottomFullButton() {
  return (
    <Card
      title="구매하기"
      description="하단에 전체 너비 버튼이 있습니다."
      imageUrl="https://via.placeholder.com/300x200"
      badgeText="50% OFF"
      badgeColor="cta"
      badgeIconName="LineIconsFireIcon"
      buttonPosition="bottom-full"
      buttonText="지금 구매하기"
      buttonIcon="LineIconsShoppingCartIcon"
      buttonVariant="filled"
      buttonColorScheme="cta"
      showActionButton={true}
      actionButton={{
        onClick: () => console.log('구매!')
      }}
    />
  );
}
```

### Bottom-Right 버튼

```tsx
function BottomRightButton() {
  return (
    <Card
      title="더 보기"
      description="하단 우측에 더보기 버튼이 있습니다."
      buttonPosition="bottom-right"
      buttonText="더 보기"
      buttonIcon="LineIconsArrowRightIcon"
      buttonVariant="outlined"
      buttonColorScheme="primary"
      showActionButton={true}
      actionButton={{
        onClick: () => console.log('더 보기!')
      }}
    />
  );
}
```

## 고급 사용 예제

### 이커머스 상품 카드

```tsx
function ProductCard() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAddToCart = async () => {
    setIsLoading(true);
    // 장바구니 추가 로직
    setTimeout(() => setIsLoading(false), 2000);
  };
  
  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };
  
  return (
    <div style={{ maxWidth: '320px' }}>
      <Card
        variant="filled"
        title="프리미엄 스마트폰 케이스"
        description="고급 실리콘 소재로 제작된 프리미엄 케이스"
        imageUrl="https://via.placeholder.com/300x240"
        imageHeight="240"
        imageObjectFit="cover"
        
        // 할인 뱃지
        showBadge={true}
        badgeText="30% OFF"
        badgeColor="cta"
        badgeIconName="LineIconsFireIcon"
        badgeLayout="text+icon"
        badgeSize="sm"
        
        // 위시리스트 버튼 (우상단)
        showActionButton={true}
        buttonPosition="top-right"
        buttonType="icon-only"
        buttonIcon="LineIconsHeartIcon"
        buttonVariant={isWishlisted ? "filled" : "outlined"}
        buttonColorScheme="cta"
        buttonIsSelected={isWishlisted}
        actionButton={{
          onClick: handleWishlist
        }}
        
        // 가격 정보 (캡션)
        showCaption={true}
        captionText="₩29,900"
        
        // 카드 클릭
        onClick={() => console.log('상품 상세 보기')}
      />
      
      {/* 별도 구매 버튼 */}
      <div style={{ marginTop: '12px' }}>
        <Button
          isFullWidth
          colorScheme="primary"
          leftIcon="LineIconsShoppingCartIcon"
          isLoading={isLoading}
          onClick={handleAddToCart}
        >
          {isLoading ? '추가 중...' : '장바구니 담기'}
        </Button>
      </div>
    </div>
  );
}
```

### 블로그 포스트 카드

```tsx
function BlogPostCard() {
  return (
    <Card
      variant="outlined"
      title="System-02 디자인 가이드"
      description="Friendly & Bright 테마의 디자인 원칙과 사용법을 알아보세요."
      
      // 썸네일 이미지
      imageUrl="https://via.placeholder.com/400x200"
      imageHeight="200"
      imageAspectRatio="landscape.wide"
      
      // 카테고리 뱃지
      showBadge={true}
      badgeText="Design"
      badgeColor="primary"
      badgeSize="sm"
      
      // 작성자 정보 (라벨)
      showLabel={true}
      labelText="작성자: 디자인팀"
      
      // 날짜 정보 (캡션)
      showCaption={true}
      captionText="2024년 12월 28일"
      
      // 읽기 버튼
      buttonPosition="bottom-right"
      buttonText="읽기"
      buttonIcon="LineIconsBookOpenIcon"
      buttonVariant="filled"
      buttonColorScheme="primary"
      showActionButton={true}
      
      onClick={() => console.log('포스트 읽기')}
    />
  );
}
```

### 사용자 프로필 카드

```tsx
function UserProfileCard() {
  const [isFollowing, setIsFollowing] = useState(false);
  
  return (
    <Card
      variant="filled"
      title="김디자이너"
      description="UX/UI 디자이너 • 서울"
      
      // 프로필 이미지
      imageUrl="https://via.placeholder.com/120x120"
      imageHeight="120"
      imageAspectRatio="square"
      imageObjectFit="cover"
      
      // 인증 뱃지
      showBadge={true}
      badgeText="인증됨"
      badgeColor="primary"
      badgeIconName="LineIconsCheckCircleIcon"
      badgeLayout="text+icon"
      badgeSize="sm"
      
      // 팔로워 수 (캡션)
      showCaption={true}
      captionText="팔로워 1,234명"
      
      // 팔로우 버튼
      buttonPosition="bottom-full"
      buttonText={isFollowing ? "팔로잉" : "팔로우"}
      buttonIcon={isFollowing ? "LineIconsCheckIcon" : "LineIconsPlusIcon"}
      buttonVariant={isFollowing ? "outlined" : "filled"}
      buttonColorScheme="primary"
      buttonIsSelected={isFollowing}
      showActionButton={true}
      actionButton={{
        onClick: () => setIsFollowing(!isFollowing)
      }}
      
      onClick={() => console.log('프로필 보기')}
    />
  );
}
```

### 이벤트 카드

```tsx
function EventCard() {
  const [isInterested, setIsInterested] = useState(false);
  
  return (
    <Card
      variant="outlined"
      title="연말 특가 세일"
      description="모든 상품 최대 70% 할인! 놓치지 마세요."
      
      // 이벤트 배너 이미지
      imageUrl="https://via.placeholder.com/400x160"
      imageHeight="160"
      imageAspectRatio="landscape.wide"
      
      // 한정 시간 뱃지
      showBadge={true}
      badgeText="D-3"
      badgeColor="warning"
      badgeIconName="LineIconsClockIcon"
      badgeLayout="text+icon"
      badgeType="circle"
      
      // 이벤트 기간 (라벨)
      showLabel={true}
      labelText="2024.12.25 - 2024.12.31"
      
      // 관심 표시 버튼 (우상단)
      showActionButton={true}
      buttonPosition="top-right"
      buttonType="icon-only"
      buttonIcon="LineIconsStarIcon"
      buttonVariant={isInterested ? "filled" : "outlined"}
      buttonColorScheme="warning"
      buttonIsSelected={isInterested}
      actionButton={{
        onClick: () => setIsInterested(!isInterested)
      }}
      
      onClick={() => console.log('이벤트 상세 보기')}
    />
  );
}
```

### 상품 그리드 레이아웃

```tsx
function ProductGrid() {
  const products = [
    {
      id: 1,
      title: "무선 이어폰",
      price: "₩89,000",
      originalPrice: "₩129,000",
      discount: "31% OFF",
      image: "https://via.placeholder.com/300x300",
      isNew: true,
      rating: 4.8
    },
    {
      id: 2,
      title: "스마트 워치",
      price: "₩299,000",
      image: "https://via.placeholder.com/300x300",
      isBestseller: true,
      rating: 4.9
    },
    {
      id: 3,
      title: "노트북 스탠드",
      price: "₹45,000",
      image: "https://via.placeholder.com/300x300",
      isLimited: true,
      rating: 4.7
    }
  ];
  
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
      gap: '20px',
      padding: '20px'
    }}>
      {products.map(product => (
        <Card
          key={product.id}
          variant="filled"
          title={product.title}
          description={`⭐ ${product.rating} 평점`}
          
          // 상품 이미지
          imageUrl={product.image}
          imageHeight="200"
          imageObjectFit="cover"
          
          // 상태 뱃지
          showBadge={true}
          badgeText={
            product.discount ? product.discount :
            product.isNew ? "NEW" :
            product.isBestseller ? "BEST" :
            product.isLimited ? "Limited" : "상품"
          }
          badgeColor={
            product.discount ? "cta" :
            product.isNew ? "primary" :
            product.isBestseller ? "warning" :
            product.isLimited ? "error" : "secondary"
          }
          badgeIconName={
            product.discount ? "LineIconsFireIcon" :
            product.isNew ? "LineIconsStarIcon" :
            product.isBestseller ? "LineIconsTrophyIcon" :
            product.isLimited ? "LineIconsClockIcon" : undefined
          }
          badgeLayout={
            product.discount || product.isNew || product.isBestseller || product.isLimited 
              ? "text+icon" : "only text"
          }
          
          // 가격 정보
          showCaption={true}
          captionText={product.price}
          
          // 좋아요 버튼
          showActionButton={true}
          buttonPosition="top-right"
          buttonType="icon-only"
          buttonIcon="LineIconsHeartIcon"
          buttonVariant="outlined"
          buttonColorScheme="cta"
          
          onClick={() => console.log(`${product.title} 상세 보기`)}
        />
      ))}
    </div>
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **Filled**: `secondary-system02-1-rest` 배경, `secondary-system02-2-rest` 테두리
- **Outlined**: 투명 배경, `secondary-system02-2-rest` 테두리  
- **Transparent**: 완전 투명, 테두리 없음

### 형태적 특징 (더 친근한 디자인)

- **Border Radius**: `xl` 토큰 사용 (더 둥근 모서리)
- **Box Shadow**: `20` 토큰 (더 자연스러운 그림자)
- **패딩**: `lg` (24px, 더 여유로운 간격)
- **컨텐츠 간격**: `xxl` (29px, 넓은 요소 간 간격)

### 이미지 처리

- **이미지 Border Radius**: `lg` (10px)
- **기본 높이**: 242px
- **Aspect Ratio**: 다양한 비율 지원
- **Object Fit**: cover, contain, fill 등 지원

## Foundation 토큰 사용

### 색상 토큰

```css
/* 카드 배경 */
background-color: var(--foundation-foundation-color-secondary-system02-1-rest);
border-color: var(--foundation-foundation-color-secondary-system02-2-rest);

/* 그림자 */
box-shadow: var(--foundation-foundation-shadow-20);
```

### 크기 토큰

```css
/* Border Radius */
border-radius: var(--foundation-foundation-border-radius-xl);

/* 간격 */
gap: var(--foundation-foundation-spacing-xxl);
padding: var(--foundation-foundation-spacing-lg);
```

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

```tsx
// 키보드 탐색 지원
<Card
  title="접근 가능한 카드"
  description="키보드로 탐색 가능합니다."
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
  tabIndex={0}
/>
```

### 스크린 리더 지원

```tsx
// 의미있는 구조와 라벨
<Card
  title="상품명"
  description="상품 설명"
  aria-label="상품 카드: 상품명, 가격 29,900원"
  role="article"
  badgeText="할인"
  aria-describedby="discount-badge"
/>
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 관련된 정보를 논리적으로 그룹화
- 적절한 이미지 비율과 크기 사용
- 명확한 액션 버튼 배치
- 일관된 뱃지 색상 스키마 유지

✅ **커머스 환경 최적화**
```tsx
// 상품 카드
<Card
  title="상품명"
  imageUrl="product.jpg"
  badgeText="SALE"
  badgeColor="cta"
  buttonPosition="bottom-full"
  buttonText="구매하기"
/>

// 카테고리 카드
<Card
  variant="outlined"
  title="카테고리명"
  imageUrl="category.jpg"
  buttonPosition="bottom-right"
  buttonText="보기"
/>
```

### 주의사항

❌ **DON'T**
- 너무 많은 정보를 한 카드에 포함
- 불필요한 뱃지나 버튼 남용
- 이미지 없이 빈 공간 방치
- 접근성 속성 누락

## 관련 컴포넌트

- **Badge**: 카드 내 상태/카테고리 표시
- **Button**: 카드 내 액션 버튼
- **TextDisplay**: 카드 내 텍스트 정보
- **Surface**: 카드 배경과 테두리
- **Frame**: 카드 내부 레이아웃
- **Sizing**: 카드 크기 조정

## 참고 자료

- [Card Design Best Practices](https://uxplanet.org/card-design-fundamentals-how-to-make-cards-work-for-users-and-not-against-them-5b5c1b1a2c4a)
- [E-commerce Card Patterns](https://baymard.com/blog/product-card-design)
- [Accessible Card Components](https://inclusive-components.design/cards/) 