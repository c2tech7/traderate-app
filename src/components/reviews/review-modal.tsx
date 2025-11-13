"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { Company, ReviewInput } from "@/lib/types";
import { ReviewForm } from "./review-form";

interface ReviewModalProps {
  company?: Company | null;
  open: boolean;
  onClose: () => void;
  onSubmit: (companyId: string, review: ReviewInput) => void;
}

export function ReviewModal({
  company,
  open,
  onClose,
  onSubmit,
}: ReviewModalProps) {
  return (
    <AnimatePresence>
      {open && company ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 p-4 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="glass-panel relative w-full max-w-2xl rounded-[32px] border border-white/10 bg-white/90 p-8 dark:bg-slate-900/90"
          >
            <button
              aria-label="Close review form"
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full border border-white/40 p-2 text-slate-500 transition hover:bg-white/70 dark:text-slate-300"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mb-6 space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                Review
              </p>
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                {company.name}
              </h2>
            </div>
            <ReviewForm
              submitLabel="Publish review"
              onCancel={onClose}
              onSubmit={(data) => {
                onSubmit(company.id, data);
                onClose();
              }}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
