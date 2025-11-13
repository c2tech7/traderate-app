"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "../theme-toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "#companies", label: "Companies" },
  { href: "#leaderboard", label: "Leaderboard" },
  { href: "#contact", label: "Feedback" },
];

export function SiteHeader() {
  return (
    <header className="glass-panel sticky top-0 z-40 mx-auto mt-6 flex max-w-6xl items-center justify-between rounded-3xl px-6 py-4 backdrop-blur">
      <Link href="/" className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 font-semibold text-white shadow-lg shadow-sky-500/30">
          TR
        </span>
        <div className="flex flex-col leading-tight">
          <span className="text-sm uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
            TradeRate
          </span>
          <span className="text-base font-semibold text-slate-900 dark:text-white">
            Construction Insights
          </span>
        </div>
      </Link>
      <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-200 md:flex">
        {links.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            whileHover={{ y: -2 }}
            className={cn(
              "rounded-full px-4 py-2 transition",
              "hover:bg-slate-900/5 dark:hover:bg-white/10",
            )}
          >
            {link.label}
          </motion.a>
        ))}
      </nav>
      <ThemeToggle className="ml-4" />
    </header>
  );
}
