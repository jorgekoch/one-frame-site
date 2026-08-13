import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './styles/global'

const A = '/assets/'
const RED = '#ef1b14'
const BLACK = '#080808'
const PAPER = '#f7f5ef'

const projects = [
  { id: '01', title: 'Projeto 01', category: 'Produção mobile', year: '2025', image: `${A}lines-01.webp`, featured: true },
  { id: '02', title: 'Projeto 02', category: 'Conteúdo / Social', year: '2025', image: `${A}lines-03.webp`, featured: false },
  { id: '03', title: 'Projeto 03', category: 'One Sessions', year: '2025', image: `${A}lines-05.webp`, featured: true },
  { id: '04', title: 'Projeto 04', category: 'Campanha', year: '2024', image: `${A}lines-02.webp`, featured: false },
  { id: '05', title: 'Projeto 05', category: 'Conteúdo recorrente', year: '2024', image: `${A}lines-04.webp`, featured: false },
  { id: '06', title: 'Projeto 06', category: 'Produção mobile', year: '2024', image: `${A}lines-06.webp`, featured: true },
]

const services = [
  ['01', 'Produção Mobile', 'Seja um evento, aniversário, after, reel ou vídeo para registrar a vida, capturamos instantes que merecem ser sentidos e lembrados.', 'icon-camera.png'],
  ['02', 'Mídias Sociais', 'Planejamos, criamos e impulsionamos campanhas completas para sua marca crescer, com estratégia, constância e criatividade.', 'icon-sparks.png'],
  ['03', 'One Sessions', 'Cobertura mobile de eventos, shows e experiências. Captamos a energia do momento e entregamos vídeos rápidos e impactantes.', 'icon-music.png'],
  ['04', 'Conteúdo Recorrente', 'Geramos presença constante para sua marca através de conteúdo frequente, estratégico e com estética forte.', 'icon-bolt.png'],
] as const

