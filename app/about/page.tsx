import React from "react";
import Link from "next/link";
import { KwikFlowLogo } from "../components/Logo";

export const metadata = {
  title: "About Us | KwikFlow Technologies",
  description:
    "Learn about KwikFlow Technologies, our mission to eliminate e-commerce checkout friction, and our high-velocity Shopify automation architecture.",
  alternates: {
    canonical: "https://kwikflow.io/about/",
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://kwikflow.io/about/#aboutpage",
  "url": "https://kwikflow.io/about/",
  "name": "About KwikFlow",
  "description": "Learn about KwikFlow Technologies and our high-velocity e-commerce cart recovery system.",
  "publisher": {
    "@type": "Organization",
    "name": "KwikFlow",
    "url": "https://kwikflow.io",
    "logo": "https://kwikflow.io/icon.png",
  },
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF8] text-[#161614] selection:bg-[#FFF7CC] selection:text-[#0A0A0A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* ── Top Navigation ── */}
      <header className="sticky top-0 z-50 w-full border-b border-[#E2E2DC] bg-[#FFFFFF]/90 backdrop-blur-md">
        <div className="container-max flex h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2" aria-label="KwikFlow Home">
            <KwikFlowLogo size={32} />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-xs font-semibold text-[#5F5F58] hover:text-[#111111] transition-colors"
            >
              ← Back to Overview
            </Link>
            <a
              href="https://apps.shopify.com/kwikflow-ai?search_id=67147e87-c79a-4bcb-a2f8-1fa8f0937203&surface_detail=kwikflow&surface_inter_position=1&surface_intra_position=1&surface_type=search"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs h-9 px-4"
            >
              Install App →
            </a>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1 py-12 md:py-20" id="main-content">
        <div className="container-max">
          <article className="mx-auto max-w-3xl rounded-[12px] border border-[#E2E2DC] bg-[#FFFFFF] p-6 sm:p-10 shadow-xs">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7CC] px-3 py-1 text-xs font-semibold text-[#0A0A0A]">
              <span>COMPANY &amp; ARCHITECTURE</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-[#111111] sm:text-4xl">
              About KwikFlow Technologies
            </h1>

            <p className="mt-2 font-mono text-xs text-[#73736C]">
              Founded 2026 · Mission: Eliminate E-Commerce Checkout Friction
            </p>

            <div className="mt-8 space-y-8 text-sm leading-relaxed text-[#5F5F58] border-t border-[#E2E2DC] pt-6">
              {/* Mission */}
              <section>
                <h2 className="text-xl font-bold text-[#111111]">Our Mission</h2>
                <p className="mt-2 text-base text-[#161614] leading-relaxed">
                  KwikFlow was built around one straightforward promise: important store operations should move quickly,
                  clearly, and reliably. Online retail brands lose an average of 70% of potential buyers at checkout.
                  Traditional reminder emails fail because they force shoppers to rebuild their orders from scratch.
                  We transform that lost intent into ready-to-pay orders in under 1.4 seconds.
                </p>
              </section>

              {/* The Velocity Philosophy */}
              <section>
                <h2 className="text-xl font-bold text-[#111111]">The Velocity System</h2>
                <p className="mt-2">
                  Our architecture is engineered on five guiding operational principles:
                </p>
                <ul className="mt-3 space-y-2 pl-2">
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#111111] font-mono shrink-0">01. Momentum:</span>
                    <span>Every workflow must make next steps obvious and frictionless for shoppers and sales reps.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#111111] font-mono shrink-0">02. Precision:</span>
                    <span>Inventory reservations, discount rules, and customer addresses must match native store records exactly.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#111111] font-mono shrink-0">03. Native Admin:</span>
                    <span>Zero detached databases. Orders reside directly inside Shopify Admin so support teams work where they are already comfortable.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-[#111111] font-mono shrink-0">04. Data Protection:</span>
                    <span>We never resell merchant or customer information. All transmissions use TLS 1.3 encryption.</span>
                  </li>
                </ul>
              </section>

              {/* Operational Team */}
              <section>
                <h2 className="text-xl font-bold text-[#111111]">Operations &amp; Support</h2>
                <p className="mt-2">
                  KwikFlow is maintained by an international engineering and customer success team specializing in
                  high-scale Shopify and Shopify Plus storefronts. We provide direct technical assistance, custom webhook
                  consultation, and performance optimization for high-growth merchants.
                </p>
                <div className="mt-4 rounded-[8px] border border-[#E2E2DC] bg-[#FAFAF8] p-4 text-xs space-y-1">
                  <div><strong className="text-[#111111]">Corporate Contact:</strong> support@kwikflow.io</div>
                  <div><strong className="text-[#111111]">Platform Availability:</strong> Shopify App Store Global</div>
                  <div><strong className="text-[#111111]">Official Repository:</strong> github.com/usari14/kwikflow</div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[#E2E2DC] bg-[#FFFFFF] py-8">
        <div className="container-max flex flex-col justify-between gap-4 text-xs text-[#73736C] sm:flex-row sm:items-center">
          <Link href="/">
            <KwikFlowLogo size={28} />
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-[#111111]">Home</Link>
            <Link href="/privacy-policy" className="hover:text-[#111111]">Privacy Policy</Link>
            <a href="mailto:support@kwikflow.io" className="hover:text-[#111111]">support@kwikflow.io</a>
          </div>
          <div>© {new Date().getFullYear()} KwikFlow Technologies. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
