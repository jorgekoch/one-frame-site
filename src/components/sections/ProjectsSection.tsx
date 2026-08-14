import styled from "styled-components";
import type { Project } from "../../data/projects";

const A = "/assets/";
const XEROX_09 = `${A}251107_LA_ONEFRAME_Tela_Fotocopia09 (2).webp`;

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <Projects id="projetos">
      <Texture className="texture-main" src={XEROX_09} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <ProjectsHead>
        <Label>06 / NOSSOS TRABALHOS</Label>
        <h2>NOSSOS<br /><em>TRABALHOS:</em></h2>
        <Icon src={`${A}icon-sparks.png`} $top="10px" $right="7%" alt="" aria-hidden="true" decoding="async" />
      </ProjectsHead>
      <ProjectGrid>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} $featured={project.featured} $index={index}>
            <ProjectImage>
              <img src={project.image} alt={`Imagem do projeto ${project.title}`} loading="lazy" decoding="async" />
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
const Texture = styled.img`position:absolute;z-index:0;pointer-events:none;filter:grayscale(1) contrast(1.2);width:620px;height:620px;left:-300px;top:20px;object-fit:cover;opacity:.055;transform:rotate(-9deg);`;
const Projects = styled.section`position:relative;overflow:hidden;background:var(--color-paper);padding:120px 5vw 145px;`;
const ProjectsHead = styled.div`position:relative;z-index:1;text-align:center;margin-bottom:75px;h2{font:clamp(70px,9vw,125px)/.75 var(--font-display);letter-spacing:-.07em;margin:20px 0;text-transform:uppercase;}em{font-family:var(--font-accent);font-weight:400;text-transform:none;color:var(--color-red);}`;
const ProjectGrid = styled.div`position:relative;z-index:1;max-width:1250px;margin:auto;display:grid;grid-template-columns:repeat(12,1fr);gap:62px 20px;@media(max-width:800px){display:block}`;
const ProjectCard = styled.article<{ $featured:boolean; $index:number }>`grid-column:span ${p=>p.$featured?7:5};transform:translateY(${p=>p.$index%3===1?"22px":"0"});@media(max-width:800px){margin-bottom:45px;transform:none}`;
const ProjectImage = styled.div`position:relative;aspect-ratio:1.45;overflow:hidden;border:2px solid var(--color-black);background:var(--color-black);box-shadow:6px 7px 0 var(--color-red);transition:transform .25s ease,box-shadow .25s ease;&:hover{transform:translate(-2px,-3px);box-shadow:9px 10px 0 var(--color-black)}img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.12);transition:filter .3s ease,transform .45s ease}&:hover img{filter:grayscale(.35) contrast(1.08);transform:scale(1.025)}&:after{content:"";position:absolute;inset:0;background:linear-gradient(135deg,rgba(237,29,31,.08),transparent 48%);pointer-events:none}span,b{position:absolute;z-index:2;color:var(--color-white);font-weight:900;text-shadow:0 1px 2px rgba(0,0,0,.35)}span{left:12px;top:10px;font-size:10px}b{right:14px;bottom:10px;font-size:22px}`;
const ProjectMeta = styled.div`display:grid;grid-template-columns:1fr auto;padding:13px 0;border-bottom:1px solid var(--color-black);text-transform:uppercase;font-size:10px;strong{font-size:12px;letter-spacing:.02em}span{grid-column:1;color:var(--color-muted);margin-top:4px}small{grid-row:1/3;grid-column:2;color:var(--color-muted);font-size:9px}`;
const ProjectsCTA = styled.a`display:block;width:max-content;margin:85px auto 0;border-bottom:2px solid var(--color-black);font-size:11px;font-weight:900;letter-spacing:.12em;padding-bottom:7px;&:hover{color:var(--color-red);border-color:var(--color-red)}span{margin-left:10px}`;
