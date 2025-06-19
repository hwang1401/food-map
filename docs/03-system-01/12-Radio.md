---
title: 'Radio - System 01'
description: 'Professional & Clean 테마의 라디오 버튼 컴포넌트'
date: '2024-12-28'
category: 'System-01 Components'
tags: ['Radio', 'Selection', 'Form', 'Input', 'System-01', 'Professional']
version: '1.0.0'
status: 'stable'
---

# Radio - System 01

System-01의 Radio 컴포넌트는 Professional & Clean 테마에 최적화된 라디오 버튼입니다. GitHub, 백오피스 환경에서 사용되는 단일 선택 인터페이스로, 명확하고 효율적인 선택 경험을 제공합니다.

## 개요

Radio 컴포넌트는 단일 선택을 위한 폼 컨트롤 컴포넌트로, Surface, Frame, Icon, Label 프리미티브를 조합하여 접근성이 뛰어난 라디오 버튼 인터페이스를 제공합니다.

### 핵심 특징

- **2가지 스타일**: radio(원형), checkmark(사각형)
- **4가지 상태**: rest, hovered, pressed, disabled
- **라벨 지원**: 선택적 라벨 표시
- **그룹 관리**: name 속성으로 그룹 관리
- **접근성**: WCAG 2.1 AA 준수 키보드 내비게이션
- **프리미티브 조합**: Surface + Frame + Icon + Label

## Props 인터페이스

```typescript
interface RadioProps {
  // 상태
  checked?: boolean;
  disabled?: boolean;
  
  // 라벨
  label?: string;
  showLabel?: boolean;
  
  // 그룹 관리
  name?: string;
  value?: string;
  
  // 스타일
  variant?: 'radio' | 'checkmark';
  
  // 이벤트 핸들러
  onChange?: (value: string) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  
  // 스타일링
  className?: string;
  style?: React.CSSProperties;
}
```

## 기본 사용법

### 기본 라디오 버튼

```tsx
import { Radio } from 'lumir-design-system-01';

function BasicRadio() {
  const [selected, setSelected] = useState('option1');
  
  return (
    <Radio
      name="basic-radio"
      value="option1"
      label="옵션 1"
      checked={selected === 'option1'}
      onChange={setSelected}
    />
  );
}
```

### 라디오 그룹

```tsx
function RadioGroup() {
  const [selectedValue, setSelectedValue] = useState('small');
  
  const sizes = [
    { value: 'small', label: '작음' },
    { value: 'medium', label: '보통' },
    { value: 'large', label: '큼' },
  ];
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <h3>크기 선택</h3>
      {sizes.map(size => (
        <Radio
          key={size.value}
          name="size-selection"
          value={size.value}
          label={size.label}
          checked={selectedValue === size.value}
          onChange={setSelectedValue}
        />
      ))}
    </div>
  );
}
```

### 라벨 없는 라디오

```tsx
function NoLabelRadio() {
  const [checked, setChecked] = useState(false);
  
  return (
    <Radio
      name="no-label"
      value="option"
      showLabel={false}
      checked={checked}
      onChange={() => setChecked(true)}
    />
  );
}
```

## 스타일 변형

### Radio 스타일 (기본)

원형 라디오 버튼입니다.

```tsx
function RadioStyle() {
  const [selected, setSelected] = useState('option1');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Radio
        variant="radio"
        name="radio-style"
        value="option1"
        label="라디오 스타일 1"
        checked={selected === 'option1'}
        onChange={setSelected}
      />
      <Radio
        variant="radio"
        name="radio-style"
        value="option2"
        label="라디오 스타일 2"
        checked={selected === 'option2'}
        onChange={setSelected}
      />
    </div>
  );
}
```

### Checkmark 스타일

사각형 체크마크 스타일입니다.

```tsx
function CheckmarkStyle() {
  const [selected, setSelected] = useState('option1');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Radio
        variant="checkmark"
        name="checkmark-style"
        value="option1"
        label="체크마크 스타일 1"
        checked={selected === 'option1'}
        onChange={setSelected}
      />
      <Radio
        variant="checkmark"
        name="checkmark-style"
        value="option2"
        label="체크마크 스타일 2"
        checked={selected === 'option2'}
        onChange={setSelected}
      />
    </div>
  );
}
```

