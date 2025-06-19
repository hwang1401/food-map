---
title: 'TextDisplay - System 01'
description: 'Professional & Clean 테마의 텍스트 디스플레이 컴포넌트'
date: '2024-12-28'
category: 'System-01 Components'
tags: ['TextDisplay', 'Typography', 'Content', 'Layout', 'System-01', 'Professional']
version: '1.0.0'
status: 'stable'
---

# TextDisplay - System 01

System-01의 TextDisplay 컴포넌트는 Professional & Clean 테마에 최적화된 텍스트 표시 컴포넌트입니다. GitHub, 백오피스 환경에서 사용되는 다양한 텍스트 요소들을 조합하여 일관성 있고 구조화된 정보 표시를 제공합니다.

## 개요

TextDisplay 컴포넌트는 라벨, 메인 텍스트, 설명, 캡션을 선택적으로 조합할 수 있는 컴파운드 컴포넌트로, Frame, Surface, Text, Icon 프리미티브를 활용하여 다양한 텍스트 레이아웃을 구성할 수 있습니다.

### 핵심 특징

- **5가지 크기**: xsm, sm, md, lg, xlg
- **2가지 정렬**: left, center
- **4가지 아이콘 위치**: none, before, after, above
- **4가지 텍스트 요소**: label, primary, description, caption
- **선택적 표시**: 각 요소를 독립적으로 활성화/비활성화
- **프리미티브 조합**: Frame + Surface + Text + Icon

## Props 인터페이스

```typescript
interface TextDisplayProps {
  // 크기 및 스타일
  size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xlg';
  style?: 'left' | 'center';
  
  // 아이콘 설정
  iconPosition?: 'none' | 'before' | 'after' | 'above';
  iconName?: IconName;
  iconType?: 'line' | 'flat';
  
  // 라벨
  showLabel?: boolean;
  labelText?: string;
  
  // 메인 텍스트
  primaryText?: string;
  
  // 설명
  showDescription?: boolean;
  descriptionText?: string;
  
  // 캡션
  showCaption?: boolean;
  captionText?: string;
}
```

## 기본 사용법

### 기본 텍스트 표시

```tsx
import { TextDisplay } from 'lumir-design-system-01';

function BasicTextDisplay() {
  return (
    <TextDisplay 
      primaryText="Hello World" 
    />
  );
}
```

### 라벨과 함께

```tsx
function WithLabel() {
  return (
    <TextDisplay
      showLabel={true}
      labelText="제목"
      primaryText="메인 콘텐츠"
    />
  );
}
```

### 모든 요소 포함

```tsx
function CompleteTextDisplay() {
  return (
    <TextDisplay
      showLabel={true}
      labelText="상태"
      primaryText="성공"
      showDescription={true}
      descriptionText="작업이 성공적으로 완료되었습니다"
      showCaption={true}
      captionText="마지막 업데이트: 2024-01-01"
    />
  );
}
```

## 크기 변형

### 매우 작은 크기 (xsm)

```tsx
function ExtraSmallSize() {
  return (
    <TextDisplay
      size="xsm"
      showLabel={true}
      labelText="작은 라벨"
      primaryText="작은 텍스트"
      showDescription={true}
      descriptionText="작은 설명"
    />
  );
}
```

### 작은 크기 (sm)

```tsx
function SmallSize() {
  return (
    <TextDisplay
      size="sm"
      showLabel={true}
      labelText="작은 라벨"
      primaryText="작은 텍스트"
      showDescription={true}
      descriptionText="작은 설명"
    />
  );
}
```

### 중간 크기 (md, 기본)

```tsx
function MediumSize() {
  return (
    <TextDisplay
      size="md"
      showLabel={true}
      labelText="중간 라벨"
      primaryText="중간 텍스트"
      showDescription={true}
      descriptionText="중간 설명"
    />
  );
}
```

### 큰 크기 (lg)

```tsx
function LargeSize() {
  return (
    <TextDisplay
      size="lg"
      showLabel={true}
      labelText="큰 라벨"
      primaryText="큰 텍스트"
      showDescription={true}
      descriptionText="큰 설명"
    />
  );
}
```

### 매우 큰 크기 (xlg)

