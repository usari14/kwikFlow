import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: number;
  variant?: "horizontal" | "mark" | "icon" | "stacked";
  inverse?: boolean;
}

/**
 * Official KwikFlow Lightning-K Logo & Lockup
 * Follows design.md:
 * - Approved KwikFlow lightning-K: angular K fused with lightning bolt and speed streaks
 * - Kwik Yellow (#FFD400)
 * - Velocity Black (#111111) wordmark (or white on dark)
 * - Clear space maintained
 */
export function KwikFlowMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center shrink-0 ${className}`}
    >
      <Image
        src="/logo-transparent.png"
        alt="KwikFlow Mark"
        width={size * 2}
        height={size * 2}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}

export function KwikFlowAppIcon({ size = 38, className = "" }: { size?: number; className?: string }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`bg-[#111111] rounded-[8px] flex items-center justify-center p-1.5 shadow-xs shrink-0 ${className}`}
    >
      <Image
        src="/logo-transparent.png"
        alt="KwikFlow App Icon"
        width={Math.round(size * 1.5)}
        height={Math.round(size * 1.5)}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}

export function KwikFlowLogo({
  variant = "horizontal",
  size = 36,
  className = "",
  inverse = false,
}: LogoProps) {
  if (variant === "mark") {
    return <KwikFlowMark size={size} className={className} />;
  }

  if (variant === "icon") {
    return <KwikFlowAppIcon size={size} className={className} />;
  }

  const textColor = inverse ? "text-white" : "text-[#111111]";

  if (variant === "stacked") {
    return (
      <div className={`inline-flex flex-col items-center gap-2 select-none ${className}`}>
        <KwikFlowAppIcon size={size * 1.25} />
        <span
          className={`font-manrope font-extrabold tracking-tight ${textColor}`}
          style={{ fontSize: Math.round(size * 0.65), letterSpacing: "-0.03em" }}
        >
          Kwik<span className="text-[#FFD400]">Flow</span>
        </span>
      </div>
    );
  }

  // Primary horizontal lockup (default)
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      <KwikFlowAppIcon size={size} />
      <span
        className={`font-manrope font-extrabold tracking-[-0.035em] ${textColor} leading-none`}
        style={{ fontSize: Math.round(size * 0.58) }}
      >
        Kwik<span className="text-[#FFD400]">Flow</span>
      </span>
    </div>
  );
}

export default KwikFlowLogo;
