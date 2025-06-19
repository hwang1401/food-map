---
title: 'Migration Guide'
description: '기존 프로젝트를 Lumir 디자인 시스템으로 마이그레이션하는 가이드'
date: '2024-12-28'
category: 'Guides'
tags: ['Migration', 'Legacy', 'Upgrade', 'Transition']
version: '1.0.0'
status: 'stable'
---

# Migration Guide

기존 프로젝트를 Lumir 디자인 시스템으로 점진적으로 마이그레이션하는 방법을 안내합니다.

## 🎯 마이그레이션 전략

### 단계별 접근법

1. **평가 단계**: 기존 시스템 분석 및 마이그레이션 계획 수립
2. **준비 단계**: Foundation 토큰 도입 및 기본 설정
3. **점진적 전환**: 컴포넌트별 단계적 교체
4. **최적화 단계**: 성능 및 접근성 개선
5. **완료 단계**: 레거시 코드 정리 및 문서화

### 마이그레이션 원칙

- **점진적 전환**: 한 번에 모든 것을 바꾸지 않고 단계적으로 진행
- **호환성 유지**: 기존 기능이 중단되지 않도록 보장
- **테스트 우선**: 각 단계마다 충분한 테스트 진행
- **문서화**: 변경 사항과 의사결정 과정 기록

## 📊 기존 시스템 평가

### 현황 분석 체크리스트

```typescript
// migration-assessment.ts
interface LegacySystemAssessment {
  ui: {
    framework: 'React' | 'Vue' | 'Angular' | 'Vanilla';
    version: string;
    componentLibrary?: string;
    cssFramework?: string;
  };
  styling: {
    approach: 'CSS' | 'SCSS' | 'CSS-in-JS' | 'CSS Modules';
    designTokens: boolean;
    themeSystem: boolean;
    responsiveDesign: boolean;
  };
  accessibility: {
    wcagCompliance: 'None' | 'Partial' | 'AA' | 'AAA';
    screenReaderTesting: boolean;
    keyboardNavigation: boolean;
  };
  components: {
    totalCount: number;
    customComponents: number;
    thirdPartyComponents: number;
    sharedComponents: number;
  };
  codebase: {
    linesOfCode: number;
    testCoverage: number;
    typescript: boolean;
    linting: boolean;
  };
}

// 평가 도구
export function assessLegacySystem(): LegacySystemAssessment {
  return {
    // 실제 프로젝트 분석 결과
  };
}
```

### 마이그레이션 복잡도 계산

```typescript
// migration-complexity.ts
interface MigrationComplexity {
  score: number; // 1-10 (10이 가장 복잡)
  factors: {
    componentCount: number;
    customStyling: number;
    thirdPartyDependencies: number;
    accessibilityGap: number;
    testCoverage: number;
  };
  estimatedEffort: {
    weeks: number;
    developers: number;
  };
}

export function calculateMigrationComplexity(
  assessment: LegacySystemAssessment
): MigrationComplexity {
  // 복잡도 계산 로직
  const factors = {
    componentCount: Math.min(assessment.components.totalCount / 50, 3),
    customStyling: assessment.styling.designTokens ? 1 : 3,
    thirdPartyDependencies: assessment.components.thirdPartyComponents / 10,
    accessibilityGap: assessment.accessibility.wcagCompliance === 'AA' ? 1 : 3,
    testCoverage: assessment.codebase.testCoverage < 50 ? 2 : 1
  };
  
  const score = Object.values(factors).reduce((sum, factor) => sum + factor, 0);
  
  return {
    score: Math.min(score, 10),
    factors,
    estimatedEffort: {
      weeks: Math.ceil(score * 2),
      developers: Math.ceil(score / 3)
    }
  };
}
```

## 🔧 단계별 마이그레이션

### 1단계: Foundation 토큰 도입

