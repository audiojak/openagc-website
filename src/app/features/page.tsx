import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FeatureAnimation from "@/components/FeatureAnimation";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Turn email into tasks, let Claude Code or Codex action them, and sort mail with routines that run on your Mac or in Claude's cloud.",
};

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

export default function Features() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pt-16 pb-12 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-balance">
          From inbox to done, with an agent at your side
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-muted text-balance">
          OpenAGC turns email into tasks, lets your own AI agent work through
          them, and keeps automated mail out of your way.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24">
        <FeatureAnimation />
      </section>

      <section className="mx-auto max-w-5xl space-y-24 px-5 pb-24">
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

      <section className="mx-auto max-w-5xl px-5 pb-24">
        <div className="rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Try it with a demo mailbox
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Build OpenAGC from source and explore all of this with made-up
            mail, without connecting an account.
          </p>
          <Link
            href="/#try"
            className="mt-6 inline-block rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90 dark:text-background"
          >
            Try it on your Mac
          </Link>
        </div>
      </section>
    </>
  );
}
