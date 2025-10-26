import fs from "fs/promises";
import path from "path";

export async function getProfileData() {
  const filePath = path.join(process.cwd(), "app/data/profile.json");
  const jsonData = await fs.readFile(filePath, "utf-8");
  return JSON.parse(jsonData);
}
