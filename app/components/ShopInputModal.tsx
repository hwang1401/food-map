import { useState, useEffect } from "react";
import { Field, Button, TextDisplay } from "lumir-design-system-02";

interface ShopInputModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: {
    name: string;
    description: string;
    contact: string;
  }) => void;
  defaultValues?: { name: string; description: string; contact: string };
}

export default function ShopInputModal({
  open,
  onClose,
  onSubmit,
  defaultValues,
}: ShopInputModalProps) {
  const [name, setName] = useState(defaultValues?.name || "");
  const [description, setDescription] = useState(
    defaultValues?.description || ""
  );
  const [contact, setContact] = useState(defaultValues?.contact || "");

  // defaultValues가 바뀔 때마다 input 값 동기화
  useEffect(() => {
    setName(defaultValues?.name || "");
    setDescription(defaultValues?.description || "");
    setContact(defaultValues?.contact || "");
  }, [defaultValues]);

  if (!open) return null;
  
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          padding: 24,
          minWidth: 400,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <TextDisplay
          size="lg"
          primaryText="상가 정보 입력"
          style="left"
        />
        
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 20 }}>
          <Field
            label="상가 이름"
            placeholder="상가 이름을 입력하세요"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="outlined"
            size="lg"
            fieldWidth="fill-width"
            required
          />
          <Field
            label="설명"
            placeholder="상가 설명을 입력하세요"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="outlined"
            size="lg"
            fieldWidth="fill-width"
          />
          <Field
            label="연락처"
            placeholder="연락처를 입력하세요"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            variant="outlined"
            size="lg"
            fieldWidth="fill-width"
            type="tel"
          />
        </div>
        
        <div
          style={{
            display: "flex",
            gap: 8,
            marginTop: 24,
            justifyContent: "flex-end",
          }}
        >
          <Button
            variant="outlined"
            colorScheme="secondary"
            size="md"
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            variant="filled"
            colorScheme="primary"
            size="md"
            onClick={() => onSubmit({ name, description, contact })}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
