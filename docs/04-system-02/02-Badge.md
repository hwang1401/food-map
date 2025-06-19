---
title: 'Badge - System 02'
description: 'Friendly & Bright 테마의 뱃지 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['Badge', 'Status', 'Label', 'Indicator', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# Badge - System 02

System-02의 Badge 컴포넌트는 Friendly & Bright 테마에 최적화된 뱃지입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 상태나 카테고리를 시각적으로 표현하는 컴팩트한 라벨을 제공합니다.

## 개요

Badge 컴포넌트는 상태, 카테고리, 라벨을 표시하는 컴파운드 컴포넌트로, Surface, Frame, Text, Icon 프리미티브를 조합하여 다양한 스타일과 크기의 뱃지를 제공합니다.

### 핵심 특징

- **5가지 색상**: primary, secondary, cta, error, warning
- **3가지 크기**: sm, md, lg
- **3가지 레이아웃**: text+icon, only text, only icon
- **3가지 스타일**: filled, outlined, transparent
- **2가지 형태**: round-square, circle
- **더 둥근 모서리**: xl radius로 친근한 느낌
- **넓은 간격**: 아이콘-텍스트 간격 확대
- **프리미티브 조합**: Surface + Frame + Text + Icon

## Props 인터페이스

```typescript
interface BadgeProps {
  // 색상 및 스타일
  color: 'primary' | 'secondary' | 'cta' | 'error' | 'warning';
  style?: 'filled' | 'outlined' | 'transparent';
  
  // 크기 및 형태
  size?: 'sm' | 'md' | 'lg';
  type?: 'round-square' | 'circle';
  
  // 레이아웃 및 컨텐츠
  layout?: 'text+icon' | 'only text' | 'only icon';
  text?: string;
  iconName?: IconName;
  iconType?: 'line' | 'flat';
  
  // 상태
  disabled?: boolean;
  
  // 기타
  className?: string;
}
```

## 기본 사용법

### 텍스트 전용 뱃지

```tsx
import { Badge } from 'lumir-design-system-02';

function TextBadges() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge color="primary" text="Primary" />
      <Badge color="secondary" text="Secondary" />
      <Badge color="cta" text="Hot" />
      <Badge color="error" text="Error" />
      <Badge color="warning" text="Warning" />
    </div>
  );
}
```

### 아이콘과 텍스트

```tsx
function IconTextBadges() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge 
        color="primary" 
        layout="text+icon"
        text="New"
        iconName="LineIconsStarIcon"
      />
      <Badge 
        color="cta" 
        layout="text+icon"
        text="Sale"
        iconName="LineIconsFireIcon"
      />
      <Badge 
        color="warning" 
        layout="text+icon"
        text="Limited"
        iconName="LineIconsClockIcon"
      />
    </div>
  );
}
```

### 아이콘 전용 뱃지

```tsx
function IconOnlyBadges() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge 
        color="primary" 
        layout="only icon"
        iconName="LineIconsCheckIcon"
      />
      <Badge 
        color="error" 
        layout="only icon"
        iconName="LineIconsCloseIcon"
      />
      <Badge 
        color="warning" 
        layout="only icon"
        iconName="LineIconsWarningIcon"
      />
    </div>
  );
}
```

## 스타일 변형

### Filled (기본)

```tsx
function FilledBadges() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge color="primary" style="filled" text="Primary" />
      <Badge color="secondary" style="filled" text="Secondary" />
      <Badge color="cta" style="filled" text="CTA" />
      <Badge color="error" style="filled" text="Error" />
      <Badge color="warning" style="filled" text="Warning" />
    </div>
  );
}
```

### Outlined

```tsx
function OutlinedBadges() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge color="primary" style="outlined" text="Primary" />
      <Badge color="secondary" style="outlined" text="Secondary" />
      <Badge color="cta" style="outlined" text="CTA" />
      <Badge color="error" style="outlined" text="Error" />
      <Badge color="warning" style="outlined" text="Warning" />
    </div>
  );
}
```

### Transparent

```tsx
function TransparentBadges() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge color="primary" style="transparent" text="Primary" />
      <Badge color="secondary" style="transparent" text="Secondary" />
      <Badge color="cta" style="transparent" text="CTA" />
      <Badge color="error" style="transparent" text="Error" />
      <Badge color="warning" style="transparent" text="Warning" />
    </div>
  );
}
```

