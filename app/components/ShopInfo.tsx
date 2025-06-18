import type { Shop } from "@data/interface";
import Image from "next/image";
import { useState, useEffect } from "react";
import { TextDisplay } from "lumir-design-system-02";

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
      <div
        onClick={handleClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          opacity: isVisible ? (isClosing ? 0 : 1) : 0,
          transition: "opacity 0.3s ease-in-out",
          zIndex: 999,
        }}
      />
      {/* 드로어 */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "300px",
          background: "var(--card-bg)",
          boxShadow: "2px 0 8px rgba(0,0,0,0.1)",
          transform: isVisible
            ? isClosing
              ? "translateX(-100%)"
              : "translateX(0%)"
            : "translateX(-100%)",
          transition: "transform 0.3s ease-in-out",
          zIndex: 1000,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <TextDisplay
            size="md"
            primaryText={shop.name}
          />
          <button
            onClick={handleClose}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--text-color)",
            }}
          >
            ✕
          </button>
        </div>

        <div style={{ marginBottom: "24px" }}>
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "16px" }}
          >
            <div
              style={{
                borderBottom: "2px solid var(--border-color)",
                paddingBottom: "8px",
                marginBottom: "8px",
              }}
            >
              <TextDisplay
                size="lg"
                showLabel={true}
                labelText="연락처"
                primaryText={shop.contact}
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              borderBottom: "2px solid var(--border-color)",
              paddingBottom: "8px",
              marginBottom: "8px",
            }}
          >
            <TextDisplay
              size="lg"
              primaryText="메뉴"
            />
          </div>
          {shop.menuList && shop.menuList.length > 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "8px 0",
                height: "calc(100vh - 450px)",
                overflowY: "auto",
              }}
            >
              {shop.menuList.map((menu) => (
                <div
                  key={menu.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 12px",
                    background: "var(--card-bg)",
                    borderRadius: "8px",
                    border: "1px solid var(--border-color)",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <TextDisplay
                    size="md"
                    primaryText={menu.name}
                  />
                  <TextDisplay
                    size="md"
                    primaryText={`${menu.price.toLocaleString()}원`}
                  />
                </div>
              ))}
            </div>
          )}
          {shop.menuLinkUrl && (
            <a
              href={shop.menuLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "12px 24px",
                background: "#2563eb",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 600,
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              메뉴 보기
            </a>
          )}
        </div>
      </div>
    </>
  );
}
