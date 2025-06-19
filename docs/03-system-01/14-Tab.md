---
title: 'Tab - System 01'
description: 'Professional & Clean 테마의 탭 네비게이션 컴포넌트'
date: '2024-12-28'
category: 'System-01 Components'
tags: ['Tab', 'Navigation', 'Interface', 'Toggle', 'System-01', 'Professional']
version: '1.0.0'
status: 'stable'
---

# Tab - System 01

System-01의 Tab 컴포넌트는 Professional & Clean 테마에 최적화된 탭 네비게이션입니다. GitHub, 백오피스 환경에서 사용되는 콘텐츠 영역 간 전환을 위한 명확하고 효율적인 인터페이스를 제공합니다.

## 개요

Tab 컴포넌트는 여러 콘텐츠 패널 간의 전환을 위한 네비게이션 컴포넌트로, Surface, Frame, Text, Icon 프리미티브를 조합하여 직관적이고 접근성이 뛰어난 탭 인터페이스를 제공합니다.

### 핵심 특징

- **2가지 크기**: lg(48px), md(40px)
- **아이콘 지원**: 선택적 아이콘 표시
- **상태 관리**: controlled/uncontrolled 지원
- **비활성화**: 개별 탭 비활성화 가능
- **테두리**: 선택적 하단 테두리 표시
- **프리미티브 조합**: Surface + Frame + Text + Icon

## Props 인터페이스

```typescript
interface TabItem {
  id: string;
  label: string;
  icon?: string;
  disabled?: boolean;
}

interface TabProps {
  // 탭 데이터
  items: TabItem[];
  
  // 선택 상태
  selectedId?: string;
  defaultSelectedId?: string;
  
  // 스타일
  size?: 'lg' | 'md';
  showBorder?: boolean;
  
  // 이벤트 핸들러
  onChange?: (selectedId: string) => void;
}
```

## 기본 사용법

### 기본 탭

```tsx
import { Tab } from 'lumir-design-system-01';

function BasicTab() {
  const [selectedTab, setSelectedTab] = useState('tab1');
  
  const tabItems = [
    { id: 'tab1', label: '개요' },
    { id: 'tab2', label: '상세정보' },
    { id: 'tab3', label: '설정' },
  ];
  
  return (
    <Tab
      items={tabItems}
      selectedId={selectedTab}
      onChange={setSelectedTab}
    />
  );
}
```

### 아이콘이 있는 탭

```tsx
function IconTab() {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  
  const tabItems = [
    { id: 'dashboard', label: '대시보드', icon: 'LineIconsBarChart1Icon' },
    { id: 'users', label: '사용자', icon: 'LineIconsPersonPersonIcon' },
    { id: 'settings', label: '설정', icon: 'LineIconsSettingsSetting1Icon' },
  ];
  
  return (
    <Tab
      items={tabItems}
      selectedId={selectedTab}
      onChange={setSelectedTab}
    />
  );
}
```

### Uncontrolled 모드

```tsx
function UncontrolledTab() {
  const tabItems = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '소개' },
    { id: 'contact', label: '연락처' },
  ];
  
  return (
    <Tab
      items={tabItems}
      defaultSelectedId="home"
      onChange={(selectedId) => console.log('탭 변경:', selectedId)}
    />
  );
}
```

## 크기 변형

### 큰 크기 (lg, 기본)

```tsx
function LargeTab() {
  const [selectedTab, setSelectedTab] = useState('tab1');
  
  const tabItems = [
    { id: 'tab1', label: '큰 탭 1', icon: 'LineIconsFileFileIcon' },
    { id: 'tab2', label: '큰 탭 2', icon: 'LineIconsFolderFolderIcon' },
  ];
  
  return (
    <Tab
      items={tabItems}
      size="lg"
      selectedId={selectedTab}
      onChange={setSelectedTab}
    />
  );
}
```

### 중간 크기 (md)

```tsx
function MediumTab() {
  const [selectedTab, setSelectedTab] = useState('tab1');
  
  const tabItems = [
    { id: 'tab1', label: '중간 탭 1' },
    { id: 'tab2', label: '중간 탭 2' },
    { id: 'tab3', label: '중간 탭 3' },
  ];
  
  return (
    <Tab
      items={tabItems}
      size="md"
      selectedId={selectedTab}
      onChange={setSelectedTab}
    />
  );
}
```

## 상태 변형

### 비활성화된 탭

