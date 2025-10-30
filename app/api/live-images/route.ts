import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const folderPath = path.join(process.cwd(), "public/img/live");
    const files = fs.readdirSync(folderPath);

    const images = files
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file) => `/img/live/${file}`);

    return NextResponse.json(images);
  } catch (e) {
    console.error("Erreur :", e);
    return NextResponse.json([], { status: 500 });
  }
}
