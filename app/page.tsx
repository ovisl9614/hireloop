import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/home/hero"

export default function Page() {
  return (
    <div className="min-h-svh bg-[#010103]">
      <Navbar />
      <Hero />
    </div>
  )
}