```tsx
function DisabledTab() {
  const [selectedTab, setSelectedTab] = useState('available');
  
  const tabItems = [
    { id: 'available', label: '사용 가능' },
    { id: 'disabled', label: '비활성화됨', disabled: true },
    { id: 'another', label: '다른 탭' },
  ];
  
  return (
    <Tab
      items={tabItems}
      selectedId={selectedTab}
      onChange={setSelectedTab}
    />
  );
}
```

### 테두리 없는 탭

```tsx
function NoBorderTab() {
  const [selectedTab, setSelectedTab] = useState('tab1');
  
  const tabItems = [
    { id: 'tab1', label: '탭 1' },
    { id: 'tab2', label: '탭 2' },
  ];
  
  return (
    <Tab
      items={tabItems}
      selectedId={selectedTab}
      onChange={setSelectedTab}
      showBorder={false}
    />
  );
}
```

## 고급 사용 예제

### 완전한 탭 인터페이스

```tsx
function CompleteTabInterface() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: '개요', icon: 'LineIconsBarChart1Icon' },
    { id: 'details', label: '상세정보', icon: 'LineIconsFileFileIcon' },
    { id: 'analytics', label: '분석', icon: 'LineIconsGraphIcon' },
    { id: 'settings', label: '설정', icon: 'LineIconsSettingsSetting1Icon' },
  ];
  
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div style={{ padding: '24px' }}>
            <h2>개요</h2>
            <p>프로젝트의 전반적인 현황을 확인할 수 있습니다.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '16px' }}>
              <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4>총 사용자</h4>
                <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '8px 0' }}>1,234</p>
              </div>
              <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4>활성 세션</h4>
                <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '8px 0' }}>89</p>
              </div>
              <div style={{ padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
                <h4>전환율</h4>
                <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '8px 0' }}>12.5%</p>
              </div>
            </div>
          </div>
        );
      case 'details':
        return (
          <div style={{ padding: '24px' }}>
            <h2>상세정보</h2>
            <p>자세한 데이터와 메트릭을 확인할 수 있습니다.</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px' }}>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa' }}>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #dee2e6' }}>항목</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #dee2e6' }}>값</th>
                  <th style={{ padding: '12px', textAlign: 'left', border: '1px solid #dee2e6' }}>상태</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>서버 응답 시간</td>
                  <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>120ms</td>
                  <td style={{ padding: '12px', border: '1px solid #dee2e6', color: '#28a745' }}>양호</td>
                </tr>
                <tr>
                  <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>데이터베이스 연결</td>
                  <td style={{ padding: '12px', border: '1px solid #dee2e6' }}>활성</td>
                  <td style={{ padding: '12px', border: '1px solid #dee2e6', color: '#28a745' }}>정상</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      case 'analytics':
        return (
          <div style={{ padding: '24px' }}>
            <h2>분석</h2>
            <p>트래픽과 사용자 행동 분석 결과입니다.</p>
            <div style={{ marginTop: '16px' }}>
              <h4>주요 지표</h4>
              <ul>
                <li>페이지뷰: 전주 대비 15% 증가</li>
                <li>이탈률: 전주 대비 3% 감소</li>
                <li>평균 세션 시간: 4분 32초</li>
                <li>신규 사용자 비율: 23%</li>
              </ul>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div style={{ padding: '24px' }}>
            <h2>설정</h2>
            <p>프로젝트 설정을 관리할 수 있습니다.</p>
            <div style={{ marginTop: '16px' }}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>프로젝트 이름</label>
                <input type="text" defaultValue="My Project" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%' }} />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '4px' }}>설명</label>
                <textarea defaultValue="프로젝트 설명" style={{ padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '100%', minHeight: '80px' }} />
              </div>
              <button style={{ padding: '8px 16px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
                저장
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div style={{ border: '1px solid #dee2e6', borderRadius: '8px', overflow: 'hidden' }}>
      <Tab
        items={tabs}
        selectedId={activeTab}
        onChange={setActiveTab}
        showBorder={true}
      />
      {renderTabContent()}
    </div>
  );
}
```

### 동적 탭 관리

