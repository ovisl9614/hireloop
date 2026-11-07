import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  MapPin,
  Search,
  SearchCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react"

import ctaBg from "@/app/images/cta-bg.png"
import heroParticles from "@/app/images/hero-particles.png"
import { cn } from "cn"

const TRENDING_POSITIONS = [
  { label: "Product Designer", href: "/jobs?category=product-designer" },
  { label: "AI Engineering", href: "/jobs?category=ai-engineering" },
  { label: "Dev-ops Engineer", href: "/jobs?category=devops-engineer" },
]

const HIGHLIGHTS = [
  { icon: SearchCheck, value: "50K", label: "Active Jobs" },
  { icon: TrendingUp, value: "12K", label: "Companies" },
  { icon: Users, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

function HeroSearch() {
  return (
    <form
      action="/jobs"
      method="GET"
      data-slot="hero-search"
      className="mt-12 mx-auto flex w-full max-w-[784px] flex-col rounded-2xl border border-white bg-[#101010] md:h-16 md:flex-row md:items-center"
    >
      <label className="flex flex-1 cursor-text items-center gap-3 px-5 py-4 md:py-0 md:pl-6">
        <Search aria-hidden className="size-6 shrink-0 text-white" />
        <input
          type="text"
          name="q"
          aria-label="Job title, skill or company"
          placeholder="Job title, skill or company"
          className="h-full w-full min-w-0 bg-transparent text-base text-white outline-none placeholder:text-white"
        />
      </label>

      <span
        aria-hidden
        className="h-px bg-white md:h-6 md:w-px md:shrink-0"
      />

      <label className="flex flex-1 cursor-text items-center gap-3 px-5 py-4 md:pl-4">
        <MapPin aria-hidden className="size-6 shrink-0 text-white" />
        <input
          type="text"
          name="location"
          aria-label="Location or Remote"
          placeholder="Location or Remote"
          className="h-full w-full min-w-0 bg-transparent text-base text-white outline-none placeholder:text-white"
        />
      </label>

      <div className="flex justify-end p-2 md:ml-auto md:shrink-0">
        <button
          type="submit"
          aria-label="Search jobs"
          className={cn(
            "inline-flex size-12 items-center justify-center rounded-xl bg-brand text-white",
            "transition-colors outline-none hover:bg-brand/90 focus-visible:ring-3 focus-visible:ring-ring/50"
          )}
        >
          <Search aria-hidden className="size-6" />
        </button>
      </div>
    </form>
  )
}

function HeroStats() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-[1320px] px-1">
      <h2 className="mx-auto max-w-[600px] text-center font-heading text-[32px] font-medium leading-[1.3] text-white md:text-[40px]">
        Assisting over 15,000 job seekers find their dream positions.
      </h2>

      <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map(({ icon: Icon, value, label }) => (
          <li
            key={label}
            data-slot="hero-stat"
            className="flex h-auto min-h-[254px] flex-col justify-between rounded-2xl border border-white bg-gradient-to-t from-[#010103] to-[#313131] p-6 md:h-[254px]"
          >
            <Icon aria-hidden className="size-6 text-white" />
            <div>
              <p className="font-jakarta text-[56px] font-semibold leading-[1.15] text-white">
                {value}
              </p>
              <p className="mt-4 font-inter-tight text-lg leading-[1.65] text-white">
                {label}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Hero({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      data-slot="hero"
      className={cn("relative isolate w-full overflow-hidden pb-[72px]", className)}
      {...props}
    >
      {/* Decorative background art (from Figma: Group 1) */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Magenta glow arch along the top edge */}
        <div className="absolute -inset-x-40 top-[-26rem] h-96 rounded-b-[100%] bg-[#dc02ce]/50 blur-[190px]" />

        {/* Scattered particle dots */}
        <Image
          src={heroParticles}
          alt=""
          priority
          className="absolute top-[430px] left-1/2 w-[125%] max-w-[1180px] -translate-x-1/2 md:top-[440px] md:w-[1180px]"
        />

        {/* Blurred white dome art */}
        <Image
          src={ctaBg}
          alt=""
          className="absolute top-[560px] left-1/2 w-[145%] max-w-[1744px] -translate-x-1/2 opacity-50 blur-[36px] md:top-[520px] md:w-[1744px]"
        />

        {/* Purple glow ring behind the stats */}
        <div className="absolute top-[700px] left-1/2 size-[960px] -translate-x-1/2 rounded-full bg-[#5c53fe] opacity-70 blur-[150px] md:top-[800px] md:h-[1037px] md:w-[1236px]" />
        <div className="absolute top-[740px] left-1/2 size-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,#010103_58%,transparent)] md:top-[830px] md:h-[1037px] md:w-[1208px]" />

        {/* Fade into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-b from-transparent to-[#010103]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 pt-40">
        {/* Eyebrow pill with dashes */}
        <div className="flex items-center justify-center gap-4">
          <span aria-hidden className="hidden h-px w-16 bg-white/20 sm:block" />
          <p className="inline-flex h-12 items-center gap-3 rounded-full bg-[linear-gradient(180deg,#474747_0%,#0b0b0d_100%)] px-6 text-center font-mono text-base text-white shadow-inner sm:text-lg">
            <Sparkles aria-hidden className="size-5 text-white" />
            50,000+ new jobs this month
          </p>
          <span aria-hidden className="hidden h-px w-16 bg-white/20 sm:block" />
        </div>

        <h1 className="mt-9 text-center font-heading text-[40px] font-bold leading-[1.15] text-white sm:text-[56px]">
          Find Your Dream Job Today
        </h1>

        <p className="mx-auto mt-4 max-w-[784px] text-center text-lg leading-[1.6] text-white sm:text-xl">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        <HeroSearch />

        {/* Trending positions chips */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
          <span className="text-base text-white">Trending Position</span>
          {TRENDING_POSITIONS.map((chip) => (
            <Link
              key={chip.label}
              href={chip.href}
              className="inline-flex h-8 items-center rounded-full border border-white bg-[#1a1a1b] px-3 text-center text-sm text-white transition-colors outline-none hover:bg-white/10 focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {chip.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Stats strip (over the art) */}
      <div className="relative z-10 mt-24 lg:mt-[358px]">
        <HeroStats />
      </div>
    </section>
  )
}
