import { GlobalStyle } from "./styles/global";
import { clients } from "./data/clients";
import { projects } from "./data/projects";
import { services } from "./data/services";
import { HeroSection } from "./components/HeroSection";
import { PageSections } from "./components/PageSections";
import {
  Band as SectionBand,
  SiteFooter,
  Torn as TornDivider,
} from "./components/SectionChrome";
import { SiteHeader } from "./components/SiteHeader";
import { PageShell } from "./components/PageShell";

export function App() {
  return (
    <>
      <GlobalStyle />
      <PageShell>
        <SiteHeader />
        <main>
          <HeroSection />
          <SectionBand />
          <TornDivider tone="paper" />
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
