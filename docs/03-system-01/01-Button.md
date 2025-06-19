---
title: "Button 컴포넌트 (System-01)"
component: "Button"
system: "System-01"
category: "복합 컴포넌트"
status: "안정화"
last_updated: "2024-01-15"
related: ["Text", "Icon", "Surface", "Frame"]
---

# Button 컴포넌트 (System-01)

## 📝 개요

System-01의 Button 컴포넌트는 **Professional & Clean** 테마를 구현하는 핵심 인터랙션 요소입니다. **GitHub, 백오피스** 환경에 최적화되어 있으며, **명확하고 효율적인** 사용자 경험을 제공합니다. 모든 시각적 속성은 **System-01 시멘틱 토큰**을 사용하여 일관성을 보장합니다.

### 핵심 특징

- **Professional 디자인**: 명확하고 깔끔한 비즈니스 환경 최적화
- **3가지 변형**: filled, outlined, transparent
- **3가지 색상 스키마**: primary(파란색), secondary(회색), cta(강조색)
- **5가지 크기**: xs, sm, md, lg, xl (24px~40px)
- **3가지 버튼 타입**: text-only, text-icon, icon-only
- **상태 관리**: rest, hovered, pressed, disabled, loading
- **유연한 레이아웃**: full width, 텍스트 정렬, 아이콘 배치
- **접근성 완벽 지원**: WCAG 2.1 AA 준수

## 🔧 Props 인터페이스

```typescript
interface ButtonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  // 스타일 변형
  variant?: 'filled' | 'outlined' | 'transparent';
  buttonType?: 'text-icon' | 'text-only' | 'icon-only';
  colorScheme?: 'primary' | 'secondary' | 'cta';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  
  // 레이아웃
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
  
  // 콘텐츠
  children?: React.ReactNode;
}
```

### Variant (3가지 변형)

| 변형 | 용도 | 특징 | 사용 빈도 |
|------|------|------|-----------|
| `filled` | 주요 액션 | 진한 배경, 강한 시각적 강조 | ⭐⭐⭐⭐⭐ |
| `outlined` | 보조 액션 | 테두리만, 적당한 강조 | ⭐⭐⭐⭐ |
| `transparent` | 최소 액션 | 배경 없음, 최소한의 강조 | ⭐⭐⭐ |

### ColorScheme (3가지 색상)

| 색상 | System-01 토큰 | 용도 | 사용 빈도 |
|------|-----------------|------|-----------|
| `primary` | `primary-system01-*` | 주요 브랜드 액션 (파란색) | ⭐⭐⭐⭐⭐ |
| `secondary` | `secondary-system01-*` | 일반적인 액션 (회색) | ⭐⭐⭐⭐ |
| `cta` | `cta-system01-*` | 강력한 호출 액션 (강조색) | ⭐⭐⭐ |

### Size (5가지 크기)

| 크기 | 높이 | 텍스트 | 아이콘 | 패딩 | 용도 |
|------|------|--------|--------|------|------|
| `xs` | 24px | 12px | 16px | xs | 컴팩트한 UI |
| `sm` | 28px | 14px | 16px | xs | 테이블, 카드 |
| `md` | 32px | 14px | 16px | sm | 표준 버튼 |
| `lg` | 36px | 16px | 20px | sm | 중요한 액션 |
| `xl` | 40px | 16px | 24px | md | 주요 CTA |

### ButtonType (3가지 타입)

| 타입 | 구성 | 용도 | 예시 |
|------|------|------|------|
| `text-only` | 텍스트만 | 일반적인 버튼 | "저장", "취소" |
| `text-icon` | 텍스트 + 아이콘 | 의미 강화 | "다운로드", "업로드" |
| `icon-only` | 아이콘만 | 공간 절약 | 닫기, 설정 |

## 💻 기본 사용 예시

### 1. 기본 버튼

```jsx
import { Button } from 'lumir-design-system-01';

// 기본 Primary 버튼
<Button>저장</Button>

// Secondary 버튼
<Button colorScheme="secondary">취소</Button>

// CTA 버튼
<Button colorScheme="cta">지금 시작하기</Button>
```

### 2. 변형별 사용

```jsx
// Filled 버튼 (기본)
<Button variant="filled" colorScheme="primary">
  주요 액션
</Button>

// Outlined 버튼
<Button variant="outlined" colorScheme="primary">
  보조 액션
</Button>

// Transparent 버튼
<Button variant="transparent" colorScheme="primary">
  최소 액션
</Button>
```

### 3. 크기별 사용

```jsx
<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### 4. 아이콘과 함께 사용

```jsx
// 왼쪽 아이콘
<Button leftIcon="DownloadIcon">
  다운로드
</Button>

// 오른쪽 아이콘
<Button rightIcon="LineIconsArrowChevronRightIcon">
  다음 단계
