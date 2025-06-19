---
title: "Surface 컴포넌트"
component: "Surface"
category: "프리미티브"
status: "안정화"
last_updated: "2024-01-15"
related: ["Frame", "Text", "Icon", "Interactive"]
---

# Surface 컴포넌트

## 📝 개요

Surface는 **모든 시각적 스타일링**을 담당하는 프리미티브 컴포넌트입니다. 배경색, 전경색, 테두리, 그림자, 둥근 모서리 등을 자동으로 관리하며, **접근성 기준에 맞는 색상 대비**를 보장합니다.

### 핵심 특징

- **자동 색상 대비 보장**: WCAG 2.1 AA 기준 자동 준수
- **시맨틱 색상 시스템**: Foundation 토큰 기반의 의미적 색상 사용
- **5단계 그림자 시스템**: 깊이감 표현을 위한 체계적 그림자
- **반응형 스타일**: 디바이스별 다른 스타일 적용 가능
- **상태별 자동 색상**: rest, hovered, pressed, selected, disabled 상태 지원

## 🔧 Props 인터페이스

```typescript
interface SurfaceProps {
  // 색상 Props
  background?: ColorToken | ResponsiveValue<ColorToken>;
  foreground?: ColorToken | ResponsiveValue<ColorToken>;
  
  // 테두리 Props
  borderWidth?: BorderWidth | ResponsiveValue<BorderWidth>;
  borderColor?: ColorToken | ResponsiveValue<ColorToken>;
  borderRadius?: BorderRadius | ResponsiveValue<BorderRadius>;
  borderStyle?: BorderStyle | ResponsiveValue<BorderStyle>;
  
  // 그림자 Props
  boxShadow?: ShadowLevel | ResponsiveValue<ShadowLevel>;
  
  // 투명도 Props
  opacity?: number | ResponsiveValue<number>;
  
  // HTML Props
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any; // 기타 HTML 속성
}
```

### ColorToken (시맨틱 색상 토큰)

Surface는 **Foundation 토큰에서 자동 생성된 시맨틱 색상**을 사용합니다:

#### Primary Colors (주요 색상)
```typescript
// System-01 (Professional & Clean)
'primary-system01-1-rest' | 'primary-system01-1-hovered' | 'primary-system01-1-pressed' |
'primary-system01-2-rest' | 'primary-system01-2-hovered' | 'primary-system01-2-pressed' |
'primary-system01-3-rest' | 'primary-system01-3-hovered' | 'primary-system01-3-pressed' |
'primary-system01-oncolor'  // 주요 색상 위의 텍스트 색상

// System-02 (Friendly & Bright)
'primary-system02-1-rest' | 'primary-system02-1-hovered' | 'primary-system02-1-pressed' |
'primary-system02-2-rest' | 'primary-system02-2-hovered' | 'primary-system02-2-pressed' |
'primary-system02-3-rest' | 'primary-system02-3-hovered' | 'primary-system02-3-pressed' |
'primary-system02-oncolor'
```

#### Secondary Colors (보조 색상)
```typescript
'secondary-system01-1-rest' | 'secondary-system01-1-hovered' | 'secondary-system01-1-pressed' |
'secondary-system01-2-rest' | 'secondary-system01-2-hovered' | 'secondary-system01-2-pressed' |
'secondary-system01-3-rest' | 'secondary-system01-3-hovered' | 'secondary-system01-3-pressed' |
'secondary-system01-oncolor'
```

#### Semantic State Colors (상태 색상)
```typescript
// 성공
'success-system01-1-rest' | 'success-system01-2-rest' | 'success-system01-3-rest' |
'success-system01-oncolor'

// 오류
'error-system01-1-rest' | 'error-system01-2-rest' | 'error-system01-3-rest' |
'error-system01-oncolor'

// 경고
'warning-system01-1-rest' | 'warning-system01-2-rest' | 'warning-system01-3-rest' |
'warning-system01-oncolor'

// 정보
'info-system01-1-rest' | 'info-system01-2-rest' | 'info-system01-3-rest' |
'info-system01-oncolor'
```

#### Neutral Colors (중성 색상)
```typescript
'neutral-system01-1-rest' | 'neutral-system01-2-rest' | 'neutral-system01-3-rest' |
'neutral-system01-oncolor'
```

