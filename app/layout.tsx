import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kwikflow.io";
const title = "KwikFlow | Turn Abandoned Carts Into Shopify Orders";
const description =
  "KwikFlow automates high-intent checkout recovery for Shopify stores by converting abandoned carts into review-ready draft orders with single-click payment links.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | KwikFlow",
  },
  description,
  applicationName: "KwikFlow",
  authors: [{ name: "KwikFlow Technologies", url: siteUrl }],
  creator: "KwikFlow Technologies",
  publisher: "KwikFlow Technologies",
  alternates: {
    canonical: siteUrl,
    types: {
      "application/rss+xml": `${siteUrl}/feed.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "KwikFlow",
    title,
    description,
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "KwikFlow Lightning-K Velocity Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/icon.png"],
    creator: "@kwikflow",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "date-modified": "2026-10-03",
    "theme-color": "#FFD400",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      "url": siteUrl,
      "name": "KwikFlow",
      "description": description,
      "publisher": {
        "@id": `${siteUrl}/#organization`,
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${siteUrl}/?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      "name": "KwikFlow",
      "legalName": "KwikFlow Technologies",
      "url": siteUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/icon.png`,
        "width": 512,
        "height": 512,
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "support@kwikflow.io",
        "url": siteUrl,
      },
      "sameAs": [
        "https://apps.shopify.com/kwikflow-ai?search_id=67147e87-c79a-4bcb-a2f8-1fa8f0937203&surface_detail=kwikflow&surface_inter_position=1&surface_intra_position=1&surface_type=search",
        "https://www.linkedin.com/company/kwikflow",
        "https://github.com/usari14/kwikflow",
        "https://www.wikidata.org/wiki/Q114352277",
      ],
    },
    {
      "@type": "WebApplication",
      "@id": `${siteUrl}/#webapp`,
      "name": "KwikFlow",
      "applicationCategory": "BusinessApplication",
      "browserRequirements": "Requires JavaScript and modern web browser",
      "operatingSystem": "All, Shopify Web Admin",
      "description": description,
      "url": siteUrl,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      "name": "KwikFlow",
      "operatingSystem": "Shopify",
      "applicationCategory": "BusinessApplication",
      "description": description,
      "url": siteUrl,
      "dateModified": "2026-10-03",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
    {
      "@type": "Product",
      "@id": `${siteUrl}/#product`,
      "name": "KwikFlow Checkout Recovery System",
      "description": description,
      "brand": {
        "@type": "Brand",
        "name": "KwikFlow",
      },
      "url": siteUrl,
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": "https://apps.shopify.com/kwikflow-ai?search_id=67147e87-c79a-4bcb-a2f8-1fa8f0937203&surface_detail=kwikflow&surface_inter_position=1&surface_intra_position=1&surface_type=search",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "128",
        "bestRating": "5",
        "worstRating": "1",
      },
    },
    {
      "@type": "HowTo",
      "@id": `${siteUrl}/#howto`,
      "name": "How to Recover Abandoned Carts with KwikFlow",
      "description": "Three-step automation process to convert abandoned carts into confirmed orders.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Detect Opportunity",
          "text": "KwikFlow monitors checkout activity in real-time and filters genuine buyers.",
        },
        {
          "@type": "HowToStep",
          "name": "Compile Native Draft Order",
          "text": "A populated draft order is automatically compiled with line items and incentives.",
        },
        {
          "@type": "HowToStep",
          "name": "Close with 1-Click Link",
          "text": "Dispatch the direct checkout link to complete the sale.",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is KwikFlow?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KwikFlow is an e-commerce automation application for Shopify merchants that detects high-intent abandoned carts and programmatically transforms them into review-ready Shopify Draft Orders with one-click direct checkout links.",
          },
        },
        {
          "@type": "Question",
          "name": "How does KwikFlow differ from traditional abandoned cart recovery emails?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Traditional cart emails direct shoppers back to an empty or unauthenticated cart where they must re-enter details, re-select shipping, and manually input discount codes. KwikFlow creates a native Shopify Draft Order with line items, pre-applied incentives, and customer shipping pre-filled, allowing the customer to complete payment with a single tap.",
          },
        },
        {
          "@type": "Question",
          "name": "How fast does KwikFlow generate draft orders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "KwikFlow compiles and generates draft orders in an average of 1.2 seconds following checkout abandonment webhook ingestion.",
          },
        },
        {
          "@type": "Question",
          "name": "Does KwikFlow reserve inventory for pending draft orders?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, merchants can configure custom inventory reservation rules to lock stock during active recovery windows or automatically release items back to the general pool after a customizable period.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does setup take and does it require developer code?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Setup takes under 3 minutes with zero custom theme code. KwikFlow installs directly via the Shopify App Store and integrates natively with Shopify's Draft Order API.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@600;700;800&family=Roboto+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="KwikFlow Updates & Insights"
          href={`${siteUrl}/feed.xml`}
        />
        {/* WebMCP Declarations for AI Search & Agent Readiness */}
        <meta
          name="webmcp-declared-tool"
          content="toolname=recover_cart; tooldescription=Transform abandoned checkout into a pre-filled Shopify draft order; parameters=cart_id,customer_email"
        />
        <meta
          name="webmcp-declared-tool"
          content="toolname=generate_checkout_link; tooldescription=Generate direct 1-click checkout payment link for abandoned cart"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAFAF8] text-[#161614] antialiased">
        {children}
      </body>
    </html>
  );
}
