---
title: "Icon 컴포넌트"
component: "Icon"
category: "프리미티브"
status: "안정화"
last_updated: "2024-01-15"
related: ["Text", "Frame", "Interactive"]
icon_count: 293
---

# Icon 컴포넌트

## 📝 개요

Icon은 **모든 아이콘 렌더링**을 담당하는 프리미티브 컴포넌트입니다. **293개의 내장 아이콘**을 제공하며, 각 아이콘은 SVG 형태로 최적화되어 있습니다. 색상, 크기, 접근성을 자동으로 관리합니다.

### 핵심 특징

- **293개 내장 아이콘**: 플랫, 라인 스타일의 다양한 아이콘 제공
- **5가지 크기 옵션**: xs, sm, md, lg, xl 
- **자동 색상 관리**: 부모의 색상 컨텍스트를 자동 상속
- **접근성 자동 지원**: aria-label, role 등 자동 설정
- **최적화된 SVG**: 모든 아이콘은 최적화된 SVG로 제공

## 🔧 Props 인터페이스

```typescript
interface IconProps {
  // 필수 Props
  name: IconName; // 293개 아이콘 중 선택
  
  // 스타일 Props
  size?: IconSize | ResponsiveValue<IconSize>;
  color?: string; // CSS 색상값 또는 CSS 변수
  
  // 접근성 Props
  label?: string; // aria-label로 사용
  decorative?: boolean; // 장식용 아이콘 여부 (기본: false)
  
  // HTML Props
  className?: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent) => void;
  [key: string]: any; // 기타 HTML 속성
}
```

### IconSize (5개 타입)

| Size | 픽셀 크기 | 용도 | 사용 빈도 |
|------|-----------|------|-----------|
| `xs` | 12px | 작은 버튼, 인라인 텍스트 | ⭐⭐ |
| `sm` | 16px | 버튼, 입력 필드, 메뉴 | ⭐⭐⭐⭐⭐ |
| `md` | 20px | 일반적인 UI 요소 | ⭐⭐⭐⭐ |
| `lg` | 24px | 큰 버튼, 카드 헤더 | ⭐⭐⭐ |
| `xl` | 32px | 특별한 강조, 빈 상태 | ⭐ |

### IconName (293개 아이콘)

아이콘은 **카테고리별**로 분류되어 있습니다:

#### 📱 기본 UI 아이콘 (사용 빈도 높음)
```typescript
// 가장 자주 사용되는 아이콘들
'checkmark' | 'close' | 'plus' | 'minus' | 'arrow-right' | 'arrow-left' |
'arrow-up' | 'arrow-down' | 'chevron-right' | 'chevron-left' | 'chevron-up' | 
'chevron-down' | 'menu' | 'search' | 'more-horizontal' | 'more-vertical'
```

#### 🗄️ 파일/폴더 아이콘
```typescript
'file' | 'file-add' | 'file-remove' | 'file-text' | 'folder' | 'folder-add' | 
'folder-remove' | 'archive' | 'download' | 'upload' | 'cloud-download' | 
'cloud-upload' | 'attach-1' | 'attach-2'
```

#### 👤 사용자/소셜 아이콘
```typescript
'person' | 'person-add' | 'person-delete' | 'person-done' | 'person-outline' |
'person-remove' | 'people' | 'facebook' | 'google' | 'linkedin' | 'twitter' | 
'youtube'
```

#### 🛠️ 기능 아이콘
```typescript
'settings-1' | 'settings-2' | 'edit-1' | 'edit-2' | 'trash-1' | 'trash-2' |
'copy' | 'cut' | 'paste' | 'undo' | 'redo' | 'refresh' | 'sync' | 'share'
```

#### 📊 데이터/차트 아이콘
```typescript
'bar-chart-1' | 'bar-chart-2' | 'pie-chart' | 'line-chart' | 'activity' |
'trending-up' | 'trending-down' | 'analytics' | 'graph'
```

#### 🎯 상태 아이콘
```typescript
'alert-circle' | 'alert-triangle' | 'info' | 'help' | 'warning' | 'error' |
'success' | 'loading' | 'shield-on' | 'shield-off' | 'lock' | 'unlock'
```