### BorderWidth (4개 타입)

```typescript
type BorderWidth = 'none' | 'thin' | 'medium' | 'thick';

// Foundation 토큰 매핑
const borderWidthTokens = {
  none: '0',      // 테두리 없음
  thin: '1px',    // var(--foundation-foundation-border-width-10)
  medium: '2px',  // var(--foundation-foundation-border-width-20)  
  thick: '4px'    // var(--foundation-foundation-border-width-30)
}
```

### BorderRadius (6개 타입)

```typescript
type BorderRadius = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'full';

// Foundation 토큰 매핑
const borderRadiusTokens = {
  none: '0',      // 직각
  xs: '2px',      // var(--foundation-foundation-border-radius-xs)
  sm: '4px',      // var(--foundation-foundation-border-radius-sm)
  md: '8px',      // var(--foundation-foundation-border-radius-md)
  lg: '12px',     // var(--foundation-foundation-border-radius-lg)
  full: '50%'     // 완전한 원형
}
```

### BorderStyle (4개 타입)

```typescript
type BorderStyle = 'solid' | 'dashed' | 'dotted' | 'none';
```

### ShadowLevel (6개 타입)

| Level | 사용 용도 | Shadow Token | 사용 빈도 |
|-------|-----------|--------------|-----------|
| `none` | 그림자 없음 | - | ⭐⭐ |
| `10` | 카드, 버튼 | `--foundation-foundation-shadow-10` | ⭐⭐⭐⭐⭐ |
| `20` | 드롭다운, 팝오버 | `--foundation-foundation-shadow-20` | ⭐⭐⭐⭐ |
| `30` | 모달, 대화상자 | `--foundation-foundation-shadow-30` | ⭐⭐⭐ |
| `40` | 내비게이션 바 | `--foundation-foundation-shadow-40` | ⭐⭐ |
| `50` | 전체 화면 오버레이 | `--foundation-foundation-shadow-50` | ⭐ |

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

### 1. 기본 배경색 사용

```jsx
// 기본 배경
<Surface background="secondary-system01-1-rest">
  <Frame padding="md">
    <Text>기본 배경색</Text>
  </Frame>
</Surface>

// 주요 색상 배경
<Surface 
  background="primary-system01-1-rest" 
  foreground="primary-system01-oncolor"
>
  <Frame padding="md">
    <Text>주요 색상 배경 (자동 텍스트 색상)</Text>
  </Frame>
</Surface>

// 투명 배경
<Surface background="transparent">
  <Frame padding="md">
    <Text>투명 배경</Text>
  </Frame>
</Surface>
```

### 2. 테두리 스타일

```jsx
// 기본 테두리
<Surface 
  background="secondary-system01-1-rest"
  borderWidth="thin"
  borderColor="neutral-system01-2-rest"
  borderRadius="sm"
>
  <Frame padding="md">
    <Text>테두리가 있는 Surface</Text>
  </Frame>
</Surface>

// 둥근 모서리
<Surface 
  background="primary-system01-2-rest"
  borderRadius="lg"
>
  <Frame padding="lg">
    <Text>둥근 모서리</Text>
  </Frame>
</Surface>

// 원형
<Surface 
  background="success-system01-1-rest"
  borderRadius="full"
  style={{ width: '100px', height: '100px' }}
>
  <Frame display="flex" justify="center" align="center" height="100%">
    <Icon name="checkmark" size="lg" />
  </Frame>
</Surface>
```

### 3. 그림자 적용

```jsx
// 카드 스타일 (기본 그림자)
<Surface 
  background="secondary-system01-1-rest"
  borderRadius="md"
  boxShadow="10"
>
  <Frame padding="lg">
    <Text variant="heading-3" weight="bold">카드 제목</Text>
    <Text variant="body-2">카드 내용</Text>
  </Frame>
</Surface>

// 떠있는 느낌 (중간 그림자)
<Surface 
  background="secondary-system01-1-rest"
  borderRadius="md"
  boxShadow="20"
>
  <Frame padding="lg">
    <Text>떠있는 카드</Text>
  </Frame>
</Surface>

// 모달 스타일 (강한 그림자)
<Surface 
  background="secondary-system01-1-rest"
  borderRadius="lg"
  boxShadow="30"
>
  <Frame padding="xl">
    <Text variant="title-2" weight="bold">모달 제목</Text>
    <Text variant="body-1">모달 내용</Text>
  </Frame>
</Surface>
```

