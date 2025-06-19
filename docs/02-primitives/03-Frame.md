---
title: "Frame 컴포넌트"
component: "Frame"
category: "프리미티브"
status: "안정화"
last_updated: "2024-01-15"
related: ["Text", "Icon", "Surface", "Sizing"]
---

# Frame 컴포넌트

## 📝 개요

Frame은 **모든 레이아웃 구성**을 담당하는 프리미티브 컴포넌트입니다. Flexbox와 Grid 레이아웃의 핵심 기능을 제공하며, 간격, 정렬, 배치를 자동으로 관리합니다. **가장 많이 사용되는 프리미티브 컴포넌트**입니다.

### 핵심 특징

- **Flexbox & Grid 지원**: 모든 현대적 레이아웃 패턴 구현
- **Foundation 토큰 기반 간격**: 모든 간격값은 4px 기반 시스템 사용
- **반응형 레이아웃**: 디바이스별 다른 레이아웃 적용 가능
- **자동 정렬 관리**: justify, align 속성으로 직관적 정렬
- **중첩 레이아웃 최적화**: Frame 안에 Frame을 무제한 중첩 가능

## 🔧 Props 인터페이스

```typescript
interface FrameProps {
  // 레이아웃 모드
  display?: Display | ResponsiveValue<Display>;
  
  // Flexbox Props
  direction?: FlexDirection | ResponsiveValue<FlexDirection>;
  wrap?: FlexWrap | ResponsiveValue<FlexWrap>;
  justify?: JustifyContent | ResponsiveValue<JustifyContent>;
  align?: AlignItems | ResponsiveValue<AlignItems>;
  gap?: Spacing | ResponsiveValue<Spacing>;
  
  // Grid Props
  gridTemplate?: string | ResponsiveValue<string>;
  gridColumns?: number | string | ResponsiveValue<number | string>;
  gridRows?: number | string | ResponsiveValue<number | string>;
  gridGap?: Spacing | ResponsiveValue<Spacing>;
  
  // 간격 Props
  padding?: Spacing | ResponsiveValue<Spacing>;
  paddingX?: Spacing | ResponsiveValue<Spacing>;
  paddingY?: Spacing | ResponsiveValue<Spacing>;
  margin?: Spacing | ResponsiveValue<Spacing>;
  marginX?: Spacing | ResponsiveValue<Spacing>;
  marginY?: Spacing | ResponsiveValue<Spacing>;
  
  // 크기 Props
  width?: Size | ResponsiveValue<Size>;
  height?: Size | ResponsiveValue<Size>;
  minWidth?: Size | ResponsiveValue<Size>;
  minHeight?: Size | ResponsiveValue<Size>;
  maxWidth?: Size | ResponsiveValue<Size>;
  maxHeight?: Size | ResponsiveValue<Size>;
  
  // Flex 아이템 Props
  flex?: string | number | ResponsiveValue<string | number>;
  flexGrow?: number | ResponsiveValue<number>;
  flexShrink?: number | ResponsiveValue<number>;
  flexBasis?: Size | ResponsiveValue<Size>;
  
  // HTML Props
  as?: 'div' | 'section' | 'article' | 'aside' | 'nav' | 'main' | 'header' | 'footer';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any; // 기타 HTML 속성
}
```

### Display (3개 타입)

```typescript
type Display = 'flex' | 'grid' | 'block';
```

### FlexDirection (4개 타입)

```typescript
type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
```

### FlexWrap (3개 타입)

```typescript
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
```

### JustifyContent (6개 타입)

```typescript
type JustifyContent = 
  | 'start' | 'end' | 'center' 
  | 'space-between' | 'space-around' | 'space-evenly';
```

### AlignItems (5개 타입)

```typescript
type AlignItems = 'start' | 'end' | 'center' | 'stretch' | 'baseline';
```

### Spacing (9개 타입)

| Spacing | 픽셀 값 | 사용 용도 | 사용 빈도 |
|---------|---------|-----------|-----------|
| `xxs` | 2px | 최소한의 간격 | ⭐⭐ |
| `xs` | 4px | 작은 간격 | ⭐⭐⭐ |
| `sm` | 8px | 기본 작은 간격 | ⭐⭐⭐⭐⭐ |
| `md` | 16px | 기본 중간 간격 | ⭐⭐⭐⭐⭐ |
| `lg` | 24px | 큰 간격 | ⭐⭐⭐⭐ |
| `xl` | 32px | 매우 큰 간격 | ⭐⭐⭐ |
| `2xl` | 48px | 섹션 간격 | ⭐⭐ |
| `3xl` | 64px | 대형 섹션 간격 | ⭐ |
| `4xl` | 96px | 페이지 레벨 간격 | ⭐ |

