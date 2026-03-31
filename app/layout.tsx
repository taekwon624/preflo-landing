import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preflo — Stop Losing Leads to Your Inbox",
  description:
    "Preflo automates lead intake and follow-up for service agencies. Every inquiry captured, classified, and responded to — automatically.",
  keywords: [
    "lead automation",
    "lead management",
    "service agency CRM",
    "automated follow-up",
    "SMB lead capture",
    "Australia lead management",
    "agency automation",
    "AI lead response",
    "small business lead tracking",
    "done-for-you lead system",
  ],
  metadataBase: new URL("https://preflo.io"),
  alternates: {
    canonical: "https://preflo.io",
  },
  openGraph: {
    title: "Preflo — Stop Losing Leads to Your Inbox",
    description:
      "Preflo automates lead intake and follow-up for service agencies. Every inquiry captured, classified, and responded to — automatically.",
    url: "https://preflo.io",
    siteName: "Preflo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preflo — Stop Losing Leads to Your Inbox",
    description:
      "Preflo automates lead intake and follow-up for service agencies. Every inquiry captured, classified, and responded to — automatically.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Preflo",
  url: "https://preflo.io",
  email: "hello@preflo.io",
  description:
    "Preflo automates lead intake and follow-up for service agencies. Every inquiry captured, classified, and responded to — automatically.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