#### 📱 미디어/통신 아이콘
```typescript
'phone-call' | 'phone-missed' | 'phone-off' | 'phone-ringing' | 'message-circle' |
'message-square' | 'mail' | 'bell-on' | 'bell-off' | 'volume-on' | 'volume-off' |
'volume-down' | 'volume-up' | 'mic-on' | 'mic-off' | 'video-on' | 'video-off'
```

#### 🎮 미디어 컨트롤 아이콘
```typescript
'play' | 'pause' | 'stop' | 'skip-back' | 'skip-forward' | 'rewind-left' |
'rewind-right' | 'shuffle-1' | 'shuffle-2' | 'repeat' | 'volume'
```

#### 🛒 상거래 아이콘
```typescript
'shopping-bag' | 'shopping-cart' | 'cart-add' | 'credit-card' | 'dollar-sign' |
'tag' | 'gift' | 'package' | 'truck'
```

#### 🌍 위치/네비게이션 아이콘
```typescript
'map' | 'map-pin' | 'navigation-1' | 'navigation-2' | 'compass' | 'globe-1' |
'globe-2' | 'location' | 'route'
```

#### ⭐ 평가/즐겨찾기 아이콘
```typescript
'star-filled' | 'star-outlined' | 'heart-filled' | 'heart-outlined' |
'thumbs-up' | 'thumbs-down' | 'bookmark' | 'flag'
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

### 1. 일반적인 아이콘 사용

```jsx
// 기본 아이콘
<Icon name="checkmark" size="sm" />

// 큰 아이콘
<Icon name="settings-1" size="lg" />

// 장식용 아이콘 (접근성에서 제외)
<Icon name="star-filled" size="md" decorative />

// 의미가 있는 아이콘 (접근성 라벨 포함)
<Icon name="alert-circle" size="sm" label="경고" />
```

### 2. 색상 지정

```jsx
// Foundation 토큰 색상 사용
<Icon 
  name="checkmark" 
  size="sm" 
  color="var(--foundation-foundation-color-success-light-60)" 
/>

// 시스템 색상 사용
<Icon 
  name="error" 
  size="md" 
  color="var(--semantic-error-system01-oncolor)" 
/>

// CSS 색상 직접 지정 (권장하지 않음)
<Icon name="heart-filled" size="lg" color="#ff4757" />
```

### 3. 반응형 아이콘

```jsx
// 디바이스별 다른 크기
<Icon 
  name="menu" 
  size={{
    mobile: 'sm',
    tablet: 'md',
    desktop: 'md'
  }}
/>

// 큰 화면에서만 표시되는 아이콘
<Icon 
  name="search" 
  size={{
    mobile: 'xs',
    desktop: 'sm'
  }}
/>
```

### 4. 클릭 가능한 아이콘

```jsx
// 클릭 이벤트가 있는 아이콘
<Icon 
  name="close" 
  size="sm" 
  onClick={() => console.log('닫기 클릭')}
  label="닫기"
  style={{ cursor: 'pointer' }}
/>

// Interactive와 조합한 버튼형 아이콘
<Interactive cursor="pointer" focusStyle="ring">
  <Icon name="settings-1" size="md" label="설정" />
</Interactive>
```

## 🎨 시스템별 사용 패턴

### System-01 (Professional & Clean) 패턴

```jsx
// System-01: 기능적이고 명확한 아이콘 사용
const System01IconPattern = () => (
  <Frame display="flex" align="center" gap="sm">
    {/* 명확한 기능 아이콘 */}
    <Icon name="settings-1" size="sm" />
    <Icon name="edit-1" size="sm" />
    <Icon name="trash-1" size="sm" />
    
    {/* 작고 절제된 크기 선호 */}
    <Icon name="checkmark" size="xs" />
    <Icon name="close" size="xs" />
  </Frame>
);
```

### System-02 (Friendly & Bright) 패턴

```jsx
// System-02: 친근하고 표현적인 아이콘 사용
const System02IconPattern = () => (
  <Frame display="flex" align="center" gap="md">
    {/* 친근한 느낌의 아이콘 */}
    <Icon name="heart-filled" size="md" />
    <Icon name="star-filled" size="md" />
    <Icon name="thumbs-up" size="md" />
    
    {/* 좀 더 큰 크기 선호 */}
    <Icon name="checkmark-circle" size="lg" />
    <Icon name="gift" size="lg" />
  </Frame>
);
```

## 📏 실전 조합 패턴

### 1. 아이콘 + 텍스트 조합

```jsx
// 기본 아이콘 + 텍스트 패턴
<Frame display="flex" align="center" gap="xs">
  <Icon name="checkmark" size="sm" />
  <Text variant="body-2">완료됨</Text>
