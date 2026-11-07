"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, XIcon } from "lucide-react"

import logo from "@/app/images/logo.png"
import { cn } from "cn"

import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const NAV_LINKS = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

const AUTH_HREFS = {
  signIn: "/sign-in",
  getStarted: "/sign-up",
}

function Logo({ priority = true, className }: { priority?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="HireLoop home"
      className={cn(
        "inline-flex shrink-0 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className
      )}
    >
      <Image
        src={logo}
        alt="HireLoop"
        priority={priority}
        sizes="154px"
        className="h-11 w-auto"
      />
    </Link>
  )
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      data-active={active}
      className={cn(
        "rounded-md text-base text-white/90 outline-none transition-colors hover:text-white focus-visible:ring-3 focus-visible:ring-ring/50",
        active && "font-bold text-white"
      )}
    >
      {label}
    </Link>
  )
}

function DesktopNav() {
  const pathname = usePathname()

  return (
    <div data-slot="navbar-desktop" className="hidden items-center gap-6 lg:flex">
      <ul className="flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href} label={link.label} active={pathname === link.href} />
          </li>
        ))}
      </ul>

      <Separator orientation="vertical" className="h-6 bg-[#a8a8a8]" />

      <div className="flex items-center gap-2">
        <Link
          href={AUTH_HREFS.signIn}
          className={cn(
            buttonVariants({ variant: "ghost", size: "lg" }),
            "h-12 rounded-xl px-6 text-lg font-semibold text-brand hover:bg-white/10 hover:text-brand dark:hover:bg-white/10"
          )}
        >
          Sign In
        </Link>
        <Link
          href={AUTH_HREFS.getStarted}
          className={cn(
            buttonVariants({ size: "lg" }),
            "h-12 rounded-xl bg-brand px-7 text-lg font-medium text-white hover:bg-brand/90"
          )}
        >
          Get Started
        </Link>
      </div>
    </div>
  )
}

function MobileNav() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button
            type="button"
            aria-label="Open navigation menu"
            className="inline-flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-lg text-white transition-colors outline-none hover:bg-white/10 focus-visible:ring-3 focus-visible:ring-ring/50 lg:hidden"
          />
        }
      >
        <MenuIcon />
      </SheetTrigger>

      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-76 gap-6 border-white/10 bg-[#1c1c1f] text-white sm:max-w-76"
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>

        <SheetHeader className="flex-row items-center justify-between pr-3 pt-2 pl-6">
          <Logo priority={false} className="-ml-1.5" />
          <SheetTrigger
            render={
              <button
                type="button"
                aria-label="Close menu"
                className="inline-flex size-8 cursor-pointer items-center justify-center rounded-lg text-white/70 transition-colors outline-none hover:bg-white/10 hover:text-white focus-visible:ring-3 focus-visible:ring-ring/50"
              />
            }
          >
            <XIcon className="size-4" />
          </SheetTrigger>
        </SheetHeader>

        <nav aria-label="Mobile navigation" className="flex flex-col gap-1 px-4">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <SheetClose
                key={link.href}
                nativeButton={false}
                render={
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex w-full items-center rounded-lg px-2 py-2.5 text-lg text-white/90 transition-colors hover:bg-white/10 hover:text-white",
                      active && "bg-white/10 font-bold text-white"
                    )}
                  />
                }
              >
                {link.label}
              </SheetClose>
            )
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-2 p-4">
          <SheetClose
            nativeButton={false}
            render={
              <Link
                href={AUTH_HREFS.signIn}
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "h-12 w-full rounded-xl text-lg font-semibold text-brand hover:bg-white/10 hover:text-brand"
                )}
              />
            }
          >
            Sign In
          </SheetClose>
          <SheetClose
            nativeButton={false}
            render={
              <Link
                href={AUTH_HREFS.getStarted}
                className={cn(
                  buttonVariants(),
                  "h-12 w-full rounded-xl bg-brand text-lg font-medium text-white hover:bg-brand/90"
                )}
              />
            }
          >
            Get Started
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function Navbar({ className, ...props }: React.ComponentProps<"header">) {
  return (
    <header data-slot="navbar" className={cn("w-full px-4 pt-5 sm:px-8 lg:px-15", className)} {...props}>
      <div className="mx-auto flex w-full max-w-330 items-center justify-between rounded-2xl bg-[#222222] py-2.5 pr-3 pl-4 sm:pl-6 lg:h-18.5 lg:py-0">
        <Logo />
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  )
}
