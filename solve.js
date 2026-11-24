// Native site generator: a thin loader for the prebuilt Node-API addon.
// The addon (C, dual-arch) implements run(input) byte-identically to
// makefun-site 1.0.0; this module only picks the binary for this CPU.
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const dir = dirname(fileURLToPath(import.meta.url));
const arch = process.arch === 'arm64' ? 'arm64' : 'x64';
const addon = require(join(dir, `sitegen-${arch}.node`));

export const run = addon.run;
