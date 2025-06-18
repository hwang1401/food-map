import { useRef, useEffect, useState } from "react";
import type { Shop } from "@data/interface";
import { Frame } from "lumir-design-system-shared";

interface FloorMapSimpleProps {
  floor: number;
  selectedShop: Shop;
  shops: Shop[];
}

function parsePoints(points: string): { x: number; y: number }[] {
  return points.split(" ").map((point) => {
    const [x, y] = point.split(",").map(Number);
    return { x, y };
  });
}

export default function FloorMapSimple({ floor, selectedShop, shops }: FloorMapSimpleProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  console.log("FloorMapSimple - floor:", floor);
  console.log("FloorMapSimple - selectedShop:", selectedShop);
  console.log("FloorMapSimple - shops:", shops);

  const filteredShops = shops.filter(shop => {
    const shopFloor = shop.floor === "floor1" ? 1 : shop.floor === "floor2" ? 2 : 1;
    return shopFloor === floor;
  });
  
  console.log("FloorMapSimple - filteredShops:", filteredShops);

  return (
    <Frame
      width="100%"
      height="100%"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1000 800"
        style={{
          width: "100%",
          height: "100%",
          background: "#fff",
          borderRadius: "8px",
        }}
      >
        <image
          href={floor === 1 ? "/floor1-1.png" : "/floor2-1.png"}
          width="1000"
          height="800"
          preserveAspectRatio="xMidYMid meet"
        />
        
        {/* 화살표 애니메이션 스타일 */}
        <svg style={{ display: "none" }}>
          <style>{`
            .arrow-bounce {
              animation: arrow-bounce 1s infinite alternate cubic-bezier(.4,0,.2,1);
            }
            @keyframes arrow-bounce {
              0% { transform: translateY(0); }
              100% { transform: translateY(12px); }
            }
          `}</style>
        </svg>
        
        {filteredShops.map((shop) => {
            const pointsArr = parsePoints(shop.points);
            // 상단 중앙 좌표 계산 (pointsArr[0]과 pointsArr[1]의 중간)
            const arrowX = (pointsArr[0].x + pointsArr[1].x) / 2;
            const arrowY = Math.min(pointsArr[0].y, pointsArr[1].y) - 14; // polygon 위에 약간 띄워서
            
            return (
              <g key={shop.id}>
                <polygon
                  points={shop.points}
                  fill={
                    selectedShop?.id === shop.id
                      ? "rgba(37, 99, 235, 0.3)"
                      : "rgba(255, 255, 255, 0)"
                  }
                  stroke={selectedShop?.id === shop.id ? "#2563eb" : "none"}
                  strokeWidth={2}
                />
                
                {/* 선택된 가게의 상단 중앙에 빨간색 ▼ 표시 */}
                {selectedShop?.id === shop.id && (
                  <text
                    x={arrowX}
                    y={arrowY}
                    textAnchor="middle"
                    fontSize="56"
                    fontWeight="bold"
                    fill="#e11d48"
                    className="arrow-bounce"
                    style={{ pointerEvents: "none" }}
                  >
                    ▼
                  </text>
                )}
                
                <image
                  href={shop.logoUrl ? shop.logoUrl : "/icon-192x192.png"}
                  x={(pointsArr[0].x + pointsArr[2].x) / 2 - 15}
                  y={(pointsArr[0].y + pointsArr[2].y) / 2 - 15}
                  width={30}
                  height={30}
                  style={{
                    filter:
                      selectedShop?.id === shop.id
                        ? "drop-shadow(0 0 4px rgba(37, 99, 235, 0.5))"
                        : "none",
                  }}
                />
              </g>
            );
          })}
      </svg>
    </Frame>
  );
} 