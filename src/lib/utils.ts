import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import type { Review, ReviewCategory } from "./types";

export const reviewCategories: ReviewCategory[] = [
  "Payment Reliability",
  "Communication",
  "Site Safety",
  "Respect",
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAverageRating(reviews: Review[]): number {
  if (!reviews.length) return 0;

  const total = reviews.reduce((sum, review) => {
    const categoryTotal = Object.values(review.ratings).reduce(
      (categorySum, rating) => categorySum + rating,
      0,
    );

    return sum + categoryTotal / Object.values(review.ratings).length;
  }, 0);

  return total / reviews.length;
}

export function getCategoryAverage(
  reviews: Review[],
  category: ReviewCategory,
): number {
  if (!reviews.length) return 0;

  const total = reviews.reduce(
    (sum, review) => sum + (review.ratings[category] ?? 0),
    0,
  );

  return total / reviews.length;
}

export function formatRating(value: number) {
  if (!value) return "0.0";
  return value.toFixed(1);
}
