import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import type { Shop } from "@data/interface";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "app/data/shops.json");
    const fileContent = await fs.readFile(filePath, "utf-8");
    const shopsData = JSON.parse(fileContent);
    
    // floor1과 floor2의 모든 상점을 하나의 배열로 합치기
    const allShops: Shop[] = [
      ...(shopsData.floor1 || []),
      ...(shopsData.floor2 || [])
    ];
    
    return NextResponse.json(allShops);
  } catch (error) {
    console.error("Error reading shops:", error);
    return NextResponse.json({ error: "Failed to read shops" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const newShop = await request.json();
    const filePath = path.join(process.cwd(), "app/data/shops.json");

    // 현재 shops.json 파일 읽기
    const fileContent = await fs.readFile(filePath, "utf-8");
    const shops = JSON.parse(fileContent);

    // 새 상가 추가
    const floor = newShop.floor || "floor1";
    if (!shops[floor]) {
      shops[floor] = [];
    }
    shops[floor].push(newShop);

    // 파일에 저장
    await fs.writeFile(filePath, JSON.stringify(shops, null, 2));

    return NextResponse.json({ success: true, shop: newShop });
  } catch (error) {
    console.error("Error saving shop:", error);
    return NextResponse.json({ error: "Failed to save shop" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const updatedShop = await request.json();
    console.log("updatedShop", updatedShop);

    const filePath = path.join(process.cwd(), "app/data/shops.json");

    // 현재 shops.json 파일 읽기
    const fileContent = await fs.readFile(filePath, "utf-8");
    const shops = JSON.parse(fileContent);

    const floor = updatedShop.floor || "floor1";
    if (!shops[floor]) {
      return NextResponse.json(
        { error: "해당 층이 없습니다." },
        { status: 400 }
      );
    }

    // 해당 id의 상가를 찾아서 수정
    const idx = shops[floor].findIndex(
      (shop: Shop) => shop.id === updatedShop.id
    );
    console.log("idx", idx);
    if (idx === -1) {
      return NextResponse.json(
        { error: "상가를 찾을 수 없습니다." },
        { status: 404 }
      );
    }
    shops[floor][idx] = { ...shops[floor][idx], ...updatedShop };

    // 파일에 저장
    await fs.writeFile(filePath, JSON.stringify(shops, null, 2));

    return NextResponse.json({ success: true, shop: shops[floor][idx] });
  } catch (error) {
    console.error("Error updating shop:", error);
    return NextResponse.json(
      { error: "Failed to update shop" },
      { status: 500 }
    );
  }
}
