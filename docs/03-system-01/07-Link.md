---
title: 'Link - System 01'
description: 'Professional & Clean 테마의 링크 컴포넌트'
date: '2024-12-28'
category: 'System-01 Components'
tags: ['Link', 'Navigation', 'Accessibility', 'System-01', 'Professional']
version: '1.0.0'
status: 'stable'
---

# Link - System 01

System-01의 Link 컴포넌트는 Professional & Clean 테마에 최적화된 링크입니다. GitHub, 백오피스 환경에서 사용되는 명확하고 효율적인 내비게이션 디자인을 제공합니다.

## 개요

Link 컴포넌트는 다른 페이지나 외부 사이트로 이동하는 컴파운드 컴포넌트로, Text와 Icon 프리미티브를 조합하여 접근성이 뛰어난 링크 경험을 제공합니다.

### 핵심 특징

- **3가지 스타일**: default, subtle, prominent
- **다양한 크기**: Text variant와 동일한 크기 옵션
- **시멘틱 색상**: primary, secondary, cta, status 색상 지원
- **밑줄 옵션**: none, always, hover
- **외부 링크**: 새 탭 열기 및 아이콘 표시
- **상태 관리**: rest, hover, pressed, visited, disabled
- **접근성**: WCAG 2.1 AA 준수

## Props 인터페이스

```typescript
interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  // 스타일 설정
  variant?: 'default' | 'subtle' | 'prominent';
  size?: ResponsiveOrSingle<LinkSize>;
  color?: LinkColor;
  underline?: 'none' | 'always' | 'hover';
  
  // 상태
  interactionState?: 'rest' | 'hovered' | 'pressed' | 'visited' | 'disabled';
  disabled?: boolean;
  
  // 외부 링크
  external?: boolean;
  
  // 내용
  children: React.ReactNode;
}

type LinkColor = 
  | 'primary-foreground-1' | 'primary-foreground-2'
  | 'secondary-foreground-1' | 'secondary-foreground-2' | 'secondary-foreground-3'
  | 'cta-foreground-1' | 'cta-foreground-2'
  | 'status-error' | 'status-warning' | 'status-success' | 'status-info';

type LinkSize = 
  | 'hero-1' | 'hero-2' | 'title-1' | 'title-2'
  | 'heading-1' | 'heading-2' | 'heading-3'
  | 'body-1' | 'body-2' | 'reading'
  | 'label-1' | 'label-2'
  | 'caption-1' | 'caption-2' | 'caption-3';
```

## 기본 사용법

### 기본 링크

```tsx
import { Link } from 'lumir-design-system-01';

function BasicLink() {
  return (
    <Link href="/about">
      회사 소개
    </Link>
  );
}
```

### 외부 링크

```tsx
function ExternalLink() {
  return (
    <Link href="https://github.com" external>
      GitHub 방문하기
    </Link>
  );
}
```

### 비활성화 링크

```tsx
function DisabledLink() {
  return (
    <Link href="#" disabled>
      비활성화된 링크
    </Link>
  );
}
```

## 스타일 변형

### Default (기본)

가장 일반적인 링크 스타일입니다.

```tsx
function DefaultLink() {
  return (
    <Link variant="default" href="/page">
      기본 링크
    </Link>
  );
}
```

### Subtle

은은하고 미묘한 스타일의 링크입니다.

```tsx
function SubtleLink() {
  return (
    <Link variant="subtle" href="/page">
      은은한 링크
    </Link>
  );
}
```

### Prominent

강조된 스타일의 링크입니다.

```tsx
function ProminentLink() {
  return (
    <Link variant="prominent" href="/page">
      강조 링크
    </Link>
  );
}
```

## 크기 변형

### 헤딩 크기

```tsx
function HeadingLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Link size="hero-1" href="/page">Hero 1 크기</Link>
      <Link size="title-1" href="/page">Title 1 크기</Link>
      <Link size="heading-1" href="/page">Heading 1 크기</Link>
      <Link size="heading-2" href="/page">Heading 2 크기</Link>
    </div>
  );
}
```

### 본문 크기

```tsx
function BodyLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Link size="body-1" href="/page">Body 1 크기</Link>
      <Link size="body-2" href="/page">Body 2 크기</Link>
      <Link size="reading" href="/page">Reading 크기</Link>
    </div>
  );
}
```

### 라벨 및 캡션 크기

```tsx
function SmallLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <Link size="label-1" href="/page">Label 1 크기</Link>
      <Link size="label-2" href="/page">Label 2 크기</Link>
      <Link size="caption-1" href="/page">Caption 1 크기</Link>
      <Link size="caption-2" href="/page">Caption 2 크기</Link>
    </div>
  );
}
```

## 색상 옵션

### Primary 색상

```tsx
function PrimaryLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Link color="primary-foreground-1" href="/page">
        Primary 1 링크
      </Link>
      <Link color="primary-foreground-2" href="/page">
        Primary 2 링크
      </Link>
    </div>
  );
}
```

