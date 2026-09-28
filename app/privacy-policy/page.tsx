import React from "react";
import Link from "next/link";
import { KwikFlowLogo } from "../components/Logo";

export const metadata = {
  title: "Privacy Policy | KwikFlow",
  description: "Privacy Policy and data governance standards for the KwikFlow Shopify automation app.",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF8] text-[#161614] selection:bg-[#FFF7CC] selection:text-[#0A0A0A]">
      {/* ── Navigation ── */}
      <header className="sticky top-0 z-50 w-full border-b border-[#E2E2DC] bg-[#FFFFFF]/90 backdrop-blur-md">
        <div className="container-max flex h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2">
            <KwikFlowLogo size={32} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5F5F58] hover:text-[#111111] transition-colors"
          >
            ← Back to overview
          </Link>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="flex-1 py-12 md:py-20">
        <div className="container-max">
          <article className="mx-auto max-w-3xl rounded-[12px] border border-[#E2E2DC] bg-[#FFFFFF] p-6 sm:p-10 shadow-xs">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F4F0] px-3 py-1 text-xs font-semibold text-[#73736C]">
              <span>LEGAL &amp; COMPLIANCE</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-[#111111] sm:text-4xl">
              Privacy Policy
            </h1>

            <div className="mt-2 font-mono text-xs text-[#73736C]">
              Last updated: September 2026 · KwikFlow Velocity System
            </div>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#5F5F58] border-t border-[#E2E2DC] pt-6">
              <p className="text-base text-[#161614] font-medium leading-normal">
                KwikFlow is an automation tool designed for Shopify merchants to convert abandoned checkouts
                into draft orders for structured follow-up. This policy details how data is handled with
                complete operational transparency and security.
              </p>

              <div>
                <h2 className="text-lg font-bold text-[#111111]">1. Information We Access &amp; Process</h2>
                <p className="mt-2">
                  When a merchant connects KwikFlow via the Shopify App Store, we receive limited access to Shopify API
                  webhooks strictly necessary for draft order creation. This includes store identifier data, cart items,
                  monetary value, and customer contact details (such as email or phone) submitted during an abandoned checkout.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111111]">2. How Information Is Used</h2>
                <p className="mt-2">
                  We use this data solely to execute the automation configured by the merchant:
                </p>
                <ul className="mt-2 list-disc list-inside space-y-1 pl-2 text-xs sm:text-sm">
                  <li>Detecting qualifying abandoned checkout events per merchant criteria.</li>
                  <li>Creating corresponding draft orders within the merchant&apos;s Shopify Admin.</li>
                  <li>Generating secure, single-use checkout invoice links.</li>
                  <li>Troubleshooting operational synchronization and latency issues.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111111]">3. Data Sharing &amp; Third Parties</h2>
                <p className="mt-2">
                  We never sell customer or merchant data. Information is only shared with infrastructure partners
                  (such as hosting and database providers) essential for the execution of KwikFlow services, under strict
                  confidentiality agreements.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111111]">4. Data Retention &amp; Merchant Control</h2>
                <p className="mt-2">
                  Merchants retain complete ownership of their customer data. You can disconnect KwikFlow at any time
                  from your Shopify admin. When uninstalled, active webhook subscriptions are terminated immediately.
                  Shoppers wishing to exercise data rights regarding a store should contact the merchant directly.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#111111]">5. Security Standards</h2>
                <p className="mt-2">
                  All communications between KwikFlow, Shopify APIs, and customer endpoints are encrypted in transit
                  using TLS 1.3. We enforce strict role-based access controls and follow Shopify API security best practices.
                </p>
              </div>

              <div className="rounded-[8px] border border-[#E2E2DC] bg-[#FAFAF8] p-4 text-xs">
                <span className="font-bold text-[#111111]">Contact our privacy team:</span>
                <p className="mt-1 text-[#5F5F58]">
                  For questions about this policy or your store data, reach out directly to{" "}
                  <a href="mailto:support@kwikflow.app" className="font-semibold text-[#111111] underline">
                    support@kwikflow.app
                  </a>
                  .
                </p>
              </div>
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
          <div>© {new Date().getFullYear()} KwikFlow. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
