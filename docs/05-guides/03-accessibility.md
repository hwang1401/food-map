---
title: 'Accessibility Guide'
description: 'Lumir 디자인 시스템 접근성 가이드라인'
date: '2024-12-28'
category: 'Guides'
tags: ['Accessibility', 'WCAG', 'A11y', 'Inclusive Design']
version: '1.0.0'
status: 'stable'
---

# Accessibility Guide

Lumir 디자인 시스템은 WCAG 2.1 AA 기준을 준수하여 모든 사용자가 접근 가능한 인터페이스를 제공합니다.

## 🎯 접근성 목표

### 핵심 원칙 (POUR)

1. **Perceivable (인지 가능)**: 모든 사용자가 정보를 인지할 수 있어야 함
2. **Operable (조작 가능)**: 모든 사용자가 인터페이스를 조작할 수 있어야 함
3. **Understandable (이해 가능)**: 정보와 UI 조작이 이해 가능해야 함
4. **Robust (견고함)**: 다양한 보조 기술과 호환되어야 함

### 준수 기준

- **WCAG 2.1 AA**: 최소 준수 기준
- **WCAG 2.1 AAA**: 권장 목표 (가능한 경우)
- **Lighthouse Accessibility**: 95점 이상
- **axe-core**: 모든 자동 검사 통과

## 🎨 색상 접근성

### 색상 대비 기준

```typescript
// WCAG 2.1 AA 기준
const contrastRequirements = {
  normalText: 4.5, // 일반 텍스트 (18px 미만)
  largeText: 3.0,  // 대형 텍스트 (18px 이상 또는 14px Bold)
  uiComponents: 3.0, // UI 컴포넌트 및 그래픽 요소
  focusIndicator: 3.0 // 포커스 인디케이터
};

// WCAG 2.1 AAA 기준 (권장)
const contrastAAA = {
  normalText: 7.0,
  largeText: 4.5
};
```

### Foundation 토큰 색상 대비 검증

```css
/* ✅ WCAG AA 통과 조합 */
.accessible-text {
  /* 8.38:1 (AAA 등급) */
  color: var(--foundation-foundation-color-grey-dark-80);
  background-color: var(--foundation-foundation-color-grey-light-0);
}

.accessible-button {
  /* 4.51:1 (AA 등급) */
  color: var(--foundation-foundation-color-grey-light-0);
  background-color: var(--foundation-foundation-color-blue-dark-50);
}

/* ❌ WCAG 기준 미달 */
.poor-contrast {
  /* 2.92:1 (기준 미달) */
  color: var(--foundation-foundation-color-grey-light-60);
  background-color: var(--foundation-foundation-color-grey-light-0);
}
```

### 색상에 의존하지 않는 정보 전달

```tsx
// ✅ 올바른 방법: 색상 + 아이콘 + 텍스트
function StatusMessage({ type, message }) {
  const statusConfig = {
    success: {
      color: 'var(--foundation-foundation-color-green-dark-50)',
      icon: 'CheckCircleIcon',
      label: '성공'
    },
    error: {
      color: 'var(--foundation-foundation-color-red-dark-50)',
      icon: 'XCircleIcon',
      label: '오류'
    },
    warning: {
      color: 'var(--foundation-foundation-color-yellow-dark-50)',
      icon: 'ExclamationTriangleIcon',
      label: '경고'
    }
  };

  const config = statusConfig[type];

  return (
    <div 
      style={{ 
        color: config.color,
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--foundation-foundation-spacing-sm)'
      }}
      role="alert"
      aria-label={`${config.label}: ${message}`}
    >
      <Icon name={config.icon} />
      <span>{config.label}: {message}</span>
    </div>
  );
}

// ❌ 잘못된 방법: 색상에만 의존
function BadStatusMessage({ type, message }) {
  const colors = {
    success: 'green',
    error: 'red',
    warning: 'orange'
  };

  return (
    <div style={{ color: colors[type] }}>
      {message} {/* 색상만으로 상태를 표현 */}
    </div>
  );
}
```

## ⌨️ 키보드 접근성

### 포커스 관리

```css
/* 포커스 스타일 기본 템플릿 */
.focusable-element {
  outline: none; /* 기본 outline 제거 */
}

.focusable-element:focus {
  outline: 2px solid var(--foundation-foundation-color-blue-light-40);
  outline-offset: 2px;
  border-radius: var(--foundation-foundation-border-radius-sm);
}

/* 마우스 클릭 시에만 포커스 스타일 제거 */
.focusable-element:focus:not(:focus-visible) {
  outline: none;
}

/* 고대비 모드 지원 */
@media (prefers-contrast: high) {
  .focusable-element:focus {
    outline: 3px solid;
    outline-offset: 2px;
  }
}
```

