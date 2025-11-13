import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { companies, findCompanyBySlug } from "@/data/companies";
import { CompanyDetail } from "@/components/sections/company-detail";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return companies.map((company) => ({ slug: company.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const company = findCompanyBySlug(params.slug);

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

export default function CompanyPage({ params }: Props) {
  const company = findCompanyBySlug(params.slug);

  if (!company) {
    notFound();
  }

  return <CompanyDetail company={company} />;
}
