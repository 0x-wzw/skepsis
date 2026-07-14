---
name: skepsis
description: Surgical inquiry framework for research. Use before synthesis on complex, multidisciplinary, or high-stakes topics where sources disagree and blind spots are likely. Surfaces mental models, active debates, hidden incentives, and shadow variables. Not for simple factual lookups, tutorials, or quick summaries.
---

# SKEPSIS — Surgical Inquiry Framework

**Greek: σκέψις · inquiry, examination, consideration**

A research interrogation framework that maps the intellectual battlefield — mental models, live debates, hidden incentives, and blind spots — before you synthesize an answer.

---

## When to Use

| Scenario | Example |
|---|---|
| Complex, multidisciplinary topics | "AI agent infrastructure" |
| Contradictory or shallow search results | "What is actually happening with DeFi regulation?" |
| Mapping who disagrees and why | "Why do experts split on AGI timelines?" |
| High-stakes decisions | Policy analysis, investment thesis, strategic intelligence |

**Do not use for:** simple factual lookups, step-by-step tutorials, or quick summaries.

---

## Prerequisites

- A web search or research capability (any provider)
- A way to persist notes and cite sources across steps
- 10–20 minutes for the full protocol

---

## Architecture

### v1 — Three-Layer Core

| Layer | Question | Output |
|---|---|---|
| **L1** | What are the top thought leaders' mental models? | Mental models table |
| **L2** | What are the most active or controversial debates? | Debate mapping table |
| **L3** | What non-obvious areas should be considered? | Expansion list |

### v2 — Full Interrogator

Adds Layer 0 (falsify the premise first), incentive tracking on L1/L2, and Layer 3 shadow variables. Layer 4 is the synthesis pipeline.

| Layer | Focus | Key Addition |
|---|---|---|
| **L0** | Socratic destruction | Falsify your premise first |
| **L1** | Assumption archaeology | Surface *who benefits* |
| **L2** | Live ammunition | Narrative power and unsaid motives |
| **L3** | Shadow variables | Failed attempts, geographic blind spots |
| **L4** | Synthesis pipeline | Signal filtering, contrarian sizing |

---

## Usage

### Quick Start (v1)

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

### Full Protocol (v2)

**Step 1 — Layer 0: Socratic Destruction (≈5 min)**

Answer these *before* searching:

| Question | Purpose |
|---|---|
| What would make the opposite true? | Forces a falsification mindset |
| What am I *not* asking (because it is uncomfortable)? | Surfaces taboo variables |
| What would an adjacent expert say is wrong here? | Cross-domain stress test |

**Step 2 — Layer 1: Assumption Archaeology (≈15 min)**

| Name | Stated Model | Hidden Assumptions | Blind Spots | Career Incentive | Falsifiable Prediction |
|---|---|---|---|---|---|
| Expert A | Data-centric AI | Quality > size | Underestimates compute | Corporate labs, courses | "Data labeling beats scale" — testable on benchmarks |
| Expert B | Compute-as-strategy | Scaling laws dominate | Ignores data bottlenecks | Advisory, speaking fees | "Exa-scale by 2026" — verify timeline |

**Filter:** *Who benefits from this model being true?*

**Step 3 — Layer 2: Live Ammunition (≈10 min)**

| Fault Line | Position A | Position B | Burden of Proof | Who is betting $ / rep? | Narrative Power | Unsaid Motive |
|---|---|---|---|---|---|---|
| Centralized vs decentralized AI control | Safety requires central oversight | Decentralization prevents capture | On A: prove safety | Frontier labs vs open ecosystems | A captures media, regulators | A: regulatory moat; B: relevance |

**Heuristic:** 60/40 debates yield maximum learning. 90/10 debates — investigate the 10%; alpha lives there.

**Step 4 — Layer 3: Shadow Variables (≈10 min)**

| Category | Inquiry |
|---|---|
| Lindy constraints | Which 10+ year-old decisions still limit this space? |
| Incentive cascades | Who downstream is affected by the upstream narrative? |
| Temporal asymmetry | Which views are rising vs fading? |
| Geographic blind spots | How do non-Western regions approach this? |
| Failed attempts | What was tried and died, and why? |

**Step 5 — Layer 4: Synthesis Pipeline (≈5 min)**

| Filter | Action |
|---|---|
| Source credence | Rank by track record, skin in game, incentive alignment |
| Controversy weighting | Symmetric debates (both sides have evidence) > asymmetric |
| Recency correction | Weight views that survived rebuttal over new hot takes |
| Contrarian sizing | Research energy ∝ contrarian_score × evidence_quality |

---

## Output Formats

### Mental Models Table

```
| Name | Model | Assumptions | Blind Spots | Conflicts |
|------|-------|-------------|-------------|-----------|
```

### Debate Mapping Table