### 키보드 내비게이션 패턴

```tsx
// Tab 컴포넌트 키보드 내비게이션
function AccessibleTabs({ tabs, selectedIndex, onTabChange }) {
  const tabRefs = useRef([]);
  const [focusedIndex, setFocusedIndex] = useState(selectedIndex);

  const handleKeyDown = (event, index) => {
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        const nextIndex = (index + 1) % tabs.length;
        setFocusedIndex(nextIndex);
        tabRefs.current[nextIndex]?.focus();
        break;
        
      case 'ArrowLeft':
        event.preventDefault();
        const prevIndex = (index - 1 + tabs.length) % tabs.length;
        setFocusedIndex(prevIndex);
        tabRefs.current[prevIndex]?.focus();
        break;
        
      case 'Home':
        event.preventDefault();
        setFocusedIndex(0);
        tabRefs.current[0]?.focus();
        break;
        
      case 'End':
        event.preventDefault();
        const lastIndex = tabs.length - 1;
        setFocusedIndex(lastIndex);
        tabRefs.current[lastIndex]?.focus();
        break;
        
      case 'Enter':
      case ' ':
        event.preventDefault();
        onTabChange(index);
        break;
    }
  };

  return (
    <div role="tablist" aria-label="메인 탭">
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          ref={el => tabRefs.current[index] = el}
          role="tab"
          aria-selected={selectedIndex === index}
          aria-controls={`panel-${tab.id}`}
          tabIndex={selectedIndex === index ? 0 : -1}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onClick={() => onTabChange(index)}
          className="tab-button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
```

### 터치 타겟 크기

```css
/* 최소 터치 타겟 크기 */
.touch-target {
  min-height: var(--foundation-foundation-spacing-touch-target); /* 44px */
  min-width: var(--foundation-foundation-spacing-touch-target); /* 44px */
  
  /* 마우스 전용 환경에서는 더 작은 크기 허용 */
  @media (pointer: fine) {
    min-height: 24px;
    min-width: 24px;
  }
}

/* 인접한 터치 타겟 간격 */
.touch-target-group {
  display: flex;
  gap: var(--foundation-foundation-spacing-sm); /* 8px 최소 간격 */
}
```

## 🔊 스크린 리더 지원

### 시맨틱 HTML 사용

```tsx
// ✅ 올바른 시맨틱 구조
function AccessibleForm() {
  return (
    <form>
      <fieldset>
        <legend>사용자 정보</legend>
        
        <div>
          <label htmlFor="name">이름 *</label>
          <input
            id="name"
            type="text"
            required
            aria-describedby="name-help"
          />
          <div id="name-help">실명을 입력해주세요</div>
        </div>
        
        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            aria-describedby="email-error"
            aria-invalid={hasError}
          />
          {hasError && (
            <div id="email-error" role="alert">
              유효한 이메일 주소를 입력해주세요
            </div>
          )}
        </div>
      </fieldset>
      
      <button type="submit">제출</button>
    </form>
  );
}

// ❌ 잘못된 구조
function BadForm() {
  return (
    <div>
      <div>이름</div>
      <div><input /></div>
      <div onClick={submit}>제출</div> {/* button 대신 div 사용 */}
    </div>
  );
}
```

### ARIA 레이블과 설명

