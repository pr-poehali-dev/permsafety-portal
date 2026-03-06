import { useState } from "react";
import { Section } from "@/components/portal/data";
import Layout from "@/components/portal/Layout";
import SectionHome from "@/components/portal/SectionHome";
import SectionPages from "@/components/portal/SectionPages";

export default function Index() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navigate = (section: Section) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    scrollToTop();
  };

  return (
    <Layout
      activeSection={activeSection}
      mobileMenuOpen={mobileMenuOpen}
      navigate={navigate}
      setMobileMenuOpen={setMobileMenuOpen}
    >
      {activeSection === "home" ? (
        <SectionHome navigate={navigate} />
      ) : (
        <SectionPages activeSection={activeSection} navigate={navigate} />
      )}
    </Layout>
  );
}
