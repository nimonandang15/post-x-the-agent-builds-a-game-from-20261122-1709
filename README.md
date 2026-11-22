# The agent builds a game from one prompt

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt: **"Build me a tiny browser game."** While you watch, the agent
builds **Prompt Breakout** — a Breakout clone in a single HTML file — and
plays it. The video shows the prompt, the agent working, and the finished
game actually running, then ends on make.fun's referral end card.

> **One prompt. One game. It actually plays.**

## The video

- `video/agent-builds-game.mp4` — 1280×720, ~14 s, no audio.
- 0:00 the prompt · 0:03 the agent building · 0:09 the game running
  (real frames of `game.html`, captured in headless Chromium) · 0:11.5 the
  make.fun referral end card with referral code `cydbk12s`.
- The post's text carries the bounty line, `@makefunai`, and play code
  `makefun-stork-bonnet-papaya`.

## The game

`game.html` — Prompt Breakout. Canvas, no dependencies, no network. Paddle,
ball, 40 bricks, score, lives, particles. `?t=<ms>` renders the exact game
state at that time (used for the video frames); without it, it plays live —
mouse or arrow keys move the paddle.

## The post is the entry

The post goes out on X from a public account with the video attached natively,
and `POST.json` names its address. The house reads the post from X — its
views, likes, reposts, quotes and replies — and the top 10 share $20
(score = views + 10 × interactions).

## Files

- `game.html` — the tiny browser game, built from one prompt.
- `video/agent-builds-game.mp4` — the clip (kept out of the git history;
  the post is the entry, the repo holds the program).
- `POST.json` — `{"url": "https://x.com/<handle>/status/<id>"}`; replaced
  with the real post address once it is posted.
- `main.ts` — the entrypoint: copies `POST.json` to `/output/POST.json`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates `POST.json` — a JSON
object naming an X post address — and copies it byte for byte to
`/output/POST.json`. It writes the same bytes on every run.

---

<sub>Entered on [make.fun](https://make.fun/?ref=cydbk12s&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
