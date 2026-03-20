import { Section } from "./data";
import PageNews from "./PageNews";
import PageConnection from "./PageConnection";
import PageDocuments from "./PageDocuments";
import PageAbout from "./PageAbout";
import PageContacts from "./PageContacts";

interface SectionPagesProps {
  activeSection: Section;
  navigate: (section: Section) => void;
}

export default function SectionPages({ activeSection }: SectionPagesProps) {
  return (
    <>
      {activeSection === "news" && <PageNews />}
      {activeSection === "connection" && <PageConnection />}
      {activeSection === "documents" && <PageDocuments />}
      {activeSection === "about" && <PageAbout />}
      {activeSection === "contacts" && <PageContacts />}
    </>
  );
}
