---
title: "Interactive 컴포넌트"
component: "Interactive"
category: "프리미티브"
status: "안정화"
last_updated: "2024-01-15"
related: ["Surface", "Frame", "Text", "Icon"]
---

# Interactive 컴포넌트

## 📝 개요

Interactive는 **모든 상호작용 기능**을 담당하는 프리미티브 컴포넌트입니다. 클릭, 터치, 키보드 입력, 포커스 관리를 자동으로 처리하며, **WCAG 2.1 AA 접근성 기준**을 완벽하게 준수합니다.

### 핵심 특징

- **완전한 접근성 지원**: 키보드 네비게이션, 스크린 리더, 포커스 관리 자동화
- **상태 관리 자동화**: rest, hovered, pressed, focused, disabled 상태 자동 처리
- **터치 최적화**: 44×44px 최소 터치 영역 자동 보장
- **포커스 스타일 시스템**: 3가지 포커스 스타일 제공
- **반응형 상호작용**: 디바이스별 다른 상호작용 방식 지원

## 🔧 Props 인터페이스

```typescript
interface InteractiveProps {
  // 상호작용 Props
  onClick?: (event: React.MouseEvent) => void;
  onPress?: (event: React.MouseEvent | React.TouchEvent) => void;
  onHover?: (hovered: boolean) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
  
  // 상태 Props
  disabled?: boolean | ResponsiveValue<boolean>;
  pressed?: boolean;
  selected?: boolean;
  
  // 포커스 Props
  focusStyle?: FocusStyle | ResponsiveValue<FocusStyle>;
  tabIndex?: number;
  
  // 커서 Props
  cursor?: CursorType | ResponsiveValue<CursorType>;
  
  // 접근성 Props
  role?: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  ariaExpanded?: boolean;
  ariaPressed?: boolean;
  ariaSelected?: boolean;
  
  // HTML Props
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any; // 기타 HTML 속성
}
```

### FocusStyle (3개 타입)

| Style | 시각적 표현 | 용도 | 사용 빈도 |
|-------|--------------|------|-----------|
| `ring` | 외곽선 링 | 기본 포커스 (버튼, 링크) | ⭐⭐⭐⭐⭐ |
| `outline` | 점선 외곽선 | 텍스트, 콘텐츠 영역 | ⭐⭐⭐ |
| `background` | 배경색 변경 | 리스트 아이템, 메뉴 | ⭐⭐⭐⭐ |

```typescript
// Foundation 토큰 매핑
const focusStyles = {
  ring: {
    outline: '2px solid var(--foundation-foundation-color-blue-light-40)',
    outlineOffset: '2px'
  },
  outline: {
    outline: '2px dashed var(--foundation-foundation-color-blue-light-40)',
    outlineOffset: '1px'
  },
  background: {
    backgroundColor: 'var(--foundation-foundation-color-blue-light-10)'
  }
}
```

### CursorType (6개 타입)

```typescript
type CursorType = 
  | 'pointer'      // 클릭 가능 (버튼, 링크)
  | 'text'         // 텍스트 선택 가능
  | 'grab'         // 드래그 가능
  | 'grabbing'     // 드래그 중
  | 'not-allowed'  // 비활성화됨
  | 'wait';        // 로딩 중
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

### 1. 기본 버튼 상호작용

```jsx
// 클릭 가능한 기본 버튼
<Interactive 
  cursor="pointer" 
  focusStyle="ring"
  onClick={() => console.log('클릭됨')}
>
  <Surface 
    background="primary-system01-1-rest" 
    foreground="primary-system01-oncolor"
    borderRadius="sm"
  >
    <Frame padding="md">
      <Text variant="label-1" weight="medium">클릭하세요</Text>
    </Frame>
  </Surface>
</Interactive>

// 아이콘 버튼
<Interactive 
  cursor="pointer" 
  focusStyle="ring"
  onClick={handleClose}
  ariaLabel="닫기"
>
  <Surface borderRadius="sm">
    <Frame padding="sm" minWidth="44px" minHeight="44px" display="flex" justify="center" align="center">
      <Icon name="close" size="sm" />
    </Frame>
  </Surface>
</Interactive>
```

### 2. 링크 상호작용

```jsx
// 텍스트 링크
<Interactive 
  as="a"
  href="/about"
  cursor="pointer"
  focusStyle="outline"