### 4. 상태별 색상

```jsx
// 성공 상태
<Surface 
  background="success-system01-2-rest"
  foreground="success-system01-oncolor"
  borderRadius="sm"
>
  <Frame padding="sm" display="flex" align="center" gap="xs">
    <Icon name="checkmark-circle" size="sm" />
    <Text variant="body-2" weight="medium">성공적으로 저장되었습니다</Text>
  </Frame>
</Surface>

// 오류 상태
<Surface 
  background="error-system01-2-rest"
  foreground="error-system01-oncolor"
  borderRadius="sm"
>
  <Frame padding="sm" display="flex" align="center" gap="xs">
    <Icon name="alert-circle" size="sm" />
    <Text variant="body-2" weight="medium">오류가 발생했습니다</Text>
  </Frame>
</Surface>

// 경고 상태
<Surface 
  background="warning-system01-2-rest"
  foreground="warning-system01-oncolor"
  borderRadius="sm"
>
  <Frame padding="sm" display="flex" align="center" gap="xs">
    <Icon name="alert-triangle" size="sm" />
    <Text variant="body-2" weight="medium">주의가 필요합니다</Text>
  </Frame>
</Surface>
```

## 🎨 시스템별 사용 패턴

### System-01 (Professional & Clean) 패턴

```jsx
// System-01: 절제되고 명확한 스타일
const System01Card = ({ title, content }) => (
  <Surface 
    background="secondary-system01-1-rest"
    borderRadius="sm"        // 작은 모서리
    boxShadow="10"          // 미묘한 그림자
    borderWidth="thin"      // 얇은 테두리
    borderColor="neutral-system01-2-rest"
  >
    <Frame padding="md" display="flex" direction="column" gap="sm">
      <Text variant="heading-3" weight="bold">{title}</Text>
      <Text variant="body-2">{content}</Text>
    </Frame>
  </Surface>
);

// System-01 버튼 스타일
const System01Button = ({ children, variant = 'primary' }) => (
  <Surface 
    background={`${variant}-system01-1-rest`}
    foreground={`${variant}-system01-oncolor`}
    borderRadius="sm"
    boxShadow="none"        // 그림자 없음
  >
    <Frame padding="sm" display="flex" align="center" justify="center">
      <Text variant="label-1" weight="medium">{children}</Text>
    </Frame>
  </Surface>
);
```

### System-02 (Friendly & Bright) 패턴

```jsx
// System-02: 친근하고 부드러운 스타일
const System02Card = ({ title, content }) => (
  <Surface 
    background="secondary-system02-1-rest"
    borderRadius="lg"        // 큰 모서리
    boxShadow="20"          // 명확한 그림자
  >
    <Frame padding="lg" display="flex" direction="column" gap="md">
      <Text variant="heading-2" weight="bold">{title}</Text>
      <Text variant="reading">{content}</Text>
    </Frame>
  </Surface>
);

// System-02 버튼 스타일
const System02Button = ({ children, variant = 'primary' }) => (
  <Surface 
    background={`${variant}-system02-1-rest`}
    foreground={`${variant}-system02-oncolor`}
    borderRadius="lg"       // 둥근 모서리
    boxShadow="10"         // 부드러운 그림자
  >
    <Frame padding="md" display="flex" align="center" justify="center">
      <Text variant="label-1" weight="medium">{children}</Text>
    </Frame>
  </Surface>
);
```

## 📏 실전 조합 패턴

### 1. 카드 컴포넌트 패턴

