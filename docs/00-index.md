---
title: "Lumir 디자인 시스템 문서 목차"
category: "메타"
status: "활성"
last_updated: "2024-01-15"
---

# Lumir 디자인 시스템 완전 가이드

## 📋 개요

Lumir 디자인 시스템은 모노레포 구조의 계층적 디자인 시스템으로, **프리미티브(Primitives)** → **컴파운드(Compounds)** 흐름을 통해 체계적인 컴포넌트 구조를 제공합니다.

## 🏗 시스템 구조

```
lumir-design-system/
├── packages/shared/           # 공통 프리미티브 컴포넌트 & Foundation 토큰
├── packages/system-01/        # Professional & Clean 테마
├── packages/system-02/        # Friendly & Bright 테마
├── packages/system-03/        # Modern & Software 테마 (계획됨)
├── packages/system-04/        # Aerospace Control 테마 (계획됨)
└── packages/system-05/        # Aerospace Dashboard 테마 (계획됨)
```

## 📚 문서 구조

### 01. 핵심 시스템 (Core)
- [01-개요](./01-core/01-개요.md) - 시스템 철학, 원칙, 구조
- [02-토큰시스템](./01-core/02-토큰시스템.md) - Foundation 및 Semantic 토큰 체계
- [03-디자인규칙](./01-core/03-디자인규칙.md) - 절대 준수사항, 코딩 규칙

### 02. 프리미티브 컴포넌트 (Primitives)
모든 시스템에서 공통으로 사용되는 8개의 기본 구성 요소

- [00-개요](./02-primitives/00-개요.md) - 프리미티브 원칙 및 조합법
- [01-Text](./02-primitives/01-Text.md) - 타이포그래피 컴포넌트
- [02-Icon](./02-primitives/02-Icon.md) - 아이콘 컴포넌트 (293개 아이콘)
- [03-Frame](./02-primitives/03-Frame.md) - 레이아웃 및 구조 컴포넌트
- [04-Surface](./02-primitives/04-Surface.md) - 색상, 그림자, 테두리 컴포넌트
- [05-Interactive](./02-primitives/05-Interactive.md) - 상호작용 처리 컴포넌트
- [06-Sizing](./02-primitives/06-Sizing.md) - 크기 및 비율 컴포넌트
- [07-Divider](./02-primitives/07-Divider.md) - 구분선 컴포넌트
- [08-Asterisk](./02-primitives/08-Asterisk.md) - 필수 입력 표시 컴포넌트

### 03. System-01 컴포넌트 (Professional & Clean)
GitHub, 백오피스, 엔터프라이즈 도구에 최적화된 15개 컴파운드 컴포넌트

- [00-개요](./03-system-01/00-개요.md) - System-01 특성 및 디자인 원칙
- [01-Button](./03-system-01/01-Button.md) - 액션 버튼 컴포넌트
- [02-Card](./03-system-01/02-Card.md) - 카드 레이아웃 컴포넌트
- [03-Tab](./03-system-01/03-Tab.md) - 탭 내비게이션 컴포넌트
- [04-SegmentButton](./03-system-01/04-SegmentButton.md) - 세그먼트 버튼 컴포넌트
- [05-TextDisplay](./03-system-01/05-TextDisplay.md) - 텍스트 디스플레이 컴포넌트
- [06-Badge](./03-system-01/06-Badge.md) - 뱃지 컴포넌트
- [07-Checkbox](./03-system-01/07-Checkbox.md) - 체크박스 컴포넌트
- [08-Radio](./03-system-01/08-Radio.md) - 라디오 버튼 컴포넌트
- [09-Field](./03-system-01/09-Field.md) - 입력 필드 컴포넌트
- [10-Link](./03-system-01/10-Link.md) - 링크 컴포넌트
- [11-Label](./03-system-01/11-Label.md) - 라벨 컴포넌트
- [12-Chip](./03-system-01/12-Chip.md) - 칩 컴포넌트
- [13-Menu](./03-system-01/13-Menu.md) - 메뉴 컴포넌트
- [14-OptionList](./03-system-01/14-OptionList.md) - 옵션 리스트 컴포넌트
- [15-ComboBox](./03-system-01/15-ComboBox.md) - 콤보박스 컴포넌트

