# Lumir Design System Next.js 통합 가이드

## 프로젝트 개요
- **프로젝트**: Food Map Application (Next.js 15.3.3)
- **적용 시스템**: Lumir Design System-02 (Modern & Friendly - 보라색 테마)
- **목표**: 기존 커스텀 스타일을 Lumir Design System으로 점진적 교체

## 1. 패키지 설치

```bash
npm install lumir-design-system-shared lumir-design-system-02
```

### 설치된 패키지 구조
- `lumir-design-system-shared`: 기본 토큰과 프리미티브 (629개 foundation 토큰)
- `lumir-design-system-02`: System-02 테마 (Modern & Friendly, 보라색 계열)

## 2. CSS 임포트 설정

### ❌ 잘못된 방법 - globals.css에서 직접 임포트
```css
/* globals.css - 이렇게 하면 안됨 */
@import "lumir-design-system-shared/dist/styles.css";
@import "lumir-design-system-02/dist/styles.css";
```

**문제점**: 
- 기존 CSS와 중복/충돌 발생
- 경로 오류 (exports 설정과 맞지 않음)

### ✅ 올바른 방법 - layout.tsx에서 패키지 exports 경로 사용

```typescript
// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Lumir Design System CSS 임포트 (exports 경로 사용)
import "lumir-design-system-shared/foundation-tokens";
import "lumir-design-system-02/styles";
import "lumir-design-system-02/tokens";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-theme="light">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

## 3. 트러블슈팅

### 문제 1: 모듈을 찾을 수 없음
```
Module not found: Can't resolve 'lumir-design-system-02/dist/styles.css'
```

**원인**: 직접 경로 대신 package.json의 exports 설정을 사용해야 함

**해결책**: 각 패키지의 package.json에서 exports 확인
```json
// lumir-design-system-02/package.json
{
  "exports": {
    "./styles": "./dist/styles.css",
    "./tokens": "./dist/css/tokens.css"
  }
}

// lumir-design-system-shared/package.json  
{
  "exports": {
    "./foundation-tokens": "./dist/css/foundation-tokens.css"
  }
}
```

### 문제 2: 스타일이 적용되지 않음 (radius만 적용)
**원인**: 
1. `data-theme` 속성 누락
2. CSS 토큰 파일 누락

**해결책**:
1. HTML 태그에 `data-theme="light"` 추가
2. 모든 필요한 CSS 파일 임포트 확인

### 문제 3: TypeScript 타입 오류
```typescript
// ❌ 잘못된 props
<Button variant="outline" colorScheme="error">

// ✅ 올바른 props  
<Button variant="outlined" colorScheme="primary">
```

**System-02 Button 지원 props**:
- `variant`: "filled" | "outlined" | "ghost"
- `colorScheme`: "primary" | "secondary" | "cta"

## 4. 올바른 임포트 경로 정리

### CSS 임포트 순서 (중요!)
```typescript
// 1. 기본 foundation 토큰
import "lumir-design-system-shared/foundation-tokens";

// 2. 컴포넌트 스타일
import "lumir-design-system-02/styles";

// 3. 테마 토큰
import "lumir-design-system-02/tokens";
```

### 컴포넌트 임포트
```typescript
import { Button, TextDisplay, Card, Field } from "lumir-design-system-02";
```

## 5. 실제 적용 사례

### Before (기존 코드)
```typescript
<button
  onClick={() => setFloor(1)}
  style={{
    padding: "8px 16px",
    background: floor === 1 ? "#2563eb" : "#f8f9fa",
    color: floor === 1 ? "#fff" : "#2563eb",
    border: "1px solid #2563eb",
    borderRadius: "6px",
    cursor: "pointer",
  }}
>
  1층
</button>
```

### After (Lumir Design System 적용)
```typescript
<Button
  variant={floor === 1 ? "filled" : "outlined"}
  colorScheme="primary"
  onClick={() => setFloor(1)}
>
  1층
