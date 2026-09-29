import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import { GITHUB_URL, SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "OpenAGC — the open-source Gmail client for AI agents",
    template: "%s · OpenAGC",
  },
  description:
    "A local-first, native macOS Gmail client: turn email into tasks, let Claude Code or Codex work through them, and sort your inbox on a schedule.",
  openGraph: {
    title: "OpenAGC",
    description:
      "The open-source, local-first Gmail client for macOS: turn email into tasks, let your AI agents work on them, and sort mail with routines.",
    url: SITE_URL,
    siteName: "OpenAGC",
    images: ["/img/hero-tasks-agent.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <header className="border-b border-border">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
            <Link href="/" className="flex items-center gap-2.5 font-semibold">
              <Image src="/img/icon.png" alt="" width={28} height={28} />
              OpenAGC
            </Link>
            <div className="flex items-center gap-5 whitespace-nowrap text-sm text-muted">
              <Link href="/#try" className="hover:text-foreground">
                Try it
              </Link>
              <Link href="/#how" className="hover:text-foreground max-sm:hidden">
                How it works
              </Link>
              <Link href="/privacy" className="hover:text-foreground max-sm:hidden">
                Privacy
              </Link>
              <a href={GITHUB_URL} className="hover:text-foreground">
                GitHub
              </a>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-border text-sm text-muted">
          <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 sm:flex-row sm:justify-between">
            <p>
              OpenAGC is MIT-licensed open source, sponsored by{" "}
              <a href="https://actual.ai" className="underline hover:text-foreground">
                Actual AI
              </a>
              .
            </p>
            <div className="flex gap-5">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy policy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
              <a href={GITHUB_URL} className="hover:text-foreground">
                Source
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