```css
/* 기존 CSS 변수를 Foundation 토큰으로 매핑 */
/* legacy-to-foundation-mapping.css */

/* 기존 변수 → Foundation 토큰 매핑 */
:root {
  /* 색상 매핑 */
  --primary-color: var(--foundation-foundation-color-blue-light-50);
  --secondary-color: var(--foundation-foundation-color-grey-light-50);
  --success-color: var(--foundation-foundation-color-green-light-50);
  --error-color: var(--foundation-foundation-color-red-light-50);
  --warning-color: var(--foundation-foundation-color-yellow-light-50);
  
  /* 간격 매핑 */
  --spacing-xs: var(--foundation-foundation-spacing-xs);
  --spacing-sm: var(--foundation-foundation-spacing-sm);
  --spacing-md: var(--foundation-foundation-spacing-md);
  --spacing-lg: var(--foundation-foundation-spacing-lg);
  --spacing-xl: var(--foundation-foundation-spacing-xl);
  
  /* 폰트 매핑 */
  --font-size-small: var(--foundation-foundation-font-fontsize-120);
  --font-size-medium: var(--foundation-foundation-font-fontsize-140);
  --font-size-large: var(--foundation-foundation-font-fontsize-160);
  
  /* 그림자 매핑 */
  --shadow-small: var(--foundation-foundation-shadow-sm);
  --shadow-medium: var(--foundation-foundation-shadow-md);
  --shadow-large: var(--foundation-foundation-shadow-lg);
}
```

### 2단계: 컴포넌트 점진적 교체

```tsx
// component-migration-strategy.tsx

// 1. 래퍼 컴포넌트로 시작
import { Button as LumirButton } from 'lumir-design-system-01';
import { LegacyButton } from './legacy/Button';

interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'text';
  color?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  // 기존 props 유지
  legacy?: boolean;
}

export function Button(props: ButtonProps) {
  const { legacy = false, ...restProps } = props;
  
  // 환경 변수나 feature flag로 제어
  const useLegacy = legacy || process.env.REACT_APP_USE_LEGACY_BUTTONS === 'true';
  
  if (useLegacy) {
    return <LegacyButton {...restProps} />;
  }
  
  return <LumirButton {...restProps} />;
}

// 2. 점진적 props 매핑
function mapLegacyProps(legacyProps: any): ButtonProps {
  return {
    variant: legacyProps.type === 'primary' ? 'filled' : 'outlined',
    color: legacyProps.theme === 'success' ? 'primary' : 'secondary',
    size: legacyProps.large ? 'lg' : 'md',
    children: legacyProps.label || legacyProps.children,
    onClick: legacyProps.onPress || legacyProps.onClick
  };
}
```

### 3단계: 스타일 시스템 통합

```scss
// migration-styles.scss

// 기존 SCSS 변수를 Foundation 토큰으로 점진적 교체
$primary-color: var(--foundation-foundation-color-blue-light-50) !default;
$secondary-color: var(--foundation-foundation-color-grey-light-50) !default;

// 기존 믹스인을 Foundation 토큰 기반으로 업데이트
@mixin button-style($variant: 'filled', $color: 'primary') {
  @if $variant == 'filled' {
    background-color: var(--foundation-foundation-color-#{$color}-light-50);
    color: var(--foundation-foundation-color-grey-light-0);
  } @else if $variant == 'outlined' {
    background-color: transparent;
    border: var(--foundation-foundation-border-width-1) solid var(--foundation-foundation-color-#{$color}-light-50);
    color: var(--foundation-foundation-color-#{$color}-light-50);
  }
  
  padding: var(--foundation-foundation-spacing-100) var(--foundation-foundation-spacing-200);
  border-radius: var(--foundation-foundation-border-radius-sm);
  font-size: var(--foundation-foundation-font-fontsize-140);
}

// 기존 클래스 유지하면서 새 토큰 적용
.legacy-button {
  @include button-style('filled', 'primary');
  
  &.secondary {
    @include button-style('outlined', 'secondary');
  }
  
  &.large {
    padding: var(--foundation-foundation-spacing-150) var(--foundation-foundation-spacing-300);
    font-size: var(--foundation-foundation-font-fontsize-160);
  }
}
```

