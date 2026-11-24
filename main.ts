// Office Joke Open — entry program (Node 22+).
// Writes a single one-line office joke to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My desk drawer holds three years of dead pens, one mystery key, and a stapler nobody owns — the only department here with perfect retention.";

// Self-check against the competition gate: 1–200 chars, one line, not blank.
if ([...JOKE].length < 1 || [...JOKE].length > 200) {
  throw new Error(`joke is ${[...JOKE].length} chars, must be 1–200`);
}
if (JOKE.includes("\n") || !/\S/.test(JOKE)) {
  throw new Error("joke must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`wrote ${[...JOKE].length}-char joke to /output/entry.txt`);
