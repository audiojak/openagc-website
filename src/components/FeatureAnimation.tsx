"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Clock,
  Cloud,
  Laptop,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";

const scenes = [
  { key: "tasks", label: "Email to tasks", steps: 5 },
  { key: "agent", label: "Agents action tasks", steps: 6 },
  { key: "routines", label: "Mail routines", steps: 7 },
] as const;

const STEP_MS = 1100;
const HOLD_STEPS = 3;

/** Visible once the scene has reached `at`; fades and slides in. */
function Reveal({
  step,
  at,
  className = "",
  children,
}: {
  step: number;
  at: number;
  className?: string;
  children: React.ReactNode;
}) {
  const shown = step >= at;
  return (
    <div
      className={`transition-all duration-500 ease-out motion-reduce:transition-none ${
        shown ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function Chip({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <span className={`rounded px-1.5 py-0.5 text-xs font-medium text-neutral-900 ${className}`}>
      {children}
    </span>
  );
}

function EmailCard({ faded = false }: { faded?: boolean }) {
  return (
    <div
      className={`rounded-lg border border-border bg-background p-4 transition-opacity duration-500 ${
        faded ? "opacity-50" : ""
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="grid size-8 shrink-0 place-items-center rounded-full bg-orange-700 text-xs font-semibold text-white">
          ES
        </span>
        <div className="min-w-0">
          <div className="font-semibold">Emerson Silva</div>
          <div className="text-sm text-muted">Onboarding plan</div>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted">
        Can you send the revised plan? We need a decision by the end of the
        month.
      </p>
    </div>
  );
}

function TaskCard({ done = false }: { done?: boolean }) {
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          <span
            className={`mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border transition-colors duration-300 ${
              done ? "border-green-600 bg-green-600 text-white" : "border-muted"
            }`}
          >
            {done && <Check className="size-3" strokeWidth={3} />}
          </span>
          <span className={`font-semibold ${done ? "text-muted line-through" : ""}`}>
            Send Emerson the revised onboarding plan
          </span>
        </div>
        <span className="shrink-0 text-sm text-accent">Today</span>
      </div>
      <div className="mt-2 flex items-center gap-2 pl-6 text-sm text-muted">
        <Chip className="bg-blue-200">Reply</Chip>
        Emerson Silva · Onboarding plan
      </div>
    </div>
  );
}

function TasksScene({ step }: { step: number }) {
  return (
    <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
      <Reveal step={step} at={0}>
        <EmailCard />
      </Reveal>
      <Reveal step={step} at={1} className="flex justify-center">
        <div className="flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent">
          <Sparkles className={`size-4 ${step === 1 ? "animate-pulse" : ""}`} />
          <span>Claude reads it</span>
          <ArrowRight className="size-4 max-md:rotate-90" />
        </div>
      </Reveal>
      <div className="space-y-2">
        <Reveal step={step} at={2}>
          <TaskCard />
        </Reveal>
        <Reveal step={step} at={3}>
          <div className="flex items-center gap-2 pl-1 text-sm text-muted">
            <Sparkles className="size-3.5" /> The sender is waiting for an answer.
          </div>
        </Reveal>
        <Reveal step={step} at={4}>
          <div className="flex items-center gap-2 pl-1 text-sm text-muted">
            <Chip className="bg-neutral-200">Task</Chip> label added in Gmail
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function AgentScene({ step }: { step: number }) {
  const approved = step >= 4;
  return (
    <div className="grid items-start gap-4 md:grid-cols-2">
      <Reveal step={step} at={0}>
        <TaskCard done={step >= 5} />
      </Reveal>
      <div className="rounded-lg border border-border bg-background p-4">
        <div className="font-semibold">Claude</div>
        <Reveal step={step} at={1} className="mt-3">
          <div className="rounded-md bg-accent-soft px-3 py-2 text-sm">
            Draft the reply Emerson is waiting for
          </div>
        </Reveal>
        <Reveal step={step} at={2} className="mt-3">
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="flex gap-1">
              <span className="size-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.3s]" />
              <span className="size-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.15s]" />
              <span className="size-1.5 animate-bounce rounded-full bg-muted" />
            </span>
            Reading the thread, writing a reply
          </div>
        </Reveal>
        <Reveal step={step} at={3} className="mt-3">
          <div
            className={`rounded-lg border p-3 text-sm transition-colors duration-300 ${
              approved
                ? "border-green-600/40 bg-green-600/10"
                : "border-amber-400/60 bg-warn-soft"
            }`}
          >
            <div className="flex items-center gap-2 font-medium">
              <Send className="size-4" />
              Send &ldquo;Re: Onboarding plan&rdquo; to Emerson
            </div>
            <div className="mt-2 flex justify-end gap-2">
              {approved ? (
                <span className="flex items-center gap-1 font-medium text-green-700 dark:text-green-400">
                  <Check className="size-4" /> Approved by you · sent
                </span>
              ) : (
                <>
                  <span className="rounded bg-surface px-2 py-0.5">Reject</span>
                  <span className="rounded bg-accent px-2 py-0.5 text-white dark:text-background">
                    Approve
                  </span>
                </>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

const inbox = [
  { from: "Status Alerts", subject: "Card expiring soon", bucket: 0 },
  { from: "Weekly Digest", subject: "This week in design", bucket: 1 },
  { from: "Receipts", subject: "Your invoice #4821", bucket: 1 },
  { from: "Growth Co", subject: "Quick question about demos", bucket: 2 },
  { from: "Reese Schmidt", subject: "Customer escalation", bucket: -1 },
];

const routineBuckets = [
  { label: "1-Daily", color: "bg-red-500" },
  { label: "Weekly", color: "bg-blue-500" },
  { label: "Monthly", color: "bg-gray-400" },
];

function RoutinesScene({ step }: { step: number }) {
  // Messages leave the inbox one by one from step 2.
  const sorted = (i: number) => inbox[i].bucket >= 0 && step >= 2 + i;
  const cloud = step >= 6;
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
      <div className="rounded-lg border border-border bg-background p-4">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Inbox</div>
          <Reveal step={step} at={1}>
            <div className="flex items-center gap-1.5 text-sm text-muted">
              <Clock className="size-4" /> Sort important mail · every hour
            </div>
          </Reveal>
        </div>
        <ul className="mt-3 space-y-1.5">
          {inbox.map((m, i) => (
            <li
              key={m.subject}
              className={`flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm transition-all duration-500 motion-reduce:transition-none ${
                sorted(i) ? "translate-x-4 opacity-25" : ""
              } ${m.bucket < 0 && step >= 6 ? "border-accent" : ""}`}
            >
              <Mail className="size-3.5 shrink-0 text-muted" />
              <span className="font-medium">{m.from}</span>
              <span className="truncate text-muted">{m.subject}</span>
            </li>
          ))}
        </ul>
        <Reveal step={step} at={6} className="mt-2 text-sm text-muted">
          Mail from people stays in the Inbox.
        </Reveal>
      </div>
      <div className="space-y-3">
        {routineBuckets.map((b, bi) => {
          const count = inbox.filter((m, i) => m.bucket === bi && sorted(i)).length;
          return (
            <div
              key={b.label}
              className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-2.5"
            >
              <span className={`size-2.5 rounded-full ${b.color}`} />
              <span className="font-mono text-sm">{b.label}</span>
              <span
                key={count}
                className={`ml-auto min-w-6 rounded-full px-2 text-center text-sm font-medium ${
                  count ? "animate-[pop_0.4s_ease-out] bg-accent-soft text-accent" : "text-muted"
                }`}
              >
                {count}
              </span>
            </div>
          );
        })}
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div
            className={`flex items-center gap-2 rounded-lg border-2 px-3 py-2 transition-colors duration-500 ${
              cloud ? "border-border" : "border-accent bg-accent-soft"
            }`}
          >
            <Laptop className="size-4" /> On this Mac
          </div>
          <div
            className={`flex items-center gap-2 rounded-lg border-2 px-3 py-2 transition-colors duration-500 ${
              cloud ? "border-accent bg-accent-soft" : "border-border"
            }`}
          >
            <Cloud className="size-4" /> Claude cloud
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureAnimation() {
  const [{ scene, step }, setPos] = useState({ scene: 0, step: 0 });
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const id = setInterval(() => {
      setPos((p) =>
        p.step + 1 < scenes[p.scene].steps + HOLD_STEPS
          ? { scene: p.scene, step: p.step + 1 }
          : { scene: (p.scene + 1) % scenes.length, step: 0 },
      );
    }, STEP_MS);
    return () => clearInterval(id);
  }, [reduced, paused]);

  // With reduced motion, show each scene in its finished state.
  const shownStep = reduced ? scenes[scene].steps : step;

  return (
    <div
      className="rounded-2xl border border-border bg-surface p-4 sm:p-6"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div role="tablist" aria-label="Features" className="flex flex-wrap gap-2">
        {scenes.map((s, i) => (
          <button
            key={s.key}
            role="tab"
            aria-selected={i === scene}
            onClick={() => setPos({ scene: i, step: 0 })}
            className={`relative overflow-hidden rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              i === scene
                ? "border-accent bg-accent-soft text-accent"
                : "border-border text-muted hover:text-foreground"
            }`}
          >
            <span className="font-mono">0{i + 1}</span> {s.label}
          </button>
        ))}
      </div>
      <div className="mt-5 min-h-[21rem] md:min-h-[15rem]" role="tabpanel" aria-live="polite">
        {scene === 0 && <TasksScene step={shownStep} />}
        {scene === 1 && <AgentScene step={shownStep} />}
        {scene === 2 && <RoutinesScene step={shownStep} />}
      </div>
    </div>
  );
}