>
  <Text variant="body-1" style={{ textDecoration: 'underline' }}>
    자세히 보기
  </Text>
</Interactive>

// 카드 링크
<Interactive 
  as="a"
  href="/product/123"
  cursor="pointer"
  focusStyle="ring"
>
  <Surface 
    background="secondary-system01-1-rest"
    borderRadius="md"
    boxShadow="10"
  >
    <Frame padding="lg">
      <Text variant="heading-3" weight="bold">제품명</Text>
      <Text variant="body-2">제품 설명</Text>
    </Frame>
  </Surface>
</Interactive>
```

### 3. 리스트 아이템 상호작용

```jsx
// 선택 가능한 리스트 아이템
<Interactive 
  cursor="pointer"
  focusStyle="background"
  selected={isSelected}
  onClick={() => onSelect(item.id)}
  ariaSelected={isSelected}
  role="option"
>
  <Surface 
    background={isSelected ? 'primary-system01-2-rest' : 'transparent'}
    borderRadius="sm"
  >
    <Frame padding="md" display="flex" align="center" gap="sm">
      <Icon name={item.icon} size="sm" />
      <Text variant="body-2">{item.label}</Text>
    </Frame>
  </Surface>
</Interactive>

// 메뉴 아이템
<Interactive 
  cursor="pointer"
  focusStyle="background"
  onClick={() => handleMenuClick(item.action)}
  role="menuitem"
>
  <Frame padding="sm" display="flex" align="center" gap="sm">
    <Icon name={item.icon} size="sm" />
    <Text variant="body-2">{item.label}</Text>
    {item.hasSubmenu && (
      <Frame flex="1" />
      <Icon name="chevron-right" size="xs" />
    )}
  </Frame>
</Interactive>
```

### 4. 토글 상호작용

```jsx
// 토글 버튼
<Interactive 
  cursor="pointer"
  focusStyle="ring"
  pressed={isPressed}
  onClick={() => setIsPressed(!isPressed)}
  ariaPressed={isPressed}
  role="button"
>
  <Surface 
    background={isPressed ? 'primary-system01-1-rest' : 'secondary-system01-1-rest'}
    foreground={isPressed ? 'primary-system01-oncolor' : 'secondary-system01-oncolor'}
    borderRadius="sm"
  >
    <Frame padding="md" display="flex" align="center" gap="xs">
      <Icon name={isPressed ? 'heart-filled' : 'heart-outlined'} size="sm" />
      <Text variant="label-1" weight="medium">
        {isPressed ? '좋아요 취소' : '좋아요'}
      </Text>
    </Frame>
  </Surface>
</Interactive>

// 체크박스 스타일
<Interactive 
  cursor="pointer"
  focusStyle="ring"
  selected={isChecked}
  onClick={() => setIsChecked(!isChecked)}
  ariaChecked={isChecked}
  role="checkbox"
>
  <Frame display="flex" align="center" gap="sm">
    <Surface 
      background={isChecked ? 'primary-system01-1-rest' : 'secondary-system01-1-rest'}
      borderRadius="xs"
      borderWidth="thin"
      borderColor="neutral-system01-2-rest"
    >
      <Frame padding="xs" minWidth="20px" minHeight="20px" display="flex" justify="center" align="center">
        {isChecked && <Icon name="checkmark" size="xs" />}
      </Frame>
    </Surface>
    <Text variant="body-2">{label}</Text>
  </Frame>
</Interactive>
```

## 🎨 시스템별 상호작용 패턴

### System-01 (Professional & Clean) 패턴

```jsx
// System-01: 절제되고 명확한 상호작용
const System01Button = ({ children, onClick, variant = 'primary' }) => (
  <Interactive 
    cursor="pointer" 
    focusStyle="ring"
    onClick={onClick}
  >
    <Surface 
      background={`${variant}-system01-1-rest`}
      foreground={`${variant}-system01-oncolor`}
      borderRadius="sm"      // 절제된 모서리
      boxShadow="none"       // 그림자 없음
    >
      <Frame padding="sm">   {/* 타이트한 패딩 */}
        <Text variant="label-1" weight="medium">{children}</Text>
      </Frame>
    </Surface>
  </Interactive>
);

