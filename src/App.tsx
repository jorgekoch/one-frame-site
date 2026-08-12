import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './styles/global'

const A = '/assets/'

// Futuramente, este array pode ser substituído pelo retorno da API/BD.
const projects = [
  { id: 1, title: 'Projeto 01', category: 'Filme / Direção', year: '2025', image: `${A}lines-01.webp`, tone: 'dark' },
  { id: 2, title: 'Projeto 02', category: 'Campanha / Conteúdo', year: '2025', image: `${A}lines-03.webp`, tone: 'light' },
  { id: 3, title: 'Projeto 03', category: 'Fotografia / Editorial', year: '2025', image: `${A}lines-05.webp`, tone: 'dark' },
  { id: 4, title: 'Projeto 04', category: 'Videoclipe / Arte', year: '2024', image: `${A}lines-02.webp`, tone: 'light' },
  { id: 5, title: 'Projeto 05', category: 'Identidade / Visual', year: '2024', image: `${A}lines-04.webp`, tone: 'dark' },
  { id: 6, title: 'Projeto 06', category: 'Produção / Pós', year: '2024', image: `${A}lines-06.webp`, tone: 'light' },
]

const services = [
  ['01', 'Direção', 'Conceito, linguagem visual e direção criativa para transformar uma ideia em imagem.'],
  ['02', 'Produção', 'Planejamento, equipe, locação, captação e todos os detalhes que fazem o frame acontecer.'],
  ['03', 'Pós-produção', 'Montagem, tratamento, motion, finalização e construção do ritmo até o último corte.'],
  ['04', 'Conteúdo', 'Filmes, campanhas, editoriais e peças pensadas para diferentes formatos e telas.'],
]

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <GlobalStyle />
      <Page>
        <Header>
          <Logo href="#top" onClick={closeMenu} aria-label="ONE FRAME — início">
            <Symbol src={`${A}logo-symbol-black.png`} alt="" />
            <LogoText><span>ONE</span><span>FRAME</span></LogoText>
          </Logo>
          <Nav aria-label="Navegação principal" $open={menuOpen}>
            <NavLink href="#projetos" onClick={closeMenu}>Projetos</NavLink>
            <NavLink href="#sobre" onClick={closeMenu}>Sobre</NavLink>
            <NavLink href="#servicos" onClick={closeMenu}>Serviços</NavLink>
            <NavLink href="#contato" onClick={closeMenu}>Contato</NavLink>
          </Nav>
          <MenuButton aria-label="Abrir menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
            <span /><span />
          </MenuButton>
        </Header>

        <main id="top">
          <Hero>
            <HeroTexture src={`${A}lines-02.webp`} alt="" aria-hidden="true" />
            <HeroNoise />
            <HeroTopline>
              <span>ESTÚDIO CRIATIVO</span><span>CURITIBA / BRASIL</span><span>© 2025</span>
            </HeroTopline>
            <HeroContent>
              <Eyebrow>Imagem em movimento</Eyebrow>
              <HeroTitle aria-label="One Frame">
                <span>ONE</span>
                <span>FRAME</span>
              </HeroTitle>
              <HeroBottom>
                <HeroCopy>Um frame é um instante.<br />A gente cria o que acontece antes, durante e depois dele.</HeroCopy>
                <ScrollCue href="#manifesto">↓ <span>explorar</span></ScrollCue>
              </HeroBottom>
            </HeroContent>
            <HeroSymbol src={`${A}logo-symbol-outline.png`} alt="" aria-hidden="true" />
          </Hero>

          <Ticker aria-label="Manifesto">
            <TickerTrack>
              {Array.from({ length: 2 }).map((_, copy) => (
                <TickerGroup key={copy}>
                  <b>ONE FRAME</b><i>✦</i><span>IMAGEM</span><i>✦</i><span>MOVIMENTO</span><i>✦</i><span>IDEIA</span><i>✦</i><span>RITMO</span><i>✦</i>
                </TickerGroup>
              ))}
            </TickerTrack>
          </Ticker>

          <Manifesto id="manifesto">
            <ManifestoTexture src={`${A}lines-04.webp`} alt="" aria-hidden="true" />
            <ManifestoInner>
              <SectionNumber>01 / MANIFESTO</SectionNumber>
              <ManifestoTitle>Não fazemos<br /><em>só imagens.</em></ManifestoTitle>
              <ManifestoText>Construímos atmosferas. Pensamos no enquadramento, no silêncio, no corte, na textura e naquilo que permanece quando o vídeo termina.</ManifestoText>
              <ManifestoMark>OF</ManifestoMark>
            </ManifestoInner>
          </Manifesto>

          <ProjectsSection id="projetos">
            <SectionHead>
              <div><SectionNumber>02 / PROJETOS</SectionNumber><SectionTitle>Frames que<br /><em>ficam.</em></SectionTitle></div>
              <SectionIntro>Uma seleção de trabalhos. A estrutura já está preparada para receber projetos cadastrados pelo painel administrativo.</SectionIntro>
            </SectionHead>
            <ProjectGrid>
              {projects.map((project, index) => (
                <ProjectCard key={project.id} $featured={index === 0 || index === 3}>
                  <ProjectImageWrap>
                    <ProjectImage src={project.image} alt="" />
                    <ProjectOverlay />
                    <ProjectIndex>0{index + 1}</ProjectIndex>
                    <ProjectArrow>↗</ProjectArrow>
                  </ProjectImageWrap>
                  <ProjectMeta>
                    <div><strong>{project.title}</strong><span>{project.category}</span></div>
                    <small>{project.year}</small>
                  </ProjectMeta>
                </ProjectCard>
              ))}
            </ProjectGrid>
            <AllProjects href="#contato">ver todos os projetos <span>→</span></AllProjects>
          </ProjectsSection>

          <TornBreak>
            <TornPaper src={`${A}tear-white-middle.png`} alt="" aria-hidden="true" />
            <TornMessage>IDEIAS GANHAM FORMA<br /><strong>QUANDO ENTRAM EM CENA.</strong></TornMessage>
          </TornBreak>

          <AboutSection id="sobre">
            <AboutTexture src={`${A}tear-black.png`} alt="" aria-hidden="true" />
            <AboutGrid>
              <SectionNumber>03 / SOBRE</SectionNumber>
              <AboutTitle>Somos<br /><em>ONE FRAME.</em></AboutTitle>
              <AboutCopy>
                <p>Um estúdio para quem entende que uma boa imagem não é apenas bonita — ela precisa dizer alguma coisa.</p>
                <p>Trabalhamos entre direção, produção e pós-produção, criando narrativas visuais com uma estética autoral e atenção obsessiva aos detalhes.</p>
              </AboutCopy>
              <AboutSymbol src={`${A}logo-symbol-outline.png`} alt="Símbolo gráfico ONE FRAME" />
            </AboutGrid>
          </AboutSection>

          <ServicesSection id="servicos">
            <SectionHead>
              <div><SectionNumber>04 / O QUE FAZEMOS</SectionNumber><SectionTitle>Do primeiro<br /><em>rabisco</em> ao frame final.</SectionTitle></div>
              <SectionIntro>Uma operação criativa completa, com cada etapa pensada para preservar a ideia original e elevar a execução.</SectionIntro>
            </SectionHead>
            <ServiceList>
              {services.map(([number, title, description]) => (
                <ServiceItem key={number}>
                  <ServiceNumber>{number}</ServiceNumber>
                  <ServiceTitle>{title}</ServiceTitle>
                  <ServiceDescription>{description}</ServiceDescription>
                  <ServiceArrow>↗</ServiceArrow>
                </ServiceItem>
              ))}
            </ServiceList>
          </ServicesSection>

          <ProcessSection>
            <ProcessVisual>
              <img src={`${A}lines-06.webp`} alt="Textura gráfica abstrata" />
              <ProcessStamp>FRAME<br />BY<br />FRAME</ProcessStamp>
            </ProcessVisual>
            <ProcessCopy>
              <SectionNumber>05 / PROCESSO</SectionNumber>
              <h2>Menos ruído.<br /><em>Mais intenção.</em></h2>
              <p>Descobrimos o que a história precisa, definimos a linguagem, produzimos com precisão e finalizamos sem perder a espontaneidade.</p>
              <ol>
                <li><b>01</b><span>Descoberta</span></li>
                <li><b>02</b><span>Direção</span></li>
                <li><b>03</b><span>Produção</span></li>
                <li><b>04</b><span>Finalização</span></li>
              </ol>
            </ProcessCopy>
          </ProcessSection>

          <ContactSection id="contato">
            <ContactTexture src={`${A}lines-01.webp`} alt="" aria-hidden="true" />
            <ContactInner>
              <SectionNumber>06 / CONTATO</SectionNumber>
              <ContactTitle>Tem uma ideia<br /><em>na cabeça?</em></ContactTitle>
              <ContactText>Vamos colocar um frame depois do outro.</ContactText>
              <ContactButton href="mailto:hello@oneframe.com.br">fale com a gente <span>↗</span></ContactButton>
            </ContactInner>
          </ContactSection>
        </main>

        <Footer>
          <FooterTop>
            <FooterBrand><span>ONE</span><span>FRAME</span></FooterBrand>
            <FooterLinks>
              <a href="#projetos">Projetos</a><a href="#sobre">Sobre</a><a href="#servicos">Serviços</a><a href="mailto:hello@oneframe.com.br">E-mail</a>
            </FooterLinks>
            <FooterInfo>Curitiba — PR<br />Brasil</FooterInfo>
          </FooterTop>
          <FooterBottom><span>ONE FRAME © {new Date().getFullYear()}</span><span>feito para causar impacto.</span><a href="#top">↑ topo</a></FooterBottom>
        </Footer>
      </Page>
    </>
  )
}

