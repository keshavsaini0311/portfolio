# Portfolio design proposal

Status: proposal only. The current PR updates content; it does not implement this
redesign or deploy the site.

## Recommended direction: an engineering notebook

Lead with useful software and clear engineering decisions. The first screen
should answer who Keshav is, what he has built, and where a reviewer can try it.
The current animated console can move into a project example or be removed. It
uses much of the first screen without letting a visitor experience the work.

### First screen

- Name, backend role and one short introduction.
- Primary links: **Try SyncSofa** and **Read resume**; GitHub remains secondary.
- Three labelled facts: **100K+ daily users, employer app**; **200 to 100 ms,
  PostgreSQL read latency**; **96% to 98.4%, OTP delivery**. These are different
  measures, so avoid presenting them as one product's results.
- A real screenshot of SyncSofa, with a direct live-demo link. Use a local test
  room with fictional participants for screenshots, never real chats or calls.

### Reading order

| Section | What the visitor should learn |
| --- | --- |
| Introduction and working demo | Who I am and something you can try immediately |
| Selected work | Three substantial examples, each readable in under a minute |
| Production results | The verified latency, reliability and security evidence |
| Experience and tools | Employer, internship/full-time context, stack and coding profiles |
| Contact | Job-search email, GitHub, LinkedIn and the current resume |

Selected work should feature:

1. **SyncSofa:** screenshot, demo, source, architecture summary and test evidence.
   Label six people as a configured room limit. Do not imply six active users or
   a measured scale benchmark. Mention temporary demo storage where relevant.
2. **Screen version control:** a small conceptual base/draft/live diagram,
   field-level conflict example and the stale-write safeguard. No employer code
   or internal screenshots.
3. **Configuration promotion:** a conceptual source/diff/target flow showing
   selective changes, reference remapping and preservation of a target hotfix.

The other systems can remain in a shorter supporting list. Avoid repeating the
same BFF story in the introduction, a case study and several equally large cards.

### Visual direction

- Warm off-white background, charcoal text and a restrained blue for links.
- Clear sans-serif headings, readable body copy, monospace reserved for small
  technical examples. Keep the existing typefaces initially to avoid making a
  font change the substance of the redesign.
- More room for screenshots and diagrams; fewer outlined boxes and tiny labels.
- A narrow reading column for case studies and a wider area for visual examples.
- Show details on deliberate interaction, with native disclosure controls if
  needed. No simulated live activity, mandatory animation or scroll hijacking.
- On phones, use the same reading order in a single column. Keep demo and resume
  links visible, labels wrapping naturally, and every interaction keyboard usable.

## Existing alternatives

- [Terminal session, PR #2](https://github.com/keshavsaini0311/portfolio/pull/2):
  distinct personality, but long technical copy becomes harder to scan.
- [Service map, PR #3](https://github.com/keshavsaini0311/portfolio/pull/3): a good
  way to explain systems, but the map should use generic concepts rather than
  internal service names and must work without understanding the graph first.

The notebook direction can borrow one small conceptual diagram from the service
map and still keep a straightforward reading experience.

## Implementation order if chosen

1. Build a separate design branch from the updated content branch.
2. Redo only the hero and one SyncSofa project section for comparison.
3. Add the two conceptual work diagrams after the visual direction is reviewed.
4. Check desktop and mobile layout, keyboard navigation, reduced motion, resume
   download and every demo/source link. Keep the demo on Render.

No publication is part of this proposal. Vercel Git auto-deployment is disabled
in this PR's `vercel.json`; a future hosting decision is separate.
