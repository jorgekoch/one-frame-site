import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './styles/global'

const A = '/assets/'

// Estrutura preparada para futuramente receber projetos vindos da API/banco de dados.
const projects = [
  { id: 1, title: 'Projeto 01', category: 'Produção mobile', year: '2025', image: `${A}lines-01.webp`, featured: true },
  { id: 2, title: 'Projeto 02', category: 'Conteúdo / Social', year: '2025', image: `${A}lines-03.webp`, featured: false },
  { id: 3, title: 'Projeto 03', category: 'One Sessions', year: '2025', image: `${A}lines-05.webp`, featured: true },
  { id: 4, title: 'Projeto 04', category: 'Campanha', year: '2024', image: `${A}lines-02.webp`, featured: false },
  { id: 5, title: 'Projeto 05', category: 'Conteúdo recorrente', year: '2024', image: `${A}lines-04.webp`, featured: false },
  { id: 6, title: 'Projeto 06', category: 'Produção mobile', year: '2024', image: `${A}lines-06.webp`, featured: true },
]

const services = [
  ['01', 'Produção Mobile', 'Seja um evento, aniversário, after, reel ou vídeo para registrar a vida, capturamos instantes que merecem ser sentidos e lembrados.', 'icon-camera.png'],
  ['02', 'Mídias Sociais', 'Planejamos, criamos e impulsionamos campanhas completas para sua marca crescer, com estratégia, constância e criatividade.', 'icon-sparks.png'],
  ['03', 'One Sessions', 'Cobertura mobile de eventos, shows e experiências. Captamos a energia do momento e entregamos vídeos rápidos e impactantes para o mesmo dia.', 'icon-music.png'],
  ['04', 'Conteúdo Recorrente', 'Geramos presença constante para sua marca através de conteúdo frequente, estratégico e com estética forte. Sua marca viva todos os dias.', 'icon-bolt.png'],
]

