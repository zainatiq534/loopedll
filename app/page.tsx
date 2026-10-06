import AboutServices from "@/components/AboutServices";
import ContactFooter from "@/components/ContactFooter";
import Hero from "@/components/Hero";
import SelectedProjects from "@/components/SelectedProjects";
import SkillsServices from "@/components/SkillsServices";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <AboutServices />
      <SkillsServices />
      <SelectedProjects />
      <Testimonials />
      <ContactFooter />
    </main>
  );
}