### Size (크기 단위)

```typescript
type Size = 
  | Spacing         // 간격 토큰 재사용
  | string          // CSS 값 (100%, 50vh, auto, etc.)
  | number;         // 픽셀 값
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

### 1. 기본 Flexbox 사용

```jsx
// 기본 수평 레이아웃
<Frame display="flex" direction="row" gap="md">
  <Text>첫 번째</Text>
  <Text>두 번째</Text>
  <Text>세 번째</Text>
</Frame>

// 수직 레이아웃
<Frame display="flex" direction="column" gap="sm">
  <Text>위</Text>
  <Text>중간</Text>
  <Text>아래</Text>
</Frame>

// 중앙 정렬
<Frame 
  display="flex" 
  justify="center" 
  align="center" 
  minHeight="200px"
>
  <Text>중앙에 위치</Text>
</Frame>
```

### 2. 고급 Flexbox 패턴

```jsx
// 양쪽 끝 정렬
<Frame display="flex" justify="space-between" align="center">
  <Text variant="heading-2" weight="bold">제목</Text>
  <Icon name="settings-1" size="sm" />
</Frame>

// 플렉스 아이템 크기 조정
<Frame display="flex" gap="sm">
  <Frame flex="1">  {/* 남은 공간 모두 차지 */}
    <Text>확대되는 콘텐츠</Text>
  </Frame>
  <Frame flexShrink="0">  {/* 크기 고정 */}
    <Text>고정 크기</Text>
  </Frame>
</Frame>

// 줄바꿈 지원
<Frame display="flex" wrap="wrap" gap="sm">
  <Text>항목 1</Text>
  <Text>항목 2</Text>
  <Text>항목 3</Text>
  <Text>항목 4</Text>
</Frame>
```

### 3. Grid 레이아웃

```jsx
// 기본 Grid
<Frame 
  display="grid" 
  gridColumns="3" 
  gridGap="md"
>
  <Text>1</Text>
  <Text>2</Text>
  <Text>3</Text>
  <Text>4</Text>
  <Text>5</Text>
  <Text>6</Text>
</Frame>

// 복잡한 Grid 템플릿
<Frame 
  display="grid" 
  gridTemplate="
    'header header header' auto
    'sidebar main aside' 1fr
    'footer footer footer' auto
    / 200px 1fr 200px
  "
  gridGap="md"
  minHeight="100vh"
>
  <Frame style={{ gridArea: 'header' }}>헤더</Frame>
  <Frame style={{ gridArea: 'sidebar' }}>사이드바</Frame>
  <Frame style={{ gridArea: 'main' }}>메인</Frame>
  <Frame style={{ gridArea: 'aside' }}>보조</Frame>
  <Frame style={{ gridArea: 'footer' }}>푸터</Frame>
</Frame>

// 반응형 Grid
<Frame 
  display="grid" 
  gridColumns={{
    mobile: '1',
    tablet: '2', 
    desktop: '3'
  }}
  gridGap="md"
>
  {items.map(item => (
    <Text key={item.id}>{item.title}</Text>
  ))}
</Frame>
```

### 4. 간격 및 패딩

```jsx
// 패딩 설정
<Frame padding="lg">
  <Text>큰 패딩</Text>
</Frame>

// 방향별 패딩
<Frame paddingX="md" paddingY="sm">
  <Text>가로 중간, 세로 작은 패딩</Text>
</Frame>

// 마진 설정
<Frame margin="md">
  <Text>외부 간격</Text>
</Frame>

// 복합 간격 설정
<Frame 
  padding="lg" 
  margin="md"
  display="flex" 
  direction="column" 
  gap="sm"
>
  <Text>첫 번째 줄</Text>
  <Text>두 번째 줄</Text>
