---
title: "Text 컴포넌트"
component: "Text"
category: "프리미티브"
status: "안정화"
last_updated: "2024-01-15"
related: ["Frame", "Surface", "TextDisplay"]
---

# Text 컴포넌트

## 📝 개요

Text는 **모든 텍스트 렌더링**을 담당하는 프리미티브 컴포넌트입니다. 타이포그래피 시스템의 핵심으로, Foundation 토큰에 정의된 폰트 크기, 줄 높이, 가중치를 자동으로 적용합니다.

### 핵심 특징

- **타이포그래피 전담**: 모든 텍스트 표시를 처리
- **Foundation 토큰 기반**: 13개의 사전 정의된 variant 사용
- **반응형 지원**: 디바이스별 다른 variant 적용 가능
- **접근성 자동 보장**: 읽기 쉬운 줄 높이 및 대비 자동 적용

## 🔧 Props 인터페이스

```typescript
interface TextProps {
  // 필수 Props
  children: React.ReactNode;
  
  // 타이포그래피 Props
  variant?: TextVariant | ResponsiveValue<TextVariant>;
  weight?: FontWeight | ResponsiveValue<FontWeight>;
  textAlign?: TextAlign | ResponsiveValue<TextAlign>;
  
  // HTML Props
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div';
  
  // 기타 Props
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any; // 기타 HTML 속성
}
```

### TextVariant (13개 타입)

| Variant | 폰트 크기 | 줄 높이 | 용도 | 사용 빈도 |
|---------|-----------|---------|------|-----------|
| `hero-1` | 48px | 1.6 | 랜딩 페이지 메인 타이틀 | ⭐ |
| `hero-2` | 36px | 1.6 | 서브 히어로 타이틀 | ⭐ |
| `title-1` | 30px | 1.4 | 페이지 타이틀 | ⭐⭐ |
| `title-2` | 24px | 1.4 | 섹션 타이틀 | ⭐⭐⭐ |
| `heading-1` | 20px | 1.4 | 큰 헤딩 | ⭐⭐⭐ |
| `heading-2` | 20px | 1.4 | 중간 헤딩 | ⭐⭐⭐⭐ |
| `heading-3` | 16px | 1.4 | 작은 헤딩 | ⭐⭐⭐⭐ |
| `body-1` | 16px | 1.6 | 기본 본문 텍스트 | ⭐⭐⭐⭐⭐ |
| `body-2` | 14px | 1.6 | 보조 본문 텍스트 | ⭐⭐⭐⭐⭐ |
| `reading` | 16px | 1.8 | 긴 글 읽기용 | ⭐⭐ |
| `label-1` | 14px | 1.4 | 버튼, 입력 필드 라벨 | ⭐⭐⭐⭐⭐ |
| `label-2` | 12px | 1.4 | 작은 라벨 | ⭐⭐⭐ |
| `caption-1` | 12px | 1.2 | 캡션, 메타 정보 | ⭐⭐⭐ |
| `caption-2` | 12px | 1.2 | 작은 캡션 | ⭐⭐ |
| `caption-3` | 12px | 1.2 | 최소 캡션 | ⭐ |

### FontWeight (3개 타입)

```typescript
type FontWeight = 'regular' | 'medium' | 'bold';

// Foundation 토큰 매핑
const fontWeightTokens = {
  regular: '400',  // var(--foundation-foundation-font-fontweight-regular)
  medium: '500',   // var(--foundation-foundation-font-fontweight-medium)
  bold: '700'      // var(--foundation-foundation-font-fontweight-bold)
}
```

### TextAlign (4개 타입)

```typescript
type TextAlign = 'left' | 'center' | 'right' | 'justify';
```

### ResponsiveValue

```typescript
type ResponsiveValue<T> = T | {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  wide?: T;
}
```

## 💻 기본 사용 예시

### 1. 일반적인 텍스트 사용

