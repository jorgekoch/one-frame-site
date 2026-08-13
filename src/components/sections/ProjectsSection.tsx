import styled from "styled-components";
import type { Project } from "../../data/projects";

const A = "/assets/";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <Projects id="projetos">
      <ProjectsHead>
        <Label>06 / NOSSOS TRABALHOS</Label>
        <h2>NOSSOS<br /><em>TRABALHOS:</em></h2>
        <Icon src={`${A}icon-sparks.png`} $top="10px" $right="7%" alt="" aria-hidden="true" decoding="async" />
      </ProjectsHead>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} $featured={project.featured}>
            <ProjectImage>
              <img src={project.image} alt={`Textura gráfica do ${project.title}`} loading="lazy" decoding="async" />
              <span>{project.id}</span><b aria-hidden="true">↗</b>
            </ProjectImage>
            <ProjectMeta><strong>{project.title}</strong><span>{project.category}</span><small>{project.year}</small></ProjectMeta>
          </ProjectCard>
        ))}
      </ProjectGrid>
      <ProjectsCTA href="#contato">VER TODOS OS PROJETOS <span aria-hidden="true">↗</span></ProjectsCTA>
    </Projects>
  );
}

const Label = styled.span`font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;opacity:.65;`;
const Icon = styled.img<{ $top?: string; $right?: string }>`position:absolute;z-index:4;width:58px;height:auto;top:${p=>p.$top||"auto"};right:${p=>p.$right||"auto"};object-fit:contain;`;
const Projects = styled.section`background:var(--color-paper);padding:120px 5vw 150px;`;
const ProjectsHead = styled.div`position:relative;text-align:center;margin-bottom:75px;h2{font:clamp(70px,9vw,125px)/.75 var(--font-display);letter-spacing:-.07em;margin:20px 0;text-transform:uppercase;}em{font-family:var(--font-accent);font-weight:400;text-transform:none;color:var(--color-red);}`;
const ProjectGrid = styled.div`max-width:1250px;margin:auto;display:grid;grid-template-columns:repeat(12,1fr);gap:55px 20px;@media(max-width:800px){display:block}`;
const ProjectCard = styled.article<{ $featured:boolean }>`grid-column:span ${p=>p.$featured?7:5};@media(max-width:800px){margin-bottom:45px}`;
const ProjectImage = styled.div`position:relative;aspect-ratio:1.45;overflow:hidden;border:2px solid var(--color-black);background:var(--color-black);box-shadow:6px 7px 0 var(--color-red);transition:transform .25s ease,box-shadow .25s ease;&:hover{transform:translate(-2px,-2px);box-shadow:9px 10px 0 var(--color-black)}img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.2)}&:after{content:"";position:absolute;inset:0;background:var(--color-red);mix-blend-mode:multiply;opacity:.25;pointer-events:none}span,b{position:absolute;z-index:2;color:var(--color-white);font-weight:900}span{left:12px;top:10px;font-size:10px}b{right:14px;bottom:10px;font-size:22px}`;
const ProjectMeta = styled.div`display:grid;grid-template-columns:1fr auto;padding:12px 0;border-bottom:1px solid var(--color-black);text-transform:uppercase;font-size:10px;strong{font-size:12px}span{grid-column:1;color:var(--color-muted);margin-top:4px}small{grid-row:1/3;grid-column:2;color:var(--color-muted)}`;
const ProjectsCTA = styled.a`display:block;width:max-content;margin:70px auto 0;border-bottom:2px solid var(--color-black);font-size:11px;font-weight:900;letter-spacing:.12em;padding-bottom:7px;&:hover{color:var(--color-red);border-color:var(--color-red)}span{margin-left:10px}`;