## 🔄 자동화 도구

### 코드 변환 스크립트

```typescript
// migration-tools.ts
import * as ts from 'typescript';
import * as fs from 'fs';

// CSS 클래스명 변환
export function migrateCSSClasses(cssContent: string): string {
  const classMapping = {
    'btn-primary': 'lumir-button-filled-primary',
    'btn-secondary': 'lumir-button-outlined-secondary',
    'card-container': 'lumir-card-outlined',
    'input-field': 'lumir-field-outlined'
  };
  
  let result = cssContent;
  Object.entries(classMapping).forEach(([oldClass, newClass]) => {
    const regex = new RegExp(`\\.${oldClass}\\b`, 'g');
    result = result.replace(regex, `.${newClass}`);
  });
  
  return result;
}

// React 컴포넌트 import 변환
export function migrateImports(sourceFile: ts.SourceFile): ts.SourceFile {
  const transformer: ts.TransformerFactory<ts.SourceFile> = (context) => {
    return (rootNode) => {
      function visit(node: ts.Node): ts.Node {
        if (ts.isImportDeclaration(node)) {
          const moduleSpecifier = node.moduleSpecifier;
          if (ts.isStringLiteral(moduleSpecifier)) {
            // 기존 컴포넌트 라이브러리를 Lumir로 변경
            if (moduleSpecifier.text === '@legacy/components') {
              return ts.factory.updateImportDeclaration(
                node,
                node.decorators,
                node.modifiers,
                node.importClause,
                ts.factory.createStringLiteral('lumir-design-system-01')
              );
            }
          }
        }
        return ts.visitEachChild(node, visit, context);
      }
      return ts.visitNode(rootNode, visit);
    };
  };
  
  const result = ts.transform(sourceFile, [transformer]);
  return result.transformed[0];
}

// 자동 마이그레이션 실행
export async function runMigration(projectPath: string) {
  const files = await fs.promises.readdir(projectPath, { recursive: true });
  
  for (const file of files) {
    if (file.endsWith('.css') || file.endsWith('.scss')) {
      const content = await fs.promises.readFile(file, 'utf-8');
      const migrated = migrateCSSClasses(content);
      await fs.promises.writeFile(file, migrated);
    }
    
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = await fs.promises.readFile(file, 'utf-8');
      const sourceFile = ts.createSourceFile(file, content, ts.ScriptTarget.Latest);
      const migrated = migrateImports(sourceFile);
      const printer = ts.createPrinter();
      const result = printer.printFile(migrated);
      await fs.promises.writeFile(file, result);
    }
  }
}
```

### 마이그레이션 검증 도구