</Frame>

// 버튼 스타일 아이콘 + 텍스트
<Interactive cursor="pointer" focusStyle="ring">
  <Surface background="primary-system01-1-rest" borderRadius="sm">
    <Frame padding="sm" display="flex" align="center" gap="xs">
      <Icon name="plus" size="sm" />
      <Text variant="label-1" weight="medium">
        새로 만들기
      </Text>
    </Frame>
  </Surface>
</Interactive>

// 메뉴 아이템 패턴
<Frame display="flex" align="center" gap="sm">
  <Icon name="settings-1" size="sm" />
  <Text variant="body-2">설정</Text>
  <Frame flex="1" />
  <Icon name="chevron-right" size="xs" />
</Frame>
```

### 2. 아이콘 버튼 패턴

```jsx
// 기본 아이콘 버튼
const IconButton = ({ icon, label, onClick, variant = 'secondary' }) => (
  <Interactive cursor="pointer" focusStyle="ring">
    <Surface 
      background={`${variant}-system01-1-rest`}
      borderRadius="sm"
      padding="xs"
    >
      <Icon name={icon} size="sm" label={label} onClick={onClick} />
    </Surface>
  </Interactive>
);

// 사용 예시
<Frame display="flex" gap="xs">
  <IconButton icon="edit-1" label="편집" />
  <IconButton icon="copy" label="복사" />
  <IconButton icon="trash-1" label="삭제" variant="error" />
</Frame>

