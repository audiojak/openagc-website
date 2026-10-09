import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  Bot,
  Cloud,
  Database,
  Laptop,
  Mail,
  RefreshCw,
  ShieldCheck,
  Terminal,
  User,
  Wrench,
} from "lucide-react";

type Tone = "neutral" | "accent" | "outside";

function Node({
  x,
  y,
  w,
  h = 90,
  icon: Icon,
  title,
  sub,
  tone = "neutral",
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  icon: LucideIcon;
  title: string;
  sub: string;
  tone?: Tone;
}) {
  const box =
    tone === "accent"
      ? "fill-accent-soft stroke-accent"
      : tone === "outside"
        ? "fill-surface stroke-border"
        : "fill-background stroke-border";
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={14} className={box} strokeWidth={1.5} />
      <rect x={x + 16} y={y + h / 2 - 20} width={40} height={40} rx={10} className="fill-accent-soft" />
      <Icon x={x + 26} y={y + h / 2 - 10} width={20} height={20} className="text-accent" />
      <text x={x + 70} y={y + h / 2 - 4} className="fill-foreground text-[17px] font-semibold">
        {title}
      </text>
      <text x={x + 70} y={y + h / 2 + 18} className="fill-muted text-[14px]">
        {sub}
      </text>
    </g>
  );
}

function Link({
  d,
  both = false,
  label,
  lx,
  ly,
  anchor = "start",
}: {
  d: string;
  both?: boolean;
  label?: string;
  lx?: number;
  ly?: number;
  anchor?: "start" | "middle" | "end";
}) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        strokeWidth={2}
        strokeDasharray="6 6"
        markerEnd="url(#arrow)"
        markerStart={both ? "url(#arrow-start)" : undefined}
        className="stroke-muted [animation:flow_1.2s_linear_infinite] motion-reduce:[animation:none]"
      />
      {label && (
        <text x={lx} y={ly} textAnchor={anchor} className="fill-muted text-[13px] font-medium">
          {label}
        </text>
      )}
    </g>
  );
}

function Badge({ x, y, n }: { x: number; y: number; n: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={13} className="fill-accent" />
      <text
        x={x}
        y={y + 5}
        textAnchor="middle"
        className="fill-background text-[14px] font-bold"
      >
        {n}
      </text>
    </g>
  );
}

const notes = [
  "Mail syncs straight from Gmail to a store on your Mac. There is no Kaluta server in between.",
  "Anything that would leave your Mac — sending, forwarding, deleting — waits for your approval in the app.",
  "Agents run in your own claude or codex CLI, under your own AI subscription, and reach your mail only through Kaluta's tools, each call checked by the permission engine.",
  "Cloud routines are created through your own Claude login and sort mail with Claude's Gmail connector. Kaluta sees the result on its next sync.",
];

export default function ArchitectureDiagram() {
  return (
    <figure className="mt-8">
      <div className="overflow-x-auto rounded-2xl border border-border bg-surface/50 p-2 sm:p-4">
        <svg
          viewBox="0 0 1200 780"
          className="h-auto w-full min-w-[860px] font-sans"
          role="img"
          aria-labelledby="arch-title arch-desc"
        >
          <title id="arch-title">How Kaluta works</title>
          <desc id="arch-desc">
            Gmail syncs to a local store inside Kaluta on your Mac. You use the
            mail app. Agents in your claude or codex CLI reach mail through
            Kaluta&apos;s mail tools, which a permission engine checks; actions
            that leave your Mac ask for your approval. Cloud routines run in
            Claude&apos;s cloud and use Claude&apos;s Gmail connector.
          </desc>
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0,0 L10,5 L0,10 z" className="fill-muted" />
            </marker>
            <marker id="arrow-start" viewBox="0 0 10 10" refX="2" refY="5" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M10,0 L0,5 L10,10 z" className="fill-muted" />
            </marker>
          </defs>

          {/* The cloud: services outside your Mac */}
          <Node x={20} y={20} w={270} h={100} icon={Mail} title="Gmail" sub="Your mailbox at Google" tone="outside" />
          <Node x={600} y={20} w={310} h={100} icon={Cloud} title="Claude cloud routine" sub="Runs while your Mac sleeps" tone="outside" />
          <Node x={940} y={20} w={240} h={100} icon={Bot} title="Your AI provider" sub="Anthropic or OpenAI" tone="outside" />

          {/* Your Mac */}
          <rect x={20} y={180} width={1160} height={580} rx={24} strokeWidth={2} strokeDasharray="10 8" className="fill-none stroke-border" />
          <Laptop x={110} y={196} width={22} height={22} className="text-muted" />
          <text x={140} y={214} className="fill-muted text-[15px] font-semibold uppercase tracking-wider">
            Your Mac
          </text>

          {/* Kaluta.app */}
          <rect x={50} y={240} width={750} height={495} rx={20} strokeWidth={2} className="fill-accent-soft/40 stroke-accent" />
          <text x={110} y={268} className="fill-accent text-[15px] font-semibold uppercase tracking-wider">
            Kaluta.app
          </text>

          <Node x={110} y={290} w={200} icon={User} title="You" sub="Triage and approve" tone="accent" />
          <Node x={340} y={290} w={210} icon={AppWindow} title="Mail app" sub="Inbox, tasks, routines" />
          <Node x={70} y={460} w={220} icon={RefreshCw} title="Sync + outbox" sub="Talks to Gmail" />
          <Node x={340} y={460} w={210} icon={Database} title="Local store" sub="Mail, search, tasks" />
          <Node x={590} y={460} w={195} icon={ShieldCheck} title="Permissions" sub="Checks each call" />
          <Node x={590} y={625} w={195} icon={Wrench} title="Mail tools" sub="Over MCP" />

          <Node x={850} y={625} w={310} icon={Terminal} title="claude / codex CLI" sub="Your agent, your login" />

          {/* Connections */}
          <Link d="M 85 126 L 85 454" both label="HTTPS · OAuth" lx={97} ly={158} />
          <Link d="M 296 70 L 594 70" both label="Claude's Gmail connector" lx={445} ly={58} anchor="middle" />
          <Link d="M 316 335 L 334 335" both />
          <Link d="M 445 386 L 445 454" both />
          <Link d="M 296 505 L 334 505" both />
          <Link d="M 556 505 L 584 505" both />
          <Link d="M 687 454 L 687 335 L 556 335" label="Approve?" lx={600} ly={325} />
          <Link d="M 687 556 L 687 619" both />
          <Link d="M 791 670 L 844 670" both label="MCP" lx={817} ly={658} anchor="middle" />
          <Link d="M 1110 619 L 1110 126" both label="Your subscription" lx={1100} ly={158} anchor="end" />
          <Link d="M 880 619 L 880 126" label="Publishes routines" lx={870} ly={158} anchor="end" />

          <Badge x={85} y={300} n={1} />
          <Badge x={687} y={400} n={2} />
          <Badge x={817} y={690} n={3} />
          <Badge x={445} y={96} n={4} />
        </svg>
      </div>
      <figcaption className="mt-6 grid gap-4 sm:grid-cols-2">
        {notes.map((n, i) => (
          <div key={i} className="flex gap-3 text-muted">
            <span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent text-sm font-bold text-background">
              {i + 1}
            </span>
            <span>{n}</span>
          </div>
        ))}
      </figcaption>
    </figure>
  );
}
