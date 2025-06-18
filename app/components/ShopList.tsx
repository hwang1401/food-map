import { useState, useEffect } from "react";
import type { Shop } from "@data/interface";
import { 
  DynamicSegmentButton as SegmentButton, 
  DynamicTextDisplay as TextDisplay, 
  DynamicCard as Card, 
  DynamicButton as Button, 
  DynamicCheckbox as Checkbox, 
  DynamicChip as Chip 
} from "./DynamicComponents";
import { Frame, Surface } from "lumir-design-system-shared";

interface FilterBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    launch: boolean;
    dinner: boolean;
    type: Shop["type"][];
  };
  onFilterChange: (filters: {
    launch: boolean;
    dinner: boolean;
    type: Shop["type"][];
  }) => void;
}

function FilterBottomSheet({ isOpen, onClose, filters, onFilterChange }: FilterBottomSheetProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  const handleTypeToggle = (type: Shop["type"]) => {
    const currentTypes = filters.type;
    const newTypes = currentTypes.includes(type)
      ? currentTypes.filter(t => t !== type)
      : [...currentTypes, type];
    
    onFilterChange({
      ...filters,
      type: newTypes
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* 배경 딤 */}
      <Frame
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        zIndex={999}
        onClick={handleClose}
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          opacity: isVisible ? (isClosing ? 0 : 1) : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
      />

      {/* 바텀시트 */}
      <Frame
        position="fixed"
        left="0"
        right="0"
        bottom="0"
        width="100%"
        height="auto"
        zIndex={1000}
        style={{
          transform: isVisible
            ? isClosing
              ? "translateY(100%)"
              : "translateY(0%)"
            : "translateY(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Surface
          background="secondary-system02-1-rest"
          borderRadius="lg"
          style={{
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
            boxShadow: "0 -4px 20px rgba(0,0,0,0.15)",
          }}
        >
          <Frame
            display="flex"
            direction="column"
            padding="xl"
          >
            {/* 헤더 */}
            <Frame
              display="flex"
              justify="space-between"
              align="center"
              marginBottom="lg"
            >
              <TextDisplay
                size="lg"
                primaryText="필터"
              />
              <Button
                variant="transparent"
                colorScheme="secondary"
                size="sm"
                onClick={handleClose}
              >
                ✕
              </Button>
            </Frame>

            {/* 식당 종류 필터 */}
            <Frame marginBottom="lg">
              <Frame marginBottom="md">
                <TextDisplay
                  size="md"
                  primaryText="식당 종류"
                />
              </Frame>
              <Frame display="flex" direction="column" gap="sm">
                <Checkbox
                  checked={filters.type.includes("한식")}
                  onChange={() => handleTypeToggle("한식")}
                  label="한식"
                />
                <Checkbox
                  checked={filters.type.includes("분식")}
                  onChange={() => handleTypeToggle("분식")}
                  label="분식"
                />
                <Checkbox
                  checked={filters.type.includes("뷔페")}
                  onChange={() => handleTypeToggle("뷔페")}
                  label="뷔페"
                />
              </Frame>
            </Frame>

            {/* 운영시간 필터 */}
            <Frame marginBottom="lg">
              <Frame marginBottom="md">
                <TextDisplay
                  size="md"
                  primaryText="운영시간"
                />
              </Frame>
              <Frame display="flex" gap="md">
                <Button
                  variant={filters.launch ? "filled" : "outlined"}
                  colorScheme="primary"
                  size="sm"
                  onClick={() => {
                    onFilterChange({
                      ...filters,
                      launch: !filters.launch
                    });
                  }}
                  style={{
                    borderRadius: "20px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                >
                  점심
                </Button>
                <Button
                  variant={filters.dinner ? "filled" : "outlined"}
                  colorScheme="primary"
                  size="sm"
                  onClick={() => {
                    onFilterChange({
                      ...filters,
                      dinner: !filters.dinner
                    });
                  }}
                  style={{
                    borderRadius: "20px",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                  }}
                >
                  석식
                </Button>
              </Frame>
            </Frame>

            {/* 적용 버튼 */}
            <Button
              variant="filled"
              colorScheme="primary"
              size="lg"
              onClick={handleClose}
              children="확인"
            />
          </Frame>
        </Surface>
      </Frame>
    </>
  );
}

interface ShopListProps {
  selectedShop: Shop | null;
  onShopSelect: (shop: Shop | null) => void;
  floor: number;
  onFloorChange: (floor: number) => void;
  filters: {
    launch: boolean;
    dinner: boolean;
    type: Shop["type"][];
  };
  onFilterChange: (filters: {
    launch: boolean;
    dinner: boolean;
    type: Shop["type"][];
  }) => void;
}

export default function ShopList({
  selectedShop,
  onShopSelect,
  floor,
  onFloorChange,
  filters,
  onFilterChange,
}: ShopListProps) {
  const [shops, setShops] = useState<Shop[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // 상점 데이터 가져오기
  useEffect(() => {
    fetch("/api/shops")
      .then((res) => res.json())
      .then((data) => setShops(data))
      .catch((error) => console.error("Failed to fetch shops:", error));
  }, []);

  // 필터링된 상점 목록
  const filteredShops = shops.filter((shop) => {
    const shopFloor = shop.floor === "floor1" ? 1 : shop.floor === "floor2" ? 2 : 1;
    // floor가 0(전체)이면 모든 층 포함, 아니면 해당 층만 필터링
    if (floor !== 0 && shopFloor !== floor) return false;
    // type 배열이 비어있지 않고 shop.type이 포함되지 않으면 제외
    if (filters.type.length > 0 && !filters.type.includes(shop.type)) return false;
    
    // 운영시간 필터 - OR 조건으로 변경
    const hasTimeFilter = filters.launch || filters.dinner;
    if (hasTimeFilter) {
      const matchesLaunch = filters.launch && shop.availableInLaunch;
      const matchesDinner = filters.dinner && shop.availableInDinner;
      if (!matchesLaunch && !matchesDinner) return false;
    }
    
    return true;
  });

  // 활성화된 필터 개수 계산
  const activeFilterCount = (
    filters.type.length +
    (filters.launch ? 1 : 0) +
    (filters.dinner ? 1 : 0)
  );

  // 제목 텍스트 생성
  const titleText = floor === 0 ? "전체 상가 목록" : `${floor}층 상가 목록`;

  return (
    <Frame marginTop="lg">
      <Frame
        display="flex"
        justify="space-between"
        align="center"
        marginBottom="md"
      >
        <TextDisplay
          size="lg"
          primaryText={titleText}
        />
        <Frame display="flex" gap="sm" align="center">
          {/* 필터 버튼 */}
          <Button
            variant="outlined"
            colorScheme="secondary"
            size="sm"
            onClick={() => setIsFilterOpen(true)}
          >
            필터 {activeFilterCount > 0 && `(${activeFilterCount})`}
          </Button>
          
          {/* 층 선택 버튼 */}
          <SegmentButton
            mode="single"
            variant="primary"
            size="sm"
            selectedValues={[floor.toString()]}
            onChange={(values: string[]) => {
              if (values.length > 0) {
                onFloorChange(parseInt(values[0]));
              }
            }}
          >
            <SegmentButton.Item value="0">전체</SegmentButton.Item>
            <SegmentButton.Item value="1">1층</SegmentButton.Item>
            <SegmentButton.Item value="2">2층</SegmentButton.Item>
          </SegmentButton>
        </Frame>
      </Frame>
      
      <Frame
        display="grid"
        gridTemplateColumns={{
          mobile: "1fr",
          tablet: "1fr 1fr",
          desktop: "1fr 1fr",
          desktopL: "1fr 1fr",
          desktopXL: "1fr 1fr"
        }}
        gap="lg"
        marginTop="md"
        overflowY="auto"
        maxHeight="calc(100vh - 200px)"
        width="100%"
      >
        {filteredShops.map((shop) => {
          const shopFloor = shop.floor === "floor1" ? "1층" : shop.floor === "floor2" ? "2층" : "1층";
          const operatingHours = [];
          if (shop.availableInLaunch) operatingHours.push("점심");
          if (shop.availableInDinner) operatingHours.push("석식");
          const operatingText = operatingHours.length > 0 ? operatingHours.join(", ") : "운영시간 미정";
          
          return (
            <Card
              key={shop.id}
              variant={selectedShop?.id === shop.id ? "outlined" : "filled"}
              title={shop.name}
              description={shop.description}
              subtitle={`${shopFloor} • ${shop.type} • ${operatingText}`}
              imageUrl={shop.logoUrl || "/icon-192x192.png"}
              showImage={true}
              showActionButton={false}
              imageHeight="150px"
              imageObjectFit="cover"
              imageAspectRatio="square"
              size="sm"
              onClick={() => onShopSelect(shop)}
              width="100%"
            />
          );
        })}
      </Frame>

      {/* 필터 바텀시트 */}
      <FilterBottomSheet
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onFilterChange={onFilterChange}
      />
    </Frame>
  );
}
