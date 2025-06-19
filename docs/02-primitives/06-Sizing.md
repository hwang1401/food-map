---
title: "Sizing 컴포넌트"
component: "Sizing"
category: "프리미티브"
status: "안정화"
last_updated: "2024-01-15"
related: ["Frame", "Surface", "Interactive"]
---

# Sizing 컴포넌트

## 📝 개요

Sizing은 **모든 크기와 위치 제어**를 담당하는 프리미티브 컴포넌트입니다. CSS의 복잡한 크기 속성들을 간단하고 일관된 인터페이스로 제공하며, **반응형 크기 조정**을 자동으로 처리합니다.

### 핵심 특징

- **직관적 크기 제어**: width, height, min/max 크기를 간단하게 설정
- **위치 시스템**: absolute, fixed, sticky 위치 제어
- **오버플로우 관리**: 스크롤, 숨김, 자동 처리
- **반응형 크기**: 디바이스별 다른 크기 자동 적용
- **CSS Grid/Flexbox 통합**: Frame과 완벽한 호환성

## 🔧 Props 인터페이스

```typescript
interface SizingProps {
  // 기본 크기 Props
  width?: SizeValue | ResponsiveValue<SizeValue>;
  height?: SizeValue | ResponsiveValue<SizeValue>;
  
  // 최소/최대 크기 Props
  minWidth?: SizeValue | ResponsiveValue<SizeValue>;
  minHeight?: SizeValue | ResponsiveValue<SizeValue>;
  maxWidth?: SizeValue | ResponsiveValue<SizeValue>;
  maxHeight?: SizeValue | ResponsiveValue<SizeValue>;
  
  // 위치 Props
  position?: PositionType | ResponsiveValue<PositionType>;
  top?: SizeValue | ResponsiveValue<SizeValue>;
  right?: SizeValue | ResponsiveValue<SizeValue>;
  bottom?: SizeValue | ResponsiveValue<SizeValue>;
  left?: SizeValue | ResponsiveValue<SizeValue>;
  zIndex?: number | ResponsiveValue<number>;
  
  // 오버플로우 Props
  overflow?: OverflowType | ResponsiveValue<OverflowType>;
  overflowX?: OverflowType | ResponsiveValue<OverflowType>;
  overflowY?: OverflowType | ResponsiveValue<OverflowType>;
  
  // 가시성 Props
  visibility?: VisibilityType | ResponsiveValue<VisibilityType>;
  opacity?: number | ResponsiveValue<number>;
  
  // HTML Props
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}
```

### SizeValue (크기 값 타입)

```typescript
type SizeValue = 
  | number              // 픽셀 값 (예: 100)
  | string              // CSS 값 (예: '100%', '50vh', 'auto', 'fit-content')
  | 'auto'              // 자동 크기
  | 'min-content'       // 최소 콘텐츠 크기
  | 'max-content'       // 최대 콘텐츠 크기
  | 'fit-content'       // 콘텐츠에 맞는 크기
  | Spacing;            // Foundation 간격 토큰 재사용

// 자주 사용되는 크기 값들
const commonSizes = {
  full: '100%',         // 전체 크기
  half: '50%',          // 절반 크기
  quarter: '25%',       // 1/4 크기
  third: '33.333%',     // 1/3 크기
  screen: '100vh',      // 화면 전체 높이
  auto: 'auto'          // 자동 크기
}
```

### PositionType (위치 타입)

```typescript
type PositionType = 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
```

### OverflowType (오버플로우 타입)

```typescript
type OverflowType = 'visible' | 'hidden' | 'scroll' | 'auto';
```

### VisibilityType (가시성 타입)

```typescript
type VisibilityType = 'visible' | 'hidden' | 'collapse';
```

## 💻 기본 사용 예시

### 1. 기본 크기 설정

