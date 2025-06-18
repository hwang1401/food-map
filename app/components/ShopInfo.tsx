import type { Shop } from "@data/interface";
import Image from "next/image";
import { useState, useEffect } from "react";
import { DynamicTextDisplay as TextDisplay, DynamicButton as Button } from "./DynamicComponents";
import { Frame, Surface } from "lumir-design-system-shared";

interface ShopInfoProps {
  shop: Shop;
  onClose: () => void;
  onReopen: () => void;
  isClosed: boolean;
}

export default function ShopInfo({ shop, onClose, isClosed }: ShopInfoProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isClosed) {
      requestAnimationFrame(() => {
        setIsVisible(true);
      });
    }
  }, [isClosed]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
      setIsVisible(false);
    }, 300);
  };

  if (isClosed) {
    return null;
  }

  return (
    <>
      {/* 딤 처리된 배경 */}
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
      
      {/* 드로어 */}
      <Frame
        position="fixed"
        top="0"
        left="0"
        height="100vh"
        width="300px"
        zIndex={1000}
        style={{
          transform: isVisible
            ? isClosing
              ? "translateX(-100%)"
              : "translateX(0%)"
            : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <Surface
          background="secondary-system02-1-rest"
          style={{
            height: "100%",
            boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
          }}
        >
          <Frame
            padding="xl"
            display="flex"
            direction="column"
            height="100%"
          >
            {/* 헤더 */}
            <Frame
              display="flex"
              justify="space-between"
              align="center"
              marginBottom="xl"
        >
              <TextDisplay
                size="md"
                primaryText={shop.name}
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

            {/* 상점 정보 */}
            <Frame marginBottom="xl">
          <Image
            src={shop.logoUrl || "/icon-192x192.png"}
            alt={shop.name}
            width={120}
            height={120}
            style={{ borderRadius: "12px", marginBottom: "16px" }}
          />
              <TextDisplay
                size="md"
                primaryText={shop.description}
                style="left"
              />
              
              <Frame marginTop="md">
                <Surface
                  borderColor="secondary-system02-2-rest"
                  borderWidth="medium"
                  borderStyle="solid"
                  style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
                >
                  <Frame paddingBottom="xs" marginBottom="xs">
                    <TextDisplay
                      size="lg"
                      showLabel={true}
                      labelText="연락처"
                      primaryText={shop.contact}
                    />
                  </Frame>
                </Surface>
              </Frame>
            </Frame>

            {/* 위치 섹션 */}
            <Frame marginBottom="lg">
              <Surface
                borderColor="secondary-system02-2-rest"
                borderWidth="medium"
                borderStyle="solid"
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
              >
                <Frame paddingBottom="xs" marginBottom="xs">
                  <TextDisplay
                    size="lg"
                    primaryText="위치"
                  />
                </Frame>
              </Surface>
              
              {/* 간단한 지도 표시 */}
              <Frame
                style={{
                  position: "relative",
                  width: "100%",
                  height: "180px",
                  overflow: "hidden",
                  borderRadius: "8px",
                  border: "1px solid var(--secondary-system02-2-rest)",
                }}
              >
                {/* 지도 상단에 식당 정보 오버레이 */}
                <Frame
                  position="absolute"
                  top="8px"
                  left="8px"
                  right="8px"
                  zIndex={10}
                >
                  <Surface
                    background="secondary-system02-1-rest"
                    borderRadius="sm"
                    style={{
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                      opacity: 0.95,
                    }}
                  >
                    <Frame
                      display="flex"
                      align="center"
                      gap="sm"
                      padding="sm"
                    >
                      <Image
                        src={shop.logoUrl || "/icon-192x192.png"}
                        alt={shop.name}
                        width={32}
                        height={32}
                        style={{ borderRadius: "6px" }}
                      />
                      <Frame flex="1">
                        <TextDisplay
                          size="sm"
                          primaryText={shop.name}
                          style="left"
                        />
                        <TextDisplay
                          size="sm"
                          primaryText={shop.floor === "floor1" ? "1층" : "2층"}
                          style="left"
                        />
                      </Frame>
                    </Frame>
                  </Surface>
                </Frame>
                <svg
                  viewBox="0 0 1000 800"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#f8f9fa",
                  }}
                >
                  <image
                    href={shop.floor === "floor1" ? "/floor1-1.png" : "/floor2-1.png"}
                    width="1000"
                    height="800"
                    preserveAspectRatio="xMidYMid meet"
                    opacity="0.7"
                  />
                  {/* 선택된 식당 하이라이트 */}
                  <polygon
                    points={shop.points}
                    fill="rgba(37, 99, 235, 0.4)"
                    stroke="#2563eb"
                    strokeWidth="3"
                  />
                  {/* 식당 위치 인디케이터 */}
                  {(() => {
                    const pointsArr = shop.points.split(" ").map((pt) => {
                      const [x, y] = pt.split(",").map(Number);
                      return { x, y };
                    });
                    const centerX = (pointsArr[0].x + pointsArr[2].x) / 2;
                    const centerY = (pointsArr[0].y + pointsArr[2].y) / 2;
                    const arrowX = (pointsArr[0].x + pointsArr[1].x) / 2;
                    const arrowY = Math.min(pointsArr[0].y, pointsArr[1].y) - 14;
                    
                    return (
                      <g>
                        {/* 식당 로고 */}
                        <image
                          href={shop.logoUrl || "/icon-192x192.png"}
                          x={centerX - 15}
                          y={centerY - 15}
                          width={30}
                          height={30}
                        />
                        {/* 위치 인디케이터 화살표 */}
                        <text
                          x={arrowX}
                          y={arrowY}
                          textAnchor="middle"
                          fontSize="36"
                          fontWeight="bold"
                          fill="#e11d48"
                          style={{
                            animation: "bounce 1s infinite alternate",
                          }}
                        >
                          ▼
                        </text>
                      </g>
                    );
                  })()}
                </svg>
                
                {/* CSS 애니메이션 추가 */}
                <style jsx>{`
                  @keyframes bounce {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(8px); }
                  }
                `}</style>
              </Frame>
            </Frame>

            {/* 메뉴 섹션 */}
            <Frame display="flex" direction="column" gap="md" flex="1">
              <Surface
                borderColor="secondary-system02-2-rest"
                borderWidth="medium"
                borderStyle="solid"
                style={{ borderTop: "none", borderLeft: "none", borderRight: "none" }}
              >
                <Frame paddingBottom="xs" marginBottom="xs">
                  <TextDisplay
                    size="lg"
                    primaryText="메뉴"
                  />
                </Frame>
              </Surface>
              
          {shop.menuList && shop.menuList.length > 0 && (
                <Frame
                  display="flex"
                  direction="column"
                  gap="xs"
                  padding="xs"
                  flex="1"
                  overflowY="auto"
                  style={{ height: "calc(100vh - 450px)" }}
            >
              {shop.menuList.map((menu) => (
                    <Surface
                  key={menu.name}
                      background="secondary-system02-1-rest"
                      borderColor="secondary-system02-2-rest"
                      borderWidth="thin"
                      borderStyle="solid"
                      borderRadius="sm"
                      style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)" }}
                >
                      <Frame
                        display="flex"
                        justify="space-between"
                        align="center"
                        padding="xs"
                      >
                        <TextDisplay
                          size="md"
                          primaryText={menu.name}
                        />
                        <TextDisplay
                          size="md"
                          primaryText={`${menu.price.toLocaleString()}원`}
                        />
                      </Frame>
                    </Surface>
              ))}
                </Frame>
          )}
              
          {shop.menuLinkUrl && (
                <Frame>
                  <Button
                    variant="filled"
                    colorScheme="primary"
                    size="lg"
                    onClick={() => shop.menuLinkUrl && window.open(shop.menuLinkUrl, '_blank')}
                    style={{ width: "100%" }}
            >
              메뉴 보기
                  </Button>
                </Frame>
          )}
            </Frame>
          </Frame>
        </Surface>
      </Frame>
    </>
  );
}