```jsx
// 기본 본문 텍스트
<Text variant="body-1">
  기본 본문 텍스트입니다. 가장 많이 사용되는 패턴입니다.
</Text>

// 제목 텍스트
<Text variant="title-1" weight="bold">
  페이지 제목
</Text>

// 보조 텍스트
<Text variant="body-2" textAlign="center">
  중앙 정렬된 보조 텍스트
</Text>

// 캡션 텍스트
<Text variant="caption-1">
  작은 설명 텍스트
</Text>
```

### 2. 의미적 HTML 태그 사용

```jsx
// 의미적 헤딩 태그 사용
<Text as="h1" variant="title-1" weight="bold">
  SEO를 위한 H1 태그
</Text>

<Text as="h2" variant="heading-1" weight="medium">
  섹션 제목 (H2)
</Text>

<Text as="p" variant="body-1">
  문단 태그로 렌더링되는 본문
</Text>

<Text as="span" variant="label-1" weight="medium">
  인라인 스팬으로 렌더링
</Text>
```

### 3. 반응형 텍스트

```jsx
// 디바이스별 다른 크기
<Text 
  variant={{
    mobile: 'body-2',
    tablet: 'body-1', 
    desktop: 'heading-2'
  }}
  weight={{
    mobile: 'regular',
    desktop: 'bold'
  }}
  textAlign={{
    mobile: 'center',
    desktop: 'left'
  }}
>
  반응형 텍스트 예시
</Text>

// 제목의 반응형 스케일링
<Text 
  as="h1"
  variant={{
    mobile: 'title-2',
    desktop: 'hero-1'
  }}
  weight="bold"
  textAlign="center"
>
  반응형 메인 제목
</Text>
```

## 🎨 시스템별 사용 패턴

### System-01 (Professional & Clean) 패턴

```jsx
// System-01: 간결하고 명확한 텍스트 사용
const System01TextPattern = () => (
  <Frame display="flex" direction="column" gap="sm">
    {/* 타이트한 간격의 제목 */}
    <Text variant="heading-2" weight="bold">
      Professional Title
    </Text>
    
    {/* 간결한 본문 */}
    <Text variant="body-2">
      Clean and professional description text.
    </Text>
    
    {/* 작은 라벨 */}
    <Text variant="label-2" weight="medium">
      Label Text
    </Text>
  </Frame>
);
```

### System-02 (Friendly & Bright) 패턴

```jsx
// System-02: 친근하고 여유로운 텍스트 사용
const System02TextPattern = () => (
  <Frame display="flex" direction="column" gap="md">
    {/* 여유로운 간격의 제목 */}
    <Text variant="title-2" weight="bold">
      Friendly Title 😊
    </Text>
    
    {/* 읽기 쉬운 본문 */}
    <Text variant="reading">
      친근하고 읽기 쉬운 긴 본문 텍스트입니다. 
      여유로운 줄 높이로 편안한 읽기 경험을 제공합니다.
    </Text>
    
    {/* 큰 라벨 */}
    <Text variant="label-1" weight="medium">
      Friendly Label
    </Text>
  </Frame>
);
```

## 📏 실전 조합 패턴

### 1. 기본 텍스트 + 배경 조합

```jsx
// Surface와 조합한 강조 텍스트
<Surface background="primary-system01-1-rest" borderRadius="sm">
  <Frame padding="md">
    <Text variant="label-1" weight="medium">
      강조된 텍스트
    </Text>
  </Frame>
</Surface>

// 카드 형태의 텍스트 블록
<Surface 
  background="secondary-system01-3-rest"
  borderRadius="md"
  boxShadow="20"
>
  <Frame padding="lg" display="flex" direction="column" gap="sm">
    <Text variant="heading-2" weight="bold">
      카드 제목
    </Text>
    <Text variant="body-2">
      카드 내용 설명 텍스트입니다.
    </Text>
    <Text variant="caption-1">
      2024.01.15
    </Text>
  </Frame>
</Surface>
```