const Page = styled.div`overflow-x:hidden;background:#050505;`
const Header = styled.header`position:fixed;z-index:50;top:0;left:0;width:100%;height:78px;padding:16px 3.5vw;display:flex;align-items:center;justify-content:space-between;color:#fff;mix-blend-mode:difference;`
const Logo = styled.a`display:flex;align-items:center;gap:10px;position:relative;z-index:2;`
const Symbol = styled.img`width:30px;height:30px;object-fit:contain;filter:invert(1);`
const LogoText = styled.span`font-size:12px;font-weight:900;line-height:.83;letter-spacing:-.07em;display:grid;gap:1px;`
const Nav = styled.nav<{ $open:boolean }>`display:flex;gap:32px;align-items:center;@media(max-width:760px){position:fixed;inset:0;background:#050505;color:#fff;display:${p=>p.$open?'flex':'none'};flex-direction:column;justify-content:center;gap:24px;mix-blend-mode:normal}.open{display:flex}`
const NavLink = styled.a`font-size:11px;text-transform:uppercase;letter-spacing:.1em;font-weight:700;transition:opacity .2s;&:hover{opacity:.5}`
const MenuButton = styled.button`display:none;background:none;border:0;color:inherit;width:34px;height:34px;position:relative;z-index:3;@media(max-width:760px){display:block}span{position:absolute;left:6px;width:22px;height:1px;background:currentColor;transition:.25s}span:first-child{top:13px}span:last-child{top:20px}`
const Hero = styled.section`min-height:100svh;position:relative;overflow:hidden;background:#050505;display:flex;align-items:center;`
const HeroTexture = styled.img`position:absolute;inset:-8%;width:116%;height:116%;object-fit:cover;opacity:.27;filter:contrast(1.2);animation:drift 18s ease-in-out infinite;mix-blend-mode:screen;`
const HeroNoise = styled.div`position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.16) .6px,transparent .7px);background-size:5px 5px;opacity:.16;mix-blend-mode:screen;`
const HeroTopline = styled.div`position:absolute;top:96px;left:3.5vw;right:3.5vw;display:flex;justify-content:space-between;font-size:9px;letter-spacing:.16em;text-transform:uppercase;opacity:.7;`
const HeroContent = styled.div`position:relative;z-index:2;width:min(1380px,93vw);margin:0 auto;padding-top:55px;`
const Eyebrow = styled.p`margin:0 0 18px;font-size:10px;text-transform:uppercase;letter-spacing:.2em;`
const HeroTitle = styled.h1`font-family:Impact,'Arial Black',Arial,sans-serif;font-size:clamp(92px,18.2vw,290px);line-height:.73;letter-spacing:-.085em;text-transform:uppercase;margin:0;display:grid;transform:scaleX(.92);transform-origin:left center;span:last-child{margin-left:7.5vw}`
const HeroBottom = styled.div`display:flex;align-items:end;justify-content:space-between;margin-top:5.5vw;padding-left:5vw;max-width:1050px;`
const HeroCopy = styled.p`font-size:clamp(15px,1.5vw,22px);line-height:1.25;margin:0;max-width:390px;letter-spacing:-.02em;`
const ScrollCue = styled.a`font-size:11px;text-transform:uppercase;letter-spacing:.12em;display:flex;gap:8px;align-items:center;span{opacity:.6}@media(max-width:600px){display:none}`
const HeroSymbol = styled.img`position:absolute;width:clamp(160px,18vw,290px);right:5vw;bottom:4vw;opacity:.75;animation:float 8s ease-in-out infinite;filter:invert(1);`
const Ticker = styled.div`background:#f2f1ed;color:#050505;overflow:hidden;border-block:1px solid #050505;`
const TickerTrack = styled.div`display:flex;width:max-content;animation:marquee 24s linear infinite;`
const TickerGroup = styled.div`display:flex;align-items:center;gap:30px;padding:12px 24px;white-space:nowrap;font-size:11px;letter-spacing:.14em;text-transform:uppercase;i{font-style:normal;font-size:14px}`
const Manifesto = styled.section`position:relative;min-height:760px;display:flex;align-items:center;overflow:hidden;background:#090909;`
const ManifestoTexture = styled.img`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.12;filter:invert(1);`
const ManifestoInner = styled.div`position:relative;width:min(1240px,88vw);margin:auto;padding:110px 0;display:grid;grid-template-columns:1fr 2fr;gap:30px;@media(max-width:760px){grid-template-columns:1fr;padding:90px 0}`
const SectionNumber = styled.span`font-size:10px;letter-spacing:.18em;text-transform:uppercase;opacity:.6;`
const ManifestoTitle = styled.h2`grid-column:2;margin:0;font-family:Impact,'Arial Black',sans-serif;font-size:clamp(64px,10vw,150px);line-height:.8;letter-spacing:-.06em;text-transform:uppercase;em{font-family:Georgia,serif;font-weight:400;text-transform:none;letter-spacing:-.08em}@media(max-width:760px){grid-column:auto}`
const ManifestoText = styled.p`grid-column:2;max-width:550px;font-size:clamp(18px,2vw,28px);line-height:1.1;letter-spacing:-.025em;margin:50px 0 0 18%;@media(max-width:760px){grid-column:auto;margin:20px 0 0}`
const ManifestoMark = styled.div`position:absolute;right:0;bottom:40px;font-size:11px;letter-spacing:.2em;opacity:.45;`
const ProjectsSection = styled.section`background:#f1f0eb;color:#050505;padding:130px 3.5vw 150px;`
const SectionHead = styled.div`width:min(1240px,92vw);margin:0 auto 90px;display:grid;grid-template-columns:1.4fr .6fr;gap:80px;align-items:end;@media(max-width:800px){grid-template-columns:1fr;gap:30px;margin-bottom:55px}`
const SectionTitle = styled.h2`font-family:Impact,'Arial Black',sans-serif;text-transform:uppercase;font-size:clamp(65px,8.5vw,125px);line-height:.8;letter-spacing:-.06em;margin:20px 0 0;em{font-family:Georgia,serif;font-weight:400;text-transform:none;letter-spacing:-.08em}`
const SectionIntro = styled.p`font-size:15px;line-height:1.3;max-width:330px;margin:0 0 5px;`
const ProjectGrid = styled.div`width:min(1240px,92vw);margin:auto;display:grid;grid-template-columns:repeat(12,1fr);gap:65px 24px;`
const ProjectCard = styled.article<{ $featured:boolean }>`grid-column:span 5;${p=>p.$featured?'grid-column:span 7;':''}@media(max-width:800px){grid-column:span 12!important}`
const ProjectImageWrap = styled.div`aspect-ratio:1.45;position:relative;overflow:hidden;background:#111;`
const ProjectImage = styled.img`width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.15);transition:transform .7s cubic-bezier(.2,.7,.2,1),filter .5s;&:hover{transform:scale(1.06);filter:grayscale(.6) contrast(1.1)}`
const ProjectOverlay = styled.div`position:absolute;inset:0;background:linear-gradient(120deg,rgba(0,0,0,.25),transparent 45%,rgba(0,0,0,.15));pointer-events:none;`
const ProjectIndex = styled.span`position:absolute;top:16px;left:16px;color:#fff;font-size:10px;letter-spacing:.15em;`
const ProjectArrow = styled.span`position:absolute;right:16px;bottom:12px;color:#fff;font-size:24px;`
const ProjectMeta = styled.div`display:flex;justify-content:space-between;gap:20px;padding-top:14px;font-size:11px;text-transform:uppercase;letter-spacing:.08em;border-bottom:1px solid #050505;padding-bottom:10px;strong,span{display:block}span{opacity:.55;margin-top:5px;font-size:9px}small{font-size:9px;opacity:.55}`
const AllProjects = styled.a`display:block;width:min(1240px,92vw);margin:85px auto 0;font-size:11px;text-transform:uppercase;letter-spacing:.14em;border-bottom:1px solid #050505;padding-bottom:12px;width:max-content;margin-left:auto;margin-right:auto;span{margin-left:20px}`
const TornBreak = styled.section`min-height:260px;background:#f1f0eb;color:#050505;position:relative;overflow:hidden;display:grid;place-items:center;`
const TornPaper = styled.img`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;mix-blend-mode:multiply;`
const TornMessage = styled.p`position:relative;z-index:1;text-align:center;font-family:Impact,'Arial Black',sans-serif;font-size:clamp(34px,5vw,74px);line-height:.83;letter-spacing:-.05em;margin:0;strong{font-family:Georgia,serif;font-weight:400;letter-spacing:-.07em}`
const AboutSection = styled.section`position:relative;background:#050505;color:#f1f0eb;overflow:hidden;min-height:780px;`
const AboutTexture = styled.img`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.12;`
const AboutGrid = styled.div`position:relative;width:min(1240px,92vw);margin:auto;padding:140px 0;display:grid;grid-template-columns:.7fr 1.3fr 1fr;gap:40px;@media(max-width:800px){grid-template-columns:1fr;padding:100px 0;gap:25px}`
const AboutTitle = styled.h2`font-family:Impact,'Arial Black',sans-serif;font-size:clamp(72px,9vw,140px);line-height:.78;letter-spacing:-.06em;text-transform:uppercase;margin:0;grid-column:2;em{font-family:Georgia,serif;font-weight:400;letter-spacing:-.08em;text-transform:none}@media(max-width:800px){grid-column:auto}`
const AboutCopy = styled.div`grid-column:2/4;max-width:620px;margin-left:15%;font-size:clamp(17px,1.7vw,23px);line-height:1.18;letter-spacing:-.025em;p{margin:0 0 18px}@media(max-width:800px){grid-column:auto;margin-left:0}`
const AboutSymbol = styled.img`position:absolute;right:0;bottom:70px;width:180px;opacity:.5;filter:invert(1);@media(max-width:800px){position:relative;right:auto;bottom:auto;width:110px;margin-left:auto}`
const ServicesSection = styled.section`background:#f1f0eb;color:#050505;padding:130px 3.5vw 150px;`
const ServiceList = styled.div`width:min(1240px,92vw);margin:auto;border-top:1px solid #050505;`
const ServiceItem = styled.article`display:grid;grid-template-columns:80px 1fr 1.1fr 50px;gap:30px;align-items:center;padding:30px 0;border-bottom:1px solid #050505;@media(max-width:800px){grid-template-columns:45px 1fr 30px;gap:12px}.service-description{grid-column:auto}`
const ServiceNumber = styled.span`font-size:10px;letter-spacing:.15em;opacity:.5;`
const ServiceTitle = styled.h3`font-family:Impact,'Arial Black',sans-serif;font-size:clamp(35px,4.5vw,65px);text-transform:uppercase;letter-spacing:-.05em;margin:0;`
const ServiceDescription = styled.p`font-size:14px;line-height:1.25;max-width:430px;margin:0;@media(max-width:800px){grid-column:2}`
const ServiceArrow = styled.span`font-size:22px;text-align:right;`
const ProcessSection = styled.section`background:#111;color:#f1f0eb;display:grid;grid-template-columns:1fr 1fr;min-height:720px;@media(max-width:800px){grid-template-columns:1fr}`
const ProcessVisual = styled.div`position:relative;min-height:600px;overflow:hidden;img{width:100%;height:100%;min-height:600px;object-fit:cover;filter:grayscale(1);opacity:.7}`
const ProcessStamp = styled.div`position:absolute;left:50%;top:50%;transform:translate(-50%,-50%) rotate(-7deg);font-family:Impact,'Arial Black',sans-serif;font-size:clamp(55px,7vw,110px);line-height:.72;text-align:center;mix-blend-mode:screen;opacity:.85;`
const ProcessCopy = styled.div`padding:120px 8vw 110px;display:flex;flex-direction:column;justify-content:center;h2{font-family:Impact,'Arial Black',sans-serif;text-transform:uppercase;font-size:clamp(65px,7vw,105px);line-height:.78;letter-spacing:-.06em;margin:25px 0 35px}em{font-family:Georgia,serif;font-weight:400;text-transform:none;letter-spacing:-.08em}p{max-width:470px;font-size:18px;line-height:1.2;margin:0 0 55px}`
const ProcessCopyOl = styled.ol``
const ContactSection = styled.section`min-height:760px;position:relative;overflow:hidden;display:flex;align-items:center;background:#f1f0eb;color:#050505;`
const ContactTexture = styled.img`position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.32;mix-blend-mode:multiply;filter:grayscale(1);`
const ContactInner = styled.div`position:relative;width:min(1240px,92vw);margin:auto;padding:140px 0;`
const ContactTitle = styled.h2`font-family:Impact,'Arial Black',sans-serif;font-size:clamp(80px,12vw,180px);line-height:.75;letter-spacing:-.07em;text-transform:uppercase;margin:25px 0 40px;em{font-family:Georgia,serif;font-weight:400;text-transform:none;letter-spacing:-.09em}`
const ContactText = styled.p`font-size:20px;margin:0 0 30px;`
const ContactButton = styled.a`display:inline-flex;gap:35px;align-items:center;border:1px solid #050505;padding:15px 18px;text-transform:uppercase;font-size:10px;letter-spacing:.15em;transition:background .2s,color .2s;&:hover{background:#050505;color:#f1f0eb}span{font-size:18px}`
const Footer = styled.footer`background:#050505;color:#f1f0eb;padding:70px 3.5vw 20px;`
const FooterTop = styled.div`display:grid;grid-template-columns:1.5fr 1fr .5fr;gap:40px;align-items:start;padding-bottom:100px;@media(max-width:700px){grid-template-columns:1fr;padding-bottom:70px}`
const FooterBrand = styled.div`font-family:Impact,'Arial Black',sans-serif;font-size:clamp(60px,9vw,130px);line-height:.7;letter-spacing:-.07em;display:grid;`
const FooterLinks = styled.nav`display:grid;gap:10px;font-size:11px;text-transform:uppercase;letter-spacing:.12em;a{opacity:.7;transition:opacity .2s}&:hover a{opacity:.3}& a:hover{opacity:1}`
const FooterInfo = styled.p`font-size:11px;line-height:1.5;margin:0;opacity:.6;text-transform:uppercase;letter-spacing:.1em;`
const FooterBottom = styled.div`border-top:1px solid #333;padding-top:16px;display:grid;grid-template-columns:1fr 1fr auto;font-size:9px;text-transform:uppercase;letter-spacing:.12em;opacity:.5;gap:20px;@media(max-width:600px){grid-template-columns:1fr 1fr;&:last-child{grid-column:auto}}`
