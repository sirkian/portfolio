import About from "@/components/About";
import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <section className="h-screen animate-in">
        <Hero />
      </section>
      <section className="min-h-max flex justify-center bg-background-200">
        <FeaturedProjects />
      </section>
      <section className="min-h-screen flex justify-center">
        <About />
      </section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-background-200">
        <Contact />
      </section>
    </main>
  );
}