const clients = ['ALLURE', 'INTERDRINKS', 'CEASA', 'TORK', 'FITOSSÊNCIA', 'VALOR REAL', '180 BPM', 'MAD BRAZIL', 'CONEC TOWN']

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
      <Page id="top">
        <Header>
          <Logo href="#top" onClick={closeMenu} aria-label="One Frame">
            <img src={`${A}logo-symbol-black.png`} alt="" />
            <span>ONE<br />FRAME</span>
          </Logo>
          <Nav $open={menuOpen}>
            <a href="#sobre" onClick={closeMenu}>sobre nós</a>
            <a href="#servicos" onClick={closeMenu}>serviços</a>
            <a href="#sessions" onClick={closeMenu}>one sessions</a>
            <a href="#projetos" onClick={closeMenu}>trabalhos</a>
          </Nav>
          <HeaderContact href="#contato" onClick={closeMenu}>FALE CONOSCO</HeaderContact>
          <MenuButton onClick={() => setMenuOpen(v => !v)} aria-label="Abrir menu"><i /><i /></MenuButton>
        </Header>

        <main>
          <Hero>
            <PaperTexture />
            <Icon src={`${A}icon-arrow.png`} $size={64} $top="17%" $right="8%" />
            <Icon src={`${A}icon-bolt.png`} $size={64} $top="34%" $right="3%" />
            <Icon src={`${A}icon-crown.png`} $size={86} $bottom="9%" $right="7%" />
            <HeroCopy>
              <MiniLogo>ONE<br /><b>FRAME</b></MiniLogo>
              <HeroTitle>CADA<br />FRAME<br /><em>IMPORTA</em></HeroTitle>
              <HeroText>Studio Mobile onde criamos vídeos<br />que geram presença real.</HeroText>
              <CTA href="#contato">FALE CONOSCO <span>↗</span></CTA>
            </HeroCopy>
            <HeroCard>
              <CardTop><span>ONE FRAME</span><b>REC ●</b></CardTop>
              <CardScreen><CardLines /><CardLogo>ONE<br /><strong>FRAME</strong></CardLogo><CardCaption>STUDIO MOBILE / CURITIBA</CardCaption></CardScreen>
            </HeroCard>
          </Hero>

          <Band><span>01</span><b>ONE FRAME</b><span>STUDIO MOBILE</span><span>CURITIBA / BR</span></Band>
          <Torn $tone="paper" />

          <About id="sobre">
            <AboutGraphic>
              <img className="texture" src={`${A}lines-01.webp`} alt="" />
              <Icon src={`${A}icon-headphones.png`} $size={72} $top="7%" $left="7%" />
              <Icon src={`${A}icon-dots.png`} $size={55} $top="15%" $right="5%" />
              <AboutMark>ONE<br /><span>FRA</span><br />ME</AboutMark>
              <Icon src={`${A}icon-fire.png`} $size={78} $bottom="8%" $left="6%" />
            </AboutGraphic>
            <AboutCopy>
              <Label>02 / SOBRE NÓS</Label>
              <h2>Somos a produtora<br />mobile que decidiu<br /><em>fazer diferente.</em></h2>
              <p>Nada de vídeos genéricos, nada de conteúdo sem alma. Aqui a gente cria material rápido, com personalidade, estética forte e aquela energia que faz o público parar de rolar o feed.</p>
              <p>Nosso trabalho é simples: fazer sua marca aparecer do jeito certo, na hora certa.</p>
              <p>Se você quer conteúdo que prende atenção, gera presença e faz sua marca parecer viva, é aqui que começa.</p>
              <TextLink href="#contato">Bora dar um upgrade na forma como o mundo vê você? <span>↗</span></TextLink>
            </AboutCopy>
          </About>

          <Services id="servicos">
            <ServicesHead>
              <Icon src={`${A}icon-sparks.png`} $size={62} $top="-20px" $left="3%" />
              <Icon src={`${A}icon-question.png`} $size={48} $top="42px" $right="5%" />
              <Label>03 / SERVIÇOS</Label>
              <h2>O QUE VOCÊ<br /><em>PROCURA?</em></h2>
            </ServicesHead>
            <ServiceGrid>
              {services.map(([number, title, description, icon]) => (
                <ServiceCard key={number}>
                  <div className="service-top"><span>{number}</span><img src={`${A}${icon}`} alt="" /></div>
                  <h3>{title}</h3><p>{description}</p><span className="plus">+</span>
                </ServiceCard>
              ))}
            </ServiceGrid>
          </Services>

          <Torn $tone="black" />

          <Sessions id="sessions">
            <SessionVisual>
              <img src={`${A}lines-03.webp`} alt="" />
              <div className="red-overlay" />
              <Icon src={`${A}icon-camera.png`} $size={145} $bottom="10%" $left="9%" $invert />
              <SessionTitle>ONE<br /><b>SESSIONS</b></SessionTitle>
              <span className="number">04</span>
            </SessionVisual>
            <SessionCopy>
              <Label>04 / ONE SESSIONS</Label>
              <h2>O momento<br /><em>não espera.</em></h2>
              <p>Cobertura mobile de eventos, shows e experiências. Captamos a energia do momento e entregamos vídeos rápidos e impactantes para o mesmo dia.</p>
              <CTA href="#contato">QUERO UMA ONE SESSION <span>↗</span></CTA>
            </SessionCopy>
          </Sessions>

          <Torn $tone="paper" />

          <Clients>
            <Label>05 / CLIENTES</Label>
            <h2>QUEM JÁ<br /><em>VIVEU O FRAME.</em></h2>
            <ClientGrid>{clients.map(client => <span key={client}>{client}</span>)}</ClientGrid>
            <Icon src={`${A}icon-crown.png`} $size={80} $bottom="-12px" $right="5%" />
          </Clients>

          <Projects id="projetos">
            <ProjectsHead>
              <Label>06 / NOSSOS TRABALHOS</Label>
              <h2>NOSSOS<br /><em>TRABALHOS:</em></h2>
              <Icon src={`${A}icon-sparks.png`} $size={58} $top="10px" $right="7%" />
            </ProjectsHead>
            <ProjectGrid>
              {projects.map(project => (
                <Project key={project.id} $featured={project.featured}>
                  <ProjectImage><img src={project.image} alt="" /><span>{project.id}</span><b>↗</b></ProjectImage>
                  <ProjectMeta><strong>{project.title}</strong><span>{project.category}</span><small>{project.year}</small></ProjectMeta>
                </Project>
              ))}
            </ProjectGrid>
            <ProjectsCTA href="#contato">VER TODOS OS PROJETOS <span>↗</span></ProjectsCTA>
          </Projects>

          <Contact id="contato">
            <Icon src={`${A}icon-shaka.png`} $size={100} $top="11%" $left="5%" />
            <Icon src={`${A}icon-exclamation.png`} $size={70} $top="9%" $right="8%" />
            <Icon src={`${A}icon-music.png`} $size={80} $bottom="10%" $right="8%" />
            <Label>07 / FALE CONOSCO</Label>
            <h2>VAMOS FAZER<br /><em>ACONTECER?</em></h2>
            <p>Tem uma ideia, evento, marca ou história para colocar em movimento?</p>
            <CTA href="mailto:hello@oneframe.com.br">FALE COM A GENTE <span>↗</span></CTA>
          </Contact>
          <Torn $tone="black" />
        </main>

        <Footer>
          <div><b>ONE<br />FRAME</b><span>Studio Mobile onde criamos vídeos<br />que geram presença real.</span></div>
          <nav><a href="#sobre">sobre</a><a href="#servicos">serviços</a><a href="#projetos">trabalhos</a><a href="#contato">contato</a></nav>
          <small>© {new Date().getFullYear()} ONE FRAME<br />Curitiba — Brasil</small>
        </Footer>
      </Page>
    </>
  )
}

