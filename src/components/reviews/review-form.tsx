"use client";

import { useId, useMemo, useState } from "react";
import type { ReviewInput } from "@/lib/types";
import { reviewCategories } from "@/lib/utils";
import { Star } from "lucide-react";

interface ReviewFormProps {
  onSubmit: (data: ReviewInput) => void;
  onCancel?: () => void;
  submitLabel?: string;
}

export function ReviewForm({
  onSubmit,
  onCancel,
  submitLabel = "Share review",
}: ReviewFormProps) {
  const formId = useId();
  const initialRatings = useMemo(
    () =>
      reviewCategories.reduce(
        (acc, category) => ({ ...acc, [category]: 5 }),
        {} as ReviewInput["ratings"],
      ),
    [],
  );

  const [form, setForm] = useState<ReviewInput>({
    reviewer: "",
    trade: "",
    project: "",
    comments: "",
    ratings: initialRatings,
  });

  const handleChange = (
    field: keyof Omit<ReviewInput, "ratings">,
    value: string,
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleRating = (category: keyof ReviewInput["ratings"], value: number) =>
    setForm((prev) => ({
      ...prev,
      ratings: { ...prev.ratings, [category]: value },
    }));

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(form);
        setForm({
          reviewer: "",
          trade: "",
          project: "",
          comments: "",
          ratings: initialRatings,
        });
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Input
          id={`${formId}-name`}
          label="Your name (optional)"
          placeholder="Jordan — Lead Electrician"
          value={form.reviewer ?? ""}
          onChange={(value) => handleChange("reviewer", value)}
        />
        <Input
          id={`${formId}-trade`}
          label="Trade / company"
          placeholder="Blue Peak Mechanical"
          required
          value={form.trade}
          onChange={(value) => handleChange("trade", value)}
        />
      </div>
      <Input
        id={`${formId}-project`}
        label="Project reference"
        placeholder="Midtown Innovation Hub (Phase 2)"
        required
        value={form.project}
        onChange={(value) => handleChange("project", value)}
      />
      <div className="grid gap-3 rounded-2xl border border-white/20 bg-white/40 p-4 dark:bg-white/5">
        {reviewCategories.map((category) => (
          <div
            key={category}
            className="flex flex-col gap-2 rounded-xl bg-white/60 p-3 dark:bg-white/5 md:flex-row md:items-center md:justify-between"
          >
            <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
              {category}
            </p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => handleRating(category, value)}
                  className="text-slate-400 transition hover:scale-110"
                >
                  <Star
                    className={`h-5 w-5 ${
                      value <= form.ratings[category]
                        ? "fill-yellow-400 text-yellow-400"
                        : ""
                    }`}
                  />
                  <span className="sr-only">{value} stars</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div>
        <label
          htmlFor={`${formId}-comments`}
          className="mb-2 block text-sm font-medium text-slate-600 dark:text-slate-200"
        >
          Comments
        </label>
        <textarea
          id={`${formId}-comments`}
          className="min-h-[120px] w-full rounded-2xl border border-slate-900/10 bg-white/70 p-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
          placeholder="Share how they handled payment, communication, and safety."
          required
          value={form.comments}
          onChange={(event) => handleChange("comments", event.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-2xl border border-transparent px-4 py-3 text-sm font-semibold text-slate-500 transition hover:border-slate-200 hover:bg-white/80 dark:hover:bg-white/10"
          >
            Cancel
          </button>
        )}
        <button
          type="submit"
          className="inline-flex flex-1 items-center justify-center rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.01]"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}

function Input({
  id,
  label,
  placeholder,
  value,
  required,
  onChange,
}: {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  required?: boolean;
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-600 dark:text-slate-200"
      >
        {label}
      </label>
      <input
        id={id}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-slate-900/10 bg-white/70 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
      />
    </div>
  );
}
