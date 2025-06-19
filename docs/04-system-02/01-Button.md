---
title: 'Button - System 02'
description: 'Friendly & Bright 테마의 버튼 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['Button', 'Action', 'Interactive', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# Button - System 02

System-02의 Button 컴포넌트는 Friendly & Bright 테마에 최적화된 버튼입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 밝은 디자인으로, 사용자의 행동을 유도하는 매력적인 인터페이스를 제공합니다.

## 개요

Button 컴포넌트는 사용자 상호작용을 위한 핵심 컴포넌트로, Surface, Frame, Text, Icon 프리미티브를 조합하여 다양한 스타일과 상태를 지원하는 액션 버튼을 제공합니다.

### 핵심 특징

- **3가지 변형**: filled, outlined, transparent
- **3가지 색상**: primary, secondary, cta (Call-to-Action)
- **5가지 크기**: xs(24px), sm(28px), md(32px), lg(36px), xl(40px)
- **3가지 타입**: text-only, text-icon, icon-only
- **상태 관리**: rest, hovered, pressed, disabled, loading, selected
- **아이콘 지원**: 좌우 아이콘 배치
- **전체 너비**: 컨테이너 전체 너비 지원
- **프리미티브 조합**: Surface + Frame + Text + Icon

## Props 인터페이스

```typescript
interface ButtonProps {
  // 스타일 변형
  variant?: 'filled' | 'outlined' | 'transparent';
  buttonType?: 'text-icon' | 'text-only' | 'icon-only';
  colorScheme?: 'primary' | 'secondary' | 'cta';
  
  // 크기 및 레이아웃
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  isFullWidth?: boolean;
  textAlign?: 'left' | 'center' | 'right';
  
  // 상태
  isLoading?: boolean;
  isSelected?: boolean;
  disabled?: boolean;
  
  // 아이콘
  leftIcon?: IconName;
  rightIcon?: IconName;
  
  // 이벤트
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  // 컨텐츠
  children?: React.ReactNode;
}
```

## 기본 사용법

### 기본 버튼

```tsx
import { Button } from 'lumir-design-system-02';

function BasicButton() {
  return (
    <Button onClick={() => console.log('클릭!')}>
      기본 버튼
    </Button>
  );
}
```

### 아이콘과 함께

```tsx
function IconButton() {
  return (
    <Button 
      leftIcon="LineIconsShoppingCartIcon"
      onClick={() => console.log('장바구니 추가')}
    >
      장바구니 담기
    </Button>
  );
}
```

### 아이콘 전용 버튼

```tsx
function IconOnlyButton() {
  return (
    <Button 
      buttonType="icon-only"
      leftIcon="LineIconsHeartIcon"
      onClick={() => console.log('좋아요')}
    />
  );
}
```

## 변형 스타일

### Filled (기본)

```tsx
function FilledButtons() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant="filled" colorScheme="primary">
        Primary
      </Button>
      <Button variant="filled" colorScheme="secondary">
        Secondary
      </Button>
      <Button variant="filled" colorScheme="cta">
        Call to Action
      </Button>
    </div>
  );
}
```

### Outlined

```tsx
function OutlinedButtons() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant="outlined" colorScheme="primary">
        Primary
      </Button>
      <Button variant="outlined" colorScheme="secondary">
        Secondary
      </Button>
      <Button variant="outlined" colorScheme="cta">
        Call to Action
      </Button>
    </div>
  );
}
```

### Transparent

```tsx
function TransparentButtons() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button variant="transparent" colorScheme="primary">
        Primary
      </Button>
      <Button variant="transparent" colorScheme="secondary">
        Secondary
      </Button>
      <Button variant="transparent" colorScheme="cta">
        Call to Action
      </Button>
    </div>
  );
}
```

## 크기 변형

### 모든 크기

```tsx
function AllSizes() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  );
}
```

### 아이콘 크기 비교

```tsx
function IconSizes() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button size="xs" leftIcon="LineIconsStarIcon">XS</Button>
      <Button size="sm" leftIcon="LineIconsStarIcon">SM</Button>
      <Button size="md" leftIcon="LineIconsStarIcon">MD</Button>
      <Button size="lg" leftIcon="LineIconsStarIcon">LG</Button>
      <Button size="xl" leftIcon="LineIconsStarIcon">XL</Button>
    </div>
  );
}
```