```jsx
// 고정 크기
<Sizing width={300} height={200}>
  <Surface background="secondary-system01-1-rest" borderRadius="sm">
    <Frame padding="md">
      <Text>300×200px 박스</Text>
    </Frame>
  </Surface>
</Sizing>

// 백분율 크기
<Sizing width="100%" height="50vh">
  <Surface background="secondary-system01-1-rest">
    <Frame padding="lg">
      <Text>전체 너비, 화면 높이의 절반</Text>
    </Frame>
  </Surface>
</Sizing>

// 자동 크기
<Sizing width="auto" height="auto">
  <Surface background="primary-system01-2-rest" borderRadius="md">
    <Frame padding="md">
      <Text>콘텐츠에 맞는 크기</Text>
    </Frame>
  </Surface>
</Sizing>
```

### 2. 최소/최대 크기

```jsx
// 최소 크기 보장
<Sizing 
  width="100%" 
  minWidth={200} 
  minHeight={100}
>
  <Surface background="secondary-system01-1-rest" borderRadius="sm">
    <Frame padding="md">
      <Text>최소 200×100px 보장</Text>
    </Frame>
  </Surface>
</Sizing>

// 최대 크기 제한
<Sizing 
  width="100%" 
  maxWidth={600} 
  maxHeight="80vh"
>
  <Surface background="secondary-system01-1-rest" borderRadius="md">
    <Frame padding="lg">
      <Text>최대 600px 너비, 화면 높이의 80% 제한</Text>
    </Frame>
  </Surface>
</Sizing>

// 범위 지정
<Sizing 
  width="100%"
  minWidth={300}
  maxWidth={800}
  minHeight={200}
  maxHeight={500}
>
  <Surface background="primary-system01-1-rest" borderRadius="md">
    <Frame padding="lg">
      <Text>300-800px 너비, 200-500px 높이 범위</Text>
    </Frame>
  </Surface>
</Sizing>
```

### 3. 위치 제어

```jsx
// 절대 위치
<Sizing 
  position="absolute"
  top={20}
  right={20}
  width={200}
  height={100}
  zIndex={10}
>
  <Surface 
    background="primary-system01-1-rest" 
    foreground="primary-system01-oncolor"
    borderRadius="sm"
    boxShadow="20"
  >
    <Frame padding="md">
      <Text>우상단 고정 박스</Text>
    </Frame>
  </Surface>
</Sizing>

// 고정 위치 (헤더)
<Sizing 
  position="fixed"
  top={0}
  left={0}
  width="100%"
  height={60}
  zIndex={100}
>
  <Surface background="primary-system01-1-rest" boxShadow="20">
    <Frame padding="md" display="flex" align="center">
      <Text variant="heading-3" weight="bold">고정 헤더</Text>
    </Frame>
  </Surface>
</Sizing>

// 스티키 위치
<Sizing 
  position="sticky"
  top={0}
  zIndex={50}
>
  <Surface background="secondary-system01-1-rest" borderRadius="sm">
    <Frame padding="sm">
      <Text>스크롤 시 상단에 고정</Text>
    </Frame>
  </Surface>
</Sizing>
```

### 4. 오버플로우 처리

```jsx
// 스크롤 가능한 컨테이너
<Sizing 
  width={300} 
  height={200} 
  overflow="auto"
>
  <Surface 
    background="secondary-system01-1-rest" 
    borderRadius="sm"
    borderWidth="thin"
    borderColor="neutral-system01-2-rest"
  >
    <Frame padding="md">
      {/* 긴 콘텐츠 */}
      {Array.from({ length: 20 }, (_, i) => (
        <Text key={i} variant="body-2">
          긴 콘텐츠 줄 {i + 1}
        </Text>
      ))}
    </Frame>
  </Surface>
</Sizing>

// 가로 스크롤만
<Sizing 
  width="100%" 
  height={100}
  overflowX="auto"
  overflowY="hidden"
>
  <Surface background="secondary-system01-1-rest" borderRadius="sm">
    <Frame padding="md" display="flex" gap="md" minWidth={800}>
      {Array.from({ length: 10 }, (_, i) => (
        <Surface key={i} background="primary-system01-2-rest" borderRadius="xs">
          <Frame padding="sm" minWidth={100}>
            <Text variant="caption-1">항목 {i + 1}</Text>
          </Frame>
        </Surface>
      ))}
    </Frame>
  </Surface>
</Sizing>

// 숨김 처리
<Sizing 
  width={200} 
  height={100} 
  overflow="hidden"
>
  <Surface background="secondary-system01-1-rest" borderRadius="sm">
    <Frame padding="md">
      <Text>이 텍스트는 박스를 넘치면 잘립니다. 매우 긴 텍스트가 들어가더라도 박스 바깥으로 나가지 않습니다.</Text>
    </Frame>
  </Surface>
</Sizing>
```

