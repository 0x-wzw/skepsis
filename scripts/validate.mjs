#!/usr/bin/env node
/**
 * SKEPSIS — skill validation script.
 *
 * Runs in CI (and locally via `npm run lint`) to make sure the skill's
 * documentation stays structurally sound. Because this repo is
 * documentation-only, this is the "lint + test" — it checks the things that
 * actually matter for a distributable agent skill:
 *
 *   1. SKILL.md frontmatter is present and well-formed (name + description).
 *   2. PROMPT.md is a faithful, self-contained derivation of SKILL.md
 *      (the five layers and the deliverable sections must both be present).
 *   3. Internal markdown links resolve to files that exist.
 *   4. No unfinished placeholders (TODO / FIXME / TBD / lorem ipsum).
 *   5. package.json metadata is complete enough to publish.
 *
 * Exits non-zero on any failure so CI can gate on it.
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const ok = (msg) => console.log(`  \u2713 ${msg}`);
const fail = (msg) => errors.push(msg);

const read = (p) => readFileSync(join(root, p), 'utf8');

// ---------------------------------------------------------------------------
// 1. SKILL.md frontmatter
// ---------------------------------------------------------------------------
console.log('SKILL.md frontmatter');
const skill = read('SKILL.md');
const fm = skill.match(/^---\r?\n([\s\S]*?)\r?\n---/);
if (!fm) {
  fail('SKILL.md is missing YAML frontmatter (must start with --- ... ---)');
} else {
  const body = fm[1];
  const name = body.match(/^name:\s*(.+)$/m);
  const desc = body.match(/^description:\s*(.+)$/m);
  if (!name) fail('SKILL.md frontmatter is missing "name"');
  else ok(`name: ${name[1].trim()}`);
  if (!desc) fail('SKILL.md frontmatter is missing "description"');
  else ok('description present');
  if (!/^version:\s*\S+/m.test(body)) {
    fail('SKILL.md frontmatter is missing "version" (recommended for skill distribution)');
  } else ok('version present');
}

// ---------------------------------------------------------------------------
// 2. PROMPT.md must be a faithful derivation of SKILL.md
// ---------------------------------------------------------------------------
console.log('PROMPT.md <-> SKILL.md sync');
const prompt = read('PROMPT.md');
const layers = ['Layer 0', 'Layer 1', 'Layer 2', 'Layer 3', 'Layer 4', 'Layer 5'];
for (const layer of layers) {
  if (!skill.includes(layer)) fail(`SKILL.md is missing "${layer}"`);
  if (!prompt.includes(layer)) fail(`PROMPT.md is missing "${layer}"`);
}
ok('all five layers present in both files');

// The deliverable section names must match between the two.
const deliverableSections = ['L0', 'L1', 'L2', 'L3', 'L4', 'Sources'];
for (const s of deliverableSections) {
  if (!prompt.includes(`## ${s}`) && !prompt.includes(`### ${s}`)) {
    fail(`PROMPT.md deliverable is missing section "${s}"`);
  }
}
ok('deliverable sections present in PROMPT.md');

// ---------------------------------------------------------------------------
// 3. Internal markdown links resolve
// ---------------------------------------------------------------------------
console.log('internal links');
const linkRe = /\[[^\]]*\]\(([^)]+)\)/g;
let m;
const checked = new Set();
while ((m = linkRe.exec(skill)) !== null) {
  const target = m[1].split('#')[0];
  if (!target || /^https?:|^mailto:|^#/.test(target)) continue;
  if (checked.has(target)) continue;
  checked.add(target);
  if (!existsSync(join(root, target))) {
    fail(`SKILL.md links to missing file: ${target}`);
  }
}
ok(`${checked.size} internal link(s) resolved`);

// ---------------------------------------------------------------------------
// 4. No unfinished placeholders
// ---------------------------------------------------------------------------
console.log('placeholders');
const placeholderRe = /\b(TODO|FIXME|TBD|XXX|lorem ipsum)\b/i;
for (const [label, content] of [['SKILL.md', skill], ['PROMPT.md', prompt]]) {
  if (placeholderRe.test(content)) {
    fail(`${label} contains an unfinished placeholder (TODO/FIXME/TBD/lorem ipsum)`);
  }
}
ok('no unfinished placeholders');

// ---------------------------------------------------------------------------
// 5. package.json metadata
// ---------------------------------------------------------------------------
console.log('package.json metadata');
const pkg = JSON.parse(read('package.json'));
for (const field of ['name', 'version', 'description', 'license', 'repository', 'author']) {
  if (!pkg[field]) fail(`package.json is missing "${field}"`);
}
ok('required metadata present');

// ---------------------------------------------------------------------------
// Report
// ---------------------------------------------------------------------------
console.log('');
if (errors.length) {
  console.error(`\u2717 ${errors.length} problem(s) found:\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log('\u2713 All checks passed.');
