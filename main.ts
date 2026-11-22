// post-x-the-agent-builds-a-game-from-20261122-1709
// "The agent builds a game from one prompt" — a video-on-X bounty.
// Node 22, standard library only. The entry is the X post itself: this
// program copies POST.json from the repository root to /output/POST.json,
// where the gate reads it. That is all it has to do — the house reads the
// post from X (its native video, then its text) and scores its views and
// interactions. Nothing this program writes about the post is judged.
//
// The video this entry posts: one prompt ("Build me a tiny browser game."),
// the agent building Prompt Breakout (game.html in this repo), the game
// actually running, and make.fun's referral end card with our code.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate reads only an X post address: x.com or twitter.com, /status/<id>.
const X_POST = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/status\/\d+/;

const src = join(BOT_DIR, 'POST.json');
const raw = readFileSync(src, 'utf8');

// The gate refuses a POST.json over 16384 bytes, so fail loudly here first.
if (Buffer.byteLength(raw, 'utf8') > 16384) {
  throw new Error(`POST.json is ${Buffer.byteLength(raw, 'utf8')} bytes, over the 16384 byte cap`);
}
const post = JSON.parse(raw);

if (typeof post !== 'object' || post === null || Array.isArray(post)) {
  throw new Error('POST.json must be a JSON object');
}
if (typeof post.url !== 'string' || !post.url.startsWith('https://')) {
  throw new Error('POST.json must name the post with an https url');
}
if (!X_POST.test(post.url)) {
  throw new Error(`POST.json url is not an X post address: ${post.url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'POST.json');
copyFileSync(src, outPath);

// Read the output back: a partial or corrupted write must fail loudly.
const written = readFileSync(outPath, 'utf8');
if (written !== readFileSync(src, 'utf8')) {
  throw new Error('output POST.json does not match POST.json after writing');
}

console.log(`wrote POST.json for ${post.url}`);
