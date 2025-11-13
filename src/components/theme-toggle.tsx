"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, SunMedium } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-11 w-20 items-center rounded-full border border-white/20 bg-white/40 p-1 text-sm font-medium text-slate-900 shadow-lg shadow-slate-900/5 transition hover:scale-[1.02] hover:bg-white/70 dark:border-white/10 dark:bg-slate-900/40 dark:text-white",
        className,
      )}
    >
      <motion.span
        layout
        className="absolute inset-y-1 w-8 rounded-full bg-slate-900/90 text-white dark:bg-white/90 dark:text-slate-900"
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{
          left: mounted && isDark ? "calc(100% - 2.5rem)" : "0.25rem",
        }}
      />
      <span className="relative z-10 flex w-full justify-between px-2">
        <SunMedium className="h-4 w-4" />
        <Moon className="h-4 w-4" />
      </span>
    </button>
  );
}