## 크기 변형

### 모든 크기

```tsx
function AllSizes() {
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Badge color="primary" size="sm" text="Small" />
      <Badge color="primary" size="md" text="Medium" />
      <Badge color="primary" size="lg" text="Large" />
    </div>
  );
}
```

### 아이콘과 함께 크기 비교

```tsx
function IconSizes() {
  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Badge 
        color="cta" 
        size="sm" 
        layout="text+icon"
        text="SM"
        iconName="LineIconsStarIcon"
      />
      <Badge 
        color="cta" 
        size="md" 
        layout="text+icon"
        text="MD"
        iconName="LineIconsStarIcon"
      />
      <Badge 
        color="cta" 
        size="lg" 
        layout="text+icon"
        text="LG"
        iconName="LineIconsStarIcon"
      />
    </div>
  );
}
```

## 형태 변형

### Round-Square vs Circle

```tsx
function ShapeVariants() {
  return (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px' }}>Round-Square (기본)</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge color="primary" type="round-square" text="Badge" />
          <Badge color="cta" type="round-square" layout="only icon" iconName="LineIconsHeartIcon" />
        </div>
      </div>
      
      <div>
        <p style={{ marginBottom: '8px', fontSize: '14px' }}>Circle</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge color="primary" type="circle" text="99+" />
          <Badge color="error" type="circle" layout="only icon" iconName="LineIconsCloseIcon" />
        </div>
      </div>
    </div>
  );
}
```

## 상태 변형

### 비활성화 상태

```tsx
function DisabledBadges() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge color="primary" text="Disabled" disabled />
      <Badge 
        color="cta" 
        layout="text+icon"
        text="Disabled"
        iconName="LineIconsStarIcon"
        disabled 
      />
      <Badge 
        color="secondary" 
        layout="only icon"
        iconName="LineIconsCheckIcon"
        disabled 
      />
    </div>
  );
}
```

## 고급 사용 예제

### 이커머스 상품 뱃지

