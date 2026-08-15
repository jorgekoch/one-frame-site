import { GlobalStyle } from "./styles/global";
import { clients } from "./data/clients";
import { projects } from "./data/projects";
import { services } from "./data/services";
import { HeroSection } from "./components/sections/HeroSection";
import { PageSections } from "./components/PageSections";
import {
  Band as SectionBand,
  Torn as TornDivider,
} from "./components/ui/SectionChrome";
import { SiteHeader } from "./components/layout/SiteHeader";
import { SiteFooter } from "./components/layout/SiteFooter";
import { PageShell } from "./components/layout/PageShell";

export function App() {
  return (
    <>
      <GlobalStyle />
      <PageShell>
        <SiteHeader />
        <main>
          <HeroSection />
          <SectionBand />
          <TornDivider />
          <PageSections
            projects={projects}
            services={services}
            clients={clients}
          />
        </main>
        <SiteFooter />
      </PageShell>
    </>
  );
}
