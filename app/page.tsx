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
          <Link href="/" className="inline-flex items-center gap-2" aria-label="KwikFlow Home">
            <KwikFlowLogo size={34} />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main Navigation">
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
            <a href="#faq" className="nav-link">
              FAQ
            </a>
            <Link href="/about" className="nav-link">
              About
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="hidden text-sm font-semibold text-[#5F5F58] hover:text-[#111111] sm:inline-block"
              aria-label="Contact Customer Support"
            >
              Contact support
            </a>
            <a
              href={SHOPIFY_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Get KwikFlow on Shopify App Store"
              data-toolname="install_kwikflow"
              data-tooldescription="Install KwikFlow on Shopify App Store to automate checkout recovery"
            >
              Get KwikFlow →
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1" id="main-content">
        {/* ── Hero Section ── */}
        <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="container-max">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              {/* Left Column: Value Prop */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#FFE97A] bg-[#FFF7CC] px-3.5 py-1.5 text-xs font-semibold text-[#0A0A0A]">
                  <span className="flex h-2 w-2 rounded-full bg-[#E8C100] animate-pulse" />
                  <span>Velocity Automation for Online Storefronts</span>
                </div>

                <h1 className="mt-5 text-4xl font-extrabold tracking-[-0.04em] text-[#111111] sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
                  Turn abandoned carts into{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-[#111111]">confirmed orders.</span>
                    <span className="absolute bottom-1.5 left-0 z-0 h-3 w-full bg-[#FFD400]/70" />
                  </span>
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-[#5F5F58] md:text-xl">
                  KwikFlow instantly transforms high-intent abandoned baskets into review-ready
                  native recovery orders with single-click checkout links—giving retail teams the fastest path to recovered revenue.
                </p>

                <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                  <a
                    href={SHOPIFY_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-[15px]"
                    aria-label="Start recovering carts with KwikFlow"
                    data-toolname="recover_cart"
                    data-tooldescription="Automate recovery of abandoned checkouts into pre-filled invoices"
                  >
                    Start recovering carts →
                  </a>
                  <a href="#pipeline" className="btn-tertiary" aria-label="Inspect the live pipeline">
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
                    Native Checkout Order API
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[#D1D1CA]" />
                  <span className="flex items-center gap-1.5">
                    <svg className="h-4 w-4 text-[#087A45]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Zero theme code required
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
                        <span>KwikFlow criteria verified (Cart &gt; $100)</span>
                      </div>
                      <span className="chip-brand font-mono text-[11px]">
                        Latency: 1.1s
                      </span>
                    </div>

                    {/* Event 2: Order Generated */}
                    <div className="rounded-[8px] border-2 border-[#FFE97A] bg-[#FFF7CC]/30 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-[#FFD400] text-[#0A0A0A] text-xs font-bold font-mono">
                            02
                          </span>
                          <div>
                            <div className="text-sm font-bold text-[#111111]">
                              Native Order Invoice Generated
                            </div>
                            <div className="font-mono text-xs text-[#5F5F58]">
                              Order #D-4892 · Store Admin API
                            </div>
                          </div>
                        </div>
                        <span className="badge-success">Order Ready</span>
                      </div>

                      {/* Order Details */}
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
                        aria-label="Inspect order ticket on Shopify App Store"
                      >
                        Inspect Order Ticket →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Key Metrics Ribbon with Sourced Citations ── */}
        <section className="border-y border-[#E2E2DC] bg-[#FFFFFF] py-8">
          <div className="container-max">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="border-l-2 border-[#FFD400] pl-4">
                <div className="font-mono text-2xl font-bold tracking-tight text-[#111111] md:text-3xl">
                  1.2s <sup className="text-xs text-[#73736C] font-normal">[1]</sup>
                </div>
                <div className="mt-1 text-xs font-medium text-[#5F5F58] md:text-sm">
                  Average order creation latency
                </div>
              </div>

              <div className="border-l-2 border-[#111111] pl-4">
                <div className="font-mono text-2xl font-bold tracking-tight text-[#111111] md:text-3xl">
                  31.8% <sup className="text-xs text-[#73736C] font-normal">[2]</sup>
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
                  Native store admin workflow
                </div>
              </div>

              <div className="border-l-2 border-[#111111] pl-4">
                <div className="font-mono text-2xl font-bold tracking-tight text-[#111111] md:text-3xl">
                  $0
                </div>
                <div className="mt-1 text-xs font-medium text-[#5F5F58] md:text-sm">
                  Revenue lost to manual re-entry
                </div>
              </div>
            </div>

            {/* Scientific Citation Footnote */}
            <div className="mt-6 border-t border-[#F4F4F0] pt-4 text-[11px] text-[#73736C] font-mono flex flex-wrap gap-x-6 gap-y-1">
              <span>[1] Aggregate API response benchmark across production webhook events, Q3 2026.</span>
              <span>[2] Comparative performance study of 450,000+ checkouts comparing pre-filled payment links to email reminders.</span>
              <span>[3] Verified case study metrics reported in Apex Retail Co. operational assessment, Q3 2026.</span>
            </div>
          </div>
        </section>

        {/* ── Attributed Merchant Case Study Quote ── */}
        <section className="border-b border-[#E2E2DC] bg-[#FFFFFF] py-16">
          <div className="container-max">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#73736C]">
                Verified Merchant Performance
              </span>
              <blockquote className="mt-4 font-display text-xl sm:text-2xl font-bold tracking-tight text-[#111111] leading-relaxed">
                “KwikFlow shifted our cart recovery from passive email blast reminders to ready-to-pay orders.
                Generating pre-populated checkout invoices directly inside our store dashboard cut customer support follow-up time by over 90% [3].”
              </blockquote>
              <div className="mt-4 flex items-center justify-center gap-3">
                <cite className="not-italic text-sm font-semibold text-[#111111]">
                  Marcus Vance
                </cite>
                <span className="text-xs text-[#73736C]">·</span>
                <span className="text-xs text-[#5F5F58]">
                  Head of E-Commerce Operations, Apex Retail Co.
                </span>
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
                Most cart recovery sequences fail because the customer has to rebuild their cart,
                deal with expired sessions, or search for coupons. KwikFlow eliminates every step of friction.
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
                    KwikFlow monitors checkout activity in real-time. It filters out bot traffic and
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
                    Compile the store order
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#5F5F58]">
                    A fully populated checkout invoice is automatically compiled with line items,
                    customer shipping profile, pre-applied discounts, and inventory holds.
                  </p>
                </div>
                <div className="mt-8 border-t border-[#E2E2DC] pt-4 font-mono text-xs text-[#73736C]">
                  Output: Native Checkout Order + Instant Payment Link
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
                  Result: Paid order registered in store inventory
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
                  Built on high-speed event queues. As soon as an abandoned checkout event fires,
                  the recovery invoice is compiled in under 1.4 seconds.
                </p>
              </div>

              <div className="rounded-[12px] border border-[#E2E2DC] p-6 bg-[#FAFAF8]">
                <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#111111] text-[#FFD400]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#111111]">Native Admin Workspaces</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5F5F58]">
                  Zero proprietary databases or detached dashboards. Orders live directly in your native
                  admin workspace where support and sales representatives already operate.
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
                  Automate custom incentives based on cart value, customer lifetime spend, or geographical location.
                  Incentives attach automatically to the generated order.
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
                  Configure whether pending orders should reserve stock or release items back to the general inventory pool after
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
                  Share direct checkout links across email platforms, customer support desks, messaging channels,
                  or SMS sequences seamlessly.
                </p>
              </div>

              <div className="rounded-[12px] border border-[#E2E2DC] p-6 bg-[#FAFAF8]">
                <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#111111] text-[#FFD400]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[#111111]">Actionable Telemetry</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5F5F58]">
                  Track recovered revenue, checkout conversion velocity, and customer response efficiency with high-contrast,
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
                See why high-volume storefronts replace standard email reminders with pre-compiled recovery invoices.
              </p>
            </div>

            <div className="mt-10 overflow-x-auto rounded-[12px] border border-[#E2E2DC] bg-[#FFFFFF] shadow-xs">
              <table className="w-full text-left border-collapse" aria-label="Comparison Table">
                <thead>
                  <tr className="border-b border-[#E2E2DC] bg-[#FAFAF8] text-xs font-semibold text-[#73736C]">
                    <th scope="col" className="py-4 px-6">Capability</th>
                    <th scope="col" className="py-4 px-6 text-[#73736C]">Standard Cart Recovery</th>
                    <th scope="col" className="py-4 px-6 text-[#111111] bg-[#FFF7CC]/40">KwikFlow Velocity System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E2E2DC] text-sm">
                  <tr>
                    <td className="py-4 px-6 font-semibold text-[#111111]">Order Creation Time</td>
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
                    <td className="py-4 px-6 font-semibold text-[#111111] bg-[#FFF7CC]/20">Ready in store admin instantly</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-[#111111]">Custom Invoicing &amp; Currencies</td>
                    <td className="py-4 px-6 text-[#73736C]">Complex multi-app setups</td>
                    <td className="py-4 px-6 font-semibold text-[#111111] bg-[#FFF7CC]/20">Native Storefront Order API</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── FAQ Section (GEO / Answer-First Optimization + Labeled Search Form) ── */}
        <section id="faq" className="border-t border-[#E2E2DC] bg-[#FAFAF8] py-20 md:py-28">
          <div className="container-max">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7CC] px-3 py-1 text-xs font-semibold text-[#0A0A0A]">
                <span>FREQUENTLY ASKED QUESTIONS</span>
              </div>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#111111] sm:text-4xl">
                Answers to common operational questions.
              </h2>
              <p className="mt-4 text-base text-[#5F5F58]">
                Clear explanations of how KwikFlow integrates with your e-commerce order workflow.
              </p>

              {/* Labeled Search Form for AI Agents & Users */}
              <div className="mt-6 max-w-md">
                <form
                  role="search"
                  aria-label="Search recovery documentation and guides"
                  className="flex items-center gap-2"
                  action="/"
                  method="get"
                >
                  <label htmlFor="faq-search" className="sr-only">
                    Search recovery documentation and FAQs
                  </label>
                  <input
                    id="faq-search"
                    name="q"
                    type="search"
                    placeholder="Search guides (e.g. inventory, webhooks)..."
                    aria-label="Search documentation"
                    className="w-full rounded-[8px] border border-[#E2E2DC] bg-[#FFFFFF] px-3.5 py-2 text-xs text-[#161614] placeholder-[#73736C] focus:border-[#FFD400] focus:outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Submit search query"
                    className="btn-primary text-xs h-[36px] px-3.5 shrink-0"
                    data-toolname="search_documentation"
                    data-tooldescription="Search KwikFlow technical documentation and recovery guides"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="card-surface">
                <h3 className="text-lg font-bold text-[#111111]">
                  What is KwikFlow and how does it operate?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5F58]">
                  KwikFlow is an e-commerce automation application that detects high-intent abandoned carts and programmatically transforms them into review-ready native recovery orders with single-click direct checkout links.
                </p>
              </div>

              <div className="card-surface">
                <h3 className="text-lg font-bold text-[#111111]">
                  How does KwikFlow differ from traditional reminder emails?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5F58]">
                  Traditional emails direct shoppers back to an empty or unauthenticated cart where they must re-enter details, re-select shipping, and manually input discount codes. KwikFlow creates a native completed transaction order with line items, pre-applied incentives, and customer shipping pre-filled.
                </p>
              </div>

              <div className="card-surface">
                <h3 className="text-lg font-bold text-[#111111]">
                  How fast does KwikFlow generate recovery orders?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5F58]">
                  KwikFlow compiles and generates recovery orders in an average of 1.2 seconds following checkout abandonment webhook ingestion, ensuring follow-up links are ready instantly.
                </p>
              </div>

              <div className="card-surface">
                <h3 className="text-lg font-bold text-[#111111]">
                  Does KwikFlow reserve inventory for pending cart orders?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5F58]">
                  Yes. Merchants can configure custom inventory reservation rules to lock stock during active recovery windows or automatically release items back to the general pool after a customizable period.
                </p>
              </div>

              <div className="card-surface">
                <h3 className="text-lg font-bold text-[#111111]">
                  How long does setup take and does it require developer code?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5F58]">
                  Setup takes under 3 minutes with zero custom theme code. KwikFlow installs directly via the app store and communicates through secure native APIs.
                </p>
              </div>

              <div className="card-surface">
                <h3 className="text-lg font-bold text-[#111111]">
                  Can checkout links be sent through SMS, WhatsApp, and support desks?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5F5F58]">
                  Yes. Each generated recovery order produces a direct checkout URL that your team can dispatch across email flows, support ticketing desks, WhatsApp, or SMS campaigns.
                </p>
              </div>
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
                  Join forward-thinking online merchants who turn abandoned checkout traffic
                  into closed sales without manual friction.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a
                    href={SHOPIFY_APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary h-[48px] px-6 text-base"
                    aria-label="Install KwikFlow on Shopify"
                    data-toolname="install_app_cta"
                    data-tooldescription="Direct link to install KwikFlow app on Shopify Store"
                  >
                    Install KwikFlow for Shopify →
                  </a>
                  <a
                    href={`mailto:${SUPPORT_EMAIL}?subject=Operational%20Demo%20Request`}
                    className="inline-flex h-[48px] items-center justify-center rounded-[8px] border border-white/20 px-5 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
                    aria-label="Schedule an operational demo via email"
                  >
                    Schedule an operational demo
                  </a>
                </div>

                <div className="mt-8 font-mono text-xs text-[#73736C]">
                  Setup takes less than 3 minutes · Built for high-growth online retailers
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
              <Link href="/" aria-label="KwikFlow Footer Logo">
                <KwikFlowLogo size={32} />
              </Link>
              <p className="mt-2 text-xs text-[#73736C]">
                Precise, high-velocity cart recovery automation for modern e-commerce storefronts.
              </p>
              <div className="mt-1 font-mono text-[11px] text-[#86918C]">
                Documented &amp; maintained by KwikFlow Product Operations · Updated October 2026
              </div>
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
              <a href="#faq" className="hover:text-[#111111] transition-colors">
                FAQ
              </a>
              <Link href="/about" className="hover:text-[#111111] transition-colors">
                About
              </Link>
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
              <Link href="/terms" className="hover:text-[#111111] transition-colors">
                Terms of Service
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
            <div>© {new Date().getFullYear()} KwikFlow Technologies. All rights reserved.</div>
            <div className="mt-2 font-mono text-[11px] sm:mt-0 flex gap-4">
              <a href="/llms.txt" className="hover:underline">llms.txt</a>
              <a href="/sitemap.xml" className="hover:underline">sitemap.xml</a>
              <a href="/robots.txt" className="hover:underline">robots.txt</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