```tsx
// 복합 컴포넌트 ARIA 설정
function AccessibleComboBox({ 
  label, 
  options, 
  value, 
  onChange, 
  placeholder 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const comboboxId = useId();
  const listboxId = useId();

  return (
    <div>
      <label id={`${comboboxId}-label`} htmlFor={comboboxId}>
        {label}
      </label>
      
      <input
        id={comboboxId}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={`${comboboxId}-label`}
        aria-controls={isOpen ? listboxId : undefined}
        aria-activedescendant={
          highlightedIndex >= 0 
            ? `${listboxId}-option-${highlightedIndex}` 
            : undefined
        }
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setIsOpen(true)}
      />
      
      {isOpen && (
        <ul
          id={listboxId}
          role="listbox"
          aria-labelledby={`${comboboxId}-label`}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`${listboxId}-option-${index}`}
              role="option"
              aria-selected={value === option.value}
              className={highlightedIndex === index ? 'highlighted' : ''}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### 라이브 리전 (Live Regions)

```tsx
// 동적 콘텐츠 알림
function LiveRegionExample() {
  const [status, setStatus] = useState('');
  const [announcements, setAnnouncements] = useState([]);

  const announceMessage = (message, priority = 'polite') => {
    setAnnouncements(prev => [...prev, { message, priority, id: Date.now() }]);
    
    // 3초 후 자동 제거
    setTimeout(() => {
      setAnnouncements(prev => prev.filter(a => a.id !== Date.now()));
    }, 3000);
  };

  return (
    <div>
      {/* 상태 업데이트 */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {status}
      </div>
      
      {/* 긴급 알림 */}
      <div
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
      >
        {announcements
          .filter(a => a.priority === 'assertive')
          .map(a => a.message)
          .join(' ')
        }
      </div>
      
      <button 
        onClick={() => {
          setStatus('데이터를 저장하고 있습니다...');
          announceMessage('저장이 완료되었습니다', 'polite');
        }}
      >
        저장
      </button>
    </div>
  );
}

/* 스크린 리더 전용 텍스트 */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

## 🎭 모션과 애니메이션 접근성

### 움직임 감소 설정 존중

```css
/* 기본 애니메이션 */
.animated-element {
  transition: all 0.3s ease;
  transform: translateY(0);
}

.animated-element:hover {
  transform: translateY(-4px);
}

/* 움직임 감소 설정 시 애니메이션 비활성화 */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    transition: none;
    transform: none;
  }
  
  .animated-element:hover {
    transform: none;
  }
}

/* 대안적 피드백 제공 */
@media (prefers-reduced-motion: reduce) {
  .animated-element:hover {
    background-color: var(--foundation-foundation-color-blue-light-10);
    border-color: var(--foundation-foundation-color-blue-light-40);
  }
}
```

### 자동 재생 콘텐츠 제어

```tsx
// 자동 슬라이드 제어
function AccessibleCarousel({ slides }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  // 사용자가 움직임 감소를 선호하면 자동 재생 비활성화
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  useEffect(() => {
    if (isPlaying && !prefersReducedMotion) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 5000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, prefersReducedMotion, slides.length]);

  return (
    <div 
      role="region" 
      aria-label="이미지 슬라이드"
      aria-live="polite"
    >
      <div className="carousel-controls">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? '자동 재생 정지' : '자동 재생 시작'}
          disabled={prefersReducedMotion}
        >
          {isPlaying ? '정지' : '재생'}
        </button>
        
        <span aria-live="polite">
          {slides.length}개 중 {currentSlide + 1}번째 슬라이드
        </span>
      </div>
      
      <div className="carousel-content">
        {slides[currentSlide]}
      </div>
      
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`${index + 1}번째 슬라이드로 이동`}
            aria-current={currentSlide === index ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
}
```

## 🧪 접근성 테스트

### 자동화된 테스트

```typescript
// Jest + @testing-library/jest-dom
import { render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';

expect.extend(toHaveNoViolations);

describe('Button 접근성 테스트', () => {
  test('axe 검사 통과', async () => {
    const { container } = render(
      <Button variant="filled" color="primary">
        클릭하세요
      </Button>
    );
    
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('키보드 내비게이션', async () => {
    const user = userEvent.setup();
    const handleClick = jest.fn();
    
    render(
      <Button onClick={handleClick}>
        클릭하세요
      </Button>
    );
    
    const button = screen.getByRole('button', { name: '클릭하세요' });
    
    // Tab으로 포커스
    await user.tab();
    expect(button).toHaveFocus();
    
    // Enter로 클릭
    await user.keyboard('{Enter}');
    expect(handleClick).toHaveBeenCalled();
    
    // Space로 클릭
    await user.keyboard(' ');
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

  test('스크린 리더 레이블', () => {
    render(
      <Button aria-label="메뉴 열기" variant="outlined">
        <Icon name="MenuIcon" />
      </Button>
    );
    
    expect(screen.getByLabelText('메뉴 열기')).toBeInTheDocument();
  });
});
```

### 수동 테스트 체크리스트

```typescript
// 접근성 수동 테스트 가이드
const manualTestChecklist = {
  keyboard: [
    'Tab 키로 모든 인터랙티브 요소에 접근 가능',
    'Shift+Tab으로 역순 내비게이션 가능',
    'Enter/Space로 버튼 활성화 가능',
    '화살표 키로 그룹 내 내비게이션 가능 (해당시)',
    'Esc로 모달/드롭다운 닫기 가능',
    '포커스가 논리적 순서로 이동',
    '포커스 트랩이 올바르게 작동 (모달 등)'
  ],
  
  screenReader: [
    '모든 이미지에 적절한 alt 텍스트',
    '폼 요소에 명확한 레이블',
    '오류 메시지가 스크린 리더에 전달됨',
    '동적 콘텐츠 변경이 알림됨',
    '랜드마크와 헤딩 구조가 논리적',
    '링크와 버튼의 목적이 명확'
  ],
  
  visual: [
    '색상 대비가 WCAG AA 기준 충족',
    '포커스 인디케이터가 명확히 보임',
    '텍스트 크기를 200%까지 확대 가능',
    '색상에만 의존하지 않는 정보 전달',
    '고대비 모드에서 올바르게 표시'
  ],
  
  motor: [
    '터치 타겟이 최소 44x44px',
    '인접한 타겟 간 충분한 간격',
    '드래그 앤 드롭의 대안 제공',
    '시간 제한이 있는 경우 연장 옵션',
    '실수로 인한 작업 취소 가능'
  ]
};
```

## 🔧 접근성 도구 설정

### ESLint 플러그인

```json
// .eslintrc.json
{
  "extends": [
    "plugin:jsx-a11y/recommended"
  ],
  "plugins": ["jsx-a11y"],
  "rules": {
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",
    "jsx-a11y/tabindex-no-positive": "error",
    "jsx-a11y/interactive-supports-focus": "error",
    "jsx-a11y/click-events-have-key-events": "error"
  }
}
```

### Storybook 접근성 애드온

```javascript
// .storybook/main.js
module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-docs'
  ]
};

// .storybook/preview.js
import { configureA11y } from '@storybook/addon-a11y';

configureA11y({
  element: '#root',
  config: {},
  options: {
    checks: { 'color-contrast': { options: { noScroll: true } } },
    restoreScroll: true
  }
});
```

## 📊 접근성 메트릭스

### 성능 지표

```typescript
// 접근성 성능 추적
const a11yMetrics = {
  lighthouse: {
    accessibility: 95, // 최소 목표
    target: 100 // 이상적 목표
  },
  
  colorContrast: {
    aa: 4.5, // 최소 기준
    aaa: 7.0 // 권장 기준
  },
  
  keyboardNavigation: {
    focusableElements: '100%', // 모든 인터랙티브 요소
    tabOrder: 'logical', // 논리적 순서
    focusIndicator: 'visible' // 명확한 표시
  },
  
  screenReader: {
    semanticMarkup: '100%', // 시맨틱 HTML 사용
    ariaLabels: '100%', // 적절한 레이블
    liveRegions: 'implemented' // 동적 콘텐츠 알림
  }
};
```

## 🚨 접근성 체크리스트

### 개발 단계별 체크리스트

#### 설계 단계
- [ ] 색상 대비 검증 (4.5:1 이상)
- [ ] 터치 타겟 크기 확인 (44x44px 이상)
- [ ] 키보드 내비게이션 경로 설계
- [ ] 스크린 리더 사용자 경험 고려
- [ ] 움직임 감소 설정 대응 방안

#### 구현 단계
- [ ] 시맨틱 HTML 사용
- [ ] ARIA 속성 적절히 사용
- [ ] 포커스 관리 구현
- [ ] 키보드 이벤트 핸들러 추가
- [ ] 대체 텍스트 작성

#### 테스트 단계
- [ ] 자동화된 접근성 테스트 실행
- [ ] 키보드 전용 내비게이션 테스트
- [ ] 스크린 리더 테스트
- [ ] 색상 대비 검증
- [ ] 다양한 브라우저에서 테스트

#### 배포 단계
- [ ] Lighthouse 접근성 점수 95점 이상
- [ ] axe-core 검사 통과
- [ ] 실제 사용자 피드백 수집
- [ ] 접근성 문서 업데이트

## 📚 관련 리소스

### 외부 가이드라인
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [WebAIM Resources](https://webaim.org/resources/)

### 테스트 도구
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Web Accessibility Evaluator](https://wave.webaim.org/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Color Contrast Analyzers](https://www.tpgi.com/color-contrast-checker/)

### 관련 가이드
1. **[Getting Started](./01-getting-started.md)** - 디자인 시스템 시작하기
2. **[Foundation Tokens](./02-foundation-tokens.md)** - 토큰 시스템
3. **[Theming Guide](./04-theming.md)** - 테마 커스터마이징
4. **[Migration Guide](./05-migration.md)** - 기존 프로젝트 마이그레이션

---

**모든 사용자가 접근 가능한 인터페이스를 만들어 더 나은 웹을 구축하세요!** 