import type { Shop } from "@data/interface";
import { Frame, Surface } from "lumir-design-system-shared";
import { DynamicTextDisplay as TextDisplay, DynamicButton as Button } from "./DynamicComponents";

export default function ShopModal({
  shop,
  onClose,
}: {
  shop: Shop;
  onClose: () => void;
}) {
  return (
    <Frame
      position="fixed"
      top="312px"
      right="370px"
      zIndex={1000}
      width="200px"
      height="250px"
    >
      <Surface
        background="secondary-system02-1-rest"
        borderColor="secondary-system02-2-rest"
        borderWidth="medium"
        borderStyle="solid"
        borderRadius="md"
    >
        <Frame padding="lg" display="flex" direction="column" gap="sm" height="100%">
          <TextDisplay
            size="lg"
            primaryText={shop.name}
            style="left"
          />
          
          <Frame display="flex" direction="column" gap="xs" flex="1">
            <TextDisplay
              size="sm"
              primaryText={shop.description}
              style="left"
            />
            <TextDisplay
              size="sm"
              primaryText={shop.contact}
              style="left"
            />
            {shop.menuLinkUrl && (
              <TextDisplay
                size="sm"
                primaryText={shop.menuLinkUrl}
                style="left"
              />
            )}
      {shop.menuList && (
              <Frame display="flex" direction="column" gap="xs">
          {shop.menuList.map((menu) => (
                  <TextDisplay
                    key={menu.name}
                    size="sm"
                    primaryText={menu.name}
                    style="left"
                  />
          ))}
              </Frame>
      )}
          </Frame>

          <Frame>
            <Button
              variant="outlined"
              colorScheme="secondary"
              size="sm"
              onClick={onClose}
            >
              닫기
            </Button>
          </Frame>
        </Frame>
      </Surface>
    </Frame>
  );
}
