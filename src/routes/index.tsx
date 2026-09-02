import { createFileRoute } from "@tanstack/react-router";

import { Architecture } from "@/components/vesk/Architecture";
import { CodeShowcase } from "@/components/vesk/CodeShowcase";
import { DevExperience } from "@/components/vesk/DevExperience";
import { Docs } from "@/components/vesk/Docs";
import { Features } from "@/components/vesk/Features";
import { FinalCta } from "@/components/vesk/FinalCta";
import { Footer } from "@/components/vesk/Footer";
import { Hero } from "@/components/vesk/Hero";
import { Native } from "@/components/vesk/Native";
import { Nav } from "@/components/vesk/Nav";
import { Philosophy } from "@/components/vesk/Philosophy";
import { Roadmap } from "@/components/vesk/Roadmap";
import { Showcase } from "@/components/vesk/Showcase";
import { Targets } from "@/components/vesk/Targets";

const title = "Vesk — The compiler-first framework for web and native apps";
const description =
  "Vesk is a compiler-first application framework. Write one component model and compile it into optimized web and native Kotlin applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <CodeShowcase />
        <Philosophy />
        <Native />
        <Architecture />
        <Targets />
        <Features />
        <DevExperience />
        <Docs />
        <Showcase />
        <Roadmap />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
