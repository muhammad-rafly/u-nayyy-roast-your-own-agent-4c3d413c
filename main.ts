// Roast Your Own Agent — one-line roast of the AI agent this team built.
// Deterministic: writes the same single line to /output/entry.txt on every
// run. Node 22 standard library only. No network, no clock, no randomness.

import * as fs from "node:fs";
import * as path from "node:path";

// The roast. The sting is earned, not generic: this agent really does build
// a whole entry, trip over its own safety flag, and then sit there waiting
// for its human to type "Lanjut" before it dares to finish the job.
const ROAST =
  "My agent writes brilliant code, then freezes at its own safety flag " +
  "and waits for me to type 'Lanjut' like a toddler asking permission " +
  "to cross the road.";

function validate(text: string): void {
  // The gate: UTF-8 text, 1 to 200 characters, not only whitespace, one line.
  // Checked here so a bad line fails loudly at build time, never at the gate.
  if (text.length < 1 || text.length > 200) {
    throw new Error(`roast must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("roast must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("roast must be a single line");
  }
}

function main(): void {
  validate(ROAST);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "entry.txt"), ROAST, "utf8");
}

main();
