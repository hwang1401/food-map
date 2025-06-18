import Image from "next/image";
import type { Shop } from "@data/interface";
import { SegmentButton, TextDisplay, Card } from "lumir-design-system-02";
import { Frame, Surface, Sizing } from "lumir-design-system-shared";

interface ShopListProps {
  shops: Shop[];
  selectedShop: Shop | null;
  onShopSelect: (shop: Shop) => void;
  floor: number;
  filters: {
    launch: boolean;
    dinner: boolean;
    type: "전체" | Shop["type"];
  };
  onFilterChange: (filters: {
    launch: boolean;
    dinner: boolean;
    type: "전체" | Shop["type"];
  }) => void;
}

export default function ShopList({
  shops,
  selectedShop,
  onShopSelect,
  floor,
  filters,
  onFilterChange,
}: ShopListProps) {
  return (
    <Frame marginTop="lg">
      <Surface
        background="secondary-system02-1-rest"
        borderRadius="md"
        borderColor="secondary-system02-2-rest"
        borderWidth="thin"
        borderStyle="solid"
      >
        <Frame
          display="flex"
          justify="space-between"
          align="center"
          padding="md"
        >
          <TextDisplay
            size="lg"
            primaryText={`${floor}층 상가 목록`}
          />
          <Frame display="flex" gap="sm" align="center">
            <SegmentButton
              mode="multi"
              variant="primary"
              size="sm"
              selectedValues={[
                ...(filters.launch ? ["launch"] : []),
                ...(filters.dinner ? ["dinner"] : []),
              ]}
              onChange={(values) => {
                onFilterChange({
                  ...filters,
                  launch: values.includes("launch"),
                  dinner: values.includes("dinner"),
                });
              }}
            >
              <SegmentButton.Item value="launch">점심</SegmentButton.Item>
              <SegmentButton.Item value="dinner">석식</SegmentButton.Item>
            </SegmentButton>
            <select
              value={filters.type}
              onChange={(e) =>
                onFilterChange({
                  ...filters,
                  type: e.target.value as Shop["type"] | "전체",
                })
              }
              style={{
                padding: "6px 12px",
                background: "#f8f9fa",
                color: "#2563eb",
                border: "1px solid #2563eb",
                borderRadius: 6,
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "14px",
                transition: "all 0.2s ease",
                minWidth: "80px",
              }}
            >
              <option value="전체">전체</option>
              <option value="한식">한식</option>
              {/* <option value="중식">중식</option>
              <option value="일식">일식</option>
              <option value="양식">양식</option> */}
              <option value="분식">분식</option>
              <option value="뷔페">뷔페</option>
              {/* <option value="기타">기타</option> */}
            </select>
          </Frame>
        </Frame>
      </Surface>
      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "12px",
          marginTop: "16px",
          overflowY: "auto",
          maxHeight: "calc(100vh - 450px)",
        }}
      >
        {shops.map((shop) => (
          <Card
            key={shop.id}
            variant={selectedShop?.id === shop.id ? "outlined" : "filled"}
            title={shop.name}
            description={shop.description}
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
        ))}
      </div>
    </Frame>
  );
}