```tsx
function ExtraLargeSize() {
  return (
    <TextDisplay
      size="xlg"
      showLabel={true}
      labelText="매우 큰 라벨"
      primaryText="매우 큰 텍스트"
      showDescription={true}
      descriptionText="매우 큰 설명"
    />
  );
}
```

## 정렬 스타일

### 왼쪽 정렬 (기본)

```tsx
function LeftAligned() {
  return (
    <TextDisplay
      style="left"
      showLabel={true}
      labelText="왼쪽 정렬"
      primaryText="왼쪽 정렬된 텍스트"
      showDescription={true}
      descriptionText="이 텍스트는 왼쪽으로 정렬됩니다"
    />
  );
}
```

### 중앙 정렬

```tsx
function CenterAligned() {
  return (
    <TextDisplay
      style="center"
      showLabel={true}
      labelText="중앙 정렬"
      primaryText="중앙 정렬된 텍스트"
      showDescription={true}
      descriptionText="이 텍스트는 중앙으로 정렬됩니다"
    />
  );
}
```

## 아이콘 위치

### 아이콘 위에

```tsx
function IconAbove() {
  return (
    <TextDisplay
      iconPosition="above"
      iconName="LineIconsStarFilledIcon"
      style="center"
      primaryText="성공"
      showDescription={true}
      descriptionText="작업이 완료되었습니다"
    />
  );
}
```

### 아이콘 앞에

```tsx
function IconBefore() {
  return (
    <TextDisplay
      iconPosition="before"
      iconName="LineIconsInfoIcon"
      primaryText="정보"
      showDescription={true}
      descriptionText="중요한 정보입니다"
    />
  );
}
```

### 아이콘 뒤에

```tsx
function IconAfter() {
  return (
    <TextDisplay
      iconPosition="after"
      iconName="LineIconsArrowRightIcon"
      primaryText="다음 단계"
      showDescription={true}
      descriptionText="계속 진행하세요"
    />
  );
}
```

## 고급 사용 예제

### 상태 표시 카드

```tsx
function StatusCard() {
  const [status, setStatus] = useState('success');
  
  const statusConfig = {
    success: {
      icon: 'LineIconsCheckCircleIcon',
      label: '상태',
      primary: '성공',
      description: '모든 작업이 성공적으로 완료되었습니다',
      caption: '완료 시간: 2024-01-01 10:30'
    },
    warning: {
      icon: 'LineIconsWarningIcon',
      label: '상태',
      primary: '경고',
      description: '일부 작업에서 경고가 발생했습니다',
      caption: '확인 필요'
    },
    error: {
      icon: 'LineIconsCloseCircleIcon',
      label: '상태',
      primary: '오류',
      description: '작업 중 오류가 발생했습니다',
      caption: '재시도 필요'
    }
  };
  
  const config = statusConfig[status];
  
  return (
    <div style={{ 
      border: '1px solid #dee2e6', 
      borderRadius: '8px', 
      padding: '24px',
      maxWidth: '300px'
    }}>
      <TextDisplay
        size="lg"
        style="center"
        iconPosition="above"
        iconName={config.icon}
        showLabel={true}
        labelText={config.label}
        primaryText={config.primary}
        showDescription={true}
        descriptionText={config.description}
        showCaption={true}
        captionText={config.caption}
      />
      
      <div style={{ 
        display: 'flex', 
        gap: '8px', 
        marginTop: '16px',
        justifyContent: 'center'
      }}>
        <button 
          onClick={() => setStatus('success')}
          style={{ 
            padding: '4px 8px', 
            backgroundColor: status === 'success' ? '#28a745' : '#e9ecef',
            color: status === 'success' ? 'white' : 'black',
            border: 'none', 
            borderRadius: '4px',
            fontSize: '12px'
          }}
        >
          성공
        </button>
        <button 
          onClick={() => setStatus('warning')}
          style={{ 
            padding: '4px 8px', 
            backgroundColor: status === 'warning' ? '#ffc107' : '#e9ecef',
            color: status === 'warning' ? 'black' : 'black',
            border: 'none', 
            borderRadius: '4px',
            fontSize: '12px'
          }}
        >
          경고
        </button>
        <button 
          onClick={() => setStatus('error')}
          style={{ 
            padding: '4px 8px', 
            backgroundColor: status === 'error' ? '#dc3545' : '#e9ecef',
            color: status === 'error' ? 'white' : 'black',
            border: 'none', 
            borderRadius: '4px',
            fontSize: '12px'
          }}
        >
          오류
        </button>
      </div>
    </div>
  );
}
```

