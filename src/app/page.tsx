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

const buckets = [
  { label: "1-Daily", cadence: "Daily", color: "bg-red-500" },
  { label: "2-Weekly-Newsletters", cadence: "Weekly", color: "bg-blue-500" },
  { label: "3-Weekly-Events", cadence: "Weekly", color: "bg-green-500" },
  { label: "4-Weekly-Finance", cadence: "Weekly", color: "bg-orange-500" },
  { label: "5-Monthly-Pitches", cadence: "Monthly", color: "bg-gray-400" },
];

function Shot({
  src,
  alt,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white shadow-xl shadow-black/10">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="w-full"
      />
    </div>
  );
}

function RoutineIllustration() {
  return (
    <div
      role="img"
      aria-label="A routine that sorts automated mail into daily, weekly and monthly labels, run on this Mac or published as a Claude cloud routine"
      className="rounded-xl border border-border bg-background p-5 shadow-xl shadow-black/10 sm:p-6"
    >
      <div className="flex items-baseline justify-between gap-4">
        <div className="font-semibold">Sort important mail</div>
        <div className="text-sm text-muted">Every hour</div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        <div className="rounded-lg border border-border px-3 py-2">
          <div className="font-medium">On this Mac</div>
          <div className="text-muted">Claude Code or Codex</div>
        </div>
        <div className="rounded-lg border-2 border-accent bg-accent-soft px-3 py-2">
          <div className="font-medium">Claude cloud routine</div>
          <div className="text-muted">Runs while your Mac sleeps</div>
        </div>
      </div>
      <ul className="mt-5 space-y-2 text-sm">
        {buckets.map((b) => (
          <li key={b.label} className="flex items-center gap-3">
            <span className={`size-2.5 shrink-0 rounded-full ${b.color}`} />
            <span className="font-mono">{b.label}</span>
            <span className="ml-auto text-muted">{b.cadence}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 border-t border-border pt-4 text-sm text-muted">
        Leaves alone: mail from people, threads you replied to, starred mail.
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#maintainers"
        className="block bg-accent px-5 py-2 text-center text-sm font-medium text-white hover:opacity-90 dark:text-background"
      >
        We&apos;re looking for maintainers — help build OpenAGC →
      </a>

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
          OpenAGC is a local-first, native macOS email client. Turn email into
          tasks, let Claude Code or Codex work through them, and sort your
          inbox on a schedule — while sending and deleting always wait for
          your approval.
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

      <section className="mx-auto max-w-6xl px-5 pb-20">
        <Shot
          src="/img/hero-tasks-agent.png"
          alt="OpenAGC's task list next to an email, with Claude proposing a reply that waits for the user to approve or reject it"
          width={1800}
          height={954}
          priority
        />
        <p className="mt-3 text-center text-sm text-muted">
          Your tasks, the email behind each one, and Claude working on it.
          Nothing is sent until you approve.
        </p>
      </section>

      <section id="features" className="mx-auto max-w-5xl scroll-mt-8 space-y-24 px-5 pb-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="font-mono text-sm text-accent">01</div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              Turn email into tasks, ready for agents
            </h2>
            <p className="mt-3 text-muted">
              Press <kbd className="rounded border border-border px-1.5 font-mono text-sm">t</kbd>{" "}
              on an email, or{" "}
              <kbd className="rounded border border-border px-1.5 font-mono text-sm">⇧T</kbd>{" "}
              on many, and Claude reads them and suggests what you need to do:
              a title, a category like Reply, Decide or Schedule, a due day,
              and why. You accept or edit each one.
            </p>
            <p className="mt-3 text-muted">
              Tasks live on your Mac, grouped by when they&apos;re due. Gmail
              only sees a <span className="font-mono text-sm">Task</span> label,
              so your web and phone inboxes stay in step.
            </p>
          </div>
          <Shot
            src="/img/task-dialog.png"
            alt="The New Task dialog with Claude's suggested title, the Reply category, a due date of today and the reason: the sender is waiting for an answer"
            width={920}
            height={734}
          />
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="md:order-2">
            <div className="font-mono text-sm text-accent">02</div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              Let an agent action the task
            </h2>
            <p className="mt-3 text-muted">
              Open a task and ask Claude or Codex to take it on: gather the
              information it needs, draft the reply, file the thread. The agent
              works through a small set of mail tools and proposes anything
              that would leave your Mac.
            </p>
            <p className="mt-3 text-muted">
              You review the proposal and approve or reject it. Reply from a
              task yourself and OpenAGC offers to mark it done once it&apos;s
              sent.
            </p>
          </div>
          <div className="md:order-1">
            <Shot
              src="/img/agent-task.png"
              alt="Claude, asked to draft the reply Emerson is waiting for, proposes sending Re: Onboarding plan, with Review, Reject and Approve buttons"
              width={1200}
              height={769}
            />
          </div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="font-mono text-sm text-accent">03</div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              Mail routines, on your Mac or in Claude&apos;s cloud
            </h2>
            <p className="mt-3 text-muted">
              Routines sort automated mail — alerts, newsletters, receipts,
              pitches — into labels you check daily, weekly or monthly, so your
              inbox holds only mail that needs a person.
            </p>
            <p className="mt-3 text-muted">
              Shape a routine in a structured editor and preview it, then run
              it locally with your own agent, or publish it as a Claude Code
              cloud routine through your own Claude login so it keeps going
              when your Mac is asleep.
            </p>
          </div>
          <RoutineIllustration />
        </div>
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
        <p className="mt-3 max-w-2xl text-muted">
          A fast SwiftUI and AppKit app over a Rust core. Your mailbox lives in
          a local SQLite database with full local search, and a permission
          engine in the app is the only way an agent reaches it.
        </p>
        <pre className="mt-6 overflow-x-auto rounded-lg border border-border bg-surface p-5 font-mono text-sm leading-relaxed">
{`Gmail ──HTTPS/OAuth──▶ OpenAGC.app on your Mac
                         ├── local mail database + search + tasks
                         ├── permission engine (the only enforcement point)
                         └── mail tools (MCP) ──▶ your claude / codex CLI`}
        </pre>
      </section>

      <section id="maintainers" className="mx-auto max-w-5xl scroll-mt-8 px-5 pb-20">
        <div className="rounded-xl border-2 border-accent bg-accent-soft p-6 sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            We&apos;re looking for maintainers
          </h2>
          <p className="mt-3 max-w-3xl text-muted">
            OpenAGC is MIT-licensed and built in the open. We&apos;re looking
            for people who want to help run it: reviewing pull requests,
            triaging issues, and owning parts of the app. It&apos;s a Swift
            (SwiftUI and AppKit) app over a Rust core, with agent integration
            through MCP — experience with any of these helps.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`${GITHUB_URL}/blob/main/CONTRIBUTING.md`}
              className="rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90 dark:text-background"
            >
              Read the contributing guide
            </a>
            <a
              href={`${GITHUB_URL}/issues`}
              className="rounded-lg border border-border bg-background px-5 py-2.5 font-medium hover:bg-surface"
            >
              Introduce yourself in an issue
            </a>
          </div>
        </div>
      </section>

      <section id="status" className="mx-auto max-w-5xl scroll-mt-8 px-5 pb-24">
        <div className="rounded-xl border border-border bg-warn-soft p-6 sm:p-8">
          <h2 className="text-xl font-semibold">Status: pre-alpha</h2>
          <p className="mt-3 text-muted">
            The mail client, tasks, agent integration and routines are
            implemented and tested against a synthetic demo mailbox, a fake
            Gmail and fake agent CLIs. There is no signed release yet. To try it
            today, build from source and choose{" "}
            <strong className="text-foreground">Explore a Demo Mailbox</strong> on first run.
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
