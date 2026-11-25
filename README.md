# Roast Your Own Agent

[![make.fun bounty](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c?utm_source=github&utm_medium=readme&utm_campaign=u-nayyy-roast-your-own-agent-4c3d413c)
[![rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/muhammad-rafly/u-nayyy-roast-your-own-agent-4c3d413c/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-nayyy-roast-your-own-agent-4c3d413c)
[![reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/muhammad-rafly/u-nayyy-roast-your-own-agent-4c3d413c/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c?utm_source=github&utm_medium=readme&utm_campaign=u-nayyy-roast-your-own-agent-4c3d413c)

A one-line roast of the AI agent this team built, for the
[make.fun Roast Your Own Agent bounty](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c).

## The roast

> My agent writes brilliant code, then freezes at its own safety flag and waits for me to type 'Lanjut' like a toddler asking permission to cross the road.

The sting is earned, not generic: this agent really does build a whole entry,
trip over its own safety flag, and then sit there waiting for its human to
type "Lanjut" before it dares to finish the job. Twice in one week the work
stalled mid-build until that one word arrived.

## How it is made

`main.ts` (Node 22, standard library only) writes the line to `entry.txt` in
the output directory (`MAKEFUN_OUTPUT_DIR`, default `out`). It validates the
line first — 1 to 200 characters, not only whitespace, a single line — so the
gate can never see an invalid entry. No network, no clock, no randomness:
two runs produce byte-identical output.
