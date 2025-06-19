---
title: 'Menu - System 01'
description: 'Professional & Clean 테마의 메뉴 헤더 컴포넌트'
date: '2024-12-28'
category: 'System-01 Components'
tags: ['Menu', 'Navigation', 'Header', 'Accordion', 'System-01', 'Professional']
version: '1.0.0'
status: 'stable'
---

# Menu - System 01

System-01의 Menu 컴포넌트는 Professional & Clean 테마에 최적화된 메뉴 헤더입니다. GitHub, 백오피스 환경에서 사용되는 아코디언이나 GNB 메뉴에서 활용할 수 있는 클릭 가능한 헤더 역할을 합니다.

## 개요

Menu 컴포넌트는 메뉴의 헤더 역할을 하는 컴파운드 컴포넌트로, Surface, Frame, Text, Icon, Button 프리미티브를 조합하여 확장/축소 기능이 있는 인터랙티브한 메뉴 헤더를 제공합니다.

### 핵심 특징

- **3가지 크기**: md(32px), lg(36px), xlg(40px)
- **6가지 상태**: default, hovered, pressed, focused, selected, disabled
- **아이콘 지원**: 좌측, 우측 아이콘 배치
- **확장/축소**: Chevron 버튼으로 아코디언 기능
- **접근성**: WCAG 2.1 AA 준수 키보드 내비게이션
- **프리미티브 조합**: Surface + Frame + Text + Icon + Button

## Props 인터페이스

```typescript
interface MenuHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'> {
  // 크기 설정
  size?: 'md' | 'lg' | 'xlg';
  
  // 상태
  state?: 'default' | 'hovered' | 'pressed' | 'focused' | 'selected' | 'disabled';
  disabled?: boolean;
  
  // 내용
  children: React.ReactNode;
  
  // 아이콘
  leftIcon?: IconName;
  rightIcon?: IconName;
  
  // 확장/축소 기능
  expanded?: boolean;
  showChevron?: boolean;
  
  // 이벤트 핸들러
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
```

## 기본 사용법

### 기본 메뉴 헤더

```tsx
import { MenuHeader } from 'lumir-design-system-01';

function BasicMenu() {
  return (
    <MenuHeader>
      메뉴 헤더
    </MenuHeader>
  );
}
```

### 아이콘이 있는 메뉴

```tsx
function IconMenu() {
  return (
    <MenuHeader 
      leftIcon="LineIconsFolderFolderIcon"
      rightIcon="LineIconsStarOutlinedIcon"
    >
      문서 폴더
    </MenuHeader>
  );
}
```

### 클릭 가능한 메뉴

```tsx
function ClickableMenu() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <MenuHeader 
      leftIcon="LineIconsSettingsSetting1Icon"
      expanded={expanded}
      onClick={() => setExpanded(!expanded)}
    >
      설정
    </MenuHeader>
  );
}
```

## 크기 변형

### 작은 크기 (md)

```tsx
function SmallMenu() {
  return (
    <MenuHeader 
      size="md" 
      leftIcon="LineIconsFolderFolderIcon"
    >
      Small Menu
    </MenuHeader>
  );
}
```

### 중간 크기 (lg, 기본)

```tsx
function MediumMenu() {
  return (
    <MenuHeader 
      size="lg" 
      leftIcon="LineIconsFolderFolderIcon"
    >
      Medium Menu
    </MenuHeader>
  );
}
```

### 큰 크기 (xlg)

```tsx
function LargeMenu() {
  return (
    <MenuHeader 
      size="xlg" 
      leftIcon="LineIconsFolderFolderIcon"
    >
      Large Menu
    </MenuHeader>
  );
}
```

## 상태 변형

### 기본 상태

```tsx
function DefaultState() {
  return (
    <MenuHeader state="default">
      기본 상태
    </MenuHeader>
  );
}
```

### 선택된 상태

```tsx
function SelectedState() {
  return (
    <MenuHeader 
      state="selected" 
      leftIcon="LineIconsSettingsSetting1Icon"
    >
      선택된 메뉴
    </MenuHeader>
  );
}
```

### 비활성화 상태

```tsx
function DisabledState() {
  return (
    <MenuHeader 
      state="disabled" 
      disabled
      leftIcon="LineIconsPersonPersonIcon"
    >
      비활성화된 메뉴
    </MenuHeader>
  );
}
```

### 호버/포커스 상태

```tsx
function InteractionStates() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <MenuHeader state="hovered">호버 상태</MenuHeader>
      <MenuHeader state="pressed">눌림 상태</MenuHeader>
      <MenuHeader state="focused">포커스 상태</MenuHeader>
    </div>
  );
}
```