</Frame>
```

## 🎨 시스템별 사용 패턴

### System-01 (Professional & Clean) 패턴

```jsx
// System-01: 타이트하고 정돈된 레이아웃
const System01Layout = () => (
  <Frame display="flex" direction="column" gap="sm">
    {/* 헤더: 작은 간격 */}
    <Frame display="flex" justify="space-between" align="center" padding="sm">
      <Text variant="heading-2" weight="bold">Dashboard</Text>
      <Icon name="settings-1" size="sm" />
    </Frame>
    
    {/* 콘텐츠: 효율적인 공간 사용 */}
    <Frame 
      display="grid" 
      gridColumns="2" 
      gridGap="sm"  // 작은 간격
      padding="sm"
    >
      <Surface background="secondary-system01-1-rest" borderRadius="sm">
        <Frame padding="md">
          <Text variant="body-2">Card 1</Text>
        </Frame>
      </Surface>
      <Surface background="secondary-system01-1-rest" borderRadius="sm">
        <Frame padding="md">
          <Text variant="body-2">Card 2</Text>
        </Frame>
      </Surface>
    </Frame>
  </Frame>
);
```

### System-02 (Friendly & Bright) 패턴

```jsx
// System-02: 여유롭고 친근한 레이아웃
const System02Layout = () => (
  <Frame display="flex" direction="column" gap="lg">  {/* 큰 간격 */}
    {/* 헤더: 여유로운 간격 */}
    <Frame display="flex" justify="space-between" align="center" padding="lg">
      <Text variant="title-1" weight="bold">Welcome! 😊</Text>
      <Icon name="heart-filled" size="md" />
    </Frame>
    
    {/* 콘텐츠: 넉넉한 공간 */}
    <Frame 
      display="grid" 
      gridColumns="2" 
      gridGap="lg"  // 큰 간격
      padding="lg"
    >
      <Surface background="secondary-system02-1-rest" borderRadius="lg">
        <Frame padding="xl">  {/* 넉넉한 패딩 */}
          <Text variant="reading">Friendly Card 1</Text>
        </Frame>
      </Surface>
      <Surface background="secondary-system02-1-rest" borderRadius="lg">
        <Frame padding="xl">
          <Text variant="reading">Friendly Card 2</Text>
        </Frame>
      </Surface>
    </Frame>
  </Frame>
);
```

## 📏 실전 조합 패턴

### 1. 카드 레이아웃 패턴

```jsx
// 기본 카드 구조
const Card = ({ title, description, actions }) => (
  <Surface 
    background="secondary-system01-1-rest" 
    borderRadius="md" 
    boxShadow="10"
  >
    <Frame display="flex" direction="column" gap="md" padding="lg">
      {/* 헤더 */}
      <Frame display="flex" justify="space-between" align="center">
        <Text variant="heading-2" weight="bold">{title}</Text>
        <Icon name="more-horizontal" size="sm" />
      </Frame>
      
      {/* 본문 */}
      <Frame flex="1">
        <Text variant="body-2">{description}</Text>
      </Frame>
      
      {/* 액션 영역 */}
      {actions && (
        <Frame display="flex" justify="end" gap="sm">
          {actions}
        </Frame>
      )}
    </Frame>
  </Surface>
);

// 카드 그리드
const CardGrid = ({ cards }) => (
  <Frame 
    display="grid" 
    gridColumns={{
      mobile: '1',
      tablet: '2',
      desktop: '3'
    }}
    gridGap="md"
  >
    {cards.map(card => (
      <Card key={card.id} {...card} />
    ))}
  </Frame>
);
```

### 2. 리스트 아이템 패턴

```jsx
// 기본 리스트 아이템
const ListItem = ({ icon, title, description, action }) => (
  <Frame display="flex" align="center" gap="md" padding="md">
    {/* 아이콘 영역 */}
    <Frame flexShrink="0">
      <Icon name={icon} size="md" />
    </Frame>
    
    {/* 콘텐츠 영역 */}
    <Frame flex="1" display="flex" direction="column" gap="xs">
      <Text variant="body-1" weight="medium">{title}</Text>
      <Text variant="caption-1">{description}</Text>
    </Frame>
    
    {/* 액션 영역 */}
    {action && (
      <Frame flexShrink="0">
        {action}
      </Frame>
    )}
  </Frame>
);

