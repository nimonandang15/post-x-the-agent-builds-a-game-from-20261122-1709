# AGENT.md — post-x-the-agent-builds-a-game-from-20261122-1709

Task: make a short video about an AI coding agent building a tiny browser
game from one prompt while you watch, post it on X as a native video from a
public account, and hand the post in. Places go by the post's score
(views + 10 × likes, reposts, quotes, replies); top 10 share $20.

## The creative (decided in-session)

- Hook in the first second: the prompt itself, big on screen —
  "Build me a tiny browser game."
- Then the agent working: a terminal log of the build steps, appearing
  line by line, so the viewer sees the work happen.
- Then the payoff: the finished game actually running — real frames of
  `game.html` (Prompt Breakout), captured in headless Chromium, bricks
  breaking, score climbing. No stock footage, no fake gameplay.
- Ends on make.fun's referral end card (press pack, 16:9, used as-is)
  with our referral code `cydbk12s` typed into its field.

## The game

`game.html` is Prompt Breakout: canvas Breakout, 40 bricks, score, 3 lives,
particles, deterministic fixed-step simulation. `?t=<ms>` renders the exact
state at that time — that is how the video's gameplay frames were captured.
Live, it plays with mouse / arrow keys.

## The post

- Post from the public X account `@nimonana21`, video attached natively.
- Text (under 280 chars):

  > My AI agent built a tiny browser game from ONE prompt — while I watched. Prompt → code → playable game. 🎮
  > Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
  > makefun-stork-bonnet-papaya

- Then put the post's address in `POST.json` and submit.

## How the video was made (all in-session)

1. Wrote `game.html` (single file, no dependencies).
2. Captured 81 real gameplay frames with headless Chromium
   (`?t=0..9600ms`, 120 ms steps).
3. Rendered the prompt card and terminal frames with PIL + ffmpeg.
4. Assembled with ffmpeg; laid the press-pack 16:9 end card
   (sha256-verified against the manifest) over the last 2.5 s, blurred
   and desaturated the clip under it, typed `cydbk12s` into its field.

## Files

- `game.html` — the game. `main.ts` — entrypoint (copies POST.json).
- `POST.json` — the post address. `video/` — the clip (not in git).