## 상태 변형

### 비활성화 상태

```tsx
function DisabledRadio() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Radio
        name="disabled-example"
        value="disabled-unchecked"
        label="비활성화된 라디오"
        disabled
        checked={false}
      />
      <Radio
        name="disabled-example"
        value="disabled-checked"
        label="비활성화된 선택된 라디오"
        disabled
        checked={true}
      />
    </div>
  );
}
```

## 고급 사용 예제

### 설정 선택기

```tsx
function SettingsSelector() {
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('ko');
  const [notifications, setNotifications] = useState('all');
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4>테마 설정</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
          <Radio
            name="theme"
            value="light"
            label="라이트 모드"
            checked={theme === 'light'}
            onChange={setTheme}
          />
          <Radio
            name="theme"
            value="dark"
            label="다크 모드"
            checked={theme === 'dark'}
            onChange={setTheme}
          />
          <Radio
            name="theme"
            value="auto"
            label="시스템 설정 따르기"
            checked={theme === 'auto'}
            onChange={setTheme}
          />
        </div>
      </div>
      
      <div>
        <h4>언어 설정</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
          <Radio
            name="language"
            value="ko"
            label="한국어"
            checked={language === 'ko'}
            onChange={setLanguage}
          />
          <Radio
            name="language"
            value="en"
            label="English"
            checked={language === 'en'}
            onChange={setLanguage}
          />
          <Radio
            name="language"
            value="ja"
            label="日本語"
            checked={language === 'ja'}
            onChange={setLanguage}
          />
        </div>
      </div>
      
      <div>
        <h4>알림 설정</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
          <Radio
            name="notifications"
            value="all"
            label="모든 알림"
            checked={notifications === 'all'}
            onChange={setNotifications}
          />
          <Radio
            name="notifications"
            value="important"
            label="중요한 알림만"
            checked={notifications === 'important'}
            onChange={setNotifications}
          />
          <Radio
            name="notifications"
            value="none"
            label="알림 끄기"
            checked={notifications === 'none'}
            onChange={setNotifications}
          />
        </div>
      </div>
    </div>
  );
}
```

### 결제 방법 선택