## 📏 실전 조합 패턴

### 1. 레이아웃 컨테이너 패턴

```jsx
// 전체 화면 레이아웃
const FullScreenLayout = ({ header, sidebar, main, footer }) => (
  <Sizing width="100%" height="100vh" overflow="hidden">
    <Frame display="flex" direction="column" height="100%">
      {/* 헤더 */}
      <Sizing height={60} flexShrink={0}>
        {header}
      </Sizing>
      
      {/* 메인 영역 */}
      <Sizing flex={1} overflow="hidden">
        <Frame display="flex" height="100%">
          {/* 사이드바 */}
          <Sizing width={250} flexShrink={0} overflowY="auto">
            {sidebar}
          </Sizing>
          
          {/* 메인 콘텐츠 */}
          <Sizing flex={1} overflow="auto">
            {main}
          </Sizing>
        </Frame>
      </Sizing>
      
      {/* 푸터 */}
      <Sizing height={40} flexShrink={0}>
        {footer}
      </Sizing>
    </Frame>
  </Sizing>
);

// 모달 컨테이너
const ModalContainer = ({ children, onClose }) => (
  <Sizing 
    position="fixed"
    top={0}
    left={0}
    width="100%"
    height="100%"
    zIndex={1000}
  >
    {/* 배경 오버레이 */}
    <Surface 
      background="rgba(0, 0, 0, 0.5)"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <Interactive onClick={onClose}>
        <Frame 
          width="100%" 
          height="100%" 
          display="flex" 
          justify="center" 
          align="center"
          padding="lg"
        >
          {/* 모달 콘텐츠 */}
          <Interactive onClick={(e) => e.stopPropagation()}>
            <Sizing 
              maxWidth={600}
              maxHeight="90vh"
              width="100%"
              overflow="auto"
            >
              {children}
            </Sizing>
          </Interactive>
        </Frame>
      </Interactive>
    </Surface>
  </Sizing>
);
```

### 2. 카드 그리드 패턴

```jsx
// 반응형 카드 그리드
const ResponsiveCardGrid = ({ cards }) => (
  <Sizing width="100%">
    <Frame 
      display="grid"
      gridColumns={{
        mobile: '1',
        tablet: '2',
        desktop: '3',
        wide: '4'
      }}
      gridGap="md"
    >
      {cards.map(card => (
        <Sizing 
          key={card.id}
          minHeight={200}    // 일정한 높이 보장
          width="100%"
        >
          <Surface 
            background="secondary-system01-1-rest"
            borderRadius="md"
            boxShadow="10"
          >
            <Frame padding="lg" height="100%">
              <Text variant="heading-3" weight="bold">{card.title}</Text>
              <Text variant="body-2">{card.description}</Text>
            </Frame>
          </Surface>
        </Sizing>
      ))}
    </Frame>
  </Sizing>
);

// 마스터-디테일 레이아웃
const MasterDetailLayout = ({ items, selectedItem, onSelect }) => (
  <Sizing width="100%" height="600px">
    <Frame display="flex" height="100%" gap="md">
      {/* 마스터 리스트 */}
      <Sizing 
        width={300} 
        flexShrink={0}
        overflowY="auto"
      >
        <Surface 
          background="secondary-system01-1-rest"
          borderRadius="md"
          borderWidth="thin"
          borderColor="neutral-system01-2-rest"
        >
          <Frame padding="sm">
            {items.map(item => (
              <Interactive 
                key={item.id}
                cursor="pointer"
                focusStyle="background"
                selected={selectedItem?.id === item.id}
                onClick={() => onSelect(item)}
              >
                <Frame padding="sm">
                  <Text variant="body-2">{item.title}</Text>
                </Frame>
              </Interactive>
            ))}
          </Frame>
        </Surface>
      </Sizing>
      
      {/* 디테일 패널 */}
      <Sizing flex={1} overflow="auto">
        <Surface 
          background="secondary-system01-1-rest"
          borderRadius="md"
          borderWidth="thin"
          borderColor="neutral-system01-2-rest"
        >
          <Frame padding="lg" height="100%">
            {selectedItem ? (
              <Frame display="flex" direction="column" gap="md">
                <Text variant="title-2" weight="bold">{selectedItem.title}</Text>
                <Text variant="body-1">{selectedItem.content}</Text>
              </Frame>
            ) : (
              <Frame 
                height="100%" 
                display="flex" 
                justify="center" 
                align="center"
              >
                <Text variant="body-2">항목을 선택하세요</Text>
              </Frame>
            )}
          </Frame>
        </Surface>
      </Sizing>
    </Frame>
  </Sizing>
);
```