// System-01: 미묘한 호버 효과
const System01Card = ({ onClick, children }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    onClick={onClick}
    style={{
      transition: 'transform 0.1s ease',
      '&:hover': {
        transform: 'translateY(-1px)'  // 미묘한 상승 효과
      }
    }}
  >
    <Surface 
      background="secondary-system01-1-rest"
      borderRadius="sm"
      boxShadow="10"
    >
      <Frame padding="md">
        {children}
      </Frame>
    </Surface>
  </Interactive>
);
```

### System-02 (Friendly & Bright) 패턴

```jsx
// System-02: 친근하고 표현적인 상호작용
const System02Button = ({ children, onClick, variant = 'primary' }) => (
  <Interactive 
    cursor="pointer" 
    focusStyle="ring"
    onClick={onClick}
    style={{
      transition: 'all 0.2s ease',
      '&:hover': {
        transform: 'scale(1.02)'  // 부드러운 확대 효과
      },
      '&:active': {
        transform: 'scale(0.98)'  // 눌림 효과
      }
    }}
  >
    <Surface 
      background={`${variant}-system02-1-rest`}
      foreground={`${variant}-system02-oncolor`}
      borderRadius="lg"      // 둥근 모서리
      boxShadow="10"        // 부드러운 그림자
    >
      <Frame padding="md">   {/* 넉넉한 패딩 */}
        <Text variant="label-1" weight="medium">{children}</Text>
      </Frame>
    </Surface>
  </Interactive>
);

// System-02: 활발한 상호작용 피드백
const System02Card = ({ onClick, children }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    onClick={onClick}
    style={{
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: 'var(--foundation-foundation-shadow-20)'
      }
    }}
  >
    <Surface 
      background="secondary-system02-1-rest"
      borderRadius="lg"
      boxShadow="10"
    >
      <Frame padding="lg">
        {children}
      </Frame>
    </Surface>
  </Interactive>
);
```

## 📏 실전 조합 패턴

### 1. 네비게이션 상호작용

```jsx
// 탭 네비게이션
const TabItem = ({ label, icon, active, onClick }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="background"
    selected={active}
    onClick={onClick}
    role="tab"
    ariaSelected={active}
  >
    <Surface 
      background={active ? 'primary-system01-1-rest' : 'transparent'}
      foreground={active ? 'primary-system01-oncolor' : 'neutral-system01-oncolor'}
      borderRadius="sm"
    >
      <Frame 
        padding="sm" 
        display="flex" 
        direction="column" 
        align="center" 
        gap="xs"
        minWidth="60px"
      >
        {icon && <Icon name={icon} size="sm" />}
        <Text variant="caption-1" weight={active ? 'medium' : 'regular'}>
          {label}
        </Text>
      </Frame>
    </Surface>
  </Interactive>
);

// 브레드크럼 아이템
const BreadcrumbItem = ({ label, href, onClick, isLast }) => (
  <Interactive 
    as={href ? 'a' : 'button'}
    href={href}
    cursor="pointer"
    focusStyle="outline"
    onClick={onClick}
    disabled={isLast}
  >
    <Text 
      variant="body-2" 
      weight={isLast ? 'bold' : 'regular'}
      style={{
        textDecoration: !isLast ? 'underline' : 'none',
        color: isLast ? 'var(--neutral-system01-oncolor)' : 'var(--primary-system01-1-rest)'
      }}
    >
      {label}
    </Text>
  </Interactive>
);

// 사이드바 메뉴 아이템
const SidebarMenuItem = ({ icon, label, active, collapsed, onClick }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="background"
    selected={active}
    onClick={onClick}
    role="menuitem"
  >
    <Surface 
      background={active ? 'primary-system01-2-rest' : 'transparent'}
      borderRadius="sm"
    >
      <Frame 
        padding="sm" 
        display="flex" 
        align="center" 
        gap="sm"
        minHeight="44px"
      >
        <Icon name={icon} size="sm" />
        {!collapsed && (
          <Text variant="body-2" weight={active ? 'medium' : 'regular'}>
            {label}
          </Text>
        )}
      </Frame>
    </Surface>
  </Interactive>
);
```

### 2. 폼 상호작용

```jsx
// 라디오 버튼 그룹
const RadioButton = ({ name, value, checked, onChange, label }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    selected={checked}
    onClick={() => onChange(value)}
    role="radio"
    ariaChecked={checked}
  >
    <Frame display="flex" align="center" gap="sm">
      <Surface 
        background={checked ? 'primary-system01-1-rest' : 'secondary-system01-1-rest'}
        borderRadius="full"
        borderWidth="thin"
        borderColor="neutral-system01-2-rest"
      >
        <Frame 
          width="20px" 
          height="20px" 
          display="flex" 
          justify="center" 
          align="center"
        >
          {checked && (
            <Surface 
              background="primary-system01-oncolor"
              borderRadius="full"
              width="8px"
              height="8px"
            />
          )}
        </Frame>
      </Surface>
      <Text variant="body-2">{label}</Text>
    </Frame>
  </Interactive>
);

