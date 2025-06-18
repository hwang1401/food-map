"use client";

import { useTheme } from "./ThemeProvider";
import * as System01 from "lumir-design-system-01";
import * as System02 from "lumir-design-system-02";

// 동적 컴포넌트 로더
export function useDynamicComponents() {
  const { systemTheme } = useTheme();
  
  if (systemTheme === "system01") {
    return {
      Button: System01.Button,
      TextDisplay: System01.TextDisplay,
      SegmentButton: System01.SegmentButton,
      Card: System01.Card,
      Checkbox: System01.Checkbox,
      Field: System01.Field,
      Chip: System01.Chip,
    };
  } else {
    return {
      Button: System02.Button,
      TextDisplay: System02.TextDisplay,
      SegmentButton: System02.SegmentButton,
      Card: System02.Card,
      Checkbox: System02.Checkbox,
      Field: System02.Field,
      Chip: System02.Chip,
    };
  }
}

// 개별 컴포넌트 래퍼들
export function DynamicButton(props: any) {
  const { Button } = useDynamicComponents();
  return <Button {...props} />;
}

export function DynamicTextDisplay(props: any) {
  const { TextDisplay } = useDynamicComponents();
  return <TextDisplay {...props} />;
}

// SegmentButton 동적 컴포넌트
function DynamicSegmentButtonComponent(props: any) {
  const { SegmentButton } = useDynamicComponents();
  return <SegmentButton {...props} />;
}

// Item 컴포넌트 정의
function DynamicSegmentButtonItem(props: any) {
  const { SegmentButton } = useDynamicComponents();
  return <SegmentButton.Item {...props} />;
}

// SegmentButton에 Item 속성 추가
DynamicSegmentButtonComponent.Item = DynamicSegmentButtonItem;

export const DynamicSegmentButton = DynamicSegmentButtonComponent;

export function DynamicCard(props: any) {
  const { Card } = useDynamicComponents();
  return <Card {...props} />;
}

export function DynamicCheckbox(props: any) {
  const { Checkbox } = useDynamicComponents();
  return <Checkbox {...props} />;
}

export function DynamicField(props: any) {
  const { Field } = useDynamicComponents();
  return <Field {...props} />;
}

export function DynamicChip(props: any) {
  const { Chip } = useDynamicComponents();
  return <Chip {...props} />;
} 