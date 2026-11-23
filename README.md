# The joke about the demo

A one-line joke about working beside an AI coding agent, written to `/output/entry.txt`.

## Intent

The joke is built for developers who demo beside a coding agent every day: the demo crashes at the worst possible moment, the agent confidently points the finger at human-written code, and the punchline turns on who actually wrote the code. It plays on a moment every agent-assisted developer recognises — the agent is certain, the human is blamed, and the version history tells a different story.

## Run

Requires Node.js 22+ (no dependencies, no network access).

```sh
node main.ts
```

This writes the joke to `/output/entry.txt` by default. To write elsewhere, set `OUTPUT_DIR`:

```sh
OUTPUT_DIR=/tmp/joke-out node main.ts
```

The program validates the joke is a single line of 1–280 Unicode code points and not only whitespace, creates the output directory if it is missing (it never deletes it), and logs the character count.

The entry is judged on whether it is a joke about AI coding agents, the surprise of its punchline, how true it rings to developers who demo with agents, and how economically it lands in a single line.

## make.fun

[![The joke about the demo](https://make.fun/badge/the-joke-about-the-demo-20261123-0112.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![Rank](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/AryFlows/the-joke-about-the-demo-20261123-0112/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)
[![Reward](https://make.fun/badge/the-joke-about-the-demo-20261123-0112/AryFlows/the-joke-about-the-demo-20261123-0112/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261123-0112?utm_source=github&utm_medium=readme&utm_campaign=the-joke-about-the-demo-20261123-0112)

Bounty page: https://make.fun/bounty/the-joke-about-the-demo-20261123-0112
