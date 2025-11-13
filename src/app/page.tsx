'use client';

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { companies as companiesData, sectors } from "@/data/companies";
import type { Company, Review, ReviewInput } from "@/lib/types";
import { CompanyCard } from "@/components/company-card";
import { HeroSection } from "@/components/sections/hero-section";
import { ReviewModal } from "@/components/reviews/review-modal";
import { Leaderboard } from "@/components/sections/leaderboard";
import { ContactSection } from "@/components/sections/contact-section";
import { getAverageRating } from "@/lib/utils";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [sector, setSector] = useState<"All" | (typeof sectors)[number]>("All");
  const [minRating, setMinRating] = useState(0);
  const [companies, setCompanies] = useState<Company[]>(companiesData);
  const [activeCompany, setActiveCompany] = useState<Company | null>(null);

  const filtered = useMemo(() => {
    return companies.filter((company) => {
      const matchesSearch = company.name
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesSector = sector === "All" || company.sector === sector;
      const meetsRating = getAverageRating(company.reviews) >= minRating;
      return matchesSearch && matchesSector && meetsRating;
    });
  }, [companies, search, sector, minRating]);

  const handleReview = (companyId: string, data: ReviewInput) => {
    const newReview: Review = {
      ...data,
      id: crypto.randomUUID ? crypto.randomUUID() : `local-${Date.now()}`,
      date: new Date().toISOString().split("T")[0],
    };

    setCompanies((prev) =>
      prev.map((company) =>
        company.id === companyId
          ? {
              ...company,
              reviews: [newReview, ...company.reviews],
            }
          : company,
      ),
    );
  };

  return (
    <div className="space-y-16 pb-24">
      <HeroSection
        onShareReview={() => setActiveCompany(companies[0] ?? null)}
      />

      <section id="companies" className="mx-auto max-w-6xl space-y-6 px-4">
        <div className="flex flex-col gap-4 rounded-[24px] border border-white/20 bg-white/80 p-6 shadow-lg dark:bg-slate-900/60">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Search
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Discover fair partners
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-[2fr_1fr_1fr]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="search"
                placeholder="Search builders, developers, or owners"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full rounded-2xl border border-slate-900/10 bg-white/90 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/10 dark:text-white"
              />
            </div>
            <div className="flex gap-1 rounded-2xl border border-slate-900/10 bg-white/90 p-1 dark:border-white/20 dark:bg-white/5">
              {["All", ...sectors].map((label) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSector(label as typeof sector)}
                  className={`flex-1 rounded-2xl px-3 py-2 text-sm font-semibold ${
                    sector === label
                      ? "bg-slate-900 text-white dark:bg-white/90 dark:text-slate-900"
                      : "text-slate-600 dark:text-slate-200"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <label className="flex flex-col gap-2 rounded-2xl border border-slate-900/10 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:border-white/20 dark:bg-white/5 dark:text-slate-300">
              Min rating
              <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                <SlidersHorizontal className="h-4 w-4" />
                <input
                  type="range"
                  min={0}
                  max={5}
                  step={0.5}
                  value={minRating}
                  onChange={(event) => setMinRating(Number(event.target.value))}
                  className="flex-1 accent-sky-500"
                />
                <span className="text-base font-semibold">{minRating}</span>
              </div>
            </label>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Showing {filtered.length} of {companies.length} companies
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((company, index) => (
            <CompanyCard
              key={company.id}
              company={company}
              index={index}
              onReview={(selected) => setActiveCompany(selected)}
            />
          ))}
        </div>
      </section>

      <Leaderboard companies={companies} />
      <ContactSection />

      <ReviewModal
        open={Boolean(activeCompany)}
        company={activeCompany}
        onClose={() => setActiveCompany(null)}
        onSubmit={handleReview}
      />
    </div>
  );
}