const clients = ['ALLURE', 'INTERDRINKS', 'CEASA', 'TORK', 'FITOSSÊNCIA', 'VALOR REAL', '180 BPM', 'MAD BRAZIL', 'CONEC TOWN']

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  const closeMenu = () => setMenuOpen(false)

  return <>
    <GlobalStyle />
    <Page id="top">
      <Header>
        <Logo href="#top" onClick={closeMenu} aria-label="ONE FRAME">
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
        <MenuButton onClick={() => setMenuOpen(v => !v)} aria-label="Abrir menu"><i/><i/></MenuButton>
      </Header>

      <main>
        <Hero>
          <HeroBg />
          <Icon className="hero-arrow" src={`${A}icon-arrow.png`} $size={70} $top="18%" $right="8%" />
          <Icon className="hero-bolt" src={`${A}icon-bolt.png`} $size={72} $top="35%" $right="3%" />
          <Icon className="hero-crown" src={`${A}icon-crown.png`} $size={92} $bottom="11%" $right="7%" />
          <HeroInner>
            <MiniLogo>ONE<br /><b>FRAME</b></MiniLogo>
            <HeroTitle>CADA<br />FRAME<br /><em>IMPORTA</em></HeroTitle>
            <HeroText>Studio Mobile onde criamos vídeos<br />que geram presença real.</HeroText>
            <PrimaryButton href="#contato">FALE CONOSCO <span>↗</span></PrimaryButton>
          </HeroInner>
          <PhoneFrame><div className="phone-camera"/><div className="phone-inner"><span>ONE FRAME</span><small>STUDIO MOBILE</small></div></PhoneFrame>
        </Hero>

        <RedBand><span>01</span><b>ONE FRAME</b><span>STUDIO MOBILE</span><span>CURITIBA / BR</span></RedBand>

        <About id="sobre">
          <AboutGraphic>
            <Icon src={`${A}icon-headphones.png`} $size={76} $top="6%" $left="7%" />
            <Icon src={`${A}icon-dots.png`} $size={60} $top="15%" $right="4%" />
            <AboutMark>ONE<br /><span>FRA</span><br />ME</AboutMark>
            <Icon src={`${A}icon-fire.png`} $size={85} $bottom="8%" $left="6%" />
          </AboutGraphic>
          <AboutCopy>
            <SectionLabel>02 / SOBRE NÓS</SectionLabel>
            <h2>Somos a produtora<br />mobile que decidiu<br /><em>fazer diferente.</em></h2>
            <p>Nada de vídeos genéricos, nada de conteúdo sem alma. Aqui a gente cria material rápido, com personalidade, estética forte e aquela energia que faz o público parar de rolar o feed.</p>
            <p>Nosso trabalho é simples: fazer sua marca aparecer do jeito certo, na hora certa.</p>
            <p>Se você quer conteúdo que prende atenção, gera presença e faz sua marca parecer viva, é aqui que começa.</p>
            <a href="#contato" className="text-link">Bora dar um upgrade na forma como o mundo vê você? <span>↗</span></a>
          </AboutCopy>
        </About>

        <Services id="servicos">
          <ServicesHead>
            <Icon src={`${A}icon-sparks.png`} $size={70} $top="-25px" $left="2%" />
            <Icon src={`${A}icon-question.png`} $size={50} $top="40px" $right="4%" />
            <SectionLabel>03 / SERVIÇOS</SectionLabel>
            <h2>O QUE VOCÊ<br /><em>PROCURA?</em></h2>
          </ServicesHead>
          <ServiceGrid>
            {services.map(([number, title, description, icon]) => <ServiceCard key={number}>
              <div className="service-top"><span>{number}</span><img src={`${A}${icon}`} alt="" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="plus">+</span>
            </ServiceCard>)}
          </ServiceGrid>
        </Services>

        <Sessions id="sessions">
          <SessionVisual>
            <img src={`${A}lines-03.webp`} alt="" />
            <div className="session-overlay" />
            <Icon src={`${A}icon-camera.png`} $size={150} $bottom="12%" $left="10%" $invert />
            <span>ONE<br /><b>SESSIONS</b></span>
          </SessionVisual>
          <SessionCopy>
            <SectionLabel>04 / ONE SESSIONS</SectionLabel>
            <h2>O momento<br /><em>não espera.</em></h2>
            <p>Cobertura mobile de eventos, shows e experiências. Captamos a energia do momento e entregamos vídeos rápidos e impactantes para o mesmo dia.</p>
            <PrimaryButton href="#contato">QUERO UMA ONE SESSION <span>↗</span></PrimaryButton>
          </SessionCopy>
        </Sessions>

        <Clients>
          <ClientsHead><SectionLabel>05 / CLIENTES</SectionLabel><h2>QUEM JÁ<br /><em>VIVEU O FRAME.</em></h2></ClientsHead>
          <ClientGrid>{clients.map(client => <span key={client}>{client}</span>)}</ClientGrid>
          <Icon src={`${A}icon-crown.png`} $size={90} $bottom="-15px" $right="4%" />
        </Clients>

        <Projects id="projetos">
          <ProjectsHead><SectionLabel>06 / NOSSOS TRABALHOS</SectionLabel><h2>NOSSOS<br /><em>TRABALHOS:</em></h2><Icon src={`${A}icon-sparks.png`} $size={65} $top="10px" $right="7%" /></ProjectsHead>
          <ProjectGrid>{projects.map((project, i) => <article key={project.id} className={project.featured ? 'featured' : ''}>
            <div className="project-image"><img src={project.image} alt="" /><span>0{i + 1}</span><b>↗</b></div>
            <div className="project-meta"><strong>{project.title}</strong><span>{project.category}</span><small>{project.year}</small></div>
          </article>)}</ProjectGrid>
          <div className="projects-cta"><a href="#contato">VER TODOS OS PROJETOS <span>↗</span></a></div>
        </Projects>

        <Contact id="contato">
          <Icon src={`${A}icon-shaka.png`} $size={110} $top="12%" $left="5%" />
          <Icon src={`${A}icon-exclamation.png`} $size={80} $top="9%" $right="8%" />
          <Icon src={`${A}icon-music.png`} $size={90} $bottom="10%" $right="8%" />
          <SectionLabel>07 / FALE CONOSCO</SectionLabel>
          <h2>VAMOS FAZER<br /><em>ACONTECER?</em></h2>
          <p>Tem uma ideia, evento, marca ou história para colocar em movimento?</p>
          <PrimaryButton href="mailto:hello@oneframe.com.br">FALE COM A GENTE <span>↗</span></PrimaryButton>
        </Contact>
      </main>

      <Footer><div><b>ONE<br />FRAME</b><span>Studio Mobile onde criamos vídeos<br />que geram presença real.</span></div><nav><a href="#sobre">sobre</a><a href="#servicos">serviços</a><a href="#projetos">trabalhos</a><a href="#contato">contato</a></nav><small>© {new Date().getFullYear()} ONE FRAME<br />Curitiba — Brasil</small></Footer>
    </Page>
  </>
}