## 상태 변형

### 로딩 상태

```tsx
function LoadingButtons() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button isLoading>로딩 중...</Button>
      <Button 
        isLoading 
        leftIcon="LineIconsShoppingCartIcon"
      >
        처리 중...
      </Button>
      <Button 
        isLoading 
        buttonType="icon-only"
        leftIcon="LineIconsRefreshIcon"
      />
    </div>
  );
}
```

### 선택 상태

```tsx
function SelectedButtons() {
  const [selected, setSelected] = useState(false);
  
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button 
        isSelected={selected}
        onClick={() => setSelected(!selected)}
        leftIcon="LineIconsHeartIcon"
      >
        {selected ? '좋아요 취소' : '좋아요'}
      </Button>
      
      <Button 
        isSelected={selected}
        buttonType="icon-only"
        leftIcon="LineIconsBookmarkIcon"
        onClick={() => setSelected(!selected)}
      />
    </div>
  );
}
```

### 비활성화 상태

```tsx
function DisabledButtons() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Button disabled>비활성화</Button>
      <Button disabled leftIcon="LineIconsLockIcon">
        잠김
      </Button>
      <Button 
        disabled 
        buttonType="icon-only"
        leftIcon="LineIconsCloseIcon"
      />
    </div>
  );
}
```

## 전체 너비 버튼

### 기본 전체 너비

```tsx
function FullWidthButton() {
  return (
    <div style={{ width: '300px' }}>
      <Button 
        isFullWidth
        colorScheme="cta"
        leftIcon="LineIconsShoppingCartIcon"
      >
        지금 구매하기
      </Button>
    </div>
  );
}
```

### 텍스트 정렬

```tsx
function TextAlignButtons() {
  return (
    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Button isFullWidth textAlign="left" leftIcon="LineIconsArrowLeftIcon">
        왼쪽 정렬
      </Button>
      <Button isFullWidth textAlign="center">
        중앙 정렬
      </Button>
      <Button isFullWidth textAlign="right" rightIcon="LineIconsArrowRightIcon">
        오른쪽 정렬
      </Button>
    </div>
  );
}
```

## 고급 사용 예제

### 이커머스 상품 카드 버튼

```tsx
function ProductCardButtons() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAddToCart = async () => {
    setIsLoading(true);
    // 장바구니 추가 로직
    setTimeout(() => setIsLoading(false), 2000);
  };
  
  return (
    <div style={{ 
      padding: '20px', 
      border: '1px solid #e1e5e9', 
      borderRadius: '12px',
      maxWidth: '300px'
    }}>
      {/* 상품 정보 영역 */}
      <div style={{ marginBottom: '16px' }}>
        <h3>스마트폰 케이스</h3>
        <p style={{ color: '#666', fontSize: '14px' }}>프리미엄 실리콘 소재</p>
        <p style={{ fontWeight: 'bold', fontSize: '18px', color: '#007bff' }}>₩29,900</p>
      </div>
      
      {/* 액션 버튼들 */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
        <Button
          isFullWidth
          colorScheme="cta"
          leftIcon="LineIconsShoppingCartIcon"
          isLoading={isLoading}
          onClick={handleAddToCart}
        >
          {isLoading ? '추가 중...' : '장바구니 담기'}
        </Button>
        
        <Button
          buttonType="icon-only"
          variant="outlined"
          colorScheme="secondary"
          leftIcon="LineIconsHeartIcon"
          isSelected={isWishlisted}
          onClick={() => setIsWishlisted(!isWishlisted)}
        />
      </div>
      
      {/* 즉시 구매 버튼 */}
      <Button
        isFullWidth
        variant="outlined"
        colorScheme="primary"
        leftIcon="LineIconsFlashIcon"
      >
        바로 구매
      </Button>
    </div>
  );
}
```

### 소셜 액션 버튼 그룹

