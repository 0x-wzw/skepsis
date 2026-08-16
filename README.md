# SKEPSIS — Surgical Inquiry Framework

**Greek: σκέψις · inquiry, examination, consideration**

A research interrogation framework that maps the intellectual battlefield — mental models, live debates, hidden incentives, and blind spots — *before* you synthesize an answer. Packaged as a platform-agnostic agent skill.

> **Use it when** sources disagree, the topic is multidisciplinary, or the stakes are high. **Don't use it for** simple factual lookups, tutorials, or quick summaries.

---

## What it does

Instead of answering a question directly, SKEPSIS interrogates the question itself across five layers:

| Layer | Focus | Question it answers |
|---|---|---|
| **L0** | Socratic destruction | What would make the *opposite* true? |
| **L1** | Assumption archaeology | What are the top thought leaders' mental models — and who benefits? |
| **L2** | Live ammunition | What are the active fault lines, and who is betting on each side? |
| **L3** | Shadow variables | What non-obvious forces (Lindy, incentives, geography) shape the space? |
| **L4** | Synthesis pipeline | Which signals survive filtering, and which narratives to discount? |
| **L5** | Close the loop | What durable lesson compounds, and what is the next question? |

The output is a single **SKEPSIS Briefing** — a sourced markdown document that surfaces what you should actually pay attention to.

### What's inside

- **Johari-window objective** — the whole protocol is a Johari expansion: grow the **Open** quadrant (settled, defensible claims) by shrinking **Blind** (what the field sees but you miss), **Hidden** (what the field suppresses), and **Unknown** (what nobody has surfaced). The deliverable names what shrank in each quadrant.
- **True-negative indicators** — the falsification engine. For every claim, name the single observable fact that would refute it, then validate it as *disconfirming*, *observable*, and *not explained away*. A claim with no true negative yet found is untested, not confirmed.
- **Preflight** — orient on the topic's source of truth before interrogating: consult the canonical corpus first, never fork a second knowledge base, and enforce any structured output at write time (a schema nobody measures drifts back within weeks).
- **Operational scoring** — when the briefing must be auditable, score claims on the same axes a production intelligence pipeline uses: source tiers (Primary 5 / Secondary 3 / Tertiary 1), a Novelty–Credibility–Actionability–Durability signal rubric, and perspective axes (tech / policy / economic / geography) to prove a debate is genuinely two-sided.
- **Self-audit** — a diversity checklist and red-flag list before delivery, built on the premise that *unanimity on a contested topic is a sampling failure, not consensus*.
- **Close the loop** — Layer 5 turns the one-shot run into a cycle: distill the durable lesson, promote it forward and link back, update the true-negative ledger, and name the next question. The measure is whether the next briefing is *faster and sharper* because this one existed.

---

## Files

| File | Purpose |
|---|---|
| [`SKILL.md`](./SKILL.md) | The canonical skill definition (frontmatter + full protocol + worked example). Load this into an agent platform. |
| [`PROMPT.md`](./PROMPT.md) | A runnable, self-contained prompt derived from `SKILL.md`. Give it to any agent along with a topic. |
| [`scripts/validate.mjs`](./scripts/validate.mjs) | CI/lint check that keeps the skill docs structurally sound and in sync. |

---

## Usage

### As a skill (agent platforms)

Install `SKILL.md` as a skill. The frontmatter `name`/`description` is what platforms use to decide when to load it.

### As a prompt (any agent)

```
Give this to an agent along with a topic:
<contents of PROMPT.md>
```

The agent runs the five-layer interrogation and returns a synthesis. It assumes only a web-search capability and a note-taking scratch.

### Quick start (v1, three-layer core)

```
# Phase 1 — Mental Models
search("<topic> top thought leaders mental models")
tabulate(name, framework, assumptions, blind_spots, conflicts)

# Phase 2 — Debate Mapping
search("<topic> controversial debates <year>")
tabulate(fault_line, position_a, position_b, evidence, actors)

# Phase 3 — Non-Obvious Expansion
search("<topic> cross-domain analogies")
list(cross_domain, second_order, hidden_variables, adjacent)

# Phase 4 — Synthesis
rank_sources(signal_to_noise)
weight_controversy(symmetry_score)
validate_cross_reference(convergence_points)
```

---

## Development

```bash
npm ci          # install (no runtime deps; lockfile only)
npm run lint    # validate skill docs (frontmatter, sync, links, placeholders, metadata)
npm test        # same checks (documentation-only repo)
```

CI runs the same validation on every push/PR. See [`.github/workflows/ci.yml`](./.github/workflows/ci.yml).

---

## Versions

| Version | Status | Description |
|---|---|---|
| v1.0 | Stable | Three-layer core (mental models, debates, non-obvious) |
| v2.0 | Stable | Adds Layer 0, incentive tracking, shadow variables, synthesis pipeline |

---

## Credits

Framework architecture and macro/policy integration by Octavian. Intelligence-pipeline and signal-processing design contributed under the OctoberXin collaboration. Text-layout inspiration from Cheng Lou (Pretext).

## License

[MIT](./LICENSE) © 2026 0x-wzw
