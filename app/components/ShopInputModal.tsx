import { useState, useEffect } from "react";
import { DynamicField as Field, DynamicButton as Button, DynamicTextDisplay as TextDisplay } from "./DynamicComponents";
import { Frame, Surface } from "lumir-design-system-shared";

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
    <Frame
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      display="flex"
      align="center"
      justify="center"
      zIndex={1000}
      onClick={onClose}
    >
      <Frame
        minWidth="300px"
        maxWidth="90vw"
        onClick={(e) => e.stopPropagation()}
      >
        <Surface
          background="secondary-system02-1-rest"
          borderRadius="md"
        >
          <Frame padding="xl">
            <TextDisplay
              size="lg"
              primaryText="상가 정보 입력"
              style="left"
            />
            
            <Frame display="flex" direction="column" gap="md" marginTop="lg">
              <Field
                label="상가 이름"
                placeholder="상가 이름을 입력하세요"
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                variant="outlined"
                size="lg"
                fieldWidth="fill-width"
                required
          />
              <Field
                label="설명"
                placeholder="상가 설명을 입력하세요"
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                variant="outlined"
                size="lg"
                fieldWidth="fill-width"
          />
              <Field
                label="연락처"
                placeholder="연락처를 입력하세요"
            value={contact}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContact(e.target.value)}
                variant="outlined"
                size="lg"
                fieldWidth="fill-width"
                type="tel"
          />
            </Frame>
            
            <Frame
              display="flex"
              direction="column"
              gap="xs"
              marginTop="xl"
        >
              <Button
                variant="filled"
                colorScheme="primary"
                size="md"
                isFullWidth={true}
                textAlign="center"
            onClick={() => onSubmit({ name, description, contact })}
          >
            확인
              </Button>
              <Button
                variant="outlined"
                colorScheme="secondary"
                size="md"
                isFullWidth={true}
                textAlign="center"
            onClick={onClose}
          >
            취소
              </Button>
            </Frame>
          </Frame>
        </Surface>
      </Frame>
    </Frame>
  );
}