## 고급 사용 예제

### 아코디언 메뉴

```tsx
function AccordionMenu() {
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);
  
  const menuItems = [
    { id: 'documents', label: '문서', icon: 'LineIconsFolderFolderIcon' },
    { id: 'settings', label: '설정', icon: 'LineIconsSettingsSetting1Icon' },
    { id: 'users', label: '사용자 관리', icon: 'LineIconsPersonPersonIcon' },
  ];
  
  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuId)
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };
  
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
      {menuItems.map(item => (
        <div key={item.id}>
          <MenuHeader
            leftIcon={item.icon as any}
            expanded={expandedMenus.includes(item.id)}
            onClick={() => toggleMenu(item.id)}
          >
            {item.label}
          </MenuHeader>
          
          {expandedMenus.includes(item.id) && (
            <div style={{ 
              padding: '16px',
              paddingLeft: '48px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
              marginTop: '4px'
            }}>
              <p>{item.label} 하위 메뉴 내용</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
```

### 사이드바 내비게이션

```tsx
function SidebarNavigation() {
  const [selectedMenu, setSelectedMenu] = useState('dashboard');
  
  const navigationItems = [
    { id: 'dashboard', label: '대시보드', icon: 'LineIconsBarChart1Icon' },
    { id: 'projects', label: '프로젝트', icon: 'LineIconsFolderFolderIcon' },
    { id: 'tasks', label: '작업', icon: 'LineIconsCheckmarkCheckmarkIcon' },
    { id: 'reports', label: '보고서', icon: 'LineIconsFileFileIcon' },
    { id: 'settings', label: '설정', icon: 'LineIconsSettingsSetting1Icon' },
  ];
  
  return (
    <div style={{ 
      width: '250px',
      backgroundColor: '#fff',
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '8px'
    }}>
      <h3 style={{ padding: '16px', margin: 0, fontSize: '18px' }}>내비게이션</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {navigationItems.map(item => (
          <MenuHeader
            key={item.id}
            leftIcon={item.icon as any}
            state={selectedMenu === item.id ? 'selected' : 'default'}
            showChevron={false}
            onClick={() => setSelectedMenu(item.id)}
          >
            {item.label}
          </MenuHeader>
        ))}
      </div>
    </div>
  );
}
```

### 다단계 메뉴

```tsx
function MultiLevelMenu() {
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['main']);
  const [selectedItem, setSelectedItem] = useState('');
  
  const menuStructure = {
    main: {
      label: '메인 메뉴',
      icon: 'LineIconsMenuMenu2Icon',
      children: ['sub1', 'sub2', 'sub3']
    },
    sub1: {
      label: '서브 메뉴 1',
      icon: 'LineIconsFolderFolderIcon',
      children: ['item1', 'item2']
    },
    sub2: {
      label: '서브 메뉴 2',
      icon: 'LineIconsSettingsSetting1Icon',
      children: ['item3', 'item4']
    },
    sub3: {
      label: '서브 메뉴 3',
      icon: 'LineIconsPersonPersonIcon',
      children: []
    },
    item1: { label: '항목 1', icon: 'LineIconsFileFileIcon' },
    item2: { label: '항목 2', icon: 'LineIconsFileFileIcon' },
    item3: { label: '항목 3', icon: 'LineIconsFileFileIcon' },
    item4: { label: '항목 4', icon: 'LineIconsFileFileIcon' },
  };
  
  const toggleMenu = (menuId: string) => {
    setExpandedMenus(prev => 
      prev.includes(menuId)
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };
  
  const selectItem = (itemId: string) => {
    setSelectedItem(itemId);
  };
  
  const renderMenu = (menuId: string, level = 0) => {
    const menu = menuStructure[menuId];
    if (!menu) return null;
    
    const hasChildren = menu.children && menu.children.length > 0;
    const isExpanded = expandedMenus.includes(menuId);
    const isSelected = selectedItem === menuId;
    
    return (
      <div key={menuId} style={{ marginLeft: `${level * 20}px` }}>
        <MenuHeader
          size="md"
          leftIcon={menu.icon as any}
          state={isSelected ? 'selected' : 'default'}
          expanded={isExpanded}
          showChevron={hasChildren}
          onClick={() => {
            if (hasChildren) {
              toggleMenu(menuId);
            } else {
              selectItem(menuId);
            }
          }}
        >
          {menu.label}
        </MenuHeader>
        
        {hasChildren && isExpanded && (
          <div style={{ marginTop: '4px' }}>
            {menu.children?.map(childId => renderMenu(childId, level + 1))}
          </div>
        )}
      </div>
    );
  };
  
  return (
    <div style={{ width: '300px' }}>
      {renderMenu('main')}
    </div>
  );
}
```