### 프로필 정보 표시

```tsx
function ProfileInfo() {
  const profileData = {
    name: '김개발',
    role: 'Senior Frontend Developer',
    department: '개발팀',
    lastLogin: '2024-01-01 14:30'
  };
  
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '16px',
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      maxWidth: '400px'
    }}>
      <TextDisplay
        size="lg"
        iconPosition="before"
        iconName="LineIconsPersonPersonIcon"
        showLabel={true}
        labelText="이름"
        primaryText={profileData.name}
      />
      
      <TextDisplay
        size="md"
        iconPosition="before"
        iconName="LineIconsBriefcaseIcon"
        showLabel={true}
        labelText="직책"
        primaryText={profileData.role}
        showDescription={true}
        descriptionText={profileData.department}
      />
      
      <TextDisplay
        size="sm"
        iconPosition="before"
        iconName="LineIconsClockIcon"
        showLabel={true}
        labelText="마지막 로그인"
        primaryText={profileData.lastLogin}
      />
    </div>
  );
}
```

### 통계 대시보드

```tsx
function StatsDashboard() {
  const stats = [
    {
      label: '총 방문자',
      value: '12,345',
      description: '전일 대비 +15%',
      caption: '오늘',
      icon: 'LineIconsUsersIcon'
    },
    {
      label: '페이지뷰',
      value: '98,765',
      description: '전일 대비 +8%',
      caption: '오늘',
      icon: 'LineIconsEyeIcon'
    },
    {
      label: '전환율',
      value: '3.2%',
      description: '전일 대비 +0.5%',
      caption: '오늘',
      icon: 'LineIconsTargetIcon'
    },
    {
      label: '매출',
      value: '₩1,234,567',
      description: '전월 대비 +22%',
      caption: '이번 달',
      icon: 'LineIconsMoneyIcon'
    }
  ];
  
  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
      gap: '20px',
      padding: '20px'
    }}>
      {stats.map((stat, index) => (
        <div 
          key={index}
          style={{ 
            padding: '20px', 
            backgroundColor: 'white',
            border: '1px solid #dee2e6',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <TextDisplay
            size="md"
            style="center"
            iconPosition="above"
            iconName={stat.icon}
            showLabel={true}
            labelText={stat.label}
            primaryText={stat.value}
            showDescription={true}
            descriptionText={stat.description}
            showCaption={true}
            captionText={stat.caption}
          />
        </div>
      ))}
    </div>
  );
}
```

### 알림 메시지

```tsx
function NotificationMessage() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'info',
      title: '새 업데이트 알림',
      message: '시스템이 최신 버전으로 업데이트되었습니다',
      time: '방금 전',
      icon: 'LineIconsInfoIcon'
    },
    {
      id: 2,
      type: 'success',
      title: '백업 완료',
      message: '데이터 백업이 성공적으로 완료되었습니다',
      time: '5분 전',
      icon: 'LineIconsCheckCircleIcon'
    },
    {
      id: 3,
      type: 'warning',
      title: '저장 공간 부족',
      message: '디스크 사용량이 90%를 초과했습니다',
      time: '1시간 전',
      icon: 'LineIconsWarningIcon'
    }
  ]);
  
  const removeNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };
  
  return (
    <div style={{ maxWidth: '400px' }}>
      <h3>알림</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {notifications.map(notification => (
          <div 
            key={notification.id}
            style={{ 
              padding: '16px', 
              backgroundColor: '#f8f9fa',
              border: '1px solid #dee2e6',
              borderRadius: '6px',
              position: 'relative'
            }}
          >
            <button
              onClick={() => removeNotification(notification.id)}
              style={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'none',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                color: '#6c757d'
              }}
            >
              ×
            </button>
            
            <TextDisplay
              size="sm"
              iconPosition="before"
              iconName={notification.icon}
              primaryText={notification.title}
              showDescription={true}
              descriptionText={notification.message}
              showCaption={true}
              captionText={notification.time}
            />
          </div>
        ))}
        
        {notifications.length === 0 && (
          <div style={{ 
            padding: '40px', 
            textAlign: 'center', 
            color: '#6c757d',
            backgroundColor: '#f8f9fa',
            borderRadius: '6px'
          }}>
            <TextDisplay
              style="center"
              iconPosition="above"
              iconName="LineIconsBellIcon"
              primaryText="알림이 없습니다"
              showDescription={true}
              descriptionText="새로운 알림이 있으면 여기에 표시됩니다"
            />
          </div>
        )}
      </div>
    </div>
  );
}
```