### 3. 플로팅 요소 패턴

```jsx
// 플로팅 액션 버튼
const FloatingActionButton = ({ icon, label, onClick, actions }) => (
  <Sizing 
    position="fixed"
    bottom={20}
    right={20}
    zIndex={100}
  >
    <Frame display="flex" direction="column" align="end" gap="sm">
      {/* 서브 액션들 */}
      {actions && actions.map((action, index) => (
        <Sizing 
          key={index}
          style={{
            transform: `translateY(${expanded ? 0 : 20}px)`,
            opacity: expanded ? 1 : 0,
            transition: `all 0.2s ease ${index * 50}ms`
          }}
        >
          <Interactive cursor="pointer" focusStyle="ring">
            <Surface 
              background="secondary-system01-1-rest"
              borderRadius="full"
              boxShadow="20"
            >
              <Frame 
                padding="sm"
                minWidth={48}
                minHeight={48}
                display="flex"
                justify="center"
                align="center"
              >
                <Icon name={action.icon} size="sm" />
              </Frame>
            </Surface>
          </Interactive>
        </Sizing>
      ))}
      
      {/* 메인 버튼 */}
      <Interactive cursor="pointer" focusStyle="ring" onClick={onClick}>
        <Surface 
          background="primary-system01-1-rest"
          foreground="primary-system01-oncolor"
          borderRadius="full"
          boxShadow="30"
        >
          <Frame 
            padding="md"
            minWidth={56}
            minHeight={56}
            display="flex"
            justify="center"
            align="center"
          >
            <Icon name={icon} size="md" />
          </Frame>
        </Surface>
      </Interactive>
    </Frame>
  </Sizing>
);

// 툴팁
const Tooltip = ({ content, children, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <Sizing position="relative">
      <Interactive
        onHover={setIsVisible}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </Interactive>
      
      {isVisible && (
        <Sizing 
          position="absolute"
          top={position === 'top' ? '-8px' : undefined}
          bottom={position === 'bottom' ? '-8px' : undefined}
          left={position === 'left' ? '-8px' : undefined}
          right={position === 'right' ? '-8px' : undefined}
          transform={
            position === 'top' ? 'translateY(-100%)' :
            position === 'bottom' ? 'translateY(100%)' :
            position === 'left' ? 'translateX(-100%)' :
            'translateX(100%)'
          }
          zIndex={200}
        >
          <Surface 
            background="neutral-system01-3-rest"
            foreground="neutral-system01-oncolor"
            borderRadius="sm"
            boxShadow="20"
          >
            <Frame padding="xs">
              <Text variant="caption-1">{content}</Text>
            </Frame>
          </Surface>
        </Sizing>
      )}
    </Sizing>
  );
};
```

### 4. 스크롤 영역 패턴

