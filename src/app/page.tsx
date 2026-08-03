import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FloatingResumeButton } from "@/components/FloatingResumeButton";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <FloatingResumeButton />
    </main>
  );
}