```tsx
function SocialActionButtons() {
  const [counts, setCounts] = useState({
    likes: 42,
    shares: 7,
    comments: 15
  });
  const [userActions, setUserActions] = useState({
    liked: false,
    shared: false
  });
  
  const handleLike = () => {
    setUserActions(prev => ({ ...prev, liked: !prev.liked }));
    setCounts(prev => ({ 
      ...prev, 
      likes: prev.likes + (userActions.liked ? -1 : 1) 
    }));
  };
  
  const handleShare = () => {
    setUserActions(prev => ({ ...prev, shared: true }));
    setCounts(prev => ({ ...prev, shares: prev.shares + 1 }));
  };
  
  return (
    <div style={{ 
      padding: '16px', 
      backgroundColor: '#f8f9fa', 
      borderRadius: '8px',
      maxWidth: '400px'
    }}>
      <p style={{ marginBottom: '16px' }}>
        "새로운 디자인 시스템이 정말 마음에 들어요! 🎨"
      </p>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button
          size="sm"
          variant="transparent"
          colorScheme={userActions.liked ? 'cta' : 'secondary'}
          leftIcon="LineIconsHeartIcon"
          isSelected={userActions.liked}
          onClick={handleLike}
        >
          {counts.likes}
        </Button>
        
        <Button
          size="sm"
          variant="transparent"
          colorScheme="secondary"
          leftIcon="LineIconsMessageIcon"
        >
          {counts.comments}
        </Button>
        
        <Button
          size="sm"
          variant="transparent"
          colorScheme={userActions.shared ? 'primary' : 'secondary'}
          leftIcon="LineIconsShareIcon"
          onClick={handleShare}
        >
          {counts.shares}
        </Button>
        
        <Button
          size="sm"
          variant="transparent"
          colorScheme="secondary"
          leftIcon="LineIconsBookmarkIcon"
        >
          저장
        </Button>
      </div>
    </div>
  );
}
```

### 결제 플로우 버튼

```tsx
function PaymentFlowButtons() {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleNext = async () => {
    if (step === 3) {
      setIsProcessing(true);
      // 결제 처리 로직
      setTimeout(() => {
        setIsProcessing(false);
        setStep(4);
      }, 3000);
    } else {
      setStep(step + 1);
    }
  };
  
  const getStepContent = () => {
    switch (step) {
      case 1:
        return {
          title: '장바구니 확인',
          buttonText: '배송지 선택',
          icon: 'LineIconsShoppingCartIcon'
        };
      case 2:
        return {
          title: '배송지 정보',
          buttonText: '결제 방법 선택',
          icon: 'LineIconsTruckIcon'
        };
      case 3:
        return {
          title: '결제 정보',
          buttonText: '결제하기',
          icon: 'LineIconsCreditCardIcon'
        };
      case 4:
        return {
          title: '주문 완료',
          buttonText: '주문 내역 보기',
          icon: 'LineIconsCheckCircleIcon'
        };
      default:
        return {
          title: '오류',
          buttonText: '다시 시도',
          icon: 'LineIconsRefreshIcon'
        };
    }
  };
  
  const stepContent = getStepContent();
  
  return (
    <div style={{ 
      padding: '24px', 
      border: '1px solid #e1e5e9', 
      borderRadius: '12px',
      maxWidth: '400px',
      textAlign: 'center'
    }}>
      <h3>{stepContent.title}</h3>
      <p style={{ color: '#666', marginBottom: '24px' }}>
        단계 {step}/4
      </p>
      
      {/* 진행 바 */}
      <div style={{ 
        width: '100%', 
        height: '4px', 
        backgroundColor: '#e1e5e9', 
        borderRadius: '2px',
        marginBottom: '24px'
      }}>
        <div style={{ 
          width: `${(step / 4) * 100}%`, 
          height: '100%', 
          backgroundColor: '#007bff', 
          borderRadius: '2px',
          transition: 'width 0.3s ease'
        }} />
      </div>
      
      <div style={{ display: 'flex', gap: '12px' }}>
        {step > 1 && step < 4 && (
          <Button
            variant="outlined"
            colorScheme="secondary"
            leftIcon="LineIconsArrowLeftIcon"
            onClick={() => setStep(step - 1)}
          >
            이전
          </Button>
        )}
        
        <Button
          isFullWidth
          colorScheme={step === 4 ? 'primary' : 'cta'}
          leftIcon={stepContent.icon}
          isLoading={isProcessing}
          onClick={step < 4 ? handleNext : () => console.log('주문 내역 보기')}
        >
          {isProcessing ? '결제 처리 중...' : stepContent.buttonText}
        </Button>
      </div>
    </div>
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **Primary**: `primary-system02-1-*` - 친근한 파란색 계열
- **Secondary**: `secondary-system02-2-*` - 부드러운 회색 계열  
- **CTA**: `cta-system02-1-*` - 활기찬 액션 색상

### 크기 시스템 (더 여유로운 패딩)

- **xs**: 24px 높이, sm 패딩
- **sm**: 28px 높이, sm 패딩
- **md**: 32px 높이, md 패딩
- **lg**: 36px 높이, lg 패딩
- **xl**: 40px 높이, xl 패딩

### 아이콘 크기 (더 큰 아이콘)

- **xs**: 12px 아이콘
- **sm**: 16px 아이콘 (System-01 대비 증가)
- **md**: 20px 아이콘 (System-01 대비 증가)
- **lg**: 24px 아이콘 (System-01 대비 증가)
- **xl**: 28px 아이콘 (System-01 대비 증가)

## Foundation 토큰 사용

### 색상 토큰

```css
/* Primary 색상 */
background-color: var(--foundation-foundation-color-primary-system02-1-rest);
background-color: var(--foundation-foundation-color-primary-system02-1-hovered);
background-color: var(--foundation-foundation-color-primary-system02-1-pressed);

