---
title: 'Radio - System 02'
description: 'Friendly & Bright 테마의 라디오 버튼 컴포넌트'
date: '2024-12-28'
category: 'System-02 Components'
tags: ['Radio', 'Input', 'Selection', 'Form', 'System-02', 'Friendly', 'Commerce']
version: '1.0.0'
status: 'stable'
---

# Radio - System 02

System-02의 Radio 컴포넌트는 Friendly & Bright 테마에 최적화된 라디오 버튼입니다. 커머스, 소비자 대상 서비스에서 사용되는 친근하고 매력적인 디자인으로, 단일 선택을 위한 라디오 버튼 인터페이스를 제공합니다.

## 개요

Radio 컴포넌트는 여러 옵션 중 하나만 선택할 수 있는 라디오 버튼 컴포넌트로, Surface, Frame, Icon과 함께 Label 컴포넌트를 조합하여 완전한 라디오 버튼 인터페이스를 제공합니다.

### 핵심 특징

- **2가지 스타일**: radio, checkmark
- **4가지 상태**: rest, hovered, pressed, disabled
- **라벨 통합**: Label 컴포넌트 완전 통합
- **그룹 관리**: name 속성으로 그룹 관리
- **더 둥근 모서리**: circle 형태로 친근한 느낌
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
  
  // Form 관련
  name?: string;
  value?: string;
  
  // 스타일
  style?: 'radio' | 'checkmark';
  
  // 이벤트
  onChange?: (checked: boolean) => void;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  
  // 스타일
  className?: string;
  style?: React.CSSProperties;
}
```

## 기본 사용법

### 기본 라디오 버튼

```tsx
import { Radio } from 'lumir-design-system-02';

function BasicRadio() {
  const [selected, setSelected] = useState('option1');
  
  return (
    <div>
      <Radio
        name="options"
        value="option1"
        label="옵션 1"
        checked={selected === 'option1'}
        onChange={() => setSelected('option1')}
      />
      <Radio
        name="options"
        value="option2"
        label="옵션 2"
        checked={selected === 'option2'}
        onChange={() => setSelected('option2')}
      />
    </div>
  );
}
```

### 체크마크 스타일

```tsx
function CheckmarkRadio() {
  const [selected, setSelected] = useState('');
  
  return (
    <div>
      <Radio
        style="checkmark"
        name="payment"
        value="card"
        label="신용카드"
        checked={selected === 'card'}
        onChange={() => setSelected('card')}
      />
      <Radio
        style="checkmark"
        name="payment"
        value="bank"
        label="계좌이체"
        checked={selected === 'bank'}
        onChange={() => setSelected('bank')}
      />
    </div>
  );
}
```

## System-02 디자인 특성

### 색상 시스템 (Friendly & Bright)

- **체크 안됨**: `secondary-system02-1-rest` 테두리
- **체크됨**: `primary-system02-1-rest` 배경
- **비활성화**: `-disabled` 토큰 사용

### 형태적 특징 (더 친근한 디자인)

- **형태**: 완전한 원형 (circle)
- **크기**: 20×20px (터치 친화적 크기)
- **내부 점**: 체크됨 상태에서 작은 원 표시

## Foundation 토큰 사용

```css
/* 테두리 색상 */
border-color: var(--foundation-foundation-color-secondary-system02-1-rest);

/* 체크된 상태 */
background-color: var(--foundation-foundation-color-primary-system02-1-rest);

/* 원형 */
border-radius: var(--foundation-foundation-border-radius-circle);
```

## 관련 컴포넌트

- **Checkbox**: 다중 선택 입력
- **Label**: 라디오 버튼 라벨
- **OptionList**: 라디오 옵션 리스트 