### 2. 아이콘과 텍스트 조합

```jsx
// 아이콘 + 텍스트 리스트 아이템
<Frame display="flex" align="center" gap="sm">
  <Icon name="checkmark" size="sm" />
  <Text variant="body-1" weight="medium">
    완료된 작업
  </Text>
</Frame>

// 버튼 스타일 아이콘 + 텍스트
<Interactive cursor="pointer" focusStyle="ring">
  <Surface background="primary-system01-1-rest" borderRadius="sm">
    <Frame padding="sm" display="flex" align="center" gap="xs">
      <Icon name="plus" size="sm" />
      <Text variant="label-1" weight="medium">
        추가하기
      </Text>
    </Frame>
  </Surface>
</Interactive>
```

### 3. 복잡한 텍스트 레이아웃

```jsx
// 기사/블로그 형태의 텍스트 구성
const ArticleLayout = ({ title, subtitle, content, author, date }) => (
  <Frame display="flex" direction="column" gap="md" maxWidth="800px">
    {/* 제목 영역 */}
    <Frame display="flex" direction="column" gap="xs">
      <Text as="h1" variant="hero-2" weight="bold" textAlign="center">
        {title}
      </Text>
      <Text variant="heading-3" textAlign="center">
        {subtitle}
      </Text>
    </Frame>
    
    {/* 메타 정보 */}
    <Divider orientation="horizontal" spacing="sm" />
    <Frame display="flex" justify="space-between" align="center">
      <Text variant="caption-1" weight="medium">
        작성자: {author}
      </Text>
      <Text variant="caption-1">
        {date}
      </Text>
    </Frame>
    <Divider orientation="horizontal" spacing="sm" />
    
    {/* 본문 */}
    <Text variant="reading">
      {content}
    </Text>
  </Frame>
);
```

### 4. 상태별 텍스트 표시

```jsx
// 상태에 따른 텍스트 색상 및 스타일 변경
const StatusText = ({ status, message }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'success':
        return {
          background: 'success-system01-2-rest',
          foreground: 'success-system01-oncolor',
          icon: 'checkmark-circle'
        };
      case 'error':
        return {
          background: 'error-system01-2-rest',
          foreground: 'error-system01-oncolor',
          icon: 'alert-circle'
        };
      case 'warning':
        return {
          background: 'warning-system01-2-rest',
          foreground: 'warning-system01-oncolor',
          icon: 'alert-triangle'
        };
      default:
        return {
          background: 'secondary-system01-2-rest',
          foreground: 'secondary-system01-oncolor',
          icon: 'info'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Surface 
      background={config.background}
      foreground={config.foreground}
      borderRadius="sm"
    >
      <Frame padding="sm" display="flex" align="center" gap="xs">
        <Icon name={config.icon} size="sm" />
        <Text variant="body-2" weight="medium">
          {message}
        </Text>
      </Frame>
    </Surface>
  );
};

// 사용 예시
<StatusText status="success" message="성공적으로 저장되었습니다" />
<StatusText status="error" message="오류가 발생했습니다" />
<StatusText status="warning" message="주의가 필요합니다" />
```

## 📱 반응형 텍스트 패턴

### 1. 제목의 반응형 스케일링

```jsx
// 디바이스 크기에 따른 제목 크기 조정
<Text 
  as="h1"
  variant={{
    mobile: 'title-2',    // 24px
    tablet: 'title-1',    // 30px
    desktop: 'hero-2',    // 36px
    wide: 'hero-1'        // 48px
  }}
  weight="bold"
  textAlign={{
    mobile: 'center',
    desktop: 'left'
  }}
>
  반응형 메인 제목
</Text>
```

### 2. 본문의 반응형 최적화