</Button>
```

## 6. 핵심 포인트

### ✅ Do's
1. **layout.tsx에서 CSS 임포트**: globals.css 충돌 방지
2. **exports 경로 사용**: package.json의 정의된 경로 사용
3. **data-theme 설정**: 테마 토큰 활성화를 위해 필수
4. **점진적 교체**: 한 번에 모든 컴포넌트를 바꾸지 말고 단계별로 진행

### ❌ Don'ts  
1. **직접 경로 사용 금지**: `/dist/styles.css` 같은 직접 경로 사용 안함
2. **globals.css 임포트 금지**: 기존 스타일과 충돌 위험
3. **exports 없는 파일 임포트**: shared 패키지의 styles.css 같은 파일

## 7. 검증 방법

1. **개발 서버 실행**: `npm run dev`
2. **브라우저 개발자 도구**: CSS 변수 확인
3. **컴포넌트 스타일**: 색상, radius 등 정상 적용 확인

## 8. 다음 단계

1. **Step 1 완료**: Button 컴포넌트 교체 ✅
2. **Step 2 예정**: TextDisplay 컴포넌트 교체
3. **Step 3 예정**: Field 컴포넌트 교체  
4. **Step 4 예정**: Card 컴포넌트 교체
5. **Step 5 예정**: 최종 통합 및 정리

## 9. 컴포넌트 한계점 및 개선 사항

### 9.1 프리미티브 컴포넌트 (Shared) 한계점

#### Frame 컴포넌트
**한계점:**
- 반응형 Grid 속성 지원 부족
- `gridTemplateColumns` 반응형 객체 미지원
- 복잡한 레이아웃 구성 시 한계
- **브레이크포인트별 열 변경 불가능** (예: 모바일 1열 → 태블릿 2열 → 데스크톱 3열)
- **Flexbox wrap 제어 한계** (아이템 개수에 따른 자동 줄바꿈 어려움)

**현재 문제:**
```typescript
// ❌ 작동하지 않음 - 브레이크포인트별 열 변경
<Frame
  display="grid"
  gridTemplateColumns={{
    mobile: "1fr",
    tablet: "1fr 1fr",
    desktop: "1fr 1fr 1fr"
  }}
/>

// ❌ 작동하지 않음 - 반응형 Flexbox wrap
<Frame
  display="flex"
  wrap={{
    mobile: "wrap",
    desktop: "nowrap"
  }}
  justify={{
    mobile: "center",
    desktop: "space-between"
  }}
/>
```

**개선 필요 사항:**
- 반응형 Grid 속성 완전 지원
- CSS Grid 고급 기능 (auto-fit, minmax, repeat) 지원
- 브레이크포인트별 레이아웃 제어 강화
- **Flexbox wrap 반응형 제어**
- **Container-based 레이아웃 변경**

#### Sizing 컴포넌트
**한계점:**
- 반응형 객체 지원 제한적
- 일부 속성만 반응형 지원

**개선 필요 사항:**
- 모든 크기 관련 속성의 반응형 지원
- 컨테이너 쿼리 지원

### 9.2 컴파운드 컴포넌트 (System-02) 한계점

#### Card 컴포넌트
**한계점:**
- `imageHeight` 속성이 반응형 객체 미지원
- 이미지 반응형 제어 불가능
- 레이아웃 커스터마이징 제한
- **카드 너비 최대값 제한** (일정 화면 너비 이상에서 더 이상 늘어나지 않음)
- **내부 요소 비율 고정** (텍스트/이미지 영역 비율 조정 불가)

**현재 문제:**
```typescript
// ❌ 작동하지 않음 - 반응형 이미지 높이
<Card
  imageHeight={{
    mobile: "120px",
    tablet: "150px",
    desktop: "200px"
  }}
/>

// ❌ 카드 너비 제한 문제
<div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
  <Card width="100%" /> {/* 실제로는 최대 너비 제한됨 */}
</div>

// ❌ 내부 레이아웃 비율 조정 불가
<Card
  imageRatio="3:2"  // 지원하지 않음
  contentPadding="sm"  // 지원하지 않음
/>
```

**개선 필요 사항:**
- 모든 속성의 반응형 객체 지원
- 이미지 반응형 제어 강화
- 레이아웃 변형 옵션 추가
- **카드 최대 너비 제한 해제 옵션**
- **내부 요소 비율 커스터마이징**
- **컨테이너 크기에 따른 자동 조정**

#### SegmentButton 컴포넌트
**한계점:**
- 반응형 크기 조정 부족
- 모바일에서 버튼 크기 제어 어려움

**개선 필요 사항:**
- 반응형 size 속성 지원
- 모바일 터치 친화적 크기 자동 조정

### 9.3 전체 시스템 개선 사항

#### 1. 반응형 시스템 통합
**현재 상황:**
- 프리미티브는 일부 반응형 지원
- 컴파운드 컴포넌트는 반응형 제한적
- 일관성 부족

**개선 방향:**
```typescript
// 목표: 모든 컴포넌트에서 반응형 지원
interface ResponsiveProps<T> {
  mobile?: T;
  tablet?: T;
  desktop?: T;
  desktopL?: T;
  desktopXL?: T;
}

