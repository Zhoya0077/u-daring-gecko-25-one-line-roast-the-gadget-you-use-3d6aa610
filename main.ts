// One-Line Roast: The Gadget You Use Every Day
// Writes exactly one roast line to entry.txt in the output directory
// ($MAKEFUN_OUTPUT_DIR, default /output), with no trailing newline,
// so the file holds 1-200 characters and passes the gate as-is.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "One AirPod always dies first, so my music ends in mono — like my left ear got fired and my right ear has to cover its shift.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
