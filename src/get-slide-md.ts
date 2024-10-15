import path from "node:path";
export async function getSlideTexts(dir: string) {
  const dirPath = path.join(Deno.cwd(), "src", "courses", dir, "slides");
  console.log(dirPath);

  const slideNames = Deno.readDir(dirPath);
  const slideTexts = [];
  for await (const slideName of slideNames) {
    if (!slideName.name.endsWith(".md") || slideName.isDirectory) {
      continue;
    }
    const fileName = slideName.name;
    const text = await Deno.readTextFile(path.join(dirPath, fileName));
    slideTexts.push({ fileName, text });
  }
  return slideTexts;
}