const Page = styled.div`background:${PAPER};color:${BLACK};overflow:hidden;`
const Header = styled.header`position:fixed;z-index:100;top:0;left:0;width:100%;height:78px;padding:12px 4vw;display:flex;align-items:center;justify-content:space-between;background:${BLACK};color:#fff;&:after{content:'';position:absolute;left:0;right:0;bottom:-22px;height:28px;background:url('${A}torn-white-divider.png') center/100% 100% no-repeat;pointer-events:none;}`
const Logo = styled.a`display:flex;align-items:center;gap:8px;font-family:Impact,'Arial Black',sans-serif;font-size:17px;line-height:.78;letter-spacing:-.05em;color:#fff;img{width:34px;height:34px;object-fit:contain;filter:invert(1);}`
const Nav = styled.nav<{ $open:boolean }>`display:flex;gap:34px;font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.1em;a{color:#fff}a:hover{color:${RED}}@media(max-width:800px){position:fixed;top:78px;left:0;right:0;background:${BLACK};padding:28px 5vw;display:${p=>p.$open?'flex':'none'};flex-direction:column;gap:18px;font-size:14px;}`
const HeaderContact = styled.a`border:2px solid #fff;border-radius:999px;padding:9px 17px;font-size:9px;font-weight:900;letter-spacing:.08em;&:hover{background:#fff;color:${BLACK}}@media(max-width:800px){display:none}`
const MenuButton = styled.button`display:none;background:none;border:0;padding:10px;@media(max-width:800px){display:grid;gap:5px}i{display:block;width:26px;height:3px;background:#fff}`
const Hero = styled.section`min-height:830px;position:relative;display:flex;align-items:center;gap:3vw;padding:140px 5vw 80px;background:${PAPER};overflow:hidden;@media(max-width:900px){flex-direction:column;align-items:flex-start;padding-top:125px}`
const PaperTexture = styled.div`position:absolute;inset:0;opacity:.12;background-image:radial-gradient(#000 .7px,transparent .7px);background-size:6px 6px;pointer-events:none;`
const HeroCopy = styled.div`position:relative;z-index:3;width:48%;min-width:430px;@media(max-width:900px){width:100%;min-width:0}`
const MiniLogo = styled.div`font:22px/.72 Impact,'Arial Black',sans-serif;margin-bottom:24px;transform:rotate(-2deg);b{font-size:17px;color:${RED}}`
const HeroTitle = styled.h1`font:clamp(82px,10vw,155px)/.78 Impact,'Arial Black',sans-serif;letter-spacing:-.07em;margin:0;text-transform:uppercase;text-shadow:4px 4px 0 rgba(239,27,20,.18);em{font-style:normal;color:${RED}}`
const HeroText = styled.p`font-size:14px;line-height:1.2;margin:30px 0 18px;font-weight:700;max-width:390px;`
const CTA = styled.a`display:inline-flex;align-items:center;gap:24px;background:${RED};color:#fff;border:2px solid ${BLACK};border-radius:999px;padding:13px 22px;font-size:10px;font-weight:900;letter-spacing:.08em;box-shadow:4px 5px 0 ${BLACK};transition:.2s;&:hover{transform:translate(-2px,-2px);box-shadow:7px 8px 0 ${BLACK}}span{font-size:16px}`
const HeroCard = styled.div`position:relative;z-index:2;width:min(48vw,650px);height:min(34vw,430px);background:#fff;border:4px solid ${BLACK};border-radius:28px;padding:12px;box-shadow:12px 14px 0 rgba(239,27,20,.28);transform:rotate(-1.5deg);@media(max-width:900px){width:90%;height:300px;margin:40px auto 0}`
const CardTop = styled.div`height:25px;display:flex;justify-content:space-between;font-size:8px;font-weight:900;letter-spacing:.14em;`
const CardScreen = styled.div`position:relative;height:calc(100% - 25px);background:${RED};overflow:hidden;display:flex;align-items:center;justify-content:center;`
const CardLines = styled.div`position:absolute;inset:-20%;background:repeating-linear-gradient(155deg,transparent 0 20px,rgba(255,255,255,.28) 21px 23px);transform:rotate(-6deg);`
const CardLogo = styled.div`position:relative;z-index:2;text-align:center;color:#fff;font:clamp(40px,6vw,90px)/.68 Impact,'Arial Black';letter-spacing:-.07em;text-shadow:4px 4px 0 ${BLACK};strong{color:${BLACK}}`
const CardCaption = styled.small`position:absolute;left:18px;bottom:14px;color:#fff;font-size:8px;letter-spacing:.25em;font-weight:900;`
const Band = styled.div`background:${BLACK};color:#fff;display:flex;justify-content:space-between;gap:20px;padding:15px 5vw;font-size:10px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;span:nth-child(2){color:${RED}}@media(max-width:600px){flex-wrap:wrap}`
const Torn = styled.div<{ $tone:'paper'|'black' }>`height:62px;background:${p=>p.$tone==='paper'?PAPER:BLACK};position:relative;z-index:8;margin-top:-1px;margin-bottom:-1px;clip-path:polygon(0 18%,2% 55%,4% 24%,6% 66%,8% 31%,10% 58%,12% 20%,14% 62%,16% 28%,18% 69%,20% 24%,22% 58%,24% 18%,26% 65%,28% 29%,30% 62%,32% 20%,34% 56%,36% 29%,38% 68%,40% 22%,42% 59%,44% 18%,46% 65%,48% 27%,50% 57%,52% 20%,54% 66%,56% 26%,58% 60%,60% 18%,62% 63%,64% 26%,66% 58%,68% 20%,70% 66%,72% 25%,74% 58%,76% 18%,78% 64%,80% 25%,82% 58%,84% 18%,86% 64%,88% 24%,90% 58%,92% 18%,94% 63%,96% 25%,98% 57%,100% 18%,100% 100%,0 100%);`
const About = styled.section`display:grid;grid-template-columns:1fr 1.25fr;min-height:720px;background:${PAPER};@media(max-width:800px){grid-template-columns:1fr}`
const AboutGraphic = styled.div`position:relative;min-height:600px;background:${RED};overflow:hidden;.texture{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.2;mix-blend-mode:multiply}`
const AboutMark = styled.div`position:absolute;z-index:2;left:50%;top:50%;transform:translate(-50%,-50%) rotate(-5deg);font:clamp(90px,12vw,180px)/.65 Impact,'Arial Black';text-align:center;color:#fff;letter-spacing:-.09em;text-shadow:4px 4px 0 ${BLACK};span{color:${BLACK}}`
const AboutCopy = styled.div`padding:100px 8vw 90px;max-width:800px;h2{font:clamp(55px,6vw,90px)/.82 Impact,'Arial Black';letter-spacing:-.06em;text-transform:uppercase;margin:22px 0 38px}em{font-family:Georgia,serif;font-weight:400;text-transform:none;letter-spacing:-.08em;color:${RED}}p{font-size:16px;line-height:1.25;max-width:560px}`
const Label = styled.span`font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;opacity:.65;`
const TextLink = styled.a`display:block;margin-top:35px;font-weight:900;font-size:13px;text-decoration:underline;span{margin-left:8px;color:${RED}}`
const Icon = styled.img<{ $size:number;$top?:string;$right?:string;$bottom?:string;$left?:string;$invert?:boolean }>`position:absolute;z-index:4;width:${p=>p.$size}px;height:auto;top:${p=>p.$top||'auto'};right:${p=>p.$right||'auto'};bottom:${p=>p.$bottom||'auto'};left:${p=>p.$left||'auto'};object-fit:contain;${p=>p.$invert?'filter:invert(1);':''}`
const Services = styled.section`position:relative;background:${PAPER};padding:110px 5vw 125px;`
const ServicesHead = styled.div`position:relative;text-align:center;margin:0 auto 65px;h2{font:clamp(62px,8vw,115px)/.78 Impact,'Arial Black';letter-spacing:-.07em;margin:20px 0;text-transform:uppercase}em{font-family:Georgia,serif;font-weight:400;text-transform:none;color:${RED}}`
const ServiceGrid = styled.div`display:grid;grid-template-columns:repeat(4,1fr);gap:14px;max-width:1250px;margin:auto;@media(max-width:1000px){grid-template-columns:repeat(2,1fr)}@media(max-width:600px){grid-template-columns:1fr}`
const ServiceCard = styled.article`position:relative;background:#fff;min-height:310px;padding:22px;border:2px solid ${BLACK};border-radius:10px;box-shadow:6px 7px 0 ${RED};overflow:hidden;.service-top{display:flex;justify-content:space-between;align-items:start;color:${RED};font-size:11px;font-weight:900}.service-top img{width:48px;height:48px;object-fit:contain}h3{font:35px/.85 Impact,'Arial Black';text-transform:uppercase;letter-spacing:-.05em;margin:55px 0 20px}p{font-size:12px;line-height:1.25;max-width:260px}.plus{position:absolute;right:20px;bottom:14px;color:${RED};font-size:27px}`
const Sessions = styled.section`display:grid;grid-template-columns:1fr 1fr;background:${BLACK};color:#fff;min-height:650px;@media(max-width:800px){grid-template-columns:1fr}`
const SessionVisual = styled.div`position:relative;min-height:650px;overflow:hidden;background:${RED}>img{width:100%;height:100%;object-fit:cover;opacity:.68;filter:contrast(1.15)}.red-overlay{position:absolute;inset:0;background:${RED};mix-blend-mode:multiply;opacity:.65}`
const SessionTitle = styled.span`position:absolute;z-index:3;left:10%;top:15%;font:clamp(60px,9vw,130px)/.7 Impact,'Arial Black';letter-spacing:-.08em;color:#fff;transform:rotate(-4deg);text-shadow:4px 4px 0 ${BLACK};b{color:${BLACK}}`
const SessionCopy = styled.div`padding:100px 9vw;display:flex;flex-direction:column;justify-content:center;background:${BLACK};h2{font:clamp(65px,7vw,105px)/.78 Impact,'Arial Black';letter-spacing:-.07em;text-transform:uppercase;margin:22px 0 35px}em{font-family:Georgia,serif;font-weight:400;text-transform:none;color:${RED}}p{font-size:17px;line-height:1.25;max-width:480px;margin:0 0 35px}`
const Clients = styled.section`position:relative;background:${PAPER};padding:90px 6vw 110px;text-align:center;overflow:hidden`
const ClientGrid = styled.div`max-width:1050px;margin:65px auto 0;display:grid;grid-template-columns:repeat(3,1fr);gap:34px 70px;font:clamp(17px,2vw,28px) Impact,'Arial Black';@media(max-width:600px){grid-template-columns:repeat(2,1fr);gap:25px}`
const Projects = styled.section`background:${PAPER};padding:120px 5vw 150px`
const ProjectsHead = styled.div`position:relative;text-align:center;margin-bottom:75px;h2{font:clamp(70px,9vw,125px)/.75 Impact,'Arial Black';letter-spacing:-.07em;margin:20px 0;text-transform:uppercase}em{font-family:Georgia,serif;font-weight:400;text-transform:none;color:${RED}}`
const ProjectGrid = styled.div`max-width:1250px;margin:auto;display:grid;grid-template-columns:repeat(12,1fr);gap:55px 20px;@media(max-width:800px){display:block}`
const Project = styled.article<{ $featured:boolean }>`grid-column:span ${p=>p.$featured?7:5};@media(max-width:800px){margin-bottom:45px}`
const ProjectImage = styled.div`position:relative;aspect-ratio:1.45;overflow:hidden;border:2px solid ${BLACK};background:${BLACK};box-shadow:6px 7px 0 ${RED};transition:.25s;&:hover{transform:translate(-2px,-2px);box-shadow:9px 10px 0 ${BLACK}}img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.2)}:after{content:'';position:absolute;inset:0;background:${RED};mix-blend-mode:multiply;opacity:.25}span,b{position:absolute;z-index:2;color:#fff;font-weight:900}span{left:12px;top:10px;font-size:10px}b{right:14px;bottom:10px;font-size:22px}`
const ProjectMeta = styled.div`display:grid;grid-template-columns:1fr auto;padding:12px 0;border-bottom:1px solid ${BLACK};text-transform:uppercase;font-size:10px;strong{font-size:12px}span{grid-column:1;color:#555;margin-top:4px}small{grid-row:1/3;grid-column:2;color:#555}`
const ProjectsCTA = styled.a`display:block;width:max-content;margin:70px auto 0;border-bottom:2px solid ${BLACK};font-size:11px;font-weight:900;letter-spacing:.12em;padding-bottom:7px;&:hover{color:${RED};border-color:${RED}}span{margin-left:10px}`
const Contact = styled.section`position:relative;min-height:700px;background:${RED};color:${BLACK};display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:100px 5vw;overflow:hidden;h2{font:clamp(78px,11vw,160px)/.72 Impact,'Arial Black';letter-spacing:-.08em;margin:22px 0 30px;text-transform:uppercase}em{font-family:Georgia,serif;font-weight:400;text-transform:none;color:#fff}p{max-width:450px;font-weight:700;margin-bottom:30px}`
const Footer = styled.footer`background:${BLACK};color:#fff;padding:55px 5vw 25px;display:grid;grid-template-columns:1.5fr 1fr auto;gap:40px;b{font:38px/.7 Impact,'Arial Black'}span{display:block;margin-top:20px;font-size:11px;line-height:1.3}nav{display:flex;flex-direction:column;gap:10px;text-transform:uppercase;font-size:10px;font-weight:700}nav a:hover{color:${RED}}small{font-size:9px;line-height:1.5;text-align:right}@media(max-width:700px){grid-template-columns:1fr;small{text-align:left}}`