// 예시
<Card
  imageHeight={{
    mobile: "120px",
    desktop: "200px"
  }}
  size={{
    mobile: "sm",
    desktop: "md"
  }}
/>
```

#### 2. 레이아웃 시스템 강화
**필요한 기능:**
- CSS Grid 완전 지원
- Container Queries 지원
- 복잡한 레이아웃 패턴 지원

**제안:**
```typescript
<Frame
  display="grid"
  gridTemplate={{
    mobile: "1fr",
    tablet: "1fr 1fr",
    desktop: "repeat(auto-fit, minmax(300px, 1fr))"
  }}
  containerQuery={{
    minWidth: "600px",
    gridTemplateColumns: "1fr 1fr"
  }}
/>
```

#### 3. 컴포넌트 API 일관성
**현재 문제:**
- 일부 컴포넌트만 반응형 지원
- 속성명 불일치
- TypeScript 타입 지원 부족

**개선 방향:**
- 모든 컴포넌트 반응형 지원 표준화
- 속성명 일관성 확보
- 완전한 TypeScript 지원

### 9.4 실제 프로젝트에서의 해결책

**현재 적용한 우회 방법:**
1. **직접 CSS 사용**: 복잡한 레이아웃은 인라인 스타일로 해결
2. **하이브리드 접근**: 프리미티브 + 커스텀 CSS 조합
3. **컴포넌트 래핑**: 기존 컴포넌트를 래핑하여 기능 확장

**실제 문제 사례와 해결책:**

#### 사례 1: 반응형 카드 그리드
**문제**: 모바일 2열 → 태블릿 2열 → 데스크톱 3열 불가능
```typescript
// ❌ Frame으로 시도했으나 실패
<Frame
  display="grid"
  gridTemplateColumns={{
    mobile: "1fr 1fr",
    desktop: "1fr 1fr 1fr"
  }}
/>

// ✅ 직접 CSS로 해결
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",  // 고정 2열로 타협
    gap: "12px"
  }}
>
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

#### 사례 2: 카드 너비 제한 문제
**문제**: 큰 화면에서 카드가 일정 크기 이상 늘어나지 않음
```typescript
// ❌ Card 컴포넌트 자체 제한
<Card width="100%" />  // 실제로는 max-width 제한됨

// ✅ 외부 컨테이너로 강제 조정
<div style={{ width: "100%", minWidth: "250px" }}>
  <Card width="100%" />
</div>
```

#### 사례 3: Flexbox wrap 제어 불가
**문제**: 아이템 개수에 따른 자동 줄바꿈 제어 어려움
```typescript
// ❌ Frame wrap 반응형 미지원
<Frame display="flex" wrap="wrap">
  {/* 반응형 wrap 제어 불가 */}
</Frame>

// ✅ CSS Flexbox 직접 사용
<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    justifyContent: window.innerWidth < 768 ? "center" : "flex-start"
  }}
>
  {items.map(item => <SegmentButton.Item key={item.id} />)}
</div>
```

**예시:**
```typescript
// 프리미티브 한계로 인한 직접 CSS 사용
<div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px"
  }}
>
  {items.map(item => (
    <Card key={item.id} {...item} />
  ))}
</div>
```

### 9.5 권장 사항

#### 단기 개선 (v1.1)
1. Card 컴포넌트 imageHeight 반응형 지원
2. Frame 컴포넌트 기본 Grid 반응형 지원
3. 주요 속성들의 ResponsiveOrSingle 타입 적용
4. **Card 컴포넌트 최대 너비 제한 해제 옵션**
5. **Frame wrap 속성 반응형 지원**

#### 중기 개선 (v1.2)
1. 전체 컴포넌트 반응형 시스템 통합
2. Container Queries 지원
3. 레이아웃 패턴 프리셋 제공
4. **브레이크포인트별 열 변경 완전 지원**
5. **auto-fit, minmax 등 고급 Grid 기능**
6. **Flexbox wrap/justify 반응형 제어**

#### 장기 개선 (v2.0)
1. 완전한 반응형 디자인 시스템 구축
2. 고급 레이아웃 기능 지원
3. 개발자 경험 향상 도구 제공
4. **Container-based 레이아웃 시스템**
5. **자동 레이아웃 최적화 (AI 기반)**
6. **실시간 반응형 미리보기 도구**

---

**작성일**: 2024년  
**프로젝트**: Food Map Application  
**적용 시스템**: Lumir Design System-02  
**통합 상태**: 90% 완료 (반응형 한계로 인한 일부 커스텀 CSS 사용) 