```jsx
// 기본 카드
const Card = ({ 
  title, 
  description, 
  actions, 
  variant = 'default',
  elevated = false 
}) => (
  <Surface 
    background="secondary-system01-1-rest"
    borderRadius="md"
    boxShadow={elevated ? "20" : "10"}
    borderWidth={variant === 'outlined' ? 'thin' : 'none'}
    borderColor={variant === 'outlined' ? 'neutral-system01-2-rest' : undefined}
  >
    <Frame padding="lg" display="flex" direction="column" gap="md">
      {/* 헤더 */}
      <Frame>
        <Text variant="heading-2" weight="bold">{title}</Text>
        {description && (
          <Text variant="body-2">{description}</Text>
        )}
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

// 상태 카드 (색상별)
const StatusCard = ({ status, title, message, icon }) => {
  const getStatusConfig = (status) => {
    const configs = {
      success: {
        background: 'success-system01-2-rest',
        foreground: 'success-system01-oncolor',
        icon: 'checkmark-circle'
      },
      error: {
        background: 'error-system01-2-rest',
        foreground: 'error-system01-oncolor',
        icon: 'alert-circle'
      },
      warning: {
        background: 'warning-system01-2-rest',
        foreground: 'warning-system01-oncolor',
        icon: 'alert-triangle'
      },
      info: {
        background: 'info-system01-2-rest',
        foreground: 'info-system01-oncolor',
        icon: 'info'
      }
    };
    return configs[status] || configs.info;
  };

  const config = getStatusConfig(status);

  return (
    <Surface 
      background={config.background}
      foreground={config.foreground}
      borderRadius="sm"
    >
      <Frame padding="md" display="flex" align="center" gap="sm">
        <Icon name={icon || config.icon} size="md" />
        <Frame flex="1" display="flex" direction="column" gap="xs">
          <Text variant="body-1" weight="bold">{title}</Text>
          <Text variant="body-2">{message}</Text>
        </Frame>
      </Frame>
    </Surface>
  );
};
```

### 2. 버튼 컴포넌트 패턴

```jsx
// 기본 버튼
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  icon,
  iconPosition = 'left'
}) => {
  const getButtonConfig = (variant, disabled) => {
    if (disabled) {
      return {
        background: 'neutral-system01-2-rest',
        foreground: 'neutral-system01-oncolor',
        boxShadow: 'none'
      };
    }

    const configs = {
      primary: {
        background: 'primary-system01-1-rest',
        foreground: 'primary-system01-oncolor',
        boxShadow: '10'
      },
      secondary: {
        background: 'secondary-system01-1-rest',
        foreground: 'secondary-system01-oncolor',
        boxShadow: 'none',
        borderWidth: 'thin',
        borderColor: 'neutral-system01-2-rest'
      },
      ghost: {
        background: 'transparent',
        foreground: 'primary-system01-1-rest',
        boxShadow: 'none'
      }
    };
    return configs[variant] || configs.primary;
  };

  const config = getButtonConfig(variant, disabled);
  const padding = {
    sm: 'sm',
    md: 'md', 
    lg: 'lg'
  }[size];

  return (
    <Interactive cursor={disabled ? 'not-allowed' : 'pointer'} focusStyle="ring">
      <Surface 
        {...config}
        borderRadius="sm"
        opacity={disabled ? 0.6 : 1}
      >
        <Frame 
          padding={padding} 
          display="flex" 
          align="center" 
          justify="center"
          gap="xs"
        >
          {icon && iconPosition === 'left' && (
            <Icon name={icon} size={size === 'lg' ? 'md' : 'sm'} />
          )}
          <Text 
            variant={size === 'lg' ? 'body-1' : 'label-1'} 
            weight="medium"
          >
            {children}
          </Text>
          {icon && iconPosition === 'right' && (
            <Icon name={icon} size={size === 'lg' ? 'md' : 'sm'} />
          )}
        </Frame>
      </Surface>
    </Interactive>
  );
};

// 아이콘 버튼
const IconButton = ({ 
  icon, 
  label, 
  variant = 'ghost', 
  size = 'md' 
}) => (
  <Interactive cursor="pointer" focusStyle="ring">
    <Surface 
      background={variant === 'ghost' ? 'transparent' : `${variant}-system01-1-rest`}
      foreground={variant === 'ghost' ? 'neutral-system01-oncolor' : `${variant}-system01-oncolor`}
      borderRadius="sm"
      boxShadow={variant === 'ghost' ? 'none' : '10'}
    >
      <Frame 
        padding={size}
        display="flex" 
        align="center" 
        justify="center"
        minWidth="44px"  // 최소 터치 영역
        minHeight="44px"
      >
        <Icon name={icon} size={size} label={label} />
      </Frame>
    </Surface>
  </Interactive>
);
```