## System-01 디자인 특성

### 색상 시스템

- **라벨**: `secondary-system01-2-rest`
- **메인 텍스트**: `secondary-system01-1-rest`
- **설명**: `secondary-system01-2-rest`
- **캡션**: `secondary-system01-3-rest`

### 타이포그래피 매핑

#### XLG 크기
- 라벨: `body-2` (14px)
- 메인: `title-1` (30px, bold)
- 설명: `heading-3` (16px)
- 캡션: `body-2` (14px)

#### LG 크기
- 라벨: `label-1` (14px)
- 메인: `title-2` (24px, bold)
- 설명: `body-1` (16px)
- 캡션: `label-1` (14px)

#### MD 크기 (기본)
- 라벨: `label-2` (12px)
- 메인: `heading-3` (16px, bold)
- 설명: `label-1` (14px)
- 캡션: `label-2` (12px)

#### SM 크기
- 라벨: `caption-1` (12px)
- 메인: `body-1` (16px, bold)
- 설명: `label-1` (14px)
- 캡션: `caption-1` (12px)

#### XSM 크기
- 라벨: `caption-1` (12px)
- 메인: `label-1` (14px, bold)
- 설명: `caption-1` (12px)
- 캡션: `caption-3` (11px)

### 아이콘 크기 매핑

- **xlg**: `lg` 아이콘
- **lg**: `md` 아이콘
- **md**: `sm` 아이콘
- **sm**: `xs` 아이콘
- **xsm**: `xs` 아이콘

## Foundation 토큰 사용

### 색상 토큰

```css
/* 라벨 색상 */
color: var(--foundation-foundation-color-secondary-system01-2-rest);

/* 메인 텍스트 색상 */
color: var(--foundation-foundation-color-secondary-system01-1-rest);

/* 설명 색상 */
color: var(--foundation-foundation-color-secondary-system01-2-rest);

/* 캡션 색상 */
color: var(--foundation-foundation-color-secondary-system01-3-rest);
```

### 간격 토큰

```css
/* 요소 간 간격 */
gap: var(--foundation-foundation-spacing-xxxs);

/* 아이콘과 텍스트 간격 */
gap: var(--foundation-foundation-spacing-sm);
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 적절한 크기 선택으로 계층 구조 표현
- 관련된 정보를 그룹화
- 일관된 아이콘 사용
- 명확한 정보 구조 유지

✅ **적절한 사용 예시**
```tsx
// 상태 표시
<TextDisplay
  iconPosition="before"
  iconName="CheckIcon"
  primaryText="완료"
  showDescription={true}
  descriptionText="작업이 완료되었습니다"
/>

// 통계 정보
<TextDisplay
  style="center"
  iconPosition="above"
  iconName="ChartIcon"
  showLabel={true}
  labelText="방문자"
  primaryText="1,234"
/>
```

### 주의사항

❌ **DON'T**
- 너무 많은 정보를 한 번에 표시
- 일관성 없는 크기 사용
- 불필요한 아이콘 남용
- 가독성을 해치는 정렬

## 관련 컴포넌트

- **Text**: 개별 텍스트 요소
- **Icon**: 아이콘 표시
- **Surface**: 색상 및 배경 관리
- **Frame**: 레이아웃 구성

## 참고 자료

- [Typography Guidelines](https://material.io/design/typography/)
- [Information Architecture](https://www.nngroup.com/articles/information-architecture-soa/)
- [Accessible Typography](https://webaim.org/techniques/fonts/) 