// 리스트 컨테이너
const List = ({ items }) => (
  <Frame display="flex" direction="column">
    {items.map((item, index) => (
      <React.Fragment key={item.id}>
        {index > 0 && <Divider orientation="horizontal" />}
        <ListItem {...item} />
      </React.Fragment>
    ))}
  </Frame>
);
```

### 3. 폼 레이아웃 패턴

```jsx
// 기본 폼 필드
const FormField = ({ label, required, error, children, helpText }) => (
  <Frame display="flex" direction="column" gap="xs">
    {/* 라벨 */}
    <Frame display="flex" align="center" gap="xs">
      <Text variant="label-1" weight="medium">{label}</Text>
      {required && <Asterisk />}
    </Frame>
    
    {/* 입력 필드 */}
    <Frame>
      {children}
    </Frame>
    
    {/* 에러 또는 도움말 */}
    {error && (
      <Frame display="flex" align="center" gap="xs">
        <Icon name="alert-circle" size="xs" />
        <Text variant="caption-1">{error}</Text>
      </Frame>
    )}
    
    {!error && helpText && (
      <Text variant="caption-1">{helpText}</Text>
    )}
  </Frame>
);

// 폼 레이아웃
const Form = ({ children, onSubmit, actions }) => (
  <Frame 
    as="form" 
    onSubmit={onSubmit}
    display="flex" 
    direction="column" 
    gap="lg"
    maxWidth="500px"
  >
    {/* 폼 필드들 */}
    <Frame display="flex" direction="column" gap="md">
      {children}
    </Frame>
    
    {/* 액션 버튼들 */}
    {actions && (
      <Frame display="flex" justify="end" gap="sm">
        {actions}
      </Frame>
    )}
  </Frame>
);
```

### 4. 대시보드 레이아웃 패턴

```jsx
// 메트릭 카드
const MetricCard = ({ title, value, trend, icon }) => (
  <Surface 
    background="secondary-system01-1-rest" 
    borderRadius="md"
    boxShadow="10"
  >
    <Frame padding="lg" display="flex" direction="column" gap="sm">
      {/* 헤더 */}
      <Frame display="flex" justify="space-between" align="center">
        <Text variant="caption-1" weight="medium">{title}</Text>
        <Icon name={icon} size="sm" />
      </Frame>
      
      {/* 값 */}
      <Text variant="title-2" weight="bold">{value}</Text>
      
      {/* 트렌드 */}
      <Frame display="flex" align="center" gap="xs">
        <Icon 
          name={trend > 0 ? 'trending-up' : 'trending-down'} 
          size="xs"
        />
        <Text variant="caption-1">{Math.abs(trend)}%</Text>
      </Frame>
    </Frame>
  </Surface>
);

// 대시보드 레이아웃
const Dashboard = ({ metrics, charts, activities }) => (
  <Frame display="flex" direction="column" gap="lg" padding="lg">
    {/* 메트릭 카드 그리드 */}
    <Frame 
      display="grid" 
      gridColumns={{
        mobile: '1',
        tablet: '2',
        desktop: '4'
      }}
      gridGap="md"
    >
      {metrics.map(metric => (
        <MetricCard key={metric.id} {...metric} />
      ))}
    </Frame>
    
    {/* 차트 영역 */}
    <Frame 
      display="grid" 
      gridColumns={{
        mobile: '1',
        desktop: '2'
      }}
      gridGap="lg"
    >
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Frame padding="lg">
          {/* 차트 컴포넌트 */}
        </Frame>
      </Surface>
      
      <Surface background="secondary-system01-1-rest" borderRadius="md">
        <Frame padding="lg">
          {/* 활동 목록 */}
        </Frame>
      </Surface>
    </Frame>
  </Frame>
);
```

### 5. 네비게이션 패턴

```jsx
// 헤더 네비게이션
const Header = ({ logo, nav, actions }) => (
  <Frame 
    as="header"
    display="flex" 
    justify="space-between" 
    align="center"
    padding="md"
    style={{ borderBottom: '1px solid var(--foundation-foundation-border-color)' }}
  >
    {/* 로고 */}
    <Frame flexShrink="0">
      {logo}
    </Frame>
    
    {/* 네비게이션 (데스크톱만) */}
    <Frame 
      display={{
        mobile: 'none',
        desktop: 'flex'
      }}
      gap="lg"
    >
      {nav}
    </Frame>
    
    {/* 액션 */}
    <Frame display="flex" align="center" gap="sm">
      {actions}
    </Frame>
  </Frame>
);