### 3. 입력 필드 패턴

```jsx
// 입력 필드 래퍼
const InputField = ({ 
  children, 
  error = false, 
  focused = false, 
  disabled = false 
}) => {
  const getBorderColor = () => {
    if (error) return 'error-system01-1-rest';
    if (focused) return 'primary-system01-1-rest';
    return 'neutral-system01-2-rest';
  };

  return (
    <Surface 
      background={disabled ? 'neutral-system01-1-rest' : 'secondary-system01-1-rest'}
      borderWidth="thin"
      borderColor={getBorderColor()}
      borderRadius="sm"
      style={{
        transition: 'border-color 0.2s ease'
      }}
    >
      <Frame padding="sm">
        {children}
      </Frame>
    </Surface>
  );
};

// 검색 입력 필드
const SearchInput = ({ placeholder, value, onChange }) => (
  <Surface 
    background="secondary-system01-1-rest"
    borderWidth="thin"
    borderColor="neutral-system01-2-rest"
    borderRadius="md"
    boxShadow="10"
  >
    <Frame padding="sm" display="flex" align="center" gap="sm">
      <Icon name="search" size="sm" />
      <input 
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          border: 'none',
          background: 'transparent',
          outline: 'none',
          flex: 1,
          fontFamily: 'inherit',
          fontSize: 'inherit'
        }}
      />
    </Frame>
  </Surface>
);
```

### 4. 네비게이션 패턴

```jsx
// 탭 네비게이션
const TabNavigation = ({ tabs, activeTab, onTabChange }) => (
  <Surface 
    background="secondary-system01-1-rest"
    borderRadius="sm"
    borderWidth="thin"
    borderColor="neutral-system01-2-rest"
  >
    <Frame display="flex" padding="xs" gap="xs">
      {tabs.map(tab => (
        <Interactive 
          key={tab.id}
          cursor="pointer"
          onClick={() => onTabChange(tab.id)}
        >
          <Surface 
            background={
              activeTab === tab.id 
                ? 'primary-system01-1-rest' 
                : 'transparent'
            }
            foreground={
              activeTab === tab.id 
                ? 'primary-system01-oncolor' 
                : 'neutral-system01-oncolor'
            }
            borderRadius="xs"
          >
            <Frame padding="sm" display="flex" align="center" gap="xs">
              {tab.icon && <Icon name={tab.icon} size="sm" />}
              <Text variant="label-1" weight="medium">{tab.label}</Text>
            </Frame>
          </Surface>
        </Interactive>
      ))}
    </Frame>
  </Surface>
);

// 브레드크럼
const Breadcrumb = ({ items }) => (
  <Surface 
    background="secondary-system01-2-rest"
    borderRadius="sm"
  >
    <Frame padding="sm" display="flex" align="center" gap="xs">
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          {index > 0 && (
            <Icon name="chevron-right" size="xs" decorative />
          )}
          <Interactive cursor="pointer">
            <Surface 
              background={index === items.length - 1 ? 'primary-system01-2-rest' : 'transparent'}
              borderRadius="xs"
            >
              <Frame padding="xs" display="flex" align="center" gap="xs">
                {item.icon && <Icon name={item.icon} size="xs" />}
                <Text 
                  variant="caption-1" 
                  weight={index === items.length - 1 ? 'bold' : 'regular'}
                >
                  {item.label}
                </Text>
              </Frame>
            </Surface>
          </Interactive>
        </React.Fragment>
      ))}
    </Frame>
  </Surface>
);
```

### 5. 대시보드 위젯 패턴

