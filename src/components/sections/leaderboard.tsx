"use client";

import { Trophy, TrendingUp } from "lucide-react";
import type { Company } from "@/lib/types";
import { formatRating, getAverageRating } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface LeaderboardProps {
  companies: Company[];
}

export function Leaderboard({ companies }: LeaderboardProps) {
  const top = [...companies]
    .sort(
      (a, b) => getAverageRating(b.reviews) - getAverageRating(a.reviews),
    )
    .slice(0, 3);

  return (
    <section
      id="leaderboard"
      className="glass-panel mx-auto max-w-6xl rounded-[32px] border border-white/10 bg-white/80 px-8 py-10 dark:bg-slate-900/70"
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500">
            Leaderboard
          </p>
          <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Top Rated Partners
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Scored across payment reliability, communication, site safety, and
            respect.
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 dark:border-emerald-500/40 dark:text-emerald-200">
          <TrendingUp className="h-4 w-4" />
          Updated weekly
        </span>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {top.map((company, index) => (
          <motion.div
            key={company.id}
            className="rounded-3xl border border-white/30 bg-white/70 p-6 text-center shadow-lg dark:border-white/5 dark:bg-white/10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-500/40">
              <Trophy className="h-6 w-6" />
            </div>
            <p className="mt-4 text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
              #{index + 1}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-slate-900 dark:text-white">
              {company.name}
            </h3>
            <p className="text-sm text-slate-500">{company.sector}</p>
            <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
              {formatRating(getAverageRating(company.reviews))}
            </p>
            <Link
              href={`/companies/${company.slug}`}
              className="mt-4 inline-flex items-center justify-center rounded-2xl border border-slate-900/10 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white/80 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
            >
              View profile
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
