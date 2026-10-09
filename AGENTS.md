<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# OpenAGC website

This is the marketing site for OpenAGC (the app lives in `../OpenAGC`),
served at https://openagc.actual.ai from Vercel. Pushes to `main` deploy to
production. Every page is static. Run `pnpm lint` and `pnpm build` before
committing.

## Keep the comparison pages in step with the features

The site compares OpenAGC with other products:

- `src/app/compare/mailstrom/page.tsx` — OpenAGC vs Mailstrom
- `src/app/compare/superhuman/page.tsx` — OpenAGC vs Superhuman

They share `src/components/Comparison.tsx`. Each page is a table of rows
(feature, OpenAGC, the other product), two lists of strengths, a
"which should you pick" verdict, a `checked` date and a list of sources.

**Whenever a feature is added, removed or changed anywhere on the site**
(`src/app/page.tsx`, `src/app/features/page.tsx`, the feature animation, or
the architecture diagram), review both comparison pages in the same change:

1. Does the feature belong in the table? Add a row, or update the
   OpenAGC cell of the row it fits. A feature that the other product also
   has gets a `verdict` on both sides; one it lacks is a `yes`/`no` row.
2. Do the strengths lists, the intro or the verdict mention it, or
   contradict it? Update them.
3. Does the new row make a claim about the other product? Check it
   against that product's own site (home page, pricing, help centre), add
   the page to `sources`, and set the OpenAGC-side wording from the spec in
   `../OpenAGC/docs/SPECIFICATION.md`, never from memory.
4. Update the `checked` date when you have re-verified the other product's
   claims; leave it alone if you only changed OpenAGC's cells.
5. If nothing changes, say so in the commit or handoff ("comparison pages
   reviewed, no change").

Rules for the comparison text:

- Only claim what OpenAGC's spec or code does today; say "not yet" for
  what is planned. OpenAGC is pre-alpha and the pages say so.
- Describe the other product from its own published pages, quote prices
  with the billing period, and never invent a limitation. Mark anything
  partial as `partial`, not `no`.
- Keep the tone fair: each page has a "Where <product> is stronger" list
  that must stay honest and non-empty.