```tsx
function ProductBadges() {
  const productBadges = [
    { 
      type: 'new', 
      badge: { color: 'primary', text: 'NEW', iconName: 'LineIconsStarIcon' } 
    },
    { 
      type: 'sale', 
      badge: { color: 'cta', text: '50% OFF', iconName: 'LineIconsFireIcon' } 
    },
    { 
      type: 'limited', 
      badge: { color: 'warning', text: 'Limited', iconName: 'LineIconsClockIcon' } 
    },
    { 
      type: 'bestseller', 
      badge: { color: 'primary', text: 'Best', iconName: 'LineIconsTrophyIcon' } 
    },
    { 
      type: 'soldout', 
      badge: { color: 'error', text: 'Sold Out', style: 'outlined' } 
    }
  ];
  
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
      gap: '16px',
      maxWidth: '600px'
    }}>
      {productBadges.map((item, index) => (
        <div 
          key={index}
          style={{ 
            position: 'relative',
            padding: '16px', 
            border: '1px solid #e1e5e9', 
            borderRadius: '8px',
            backgroundColor: 'white'
          }}
        >
          {/* 상품 뱃지 */}
          <div style={{ position: 'absolute', top: '8px', right: '8px' }}>
            <Badge
              color={item.badge.color}
              style={item.badge.style || 'filled'}
              layout={item.badge.iconName ? 'text+icon' : 'only text'}
              text={item.badge.text}
              iconName={item.badge.iconName}
              size="sm"
            />
          </div>
          
          {/* 상품 정보 */}
          <div style={{ marginTop: '24px' }}>
            <h4 style={{ margin: '0 0 8px 0' }}>상품명 {index + 1}</h4>
            <p style={{ color: '#666', fontSize: '14px', margin: '0' }}>
              상품 설명이 여기에 들어갑니다.
            </p>
            <p style={{ 
              fontWeight: 'bold', 
              fontSize: '16px', 
              color: '#007bff',
              margin: '8px 0 0 0'
            }}>
              ₩{(29900 * (index + 1)).toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### 상태 표시 뱃지

```tsx
function StatusBadges() {
  const orderStatuses = [
    { status: 'pending', label: '결제 대기', color: 'warning', icon: 'LineIconsClockIcon' },
    { status: 'confirmed', label: '주문 확인', color: 'primary', icon: 'LineIconsCheckIcon' },
    { status: 'shipping', label: '배송 중', color: 'cta', icon: 'LineIconsTruckIcon' },
    { status: 'delivered', label: '배송 완료', color: 'primary', icon: 'LineIconsCheckCircleIcon' },
    { status: 'cancelled', label: '주문 취소', color: 'error', icon: 'LineIconsCloseIcon' }
  ];
  
  return (
    <div style={{ maxWidth: '400px' }}>
      <h3>주문 상태</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {orderStatuses.map((order, index) => (
          <div 
            key={order.status}
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '12px',
              backgroundColor: '#f8f9fa',
              borderRadius: '6px'
            }}
          >
            <span>주문 #{1000 + index}</span>
            <Badge
              color={order.color}
              layout="text+icon"
              text={order.label}
              iconName={order.icon}
              size="sm"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 카테고리 필터 뱃지

```tsx
function CategoryFilterBadges() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['electronics']);
  
  const categories = [
    { id: 'electronics', label: '전자제품', icon: 'LineIconsLaptopIcon' },
    { id: 'fashion', label: '패션', icon: 'LineIconsShirtIcon' },
    { id: 'home', label: '홈&리빙', icon: 'LineIconsHomeIcon' },
    { id: 'beauty', label: '뷰티', icon: 'LineIconsSparkleIcon' },
    { id: 'sports', label: '스포츠', icon: 'LineIconsFootballIcon' },
    { id: 'books', label: '도서', icon: 'LineIconsBookIcon' }
  ];
  
  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };
  
  return (
    <div style={{ maxWidth: '500px' }}>
      <h3>카테고리 필터</h3>
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: '8px',
        marginBottom: '16px'
      }}>
        {categories.map(category => {
          const isSelected = selectedCategories.includes(category.id);
          return (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer'
              }}
            >
              <Badge
                color={isSelected ? 'primary' : 'secondary'}
                style={isSelected ? 'filled' : 'outlined'}
                layout="text+icon"
                text={category.label}
                iconName={category.icon}
                size="md"
              />
            </button>
          );
        })}
      </div>
      
      <div style={{ 
        padding: '12px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '6px'
      }}>
        <strong>선택된 카테고리:</strong>
        <div style={{ marginTop: '8px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
          {selectedCategories.length > 0 ? (
            selectedCategories.map(categoryId => {
              const category = categories.find(c => c.id === categoryId);
              return category ? (
                <Badge
                  key={categoryId}
                  color="cta"
                  text={category.label}
                  size="sm"
                />
              ) : null;
            })
          ) : (
            <span style={{ color: '#666', fontSize: '14px' }}>선택된 카테고리가 없습니다</span>
          )}
        </div>
      </div>
    </div>
  );
}
```

### 알림 카운트 뱃지

```tsx
function NotificationBadges() {
  const [notifications, setNotifications] = useState({
    messages: 5,
    orders: 2,
    wishlist: 12,
    cart: 3
  });
  
  const clearNotification = (type: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [type]: 0 }));
  };
  
  return (
    <div style={{ maxWidth: '400px' }}>
      <h3>알림 센터</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '12px',
          border: '1px solid #e1e5e9',
          borderRadius: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>💬 메시지</span>
            {notifications.messages > 0 && (
              <Badge
                color="cta"
                type="circle"
                text={notifications.messages.toString()}
                size="sm"
              />
            )}
          </div>
          <button 
            onClick={() => clearNotification('messages')}
            style={{ 
              padding: '4px 8px', 
              fontSize: '12px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            읽음
          </button>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '12px',
          border: '1px solid #e1e5e9',
          borderRadius: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>📦 주문</span>
            {notifications.orders > 0 && (
              <Badge
                color="primary"
                type="circle"
                text={notifications.orders.toString()}
                size="sm"
              />
            )}
          </div>
          <button 
            onClick={() => clearNotification('orders')}
            style={{ 
              padding: '4px 8px', 
              fontSize: '12px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            확인
          </button>
        </div>
        
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '12px',
          border: '1px solid #e1e5e9',
          borderRadius: '6px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>❤️ 찜 목록</span>
            {notifications.wishlist > 9 ? (
              <Badge
                color="error"
                type="circle"
                text="9+"
                size="sm"
              />
            ) : notifications.wishlist > 0 ? (
              <Badge
                color="warning"
                type="circle"
                text={notifications.wishlist.toString()}
                size="sm"
              />
            ) : null}
          </div>
          <button 
            onClick={() => clearNotification('wishlist')}
            style={{ 
              padding: '4px 8px', 
              fontSize: '12px',
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            보기
          </button>
        </div>
      </div>
    </div>
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **Primary**: `primary-system02-1-*` - 친근한 파란색 계열
- **Secondary**: `secondary-system02-1-*` - 부드러운 회색 계열
- **CTA**: `cta-system02-1-*` - 활기찬 액션 색상
- **Error/Warning**: 상태별 전용 색상

### 형태적 특징 (더 친근한 디자인)

- **Border Radius**: `xl` 토큰 사용 (더 둥근 모서리)
- **아이콘-텍스트 간격**: `xs` 간격 (더 넓은 간격)
- **텍스트 Weight**: `regular` (더 부드러운 느낌)
- **패딩**: `xxs` (컴팩트하지만 여유로운)

### 크기별 매핑

- **lg**: label-1 텍스트, sm 아이콘
- **md**: label-2 텍스트, sm 아이콘  
- **sm**: caption-2 텍스트, xs 아이콘

## Foundation 토큰 사용

### 색상 토큰

```css
/* Primary 색상 */
background-color: var(--foundation-foundation-color-primary-system02-1-rest);
color: var(--foundation-foundation-color-primary-system02-oncolor);

/* CTA 색상 */
background-color: var(--foundation-foundation-color-cta-system02-1-rest);
border-color: var(--foundation-foundation-color-cta-system02-1-rest);
```

### 크기 토큰

```css
/* Border Radius */
border-radius: var(--foundation-foundation-border-radius-xl);
border-radius: var(--foundation-foundation-border-radius-circular);

/* 간격 */
gap: var(--foundation-foundation-spacing-xs);
padding: var(--foundation-foundation-spacing-xxs);
```

## 접근성 (WCAG 2.1 AA)

### 색상 대비

```tsx
// 충분한 색상 대비 확보
<Badge 
  color="primary" 
  style="filled"
  text="높은 대비"
/>

// 상태별 의미 전달
<Badge 
  color="error" 
  layout="text+icon"
  text="오류"
  iconName="LineIconsWarningIcon"
  aria-label="오류 상태"
/>
```

### 스크린 리더 지원

```tsx
// 의미있는 라벨 제공
<Badge 
  color="cta" 
  text="50% 할인"
  aria-label="50퍼센트 할인 이벤트"
/>

// 아이콘 전용 뱃지의 접근성
<Badge 
  color="primary" 
  layout="only icon"
  iconName="LineIconsCheckIcon"
  aria-label="완료됨"
/>
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확한 의미를 가진 색상 사용
- 적절한 크기와 스타일 선택
- 일관된 색상 스키마 유지
- 접근성을 고려한 색상 대비

✅ **커머스 환경 최적화**
```tsx
// 할인 뱃지
<Badge color="cta" text="50% OFF" iconName="LineIconsFireIcon" />

// 신상품 뱃지  
<Badge color="primary" text="NEW" iconName="LineIconsStarIcon" />

// 재고 부족 경고
<Badge color="warning" text="Limited" iconName="LineIconsClockIcon" />
```

### 주의사항

❌ **DON'T**
- 너무 많은 뱃지 동시 사용
- 의미 없는 색상 조합
- 가독성을 해치는 크기 선택
- 접근성 속성 누락

## 관련 컴포넌트

- **Button**: 액션 버튼과 함께 상태 표시
- **Card**: 카드 내 상태/카테고리 표시
- **Icon**: 뱃지 내 아이콘
- **Text**: 뱃지 라벨

## 참고 자료

- [Badge Design Patterns](https://uxplanet.org/badge-design-patterns-notifications-and-status-indicators-8c3f5a3b9c4a)
- [E-commerce Badge Guidelines](https://baymard.com/blog/product-badges)
- [Accessible Status Indicators](https://www.w3.org/WAI/ARIA/apg/patterns/alert/) 