```typescript
// migration-validator.ts
interface MigrationValidationResult {
  isComplete: boolean;
  issues: {
    type: 'error' | 'warning' | 'info';
    message: string;
    file: string;
    line?: number;
  }[];
  progress: {
    totalComponents: number;
    migratedComponents: number;
    percentage: number;
  };
}

export async function validateMigration(projectPath: string): Promise<MigrationValidationResult> {
  const issues: MigrationValidationResult['issues'] = [];
  let totalComponents = 0;
  let migratedComponents = 0;
  
  // 1. Foundation 토큰 사용 검증
  const cssFiles = await findFiles(projectPath, /\.(css|scss)$/);
  for (const file of cssFiles) {
    const content = await fs.promises.readFile(file, 'utf-8');
    
    // 하드코딩된 색상 감지
    const hardcodedColors = content.match(/#[0-9a-fA-F]{3,6}/g);
    if (hardcodedColors) {
      issues.push({
        type: 'warning',
        message: `하드코딩된 색상 발견: ${hardcodedColors.join(', ')}`,
        file
      });
    }
    
    // Foundation 토큰 사용 확인
    const foundationTokens = content.match(/var\(--foundation-foundation-/g);
    if (foundationTokens) {
      migratedComponents++;
    }
    totalComponents++;
  }
  
  // 2. 컴포넌트 import 검증
  const tsFiles = await findFiles(projectPath, /\.(tsx|ts)$/);
  for (const file of tsFiles) {
    const content = await fs.promises.readFile(file, 'utf-8');
    
    // 레거시 import 감지
    const legacyImports = content.match(/from ['"]@legacy\/components['"]/g);
    if (legacyImports) {
      issues.push({
        type: 'error',
        message: '레거시 컴포넌트 import가 남아있습니다',
        file
      });
    }
    
    // Lumir 컴포넌트 import 확인
    const lumirImports = content.match(/from ['"]lumir-design-system-/g);
    if (lumirImports) {
      migratedComponents++;
    }
  }
  
  // 3. 접근성 검증
  for (const file of tsFiles) {
    const content = await fs.promises.readFile(file, 'utf-8');
    
    // aria-label 누락 검사
    const interactiveElements = content.match(/<(button|input|select)[^>]*>/g);
    if (interactiveElements) {
      interactiveElements.forEach(element => {
        if (!element.includes('aria-label') && !element.includes('aria-labelledby')) {
          issues.push({
            type: 'warning',
            message: '접근성 레이블이 누락된 인터랙티브 요소',
            file
          });
        }
      });
    }
  }
  
  const percentage = totalComponents > 0 ? (migratedComponents / totalComponents) * 100 : 0;
  
  return {
    isComplete: percentage === 100 && issues.filter(i => i.type === 'error').length === 0,
    issues,
    progress: {
      totalComponents,
      migratedComponents,
      percentage: Math.round(percentage)
    }
  };
}
```

## 📋 마이그레이션 체크리스트

### 준비 단계
- [ ] 기존 시스템 분석 완료
- [ ] 마이그레이션 계획 수립
- [ ] 개발 환경 설정
- [ ] Foundation 토큰 CSS 설치
- [ ] 기존 CSS 변수 매핑 테이블 작성

### 구현 단계
- [ ] Foundation 토큰 도입
- [ ] 래퍼 컴포넌트 생성
- [ ] 핵심 컴포넌트 마이그레이션 (Button, Input, Card)
- [ ] 레이아웃 컴포넌트 마이그레이션
- [ ] 복합 컴포넌트 마이그레이션
- [ ] 스타일 시스템 통합

### 테스트 단계
- [ ] 단위 테스트 업데이트
- [ ] 통합 테스트 실행
- [ ] 접근성 테스트 수행
- [ ] 시각적 회귀 테스트
- [ ] 성능 테스트

### 최적화 단계
- [ ] 번들 크기 최적화
- [ ] 사용하지 않는 레거시 코드 제거
- [ ] 코드 스플리팅 적용
- [ ] 캐싱 전략 수립

### 완료 단계
- [ ] 문서 업데이트
- [ ] 팀 교육 실시
- [ ] 배포 및 모니터링
- [ ] 피드백 수집 및 개선

## 🚨 일반적인 마이그레이션 이슈

### 1. 스타일 충돌

```css
/* 문제: 기존 스타일과 Lumir 스타일 충돌 */
.legacy-button {
  background: red !important; /* 높은 specificity */
}

/* 해결책: 네임스페이스 사용 */
.migration-phase .legacy-button {
  background: var(--foundation-foundation-color-red-light-50);
}

.migration-complete .lumir-button {
  /* Lumir 스타일 적용 */
}
```

### 2. Props 인터페이스 불일치

```tsx
// 문제: 기존 컴포넌트와 Lumir 컴포넌트의 props 차이
interface LegacyButtonProps {
  type: 'primary' | 'secondary';
  large?: boolean;
  onPress?: () => void;
}

interface LumirButtonProps {
  variant: 'filled' | 'outlined';
  size: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

// 해결책: Props 어댑터 함수
function adaptLegacyProps(legacyProps: LegacyButtonProps): LumirButtonProps {
  return {
    variant: legacyProps.type === 'primary' ? 'filled' : 'outlined',
    size: legacyProps.large ? 'lg' : 'md',
    onClick: legacyProps.onPress
  };
}
```

