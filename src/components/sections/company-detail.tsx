"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ShieldCheck, Star } from "lucide-react";
import type { Company, Review, ReviewInput } from "@/lib/types";
import {
  formatRating,
  getAverageRating,
  getCategoryAverage,
  reviewCategories,
} from "@/lib/utils";
import { ReviewForm } from "../reviews/review-form";

interface CompanyDetailProps {
  company: Company;
}

export function CompanyDetail({ company }: CompanyDetailProps) {
  const [reviews, setReviews] = useState<Review[]>(company.reviews);

  const handleReview = (data: ReviewInput) => {
    const newReview: Review = {
      ...data,
      id: crypto.randomUUID ? crypto.randomUUID() : `local-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
    };

    setReviews((prev) => [newReview, ...prev]);
  };

  const overall = getAverageRating(reviews);

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10 pb-16 pt-6">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[32px] border border-white/10 bg-white/80 p-8 shadow-xl dark:bg-slate-900/70"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          {company.sector}
        </p>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-semibold text-slate-900 dark:text-white">
              {company.name}
            </h1>
            <p className="mt-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
              <MapPin className="h-4 w-4" />
              {company.location}
            </p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
              {company.description}
            </p>
          </div>
          <div className="rounded-3xl border border-white/40 bg-white/70 px-8 py-6 text-center shadow-lg dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Overall
            </p>
            <p className="text-5xl font-semibold text-slate-900 dark:text-white">
              {formatRating(overall)}
            </p>
            <p className="text-xs text-slate-500">from {reviews.length} reviews</p>
          </div>
        </div>
        {company.paymentTerms && (
          <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-700 dark:text-emerald-200">
            <ShieldCheck className="h-4 w-4" />
            Prefers {company.paymentTerms} terms
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-2">
          {company.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.section>

      <section className="grid gap-6 md:grid-cols-2">
        {reviewCategories.map((category) => (
          <div
            key={category}
            className="rounded-3xl border border-white/10 bg-white/70 px-6 py-5 shadow-inner dark:bg-white/5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {category}
            </p>
            <div className="mt-2 flex items-end justify-between">
              <p className="text-4xl font-semibold text-slate-900 dark:text-white">
                {formatRating(getCategoryAverage(reviews, category))}
              </p>
              <Star className="h-6 w-6 text-yellow-400" />
            </div>
          </div>
        ))}
      </section>

      <section className="grid gap-8 rounded-[32px] border border-white/10 bg-white/80 p-8 dark:bg-slate-900/70 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Reviews
          </p>
          <div className="mt-4 space-y-4">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-3xl border border-white/20 bg-white/70 p-4 shadow-sm dark:bg-white/5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      {review.reviewer ?? "Anonymous"}
                    </p>
                    <p className="text-xs text-slate-500">
                      {review.trade} · {review.project}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Calendar className="h-4 w-4" />
                    {review.date}
                  </div>
                </div>
                <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
                  {review.comments}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="glass-panel rounded-3xl border border-white/20 bg-white/80 p-6 dark:bg-white/10">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Share your experience
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
            Help other trades plan their crews.
          </h3>
          <ReviewForm submitLabel="Post review" onSubmit={handleReview} />
        </div>
      </section>
    </div>
  );
}