```jsx
// 읽기 환경에 따른 본문 최적화
<Text 
  variant={{
    mobile: 'body-2',     // 14px - 작은 화면에서는 작게
    tablet: 'body-1',     // 16px - 태블릿에서는 표준
    desktop: 'reading'    // 16px + 1.8 줄높이 - 데스크톱에서는 읽기 최적화
  }}
  textAlign={{
    mobile: 'left',
    tablet: 'justify'     // 태블릿 이상에서는 양쪽 정렬
  }}
>
  긴 본문 텍스트의 경우 디바이스에 따라 
  적절한 크기와 줄 높이를 적용하여 
  최적의 읽기 경험을 제공합니다.
</Text>
```

### 3. 카드 내 반응형 텍스트

```jsx
// 카드 크기에 따른 텍스트 조정
const ResponsiveCard = ({ title, description }) => (
  <Sizing 
    width={{ mobile: '100%', desktop: '300px' }}
    minHeight="200px"
  >
    <Surface 
      background="secondary-system01-2-rest"
      borderRadius="md"
      boxShadow="20"
    >
      <Frame 
        padding={{ mobile: 'md', desktop: 'lg' }}
        display="flex" 
        direction="column" 
        gap={{ mobile: 'sm', desktop: 'md' }}
        height="100%"
      >
        <Text 
          variant={{
            mobile: 'heading-3',
            desktop: 'heading-2'
          }}
          weight="bold"
          textAlign={{ mobile: 'center', desktop: 'left' }}
        >
          {title}
        </Text>
        
        <Text 
          variant="body-2"
          textAlign={{ mobile: 'center', desktop: 'left' }}
        >
          {description}
        </Text>
      </Frame>
    </Surface>
  </Sizing>
);
```

## ♿ 접근성 고려사항

### 1. 의미적 HTML 태그 사용

```jsx
// ✅ 올바른 시멘틱 구조
<Text as="h1" variant="title-1" weight="bold">
  페이지 메인 제목
</Text>

<Text as="h2" variant="heading-1" weight="medium">
  섹션 제목
</Text>

<Text as="p" variant="body-1">
  문단 내용
</Text>

// ❌ 잘못된 시멘틱 구조
<Text variant="title-1" weight="bold">  {/* div로 렌더링됨 */}
  제목처럼 보이지만 스크린 리더가 제목으로 인식하지 못함
</Text>
```

### 2. 적절한 색상 대비

```jsx
// ✅ Surface와 조합으로 자동 색상 대비 보장
<Surface 
  background="primary-system01-1-rest"
  foreground="primary-system01-oncolor"  // 자동으로 충분한 대비 보장
>
  <Text variant="body-1">
    접근성 기준을 만족하는 텍스트
  </Text>
</Surface>

// ❌ 직접 색상 지정 시 대비 부족 위험
<div style={{ backgroundColor: '#e0e0e0', color: '#d0d0d0' }}>
  <Text>대비가 부족한 텍스트</Text>  {/* 읽기 어려움 */}
</div>
```

### 3. 충분한 텍스트 크기

```jsx
// ✅ 접근성을 고려한 최소 크기 사용
<Text variant="body-2">  {/* 14px - 접근성 기준 충족 */}
  읽기 쉬운 크기의 텍스트
</Text>

// ⚠️ 주의: caption 사용 시 중요 정보 피하기
<Text variant="caption-1">  {/* 12px - 보조 정보에만 사용 */}
  보조 정보나 메타데이터
</Text>
```

## 🎯 성능 최적화

### 1. 적절한 HTML 태그 선택

```jsx
// 성능 최적화된 태그 선택
<Text as="span" variant="label-1">인라인 텍스트</Text>  // 인라인에 적합
<Text as="p" variant="body-1">문단 텍스트</Text>        // 블록에 적합
<Text as="h2" variant="heading-1">제목 텍스트</Text>    // 제목에 적합
```

### 2. 불필요한 re-render 방지

