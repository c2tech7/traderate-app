import type { Company, Sector } from "@/lib/types";

export const sectors: Sector[] = ["Builder", "Developer", "Owner"];

export const companies: Company[] = [
  {
    id: "cobalt-build",
    slug: "cobalt-build",
    name: "Cobalt Build Co.",
    sector: "Builder",
    location: "Austin, TX",
    description:
      "Mid-size commercial builder focused on sustainable mixed-use towers and civic campuses across the Southwest.",
    tags: ["High-Rise", "LEED Gold", "Public Sector"],
    spotlight:
      "Known for transparent bid packages and weekly on-site trade roundtables.",
    paymentTerms: "Net 15",
    badge: "Elite Payer",
    coverGradient: "from-sky-500/30 via-cyan-500/20 to-transparent",
    reviews: [
      {
        id: "cobalt-r1",
        reviewer: "Marcus Leal",
        trade: "Master Electrician",
        project: "Eastbank Civic Tower",
        date: "2024-08-12",
        comments:
          "Invoices are approved before draw day and PMs check in about manpower needs. Site walks always start with safety.",
        ratings: {
          "Payment Reliability": 5,
          Communication: 5,
          "Site Safety": 5,
          Respect: 5,
        },
      },
      {
        id: "cobalt-r2",
        reviewer: "Priya Narayan",
        trade: "Mechanical Contractor",
        project: "Northline Medical Center",
        date: "2024-04-04",
        comments:
          "Design clarifications land in writing within a day. They hosted a vendor appreciation lunch after topping out.",
        ratings: {
          "Payment Reliability": 5,
          Communication: 4,
          "Site Safety": 5,
          Respect: 5,
        },
      },
      {
        id: "cobalt-r3",
        reviewer: "Anthony Rhodes",
        trade: "Concrete Foreman",
        project: "River District Garage",
        date: "2023-11-19",
        comments:
          "Zero retainage surprises and the supers treat you like partners. One of the smoothest GC relationships we have.",
        ratings: {
          "Payment Reliability": 5,
          Communication: 4,
          "Site Safety": 4,
          Respect: 5,
        },
      },
    ],
  },
  {
    id: "northwind-development",
    slug: "northwind-development",
    name: "Northwind Development",
    sector: "Developer",
    location: "Denver, CO",
    description:
      "Mountain-region developer backing modern multifamily, hospitality, and adaptive reuse projects.",
    tags: ["Multifamily", "Adaptive Reuse", "Hospitality"],
    spotlight:
      "Exec team hosts monthly town halls with site teams and trade partners.",
    paymentTerms: "Net 20",
    badge: "Preferred Client",
    coverGradient: "from-emerald-500/30 via-teal-500/20 to-transparent",
    reviews: [
      {
        id: "northwind-r1",
        reviewer: "Sasha Chen",
        trade: "Glazier",
        project: "Vail Alpine Residences",
        date: "2024-05-26",
        comments:
          "Change orders are logged within 48 hours. Accounting portal is painless and ACH always lands on time.",
        ratings: {
          "Payment Reliability": 5,
          Communication: 4,
          "Site Safety": 4,
          Respect: 5,
        },
      },
      {
        id: "northwind-r2",
        reviewer: "Luis Romero",
        trade: "Finish Carpenter",
        project: "Coal Creek Mixed-Use",
        date: "2024-01-14",
        comments:
          "They crowdsource schedule risks and reward crews that flag issues early. Would bid with them again.",
        ratings: {
          "Payment Reliability": 4,
          Communication: 4,
          "Site Safety": 4,
          Respect: 4,
        },
      },
      {
        id: "northwind-r3",
        reviewer: "Hannah Ortiz",
        trade: "Roofing Contractor",
        project: "Golden Summit Lodge",
        date: "2023-08-07",
        comments:
          "Weather delays were handled fairly and they split mobilization costs. Safety briefings were thorough.",
        ratings: {
          "Payment Reliability": 4,
          Communication: 5,
          "Site Safety": 5,
          Respect: 4,
        },
      },
    ],
  },
  {
    id: "atlas-commercial",
    slug: "atlas-commercial",
    name: "Atlas Commercial Partners",
    sector: "Owner",
    location: "Nashville, TN",
    description:
      "Family office managing a portfolio of Class A office campuses and light-industrial parks across the Southeast.",
    tags: ["Corporate", "Industrial", "Long-Term"],
    spotlight:
      "Champions respectful jobsite culture and rewards trades that mentor apprentices on site.",
    paymentTerms: "Net 30",
    badge: "Safety First",
    coverGradient: "from-purple-500/30 via-indigo-500/20 to-transparent",
    reviews: [
      {
        id: "atlas-r1",
        reviewer: "Devon Keene",
        trade: "Low Voltage Specialist",
        project: "Edgewater Campus",
        date: "2024-06-02",
        comments:
          "Owner reps walk sites weekly and make decisions quickly. They bonus teams that beat punch-list targets.",
        ratings: {
          "Payment Reliability": 4,
          Communication: 5,
          "Site Safety": 5,
          Respect: 5,
        },
      },
      {
        id: "atlas-r2",
        reviewer: "Maya Ellis",
        trade: "Painter",
        project: "Music Row Offices",
        date: "2023-12-18",
        comments:
          "They do hold 5% retainage but release it as soon as closeout docs land. Always return calls.",
        ratings: {
          "Payment Reliability": 4,
          Communication: 4,
          "Site Safety": 4,
          Respect: 4,
        },
      },
      {
        id: "atlas-r3",
        reviewer: "Chris Young",
        trade: "HVAC Service",
        project: "Riverport Logistics Center",
        date: "2023-07-09",
        comments:
          "Plenty of laydown space, coordinated crane picks, and good respect for after-hours work.",
        ratings: {
          "Payment Reliability": 3,
          Communication: 4,
          "Site Safety": 4,
          Respect: 4,
        },
      },
    ],
  },
  {
    id: "urbanthread",
    slug: "urbanthread",
    name: "UrbanThread Collective",
    sector: "Developer",
    location: "Seattle, WA",
    description:
      "Design-led developer delivering community-first infill, boutique hotels, and creative office conversions.",
    tags: ["Boutique", "Adaptive Reuse", "Hospitality"],
    spotlight: "Publishes transparent cash-flow dashboards for trade partners.",
    paymentTerms: "Net 18",
    coverGradient: "from-orange-500/20 via-rose-500/20 to-transparent",
    reviews: [
      {
        id: "urban-r1",
        reviewer: "Rachel Kim",
        trade: "Tile Specialist",
        project: "Soundview Hotel",
        date: "2024-02-01",
        comments:
          "Architects are on every coordination call. Payment portal is modern and flexible with ACH or RTP.",
        ratings: {
          "Payment Reliability": 5,
          Communication: 5,
          "Site Safety": 4,
          Respect: 5,
        },
      },
      {
        id: "urban-r2",
        reviewer: "Jon Blake",
        trade: "Site Superintendent",
        project: "Pioneer Creative Offices",
        date: "2023-09-11",
        comments:
          "Schedule pushes happen but they share why and invite subs into the solution. Safety budget never gets cut.",
        ratings: {
          "Payment Reliability": 4,
          Communication: 5,
          "Site Safety": 4,
          Respect: 5,
        },
      },
    ],
  },
];

export function findCompanyBySlug(slug: string) {
  return companies.find((company) => company.slug === slug);
}
