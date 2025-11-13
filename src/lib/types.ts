export type ReviewCategory =
  | "Payment Reliability"
  | "Communication"
  | "Site Safety"
  | "Respect";

export interface Review {
  id: string;
  reviewer?: string;
  trade: string;
  project: string;
  date: string;
  comments: string;
  ratings: Record<ReviewCategory, number>;
}

export type ReviewInput = Omit<Review, "id" | "date">;

export type Sector = "Builder" | "Developer" | "Owner";

export interface Company {
  id: string;
  slug: string;
  name: string;
  sector: Sector;
  location: string;
  description: string;
  tags: string[];
  spotlight?: string;
  website?: string;
  paymentTerms?: string;
  badge?: string;
  coverGradient: string;
  reviews: Review[];
}