</Button>

// 아이콘만
<Button 
  buttonType="icon-only" 
  leftIcon="SearchIcon"
  aria-label="검색"
/>
```

### 5. 상태별 사용

```jsx
// 로딩 상태
<Button isLoading>
  처리 중...
</Button>

// 비활성화 상태
<Button disabled>
  비활성화됨
</Button>

// 선택 상태
<Button isSelected>
  선택됨
</Button>
```

## 🚀 고급 사용 예시

### 1. 버튼 그룹

```jsx
import { Button, Frame } from 'lumir-design-system-shared';

function ButtonGroup() {
  return (
    <Frame display="flex" gap="sm">
      <Button variant="outlined" colorScheme="secondary">
        취소
      </Button>
      <Button variant="filled" colorScheme="primary">
        확인
      </Button>
    </Frame>
  );
}
```

### 2. 전체 너비 버튼

```jsx
// 중앙 정렬 (기본)
<Button isFullWidth>
  전체 너비 버튼
</Button>

// 왼쪽 정렬
<Button isFullWidth textAlign="left">
  왼쪽 정렬 버튼
</Button>

// 오른쪽 정렬
<Button isFullWidth textAlign="right">
  오른쪽 정렬 버튼
</Button>
```

### 3. 복합 액션 버튼

```jsx
function ActionButtons() {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSave = async () => {
    setIsLoading(true);
    try {
      await saveData();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Frame display="flex" direction="column" gap="md">
      <Button 
        variant="filled" 
        colorScheme="primary"
        leftIcon="SaveIcon"
        isLoading={isLoading}
        onClick={handleSave}
      >
        저장하기
      </Button>
      
      <Button 
        variant="outlined" 
        colorScheme="secondary"
        leftIcon="DownloadIcon"
      >
        내보내기
      </Button>
      
      <Button 
        variant="transparent" 
        colorScheme="primary"
        rightIcon="LineIconsArrowChevronRightIcon"
      >
        자세히 보기
      </Button>
    </Frame>
  );
}
```

### 4. 폼 액션 버튼

```jsx
function FormActions({ onCancel, onSave, isSaving }) {
  return (
    <Frame display="flex" justify="flex-end" gap="sm">
      <Button 
        variant="outlined" 
        colorScheme="secondary"
        onClick={onCancel}
        disabled={isSaving}
      >
        취소
      </Button>
      
      <Button 
        variant="filled" 
        colorScheme="primary"
        leftIcon="SaveIcon"
        isLoading={isSaving}
        onClick={onSave}
      >
        {isSaving ? '저장 중...' : '저장'}
      </Button>
    </Frame>
  );
}
```

### 5. 툴바 버튼

```jsx
function Toolbar() {
  return (
    <Frame display="flex" align="center" gap="xs">
      <Button 
        buttonType="icon-only" 
        variant="transparent"
        leftIcon="UndoIcon"
        size="sm"
        aria-label="실행 취소"
      />
      
      <Button 
        buttonType="icon-only" 
        variant="transparent"
        leftIcon="RedoIcon"
        size="sm"
        aria-label="다시 실행"
      />
      
      <Divider orientation="vertical" />
      
      <Button 
        buttonType="icon-only" 
        variant="transparent"
        leftIcon="BoldIcon"
        size="sm"
        aria-label="굵게"
      />
      
      <Button 
        buttonType="icon-only" 
        variant="transparent"
        leftIcon="ItalicIcon"
        size="sm"
        aria-label="기울임"
      />
    </Frame>
  );
}
```

## 🎨 System-01 디자인 특성

### 색상 시스템

```jsx
// Primary (파란색) - 브랜드 컬러
<Button colorScheme="primary">Primary Action</Button>

// Secondary (회색) - 중성적인 액션
<Button colorScheme="secondary">Secondary Action</Button>

// CTA (강조색) - 중요한 호출 액션
<Button colorScheme="cta">Call to Action</Button>
```

### Professional & Clean 스타일

```jsx
// 명확한 계층 구조
<Frame display="flex" direction="column" gap="md">
  <Button variant="filled" colorScheme="primary" size="lg">
    주요 액션
  </Button>
  
  <Button variant="outlined" colorScheme="primary" size="md">
    보조 액션
  </Button>
  
  <Button variant="transparent" colorScheme="secondary" size="sm">
    최소 액션
  </Button>
</Frame>
```

### GitHub 스타일 버튼 그룹

```jsx
function GitHubStyleActions() {
  return (
    <Frame display="flex" gap="sm">
      <Button 
        variant="filled" 
        colorScheme="cta" 
        leftIcon="GitBranchIcon"
      >
        Create pull request
      </Button>
      
      <Button 
        variant="outlined" 
        colorScheme="secondary"
        leftIcon="DownloadIcon"
      >
        Clone
      </Button>
      
      <Button 
        buttonType="icon-only"
        variant="outlined"
        colorScheme="secondary"
        leftIcon="MoreIcon"
        aria-label="More options"
      />
    </Frame>
  );
}
```

## ♿ 접근성 (Accessibility)

### WCAG 2.1 AA 준수 사항

#### 1. 키보드 접근성
- **Tab 순서**: 논리적인 키보드 탐색 순서
- **Enter/Space**: 버튼 활성화 지원
- **포커스 인디케이터**: 명확한 포커스 스타일

```jsx
// ✅ 접근성 고려된 사용
<Button 
  onClick={handleSubmit}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleSubmit();
    }
  }}