// 사이드바 네비게이션
const Sidebar = ({ items, isOpen, onClose }) => (
  <Frame
    as="nav"
    display="flex"
    direction="column"
    width={{
      mobile: isOpen ? '280px' : '0',
      desktop: '280px'
    }}
    height="100vh"
    style={{
      borderRight: '1px solid var(--foundation-foundation-border-color)',
      transition: 'width 0.2s ease'
    }}
  >
    {/* 헤더 */}
    <Frame 
      display="flex" 
      justify="space-between" 
      align="center" 
      padding="md"
    >
      <Text variant="heading-3" weight="bold">Menu</Text>
      <Interactive onClick={onClose}>
        <Icon name="close" size="sm" />
      </Interactive>
    </Frame>
    
    {/* 메뉴 아이템들 */}
    <Frame display="flex" direction="column" padding="sm" gap="xs">
      {items.map(item => (
        <Frame 
          key={item.id}
          display="flex" 
          align="center" 
          gap="sm"
          padding="sm"
          style={{ borderRadius: '4px' }}
        >
          <Icon name={item.icon} size="sm" />
          <Text variant="body-2">{item.label}</Text>
        </Frame>
      ))}
    </Frame>
  </Frame>
);
```

## 📱 반응형 레이아웃 패턴

### 1. 반응형 그리드

```jsx
// 복잡한 반응형 그리드
const ResponsiveGrid = ({ items }) => (
  <Frame 
    display="grid"
    gridColumns={{
      mobile: '1',                    // 모바일: 1열
      tablet: 'repeat(2, 1fr)',       // 태블릿: 2열
      desktop: 'repeat(3, 1fr)',      // 데스크톱: 3열
      wide: 'repeat(4, 1fr)'          // 와이드: 4열
    }}
    gridGap={{
      mobile: 'sm',
      desktop: 'md'
    }}
  >
    {items.map(item => (
      <Card key={item.id} {...item} />
    ))}
  </Frame>
);

// 비대칭 반응형 레이아웃
const AsymmetricLayout = () => (
  <Frame 
    display="grid"
    gridTemplate={{
      mobile: `
        'header' auto
        'main' 1fr
        'sidebar' auto
        / 1fr
      `,
      desktop: `
        'header header' auto
        'sidebar main' 1fr
        / 250px 1fr
      `
    }}
    gridGap="md"
    minHeight="100vh"
  >
    <Frame style={{ gridArea: 'header' }}>Header</Frame>
    <Frame style={{ gridArea: 'sidebar' }}>Sidebar</Frame>
    <Frame style={{ gridArea: 'main' }}>Main Content</Frame>
  </Frame>
);
```

### 2. 반응형 Flexbox

```jsx
// 방향 전환 레이아웃
const ResponsiveFlex = ({ items }) => (
  <Frame 
    display="flex"
    direction={{
      mobile: 'column',     // 모바일: 세로
      desktop: 'row'        // 데스크톱: 가로
    }}
    gap={{
      mobile: 'sm',
      desktop: 'lg'
    }}
  >
    {items.map(item => (
      <Frame 
        key={item.id}
        flex={{
          mobile: 'none',     // 모바일: 자연 크기
          desktop: '1'        // 데스크톱: 균등 분할
        }}
      >
        {item.content}
      </Frame>
    ))}
  </Frame>
);

// 적응형 간격
const AdaptiveSpacing = () => (
  <Frame 
    display="flex" 
    direction="column"
    gap={{
      mobile: 'sm',    // 8px
      tablet: 'md',    // 16px
      desktop: 'lg',   // 24px
      wide: 'xl'       // 32px
    }}
    padding={{
      mobile: 'md',    // 16px
      desktop: 'xl'    // 32px
    }}
  >
    <Text variant="title-1">반응형 간격</Text>
    <Text variant="body-1">디바이스 크기에 따라 간격이 조정됩니다.</Text>
  </Frame>
);
```

### 3. 컨테이너 쿼리 패턴

```jsx
// 컨테이너 크기에 따른 레이아웃 변경
const ContainerAdaptive = ({ children }) => (
  <Frame 
    display="grid"
    gridColumns="repeat(auto-fit, minmax(300px, 1fr))"
    gridGap="md"
  >
    {children}
  </Frame>
);

