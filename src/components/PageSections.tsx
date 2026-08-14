import type { Project } from "../data/projects";
import type { Service } from "../data/services";
import type { Client } from "../data/clients";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { SessionsSection } from "./sections/SessionsSection";
import { ClientsSection } from "./sections/ClientsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { ContactSection } from "./sections/ContactSection";
import { Torn } from "./ui/SectionChrome";

type PageSectionsProps = {
  projects: Project[];
  services: readonly Service[];
  clients: Client[];
};

export function PageSections({
  projects,
  services,
  clients,
}: PageSectionsProps) {
  return (
    <>
      <AboutSection />
      <Torn tone="paper" />
      <ServicesSection services={services} />
      <Torn tone="black" />
      <SessionsSection />
      <Torn tone="paper" />
      <ClientsSection clients={clients} />
      <Torn tone="black" />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Torn tone="black" />
    </>
  );
}
