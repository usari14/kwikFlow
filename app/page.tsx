import React from "react";
import Link from "next/link";
import { KwikFlowLogo } from "./components/Logo";

const SHOPIFY_APP_URL =
  "https://apps.shopify.com/kwikflow-ai?search_id=67147e87-c79a-4bcb-a2f8-1fa8f0937203&surface_detail=kwikflow&surface_inter_position=1&surface_intra_position=1&surface_type=search";
const SUPPORT_EMAIL = "support@kwikflow.io";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF8] text-[#161614] selection:bg-[#FFF7CC] selection:text-[#0A0A0A]">
      {/* ── Top Navigation ── */}
      <header className="sticky top-0 z-50 w-full border-b border-[#E2E2DC] bg-[#FFFFFF]/90 backdrop-blur-md">
        <div className="container-max flex h-16 items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2">
            <KwikFlowLogo size={34} />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <a href="#pipeline" className="nav-link">
              Pipeline
            </a>
            <a href="#how" className="nav-link">
              How it works
            </a>
            <a href="#features" className="nav-link">
              Features
            </a>
            <a href="#comparison" className="nav-link">
              Comparison
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="hidden text-sm font-semibold text-[#5F5F58] hover:text-[#111111] sm:inline-block"
            >
              Contact support
            </a>
            <a
              href={SHOPIFY_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get KwikFlow →
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="container-max">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Value Prop */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FFE97A] bg-[#FFF7CC] px-3.5 py-1.5 text-xs font-semibold text-[#0A0A0A]">
                  <span className="flex h-2 w-2 rounded-full bg-[#E8C100] animate-pulse" />
                  <span>Velocity Automation for Shopify</span>
                </div>

                <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
                  Turn abandoned carts into{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#111111]">confirmed orders.</span>
                    <span className="absolute bottom-1.5 left-0 z-0 h-3 w-full bg-[#FFD400]/70" />
                  </span>
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-[#5F5F58] md:text-xl">
                  KwikFlow instantly turns high-intent abandoned carts into review-ready
                  Shopify draft orders with 1-click checkout links—giving your team the fastest path to recovered revenue.
                </p>

                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <a
                    href={SHOPIFY_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-[15px]"
                  >
                    Start recovering carts →
                  </a>
                  <a href="#pipeline" className="btn-tertiary">
                    Inspect live pipeline ↓
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium text-[#73736C]">
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-[#087A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    3-minute setup
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[#D1D1CA]" />
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-[#087A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Native Shopify Draft API
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[#D1D1CA]" />
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-[#087A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Zero code required
                  </span>
                </div>
              </div>

              {/* Right Column: High-Precision Operational Card */}
              <div id="pipeline" className="lg:col-span-6">
                <div className="card-raised overflow-hidden border border-[#E2E2DC] bg-[#FFFFFF] shadow-[0_8px_30px_rgba(17,17,17,0.06)]">
                  {/* Console Header */}
                  <div className="flex h-11 items-center justify-between border-b border-[#E2E2DC] bg-[#FAFAF8] px-4">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E2E2DC]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E2E2DC]" />
                      <span className="h-2.5 w-2.5 rounded-full bg-[#E2E2DC]" />
                      <span className="ml-2 font-mono text-[11px] font-medium tracking-wide text-[#73736C]">
                        KWIKFLOW // VELOCITY_ENGINE
                      </span>
                    </div>
                    <span className="badge-success font-mono text-[11px]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#087A45] animate-ping" />
                      SYS_ACTIVE
                    </span>
                  </div>

                  {/* Operational Flow Content */}
                  <div className="p-5 md:p-6 space-y-4">
                    {/* Event 1: Abandoned Cart Detection */}
                    <div className="rounded-[8px] border border-[#E2E2DC] bg-[#FAFAF8] p-4 transition-all">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#FFF3D6] text-[#7A5100] text-xs font-bold font-mono">
                            01
                          </span>
                          <div>
                            <div className="text-sm font-bold text-[#111111]">
                              Abandoned Checkout Detected
                            </div>
                            <div className="font-mono text-xs text-[#73736C]">
                              sarah.miller@retail.co · ID #CK-9204
                            </div>
                          </div>
                        </div>
                        <span className="badge-warning">Triggered</span>
                      </div>

                      <div className="mt-3.5 flex items-center justify-between border-t border-[#E2E2DC] pt-3 text-xs text-[#5F5F58]">
                        <span>3 items in cart (Athletic Kit + Hoodie)</span>
                        <span className="font-mono font-bold text-[#111111]">$184.00</span>
                      </div>
                    </div>

                    {/* Flow Transition */}
                    <div className="flex items-center justify-between px-3 text-xs font-mono text-[#73736C]">
                      <div className="flex items-center gap-2">
                        <span className="inline-block h-4 w-0.5 bg-[#FFD400]" />
                        <span>KwikFlow rules matched (Value &gt; $100)</span>
                      </div>
                      <span className="chip-brand font-mono text-[11px]">
                        Latency: 1.1s
                      </span>
                    </div>

                    {/* Event 2: Draft Order Generated */}
                    <div className="rounded-[8px] border-2 border-[#FFE97A] bg-[#FFF7CC]/30 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#FFD400] text-[#0A0A0A] text-xs font-bold font-mono">
                            02
                          </span>
                          <div>
                            <div className="text-sm font-bold text-[#111111]">
                              Shopify Draft Order Created
                            </div>
                            <div className="font-mono text-xs text-[#5F5F58]">
                              Order #D-4892 · Native Shopify API
                            </div>
                          </div>
                        </div>
                        <span className="badge-success">Draft Ready</span>
                      </div>

                      {/* Draft Details */}
                      <div className="mt-3.5 space-y-2 rounded-[6px] bg-[#FFFFFF] p-3 text-xs border border-[#E2E2DC]">
                        <div className="flex justify-between text-[#5F5F58]">
                          <span>Pre-applied recovery perk:</span>
                          <span className="font-semibold text-[#087A45]">Free Priority Shipping</span>
                        </div>
                        <div className="flex justify-between items-center text-[#5F5F58] pt-1 border-t border-[#F4F4F0]">
                          <span>Direct checkout URL:</span>
                          <span className="font-mono text-[11px] text-[#111111] bg-[#F4F4F0] px-1.5 py-0.5 rounded">
                            checkout.store.com/c/8f9a2
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="text-xs text-[#73736C]">
                        Ready for instant follow-up via Email, SMS or WhatsApp
                      </div>
                      <a
                        href={SHOPIFY_APP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#111111] hover:underline"
                      >
                        Inspect Draft Order →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Metrics Ribbon ── */}
        <section className="border-y border-[#E2E2DC] bg-[#FFFFFF] py-8">
          <div className="container-max">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="border-l-2 border-[#FFD400] pl-4">
                <div className="font-mono text-2xl font-bold tracking-tight text-[#111111] md:text-3xl">
                  1.2s
                </div>
                <div className="mt-1 text-xs font-medium text-[#5F5F58] md:text-sm">
                  Average draft creation speed
                </div>
              </div>

              <div className="border-l-2 border-[#111111] pl-4">
                <div className="font-mono text-2xl font-bold tracking-tight text-[#111111] md:text-3xl">
                  31.8%
                </div>
                <div className="mt-1 text-xs font-medium text-[#5F5F58] md:text-sm">
                  Cart recovery conversion rate
                </div>
              </div>

              <div className="border-l-2 border-[#FFD400] pl-4">
                <div className="font-mono text-2xl font-bold tracking-tight text-[#111111] md:text-3xl">
                  100%
                </div>
                <div className="mt-1 text-xs font-medium text-[#5F5F58] md:text-sm">
                  Native Shopify Admin workflow
                </div>
              </div>

              <div className="border-l-2 border-[#111111] pl-4">
                <div className="font-mono text-2xl font-bold tracking-tight text-[#111111] md:text-3xl">
                  $0
                </div>
                <div className="mt-1 text-xs font-medium text-[#5F5F58] md:text-sm">
                  Loss to friction & manual re-entry
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── How It Works Section ── */}
        <section id="how" className="py-20 md:py-28">
          <div className="container-max">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F4F0] px-3 py-1 text-xs font-semibold text-[#73736C]">
                <span>A CLEARER RECOVERY FLOW</span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#111111] sm:text-4xl">
                From abandoned checkout to order confirmed in three precise steps.
              </h2>
              <p className="mt-4 text-base text-[#5F5F58] leading-relaxed">
                Most abandoned checkout sequences fail because the customer has to re-add items,
                deal with expired carts, or hunt for codes. KwikFlow eliminates every step of friction.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Step 1 */}
              <div className="card-surface flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#FFD400] bg-[#111111] px-2.5 py-1 rounded-[4px]">
                      01
                    </span>
                    <span className="badge-neutral font-mono">Detection</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-[#111111]">
                    Spot the opportunity
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5F5F58]">
                    KwikFlow monitors abandoned checkouts in real-time. It filters out bot traffic and
                    pinpoints genuine shoppers who added items and left contact details.
                  </p>
                </div>
                <div className="mt-8 border-t border-[#E2E2DC] pt-4 font-mono text-xs text-[#73736C]">
                  Rule: Cart value &gt; $50 · Customer email present
                </div>
              </div>

              {/* Step 2 */}
              <div className="card-surface flex flex-col justify-between border-[#FFE97A] bg-[#FFFFFF]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#0A0A0A] bg-[#FFD400] px-2.5 py-1 rounded-[4px]">
                      02
                    </span>
                    <span className="badge-info font-mono">Automation</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-[#111111]">
                    Create the Shopify draft
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5F5F58]">
                    A fully populated Shopify draft order is automatically compiled with line items,
                    customer shipping profile, pre-applied discounts, and inventory holds.
                  </p>
                </div>
                <div className="mt-8 border-t border-[#E2E2DC] pt-4 font-mono text-xs text-[#73736C]">
                  Output: Native Shopify Draft Order + Instant Link
                </div>
              </div>

              {/* Step 3 */}
              <div className="card-surface flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-[#FFFFFF] bg-[#111111] px-2.5 py-1 rounded-[4px]">
                      03
                    </span>
                    <span className="badge-success font-mono">Conversion</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold tracking-tight text-[#111111]">
                    Close the sale
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5F5F58]">
                    Deliver a 1-click checkout invoice link directly to the customer. When they tap,
                    the order is already locked, discounted, and ready to pay in seconds.
                  </p>
                </div>
                <div className="mt-8 border-t border-[#E2E2DC] pt-4 font-mono text-xs text-[#73736C]">
                  Result: Paid order registered in Shopify
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features & Capabilities ── */}
        <section id="features" className="border-t border-[#E2E2DC] bg-[#FFFFFF] py-20 md:py-28">
          <div className="container-max">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7CC] px-3 py-1 text-xs font-semibold text-[#0A0A0A]">
                <span>PRECISION ENGINEERING</span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#111111] sm:text-4xl">
                Designed for high-performance store operations.
              </h2>
              <p className="mt-4 text-base text-[#5F5F58]">
                Everything built according to the KwikFlow Velocity principles: minimal clicks,
                reliable data, and no visual clutter.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[12px] border border-[#E2E2DC] p-6 bg-[#FAFAF8]">
                <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#111111] text-[#FFD400]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#111111]">Sub-Second Execution</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5F5F58]">
                  Built on high-speed event queues. As soon as Shopify fires an abandoned checkout webhook,
                  the draft order is compiled in under 1.4 seconds.
                </p>
              </div>

              <div className="rounded-[12px] border border-[#E2E2DC] p-6 bg-[#FAFAF8]">
                <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#111111] text-[#FFD400]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#111111]">Native Shopify Drafts</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5F5F58]">
                  Zero proprietary databases or detached dashboards. Draft orders live directly in your Shopify
                  Admin where your support and sales reps already work.
                </p>
              </div>

              <div className="rounded-[12px] border border-[#E2E2DC] p-6 bg-[#FAFAF8]">
                <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#111111] text-[#FFD400]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#111111]">Smart Recovery Rules</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5F5F58]">
                  Automate bespoke discounts based on cart value, customer lifetime spend, or geographical location.
                  Incentives attach automatically to the generated draft.
                </p>
              </div>

              <div className="rounded-[12px] border border-[#E2E2DC] p-6 bg-[#FAFAF8]">
                <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#111111] text-[#FFD400]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#111111]">Inventory Preservation</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5F5F58]">
                  Configure whether draft orders should reserve stock or release items back to the general pool after
                  a customizable time window.
                </p>
              </div>

              <div className="rounded-[12px] border border-[#E2E2DC] p-6 bg-[#FAFAF8]">
                <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#111111] text-[#FFD400]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#111111]">Omnichannel Invoicing</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5F5F58]">
                  Share draft checkout links across Klaviyo emails, Gorgias support tickets, WhatsApp business,
                  or SMS sequences seamlessly.
                </p>
              </div>

              <div className="rounded-[12px] border border-[#E2E2DC] p-6 bg-[#FAFAF8]">
                <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#111111] text-[#FFD400]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#111111]">Clean Operational Metrics</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5F5F58]">
                  Track recovered GMV, draft conversion velocity, and team response efficiency with high-contrast,
                  actionable reporting.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Operational Comparison Table ── */}
        <section id="comparison" className="py-20 md:py-28">
          <div className="container-max">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#F4F4F0] px-3 py-1 text-xs font-semibold text-[#73736C]">
                <span>THE PERFORMANCE ADVANTAGE</span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#111111] sm:text-4xl">
                Manual Cart Recovery vs. KwikFlow Velocity
              </h2>
              <p className="mt-4 text-base text-[#5F5F58]">
                See why high-volume Shopify stores replace standard email reminders with pre-compiled draft orders.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-[12px] border border-[#E2E2DC] bg-[#FFFFFF] shadow-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E2DC] bg-[#FAFAF8] text-xs font-semibold text-[#73736C]">
                    <th className="py-4 px-6">Capability</th>
                    <th className="py-4 px-6 text-[#73736C]">Standard Cart Recovery</th>
                    <th className="py-4 px-6 text-[#111111] bg-[#FFF7CC]/40">KwikFlow Velocity System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E2DC] text-sm">
                  <tr>
                    <td className="py-4 px-6 font-semibold text-[#111111]">Draft Creation Time</td>
                    <td className="py-4 px-6 text-[#73736C]">Manual (15–30 mins/order)</td>
                    <td className="py-4 px-6 font-mono font-bold text-[#087A45] bg-[#FFF7CC]/20">Instant (1.2 seconds)</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-[#111111]">Customer Checkout Friction</td>
                    <td className="py-4 px-6 text-[#73736C]">Must re-open cart, re-apply coupons</td>
                    <td className="py-4 px-6 font-semibold text-[#111111] bg-[#FFF7CC]/20">1-click pre-populated checkout</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-[#111111]">Inventory Reservation</td>
                    <td className="py-4 px-6 text-[#73736C]">Unreserved; items often sell out</td>
                    <td className="py-4 px-6 font-semibold text-[#111111] bg-[#FFF7CC]/20">Automated inventory hold rules</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-[#111111]">Sales Rep Enablement</td>
                    <td className="py-4 px-6 text-[#73736C]">Requires manual copy-pasting items</td>
                    <td className="py-4 px-6 font-semibold text-[#111111] bg-[#FFF7CC]/20">Ready in Shopify Admin drafts instantly</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-[#111111]">Custom Invoicing &amp; Currencies</td>
                    <td className="py-4 px-6 text-[#73736C]">Complex multi-app setups</td>
                    <td className="py-4 px-6 font-semibold text-[#111111] bg-[#FFF7CC]/20">Native Shopify Draft Order API</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── High-Impact Velocity Call-to-Action ── */}
        <section className="py-16 md:py-24">
          <div className="container-max">
            <div className="relative overflow-hidden rounded-[16px] bg-[#111111] p-8 md:p-14 text-white">
              {/* Subtle top-right speed accent */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-[#FFD400]/10 blur-3xl pointer-events-none" />

              <div className="relative z-10 max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#FFD400]">
                  <span>RECOVER LOST REVENUE TODAY</span>
                </div>

                <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.1]">
                  Give every high-intent cart a second chance.
                </h2>

                <p className="mt-4 text-base text-[#D1D1CA] sm:text-lg">
                  Join forward-thinking Shopify merchants who turn abandoned checkout traffic
                  into closed sales without manual friction.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href={SHOPIFY_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary h-[48px] px-6 text-base"
                  >
                    Install KwikFlow for Shopify →
                  </a>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=Operational%20Demo%20Request`}
                    className="inline-flex h-[48px] items-center justify-center rounded-[8px] border border-white/20 px-5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                  >
                    Schedule an operational demo
                  </a>
                </div>

                <div className="mt-8 font-mono text-xs text-[#73736C]">
                  Setup takes less than 3 minutes · Compatible with Shopify &amp; Shopify Plus
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-[#E2E2DC] bg-[#FFFFFF] py-12">
        <div className="container-max">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Link href="/">
                <KwikFlowLogo size={32} />
              </Link>
              <p className="mt-2 text-xs text-[#73736C]">
                Precise, high-velocity cart recovery automation for modern Shopify merchants.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-xs font-semibold text-[#5F5F58]">
              <a href="#how" className="hover:text-[#111111] transition-colors">
                How it works
              </a>
              <a href="#pipeline" className="hover:text-[#111111] transition-colors">
                Pipeline
              </a>
              <a href="#features" className="hover:text-[#111111] transition-colors">
                Features
              </a>
              <a
                href={SHOPIFY_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#111111] transition-colors"
              >
                Shopify App
              </a>
              <Link href="/privacy-policy" className="hover:text-[#111111] transition-colors">
                Privacy Policy
              </Link>
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="hover:text-[#111111] transition-colors font-mono"
              >
                {SUPPORT_EMAIL}
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-between border-t border-[#E2E2DC] pt-6 text-xs text-[#73736C] sm:flex-row">
            <div>© {new Date().getFullYear()} KwikFlow. Built for Shopify.</div>
            <div className="mt-2 font-mono text-[11px] sm:mt-0">
              Velocity System v1.0 · All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