// 드롭다운 트리거
const DropdownTrigger = ({ label, icon, expanded, onClick }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    onClick={onClick}
    ariaExpanded={expanded}
    ariaHaspopup="true"
    role="button"
  >
    <Surface 
      background="secondary-system01-1-rest"
      borderWidth="thin"
      borderColor="neutral-system01-2-rest"
      borderRadius="sm"
      boxShadow={expanded ? "20" : "10"}
    >
      <Frame padding="sm" display="flex" align="center" gap="sm">
        {icon && <Icon name={icon} size="sm" />}
        <Text variant="body-2">{label}</Text>
        <Frame flex="1" />
        <Icon 
          name={expanded ? 'chevron-up' : 'chevron-down'} 
          size="xs"
          style={{
            transition: 'transform 0.2s ease',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
        />
      </Frame>
    </Surface>
  </Interactive>
);

// 파일 업로드 영역
const FileUploadArea = ({ onDrop, dragActive }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    onDrop={onDrop}
    onDragOver={(e) => e.preventDefault()}
    style={{
      transition: 'all 0.2s ease'
    }}
  >
    <Surface 
      background={dragActive ? 'primary-system01-2-rest' : 'secondary-system01-1-rest'}
      borderWidth="medium"
      borderColor={dragActive ? 'primary-system01-1-rest' : 'neutral-system01-2-rest'}
      borderStyle="dashed"
      borderRadius="md"
    >
      <Frame 
        padding="xl" 
        display="flex" 
        direction="column" 
        align="center" 
        gap="md"
        minHeight="200px"
        justify="center"
      >
        <Icon name="upload" size="xl" />
        <Frame display="flex" direction="column" align="center" gap="xs">
          <Text variant="body-1" weight="medium">
            파일을 드래그하거나 클릭하여 업로드
          </Text>
          <Text variant="caption-1">
            PNG, JPG, PDF 파일 지원 (최대 10MB)
          </Text>
        </Frame>
      </Frame>
    </Surface>
  </Interactive>
);
```

### 3. 카드/아이템 상호작용

```jsx
// 선택 가능한 카드
const SelectableCard = ({ title, description, selected, onSelect, disabled }) => (
  <Interactive 
    cursor={disabled ? 'not-allowed' : 'pointer'}
    focusStyle="ring"
    selected={selected}
    disabled={disabled}
    onClick={disabled ? undefined : onSelect}
    ariaSelected={selected}
    role="option"
  >
    <Surface 
      background={
        disabled 
          ? 'neutral-system01-1-rest'
          : selected 
            ? 'primary-system01-2-rest' 
            : 'secondary-system01-1-rest'
      }
      borderWidth={selected ? 'medium' : 'thin'}
      borderColor={
        disabled
          ? 'neutral-system01-2-rest'
          : selected 
            ? 'primary-system01-1-rest' 
            : 'neutral-system01-2-rest'
      }
      borderRadius="md"
      boxShadow={disabled ? 'none' : '10'}
      opacity={disabled ? 0.6 : 1}
    >
      <Frame padding="lg" display="flex" direction="column" gap="sm">
        <Frame display="flex" justify="space-between" align="center">
          <Text 
            variant="heading-3" 
            weight="bold"
            style={{ opacity: disabled ? 0.7 : 1 }}
          >
            {title}
          </Text>
          {selected && <Icon name="checkmark-circle" size="sm" />}
        </Frame>
        <Text 
          variant="body-2"
          style={{ opacity: disabled ? 0.7 : 1 }}
        >
          {description}
        </Text>
      </Frame>
    </Surface>
  </Interactive>
);

// 액션 카드 (드릴다운)
const ActionCard = ({ title, description, icon, onClick, badge }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    onClick={onClick}
    style={{
      transition: 'all 0.2s ease',
      '&:hover': {
        transform: 'translateY(-2px)'
      }
    }}
  >
    <Surface 
      background="secondary-system01-1-rest"
      borderRadius="md"
      boxShadow="10"
    >
      <Frame padding="lg" display="flex" direction="column" gap="md">
        {/* 헤더 */}
        <Frame display="flex" justify="space-between" align="center">
          <Frame display="flex" align="center" gap="sm">
            {icon && (
              <Surface 
                background="primary-system01-2-rest"
                borderRadius="sm"
              >
                <Frame padding="xs">
                  <Icon name={icon} size="sm" />
                </Frame>
              </Surface>
            )}
            <Text variant="heading-3" weight="bold">{title}</Text>
          </Frame>
          
          <Frame display="flex" align="center" gap="sm">
            {badge && (
              <Surface 
                background="success-system01-2-rest"
                borderRadius="full"
              >
                <Frame paddingX="xs" paddingY="xxs">
                  <Text variant="caption-1" weight="medium">{badge}</Text>
                </Frame>
              </Surface>
            )}
            <Icon name="chevron-right" size="sm" />
          </Frame>
        </Frame>
        
        {/* 설명 */}
        <Text variant="body-2">{description}</Text>
      </Frame>
    </Surface>
  </Interactive>
);
```

### 4. 미디어 상호작용

```jsx
// 재생 버튼
const PlayButton = ({ playing, onToggle, size = 'md' }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    onClick={onToggle}
    ariaLabel={playing ? '일시정지' : '재생'}
    role="button"
  >
    <Surface 
      background="primary-system01-1-rest"
      foreground="primary-system01-oncolor"
      borderRadius="full"
      boxShadow="20"
    >
      <Frame 
        padding={size}
        minWidth={size === 'lg' ? '60px' : '44px'}
        minHeight={size === 'lg' ? '60px' : '44px'}
        display="flex" 
        justify="center" 
        align="center"
      >
        <Icon 
          name={playing ? 'pause' : 'play'} 
          size={size === 'lg' ? 'lg' : 'md'} 
        />
      </Frame>
    </Surface>
  </Interactive>
);

// 이미지 갤러리 썸네일
const GalleryThumbnail = ({ src, alt, selected, onClick }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    selected={selected}
    onClick={onClick}
    ariaLabel={`이미지 보기: ${alt}`}
  >
    <Surface 
      borderWidth={selected ? 'thick' : 'thin'}
      borderColor={selected ? 'primary-system01-1-rest' : 'neutral-system01-2-rest'}
      borderRadius="sm"
      style={{
        transition: 'all 0.2s ease',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    >
      <Frame 
        width="80px" 
        height="80px"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </Surface>
  </Interactive>
);
```

## 📱 반응형 상호작용 패턴

### 1. 터치/마우스 적응형

```jsx
// 터치 디바이스에서는 큰 버튼, 데스크톱에서는 일반 크기
const AdaptiveButton = ({ children, onClick }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    onClick={onClick}
  >
    <Surface 
      background="primary-system01-1-rest"
      foreground="primary-system01-oncolor"
      borderRadius="sm"
    >
      <Frame 
        padding={{
          mobile: 'md',    // 터치용 큰 패딩
          desktop: 'sm'    // 마우스용 작은 패딩
        }}
        minHeight={{
          mobile: '48px',  // 터치용 최소 높이
          desktop: '36px'  // 마우스용 최소 높이
        }}
        display="flex" 
        align="center" 
        justify="center"
      >
        <Text variant="label-1" weight="medium">{children}</Text>
      </Frame>
    </Surface>
  </Interactive>
);

// 모바일에서는 전체 터치 영역, 데스크톱에서는 아이콘만
const ResponsiveIconButton = ({ icon, label, onClick }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    onClick={onClick}
    ariaLabel={label}
  >
    <Surface borderRadius="sm">
      <Frame 
        padding={{
          mobile: 'md',
          desktop: 'sm'
        }}
        minWidth={{
          mobile: '100%',  // 모바일: 전체 너비
          desktop: '44px'  // 데스크톱: 최소 터치 영역
        }}
        minHeight="44px"
        display="flex" 
        align="center"
        gap="sm"
      >
        <Icon name={icon} size="sm" />
        <Text 
          variant="body-2"
          style={{
            display: {
              mobile: 'block',  // 모바일: 텍스트 표시
              desktop: 'none'   // 데스크톱: 텍스트 숨김
            }
          }}
        >
          {label}
        </Text>
      </Frame>
    </Surface>
  </Interactive>
);
```

### 2. 호버/터치 상태 분리

```jsx
// 터치 디바이스에서는 호버 효과 없음
const SmartHoverCard = ({ title, content, onClick }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    onClick={onClick}
    style={{
      transition: 'all 0.2s ease',
      // 호버 가능한 디바이스에서만 호버 효과 적용
      '@media (hover: hover)': {
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 'var(--foundation-foundation-shadow-20)'
        }
      }
    }}
  >
    <Surface 
      background="secondary-system01-1-rest"
      borderRadius="md"
      boxShadow="10"
    >
      <Frame padding="lg">
        <Text variant="heading-3" weight="bold">{title}</Text>
        <Text variant="body-2">{content}</Text>
      </Frame>
    </Surface>
  </Interactive>
);
```

## ♿ 접근성 최적화

### 1. 키보드 네비게이션

```jsx
// 완전한 키보드 접근성
const AccessibleButton = ({ 
  children, 
  onClick, 
  onKeyDown,
  ariaLabel,
  ariaDescribedBy 
}) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    onClick={onClick}
    onKeyDown={(e) => {
      // Enter 또는 Space 키로 활성화
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick?.(e);
      }
      onKeyDown?.(e);
    }}
    tabIndex="0"
    role="button"
    ariaLabel={ariaLabel}
    ariaDescribedBy={ariaDescribedBy}
  >
    <Surface 
      background="primary-system01-1-rest"
      foreground="primary-system01-oncolor"
      borderRadius="sm"
    >
      <Frame padding="md">
        <Text variant="label-1" weight="medium">{children}</Text>
      </Frame>
    </Surface>
  </Interactive>
);

// 화살표 키로 탐색 가능한 리스트
const NavigableList = ({ items, selectedIndex, onSelect }) => (
  <Frame 
    role="listbox"
    onKeyDown={(e) => {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          onSelect(Math.min(selectedIndex + 1, items.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          onSelect(Math.max(selectedIndex - 1, 0));
          break;
        case 'Home':
          e.preventDefault();
          onSelect(0);
          break;
        case 'End':
          e.preventDefault();
          onSelect(items.length - 1);
          break;
      }
    }}
  >
    {items.map((item, index) => (
      <Interactive 
        key={item.id}
        cursor="pointer"
        focusStyle="background"
        selected={index === selectedIndex}
        onClick={() => onSelect(index)}
        tabIndex={index === selectedIndex ? 0 : -1}
        role="option"
        ariaSelected={index === selectedIndex}
      >
        <Frame padding="sm">
          <Text variant="body-2">{item.label}</Text>
        </Frame>
      </Interactive>
    ))}
  </Frame>
);
```

### 2. 스크린 리더 최적화

```jsx
// 상태 변경 알림
const ToggleButton = ({ pressed, onToggle, label, describedBy }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    pressed={pressed}
    onClick={() => {
      onToggle(!pressed);
      // 스크린 리더에 상태 변경 알림
      const announcement = pressed ? `${label} 비활성화됨` : `${label} 활성화됨`;
      // 실제로는 live region을 사용하여 알림
    }}
    role="button"
    ariaPressed={pressed}
    ariaLabel={label}
    ariaDescribedBy={describedBy}
  >
    <Surface 
      background={pressed ? 'primary-system01-1-rest' : 'secondary-system01-1-rest'}
      foreground={pressed ? 'primary-system01-oncolor' : 'secondary-system01-oncolor'}
      borderRadius="sm"
    >
      <Frame padding="md">
        <Text variant="label-1" weight="medium">{label}</Text>
      </Frame>
    </Surface>
  </Interactive>
);

// 진행 상황 알림
const ProgressButton = ({ loading, onClick, children }) => (
  <Interactive 
    cursor={loading ? 'wait' : 'pointer'}
    focusStyle="ring"
    disabled={loading}
    onClick={loading ? undefined : onClick}
    ariaLabel={loading ? '처리 중...' : undefined}
    ariaDisabled={loading}
  >
    <Surface 
      background={loading ? 'neutral-system01-2-rest' : 'primary-system01-1-rest'}
      foreground={loading ? 'neutral-system01-oncolor' : 'primary-system01-oncolor'}
      borderRadius="sm"
      opacity={loading ? 0.7 : 1}
    >
      <Frame padding="md" display="flex" align="center" gap="xs">
        {loading && <Icon name="loading" size="sm" />}
        <Text variant="label-1" weight="medium">
          {loading ? '처리 중...' : children}
        </Text>
      </Frame>
    </Surface>
  </Interactive>
);
```

### 3. 고대비 모드 지원

```jsx
// 고대비 모드에서도 명확한 포커스
const HighContrastButton = ({ children, onClick }) => (
  <Interactive 
    cursor="pointer"
    focusStyle="ring"
    onClick={onClick}
    style={{
      // 고대비 모드에서 포커스 스타일 강화
      '@media (prefers-contrast: high)': {
        '&:focus': {
          outline: '3px solid ButtonText',
          outlineOffset: '2px'
        }
      }
    }}
  >
    <Surface 
      background="primary-system01-1-rest"
      foreground="primary-system01-oncolor"
      borderRadius="sm"
      style={{
        // 고대비 모드에서 테두리 추가
        '@media (prefers-contrast: high)': {
          border: '1px solid ButtonText'
        }
      }}
    >
      <Frame padding="md">
        <Text variant="label-1" weight="medium">{children}</Text>
      </Frame>
    </Surface>
  </Interactive>
);
```

## 🎯 성능 최적화

### 1. 이벤트 최적화

```jsx
// 디바운싱된 클릭 핸들러
const DebouncedButton = ({ onClick, delay = 300, children }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleClick = useCallback(async (e) => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    try {
      await onClick?.(e);
    } finally {
      setTimeout(() => setIsProcessing(false), delay);
    }
  }, [onClick, delay, isProcessing]);

  return (
    <Interactive 
      cursor={isProcessing ? 'wait' : 'pointer'}
      focusStyle="ring"
      onClick={handleClick}
      disabled={isProcessing}
    >
      <Surface 
        background="primary-system01-1-rest"
        foreground="primary-system01-oncolor"
        borderRadius="sm"
        opacity={isProcessing ? 0.7 : 1}
      >
        <Frame padding="md">
          <Text variant="label-1" weight="medium">
            {isProcessing ? '처리 중...' : children}
          </Text>
        </Frame>
      </Surface>
    </Interactive>
  );
};

// 메모이제이션된 상호작용
const MemoizedInteractive = React.memo(({ 
  children, 
  onClick,
  focusStyle = 'ring',
  ...props 
}) => (
  <Interactive 
    cursor="pointer"
    focusStyle={focusStyle}
    onClick={onClick}
    {...props}
  >
    {children}
  </Interactive>
));
```

## 🔍 다음 단계

Interactive 컴포넌트를 이해했다면, 다음 문서들을 학습하세요:

1. **[Sizing 컴포넌트](./06-Sizing.md)** - Interactive 요소의 크기 제어
2. **[Surface 컴포넌트](./04-Surface.md)** - Interactive와 함께 시각적 피드백 제공
3. **[복합 컴포넌트 가이드](../03-system-01/)** - Interactive를 활용한 Button, Link 등

## ❓ 자주 묻는 질문

**Q: onClick과 onPress의 차이점은 무엇인가요?**
A: onClick은 마우스 클릭과 키보드 Enter/Space를 처리하고, onPress는 터치 이벤트도 포함합니다.

**Q: 포커스 스타일을 커스터마이징하고 싶어요.**
A: 3가지 기본 스타일(ring, outline, background) 중 선택하거나, style prop으로 커스터마이징 가능합니다.

**Q: 터치 영역이 44px보다 작아도 되나요?**
A: 접근성 기준상 44×44px가 최소 권장 크기입니다. 더 작게 하려면 특별한 사유가 있어야 합니다.

**Q: disabled 상태에서도 포커스가 가능한가요?**
A: 아니요. disabled={true}인 경우 포커스가 불가능하며 tabIndex={-1}이 자동 설정됩니다.

---

**관련 문서**  
→ [프리미티브 개요](./00-개요.md)  
→ [Surface 컴포넌트](./04-Surface.md)  
→ [접근성 가이드](../05-guides/접근성.md)

**문서 개선 제안**  
Interactive 컴포넌트 관련 질문이나 개선 제안이 있다면 GitHub Issues로 알려주세요. 