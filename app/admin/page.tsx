"use client";

import { Frame } from "lumir-design-system-shared";
import { DynamicTextDisplay as TextDisplay, DynamicButton as Button } from "../components/DynamicComponents";
import { useRouter } from "next/navigation";
import { useTheme } from "../components/ThemeProvider";
import FloorMap from "../components/FloorMap";

export default function AdminPage() {
  const { theme, systemTheme, toggleTheme, toggleSystemTheme } = useTheme();
  const router = useRouter();

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <Frame
      as="main"
      height="100vh"
      width="100%"
      position="relative"
      padding="xl"
    >
      {/* 관리자 페이지 헤더 */}
      <Frame
        display="flex"
        justify="space-between"
        align="center"
        marginBottom="lg"
      >
        <Frame display="flex" gap="md" align="center">
          <Button
            variant="outlined"
            colorScheme="secondary"
            size="sm"
            onClick={handleBackToHome}
          >
            ← 홈으로
          </Button>
          <TextDisplay
            size="lg"
            primaryText="관리자 모드"
          />
        </Frame>
        <Frame display="flex" gap="sm" align="center">
          <Button
            variant="outlined"
            colorScheme="secondary"
            size="sm"
            onClick={toggleSystemTheme}
          >
            {systemTheme === "system01" ? "System02" : "System01"}
          </Button>
          <Button
            variant="outlined"
            colorScheme="secondary"
            size="sm"
            onClick={toggleTheme}
          >
            {theme === "light" ? "다크모드" : "라이트모드"}
          </Button>
        </Frame>
      </Frame>

      {/* 안내 메시지 */}
      <Frame
        style={{
          backgroundColor: "var(--secondary-system02-2-rest)",
          borderRadius: "8px",
          border: "1px solid var(--secondary-system02-2-rest)",
          padding: "16px",
          marginBottom: "24px"
        }}
      >
        <TextDisplay
          size="md"
          primaryText="맵에서 영역을 클릭하여 새로운 식당을 추가할 수 있습니다."
        />
      </Frame>

      {/* 플로어맵 컴포넌트 */}
      <Frame
        height="calc(100vh - 200px)"
        width="100%"
        style={{ overflow: "hidden" }}
      >
        <FloorMap isAdminPage={true} />
      </Frame>
    </Frame>
  );
} 