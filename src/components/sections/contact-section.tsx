"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto grid max-w-6xl gap-8 rounded-[32px] border border-white/10 bg-white/80 px-8 py-12 shadow-xl dark:bg-slate-900/70 md:grid-cols-2"
    >
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          Feedback
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">
          Tell us what would help your crew.
        </h2>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          This form is powered by Netlify Forms. Drop feature ideas, request a
          new company, or volunteer to verify reviews.
        </p>
      </div>
      <motion.form
        name="feedback"
        method="POST"
        data-netlify="true"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-white/20 bg-white/70 p-6 shadow-inner dark:bg-white/5"
      >
        <input type="hidden" name="form-name" value="feedback" />
        <div className="space-y-4">
          <div>
            <label
              htmlFor="feedback-name"
              className="text-sm font-medium text-slate-600 dark:text-slate-200"
            >
              Name or team
            </label>
            <input
              id="feedback-name"
              name="name"
              className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
              placeholder="Everest Electrical"
            />
          </div>
          <div>
            <label
              htmlFor="feedback-email"
              className="text-sm font-medium text-slate-600 dark:text-slate-200"
            >
              Email
            </label>
            <input
              id="feedback-email"
              name="email"
              type="email"
              required
              className="mt-2 w-full rounded-2xl border border-slate-900/10 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
              placeholder="you@tradepartner.com"
            />
          </div>
          <div>
            <label
              htmlFor="feedback-message"
              className="text-sm font-medium text-slate-600 dark:text-slate-200"
            >
              Message
            </label>
            <textarea
              id="feedback-message"
              name="message"
              required
              className="mt-2 min-h-[140px] w-full rounded-2xl border border-slate-900/10 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 dark:border-white/10 dark:bg-white/5 dark:text-white"
              placeholder="Feature ideas, new companies to add, or general feedback."
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:scale-[1.01]"
          >
            Send feedback
            <Send className="h-4 w-4" />
          </button>
        </div>
      </motion.form>
    </section>
  );
}