/* CTA 색상 */
background-color: var(--foundation-foundation-color-cta-system02-1-rest);
background-color: var(--foundation-foundation-color-cta-system02-1-hovered);
background-color: var(--foundation-foundation-color-cta-system02-1-pressed);
```

### 크기 토큰

```css
/* 높이 토큰 */
height: var(--foundation-foundation-sizing-sm); /* xs: 24px */
height: var(--foundation-foundation-sizing-md); /* sm: 28px */
height: var(--foundation-foundation-sizing-lg); /* md: 32px */

/* 패딩 토큰 */
padding: var(--foundation-foundation-spacing-sm);
padding: var(--foundation-foundation-spacing-md);
padding: var(--foundation-foundation-spacing-lg);
```

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

```tsx
// 키보드 이벤트 지원
<Button
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick();
    }
  }}
>
  접근 가능한 버튼
</Button>
```

### 스크린 리더 지원

```tsx
// 적절한 ARIA 속성
<Button
  aria-label="장바구니에 상품 추가"
  leftIcon="LineIconsShoppingCartIcon"
  isLoading={isLoading}
  aria-busy={isLoading}
>
  {isLoading ? '추가 중...' : '장바구니 담기'}
</Button>
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확한 액션을 나타내는 텍스트 사용
- 적절한 색상 스키마 선택 (CTA는 주요 액션에만)
- 로딩 상태 시 적절한 피드백 제공
- 아이콘과 텍스트의 의미적 일치

✅ **커머스 환경 최적화**
```tsx
// 구매 유도 버튼
<Button colorScheme="cta" size="lg">
  지금 구매하기
</Button>

// 위시리스트 토글
<Button 
  variant="outlined"
  isSelected={isWishlisted}
  leftIcon="LineIconsHeartIcon"
>
  찜하기
</Button>
```

### 주의사항

❌ **DON'T**
- 너무 많은 CTA 버튼 동시 사용
- 불명확한 액션 텍스트
- 로딩 상태 없는 비동기 액션
- 접근성 속성 누락

## 관련 컴포넌트

- **Card**: 상품 카드 내 액션 버튼
- **Badge**: 버튼과 함께 상태 표시
- **Icon**: 버튼 내 아이콘
- **Text**: 버튼 라벨

## 참고 자료

- [Button Design Best Practices](https://uxplanet.org/button-ux-design-best-practices-types-and-states-647cf4ae0fc6)
- [E-commerce Button Guidelines](https://baymard.com/blog/button-design-guidelines)
- [Accessible Button Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/button/) 