// 라운드 아이콘 버튼
const RoundIconButton = ({ icon, label, size = 'md' }) => (
  <Interactive cursor="pointer" focusStyle="ring">
    <Surface 
      background="primary-system01-1-rest"
      borderRadius="full"
      padding="sm"
    >
      <Icon name={icon} size={size} label={label} />
    </Surface>
  </Interactive>
);
```

### 3. 상태 표시 아이콘 패턴

```jsx
// 상태별 아이콘 표시 시스템
const StatusIcon = ({ status, message }) => {
  const getStatusConfig = (status) => {
    switch (status) {
      case 'success':
        return {
          icon: 'checkmark-circle',
          color: 'var(--semantic-success-system01-oncolor)',
          background: 'success-system01-2-rest'
        };
      case 'error':
        return {
          icon: 'alert-circle',
          color: 'var(--semantic-error-system01-oncolor)',
          background: 'error-system01-2-rest'
        };
      case 'warning':
        return {
          icon: 'alert-triangle',
          color: 'var(--semantic-warning-system01-oncolor)',
          background: 'warning-system01-2-rest'
        };
      case 'info':
        return {
          icon: 'info',
          color: 'var(--semantic-info-system01-oncolor)',
          background: 'info-system01-2-rest'
        };
      default:
        return {
          icon: 'info',
          color: 'var(--semantic-secondary-system01-oncolor)',
          background: 'secondary-system01-2-rest'
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <Surface background={config.background} borderRadius="sm">
      <Frame padding="sm" display="flex" align="center" gap="xs">
        <Icon 
          name={config.icon} 
          size="sm" 
          color={config.color}
          label={status}
        />
        <Text variant="body-2" weight="medium">
          {message}
        </Text>
      </Frame>
    </Surface>
  );
};

// 사용 예시
<Frame display="flex" direction="column" gap="sm">
  <StatusIcon status="success" message="성공적으로 저장되었습니다" />
  <StatusIcon status="error" message="저장 중 오류가 발생했습니다" />
  <StatusIcon status="warning" message="주의가 필요합니다" />
  <StatusIcon status="info" message="추가 정보입니다" />
</Frame>
```

### 4. 네비게이션 아이콘 패턴

```jsx
// 탭 네비게이션 패턴
const NavTab = ({ icon, label, active, onClick }) => (
  <Interactive cursor="pointer" focusStyle="ring">
    <Surface 
      background={active ? 'primary-system01-1-rest' : 'transparent'}
      borderRadius="sm"
    >
      <Frame 
        padding="sm" 
        display="flex" 
        direction="column" 
        align="center" 
        gap="xxs"
      >
        <Icon 
          name={icon} 
          size="md" 
          color={active ? 'var(--semantic-primary-system01-oncolor)' : undefined}
        />
        <Text 
          variant="caption-1" 
          weight={active ? 'medium' : 'regular'}
        >
          {label}
        </Text>
      </Frame>
    </Surface>
  </Interactive>
);

// 사용 예시
<Frame display="flex" gap="xs">
  <NavTab icon="home" label="홈" active />
  <NavTab icon="search" label="검색" />
  <NavTab icon="person" label="프로필" />
  <NavTab icon="settings-1" label="설정" />
</Frame>

// 브레드크럼 네비게이션 패턴
const Breadcrumb = ({ items }) => (
  <Frame display="flex" align="center" gap="xs">
    {items.map((item, index) => (
      <React.Fragment key={item.id}>
        {index > 0 && (
          <Icon name="chevron-right" size="xs" decorative />
        )}
        <Interactive cursor="pointer" focusStyle="ring">
          <Frame display="flex" align="center" gap="xs">
            {item.icon && <Icon name={item.icon} size="xs" />}
            <Text variant="body-2" weight={index === items.length - 1 ? 'medium' : 'regular'}>
              {item.label}
            </Text>
          </Frame>
        </Interactive>
      </React.Fragment>
    ))}
  </Frame>
);
```

### 5. 데이터 시각화 아이콘 패턴

```jsx
// 메트릭 카드에 사용되는 아이콘 패턴
const MetricCard = ({ title, value, trend, icon }) => (
  <Surface 
    background="secondary-system01-1-rest"
    borderRadius="md"
    boxShadow="10"
  >
    <Frame padding="lg" display="flex" direction="column" gap="sm">
      {/* 헤더: 아이콘 + 제목 */}
      <Frame display="flex" align="center" gap="xs">
        <Icon name={icon} size="sm" />
        <Text variant="caption-1" weight="medium">
          {title}
        </Text>
      </Frame>
      
      {/* 값 */}
      <Text variant="title-2" weight="bold">
        {value}
      </Text>
      
      {/* 트렌드 */}
      <Frame display="flex" align="center" gap="xs">
        <Icon 
          name={trend > 0 ? 'trending-up' : 'trending-down'} 
          size="xs"
          color={trend > 0 ? 'var(--semantic-success-system01-oncolor)' : 'var(--semantic-error-system01-oncolor)'}
        />
        <Text variant="caption-1">
          {Math.abs(trend)}%
        </Text>
      </Frame>
    </Frame>
  </Surface>
);

// 사용 예시
<Frame display="flex" gap="md">
  <MetricCard 
    title="총 방문자"
    value="12,345"
    trend={12}
    icon="activity"
  />
  <MetricCard 
    title="매출"
    value="₩1,234,567"
    trend={-5}
    icon="dollar-sign"
  />
</Frame>
```

## 📱 반응형 아이콘 패턴

### 1. 반응형 네비게이션

```jsx
// 모바일에서는 아이콘만, 데스크톱에서는 아이콘+텍스트
const ResponsiveNavItem = ({ icon, label, active }) => (
  <Interactive cursor="pointer" focusStyle="ring">
    <Surface 
      background={active ? 'primary-system01-1-rest' : 'transparent'}
      borderRadius="sm"
    >
      <Frame 
        padding="sm"
        display="flex"
        direction={{ mobile: 'column', desktop: 'row' }}
        align="center"
        gap="xs"
      >
        <Icon 
          name={icon} 
          size={{ mobile: 'md', desktop: 'sm' }}
        />
        <Text 
          variant={{ mobile: 'caption-1', desktop: 'body-2' }}
          style={{ 
            display: 'block' // 모바일에서도 텍스트 표시
          }}
        >
          {label}
        </Text>
      </Frame>
    </Surface>
  </Interactive>
);
```

### 2. 반응형 액션 버튼

```jsx
// 모바일에서는 플로팅 버튼, 데스크톱에서는 일반 버튼
const ResponsiveActionButton = ({ icon, label, onClick }) => (
  <Sizing
    position={{ mobile: 'fixed', desktop: 'static' }}
    bottom={{ mobile: '20px' }}
    right={{ mobile: '20px' }}
  >
    <Interactive cursor="pointer" focusStyle="ring">
      <Surface
        background="primary-system01-1-rest"
        borderRadius={{ mobile: 'full', desktop: 'sm' }}
        boxShadow={{ mobile: '30', desktop: '10' }}
      >
        <Frame
          padding={{ mobile: 'md', desktop: 'sm' }}
          display="flex"
          align="center"
          gap="xs"
        >
          <Icon name={icon} size="sm" />
          <Text 
            variant="label-1" 
            weight="medium"
            style={{
              display: { mobile: 'none', desktop: 'block' }
            }}
          >
            {label}
          </Text>
        </Frame>
      </Surface>
    </Interactive>
  </Sizing>
);
```

## ♿ 접근성 고려사항

### 1. 의미있는 아이콘 vs 장식용 아이콘

```jsx
// ✅ 의미있는 아이콘 - 라벨 필수
<Icon name="alert-circle" size="sm" label="경고: 입력값을 확인하세요" />
<Icon name="close" size="sm" label="닫기" onClick={handleClose} />

// ✅ 장식용 아이콘 - decorative prop 사용
<Frame display="flex" align="center" gap="xs">
  <Icon name="star-filled" size="xs" decorative />
  <Text variant="body-2">5점 만점</Text>
</Frame>

// ❌ 잘못된 사용 - 의미있는 아이콘인데 라벨 없음
<Icon name="error" size="sm" />  {/* 스크린 리더가 의미를 알 수 없음 */}
```

### 2. 충분한 터치 영역

```jsx
// ✅ 충분한 터치 영역을 가진 아이콘 버튼
<Interactive cursor="pointer" focusStyle="ring">
  <Surface 
    borderRadius="sm"
    minHeight="44px"  // 최소 터치 영역
    minWidth="44px"
  >
    <Frame padding="sm" display="flex" align="center" justify="center">
      <Icon name="settings-1" size="sm" label="설정" />
    </Frame>
  </Surface>
</Interactive>

// ❌ 터치 영역이 부족한 아이콘
<Icon name="close" size="xs" onClick={handleClose} />  {/* 터치하기 어려움 */}
```

### 3. 색상에만 의존하지 않는 정보 전달

```jsx
// ✅ 색상 + 아이콘 모양으로 정보 전달
<Frame display="flex" align="center" gap="xs">
  <Icon 
    name="checkmark-circle" 
    size="sm" 
    color="var(--semantic-success-system01-oncolor)"
    label="성공"
  />
  <Text variant="body-2">작업이 완료되었습니다</Text>
</Frame>

// ❌ 색상에만 의존하는 정보 전달
<Icon 
  name="circle" 
  size="sm" 
  color="green"  // 색상만으로 성공을 표현
  label="상태"
/>
```

## 🎯 성능 최적화

### 1. 아이콘 최적화

```jsx
// ✅ 자주 사용되는 아이콘은 미리 로드
const COMMON_ICONS = [
  'checkmark', 'close', 'plus', 'minus', 
  'arrow-right', 'arrow-left', 'chevron-right', 'chevron-left'
];

// ✅ 조건부 렌더링으로 불필요한 아이콘 방지
{showIcon && <Icon name="settings-1" size="sm" />}

// ✅ 메모이제이션 활용
const MemoizedIcon = React.memo(Icon);
```

### 2. 아이콘 스프라이트 최적화

```jsx
// SVG 스프라이트 방식 자동 적용
// 개발자는 신경 쓸 필요 없음 - 내부적으로 최적화됨
<Icon name="checkmark" size="sm" />  // 자동으로 스프라이트에서 로드
```

## 🔍 자주 사용되는 패턴 모음

### 1. 폼 관련 아이콘

```jsx
// 입력 필드 상태 아이콘
const InputWithIcon = ({ value, error, success }) => (
  <Frame display="flex" align="center" gap="xs">
    <Frame flex="1">
      {/* 입력 필드 위치 */}
    </Frame>
    {error && <Icon name="alert-circle" size="sm" color="var(--semantic-error-system01-oncolor)" />}
    {success && <Icon name="checkmark-circle" size="sm" color="var(--semantic-success-system01-oncolor)" />}
  </Frame>
);

// 검색 입력 필드
const SearchInput = () => (
  <Frame display="flex" align="center" gap="xs">
    <Icon name="search" size="sm" />
    {/* 검색 입력 필드 */}
  </Frame>
);
```

### 2. 목록/테이블 아이콘

```jsx
// 테이블 액션 아이콘
const TableActions = ({ onEdit, onDelete, onView }) => (
  <Frame display="flex" gap="xs">
    <IconButton icon="eye" label="보기" onClick={onView} />
    <IconButton icon="edit-1" label="편집" onClick={onEdit} />
    <IconButton icon="trash-1" label="삭제" onClick={onDelete} variant="error" />
  </Frame>
);

// 정렬 아이콘
const SortableHeader = ({ label, sortOrder, onSort }) => (
  <Interactive cursor="pointer" onClick={onSort}>
    <Frame display="flex" align="center" gap="xs">
      <Text variant="label-1" weight="medium">{label}</Text>
      <Icon 
        name={sortOrder === 'asc' ? 'chevron-up' : 'chevron-down'} 
        size="xs"
        decorative
      />
    </Frame>
  </Interactive>
);
```

### 3. 빈 상태 아이콘

```jsx
// 빈 상태 표시
const EmptyState = ({ icon, title, description, action }) => (
  <Frame 
    display="flex" 
    direction="column" 
    align="center" 
    gap="md"
    padding="xl"
  >
    <Icon name={icon} size="xl" />
    <Frame display="flex" direction="column" align="center" gap="xs">
      <Text variant="heading-2" weight="bold">{title}</Text>
      <Text variant="body-2" textAlign="center">{description}</Text>
    </Frame>
    {action}
  </Frame>
);

// 사용 예시
<EmptyState
  icon="folder"
  title="폴더가 비어있습니다"
  description="새 파일을 추가하여 시작하세요"
  action={
    <Interactive cursor="pointer">
      <Surface background="primary-system01-1-rest" borderRadius="sm">
        <Frame padding="sm" display="flex" align="center" gap="xs">
          <Icon name="plus" size="sm" />
          <Text variant="label-1" weight="medium">파일 추가</Text>
        </Frame>
      </Surface>
    </Interactive>
  }
/>
```

## 🔍 다음 단계

Icon 컴포넌트를 이해했다면, 다음 문서들을 학습하세요:

1. **[Frame 컴포넌트](./03-Frame.md)** - Icon과 함께 레이아웃을 구성하는 핵심 컴포넌트
2. **[Interactive 컴포넌트](./05-Interactive.md)** - 클릭 가능한 아이콘 버튼 구현
3. **[Text 컴포넌트](./01-Text.md)** - 아이콘과 텍스트 조합 패턴

## ❓ 자주 묻는 질문

**Q: 293개 아이콘 중에서 원하는 아이콘을 어떻게 찾나요?**
A: Storybook의 Icon 스토리에서 모든 아이콘을 카테고리별로 볼 수 있습니다. 또는 VS Code에서 자동완성을 활용하세요.

**Q: 커스텀 아이콘을 추가하고 싶은데 어떻게 하나요?**
A: `/packages/shared/icons/` 폴더에 SVG 파일을 추가하고, 빌드 스크립트를 실행하면 자동으로 컴포넌트에 포함됩니다.

**Q: 아이콘 색상이 자동으로 변경되지 않아요.**
A: Surface 컴포넌트로 감싸서 foreground 색상을 설정하거나, color prop을 직접 지정하세요.

**Q: 아이콘이 버튼처럼 작동하게 하려면?**
A: Interactive 컴포넌트로 감싸거나, onClick 이벤트와 cursor: 'pointer' 스타일을 추가하세요.

---

**관련 문서**  
→ [프리미티브 개요](./00-개요.md)  
→ [Text 컴포넌트](./01-Text.md)  
→ [Interactive 컴포넌트](./05-Interactive.md)

**문서 개선 제안**  
Icon 컴포넌트 관련 질문이나 개선 제안이 있다면 GitHub Issues로 알려주세요. 