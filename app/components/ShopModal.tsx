import { useState, useEffect } from "react";
import type { Shop } from "@data/interface";
import { Frame, Surface } from "lumir-design-system-shared";
import { DynamicTextDisplay as TextDisplay, DynamicButton as Button } from "./DynamicComponents";
import Image from "next/image";


interface ShopModalProps {
  shop: Shop;
  floor: number;
  onClose: () => void;
}

export default function ShopModal({ shop, floor, onClose }: ShopModalProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    // 모달이 열릴 때 애니메이션
    requestAnimationFrame(() => {
      setIsVisible(true);
    });
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsVisible(false);
      setIsClosing(false);
    }, 300);
  };

  return (
    <>
      {/* 배경 딤 */}
      <Surface
        overlay="heavy"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999,
          opacity: isVisible ? (isClosing ? 0 : 1) : 0,
          transition: "opacity 0.3s ease-in-out",
        }}
        onClick={handleClose}
      />

      {/* 바텀시트 모달 */}
      <Frame
        position="fixed"
        left="0"
        right="0"
        bottom="0"
        width="100%"
        height="80vh"
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
          background="secondary-system02-3-rest"
          borderRadius="lg"
          borderColor="secondary-system02-2-rest"
          borderWidth="thin"
          borderStyle="solid"
          boxShadow="30"
          style={{
            height: "100%",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }}
        >
          <Frame
            display="flex"
            direction="column"
            height="100%"
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

            {/* 지도 영역 */}
            <Surface
              background="secondary-system02-2-rest"
              borderRadius="md"
              style={{
                overflow: "hidden"
              }}
            >
              <Frame
                height="300px"
                marginBottom="lg"
              >
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
            </Surface>

            {/* 상점 정보 */}
            <Frame
              display="flex"
              direction="column"
              gap="md"
              flex="1"
              overflowY="auto"
            >
              {/* 상점 기본 정보 */}
              <Frame display="flex" gap="md" align="flex-start">
                <Surface
                  background="secondary-system02-2-rest"
                  borderRadius="md"
                  style={{
                    width: "80px",
                    height: "80px",
                    overflow: "hidden"
                  }}
                >
                  <Frame
                    width="100%"
                    height="100%"
                    display="flex"
                    align="center"
                    justify="center"
                  >
                    <Image
                      src={shop.logoUrl || "/icon-192x192.png"}
                      alt={shop.name}
                      width={80}
                      height={80}
                      style={{ 
                        objectFit: "contain"
                      }}
                    />
                  </Frame>
                </Surface>
                <Frame flex="1">
                  <TextDisplay
                    size="md"
                    primaryText={shop.description}
                    style="left"
                  />
                  <Frame marginTop="sm">
                    <TextDisplay
                      size="sm"
                      showLabel={true}
                      labelText="연락처"
                      primaryText={shop.contact}
                    />
                  </Frame>
                </Frame>
              </Frame>

              {/* 메뉴 정보 */}
              {shop.menuList && shop.menuList.length > 0 && (
                <Frame>
                  <TextDisplay
                    size="md"
                    primaryText="메뉴"
                    style="left"
                  />
                  <Frame
                    display="flex"
                    direction="column"
                    gap="xs"
                    marginTop="sm"
                  >
                    {shop.menuList.map((menu) => (
                      <Surface
                        key={menu.name}
                        background="secondary-system02-2-rest"
                        borderRadius="sm"
                      >
                        <Frame
                          display="flex"
                          justify="space-between"
                          align="center"
                          padding="sm"
                        >
                          <TextDisplay
                            size="sm"
                            primaryText={menu.name}
                          />
                          <TextDisplay
                            size="sm"
                            primaryText={`${menu.price}원`}
                          />
                        </Frame>
                      </Surface>
                    ))}
                  </Frame>
                </Frame>
              )}

              {/* 메뉴 링크 */}
              {shop.menuLinkUrl && (
                <Frame marginTop="md">
                  <Button
                    variant="filled"
                    colorScheme="primary"
                    size="lg"
                    isFullWidth={true}
                    onClick={() => shop.menuLinkUrl && window.open(shop.menuLinkUrl, '_blank')}
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