```
| Fault Line | Position A | Position B | Evidence A | Evidence B | Actors |
|------------|------------|------------|------------|------------|--------|
```

### Non-Obvious Expansion

```
Cross-domain:  <analogies from other fields>
Second-order:  <downstream effects>
Hidden:        <variables no one is tracking>
Adjacent:      <related domains worth reading>
```

---

## Worked Example — "AI Agent Infrastructure"

### Layer 1 — Mental Models

| Name | Model | Hidden Assumptions | Blind Spots | Career Incentive | Falsifiable Prediction |
|---|---|---|---|---|---|
| Data-centric camp | Quality data > model size | Iterative labeling ROI | Compute-scale effects | Labs, courses | "Data-centric beats scale on benchmarks" |
| Compute-first camp | Scaling laws dominate | First to exa-scale wins | Data pipeline bottlenecks | Advisory, speaking | "Exa-scale by <year>" |
| Harm-centric camp | LLMs amplify bias | Deployment = harm amplification | Emergent capabilities | Academic, institutional | "Measurable bias amplification in production" |
| Crypto-economic camp | Agents need economic incentives | Decentralization prevents capture | Adoption readiness, latency | Web3 ecosystem | "Token economies coordinate agents" |
| Centralized-safety camp | Frontier needs central oversight | Gradual deployment reduces risk | Single point of failure | Frontier lab valuations | "Central oversight prevents catastrophe" |

### Layer 2 — Debate Mapping

| Fault Line | Position A | Position B | Burden of Proof | Betting $ / Rep | Narrative Power | Unsaid Motive |
|---|---|---|---|---|---|---|
| Centralized vs decentralized control | Safety requires central oversight | Decentralization prevents capture | On A: prove safety gains; on B: prove coordination | Frontier labs vs DAOs, crypto VCs | A captures media, regulators | A: regulatory moat; B: keep crypto relevant |
| Open vs closed weights | Open accelerates safety research | Closed limits misuse | On A: prove safety benefit; on B: prove misuse prevention | Open-source labs vs closed labs | Open-source loud; closed quiet | Differentiation vs valuation protection |

### Layer 3 — Shadow Variables

**Lindy constraints:** Web2 winner-take-all economics baked into agent design assumptions. Early open-source theology still shapes "open vs closed" framing.

**Incentive cascades:** VC funds startup → startup needs growth → growth requires simple UI → complex safety features deprioritized.

**Temporal asymmetry:**
- Rising: skepticism of "agents as apps" (platform risk).
- Fading: "agents will replace apps" (ecosystem lock-in underestimated).

**Geographic blind spots:**
- State-controlled deployment as a social-stability lever (different safety paradigm).
- Mobile-first, bandwidth-constrained deployment (ignored by Western designs).
- Crypto-native ecosystems bypassing traditional finance.

**Failed attempts:**

| Attempt | Why it failed | Lesson for agents |
|---|---|---|
| Cyc | Hand-crafted ontology could not scale | Pure symbolic agents do not work |
| Semantic Web | RDF complexity killed adoption | Interoperability requires simplicity |
| Expert systems | Brittle rules, no learning | Agents need continuous adaptation |
| Intrusive assistants | UX friction outweighed capability | UX matters more than raw capability |

### Layer 4 — Synthesis

**Signal-to-noise:** peer-reviewed papers and dedicated panels are high signal; anonymous hot takes and hype threads are low signal.

**Controversy weighting:**

| Debate | Symmetry | Weight |
|---|---|---|
| Centralized vs decentralized | High — both sides have evidence | High priority |
| Open vs closed weights | Low — one side largely hypothetical | Medium |
| Economic incentives | Medium — evidence still early | Medium |

**Contrarian position sizing:**
- High research energy: "agents will not replace apps" (rising, evidence building).
- Medium: "decentralized agents viable" (contrarian, mixed evidence).
- Low: "AGI imminent via agents" (consensus, low information value).

---

## Parallel Execution Pattern

For time-boxed research, run Layers 1–3 in parallel (independent subagents or research passes), then execute Layer 4 as a synthesis pass over the merged output.

1. Fan out: L1, L2, L3 simultaneously.
2. Aggregate: merge tables, deduplicate sources.
3. Synthesize: run Layer 4 filters over the merged set.
4. Brief: produce final output in the caller's preferred format.

---

## Versions

| Version | Status | Description |
|---|---|---|
| v1.0 | Stable | Three-layer core (mental models, debates, non-obvious) |
| v2.0 | Stable | Adds Layer 0, incentive tracking, shadow variables, synthesis pipeline |

---

## Credits

Framework architecture and macro/policy integration by Octavian. Intelligence-pipeline and signal-processing design contributed under the OctoberXin collaboration. Text-layout inspiration from Cheng Lou (Pretext).
