import React from "react";
import Link from "next/link";
import { KwikFlowLogo } from "../components/Logo";

export const metadata = {
  title: "Terms of Service | KwikFlow Technologies",
  description: "Terms of Service and commercial usage agreement for KwikFlow Shopify automation software.",
  alternates: {
    canonical: "https://kwikflow.io/terms/",
  },
};

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF8] text-[#161614] selection:bg-[#FFF7CC] selection:text-[#0A0A0A]">
      <header className="sticky top-0 z-50 w-full border-b border-[#E2E2DC] bg-[#FFFFFF]/90 backdrop-blur-md">
        <div className="container-max flex h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2" aria-label="KwikFlow Home">
            <KwikFlowLogo size={32} />
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-[#5F5F58] hover:text-[#111111] transition-colors"
          >
            ← Back to Overview
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-20" id="main-content">
        <div className="container-max">
          <article className="mx-auto max-w-3xl rounded-[12px] border border-[#E2E2DC] bg-[#FFFFFF] p-6 sm:p-10 shadow-xs">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F4F0] px-3 py-1 text-xs font-semibold text-[#73736C]">
              <span>COMMERCIAL TERMS</span>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-[#111111] sm:text-4xl">
              Terms of Service
            </h1>

            <p className="mt-2 font-mono text-xs text-[#73736C]">
              Last updated: October 2026 · KwikFlow Technologies
            </p>

            <div className="mt-8 space-y-6 text-sm leading-relaxed text-[#5F5F58] border-t border-[#E2E2DC] pt-6">
              <section>
                <h2 className="text-lg font-bold text-[#111111]">1. Agreement to Terms</h2>
                <p className="mt-2">
                  By installing or utilizing KwikFlow via the Shopify App Store, you agree to be bound by these
                  Terms of Service and our Privacy Policy. If you are entering into this agreement on behalf of a company,
                  you represent that you have authority to bind that entity.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#111111]">2. Software License &amp; Usage</h2>
                <p className="mt-2">
                  KwikFlow grants you a limited, non-exclusive, revocable license to access our checkout automation
                  services strictly for your Shopify storefront operations. You agree not to reverse engineer, disrupt,
                  or misuse the API infrastructure.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#111111]">3. Merchant Ownership &amp; Data</h2>
                <p className="mt-2">
                  Merchants retain all intellectual property rights, customer profiles, and store records. KwikFlow processes
                  cart data strictly as necessary to execute automated draft order generation.
                </p>
              </section>

              <section>
                <h2 className="text-lg font-bold text-[#111111]">4. Contact Information</h2>
                <p className="mt-2">
                  For inquiries regarding billing, operational SLAs, or enterprise terms, email{" "}
                  <a href="mailto:support@kwikflow.io" className="text-[#111111] font-semibold underline">
                    support@kwikflow.io
                  </a>.
                </p>
              </section>
            </div>
          </article>
        </div>
      </main>

      <footer className="border-t border-[#E2E2DC] bg-[#FFFFFF] py-8">
        <div className="container-max flex flex-col justify-between gap-4 text-xs text-[#73736C] sm:flex-row sm:items-center">
          <Link href="/">
            <KwikFlowLogo size={28} />
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-[#111111]">Home</Link>
            <Link href="/about" className="hover:text-[#111111]">About</Link>
            <Link href="/privacy-policy" className="hover:text-[#111111]">Privacy Policy</Link>
          </div>
          <div>© {new Date().getFullYear()} KwikFlow Technologies. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