### Secondary 색상

```tsx
function SecondaryLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Link color="secondary-foreground-1" href="/page">
        Secondary 1 링크
      </Link>
      <Link color="secondary-foreground-2" href="/page">
        Secondary 2 링크
      </Link>
      <Link color="secondary-foreground-3" href="/page">
        Secondary 3 링크
      </Link>
    </div>
  );
}
```

### Status 색상

```tsx
function StatusLinks() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Link color="status-error" href="/page">
        에러 링크
      </Link>
      <Link color="status-warning" href="/page">
        경고 링크
      </Link>
      <Link color="status-success" href="/page">
        성공 링크
      </Link>
      <Link color="status-info" href="/page">
        정보 링크
      </Link>
    </div>
  );
}
```

## 밑줄 옵션

### Always

항상 밑줄이 표시됩니다.

```tsx
function AlwaysUnderline() {
  return (
    <Link underline="always" href="/page">
      항상 밑줄이 있는 링크
    </Link>
  );
}
```

### Hover

호버 시에만 밑줄이 표시됩니다.

```tsx
function HoverUnderline() {
  return (
    <Link underline="hover" href="/page">
      호버 시 밑줄 링크
    </Link>
  );
}
```

### None

밑줄이 표시되지 않습니다.

```tsx
function NoUnderline() {
  return (
    <Link underline="none" href="/page">
      밑줄 없는 링크
    </Link>
  );
}
```

## 고급 사용 예제

### 내비게이션 메뉴

```tsx
function NavigationMenu() {
  return (
    <nav style={{ display: 'flex', gap: '24px' }}>
      <Link href="/" variant="prominent">
        홈
      </Link>
      <Link href="/products">
        제품
      </Link>
      <Link href="/about">
        회사소개
      </Link>
      <Link href="/contact">
        연락처
      </Link>
      <Link href="/blog" external>
        블로그
      </Link>
    </nav>
  );
}
```

### 본문 내 링크

```tsx
function InlineLinks() {
  return (
    <p style={{ lineHeight: 1.6 }}>
      자세한 정보는 {' '}
      <Link href="/docs" variant="default" underline="always">
        문서
      </Link>
      를 참조하거나 {' '}
      <Link href="https://github.com/example" external variant="subtle">
        GitHub 저장소
      </Link>
      를 확인해주세요.
    </p>
  );
}
```

### 카드 내 링크

```tsx
function CardLinks() {
  return (
    <div style={{ 
      padding: '16px', 
      border: '1px solid #e0e0e0', 
      borderRadius: '8px' 
    }}>
      <h3>관련 링크</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Link href="/guide" size="body-2">
          사용자 가이드
        </Link>
        <Link href="/api" size="body-2">
          API 문서
        </Link>
        <Link href="/examples" size="body-2">
          예제 코드
        </Link>
        <Link href="https://community.example.com" external size="body-2">
          커뮤니티 포럼
        </Link>
      </div>
    </div>
  );
}
```

### 동적 링크 상태

```tsx
function DynamicLinkState() {
  const [isVisited, setIsVisited] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Link 
        href="/page"
        interactionState={isVisited ? 'visited' : 'rest'}
        disabled={isDisabled}
        onClick={() => setIsVisited(true)}
      >
        동적 상태 링크
      </Link>
      
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => setIsVisited(!isVisited)}>
          {isVisited ? '방문 상태 해제' : '방문 상태 설정'}
        </button>
        <button onClick={() => setIsDisabled(!isDisabled)}>
          {isDisabled ? '활성화' : '비활성화'}
        </button>
      </div>
    </div>
  );
}
```

### 링크 그룹

```tsx
function LinkGroups() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
      <div>
        <h4>제품</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <Link href="/products/web" size="body-2">웹 개발</Link>
          <Link href="/products/mobile" size="body-2">모바일 앱</Link>
          <Link href="/products/desktop" size="body-2">데스크톱</Link>
        </div>
      </div>
      
      <div>
        <h4>지원</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <Link href="/support/docs" size="body-2">문서</Link>
          <Link href="/support/contact" size="body-2">연락처</Link>
          <Link href="/support/faq" size="body-2">FAQ</Link>
        </div>
      </div>
      
      <div>
        <h4>외부 링크</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <Link href="https://github.com" external size="body-2">GitHub</Link>
          <Link href="https://twitter.com" external size="body-2">Twitter</Link>
          <Link href="https://linkedin.com" external size="body-2">LinkedIn</Link>
        </div>
      </div>
    </div>
  );
}
```

## System-01 디자인 특성

### 색상 시스템

- **Primary**: System-01의 파란색 계열 사용
- **Secondary**: 회색 계열로 보조 정보 표시
- **CTA**: Call-to-Action 색상으로 중요한 링크
- **Status**: 에러, 경고, 성공, 정보 상태 표시