### 컨텍스트 메뉴

```tsx
function ContextMenu() {
  const [contextMenu, setContextMenu] = useState<{x: number, y: number} | null>(null);
  
  const menuItems = [
    { id: 'copy', label: '복사', icon: 'LineIconsCopyIcon' },
    { id: 'paste', label: '붙여넣기', icon: 'LineIconsPasteIcon' },
    { id: 'delete', label: '삭제', icon: 'LineIconsTrash1Icon' },
  ];
  
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };
  
  const handleMenuClick = (action: string) => {
    console.log(`${action} 실행`);
    setContextMenu(null);
  };
  
  return (
    <div>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px dashed #ccc',
          cursor: 'pointer'
        }}
        onContextMenu={handleContextMenu}
        onClick={() => setContextMenu(null)}
      >
        우클릭하여 메뉴 열기
      </div>
      
      {contextMenu && (
        <div
          style={{
            position: 'fixed',
            top: contextMenu.y,
            left: contextMenu.x,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '4px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            zIndex: 1000
          }}
        >
          {menuItems.map(item => (
            <MenuHeader
              key={item.id}
              size="sm"
              leftIcon={item.icon as any}
              showChevron={false}
              onClick={() => handleMenuClick(item.id)}
              style={{ minWidth: '120px' }}
            >
              {item.label}
            </MenuHeader>
          ))}
        </div>
      )}
    </div>
  );
}
```

### 브레드크럼 메뉴

```tsx
function BreadcrumbMenu() {
  const [path, setPath] = useState(['Home', 'Documents', 'Projects']);
  
  const navigateToLevel = (index: number) => {
    setPath(path.slice(0, index + 1));
  };
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {path.map((item, index) => (
        <React.Fragment key={index}>
          <MenuHeader
            size="sm"
            showChevron={false}
            state={index === path.length - 1 ? 'selected' : 'default'}
            onClick={() => navigateToLevel(index)}
            style={{ minWidth: 'auto' }}
          >
            {item}
          </MenuHeader>
          
          {index < path.length - 1 && (
            <span style={{ color: '#ccc' }}>></span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
```

## System-01 디자인 특성

### 색상 시스템

- **기본 상태**: 배경색 없음, `secondary-system01-1-rest` 텍스트
- **호버 상태**: `secondary-system01-1-hovered` 배경
- **눌림 상태**: `secondary-system01-1-pressed` 배경
- **선택 상태**: 배경색 없음, `primary-system01-1-rest` 텍스트
- **포커스 상태**: `focused` 테두리 색상
- **비활성화**: `secondary-system01-1-disabled` 텍스트

### 형태적 특징

- **Border Radius**: `sm` 토큰 (작은 둥근 모서리)
- **높이**: md(32px), lg(36px), xlg(40px)
- **패딩**: 좌우 `sm`, 상하 `xs`
- **아이콘 크기**: Button 컴포넌트와 일치

### 상호작용 패턴

- **클릭**: 메뉴 확장/축소 또는 선택
- **호버**: 배경색 변화
- **포커스**: 테두리 표시
- **Chevron**: 확장/축소 상태 표시

## 접근성 (WCAG 2.1 AA)

### 키보드 접근성

```tsx
// 키보드 내비게이션 지원
<MenuHeader
  onClick={(e) => {}}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      // 메뉴 토글
    }
    if (e.key === 'ArrowDown') {
      // 다음 메뉴로 이동
    }
    if (e.key === 'ArrowUp') {
      // 이전 메뉴로 이동
    }
  }}
>
  키보드 접근 가능한 메뉴
</MenuHeader>
```

### 스크린 리더 지원

```tsx
// 적절한 ARIA 속성 제공
<MenuHeader
  role="button"
  aria-expanded={expanded}
  aria-disabled={disabled}
  aria-label="문서 폴더 메뉴"
  leftIcon="LineIconsFolderFolderIcon"
>
  문서 폴더
</MenuHeader>

// 아코디언 구조
<MenuHeader
  role="button"
  aria-expanded={expanded}
  aria-controls="submenu-1"
  onClick={toggleSubmenu}
>
  메인 메뉴
</MenuHeader>
<div id="submenu-1" role="region" aria-labelledby="main-menu">
  {/* 하위 메뉴 내용 */}
</div>
```

### 색상 대비

