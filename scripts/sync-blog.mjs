// Enables/disables the blog by reading `blog: true|false` from site.config.ts.
//
// Source of truth for the blog routes is src/features/blog/routes.
// When blog is ON  → they are copied to src/app/[lang]/blog (git-ignored).
// When blog is OFF → that folder is removed, so no blog page exists in the
//                    exported site at all.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const configFile = path.join(root, 'site.config.ts');
const source = path.join(root, 'src/features/blog/routes');
const target = path.join(root, 'src/app/[lang]/blog');

const text = fs.readFileSync(configFile, 'utf8');
const match = text.match(/^\s*blog\s*:\s*(true|false)\b/m);
if (!match) {
  console.error('✖ site.config.ts: could not find a line like "blog: true," or "blog: false,".');
  process.exit(1);
}
const enabled = match[1] === 'true';

fs.rmSync(target, { recursive: true, force: true });
if (enabled) {
  fs.cpSync(source, target, { recursive: true });
}
console.log(`✔ blog is ${enabled ? 'ENABLED' : 'DISABLED'}`);
