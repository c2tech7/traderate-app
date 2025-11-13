import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { companies, findCompanyBySlug } from "@/data/companies";
import { CompanyDetail } from "@/components/sections/company-detail";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = findCompanyBySlug(slug);

  if (!company) {
    return {
      title: "Company not found | TradeRate",
    };
  }

  return {
    title: `${company.name} reviews`,
    description: `Ratings for ${company.name} on how they pay, communicate, and protect trades.`,
  };
}

export default async function CompanyPage({ params }: Props) {
  const { slug } = await params;
  const company = findCompanyBySlug(slug);

  if (!company) {
    notFound();
  }

  return <CompanyDetail company={company} />;
}