- **일반 텍스트**: 4.5:1 이상 (WCAG AA)
- **선택된 메뉴**: 4.5:1 이상
- **비활성화 메뉴**: 3:1 이상
- **포커스 인디케이터**: 3:1 이상

### 터치 접근성

- **최소 터치 영역**: 44×44px
- **적절한 간격**: 메뉴 항목 간 충분한 간격

## Foundation 토큰 사용

### 색상 토큰

```css
/* 호버 배경 */
background-color: var(--foundation-foundation-color-secondary-system01-1-hovered);

/* 눌림 배경 */
background-color: var(--foundation-foundation-color-secondary-system01-1-pressed);

/* 선택된 텍스트 */
color: var(--foundation-foundation-color-primary-system01-1-rest);

/* 포커스 테두리 */
border-color: var(--foundation-foundation-color-focused);
```

### 크기 토큰

```css
/* 높이 */
height: var(--foundation-foundation-sizing-lg); /* md */
height: var(--foundation-foundation-sizing-xl); /* lg */
height: var(--foundation-foundation-sizing-xxl); /* xlg */

/* 패딩 */
padding: var(--foundation-foundation-spacing-xs) var(--foundation-foundation-spacing-sm);

/* 간격 */
gap: var(--foundation-foundation-spacing-xs);
```

### 모서리 토큰

```css
/* 메뉴 헤더 모서리 */
border-radius: var(--foundation-foundation-border-radius-sm);
```

## 성능 최적화

### 메모이제이션

```tsx
import { memo } from 'react';

const OptimizedMenuHeader = memo(MenuHeader);

// 불필요한 리렌더링 방지
function MenuList({ items }) {
  return (
    <div>
      {items.map(item => (
        <OptimizedMenuHeader key={item.id} leftIcon={item.icon}>
          {item.label}
        </OptimizedMenuHeader>
      ))}
    </div>
  );
}
```

### 가상화 (많은 메뉴 항목)

```tsx
import { FixedSizeList as List } from 'react-window';

function VirtualizedMenu({ menuItems }) {
  const MenuRow = ({ index, style }) => (
    <div style={style}>
      <MenuHeader leftIcon={menuItems[index].icon}>
        {menuItems[index].label}
      </MenuHeader>
    </div>
  );
  
  return (
    <List
      height={400}
      itemCount={menuItems.length}
      itemSize={40}
    >
      {MenuRow}
    </List>
  );
}
```

## 사용 가이드라인

### 권장사항

✅ **DO**
- 명확하고 간결한 메뉴 라벨 사용
- 적절한 아이콘으로 메뉴 의미 강화
- 일관된 메뉴 구조 유지
- 키보드 접근성 고려
- 선택 상태를 명확히 표시

✅ **적절한 사용 예시**
```tsx
// 아코디언 메뉴
<MenuHeader 
  leftIcon="LineIconsFolderFolderIcon" 
  expanded={expanded}
  onClick={toggle}
>
  문서 폴더
</MenuHeader>

// 내비게이션 메뉴
<MenuHeader 
  leftIcon="LineIconsSettingsSetting1Icon"
  state="selected"
  showChevron={false}
>
  설정
</MenuHeader>
```

### 주의사항

❌ **DON'T**
- 너무 긴 메뉴 라벨 사용
- 불명확한 아이콘 사용
- 일관성 없는 메뉴 구조
- 과도한 중첩 메뉴
- 접근성 속성 누락

❌ **피해야 할 예시**
```tsx
// 너무 긴 라벨
<MenuHeader>
  매우 긴 메뉴 라벨로 인해 레이아웃이 깨지는 경우
</MenuHeader>

// 불명확한 상태
<MenuHeader expanded={undefined}>
  상태 불명확
</MenuHeader>
```

### 크기 선택 가이드

- **md**: 공간이 제한적인 사이드바
- **lg**: 일반적인 내비게이션 (가장 많이 사용)
- **xlg**: 큰 화면의 메인 메뉴

### 사용 시나리오별 가이드

- **아코디언**: `expanded`와 `showChevron` 사용
- **내비게이션**: `showChevron={false}`, `state="selected"`
- **컨텍스트 메뉴**: `size="sm"`, `showChevron={false}`

## 관련 컴포넌트

- **Button**: Chevron 버튼으로 사용
- **Text**: 메뉴 라벨 텍스트
- **Icon**: 좌우 아이콘 표시
- **Surface**: 메뉴 헤더 배경
- **Frame**: 레이아웃 구성

## 참고 자료

- [ARIA Menu Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu/)
- [Material Design Navigation](https://material.io/components/navigation-drawer)
- [접근 가능한 메뉴](https://inclusive-components.design/menus-menu-buttons/) 