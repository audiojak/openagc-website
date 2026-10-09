import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FeatureAnimation from "@/components/FeatureAnimation";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Turn email into tasks, let Claude Code or Codex action them in a writing style learned from your own mail, and sort mail with routines.",
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
          Kaluta turns email into tasks, lets your own AI agent work through
          them in your own voice, keeps automated mail out of your way, gives
          an agent an address of its own, and clears years of mail in one go.
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
              task yourself and Kaluta offers to mark it done once it&apos;s
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

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="md:order-2">
            <div className="font-mono text-sm text-accent">04</div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              A writing guide learned from your own sent mail
            </h2>
            <p className="mt-3 text-muted">
              Choose how many of your recent sent messages to learn from. Your
              own agent reads them in a read-only session and proposes how you
              write — your voice, how you open and sign off, spelling, favourite
              phrases, how you treat different people — each with quotes from
              your mail as evidence. You accept, edit or reject every entry,
              and a short interview covers what mail can&apos;t show, like
              confidentiality and what to do when unsure.
            </p>
            <p className="mt-3 text-muted">
              Every AI that writes for you then follows the guide: writing help
              in the composer, the agent column and routines, with Claude Code
              or Codex. Drafts say who they&apos;re written for, rules are
              checked before you see a draft, and the agent asks rather than
              inventing a fact it doesn&apos;t have.
            </p>
          </div>
          <div className="space-y-4 md:order-1">
            <Shot
              src="/img/writing-help.png"
              alt="The composer with a reply to Emerson Silva, showing the original message above the editor and a bar that reads: Ask Claude to write or change this message"
              width={760}
              height={760}
            />
            <div className="mx-auto w-fit overflow-hidden rounded-lg border border-border bg-white shadow-lg shadow-black/10">
              <Image
                src="/img/guide-ready.png"
                alt="A sheet: Your Writing Guide Is Ready to Review. The analysis of your sent mail finished; 12 decisions are waiting for you. Buttons: Later, Review Now."
                width={460}
                height={143}
              />
            </div>
          </div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="font-mono text-sm text-accent">05</div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              It keeps learning from your edits
            </h2>
            <p className="mt-3 text-muted">
              Once a day, Kaluta compares what the AI drafted with what you
              actually sent. Where your edits show the guide is wrong or
              missing something, it proposes a rule change, with the two
              versions side by side and the differing words marked. A pattern
              needs to show up in two or three messages before it&apos;s
              proposed. The Writing Guide&apos;s header says how many rules
              are waiting; you review them as cards, accept, edit or reject
              each one, and every decision can be undone.
            </p>
            <p className="mt-3 text-muted">
              A <strong className="text-foreground">Facts</strong> page keeps
              what agents may say about you: your name, time zone, calendar
              link, role, the people you mention. Each fact is marked use
              freely, ask before using, or never share, and can be kept to one
              account or shared across all of them. New facts found in your
              sent mail arrive as proposals too. Passwords, card numbers,
              government IDs and other people&apos;s health details are never
              stored.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm">
            <Shot
              src="/img/guide-review.png"
              alt="The Writing Guide's list column: Learn from Sent Mail, the daily review's status with Run Now, a Review 3 Proposed Rules button, and the categories Voice and tone, Structure and Language, each row saying nothing yet"
              width={380}
              height={730}
            />
          </div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="md:order-2">
            <div className="font-mono text-sm text-accent">06</div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              An email address of its own for your agent
            </h2>
            <p className="mt-3 text-muted">
              Give an agent its own mailbox, so it can sign up for services and
              write to people as itself rather than as you. Pick a service,
              name the agent, agree to the service&apos;s terms, and the
              address is created and open in a few seconds, with no agent
              involved in the setup. Verify it with your own email to raise its
              sending limits. Once you have one, adding another agent is just a
              name: they share the service account, its key and its
              verification, and on Primitive you can put them on a domain you
              own, with the DNS records listed and checked by the app.
            </p>
            <p className="mt-3 text-muted">
              Each agent mailbox is a full account: its own writing guide,
              facts, routines and undo. You read its mail and can send as the
              agent. Per mailbox you choose whether agents send freely (each
              message is checked against the mailbox&apos;s guide and logged)
              or ask before each send, as on your own accounts. Deleting mail
              always asks. Two services are supported, both free to start:{" "}
              <a href="https://primitive.dev" className="underline hover:text-foreground">
                Primitive
              </a>{" "}
              and{" "}
              <a href="https://agentmail.to" className="underline hover:text-foreground">
                AgentMail
              </a>
              ; the app states each one&apos;s limits in its own words.
            </p>
          </div>
          <div className="space-y-4 md:order-1">
            <div className="mx-auto w-full max-w-sm">
              <Shot
                src="/img/agent-mailbox-inbox.png"
                alt="An agent mailbox's inbox with two messages, a banner saying that until it is verified the mailbox can only reply to people who wrote first, up to 10 an hour and 50 a day, and a Verify button"
                width={380}
                height={420}
              />
            </div>
            <div className="mx-auto w-fit overflow-hidden rounded-lg border border-border bg-white shadow-lg shadow-black/10">
              <Image
                src="/img/agent-mailbox-create.png"
                alt="The Create an Agent Mailbox sheet asking where the mailbox lives: Primitive, addresses for agents on a shared domain, or AgentMail, inboxes for agents at agentmail.to, each with a line on its free tier"
                width={460}
                height={287}
              />
            </div>
          </div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="font-mono text-sm text-accent">07</div>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight">
              Clean Up: clear years of mail in one go
            </h2>
            <p className="mt-3 text-muted">
              A window for the once-a-year tidy rather than the daily one. It
              groups a whole mailbox by sender, by people you&apos;ve written
              to, by subject, mailing list, time, size, or Gmail&apos;s Social
              and Promotions categories. Tick the groups you&apos;re done with
              and archive, move, trash or mark as spam every message in them,
              thousands at a time, with one Undo to bring them all back. It
              acts on messages, not threads, so a person&apos;s reply in a
              mixed thread stays where it is.
            </p>
            <p className="mt-3 text-muted">
              The Mailing Lists view can unsubscribe you: one request to the
              list&apos;s own site after a confirmation naming each list, or a
              filled-in message in the composer for you to send, never behind
              your back and never by an agent. A card at the foot tracks your
              progress towards Inbox Zero, with today&apos;s numbers and a
              month&apos;s trend.
            </p>
          </div>
          <div className="space-y-4">
            <Shot
              src="/img/cleanup.png"
              alt="The Clean Up window on the Sender view: senders listed with message counts, Weekly Digest ticked with 55 messages, and its messages listed on the right under toolbar buttons for archive, trash, spam and move"
              width={1180}
              height={760}
            />
            <div className="flex flex-wrap items-start justify-center gap-4">
              <div className="w-fit overflow-hidden rounded-lg border border-border bg-white shadow-lg shadow-black/10">
                <Image
                  src="/img/cleanup-unsubscribe.png"
                  alt="A confirmation: Unsubscribe from Weekly Digest? Kaluta asks weekly-digest.example.org once to take you off the list; nothing else is sent. An Archive Them Too checkbox, and Cancel and Unsubscribe buttons."
                  width={460}
                  height={210}
                />
              </div>
              <div className="w-fit overflow-hidden rounded-lg border border-border bg-white shadow-lg shadow-black/10">
                <Image
                  src="/img/cleanup-card.png"
                  alt="The Inbox Zero card: 63 percent, a falling sparkline, and today's numbers: At Midnight 940, Received Today 0, Removed Today minus 41, Now 899"
                  width={210}
                  height={190}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24">
        <div className="rounded-2xl border border-border bg-surface p-6 text-center sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Try it with a demo mailbox
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted">
            Build Kaluta from source and explore all of this with made-up
            mail, without connecting an account.
          </p>
          <Link
            href="/#try"
            className="mt-6 inline-block rounded-lg bg-accent px-5 py-2.5 font-medium text-white hover:opacity-90 dark:text-background"
          >
            Try it on your Mac
          </Link>
          <p className="mt-6 text-sm text-muted">
            How it compares:{" "}
            <Link href="/compare/superhuman" className="underline hover:text-foreground">
              Kaluta vs Superhuman
            </Link>{" "}
            ·{" "}
            <Link href="/compare/mailstrom" className="underline hover:text-foreground">
              Kaluta vs Mailstrom
            </Link>{" "}
            ·{" "}
            <Link href="/compare/apple-mail" className="underline hover:text-foreground">
              Kaluta vs Apple Mail
            </Link>{" "}
            ·{" "}
            <Link href="/compare/gmail" className="underline hover:text-foreground">
              Kaluta with Gmail
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
