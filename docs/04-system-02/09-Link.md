---
title: 'Link - System 02'
description: 'Friendly & Bright 테마의 링크 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['Link', 'Navigation', 'Text', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# Link - System 02

System-02의 Link 컴포넌트는 Friendly & Bright 테마에 최적화된 링크입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 내비게이션과 외부 링크를 위한 텍스트 링크를 제공합니다.

## 개요

Link 컴포넌트는 페이지 간 내비게이션이나 외부 링크를 위한 컴포넌트로, Text와 Icon 프리미티브를 조합하여 다양한 스타일의 링크 인터페이스를 제공합니다.

### 핵심 특징

- **4가지 크기**: xs, sm, md, lg
- **3가지 변형**: default, underline, button-style
- **아이콘 지원**: 좌우 아이콘 배치
- **상태 관리**: rest, hovered, pressed, visited
- **외부 링크**: target과 rel 속성 지원
- **프리미티브 조합**: Text + Icon

## Props 인터페이스

```typescript
interface LinkProps {
  // 내용
  children: React.ReactNode;
  href: string;
  
  // 스타일
  variant?: 'default' | 'underline' | 'button-style';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  
  // 아이콘
  leftIcon?: string;
  rightIcon?: string;
  
  // 링크 속성
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
  
  // 이벤트
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  
  // 스타일
  className?: string;
  style?: React.CSSProperties;
}
```

## 기본 사용법

### 기본 링크

```tsx
import { Link } from 'lumir-design-system-02';

function BasicLink() {
  return (
    <Link href="/products">상품 보러가기</Link>
  );
}
```

### 외부 링크

```tsx
function ExternalLink() {
  return (
    <Link 
      href="https://example.com" 
      target="_blank"
      rightIcon="LineIconsExternalLinkIcon"
    >
      외부 사이트 방문
    </Link>
  );
}
```

### 아이콘이 있는 링크

```tsx
function IconLink() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Link 
        href="/search" 
        leftIcon="LineIconsSearchIcon"
      >
        상품 검색
      </Link>
      <Link 
        href="/cart" 
        leftIcon="LineIconsShoppingCartIcon"
      >
        장바구니
      </Link>
      <Link 
        href="/support" 
        rightIcon="LineIconsArrowRightIcon"
      >
        고객지원
      </Link>
    </div>
  );
}
```

## 변형 스타일

### Default

```tsx
function DefaultLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Link variant="default" href="/home">홈으로</Link>
      <Link variant="default" href="/about">회사소개</Link>
      <Link variant="default" href="/contact">문의하기</Link>
    </div>
  );
}
```

### Underline

```tsx
function UnderlineLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Link variant="underline" href="/terms">이용약관</Link>
      <Link variant="underline" href="/privacy">개인정보처리방침</Link>
      <Link variant="underline" href="/faq">자주 묻는 질문</Link>
    </div>
  );
}
```

### Button Style

```tsx
function ButtonStyleLinks() {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      <Link 
        variant="button-style" 
        href="/shop"
        leftIcon="LineIconsShoppingBagIcon"
      >
        쇼핑하기
      </Link>
      <Link 
        variant="button-style" 
        href="/deals"
        leftIcon="LineIconsFireIcon"
      >
        특가상품
      </Link>
    </div>
  );
}
```

## 크기 변형

```tsx
function LinkSizes() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Link size="xs" href="/xs">Extra Small 링크</Link>
      <Link size="sm" href="/sm">Small 링크</Link>
      <Link size="md" href="/md">Medium 링크</Link>
      <Link size="lg" href="/lg">Large 링크</Link>
    </div>
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **Default**: `primary-system02-1-rest` 기본 색상
- **Hover**: `primary-system02-1-hovered` 호버 색상
- **Visited**: `primary-system02-2-rest` 방문한 링크
- **Button Style**: 버튼과 유사한 스타일링

### 형태적 특징 (더 친근한 디자인)

- **Border Radius**: button-style에서 xl radius 사용
- **패딩**: button-style에서 여유로운 패딩
- **언더라인**: underline 변형에서 자연스러운 밑줄
- **아이콘 간격**: 적절한 아이콘-텍스트 간격

## Foundation 토큰 사용

```css
/* 링크 색상 */
color: var(--foundation-foundation-color-primary-system02-1-rest);
color: var(--foundation-foundation-color-primary-system02-1-hovered); /* 호버 */

/* Button Style 배경 */
background-color: var(--foundation-foundation-color-primary-system02-1-rest);
border-radius: var(--foundation-foundation-border-radius-xl);
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확한 링크 텍스트 사용
- 외부 링크에 적절한 아이콘 표시
- 일관된 링크 스타일 유지

✅ **커머스 환경 최적화**
```tsx
// 상품 카테고리 링크
<Link href="/category/electronics" leftIcon="LineIconsDevicesIcon">
  전자제품
</Link>

// 브랜드 페이지 링크
<Link href="/brand/apple">Apple</Link>

// 외부 리뷰 링크
<Link 
  href="https://reviews.com" 
  target="_blank"
  rightIcon="LineIconsExternalLinkIcon"
>
  리뷰 보기
</Link>
```

### 주의사항

❌ **DON'T**
- "여기를 클릭" 같은 모호한 링크 텍스트
- 외부 링크에 target="_blank" 누락
- 너무 긴 링크 텍스트

## 관련 컴포넌트

- **Button**: 액션 버튼
- **Text**: 기본 텍스트
- **Icon**: 링크 아이콘

## 참고 자료

- [Link Accessibility](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)
- [Link Design Best Practices](https://uxplanet.org/link-design-best-practices-every-designer-should-know-74ad1e7c7c9) 