```jsx
// ✅ 메모이제이션을 활용한 최적화
const MemoizedText = React.memo(({ children, ...props }) => (
  <Text {...props}>{children}</Text>
));

// ✅ 정적 텍스트는 상수로 분리
const STATIC_TEXTS = {
  WELCOME_MESSAGE: "환영합니다!",
  LOADING_MESSAGE: "로딩 중..."
};

<Text variant="title-1">{STATIC_TEXTS.WELCOME_MESSAGE}</Text>
```

## 🔍 자주 사용되는 패턴

### 1. 버튼 내 텍스트

```jsx
// 버튼 컴포넌트에서 자주 사용되는 패턴
<Interactive cursor="pointer" focusStyle="ring">
  <Surface background="primary-system01-1-rest" borderRadius="sm">
    <Frame padding="sm" display="flex" align="center" gap="xs">
      <Icon name="plus" size="sm" />
      <Text variant="label-1" weight="medium">
        추가하기
      </Text>
    </Frame>
  </Surface>
</Interactive>
```

### 2. 목록 아이템 텍스트

```jsx
// 리스트에서 자주 사용되는 텍스트 패턴
<Frame display="flex" direction="column" gap="xs">
  {items.map(item => (
    <Frame key={item.id} display="flex" align="center" gap="sm">
      <Icon name={item.icon} size="sm" />
      <Frame display="flex" direction="column" gap="xxs">
        <Text variant="body-1" weight="medium">
          {item.title}
        </Text>
        <Text variant="caption-1">
          {item.description}
        </Text>
      </Frame>
    </Frame>
  ))}
</Frame>
```

### 3. 폼 라벨 텍스트

```jsx
// 입력 필드 라벨로 자주 사용되는 패턴
<Frame display="flex" direction="column" gap="xs">
  <Frame display="flex" align="center" gap="xs">
    <Text variant="label-1" weight="medium">
      이메일 주소
    </Text>
    <Asterisk />  {/* 필수 입력 표시 */}
  </Frame>
  
  {/* 입력 필드 위치 */}
  
  <Text variant="caption-1">
    유효한 이메일 주소를 입력해주세요.
  </Text>
</Frame>
```

## 🔍 다음 단계

Text 컴포넌트를 이해했다면, 다음 문서들을 학습하세요:

1. **[Frame 컴포넌트](./03-Frame.md)** - Text와 함께 가장 많이 사용되는 레이아웃 컴포넌트
2. **[Surface 컴포넌트](./04-Surface.md)** - Text와 조합하여 색상 배경 적용
3. **[Icon 컴포넌트](./02-Icon.md)** - Text와 조합하여 아이콘 + 텍스트 구성

## ❓ 자주 묻는 질문

**Q: variant와 HTML 태그 중 어느 것이 우선되나요?**
A: variant는 시각적 스타일만 결정하고, as prop이 실제 HTML 태그를 결정합니다. 의미에 맞는 태그를 사용하세요.

**Q: 커스텀 폰트 크기가 필요한 경우 어떻게 하나요?**
A: Foundation 토큰에 새로운 폰트 크기를 추가하고, 새로운 variant를 정의해야 합니다. 하드코딩은 금지됩니다.

**Q: 텍스트 색상을 변경하고 싶은데 어떻게 하나요?**
A: Text 컴포넌트를 Surface 컴포넌트로 감싸서 foreground prop을 사용하세요.

**Q: 줄바꿈 처리는 어떻게 하나요?**
A: CSS의 white-space 속성을 사용하거나, <br/> 태그를 children에 포함시키세요.

---

**관련 문서**  
→ [프리미티브 개요](./00-개요.md)  
→ [Frame 컴포넌트](./03-Frame.md)  
→ [Surface 컴포넌트](./04-Surface.md)

**문서 개선 제안**  
Text 컴포넌트 관련 질문이나 개선 제안이 있다면 GitHub Issues로 알려주세요. 