```jsx
// 무한 스크롤 컨테이너
const InfiniteScrollContainer = ({ 
  items, 
  onLoadMore, 
  hasMore, 
  loading 
}) => (
  <Sizing 
    width="100%" 
    height={400}
    overflowY="auto"
    onScroll={(e) => {
      const { scrollTop, scrollHeight, clientHeight } = e.target;
      if (scrollHeight - scrollTop === clientHeight && hasMore && !loading) {
        onLoadMore();
      }
    }}
  >
    <Frame display="flex" direction="column" gap="sm" padding="md">
      {items.map(item => (
        <Surface 
          key={item.id}
          background="secondary-system01-1-rest"
          borderRadius="sm"
        >
          <Frame padding="md">
            <Text variant="body-2">{item.content}</Text>
          </Frame>
        </Surface>
      ))}
      
      {loading && (
        <Frame padding="md" display="flex" justify="center">
          <Text variant="caption-1">로딩 중...</Text>
        </Frame>
      )}
    </Frame>
  </Sizing>
);

// 가상화된 리스트
const VirtualizedList = ({ items, itemHeight = 50 }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerHeight = 300;
  const visibleCount = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleCount + 1, items.length);
  const visibleItems = items.slice(startIndex, endIndex);

  return (
    <Sizing 
      width="100%" 
      height={containerHeight}
      overflow="auto"
      onScroll={(e) => setScrollTop(e.target.scrollTop)}
    >
      {/* 가상 스크롤 영역 */}
      <Sizing height={items.length * itemHeight} position="relative">
        {visibleItems.map((item, index) => (
          <Sizing
            key={item.id}
            position="absolute"
            top={(startIndex + index) * itemHeight}
            width="100%"
            height={itemHeight}
          >
            <Surface background="secondary-system01-1-rest">
              <Frame padding="sm" height="100%" display="flex" align="center">
                <Text variant="body-2">{item.content}</Text>
              </Frame>
            </Surface>
          </Sizing>
        ))}
      </Sizing>
    </Sizing>
  );
};
```

## 📱 반응형 Sizing 패턴

### 1. 반응형 크기 조정

```jsx
// 디바이스별 다른 크기
const ResponsiveContainer = ({ children }) => (
  <Sizing 
    width={{
      mobile: '100%',
      tablet: '80%',
      desktop: '60%',
      wide: '50%'
    }}
    maxWidth={{
      mobile: 'none',
      desktop: '1200px'
    }}
    height={{
      mobile: 'auto',
      desktop: '500px'
    }}
    overflow={{
      mobile: 'visible',
      desktop: 'auto'
    }}
  >
    {children}
  </Sizing>
);

// 반응형 모달
const ResponsiveModal = ({ children }) => (
  <Sizing 
    position="fixed"
    top={{
      mobile: '0',
      desktop: '50%'
    }}
    left={{
      mobile: '0',
      desktop: '50%'
    }}
    width={{
      mobile: '100%',
      desktop: '80%'
    }}
    height={{
      mobile: '100%',
      desktop: 'auto'
    }}
    maxWidth={{
      mobile: 'none',
      desktop: '600px'
    }}
    maxHeight={{
      mobile: 'none',
      desktop: '80vh'
    }}
    transform={{
      mobile: 'none',
      desktop: 'translate(-50%, -50%)'
    }}
    zIndex={1000}
  >
    <Surface 
      background="secondary-system01-1-rest"
      borderRadius={{
        mobile: 'none',
        desktop: 'lg'
      }}
      boxShadow="30"
    >
      <Sizing 
        overflow={{
          mobile: 'auto',
          desktop: 'hidden'
        }}
        height="100%"
      >
        {children}
      </Sizing>
    </Surface>
  </Sizing>
);
```

### 2. 적응형 레이아웃

```jsx
// 화면 크기에 따른 사이드바
const AdaptiveSidebar = ({ children, isOpen, onClose }) => (
  <Sizing 
    position={{
      mobile: 'fixed',
      desktop: 'relative'
    }}
    top={{
      mobile: '0',
      desktop: 'auto'
    }}
    left={{
      mobile: isOpen ? '0' : '-100%',
      desktop: '0'
    }}
    width={{
      mobile: '280px',
      desktop: '250px'
    }}
    height={{
      mobile: '100%',
      desktop: 'auto'
    }}
    zIndex={{
      mobile: 1000,
      desktop: 'auto'
    }}
    style={{
      transition: 'left 0.3s ease'
    }}
  >
    <Surface 
      background="secondary-system01-1-rest"
      boxShadow={{
        mobile: '30',
        desktop: 'none'
      }}
    >
      <Sizing height="100%" overflowY="auto">
        {children}
      </Sizing>
    </Surface>
    
    {/* 모바일 배경 오버레이 */}
    {isOpen && (
      <Sizing 
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        zIndex={-1}
        style={{
          display: {
            mobile: 'block',
            desktop: 'none'
          }
        }}
      >
        <Interactive onClick={onClose}>
          <Surface background="rgba(0, 0, 0, 0.5)" />
        </Interactive>
      </Sizing>
    )}
  </Sizing>
);
```