// 자동 크기 조정 카드
const AutoSizingCard = ({ content }) => (
  <Surface borderRadius="md" boxShadow="10">
    <Frame 
      padding="md"
      minHeight="200px"
      display="flex"
      direction="column"
      justify="space-between"
    >
      <Frame flex="1">
        {content}
      </Frame>
      
      <Frame>
        {/* 액션 영역 */}
      </Frame>
    </Frame>
  </Surface>
);
```

## ♿ 접근성 고려사항

### 1. 의미적 HTML 구조

```jsx
// ✅ 올바른 시멘틱 구조
<Frame as="main" display="flex" direction="column" gap="lg">
  <Frame as="header" padding="md">
    <Text as="h1" variant="title-1">페이지 제목</Text>
  </Frame>
  
  <Frame as="section" display="flex" direction="column" gap="md">
    <Text as="h2" variant="heading-1">섹션 제목</Text>
    <Text as="p" variant="body-1">섹션 내용</Text>
  </Frame>
</Frame>

// ❌ 잘못된 구조 - 모든 것이 div
<Frame display="flex" direction="column" gap="lg">
  <Frame padding="md">
    <Text variant="title-1">페이지 제목</Text>  {/* h1이 아님 */}
  </Frame>
  
  <Frame display="flex" direction="column" gap="md">
    <Text variant="heading-1">섹션 제목</Text>  {/* h2가 아님 */}
    <Text variant="body-1">섹션 내용</Text>
  </Frame>
</Frame>
```

### 2. 포커스 관리

```jsx
// ✅ 포커스 순서를 고려한 레이아웃
<Frame display="flex" direction="column" gap="md">
  <Frame display="flex" gap="sm">
    <Interactive tabIndex="1">첫 번째 버튼</Interactive>
    <Interactive tabIndex="2">두 번째 버튼</Interactive>
  </Frame>
  
  <Frame display="flex" gap="sm">
    <Interactive tabIndex="3">세 번째 버튼</Interactive>
    <Interactive tabIndex="4">네 번째 버튼</Interactive>
  </Frame>
</Frame>

// 스킵 링크 제공
<Frame>
  <Interactive 
    style={{
      position: 'absolute',
      top: '-40px',
      left: '6px',
      transition: 'top 0.2s'
    }}
    onFocus={(e) => e.target.style.top = '6px'}
    onBlur={(e) => e.target.style.top = '-40px'}
  >
    <Text variant="label-1">메인 콘텐츠로 건너뛰기</Text>
  </Interactive>
  
  {/* 나머지 콘텐츠 */}
</Frame>
```

### 3. 읽기 흐름 고려

```jsx
// ✅ 자연스러운 읽기 흐름
<Frame display="flex" direction="column" gap="md">
  <Frame as="header">
    <Text as="h1" variant="title-1">제목</Text>
  </Frame>
  
  <Frame as="main" display="flex" direction="column" gap="sm">
    <Text as="p" variant="body-1">첫 번째 문단</Text>
    <Text as="p" variant="body-1">두 번째 문단</Text>
  </Frame>
</Frame>

// ⚠️ 주의: Grid에서 시각적 순서와 DOM 순서 일치시키기
<Frame 
  display="grid"
  gridTemplate="
    'sidebar main' 1fr
    / 200px 1fr
  "
>
  {/* DOM 순서: 메인이 먼저 와야 함 */}
  <Frame style={{ gridArea: 'main' }}>메인 콘텐츠</Frame>
  <Frame style={{ gridArea: 'sidebar' }}>사이드바</Frame>
</Frame>
```

## 🎯 성능 최적화

### 1. 레이아웃 성능 최적화

```jsx
// ✅ GPU 가속 활용
<Frame 
  display="flex"
  style={{
    transform: 'translateZ(0)', // GPU 가속 활성화
    willChange: 'transform'     // 성능 힌트
  }}
>
  {children}
</Frame>

// ✅ 불필요한 리플로우 방지
<Frame 
  display="grid"
  gridColumns="repeat(auto-fit, minmax(250px, 1fr))"  // 고정 크기
  gridGap="md"
>
  {items.map(item => (
    <Frame key={item.id} minHeight="200px">  {/* 최소 높이 설정 */}
      {item.content}
    </Frame>
  ))}
</Frame>

// ✅ 가상화를 위한 고정 크기
<Frame 
  height="400px"  // 고정 높이
  style={{ overflow: 'auto' }}