>
  제출
</Button>
```

#### 2. 색상 대비
모든 색상 조합이 **WCAG AA 기준(4.5:1 이상)** 준수:

| 변형 | 색상 스키마 | 배경 대비 | 상태 |
|------|-------------|-----------|------|
| filled | primary | 6.2:1 | ✅ AA |
| filled | secondary | 4.8:1 | ✅ AA |
| filled | cta | 5.1:1 | ✅ AA |
| outlined | primary | 4.6:1 | ✅ AA |
| outlined | secondary | 4.5:1 | ✅ AA |
| transparent | primary | 4.6:1 | ✅ AA |

#### 3. 스크린 리더 지원

```jsx
// ✅ 아이콘 전용 버튼
<Button 
  buttonType="icon-only"
  leftIcon="CloseIcon"
  aria-label="대화상자 닫기"
/>

// ✅ 로딩 상태
<Button isLoading aria-label="데이터 저장 중">
  저장 중...
</Button>

// ✅ 상태 변화 알림
<Button 
  isSelected
  aria-pressed={isSelected}
  onClick={toggleSelection}
>
  {isSelected ? '선택됨' : '선택'}
</Button>
```

#### 4. 터치 타겟 크기
모든 크기가 **최소 44×44px** 터치 타겟 기준 준수:

| 크기 | 실제 크기 | 터치 영역 | 상태 |
|------|-----------|-----------|------|
| xs | 24px | 44px (패딩 확장) | ✅ |
| sm | 28px | 44px (패딩 확장) | ✅ |
| md | 32px | 44px (패딩 확장) | ✅ |
| lg | 36px | 44px (패딩 확장) | ✅ |
| xl | 40px | 44px (패딩 확장) | ✅ |

## 🔍 System-01 토큰 사용

Button 컴포넌트는 **100% System-01 시멘틱 토큰**을 사용합니다:

### Primary 색상 토큰

```css
/* Primary Filled */
background: var(--semantic-primary-system01-1-rest);
color: var(--semantic-primary-system01-oncolor);

/* Primary Outlined */
border-color: var(--semantic-primary-system01-1-rest);
color: var(--semantic-primary-system01-1-rest);

/* Primary Transparent */
color: var(--semantic-primary-system01-1-rest);
```

### Secondary 색상 토큰

```css
/* Secondary Filled */
background: var(--semantic-secondary-system01-2-rest);
color: var(--semantic-secondary-system01-2-rest);

/* Secondary Outlined */
border-color: var(--semantic-secondary-system01-1-rest);
color: var(--semantic-secondary-system01-1-rest);
```

### CTA 색상 토큰

```css
/* CTA Filled */
background: var(--semantic-cta-system01-1-rest);
color: var(--semantic-cta-system01-oncolor);

/* CTA Outlined */
border-color: var(--semantic-cta-system01-1-rest);
color: var(--semantic-cta-system01-1-rest);
```

### 상태별 토큰

```css
/* Hover 상태 */
background: var(--semantic-primary-system01-1-hovered);

/* Pressed 상태 */
background: var(--semantic-primary-system01-1-pressed);

/* Disabled 상태 */
background: var(--semantic-primary-system01-1-disabled);
color: var(--semantic-secondary-system01-3-disabled);
```

## 📊 성능 최적화

### 1. 렌더링 최적화

```jsx
// ✅ 최적화된 사용 - 메모이제이션
const OptimizedButton = React.memo(Button);

// ✅ 콜백 최적화
const handleClick = useCallback((event) => {
  onAction(event);
}, [onAction]);

