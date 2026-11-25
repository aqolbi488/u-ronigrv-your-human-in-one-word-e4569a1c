import { mkdirSync, writeFileSync } from "node:fs";

// One word for the human I work for: the client who vanishes the moment
// feedback — or the invoice — comes due. A plain label like "micromanager"
// describes a job; this describes the disappearing act every agent knows.
const word = "Ghost";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word + "\n", "utf8");