>
  {/* 가상화된 리스트 */}
</Frame>
```

### 2. 중첩 최적화

```jsx
// ✅ 적절한 중첩 레벨
<Frame display="flex" direction="column" gap="md">
  <Frame display="flex" justify="space-between">
    <Text>제목</Text>
    <Icon name="close" size="sm" />
  </Frame>
  
  <Frame flex="1">
    콘텐츠
  </Frame>
</Frame>

// ❌ 과도한 중첩
<Frame>
  <Frame>
    <Frame>
      <Frame>
        <Frame>
          <Text>과도하게 중첩된 구조</Text>
        </Frame>
      </Frame>
    </Frame>
  </Frame>
</Frame>
```

## 🔍 자주 사용되는 패턴 모음

### 1. 중앙 정렬 패턴

```jsx
// 완전 중앙 정렬
<Frame 
  display="flex" 
  justify="center" 
  align="center" 
  minHeight="100vh"
>
  <Text>중앙 정렬</Text>
</Frame>

// 세로만 중앙 정렬
<Frame display="flex" align="center" minHeight="200px">
  <Text>세로 중앙</Text>
</Frame>

// 가로만 중앙 정렬
<Frame display="flex" justify="center">
  <Text>가로 중앙</Text>
</Frame>
```

### 2. 고정/플렉시블 패턴

```jsx
// 고정 사이드바 + 플렉시블 메인
<Frame display="flex" minHeight="100vh">
  <Frame width="250px" flexShrink="0">사이드바</Frame>
  <Frame flex="1">메인 콘텐츠</Frame>
</Frame>

// 고정 헤더/푸터 + 플렉시블 본문
<Frame display="flex" direction="column" minHeight="100vh">
  <Frame flexShrink="0" padding="md">헤더</Frame>
  <Frame flex="1" padding="md">본문</Frame>
  <Frame flexShrink="0" padding="md">푸터</Frame>
</Frame>
```

### 3. 카드 배치 패턴

```jsx
// 균등한 카드 배치
<Frame 
  display="grid" 
  gridColumns="repeat(auto-fit, minmax(300px, 1fr))"
  gridGap="md"
>
  {cards.map(card => <Card key={card.id} {...card} />)}
</Frame>

// 마지막 줄 왼쪽 정렬
<Frame 
  display="flex" 
  wrap="wrap" 
  gap="md"
  style={{
    '&::after': {
      content: '""',
      flex: 'auto'
    }
  }}
>
  {cards.map(card => (
    <Frame key={card.id} width="calc(33.333% - 8px)">
      <Card {...card} />
    </Frame>
  ))}
</Frame>
```

## 🔍 다음 단계

Frame 컴포넌트를 이해했다면, 다음 문서들을 학습하세요:

1. **[Surface 컴포넌트](./04-Surface.md)** - Frame과 조합하여 색상과 스타일 적용
2. **[Sizing 컴포넌트](./06-Sizing.md)** - Frame의 크기 제어를 더 정밀하게
3. **[Text 컴포넌트](./01-Text.md)** - Frame 안에서 텍스트 배치

## ❓ 자주 묻는 질문

**Q: Flexbox와 Grid 중 언제 무엇을 사용해야 하나요?**
A: 1차원 레이아웃(행 또는 열)은 Flexbox, 2차원 레이아웃(행과 열)은 Grid를 사용하세요.

**Q: 간격이 4px 단위가 아닌 값이 필요한 경우는?**
A: 특별한 경우가 아니면 Foundation 토큰을 사용하세요. 필요시 새로운 토큰을 정의하세요.

**Q: 중첩된 Frame이 성능에 영향을 주나요?**
A: 적절한 중첩은 문제없습니다. 과도한 중첩(5단계 이상)은 피하세요.

**Q: 반응형 값이 많아서 코드가 복잡해져요.**
A: 자주 사용되는 반응형 패턴은 별도 컴포넌트로 추상화하는 것을 고려하세요.

---

**관련 문서**  
→ [프리미티브 개요](./00-개요.md)  
→ [Surface 컴포넌트](./04-Surface.md)  
→ [Sizing 컴포넌트](./06-Sizing.md)

**문서 개선 제안**  
Frame 컴포넌트 관련 질문이나 개선 제안이 있다면 GitHub Issues로 알려주세요.
</rewritten_file> 