### 인터랙션 패턴

- **Hover**: 색상 변화 및 밑줄 표시
- **Focus**: 2px 포커스 링 표시
- **Visited**: 방문한 링크 색상 변화
- **Disabled**: 회색조 처리 및 포인터 비활성화

### 타이포그래피

- **Text 컴포넌트 활용**: 일관된 폰트 크기 및 스타일
- **상태별 스타일**: variant에 따른 opacity 및 font-weight 조정

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

```tsx
// 키보드 내비게이션 지원
<Link href="/page">
  Tab으로 포커스 가능한 링크
</Link>

// 비활성화 시 Tab 제외
<Link href="/page" disabled>
  비활성화된 링크 (tabIndex=-1)
</Link>
```

### 스크린 리더 지원

```tsx
// 외부 링크 자동 속성 설정
<Link href="https://example.com" external>
  외부 사이트 (rel="noopener noreferrer" target="_blank")
</Link>

// 비활성화 상태 명시
<Link href="/page" disabled>
  비활성화된 링크 (aria-disabled="true")
</Link>
```

### 색상 대비

- **링크 텍스트**: 4.5:1 이상 (WCAG AA)
- **방문한 링크**: 4.5:1 이상
- **포커스 인디케이터**: 3:1 이상
- **비활성화 링크**: 3:1 이상

### 터치 접근성

- **최소 터치 영역**: 44×44px 권장
- **적절한 간격**: 인접 링크와 8px 이상 간격

## Foundation 토큰 사용

### 색상 토큰

```css
/* Primary 링크 색상 */
color: var(--foundation-foundation-color-primary-system01-1-rest);

/* Secondary 링크 색상 */
color: var(--foundation-foundation-color-secondary-system01-2-rest);

/* 상태별 색상 */
color: var(--foundation-foundation-color-primary-system01-1-hovered);
color: var(--foundation-foundation-color-primary-system01-1-pressed);
color: var(--foundation-foundation-color-primary-system01-1-disabled);
```

### 간격 토큰

```css
/* 외부 링크 아이콘 간격 */
gap: var(--foundation-foundation-spacing-xxxs);
```

### 애니메이션 토큰

```css
/* 상태 전환 애니메이션 */
transition: all var(--foundation-foundation-animation-duration-fast) 
            var(--foundation-foundation-animation-easing-ease-out);
```

## 성능 최적화

### 메모이제이션

```tsx
import { memo } from 'react';

const OptimizedLink = memo(Link);

// 불필요한 리렌더링 방지
function NavigationItem({ href, children }) {
  return (
    <OptimizedLink href={href}>
      {children}
    </OptimizedLink>
  );
}
```

### 지연 로딩

```tsx
// 외부 링크 사전 로딩
<Link 
  href="https://example.com" 
  external
  rel="preload"
>
  사전 로딩된 외부 링크
</Link>
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확하고 설명적인 링크 텍스트 사용
- 외부 링크에는 external 속성 사용
- 적절한 색상과 크기 선택
- 일관된 밑줄 스타일 유지
- 키보드 접근성 고려

✅ **적절한 사용 예시**
```tsx
// 명확한 링크 텍스트
<Link href="/user-guide">
  사용자 가이드 보기
</Link>

// 외부 링크 명시
<Link href="https://docs.example.com" external>
  API 문서 (외부 사이트)
</Link>
```

### 주의사항

❌ **DON'T**
- "여기를 클릭" 같은 모호한 텍스트
- 너무 긴 링크 텍스트
- 불필요한 외부 링크 남용
- 일관성 없는 색상 사용

❌ **피해야 할 예시**
```tsx
// 모호한 링크 텍스트
<Link href="/docs">여기를 클릭</Link>

// 너무 긴 링크 텍스트
<Link href="/page">
  이것은 매우 길고 복잡한 링크 텍스트로 사용자가 이해하기 어려울 수 있습니다
</Link>
```

### 크기 선택 가이드

- **hero, title**: 페이지 제목 수준의 중요한 링크
- **heading**: 섹션 제목 수준의 링크
- **body**: 일반적인 본문 링크 (가장 많이 사용)
- **label**: 폼 라벨이나 버튼 수준의 링크
- **caption**: 보조 정보나 메타데이터 링크

### 색상 선택 가이드

- **primary**: 주요 내비게이션 링크
- **secondary**: 보조 정보 링크
- **cta**: 중요한 액션 링크
- **status**: 상태 정보 링크

## 관련 컴포넌트

- **Text**: 링크 텍스트 렌더링
- **Icon**: 외부 링크 아이콘
- **Button**: 버튼 형태의 액션 (링크와 구분)

## 참고 자료

- [WCAG 2.1 링크 가이드라인](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)
- [HTML Anchor 요소 명세](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [접근 가능한 링크 디자인](https://webaim.org/techniques/hypertext/) 