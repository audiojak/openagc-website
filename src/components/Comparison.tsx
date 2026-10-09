import Link from "next/link";
import { GITHUB_URL } from "@/lib/site";

export type Verdict = "yes" | "partial" | "no";

export type Row = {
  feature: string;
  openagc: { verdict?: Verdict; text: string };
  other: { verdict?: Verdict; text: string };
};

export type Comparison = {
  name: string;
  url: string;
  tagline: string;
  intro: string;
  checked: string;
  rows: Row[];
  theirStrengths: string[];
  ourStrengths: string[];
  choose: { them: string; us: string };
  /** Overrides for products used alongside OpenAGC rather than instead of it. */
  verdictTitle?: string;
  chooseLabels?: { them: string; us: string };
  sources: { label: string; url: string }[];
};

const marks: Record<Verdict, { glyph: string; label: string; className: string }> = {
  yes: { glyph: "●", label: "Yes", className: "text-green-600 dark:text-green-400" },
  partial: { glyph: "◐", label: "Partly", className: "text-amber-600 dark:text-amber-400" },
  no: { glyph: "○", label: "No", className: "text-muted" },
};

function Cell({ verdict, text }: { verdict?: Verdict; text: string }) {
  return (
    <td className="px-3 py-3 align-top text-muted">
      {verdict && (
        <span className={`mr-1.5 ${marks[verdict].className}`} aria-hidden>
          {marks[verdict].glyph}
        </span>
      )}
      {verdict && <span className="sr-only">{marks[verdict].label}: </span>}
      {text}
    </td>
  );
}

export default function ComparisonPage({ c }: { c: Comparison }) {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pt-16 pb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-balance">
          OpenAGC vs {c.name}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-muted">{c.tagline}</p>
        <p className="mt-4 max-w-3xl text-muted">{c.intro}</p>
        <p className="mt-4 text-sm text-muted">
          Checked against {c.name}&apos;s own site on {c.checked}. OpenAGC is
          pre-alpha and built from source; see{" "}
          <Link href="/#try" className="underline hover:text-foreground">
            how to try it
          </Link>
          . If something here is out of date,{" "}
          <a href={`${GITHUB_URL}/issues`} className="underline hover:text-foreground">
            tell us
          </a>
          .
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-surface text-left">
              <tr>
                <th scope="col" className="w-1/4 px-3 py-3 font-semibold">
                  &nbsp;
                </th>
                <th scope="col" className="w-[37.5%] px-3 py-3 font-semibold">
                  OpenAGC
                </th>
                <th scope="col" className="w-[37.5%] px-3 py-3 font-semibold">
                  {c.name}
                </th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((r) => (
                <tr key={r.feature} className="border-t border-border">
                  <th scope="row" className="px-3 py-3 text-left align-top font-medium">
                    {r.feature}
                  </th>
                  <Cell {...r.openagc} />
                  <Cell {...r.other} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-sm text-muted" aria-hidden>
          <span className={marks.yes.className}>●</span> yes ·{" "}
          <span className={marks.partial.className}>◐</span> partly ·{" "}
          <span className={marks.no.className}>○</span> no
        </p>
      </section>

      <section className="mx-auto grid max-w-5xl gap-10 px-5 pb-16 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold">Where {c.name} is stronger</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {c.theirStrengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Where OpenAGC is stronger</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-muted">
            {c.ourStrengths.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16">
        <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold">{c.verdictTitle ?? "Which should you pick?"}</h2>
          <p className="mt-3 text-muted">
            <strong className="text-foreground">{c.chooseLabels?.them ?? `Choose ${c.name}`}</strong>{" "}
            {c.choose.them}
          </p>
          <p className="mt-3 text-muted">
            <strong className="text-foreground">{c.chooseLabels?.us ?? "Choose OpenAGC"}</strong>{" "}
            {c.choose.us}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/#try"
              className="rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90 dark:text-background"
            >
              Try OpenAGC on your Mac
            </Link>
            <Link
              href="/features"
              className="rounded-lg border border-border bg-background px-5 py-2.5 font-medium hover:bg-surface"
            >
              All OpenAGC features
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24 text-sm text-muted">
        <h2 className="font-semibold text-foreground">Sources</h2>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          {c.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} className="underline hover:text-foreground">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4">
          {c.name} is a trademark of its owner. OpenAGC is not affiliated with
          it. Prices and features are as published by {c.name} on the date
          above and may have changed.
        </p>
      </section>
    </>
  );
}
