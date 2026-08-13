import styled from "styled-components";
import type { Project } from "../data/projects";
import type { Service } from "../data/services";
import type { Client } from "../data/clients";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ContactSection } from "./sections/ContactSection";
import { ClientsSection } from "./ClientsSection";
import { ProjectsSection } from "./ProjectsSection";
import { TextButton } from "./TextButton";
import { Torn } from "./SectionChrome";

const A = "/assets/";
type PageSectionsProps = { projects: Project[]; services: readonly Service[]; clients: Client[] };

export function PageSections({ projects, services, clients }: PageSectionsProps) {
  return (
    <>
      <AboutSection />
      <Torn tone="paper" />
      <ServicesSection services={services} />
      <Torn tone="black" />
      <Sessions id="sessions">
        <SessionVisual><img src={`${A}lines-03.webp`} alt="" aria-hidden="true" loading="lazy" decoding="async" /><div className="red-overlay" /><Icon src={`${A}icon-camera.png`} $size={145} $bottom="10%" $left="9%" $invert alt="" aria-hidden="true" decoding="async" /><SessionTitle>ONE<br /><b>SESSIONS</b></SessionTitle><span className="number">04</span></SessionVisual>
        <SessionCopy><Label>04 / ONE SESSIONS</Label><h2>O momento<br /><em>não espera.</em></h2><p>Cobertura mobile de eventos, shows e experiências. Captamos a energia do momento e entregamos vídeos rápidos e impactantes para o mesmo dia.</p><TextButton href="#contato">QUERO UMA ONE SESSION <span>↗</span></TextButton></SessionCopy>
      </Sessions>
      <Torn tone="paper" />
      <ClientsSection clients={clients} />
      <ProjectsSection projects={projects} />
      <ContactSection />
      <Torn tone="black" />
    </>
  );
}

const Label=styled.span`font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;opacity:.65;`;
const Icon=styled.img<{ $size:number;$top?:string;$right?:string;$bottom?:string;$left?:string;$invert?:boolean }>`position:absolute;z-index:4;width:${p=>p.$size}px;height:auto;top:${p=>p.$top||"auto"};right:${p=>p.$right||"auto"};bottom:${p=>p.$bottom||"auto"};left:${p=>p.$left||"auto"};object-fit:contain;${p=>p.$invert?"filter:invert(1);":""}`;
const Sessions=styled.section`display:grid;grid-template-columns:1fr 1fr;background:var(--color-black);color:var(--color-white);min-height:650px;@media(max-width:800px){grid-template-columns:1fr}`;
const SessionVisual=styled.div`position:relative;min-height:650px;overflow:hidden;background:var(--color-red);>img{width:100%;height:100%;object-fit:cover;opacity:.68;filter:contrast(1.15)}.red-overlay{position:absolute;inset:0;background:var(--color-red);mix-blend-mode:multiply;opacity:.65}`;
const SessionTitle=styled.span`position:absolute;z-index:3;left:10%;top:15%;font:clamp(60px,9vw,130px)/.7 var(--font-display);letter-spacing:-.08em;color:var(--color-white);transform:rotate(-4deg);text-shadow:4px 4px 0 var(--color-black);b{color:var(--color-black)}`;
const SessionCopy=styled.div`padding:100px 9vw;display:flex;flex-direction:column;justify-content:center;background:var(--color-black);h2{font:clamp(65px,7vw,105px)/.78 var(--font-display);letter-spacing:-.07em;text-transform:uppercase;margin:22px 0 35px}em{font-family:var(--font-accent);font-weight:400;text-transform:none;color:var(--color-red)}p{font-size:17px;line-height:1.25;max-width:480px;margin:0 0 35px}`;
