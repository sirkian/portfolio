import Contact from "@/components/Contact";
import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <section className="h-[calc(100vh-5rem)] bg-background animate-in">
        <Hero />
      </section>
      <section className="h-screen flex items-center justify-center bg-background-200">
        ABOUT
      </section>
      <section className="min-h-max flex justify-center bg-background">
        <FeaturedProjects />
      </section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-background-200">
        <Contact />
      </section>
    </main>
  );
}
