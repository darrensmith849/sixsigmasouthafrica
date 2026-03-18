import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default:
      "Six Sigma South Africa — Accredited Training, Certification & Consulting",
    template: "%s | Six Sigma South Africa",
  },
  description:
    "Africa's leading Six Sigma training and certification partner. Accredited Lean Six Sigma courses from White Belt to Black Belt, delivered online, virtually, and in the classroom across South Africa.",
  keywords: [
    "Six Sigma training South Africa",
    "Lean Six Sigma certification",
    "Green Belt course",
    "Black Belt course",
    "Six Sigma consulting",
    "process improvement",
    "operational excellence",
    "continuous improvement",
    "Six Sigma accreditation",
    "Kaizen training",
    "Root Cause Analysis",
  ],
  authors: [{ name: "Six Sigma South Africa" }],
  creator: "Six Sigma South Africa",
  metadataBase: new URL("https://sixsigmasouthafrica.co.za"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Six Sigma South Africa",
    title:
      "Six Sigma South Africa — Accredited Training, Certification & Consulting",
    description:
      "Africa's leading Six Sigma training and certification partner. Accredited Lean Six Sigma courses delivered across South Africa.",
    url: "https://sixsigmasouthafrica.co.za",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Six Sigma South Africa — Accredited Training, Certification & Consulting",
    description:
      "Africa's leading Six Sigma training and certification partner. Accredited Lean Six Sigma courses delivered across South Africa.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Six Sigma South Africa",
  description:
    "Africa's leading Six Sigma training and certification partner. Accredited Lean Six Sigma courses from White Belt to Black Belt.",
  url: "https://sixsigmasouthafrica.co.za",
  parentOrganization: {
    "@type": "Organization",
    name: "2KO Group",
  },
  areaServed: {
    "@type": "Place",
    name: "Southern Africa",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+27-21-426-5300",
    email: "info@2ko.co.za",
    contactType: "customer service",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lean Six Sigma Training Programmes",
    itemListElement: [
      {
        "@type": "Course",
        name: "Lean Six Sigma White Belt",
        description: "Free introductory course covering Six Sigma fundamentals and the DMAIC methodology.",
      },
      {
        "@type": "Course",
        name: "Lean Six Sigma Yellow Belt",
        description: "Foundation-level awareness training in the DMAIC framework and waste identification.",
      },
      {
        "@type": "Course",
        name: "Lean Six Sigma Green Belt",
        description: "Practitioner-level certification with live improvement project.",
      },
      {
        "@type": "Course",
        name: "Lean Six Sigma Black Belt",
        description: "Advanced certification for operational leaders driving multiple improvement projects.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="pt-[65px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