```tsx
function PaymentMethodSelector() {
  const [paymentMethod, setPaymentMethod] = useState('card');
  
  const methods = [
    { 
      value: 'card', 
      label: '신용카드', 
      description: '안전하고 빠른 결제' 
    },
    { 
      value: 'bank', 
      label: '계좌이체', 
      description: '수수료 없는 직접 이체' 
    },
    { 
      value: 'virtual', 
      label: '가상계좌', 
      description: '24시간 입금 가능' 
    },
    { 
      value: 'mobile', 
      label: '휴대폰 결제', 
      description: '통신사 요금과 함께 청구' 
    },
  ];
  
  return (
    <div style={{ maxWidth: '400px' }}>
      <h3>결제 방법 선택</h3>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px',
        marginTop: '16px'
      }}>
        {methods.map(method => (
          <div 
            key={method.value}
            style={{
              border: paymentMethod === method.value ? '2px solid #007bff' : '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              cursor: 'pointer',
              backgroundColor: paymentMethod === method.value ? '#f8f9fa' : 'white'
            }}
            onClick={() => setPaymentMethod(method.value)}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <Radio
                name="payment-method"
                value={method.value}
                showLabel={false}
                checked={paymentMethod === method.value}
                onChange={setPaymentMethod}
              />
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
                  {method.label}
                </div>
                <div style={{ fontSize: '14px', color: '#666' }}>
                  {method.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

### 퀴즈 문제

```tsx
function QuizQuestion() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  
  const question = "React에서 상태 관리를 위해 사용하는 Hook은?";
  const answers = [
    { value: 'a', text: 'useEffect', correct: false },
    { value: 'b', text: 'useState', correct: true },
    { value: 'c', text: 'useContext', correct: false },
    { value: 'd', text: 'useCallback', correct: false },
  ];
  
  const handleSubmit = () => {
    setSubmitted(true);
  };
  
  const getAnswerStyle = (answer: any) => {
    if (!submitted) return {};
    
    if (answer.correct) {
      return { backgroundColor: '#d4edda', borderColor: '#c3e6cb' };
    } else if (selectedAnswer === answer.value) {
      return { backgroundColor: '#f8d7da', borderColor: '#f5c6cb' };
    }
    return {};
  };
  
  return (
    <div style={{ maxWidth: '500px' }}>
      <h3>{question}</h3>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '8px',
        marginTop: '16px',
        marginBottom: '16px'
      }}>
        {answers.map(answer => (
          <div 
            key={answer.value}
            style={{
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '12px',
              ...getAnswerStyle(answer)
            }}
          >
            <Radio
              name="quiz-answer"
              value={answer.value}
              label={answer.text}
              checked={selectedAnswer === answer.value}
              onChange={setSelectedAnswer}
              disabled={submitted}
            />
          </div>
        ))}
      </div>
      
      <button 
        onClick={handleSubmit}
        disabled={!selectedAnswer || submitted}
        style={{
          padding: '8px 16px',
          backgroundColor: submitted ? '#6c757d' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: submitted ? 'not-allowed' : 'pointer'
        }}
      >
        {submitted ? '제출 완료' : '답안 제출'}
      </button>
      
      {submitted && (
        <div style={{ marginTop: '16px', padding: '12px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
          {selectedAnswer === 'b' ? (
            <span style={{ color: '#28a745' }}>✓ 정답입니다!</span>
          ) : (
            <span style={{ color: '#dc3545' }}>✗ 틀렸습니다. 정답은 'useState'입니다.</span>
          )}
        </div>
      )}
    </div>
  );
}
```

### 동적 옵션 생성

```tsx
function DynamicRadioOptions() {
  const [options, setOptions] = useState([
    { id: '1', label: '옵션 1' },
    { id: '2', label: '옵션 2' }
  ]);
  const [selected, setSelected] = useState<string | null>(null);
  const [newOptionText, setNewOptionText] = useState('');
  
  const addOption = () => {
    if (newOptionText.trim()) {
      const newId = (options.length + 1).toString();
      setOptions([...options, { id: newId, label: newOptionText.trim() }]);
      setNewOptionText('');
    }
  };
  
  const removeOption = (idToRemove: string) => {
    setOptions(options.filter(option => option.id !== idToRemove));
    if (selected === idToRemove) {
      setSelected(null);
    }
  };
  
  return (
    <div style={{ maxWidth: '300px' }}>
      <h3>동적 옵션 관리</h3>
      
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <input
            type="text"
            value={newOptionText}
            onChange={(e) => setNewOptionText(e.target.value)}
            placeholder="새 옵션 텍스트"
            style={{ flex: 1, padding: '4px 8px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <button 
            onClick={addOption}
            style={{ 
              padding: '4px 12px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            추가
          </button>
        </div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {options.map(option => (
          <div key={option.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Radio
              name="dynamic-options"
              value={option.id}
              label={option.label}
              checked={selected === option.id}
              onChange={setSelected}
            />
            <button
              onClick={() => removeOption(option.id)}
              style={{
                padding: '2px 6px',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '3px',
                fontSize: '12px',
                cursor: 'pointer'
              }}
            >
              삭제
            </button>
          </div>
        ))}
      </div>
      
      {selected && (
        <div style={{ marginTop: '16px', padding: '8px', backgroundColor: '#e9ecef', borderRadius: '4px' }}>
          선택된 옵션: {options.find(opt => opt.id === selected)?.label}
        </div>
      )}
    </div>
  );
}
```

## System-01 디자인 특성

### 색상 시스템

- **배경**: `secondary-system01-2-*` 토큰 사용
- **테두리**: `secondary-system01-1-*` 토큰 사용  
- **내부 표시**: `primary-system01-1-*` 토큰 사용
- **비활성화**: `*-disabled` 토큰 사용

### 형태적 특징

- **크기**: 16×16px 라디오 버튼
- **내부 원**: 6×6px (radio 스타일)
- **Border Radius**: 원형(radio), 작은 모서리(checkmark)
- **라벨 간격**: `sm` 토큰

### 상호작용 패턴

- **클릭**: 라디오 버튼 또는 라벨 클릭으로 선택
- **호버**: 배경색 및 테두리 색상 변화
- **포커스**: 키보드 포커스 표시
- **그룹**: name 속성으로 단일 선택 보장

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

```tsx
// 키보드 내비게이션 지원
<div role="radiogroup" aria-labelledby="radio-group-title">
  <h3 id="radio-group-title">크기 선택</h3>
  {sizes.map(size => (
    <Radio
      key={size.value}
      name="size-selection"
      value={size.value}
      label={size.label}
      checked={selected === size.value}
      onChange={setSelected}
      onKeyDown={(e) => {
        // 화살표 키로 옵션 간 이동
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          // 다음 옵션으로 이동
        }
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          // 이전 옵션으로 이동
        }
      }}
    />
  ))}
</div>
```

### 스크린 리더 지원

```tsx
// 적절한 ARIA 속성 제공
<Radio
  name="accessibility-example"
  value="option1"
  label="접근 가능한 옵션"
  checked={selected === 'option1'}
  onChange={setSelected}
  aria-describedby="option1-description"
/>
<div id="option1-description" style={{ fontSize: '14px', color: '#666' }}>
  이 옵션에 대한 추가 설명
</div>
```

### 색상 대비

- **일반 텍스트**: 4.5:1 이상 (WCAG AA)
- **라디오 버튼**: 3:1 이상
- **비활성화 상태**: 충분한 대비 유지
- **포커스 인디케이터**: 3:1 이상

## Foundation 토큰 사용

### 색상 토큰

```css
/* 라디오 버튼 배경 */
background-color: var(--foundation-foundation-color-secondary-system01-2-rest);

/* 라디오 버튼 테두리 */
border-color: var(--foundation-foundation-color-secondary-system01-1-rest);

/* 선택된 내부 원 */
background-color: var(--foundation-foundation-color-primary-system01-1-rest);

/* 호버 상태 */
background-color: var(--foundation-foundation-color-secondary-system01-2-hovered);
```

### 크기 토큰

```css
/* 라디오 버튼 크기 */
width: 16px;
height: 16px;

/* 내부 원 크기 */
width: 6px;
height: 6px;

/* 라벨 간격 */
gap: var(--foundation-foundation-spacing-sm);
```

## 성능 최적화

### 메모이제이션

```tsx
import { memo } from 'react';

const OptimizedRadio = memo(Radio);

// 많은 라디오 버튼이 있는 경우
function LargeRadioGroup({ options }) {
  return (
    <div>
      {options.map(option => (
        <OptimizedRadio
          key={option.value}
          name="large-group"
          value={option.value}
          label={option.label}
          checked={selected === option.value}
          onChange={setSelected}
        />
      ))}
    </div>
  );
}
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확하고 간결한 라벨 사용
- 같은 그룹의 라디오는 동일한 name 사용
- 기본 선택값 제공
- 키보드 접근성 고려
- 적절한 그룹 라벨 제공

✅ **적절한 사용 예시**
```tsx
// 명확한 그룹
<div role="radiogroup" aria-labelledby="theme-label">
  <h3 id="theme-label">테마 선택</h3>
  <Radio name="theme" value="light" label="라이트" checked={theme === 'light'} />
  <Radio name="theme" value="dark" label="다크" checked={theme === 'dark'} />
</div>
```

### 주의사항

❌ **DON'T**
- 단일 라디오 버튼 사용 (체크박스 사용)
- 너무 긴 라벨 텍스트
- name 속성 누락
- 불명확한 선택 상태
- 접근성 속성 누락

❌ **피해야 할 예시**
```tsx
// 단일 라디오 (잘못된 사용)
<Radio name="single" value="agree" label="동의합니다" />

// name 속성 누락
<Radio value="option1" label="옵션 1" />
<Radio value="option2" label="옵션 2" />
```

### 사용 시나리오별 가이드

- **설정 선택**: 명확한 옵션 구분
- **단계별 선택**: 진행 상황 표시
- **필터링**: 상호 배타적 필터 옵션
- **폼 입력**: 필수/선택 표시

## 관련 컴포넌트

- **Checkbox**: 다중 선택이 필요한 경우
- **OptionList**: 라디오 버튼을 포함한 옵션 리스트
- **Label**: 라디오 버튼 라벨
- **Surface**: 라디오 버튼 배경
- **Icon**: checkmark 스타일 아이콘

## 참고 자료

- [ARIA Radio Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- [Material Design Radio](https://material.io/components/radio-buttons)
- [접근 가능한 폼 컨트롤](https://webaim.org/techniques/forms/controls) 