"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star, Users } from "lucide-react";
import Link from "next/link";
import { getAverageRating } from "@/lib/utils";
import { companies } from "@/data/companies";

interface HeroSectionProps {
  onShareReview?: () => void;
}

const avgRating = getAverageRating(
  companies.flatMap((company) => company.reviews),
);

export function HeroSection({ onShareReview }: HeroSectionProps) {
  return (
    <section className="relative isolate mx-auto flex max-w-6xl flex-col items-center gap-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/70 px-8 py-16 shadow-2xl shadow-sky-200/50 backdrop-blur-lg dark:bg-slate-900/60 dark:shadow-none md:px-16">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/20 via-transparent to-indigo-500/20" />
      <motion.p
        className="rounded-full border border-white/30 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 shadow-sm dark:bg-slate-900/80 dark:text-slate-200"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Built for Tradespeople
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-balance text-center text-4xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-5xl"
      >
        Rate every build partner on how they{" "}
        <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
          pay, communicate, and protect
        </span>{" "}
        trades.
      </motion.h1>

      <motion.p
        className="max-w-3xl text-center text-lg text-slate-600 dark:text-slate-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        TradeRate brings transparency to the construction ecosystem. Browse
        verified experiences with builders, developers, and owners before your
        crew steps on site.
      </motion.p>

      <motion.div
        className="flex flex-col gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <Link
          href="/#companies"
          className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.01]"
        >
          Browse companies
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={onShareReview}
          className="inline-flex items-center justify-center rounded-2xl border border-slate-900/10 px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-white/80 dark:border-white/20 dark:text-white dark:hover:bg-white/10"
        >
          Share a review
        </button>
      </motion.div>

      <motion.div
        className="grid w-full gap-4 rounded-[28px] border border-white/20 bg-white/60 p-6 text-sm text-slate-600 shadow-inner dark:bg-slate-900/60 dark:text-slate-200 md:grid-cols-3"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Metric
          icon={<Users className="h-4 w-4" />}
          label="Trade voices"
          value="+1,200"
          sub="verified contributors"
        />
        <Metric
          icon={<Star className="h-4 w-4" />}
          label="Average rating"
          value={`${avgRating.toFixed(1)}/5`}
          sub="across all reviews"
        />
        <Metric
          icon={<ArrowUpRight className="h-4 w-4" />}
          label="Momentum"
          value="+47%"
          sub="faster pay insights"
        />
      </motion.div>
    </section>
  );
}

function Metric({
  icon,
  label,
  value,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-900/5 bg-white/60 p-4 shadow-sm dark:border-white/5 dark:bg-white/5">
      <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white">
        {icon}
      </span>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
          {label}
        </p>
        <p className="text-lg font-semibold text-slate-900 dark:text-white">
          {value}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{sub}</p>
      </div>
    </div>
  );
}
