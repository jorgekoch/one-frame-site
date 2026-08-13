import styled from "styled-components";
import type { Project } from "../data/projects";

const A = "/assets/";
const RED = "#ef1b14";
const BLACK = "#080808";
const PAPER = "#f7f5ef";

export function ProjectsSection({ projects }: { projects: Project[] }) {
  return (
    <Projects id="projetos">
      <ProjectsHead>
        <Label>06 / NOSSOS TRABALHOS</Label>
        <h2>
          NOSSOS
          <br />
          <em>TRABALHOS:</em>
        </h2>
        <Icon src={`${A}icon-sparks.png`} $top="10px" $right="7%" />
      </ProjectsHead>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} $featured={project.featured}>
            <ProjectImage>
              <img
                src={project.image}
                alt={`Textura gráfica do ${project.title}`}
              />
              <span>{project.id}</span>
              <b>↗</b>
            </ProjectImage>
            <ProjectMeta>
              <strong>{project.title}</strong>
              <span>{project.category}</span>
              <small>{project.year}</small>
            </ProjectMeta>
          </ProjectCard>
        ))}
      </ProjectGrid>
      <ProjectsCTA href="#contato">
        VER TODOS OS PROJETOS <span>↗</span>
      </ProjectsCTA>
    </Projects>
  );
}

const Label = styled.span`
  font-size: 9px;
  font-weight: 900;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  opacity: 0.65;
`;
const Icon = styled.img<{ $top?: string; $right?: string }>`
  position: absolute;
  z-index: 4;
  width: 58px;
  height: auto;
  top: ${(props) => props.$top || "auto"};
  right: ${(props) => props.$right || "auto"};
  object-fit: contain;
`;
const Projects = styled.section`
  background: ${PAPER};
  padding: 120px 5vw 150px;
`;
const ProjectsHead = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 75px;
  h2 {
    font:
      clamp(70px, 9vw, 125px)/0.75 Impact,
      "Arial Black";
    letter-spacing: -0.07em;
    margin: 20px 0;
    text-transform: uppercase;
  }
  em {
    font-family: Georgia, serif;
    font-weight: 400;
    text-transform: none;
    color: ${RED};
  }
`;
const ProjectGrid = styled.div`
  max-width: 1250px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 55px 20px;
  @media (max-width: 800px) {
    display: block;
  }
`;
const ProjectCard = styled.article<{ $featured: boolean }>`
  grid-column: span ${(props) => (props.$featured ? 7 : 5)};
  @media (max-width: 800px) {
    margin-bottom: 45px;
  }
`;
const ProjectImage = styled.div`
  position: relative;
  aspect-ratio: 1.45;
  overflow: hidden;
  border: 2px solid ${BLACK};
  background: ${BLACK};
  box-shadow: 6px 7px 0 ${RED};
  transition: 0.25s;
  &:hover {
    transform: translate(-2px, -2px);
    box-shadow: 9px 10px 0 ${BLACK};
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(1) contrast(1.2);
  }
  :after {
    content: "";
    position: absolute;
    inset: 0;
    background: ${RED};
    mix-blend-mode: multiply;
    opacity: 0.25;
  }
  span,
  b {
    position: absolute;
    z-index: 2;
    color: #fff;
    font-weight: 900;
  }
  span {
    left: 12px;
    top: 10px;
    font-size: 10px;
  }
  b {
    right: 14px;
    bottom: 10px;
    font-size: 22px;
  }
`;
const ProjectMeta = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 12px 0;
  border-bottom: 1px solid ${BLACK};
  text-transform: uppercase;
  font-size: 10px;
  strong {
    font-size: 12px;
  }
  span {
    grid-column: 1;
    color: #555;
    margin-top: 4px;
  }
  small {
    grid-row: 1/3;
    grid-column: 2;
    color: #555;
  }
`;
const ProjectsCTA = styled.a`
  display: block;
  width: max-content;
  margin: 70px auto 0;
  border-bottom: 2px solid ${BLACK};
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.12em;
  padding-bottom: 7px;
  &:hover {
    color: ${RED};
    border-color: ${RED};
  }
  span {
    margin-left: 10px;
  }
`;
