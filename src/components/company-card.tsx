"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  MapPin,
  Star,
  Trophy,
} from "lucide-react";
import type { Company } from "@/lib/types";
import {
  formatRating,
  getAverageRating,
  getCategoryAverage,
  reviewCategories,
} from "@/lib/utils";
import { cn } from "@/lib/utils";

interface CompanyCardProps {
  company: Company;
  onReview: (company: Company) => void;
  index: number;
}

export function CompanyCard({ company, onReview, index }: CompanyCardProps) {
  const overall = getAverageRating(company.reviews);

  const lastReview = company.reviews[0];

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.05 }}
      className="glass-panel flex flex-col rounded-3xl border border-white/10 p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            {company.sector}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
            {company.name}
          </h3>
          <p className="mt-1 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <MapPin className="h-4 w-4" />
            {company.location}
          </p>
        </div>
        <div
          className={cn(
            "rounded-2xl px-4 py-2 text-right text-sm font-semibold text-slate-900 dark:text-white",
            "bg-gradient-to-br from-white/80 to-white/40 dark:from-white/10 dark:to-white/5",
          )}
        >
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Score
          </p>
          <p className="text-2xl">{formatRating(overall)}</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
        {company.description}
      </p>

      {company.badge && (
        <div className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-200">
          <BadgeCheck className="h-4 w-4" />
          {company.badge}
        </div>
      )}

      <div className="mt-5 grid gap-2 text-sm text-slate-600 dark:text-slate-200 sm:grid-cols-2">
        {reviewCategories.map((category) => {
          const value = getCategoryAverage(company.reviews, category);
          return (
            <div
              key={category}
              className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/60 px-3 py-2 dark:bg-white/10"
            >
              <span>{category}</span>
              <span className="font-semibold">{value.toFixed(1)}</span>
            </div>
          );
        })}
      </div>

      <div className="mt-5 rounded-2xl border border-dashed border-white/30 bg-white/40 p-4 text-sm text-slate-700 shadow-inner dark:bg-white/5 dark:text-slate-300">
        <p className="flex items-center gap-2 text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
          Latest review
          <Star className="h-3 w-3" />
        </p>
        <p className="mt-2 font-semibold text-slate-900 dark:text-white">
          {lastReview?.comments}
        </p>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          {lastReview?.reviewer} — {lastReview?.trade}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {company.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/30 px-3 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/companies/${company.slug}`}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-slate-900/90 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 dark:bg-white/80 dark:text-slate-900"
        >
          View profile
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <button
          type="button"
          onClick={() => onReview(company)}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-900/15 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-white/70 dark:border-white/30 dark:text-white dark:hover:bg-white/10"
        >
          <Trophy className="h-4 w-4" />
          Add review
        </button>
      </div>
    </motion.article>
  );
}
