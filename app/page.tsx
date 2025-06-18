"use client";

import ShopList from "@components/ShopList";
import ShopModal from "@components/ShopModal";
import { Frame } from "lumir-design-system-shared";
import { DynamicTextDisplay as TextDisplay, DynamicButton as Button } from "./components/DynamicComponents";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Shop } from "@data/interface";
import { useTheme } from "./components/ThemeProvider";

export default function Home() {
  const [selectedShop, setSelectedShop] = useState<Shop | null>(null);
  const [floor, setFloor] = useState(0); // 0: 전체, 1: 1층, 2: 2층
  const [filters, setFilters] = useState({
    launch: false,
    dinner: false,
    type: [] as Shop["type"][],
  });

  const { theme, systemTheme, toggleTheme, toggleSystemTheme } = useTheme();
  const router = useRouter();

  const handleAdminClick = () => {
    router.push("/admin");
  };

  return (
    <>
      <Frame
        as="main"
        height="100vh"
        width="100%"
        position="relative"
        padding="xl"
      >
        {/* 전체 헤더 */}
        <Frame
          display="flex"
          justify="space-between"
          align="center"
          marginBottom="lg"
        >
          <TextDisplay
            size="lg"
            primaryText="Foodmap"
          />
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
            <Button
              variant="outlined"
              colorScheme="secondary"
              size="sm"
              onClick={handleAdminClick}
            >
              관리자모드
            </Button>
          </Frame>
        </Frame>

        <ShopList
          selectedShop={selectedShop}
          onShopSelect={setSelectedShop}
          floor={floor}
          onFloorChange={setFloor}
          filters={filters}
          onFilterChange={setFilters}
        />
      </Frame>

      {/* 바텀시트 모달 */}
      {selectedShop && (
        <ShopModal
          shop={selectedShop}
          floor={floor}
          onClose={() => setSelectedShop(null)}
        />
      )}
    </>
  );
}