const Page = styled.div`background:#f7f5ef;color:#080808;overflow:hidden;`
const Header = styled.header`position:fixed;z-index:100;top:0;left:0;width:100%;height:76px;padding:12px 4vw;display:flex;align-items:center;justify-content:space-between;background:rgba(247,245,239,.96);color:#080808;border-bottom:2px solid #080808;backdrop-filter:blur(8px);`
const Logo = styled.a`display:flex;align-items:center;gap:8px;font-family:Impact,'Arial Black',sans-serif;font-size:17px;line-height:.78;letter-spacing:-.05em;text-transform:uppercase;img{width:35px;height:35px;object-fit:contain;}`
const Nav = styled.nav<{ $open:boolean }>`display:flex;gap:34px;font-family:Arial,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;a{color:#080808}a:hover{color:#ef1b14;text-decoration:underline}@media(max-width:800px){position:fixed;top:76px;left:0;right:0;background:#080808;padding:25px 5vw;display:${p=>p.$open?'flex':'none'};flex-direction:column;gap:18px;font-size:15px;a{color:#fff}a:hover{color:#ef1b14}}`
const HeaderContact = styled.a`border:2px solid #080808;border-radius:999px;padding:9px 17px;font-size:10px;font-weight:900;letter-spacing:.08em;color:#080808;&:hover{background:#080808;color:#fff}@media(max-width:800px){display:none}`
const MenuButton = styled.button`display:none;background:none;border:0;padding:10px;@media(max-width:800px){display:grid;gap:5px}i{display:block;width:26px;height:3px;background:#080808}`
const Hero = styled.section`min-height:820px;background:#f7f5ef;color:#080808;position:relative;overflow:hidden;padding:140px 5vw 80px;display:flex;align-items:center;border-bottom:2px solid #080808;@media(max-width:900px){flex-direction:column;align-items:flex-start;padding-top:120px}`
const HeroBg = styled.div`position:absolute;inset:0;background-image:radial-gradient(circle at 20% 70%,rgba(239,27,20,.12) 0 8%,transparent 9%),radial-gradient(circle at 80% 30%,rgba(239,27,20,.1) 0 11%,transparent 12%);opacity:.9;`
const HeroInner = styled.div`position:relative;z-index:2;width:47%;min-width:430px;@media(max-width:900px){width:100%;min-width:0}`
const MiniLogo = styled.div`font-family:Impact,'Arial Black',sans-serif;font-size:22px;line-height:.72;margin-bottom:24px;transform:rotate(-2deg);color:#080808;b{font-size:17px;color:#ef1b14}`
const HeroTitle = styled.h1`font-family:Impact,'Arial Black',sans-serif;font-size:clamp(82px,10vw,155px);line-height:.78;letter-spacing:-.07em;margin:0;text-transform:uppercase;color:#080808;text-shadow:4px 4px 0 rgba(239,27,20,.18);em{font-style:normal;color:#ef1b14}`
const HeroText = styled.p`font-size:14px;line-height:1.2;margin:30px 0 18px;font-weight:700;max-width:390px;`
const PrimaryButton = styled.a`display:inline-flex;align-items:center;gap:24px;background:#ef1b14;color:#fff;border:2px solid #080808;border-radius:999px;padding:13px 22px;font-size:10px;font-weight:900;letter-spacing:.08em;box-shadow:4px 5px 0 #080808;transition:.2s;&:hover{transform:translate(-2px,-2px);box-shadow:7px 8px 0 #080808}span{font-size:16px}`
const PhoneFrame = styled.div`position:absolute;z-index:2;right:6%;top:18%;width:min(49vw,620px);height:min(32vw,390px);background:#fff;border:4px solid #080808;border-radius:35px;box-shadow:12px 14px 0 rgba(239,27,20,.28);transform:rotate(-1deg);overflow:hidden;@media(max-width:900px){position:relative;right:auto;top:auto;width:90%;height:300px;margin:50px auto 0}.phone-camera{position:absolute;left:10px;top:50%;transform:translateY(-50%);width:20px;height:70px;border-radius:12px;background:#080808}.phone-inner{position:absolute;inset:15px;background:#ef1b14;color:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:Impact,'Arial Black';font-size:clamp(25px,4vw,65px);line-height:.75;letter-spacing:-.06em}.phone-inner small{font-family:Arial;font-size:9px;letter-spacing:.25em;margin-top:18px;color:#fff}`
const RedBand = styled.div`background:#080808;color:#fff;display:flex;justify-content:space-between;gap:20px;padding:15px 5vw;border-block:2px solid #080808;font-size:10px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;span:nth-child(2){color:#ef1b14}@media(max-width:600px){flex-wrap:wrap}`
const About = styled.section`display:grid;grid-template-columns:1fr 1.25fr;min-height:720px;background:#f7f5ef;color:#080808;border-bottom:2px solid #080808;@media(max-width:800px){grid-template-columns:1fr}`
const AboutGraphic = styled.div`position:relative;min-height:600px;background:#ef1b14;overflow:hidden;&:after{content:'';position:absolute;inset:0;background:url('${A}lines-01.webp') center/cover;opacity:.18;mix-blend-mode:multiply}.icon{z-index:2}`
const AboutMark = styled.div`position:absolute;z-index:2;left:50%;top:50%;transform:translate(-50%,-50%) rotate(-5deg);font-family:Impact,'Arial Black',sans-serif;font-size:clamp(90px,12vw,180px);line-height:.65;text-align:center;color:#fff;letter-spacing:-.09em;text-shadow:4px 4px 0 #080808;span{color:#080808}`
const AboutCopy = styled.div`padding:100px 8vw 90px;max-width:800px;h2{font-family:Impact,'Arial Black',sans-serif;font-size:clamp(55px,6vw,90px);line-height:.82;letter-spacing:-.06em;text-transform:uppercase;margin:22px 0 38px;color:#080808}em{font-family:Georgia,serif;font-weight:400;text-transform:none;letter-spacing:-.08em;color:#ef1b14}p{font-size:16px;line-height:1.25;max-width:560px}.text-link{display:block;margin-top:35px;font-weight:900;font-size:13px;text-decoration:underline;color:#080808}.text-link span{margin-left:8px;color:#ef1b14}`
const SectionLabel = styled.span`font-size:9px;font-weight:900;letter-spacing:.18em;text-transform:uppercase;opacity:.65;`
const Icon = styled.img<{ $size:number;$top?:string;$right?:string;$bottom?:string;$left?:string;$invert?:boolean }>`position:absolute;width:${p=>p.$size}px;height:auto;top:${p=>p.$top||'auto'};right:${p=>p.$right||'auto'};bottom:${p=>p.$bottom||'auto'};left:${p=>p.$left||'auto'};z-index:3;object-fit:contain;${p=>p.$invert?'filter:invert(1);':''}`
const Services = styled.section`position:relative;background:#f7f5ef;color:#080808;padding:110px 5vw 125px;border-bottom:2px solid #080808;`
const ServicesHead = styled.div`position:relative;text-align:center;margin:0 auto 65px;h2{font-family:Impact,'Arial Black',sans-serif;font-size:clamp(62px,8vw,115px);line-height:.78;letter-spacing:-.07em;margin:20px 0;text-transform:uppercase;color:#080808}em{font-family:Georgia,serif;font-weight:400;text-transform:none;color:#ef1b14}`
const ServiceGrid = styled.div`display:grid;grid-template-columns:repeat(4,1fr);gap:14px;max-width:1250px;margin:auto;@media(max-width:1000px){grid-template-columns:repeat(2,1fr)}@media(max-width:600px){grid-template-columns:1fr}`
const ServiceCard = styled.article`position:relative;background:#fff;min-height:310px;padding:22px;border:2px solid #080808;border-radius:10px;box-shadow:6px 7px 0 #ef1b14;overflow:hidden;.service-top{display:flex;justify-content:space-between;align-items:start;color:#ef1b14;font-size:11px;font-weight:900}.service-top img{width:46px;height:46px;object-fit:contain;filter:brightness(0) saturate(100%) invert(18%) sepia(98%) saturate(5000%) hue-rotate(356deg) brightness(94%) contrast(94%)}h3{font-family:Impact,'Arial Black',sans-serif;text-transform:uppercase;font-size:35px;line-height:.85;letter-spacing:-.05em;margin:55px 0 20px;color:#080808}p{font-size:12px;line-height:1.25;max-width:260px;color:#080808}.plus{position:absolute;right:20px;bottom:14px;color:#ef1b14;font-size:27px}`
const Sessions = styled.section`display:grid;grid-template-columns:1fr 1fr;background:#080808;color:#fff;min-height:650px;border-bottom:2px solid #080808;@media(max-width:800px){grid-template-columns:1fr}`
const SessionVisual = styled.div`position:relative;min-height:650px;overflow:hidden;background:#ef1b14;img{width:100%;height:100%;object-fit:cover;filter:contrast(1.15);opacity:.72}.session-overlay{position:absolute;inset:0;background:#ef1b14;mix-blend-mode:multiply;opacity:.55}span{position:absolute;left:10%;top:15%;z-index:2;font-family:Impact,'Arial Black';font-size:clamp(60px,9vw,130px);line-height:.7;letter-spacing:-.08em;color:#fff;transform:rotate(-4deg);text-shadow:4px 4px 0 #080808}b{color:#080808}`
const SessionCopy = styled.div`padding:100px 9vw;display:flex;flex-direction:column;justify-content:center;background:#080808;color:#fff;h2{font-family:Impact,'Arial Black',sans-serif;font-size:clamp(65px,7vw,105px);line-height:.78;letter-spacing:-.07em;text-transform:uppercase;margin:22px 0 35px}em{font-family:Georgia,serif;font-weight:400;text-transform:none;color:#ef1b14}p{font-size:17px;line-height:1.25;max-width:480px;margin:0 0 35px;color:#fff}`
const Clients = styled.section`position:relative;background:#f7f5ef;color:#080808;padding:90px 6vw 110px;border-block:2px solid #080808;overflow:hidden;`
const ClientsHead = styled.div`text-align:center;h2{font-family:Impact,'Arial Black',sans-serif;font-size:clamp(58px,7vw,100px);line-height:.78;letter-spacing:-.07em;margin:20px 0 65px}em{font-family:Georgia,serif;font-weight:400;text-transform:none;color:#ef1b14}`
const ClientGrid = styled.div`max-width:1050px;margin:auto;display:grid;grid-template-columns:repeat(3,1fr);gap:34px 70px;align-items:center;text-align:center;font-family:Impact,'Arial Black',sans-serif;font-size:clamp(17px,2vw,28px);letter-spacing:-.03em;color:#080808;@media(max-width:600px){grid-template-columns:repeat(2,1fr);gap:25px}`
const Projects = styled.section`position:relative;background:#f7f5ef;color:#080808;padding:120px 5vw 150px;border-bottom:2px solid #080808;`
const ProjectsHead = styled.div`position:relative;text-align:center;margin-bottom:75px;h2{font-family:Impact,'Arial Black',sans-serif;font-size:clamp(70px,9vw,125px);line-height:.75;letter-spacing:-.07em;margin:20px 0;text-transform:uppercase}em{font-family:Georgia,serif;font-weight:400;text-transform:none;color:#ef1b14}`
const ProjectGrid = styled.div`max-width:1250px;margin:auto;display:grid;grid-template-columns:repeat(12,1fr);gap:55px 20px;article{grid-column:span 5}.featured{grid-column:span 7}.project-image{position:relative;aspect-ratio:1.45;overflow:hidden;border:2px solid #080808;background:#ef1b14;box-shadow:6px 7px 0 #ef1b14}.project-image img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.15);transition:.6s}.project-image:hover img{filter:grayscale(.15);transform:scale(1.05)}.project-image span{position:absolute;top:12px;left:14px;font-size:10px;letter-spacing:.15em;color:#fff;background:#080808;padding:4px 6px}.project-image b{position:absolute;right:14px;bottom:8px;color:#ef1b14;font-size:25px;text-shadow:2px 2px 0 #080808}.project-meta{display:grid;grid-template-columns:1fr auto;padding:12px 0;border-bottom:1px solid #080808;text-transform:uppercase;font-size:10px}.project-meta strong{font-size:12px}.project-meta span{grid-column:1;color:#555;margin-top:4px}.project-meta small{grid-row:1/3;grid-column:2;color:#555}@media(max-width:800px){article,.featured{grid-column:span 12!important}}`
const Contact = styled.section`position:relative;min-height:720px;background:#ef1b14;color:#080808;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:100px 5vw;overflow:hidden;border-top:2px solid #080808;h2{font-family:Impact,'Arial Black',sans-serif;font-size:clamp(78px,11vw,160px);line-height:.72;letter-spacing:-.08em;margin:22px 0 30px;text-transform:uppercase}em{font-family:Georgia,serif;font-weight:400;text-transform:none;color:#fff}.PrimaryButton{background:#080808;color:#fff;border-color:#080808;box-shadow:4px 5px 0 rgba(255,255,255,.65)}.PrimaryButton:hover{background:#fff;color:#080808;box-shadow:7px 8px 0 #080808}.p{max-width:450px}`
const Footer = styled.footer`background:#ef1b14;color:#080808;padding:55px 5vw 25px;display:grid;grid-template-columns:1.5fr 1fr auto;gap:40px;border-top:2px solid #080808;footer{font-size:11px}b{font-family:Impact,'Arial Black';font-size:38px;line-height:.7;color:#080808}span{display:block;margin-top:20px;color:#080808;font-size:11px;line-height:1.3}nav{display:flex;flex-direction:column;gap:10px;text-transform:uppercase;font-size:10px;font-weight:700}nav a:hover{color:#fff}small{font-size:9px;color:#080808;line-height:1.5;text-align:right}@media(max-width:700px){grid-template-columns:1fr;small{text-align:left}}`