## ♿ 접근성 고려사항

### 1. 충분한 터치 영역

```jsx
// 최소 터치 영역 보장
const AccessibleButton = ({ children, onClick }) => (
  <Interactive cursor="pointer" focusStyle="ring" onClick={onClick}>
    <Sizing 
      minWidth={44}   // 최소 터치 너비
      minHeight={44}  // 최소 터치 높이
    >
      <Surface background="primary-system01-1-rest" borderRadius="sm">
        <Frame padding="sm" display="flex" justify="center" align="center">
          {children}
        </Frame>
      </Surface>
    </Sizing>
  </Interactive>
);
```

### 2. 스크롤 영역 접근성

```jsx
// 키보드로 접근 가능한 스크롤 영역
const AccessibleScrollArea = ({ children, ariaLabel }) => (
  <Sizing 
    width="100%" 
    height={300}
    overflow="auto"
    tabIndex={0}
    role="region"
    ariaLabel={ariaLabel}
    style={{
      '&:focus': {
        outline: '2px solid var(--foundation-foundation-color-blue-light-40)',
        outlineOffset: '2px'
      }
    }}
  >
    {children}
  </Sizing>
);
```

## 🎯 성능 최적화

### 1. GPU 가속 활용

```jsx
// 애니메이션 최적화
const OptimizedAnimation = ({ children, isVisible }) => (
  <Sizing 
    position="fixed"
    style={{
      transform: `translateX(${isVisible ? '0' : '-100%'})`,
      willChange: 'transform',  // GPU 가속 힌트
      transition: 'transform 0.3s ease'
    }}
  >
    {children}
  </Sizing>
);
```

### 2. 가상화를 위한 고정 크기

```jsx
// 가상화에 최적화된 아이템
const VirtualizedItem = ({ children, index, itemHeight }) => (
  <Sizing 
    position="absolute"
    top={index * itemHeight}
    width="100%"
    height={itemHeight}
  >
    {children}
  </Sizing>
);
```

## 🔍 다음 단계

Sizing 컴포넌트를 이해했다면, 다음 문서들을 학습하세요:

1. **[Divider 컴포넌트](./07-Divider.md)** - 섹션 구분과 시각적 분리
2. **[Asterisk 컴포넌트](./08-Asterisk.md)** - 필수 입력 표시
3. **[복합 컴포넌트 가이드](../03-system-01/)** - 프리미티브들을 조합한 실제 컴포넌트

## ❓ 자주 묻는 질문

**Q: width와 minWidth를 함께 사용할 때 우선순위는?**
A: minWidth가 width보다 우선됩니다. width가 100px이고 minWidth가 200px이면 실제로는 200px가 됩니다.

**Q: 반응형 값에서 일부 브레이크포인트만 지정해도 되나요?**
A: 네, 가능합니다. 지정하지 않은 브레이크포인트는 이전 값을 상속받습니다.

**Q: position: fixed 요소가 스크롤과 함께 움직여요.**
A: position: fixed는 뷰포트 기준이므로 부모 요소에 transform이 있으면 문제가 될 수 있습니다. 확인해보세요.

**Q: overflow: auto와 overflow: scroll의 차이점은?**
A: auto는 필요할 때만 스크롤바를 표시하고, scroll은 항상 스크롤바를 표시합니다.

---

**관련 문서**  
→ [프리미티브 개요](./00-개요.md)  
→ [Frame 컴포넌트](./03-Frame.md)  
→ [Surface 컴포넌트](./04-Surface.md)

**문서 개선 제안**  
Sizing 컴포넌트 관련 질문이나 개선 제안이 있다면 GitHub Issues로 알려주세요. 