```jsx
// 메트릭 위젯
const MetricWidget = ({ 
  title, 
  value, 
  trend, 
  trendValue, 
  icon, 
  color = 'primary' 
}) => (
  <Surface 
    background="secondary-system01-1-rest"
    borderRadius="md"
    boxShadow="10"
    borderWidth="thin"
    borderColor="neutral-system01-2-rest"
  >
    <Frame padding="lg" display="flex" direction="column" gap="md">
      {/* 헤더 */}
      <Frame display="flex" justify="space-between" align="center">
        <Text variant="caption-1" weight="medium">{title}</Text>
        <Surface 
          background={`${color}-system01-2-rest`}
          borderRadius="sm"
        >
          <Frame padding="xs">
            <Icon name={icon} size="sm" />
          </Frame>
        </Surface>
      </Frame>
      
      {/* 메인 값 */}
      <Text variant="title-1" weight="bold">{value}</Text>
      
      {/* 트렌드 */}
      <Frame display="flex" align="center" gap="xs">
        <Surface 
          background={trend > 0 ? 'success-system01-2-rest' : 'error-system01-2-rest'}
          borderRadius="xs"
        >
          <Frame padding="xxs">
            <Icon 
              name={trend > 0 ? 'trending-up' : 'trending-down'} 
              size="xs"
            />
          </Frame>
        </Surface>
        <Text variant="caption-1" weight="medium">
          {trendValue} from last month
        </Text>
      </Frame>
    </Frame>
  </Surface>
);

// 차트 위젯
const ChartWidget = ({ title, children, actions }) => (
  <Surface 
    background="secondary-system01-1-rest"
    borderRadius="md"
    boxShadow="10"
  >
    <Frame display="flex" direction="column" height="300px">
      {/* 헤더 */}
      <Surface 
        background="neutral-system01-1-rest"
        borderRadius="md md none none"  // 상단만 둥글게
      >
        <Frame 
          padding="md" 
          display="flex" 
          justify="space-between" 
          align="center"
        >
          <Text variant="heading-3" weight="bold">{title}</Text>
          {actions && (
            <Frame display="flex" gap="xs">
              {actions}
            </Frame>
          )}
        </Frame>
      </Surface>
      
      {/* 차트 영역 */}
      <Frame flex="1" padding="lg">
        {children}
      </Frame>
    </Frame>
  </Surface>
);
```

## 📱 반응형 Surface 패턴

### 1. 반응형 카드

```jsx
// 디바이스별 다른 스타일
const ResponsiveCard = ({ title, content }) => (
  <Surface 
    background="secondary-system01-1-rest"
    borderRadius={{
      mobile: 'sm',
      desktop: 'md'
    }}
    boxShadow={{
      mobile: '10',
      desktop: '20'
    }}
    borderWidth={{
      mobile: 'none',
      desktop: 'thin'
    }}
    borderColor="neutral-system01-2-rest"
  >
    <Frame 
      padding={{
        mobile: 'md',
        desktop: 'lg'
      }}
      display="flex" 
      direction="column" 
      gap="sm"
    >
      <Text variant="heading-2" weight="bold">{title}</Text>
      <Text variant="body-2">{content}</Text>
    </Frame>
  </Surface>
);
```

### 2. 반응형 네비게이션

```jsx
// 모바일/데스크톱 다른 스타일
const ResponsiveNavigation = ({ items }) => (
  <Surface 
    background={{
      mobile: 'primary-system01-1-rest',
      desktop: 'secondary-system01-1-rest'
    }}
    borderRadius={{
      mobile: 'none',
      desktop: 'md'
    }}
    boxShadow={{
      mobile: 'none',
      desktop: '20'
    }}
  >
    <Frame 
      padding="md"
      display="flex"
      direction={{
        mobile: 'column',
        desktop: 'row'
      }}
      gap="sm"
    >
      {items.map(item => (
        <Frame key={item.id} flex="1">
          <Text variant="body-2">{item.label}</Text>
        </Frame>
      ))}
    </Frame>
  </Surface>
);
```

## ♿ 접근성 고려사항

### 1. 색상 대비 자동 보장

```jsx
// ✅ 자동 색상 대비 - Surface가 자동으로 적절한 전경색 설정
<Surface 
  background="primary-system01-1-rest"
  foreground="primary-system01-oncolor"  // 자동으로 충분한 대비 보장
>
  <Text>읽기 쉬운 텍스트</Text>
</Surface>

// ❌ 수동 색상 지정 - 대비 부족 위험
<div style={{ backgroundColor: '#e0e0e0', color: '#d0d0d0' }}>
  <Text>읽기 어려운 텍스트</Text>
</div>
```

