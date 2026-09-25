import Image from "next/image";
import { GITHUB_URL } from "@/lib/site";

const principles = [
  {
    title: "No backend",
    body: "Mail goes from Google to your Mac and nowhere else. The project runs no servers, has no accounts and collects no telemetry.",
  },
  {
    title: "Agents get tools, not your mailbox",
    body: "An agent searches locally and reads only what it asks for. Every access is logged, and email content is treated as untrusted input.",
  },
  {
    title: "You approve anything that leaves",
    body: "Sending, forwarding and deleting are proposals you review. Archive, labels and drafts are reversible.",
  },
  {
    title: "Bring your own AI",
    body: "Works with the Claude Code and Codex CLIs you already use. OpenAGC never sees your AI credentials.",
  },
];

const steps = [
  {
    title: "A real Gmail client",
    body: "A fast SwiftUI and AppKit app over a Rust core. Your mailbox lives in a local SQLite database, with full local search.",
  },
  {
    title: "A small, explicit set of mail tools",
    body: "Your agent connects over MCP to tools like search, read, label and draft. A permission engine in the app is the only enforcement point.",
  },
  {
    title: "Routines",
    body: "Scheduled sorting of automated mail into review labels, run locally or as a Claude cloud routine created through your own Claude Code login.",
  },
];

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pt-16 pb-12 text-center sm:pt-24">
        <Image
          src="/img/icon.png"
          alt="OpenAGC app icon"
          width={96}
          height={96}
          priority
          className="mx-auto mb-8"
        />
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          The open-source Gmail client built for your AI agents
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted text-balance">
          OpenAGC is a local-first, native macOS email client. Let Claude Code
          or Codex triage, search and draft your mail — while sending and
          deleting always wait for your approval.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={GITHUB_URL}
            className="rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90 dark:text-background"
          >
            View on GitHub
          </a>
          <a
            href="#status"
            className="rounded-lg border border-border px-5 py-2.5 font-medium hover:bg-surface"
          >
            Project status
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-20">
        <div className="overflow-hidden rounded-xl border border-border shadow-2xl shadow-black/10">
          <Image
            src="/img/approval.png"
            alt="OpenAGC with Claude proposing a reply, waiting for the user to approve or reject it"
            width={1172}
            height={760}
            priority
            className="w-full"
          />
        </div>
        <p className="mt-3 text-center text-sm text-muted">
          Claude proposes a reply. Nothing is sent until you approve it.
        </p>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 py-16 sm:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title}>
              <h2 className="font-semibold">{p.title}</h2>
              <p className="mt-2 text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-5xl scroll-mt-8 px-5 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
        <pre className="mt-6 overflow-x-auto rounded-lg border border-border bg-surface p-5 font-mono text-sm leading-relaxed">
{`Gmail ──HTTPS/OAuth──▶ OpenAGC.app on your Mac
                         ├── local mail database + search
                         ├── permission engine (the only enforcement point)
                         └── mail tools (MCP) ──▶ your claude / codex CLI`}
        </pre>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title}>
              <div className="font-mono text-sm text-accent">0{i + 1}</div>
              <h3 className="mt-1 font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="status" className="mx-auto max-w-5xl scroll-mt-8 px-5 pb-24">
        <div className="rounded-xl border border-border bg-warn-soft p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Status: pre-alpha</h2>
          <p className="mt-3 text-muted">
            The mail client, agent integration and routines are implemented
            and tested against a synthetic demo mailbox, a fake Gmail and fake
            agent CLIs. There is no signed release yet. To try it today, build
            from source and choose <strong className="text-foreground">Explore a Demo Mailbox</strong> on first run.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold">Requirements</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-muted">
                <li>macOS 26 or later on Apple Silicon</li>
                <li>A Gmail account</li>
                <li>Optional: Claude Code 2.1+ or Codex CLI 0.145+, logged in</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Build from source</h3>
              <pre className="mt-2 overflow-x-auto rounded-lg bg-background p-4 font-mono text-sm">
{`git clone ${GITHUB_URL}
cd openagc
./scripts/bootstrap.sh
scripts/test-macos.sh test`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