### 04. System-02 컴포넌트 (Friendly & Bright)
커머스, 소비자 대상 서비스에 최적화된 15개 컴파운드 컴포넌트

- [00-개요](./04-system-02/00-개요.md) - System-02 특성 및 디자인 원칙
- *(System-01과 동일한 인터페이스, 다른 시각적 스타일)*

### 05. 활용 가이드 (Guides)
- [01-조합패턴](./05-guides/01-조합패턴.md) - 자주 사용되는 컴포넌트 조합 패턴
- [02-접근성](./05-guides/02-접근성.md) - WCAG 2.1 AA 기준 접근성 가이드
- [03-성능최적화](./05-guides/03-성능최적화.md) - 성능 최적화 및 베스트 프랙티스

## 🎯 빠른 시작

### 새로운 개발자를 위한 순서

1. **[시스템 개요](./01-core/01-개요.md)** - 전체 시스템 이해
2. **[디자인 규칙](./01-core/03-디자인규칙.md)** - 반드시 지켜야 할 규칙
3. **[프리미티브 개요](./02-primitives/00-개요.md)** - 기본 구성 요소 이해
4. **[조합 패턴](./05-guides/01-조합패턴.md)** - 실제 사용법 학습

### 컴포넌트 검색

#### 기능별 검색
- **텍스트 표시**: [Text](./02-primitives/01-Text.md), [TextDisplay](./03-system-01/05-TextDisplay.md), [Label](./03-system-01/11-Label.md)
- **사용자 입력**: [Field](./03-system-01/09-Field.md), [Checkbox](./03-system-01/07-Checkbox.md), [Radio](./03-system-01/08-Radio.md), [ComboBox](./03-system-01/15-ComboBox.md)
- **내비게이션**: [Button](./03-system-01/01-Button.md), [Link](./03-system-01/10-Link.md), [Tab](./03-system-01/03-Tab.md), [Menu](./03-system-01/13-Menu.md)
- **피드백**: [Badge](./03-system-01/06-Badge.md), [Chip](./03-system-01/12-Chip.md)
- **레이아웃**: [Frame](./02-primitives/03-Frame.md), [Surface](./02-primitives/04-Surface.md), [Card](./03-system-01/02-Card.md)

#### 시각적 속성별 검색
- **색상**: [Surface](./02-primitives/04-Surface.md), [토큰시스템](./01-core/02-토큰시스템.md)
- **간격**: [Frame](./02-primitives/03-Frame.md), [토큰시스템](./01-core/02-토큰시스템.md)
- **크기**: [Sizing](./02-primitives/06-Sizing.md), [토큰시스템](./01-core/02-토큰시스템.md)
- **상호작용**: [Interactive](./02-primitives/05-Interactive.md)

## 📊 현재 상태

| 컴포넌트 카테고리 | 상태 | 컴포넌트 수 | 완성도 |
|------------------|------|-----------|-------|
| 프리미티브 | ✅ 완료 | 8개 | 100% |
| System-01 | ✅ 완료 | 15개 | 100% |
| System-02 | ✅ 완료 | 15개 | 100% |
| System-03 | 🔄 계획됨 | 0개 | 0% |
| System-04 | 🔄 계획됨 | 0개 | 0% |
| System-05 | 🔄 계획됨 | 0개 | 0% |

## 🚨 중요 공지

> **주의**: 이 문서들은 context7 MCP를 통한 AI 질의응답 최적화를 위해 구조화되었습니다. 각 문서는 독립적으로 읽을 수 있도록 설계되었으며, 상호 참조를 통해 연결됩니다.

> **팁**: 특정 컴포넌트나 기능에 대한 질문이 있으시면, 해당 문서를 직접 참조하시거나 관련 키워드로 검색하세요.

## 📱 문의 및 지원

- **GitHub Issues**: 버그 리포트 및 기능 요청
- **Discord 채널**: 실시간 질의응답
- **문서 업데이트 요청**: 각 문서 하단의 "문서 개선 제안" 섹션 활용

---

*마지막 업데이트: 2024-01-15*  
*문서 버전: v1.0.0*  
*총 문서 수: 35개* 