### 3. 접근성 개선

```tsx
// 마이그레이션 중 접근성 개선
function MigratedComponent({ label, onClick }: Props) {
  return (
    <Button
      variant="filled"
      onClick={onClick}
      aria-label={label} // 접근성 개선
      // 키보드 이벤트 추가
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {label}
    </Button>
  );
}
```

## 📊 마이그레이션 진행 추적

### 대시보드 생성

```tsx
// MigrationDashboard.tsx
function MigrationDashboard() {
  const [validationResult, setValidationResult] = useState<MigrationValidationResult | null>(null);
  
  useEffect(() => {
    validateMigration('./src').then(setValidationResult);
  }, []);
  
  if (!validationResult) return <div>분석 중...</div>;
  
  return (
    <div className="migration-dashboard">
      <h1>마이그레이션 진행 상황</h1>
      
      <div className="progress-section">
        <h2>전체 진행률</h2>
        <ProgressBar 
          value={validationResult.progress.percentage} 
          max={100}
          label={`${validationResult.progress.migratedComponents}/${validationResult.progress.totalComponents} 컴포넌트`}
        />
      </div>
      
      <div className="issues-section">
        <h2>이슈 목록</h2>
        {validationResult.issues.map((issue, index) => (
          <div key={index} className={`issue issue-${issue.type}`}>
            <span className="issue-type">{issue.type}</span>
            <span className="issue-message">{issue.message}</span>
            <span className="issue-file">{issue.file}</span>
          </div>
        ))}
      </div>
      
      <div className="next-steps">
        <h2>다음 단계</h2>
        <ul>
          {validationResult.progress.percentage < 50 && (
            <li>핵심 컴포넌트 마이그레이션 계속</li>
          )}
          {validationResult.progress.percentage >= 50 && validationResult.progress.percentage < 80 && (
            <li>복합 컴포넌트 마이그레이션</li>
          )}
          {validationResult.progress.percentage >= 80 && (
            <li>레거시 코드 정리 및 최적화</li>
          )}
        </ul>
      </div>
    </div>
  );
}
```

## 🎓 팀 교육 및 온보딩

### 교육 자료 준비

```markdown
# Lumir 디자인 시스템 온보딩

## 1주차: 기본 개념
- Foundation 토큰 이해
- 컴포넌트 사용법
- 접근성 기본 원칙

## 2주차: 실습
- 기존 컴포넌트를 Lumir로 교체
- 스타일 커스터마이징
- 테스트 작성

## 3주차: 고급 주제
- 테마 시스템 활용
- 성능 최적화
- 마이그레이션 도구 사용

## 평가
- 실습 프로젝트 완성
- 코드 리뷰 참여
- 질의응답 세션
```

### 코드 리뷰 가이드라인

```typescript
// code-review-checklist.ts
export const migrationCodeReviewChecklist = [
  {
    category: 'Foundation 토큰',
    items: [
      '하드코딩된 CSS 값 대신 Foundation 토큰 사용',
      '색상 대비 WCAG AA 기준 준수',
      '반응형 간격 토큰 활용'
    ]
  },
  {
    category: '컴포넌트 사용',
    items: [
      'Lumir 컴포넌트 올바른 props 사용',
      '접근성 속성 (aria-label, role 등) 추가',
      '키보드 내비게이션 지원'
    ]
  },
  {
    category: '성능',
    items: [
      '불필요한 레거시 코드 제거',
      '번들 크기 최적화',
      '렌더링 성능 확인'
    ]
  }
];
```

## 📚 관련 가이드

1. **[Getting Started](./01-getting-started.md)** - 디자인 시스템 시작하기
2. **[Foundation Tokens](./02-foundation-tokens.md)** - 토큰 시스템
3. **[Accessibility Guide](./03-accessibility.md)** - 접근성 가이드라인
4. **[Theming Guide](./04-theming.md)** - 테마 커스터마이징

---

**체계적인 마이그레이션으로 안전하고 효율적인 디자인 시스템 전환을 완성하세요!** 