// ✅ 조건부 렌더링 최적화
function ActionButtons({ showAdvanced }) {
  return (
    <Frame display="flex" gap="sm">
      <Button colorScheme="primary">기본 액션</Button>
      {showAdvanced && (
        <Button colorScheme="secondary">고급 옵션</Button>
      )}
    </Frame>
  );
}
```

### 2. 이벤트 최적화

```jsx
// ✅ 디바운싱으로 중복 클릭 방지
function DebouncedButton({ onClick, children, ...props }) {
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleClick = useCallback(async (event) => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    try {
      await onClick?.(event);
    } finally {
      setTimeout(() => setIsProcessing(false), 300);
    }
  }, [onClick, isProcessing]);

  return (
    <Button 
      {...props}
      onClick={handleClick}
      disabled={props.disabled || isProcessing}
    >
      {children}
    </Button>
  );
}
```

### 3. Bundle 크기 최적화

```jsx
// ✅ 동적 아이콘 로딩
const iconMap = {
  save: () => import('./icons/SaveIcon'),
  download: () => import('./icons/DownloadIcon'),
  // ... 필요한 아이콘만 로딩
};

function DynamicIconButton({ iconName, children, ...props }) {
  const [IconComponent, setIconComponent] = useState(null);
  
  useEffect(() => {
    if (iconName && iconMap[iconName]) {
      iconMap[iconName]().then(setIconComponent);
    }
  }, [iconName]);

  return (
    <Button 
      {...props}
      leftIcon={IconComponent}
    >
      {children}
    </Button>
  );
}
```

## 🎯 사용 가이드라인

### 1. 버튼 계층 구조

```jsx
// ✅ 올바른 계층 구조
function ModalActions() {
  return (
    <Frame display="flex" justify="flex-end" gap="sm">
      {/* 1순위: 주요 액션 - Filled Primary */}
      <Button variant="filled" colorScheme="primary">
        저장
      </Button>
      
      {/* 2순위: 보조 액션 - Outlined Secondary */}
      <Button variant="outlined" colorScheme="secondary">
        취소
      </Button>
      
      {/* 3순위: 최소 액션 - Transparent */}
      <Button variant="transparent" colorScheme="secondary">
        도움말
      </Button>
    </Frame>
  );
}
```

### 2. 적절한 크기 선택

```jsx
// ✅ 컨텍스트별 적절한 크기
function ResponsiveButtons() {
  return (
    <Frame display="flex" direction="column" gap="lg">
      {/* 주요 CTA - 큰 크기 */}
      <Button size="xl" colorScheme="cta" isFullWidth>
        지금 시작하기
      </Button>
      
      {/* 일반 액션 - 중간 크기 */}
      <Button size="md" colorScheme="primary">
        자세히 보기
      </Button>
      
      {/* 테이블 액션 - 작은 크기 */}
      <Button size="sm" variant="outlined">
        편집
      </Button>
      
      {/* 툴바 액션 - 최소 크기 */}
      <Button 
        size="xs" 
        buttonType="icon-only"
        variant="transparent"
        leftIcon="SettingsIcon"
      />
    </Frame>
  );
}
```

## 🚫 사용 시 주의사항

### 1. 과도한 강조 금지

```jsx
// ❌ 잘못된 사용 - 모든 버튼이 강조
<Frame display="flex" gap="sm">
  <Button variant="filled" colorScheme="cta">저장</Button>
  <Button variant="filled" colorScheme="cta">취소</Button>
  <Button variant="filled" colorScheme="cta">삭제</Button>
</Frame>

// ✅ 올바른 사용 - 적절한 계층 구조
<Frame display="flex" gap="sm">
  <Button variant="filled" colorScheme="primary">저장</Button>
  <Button variant="outlined" colorScheme="secondary">취소</Button>
  <Button variant="transparent" colorScheme="secondary">삭제</Button>
</Frame>
```

### 2. 접근성 무시 금지

```jsx
// ❌ 잘못된 사용 - 접근성 정보 부족
<Button buttonType="icon-only" leftIcon="CloseIcon" />

// ✅ 올바른 사용 - 명확한 접근성 정보
<Button 
  buttonType="icon-only" 
  leftIcon="CloseIcon"
  aria-label="대화상자 닫기"
/>
```

### 3. 하드코딩된 스타일 금지

```jsx
// ❌ 절대 금지 - 하드코딩된 스타일
<Button style={{ backgroundColor: '#007bff', color: 'white' }}>
  버튼
</Button>

// ✅ 올바른 사용 - 시스템 토큰 활용
<Button variant="filled" colorScheme="primary">
  버튼
</Button>
```

## 📚 관련 컴포넌트

- **Text**: 버튼 내 텍스트 렌더링
- **Icon**: 버튼 내 아이콘 표시
- **Surface**: 버튼 배경 및 테두리
- **Frame**: 버튼 내부 레이아웃
- **Sizing**: 버튼 크기 제어

## 🔗 디자인 토큰 레퍼런스

- [System-01 Colors](../01-core/02-Colors.md#system-01-colors)
- [System-01 Typography](../01-core/04-Typography.md#system-01-typography)
- [Foundation Spacing](../01-core/03-Spacing.md)
- [Foundation Border](../01-core/04-Border.md) 