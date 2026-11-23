import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The demo died on stage, my coding agent blamed my code, then git blame listed one author on every line — the agent.";

const charCount = [...JOKE].length;

if (charCount < 1 || charCount > 280) {
  throw new Error(`joke must be 1-280 characters, got ${charCount}`);
}

if (JOKE.trim().length === 0) {
  throw new Error("joke must not be only whitespace");
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote entry.txt (${charCount} characters)`);