### 2. 포커스 상태 고려

```jsx
// ✅ Interactive와 조합하여 포커스 스타일 자동 적용
<Interactive focusStyle="ring">
  <Surface 
    background="primary-system01-1-rest"
    borderRadius="sm"
  >
    <Frame padding="md">
      <Text>포커스 가능한 Surface</Text>
    </Frame>
  </Surface>
</Interactive>

// ✅ 커스텀 포커스 스타일
<Surface 
  background="secondary-system01-1-rest"
  borderRadius="sm"
  style={{
    '&:focus': {
      outline: '2px solid var(--foundation-foundation-color-blue-light-40)',
      outlineOffset: '2px'
    }
  }}
  tabIndex="0"
>
  <Frame padding="md">
    <Text>커스텀 포커스 스타일</Text>
  </Frame>
</Surface>
```

### 3. 상태 전달

```jsx
// ✅ 색상과 아이콘으로 상태 전달
<Surface 
  background="error-system01-2-rest"
  foreground="error-system01-oncolor"
  borderRadius="sm"
>
  <Frame padding="sm" display="flex" align="center" gap="xs">
    <Icon name="alert-circle" size="sm" />  {/* 색상 + 아이콘 */}
    <Text variant="body-2">오류가 발생했습니다</Text>
  </Frame>
</Surface>

// ❌ 색상에만 의존
<Surface 
  background="error-system01-2-rest"
  borderRadius="sm"
>
  <Frame padding="sm">
    <Text>오류 상태</Text>  {/* 색상만으로 상태 표현 */}
  </Frame>
</Surface>
```

## 🎯 성능 최적화

### 1. 불필요한 리렌더링 방지

```jsx
// ✅ 메모이제이션 활용
const MemoizedSurface = React.memo(({ background, children, ...props }) => (
  <Surface background={background} {...props}>
    {children}
  </Surface>
));

// ✅ 정적 스타일 분리
const CARD_STYLES = {
  background: 'secondary-system01-1-rest',
  borderRadius: 'md',
  boxShadow: '10'
};

<Surface {...CARD_STYLES}>
  {children}
</Surface>
```

### 2. CSS 변수 활용

```jsx
// ✅ CSS 변수로 동적 색상 변경
<Surface 
  background="primary-system01-1-rest"
  style={{
    '--custom-opacity': opacity,
    backgroundColor: `rgba(var(--foundation-foundation-color-primary-rgb), var(--custom-opacity))`
  }}
>
  {children}
</Surface>
```

## 🔍 다음 단계

Surface 컴포넌트를 이해했다면, 다음 문서들을 학습하세요:

1. **[Interactive 컴포넌트](./05-Interactive.md)** - Surface와 조합하여 상호작용 가능한 요소 구현
2. **[Frame 컴포넌트](./03-Frame.md)** - Surface 안에서 레이아웃 구성
3. **[Sizing 컴포넌트](./06-Sizing.md)** - Surface의 크기 제어

## ❓ 자주 묻는 질문

**Q: background와 foreground를 항상 함께 설정해야 하나요?**
A: 권장됩니다. foreground를 설정하지 않으면 기본 텍스트 색상이 사용되어 대비가 부족할 수 있습니다.

**Q: 커스텀 색상을 사용하고 싶은데 어떻게 하나요?**
A: Foundation 토큰에 새로운 색상을 추가하고 시맨틱 토큰을 생성하세요. 직접 색상값 사용은 권장하지 않습니다.

**Q: 그림자가 너무 강하거나 약해요.**
A: 5단계 그림자 시스템을 활용하세요. 용도에 맞는 적절한 레벨을 선택하는 것이 중요합니다.

**Q: 테두리와 그림자를 함께 사용해도 되나요?**
A: 네, 가능합니다. 다만 과도한 시각적 요소는 피하고 디자인 시스템의 일관성을 고려하세요.

---

**관련 문서**  
→ [프리미티브 개요](./00-개요.md)  
→ [Frame 컴포넌트](./03-Frame.md)  
→ [Interactive 컴포넌트](./05-Interactive.md)

**문서 개선 제안**  
Surface 컴포넌트 관련 질문이나 개선 제안이 있다면 GitHub Issues로 알려주세요. 