```tsx
function DynamicTabs() {
  const [tabs, setTabs] = useState([
    { id: 'tab1', label: '탭 1' },
    { id: 'tab2', label: '탭 2' },
  ]);
  const [activeTab, setActiveTab] = useState('tab1');
  const [newTabName, setNewTabName] = useState('');
  
  const addTab = () => {
    if (newTabName.trim()) {
      const newId = `tab${Date.now()}`;
      setTabs([...tabs, { id: newId, label: newTabName.trim() }]);
      setActiveTab(newId);
      setNewTabName('');
    }
  };
  
  const removeTab = (tabId: string) => {
    const newTabs = tabs.filter(tab => tab.id !== tabId);
    setTabs(newTabs);
    
    if (activeTab === tabId && newTabs.length > 0) {
      setActiveTab(newTabs[0].id);
    }
  };
  
  return (
    <div>
      <div style={{ marginBottom: '16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
        <input
          type="text"
          value={newTabName}
          onChange={(e) => setNewTabName(e.target.value)}
          placeholder="새 탭 이름"
          style={{ padding: '4px 8px', border: '1px solid #ccc', borderRadius: '4px' }}
        />
        <button 
          onClick={addTab}
          style={{ padding: '4px 12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          탭 추가
        </button>
      </div>
      
      <Tab
        items={tabs}
        selectedId={activeTab}
        onChange={setActiveTab}
      />
      
      <div style={{ marginTop: '16px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>현재 탭: {tabs.find(tab => tab.id === activeTab)?.label}</span>
          {tabs.length > 1 && (
            <button
              onClick={() => removeTab(activeTab)}
              style={{ padding: '4px 8px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', fontSize: '12px' }}
            >
              현재 탭 삭제
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
```

## System-01 디자인 특성

### 색상 시스템

- **선택된 탭**: `primary-system01-1-*` 색상 시스템
- **비선택 탭**: `secondary-system01-1-*` 색상 시스템
- **하단 테두리**: 선택된 탭에만 표시
- **호버/포커스**: 각 상태별 색상 변화

### 형태적 특징

- **높이**: lg(48px), md(40px)
- **텍스트**: 선택된 탭은 `bold`, 비선택은 `regular`
- **하단 테두리**: `medium` 두께, 선택된 탭 색상

### 상호작용 패턴

- **클릭**: 탭 선택 변경
- **호버**: 색상 변화
- **키보드**: 좌우 화살표로 탭 간 이동

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

```tsx
// 키보드 내비게이션 지원
<Tab
  items={tabItems}
  selectedId={activeTab}
  onChange={setActiveTab}
  onKeyDown={(e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      // 좌우 화살표로 탭 간 이동
    }
    if (e.key === 'Home' || e.key === 'End') {
      // Home/End로 첫/마지막 탭으로 이동
    }
  }}
/>
```

### 스크린 리더 지원

```tsx
// 적절한 ARIA 속성 제공
<div role="tablist" aria-label="콘텐츠 네비게이션">
  <Tab
    items={tabItems}
    selectedId={activeTab}
    onChange={setActiveTab}
  />
</div>

<div role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
  {/* 탭 콘텐츠 */}
</div>
```

## Foundation 토큰 사용

### 색상 토큰

```css
/* 선택된 탭 텍스트 */
color: var(--foundation-foundation-color-primary-system01-1-rest);

/* 선택된 탭 테두리 */
border-bottom-color: var(--foundation-foundation-color-primary-system01-1-rest);

/* 비선택 탭 텍스트 */
color: var(--foundation-foundation-color-secondary-system01-1-rest);
```

### 크기 토큰

```css
/* 탭 높이 */
min-height: var(--foundation-foundation-sizing-xxl); /* lg: 48px */
min-height: var(--foundation-foundation-sizing-xl); /* md: 40px */

/* 패딩 */
padding: var(--foundation-foundation-spacing-lg); /* lg */
padding: var(--foundation-foundation-spacing-md); /* md */
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확하고 간결한 탭 라벨 사용
- 관련된 콘텐츠끼리 그룹화
- 기본 선택 탭 제공
- 적절한 아이콘 사용

✅ **적절한 사용 예시**
```tsx
// 명확한 라벨
<Tab items={[
  { id: 'overview', label: '개요' },
  { id: 'details', label: '상세정보' }
]} />

// 아이콘과 함께
<Tab items={[
  { id: 'users', label: '사용자', icon: 'PersonIcon' },
  { id: 'settings', label: '설정', icon: 'SettingsIcon' }
]} />
```

### 주의사항

❌ **DON'T**
- 너무 많은 탭 사용 (7개 이하 권장)
- 불명확한 라벨
- 일관성 없는 아이콘 사용
- 접근성 속성 누락

## 관련 컴포넌트

- **SegmentButton**: 관련 옵션 그룹화
- **Button**: 탭 버튼 기능
- **Text**: 탭 라벨
- **Icon**: 탭 아이콘
- **Surface**: 탭 배경 및 상태

## 참고 자료

- [ARIA Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [Material Design Tabs](https://material.io/components/tabs)
- [접근 가능한 탭](https://inclusive-components.design/tabbed-interfaces/) 