import Contact from "@/components/Contact";
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
      <section className="h-screen flex items-center justify-center bg-background">
        SKILLS
      </section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-background-200">
        <Contact />
      </section>
    </main>
  );
}
