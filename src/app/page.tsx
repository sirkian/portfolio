import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <section className="h-[calc(100vh-5rem)] bg-background">
        <Hero />
      </section>
      <section className="h-screen flex items-center justify-center bg-background-800 text-text">
        ABOUT
      </section>
      <section className="h-screen flex items-center justify-center bg-background-900 text-text">
        SKILLS
      </section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-background-950 text-text">
        CONTACT
      </section>
    </main>
  );
}
