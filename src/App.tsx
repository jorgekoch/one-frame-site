import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './styles/global'

const A = '/assets/'
const RED = '#ef1b14'
const BLACK = '#090909'
const PAPER = '#f4f1e9'
const INK = '#151515'

const services = [
  ['01', 'PRODUÇÃO MOBILE', 'Seja um evento, um aniversário, um after ou um vídeo para registrar a vida, capturamos instantes que merecem ser sentidos e lembrados.', 'icon-camera.png'],
  ['02', 'MÍDIAS SOCIAIS', 'Planejamos, criamos e impulsionamos campanhas completas para sua marca crescer, com estratégia, constância e criatividade.', 'icon-sparks.png'],
  ['03', 'ONE SESSIONS', 'Cobertura mobile de eventos, shows e experiências. Captamos a energia do momento e entregamos vídeos rápidos e impactantes.', 'icon-bolt.png'],
  ['04', 'CONTEÚDO RECORRENTE', 'Geramos presença constante para sua marca através de conteúdo frequente, estratégico e com estética forte.', 'icon-fire.png'],
] as const

const clients = [
  ['allure.', 'word'], ['INTERDRINKS', 'word'], ['✦ CEASA', 'word'], ['TORK', 'heavy'],
  ['FITOSSÊNCIA', 'word'], ['VR VALOR REAL', 'word'], ['180 bpm', 'word'], ['MAD BRAZIL', 'heavy'], ['CONEC TOWN', 'word'],
]

const works = [
  ['01', 'lines-01.webp', 'EVENTO / PRODUÇÃO'],
  ['02', 'lines-02.webp', 'PRODUÇÃO MOBILE'],
  ['03', 'lines-03.webp', 'ONE SESSIONS'],
  ['04', 'lines-04.webp', 'CONTEÚDO'],
  ['05', 'lines-05.webp', 'MÍDIAS SOCIAIS'],
  ['06', 'lines-06.webp', 'PRODUÇÃO MOBILE'],
]

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <GlobalStyle />
      <Page id="top">
        <Header>
          <Logo href="#top" onClick={closeMenu} aria-label="One Frame">
            <LogoSymbol src={`${A}logo-symbol-black.png`} alt="" />
            <LogoWords><span>ONE</span><strong>FRAME</strong></LogoWords>
          </Logo>
          <Nav $open={menuOpen}>
            <a href="#sobre" onClick={closeMenu}>SOBRE NÓS</a>
            <a href="#servicos" onClick={closeMenu}>SERVIÇOS</a>
            <a href="#sessions" onClick={closeMenu}>ONE SESSIONS</a>
            <a href="#trabalhos" onClick={closeMenu}>TRABALHOS</a>
            <a href="#contato" onClick={closeMenu}>CONTATO</a>
            <Socials><span>◎</span><span>◉</span></Socials>
          </Nav>
          <MenuButton onClick={() => setMenuOpen(value => !value)} aria-label="Abrir menu">
            <i /><i /><i />
          </MenuButton>
        </Header>

        <main>
          <Hero>
            <HeroDecor className="hero-arrow"><img src={`${A}icon-arrow.png`} alt="" /></HeroDecor>
            <HeroDecor className="hero-bolt"><img src={`${A}icon-bolt.png`} alt="" /></HeroDecor>
            <HeroDecor className="hero-crown"><img src={`${A}icon-crown.png`} alt="" /></HeroDecor>

            <HeroCopy>
              <MiniLogo><span>ONE</span><b>FRAME</b></MiniLogo>
              <HeroTitle>CADA<br />FRAME<br /><em>IMPORTA</em></HeroTitle>
              <HeroText>Studio Mobile onde criamos vídeos<br />que geram <b>presença real.</b></HeroText>
              <CTA href="#contato">FALE CONOSCO <span>→</span></CTA>
            </HeroCopy>

            <HeroPhone aria-label="One Frame Studio Mobile">
              <PhoneTop><span>ONE FRAME</span><b>REC ●</b></PhoneTop>
              <PhoneScreen>
                <PhoneTexture />
                <PhoneLogo><span>ONE</span><strong>FRAME</strong></PhoneLogo>
                <PhoneMeta>STUDIO MOBILE / CURITIBA</PhoneMeta>
              </PhoneScreen>
              <PhoneButton />
            </HeroPhone>
          </Hero>

          <HeroInfo>
            <span>01</span><b>ONE FRAME</b><span>STUDIO MOBILE</span><span>CURITIBA / BR</span>
          </HeroInfo>

          <About id="sobre">
            <AboutArt>
              <Brush />
              <img className="camera" src={`${A}icon-camera.png`} alt="" />
              <img className="headphones" src={`${A}icon-headphones.png`} alt="" />
              <img className="fire" src={`${A}icon-fire.png`} alt="" />
              <AboutMark>ONE<br /><em>FRA</em><br />ME</AboutMark>
            </AboutArt>
            <AboutCopy>
              <SectionLabel>02 / SOBRE NÓS</SectionLabel>
              <h2>Somos a produtora<br />mobile que decidiu<br /><em>fazer diferente.</em></h2>
              <p>Nada de vídeos genéricos, nada de conteúdos sem alma. Aqui a gente cria material rápido, com personalidade, estética forte e aquela energia que faz o público parar e rolar o feed.</p>
              <p>Nosso trabalho é simples: fazer sua marca aparecer <b>do jeito certo, na hora certa.</b></p>
              <p>Se você quer conteúdo que prende atenção, gera presença e faz sua marca parecer viva, é aqui que começa.</p>
              <TextLink href="#contato">Bora dar um <b>upgrade</b> na forma como o mundo vê você? <span>→</span></TextLink>
            </AboutCopy>
          </About>

          <Services id="servicos">
            <ServicesHeader>
              <img className="spark" src={`${A}icon-sparks.png`} alt="" />
              <SectionLabel>03 / SERVIÇOS</SectionLabel>
              <h2>O QUE <em>VOCÊ</em><br />PROCURA?</h2>
            </ServicesHeader>
            <ServiceGrid>
              {services.map(([number, title, description, icon]) => (
                <ServiceCard key={number}>
                  <ServiceNumber>{number}</ServiceNumber>
                  <ServiceIcon src={`${A}${icon}`} alt="" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Plus>+</Plus>
                </ServiceCard>
              ))}
            </ServiceGrid>
          </Services>

          <Sessions id="sessions">
            <SessionInner>
              <SessionTitle>ONE<br /><em>SESSIONS</em></SessionTitle>
              <SessionIntro>Cobertura mobile de eventos, shows<br />e experiências com entrega rápida<br />e impacto real.</SessionIntro>
              <SessionFeature><img src={`${A}icon-bolt.png`} alt="" /><span>Entrega<br />no mesmo dia</span></SessionFeature>
              <SessionFeature><img src={`${A}icon-camera.png`} alt="" /><span>Vídeos curtos<br />e impactantes</span></SessionFeature>
              <SessionFeature><img src={`${A}icon-fire.png`} alt="" /><span>Energia real<br />do momento</span></SessionFeature>
              <SessionFeature><img src={`${A}icon-headphones.png`} alt="" /><span>Conteúdo<br />que viraliza</span></SessionFeature>
              <SessionCTA href="#contato">SAIBA MAIS <span>→</span></SessionCTA>
            </SessionInner>
          </Sessions>

          <Clients>
            <SectionLabel>04 / CLIENTES</SectionLabel>
            <h2>QUEM JÁ<br /><em>VIVEU O FRAME.</em></h2>
            <ClientGrid>
              {clients.map(([name, weight]) => <Client key={name} $weight={weight}>{name}</Client>)}
            </ClientGrid>
          </Clients>

          <Works id="trabalhos">
            <WorksHeader>
              <div><SectionLabel>05 / PORTFÓLIO</SectionLabel><h2>NOSSOS <em>TRABALHOS:</em></h2></div>
              <WorksButton href="#contato">VER TODOS <span>→</span></WorksButton>
            </WorksHeader>
            <WorkGrid>
              {works.map(([number, image, category]) => (
                <WorkCard key={number}>
                  <WorkImage>
                    <img src={`${A}${image}`} alt="" />
                    <WorkShade />
                    <Play>▶</Play>
                    <WorkNumber>{number}</WorkNumber>
                  </WorkImage>
                  <WorkMeta><strong>ONE FRAME</strong><span>{category}</span></WorkMeta>
                </WorkCard>
              ))}
            </WorkGrid>
          </Works>

          <Contact id="contato">
            <ContactDecor><img src={`${A}icon-crown.png`} alt="" /></ContactDecor>
            <div>
              <SectionLabel>06 / CONTATO</SectionLabel>
              <h2>VAMOS CRIAR ALGO<br /><em>INCRÍVEL JUNTOS?</em></h2>
            </div>
            <ContactCopy>Fale com a OneFrame e descubra como<br />podemos transformar sua marca com<br />conteúdo que gera presença real.</ContactCopy>
            <CTA href="mailto:oneframebr@gmail.com">FALE CONOSCO <span>→</span></CTA>
            <ContactCamera><img src={`${A}icon-camera.png`} alt="" /></ContactCamera>
          </Contact>
        </main>

        <Footer>
          <FooterLogo><LogoWords><span>ONE</span><strong>FRAME</strong></LogoWords></FooterLogo>
          <FooterItem><b>✉</b><span>oneframebr@gmail.com</span></FooterItem>
          <FooterItem><b>◉</b><span>(41) 9 9662-8438</span></FooterItem>
          <FooterItem><span>OneFrame Studio Criativo<br />Luen Lopes de Araujo</span></FooterItem>
          <FooterItem><span>CNPJ: 63.264.511/0001-30</span></FooterItem>
          <FooterBolt>ϟ</FooterBolt>
        </Footer>
      </Page>
    </>
  )
}

const Page = styled.div`
  min-height:100vh;
  overflow:hidden;
  background:${PAPER};
  color:${INK};
`

const Header = styled.header`
  position:fixed;
  inset:0 0 auto;
  z-index:1000;
  height:82px;
  padding:10px clamp(24px,5vw,84px);
  display:flex;
  align-items:center;
  justify-content:space-between;
  background:${BLACK};
  color:#fff;
  overflow:visible;
  &::after{
    content:'';
    position:absolute;
    z-index:-1;
    left:-2%; right:-2%; bottom:-30px;
    height:42px;
    background:#fff;
    clip-path:polygon(0 8%,4% 18%,8% 12%,12% 25%,17% 11%,22% 20%,27% 8%,32% 24%,38% 13%,43% 22%,49% 9%,55% 18%,61% 12%,67% 24%,73% 10%,79% 19%,84% 8%,90% 18%,95% 11%,100% 17%,100% 52%,96% 58%,92% 53%,88% 62%,83% 51%,78% 59%,72% 50%,66% 64%,60% 52%,54% 61%,48% 49%,42% 59%,36% 51%,30% 62%,24% 50%,18% 61%,12% 49%,6% 58%,0 47%);
    filter:drop-shadow(0 4px 3px rgba(0,0,0,.25));
  }
`

const Logo = styled.a`display:flex;align-items:center;gap:9px;color:#fff;position:relative;z-index:2;`
const LogoSymbol = styled.img`width:45px;height:45px;object-fit:contain;filter:invert(1) grayscale(1) brightness(3);`
const LogoWords = styled.div`font-family:Impact,'Arial Black',sans-serif;font-size:16px;line-height:.72;letter-spacing:-.06em;display:flex;flex-direction:column;span{color:#fff}strong{color:${RED};font-weight:900;}`
const Nav = styled.nav<{ $open:boolean }>`
  display:flex;align-items:center;gap:clamp(22px,3.1vw,52px);
  a{font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:900;letter-spacing:.06em;color:#fff;white-space:nowrap;transition:.2s;&:hover{color:${RED}}}
  @media(max-width:800px){
    position:fixed;left:0;right:0;top:82px;padding:30px 7vw 36px;background:${BLACK};
    flex-direction:column;align-items:flex-start;gap:22px;display:${p=>p.$open?'flex':'none'};
    a{font-size:13px;}
  }
`
const Socials = styled.div`display:flex;gap:14px;align-items:center;font-size:20px;margin-left:8px;`
const MenuButton = styled.button`display:none;background:none;border:0;padding:10px;@media(max-width:800px){display:flex;flex-direction:column;gap:5px}i{width:25px;height:3px;background:#fff;display:block}`

const Hero = styled.section`
  position:relative;min-height:760px;padding:140px clamp(36px,7vw,116px) 62px;
  display:flex;align-items:center;justify-content:space-between;gap:50px;overflow:hidden;background:${PAPER};
  &::before{content:'';position:absolute;inset:0;opacity:.16;pointer-events:none;background-image:radial-gradient(#777 .65px,transparent .65px);background-size:5px 5px;}
  @media(max-width:900px){min-height:auto;padding-top:150px;padding-bottom:80px;flex-direction:column;align-items:flex-start;}
`
const HeroCopy = styled.div`position:relative;z-index:4;width:45%;max-width:620px;@media(max-width:900px){width:100%;}`
const MiniLogo = styled.div`font-family:Impact,'Arial Black',sans-serif;font-size:21px;line-height:.72;display:flex;flex-direction:column;margin-bottom:15px;transform:translateX(4px);span{color:${BLACK}}b{color:${RED};font-size:16px}`
const HeroTitle = styled.h1`margin:0;font-family:Impact,'Arial Black',sans-serif;font-size:clamp(88px,9.6vw,164px);line-height:.72;letter-spacing:-.065em;text-transform:uppercase;text-shadow:4px 4px 0 rgba(239,27,20,.22);em{font-style:normal;color:${RED}}`
const HeroText = styled.p`font-size:14px;line-height:1.18;font-weight:700;margin:30px 0 22px;max-width:330px;`
const CTA = styled.a`display:inline-flex;align-items:center;gap:30px;padding:13px 20px;background:${RED};color:#fff;border:2px solid ${BLACK};border-radius:5px;font-size:10px;font-weight:900;letter-spacing:.05em;box-shadow:3px 4px 0 ${BLACK};transition:.2s;&:hover{transform:translateY(-2px);box-shadow:5px 6px 0 ${BLACK}}span{font-size:18px}`

const HeroPhone = styled.div`
  position:relative;z-index:4;width:min(29vw,390px);aspect-ratio:.56;min-width:270px;
  border:4px solid ${BLACK};border-radius:39px;background:#0c0c0c;padding:8px;box-shadow:12px 15px 0 rgba(239,27,20,.27);transform:rotate(3deg);margin-right:5vw;
  @media(max-width:900px){width:min(72vw,360px);margin:45px auto 0;align-self:center;}
`
const PhoneTop = styled.div`height:28px;border-radius:25px 25px 0 0;background:#f7f7f7;color:${BLACK};display:flex;justify-content:space-between;align-items:center;padding:0 11px;font-size:6px;font-weight:900;letter-spacing:.12em;`
const PhoneScreen = styled.div`position:relative;height:calc(100% - 45px);overflow:hidden;background:${RED};display:flex;align-items:center;justify-content:center;`
const PhoneTexture = styled.div`position:absolute;inset:-20%;background-image:url('/assets/lines-03.webp');background-size:cover;background-position:center;mix-blend-mode:multiply;opacity:.5;filter:contrast(1.2);`
const PhoneLogo = styled.div`position:relative;z-index:2;color:#fff;text-align:center;font-family:Impact,'Arial Black',sans-serif;font-size:clamp(42px,5vw,72px);line-height:.68;letter-spacing:-.07em;text-shadow:4px 4px 0 ${BLACK};span{display:block}strong{display:block;color:${BLACK}}`
const PhoneMeta = styled.small`position:absolute;bottom:11px;left:12px;color:#fff;font-size:6px;font-weight:900;letter-spacing:.2em;z-index:2;`
const PhoneButton = styled.div`width:32%;height:5px;border-radius:10px;background:#222;margin:6px auto 0;`
const HeroDecor = styled.div`position:absolute;z-index:3;img{width:100%;height:100%;object-fit:contain;}.hero-arrow{}`

const HeroInfo = styled.div`background:${BLACK};color:#fff;display:flex;justify-content:space-between;align-items:center;padding:12px clamp(36px,7vw,116px);font-size:9px;font-weight:900;letter-spacing:.12em;text-transform:uppercase;position:relative;z-index:5;span:nth-child(3){margin-left:auto;margin-right:18vw}@media(max-width:700px){gap:15px;flex-wrap:wrap;font-size:8px;span:nth-child(3){margin:0}}`

const About = styled.section`position:relative;display:grid;grid-template-columns:45% 55%;gap:4vw;align-items:center;padding:105px clamp(36px,8vw,130px) 95px;background:${PAPER};@media(max-width:850px){grid-template-columns:1fr;padding-top:80px;}`
const AboutArt = styled.div`position:relative;min-height:330px;display:flex;align-items:center;justify-content:center;.camera{position:relative;z-index:2;width:min(72%,390px);filter:grayscale(1) contrast(1.3);mix-blend-mode:multiply}.headphones{position:absolute;width:70px;left:3%;top:0}.fire{position:absolute;width:65px;left:7%;bottom:0}.texture{display:none}`
const Brush = styled.div`position:absolute;width:72%;height:72%;background:${RED};left:10%;top:14%;transform:rotate(-4deg);clip-path:polygon(4% 9%,16% 2%,30% 8%,48% 1%,67% 8%,94% 2%,99% 18%,94% 38%,100% 58%,94% 82%,73% 77%,58% 91%,36% 83%,18% 96%,3% 83%,8% 61%,0 42%,7% 25%);`
const AboutMark = styled.div`position:absolute;z-index:3;right:8%;bottom:5%;font:70px/.68 Impact,'Arial Black',sans-serif;letter-spacing:-.08em;color:#fff;text-shadow:3px 3px 0 ${BLACK};transform:rotate(-8deg);em{font-style:normal;color:${RED}}`
const AboutCopy = styled.div`max-width:650px;h2{font:clamp(44px,5vw,76px)/.82 Impact,'Arial Black',sans-serif;letter-spacing:-.05em;margin:14px 0 28px;text-transform:uppercase;em{font-style:normal;color:${RED}}}p{font-size:14px;line-height:1.32;max-width:620px;margin:0 0 14px}b{font-weight:900}`
const SectionLabel = styled.span`display:inline-block;font-size:9px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;border-bottom:2px solid ${RED};padding-bottom:5px;`
const TextLink = styled.a`display:inline-flex;align-items:center;gap:12px;margin-top:12px;font-size:13px;font-weight:700;border-bottom:2px solid ${BLACK};padding-bottom:5px;span{font-size:19px}`

const Services = styled.section`padding:85px clamp(36px,8vw,130px) 100px;background:${PAPER};position:relative;`
const ServicesHeader = styled.div`position:relative;text-align:center;margin-bottom:50px;.spark{position:absolute;width:55px;left:0;top:5px}h2{font:clamp(52px,6vw,88px)/.78 Impact,'Arial Black',sans-serif;letter-spacing:-.055em;margin:15px 0 0;text-transform:uppercase;em{font-style:normal;color:${RED}}}`
const ServiceGrid = styled.div`display:grid;grid-template-columns:repeat(4,1fr);gap:18px;max-width:1250px;margin:0 auto;@media(max-width:1000px){grid-template-columns:repeat(2,1fr)}@media(max-width:560px){grid-template-columns:1fr}`
const ServiceCard = styled.article`position:relative;min-height:330px;padding:25px 23px 35px;border:2px solid ${BLACK};border-radius:11px;background:#f8f6ef;box-shadow:4px 6px 0 rgba(239,27,20,.45);display:flex;flex-direction:column;.service-top{display:none}h3{font:25px/.9 Impact,'Arial Black',sans-serif;letter-spacing:-.02em;margin:24px 0 15px;text-transform:uppercase}p{font-size:12px;line-height:1.28;margin:0}.plus{position:absolute;right:18px;bottom:12px;font-size:27px;font-weight:300}`
const ServiceNumber = styled.span`font-size:9px;font-weight:900;letter-spacing:.12em;color:${RED}`
const ServiceIcon = styled.img`width:48px;height:48px;object-fit:contain;filter:none;margin-top:8px;`

const Sessions = styled.section`background:${BLACK};color:#fff;padding:34px clamp(36px,7vw,110px);position:relative;overflow:hidden;&::before,&::after{content:'';position:absolute;left:0;right:0;height:27px;background:${PAPER};clip-path:polygon(0 45%,4% 25%,8% 54%,12% 30%,16% 50%,20% 26%,24% 55%,28% 32%,32% 54%,36% 27%,40% 51%,44% 28%,48% 54%,52% 31%,56% 52%,60% 26%,64% 53%,68% 28%,72% 50%,76% 27%,80% 52%,84% 30%,88% 54%,92% 27%,96% 51%,100% 30%,100% 100%,0 100%)}&::before{top:-1px}&::after{bottom:-1px;transform:scaleY(-1)}`
const SessionInner = styled.div`min-height:165px;display:flex;align-items:center;gap:30px;padding:24px 0;position:relative;z-index:2;@media(max-width:1050px){flex-wrap:wrap;justify-content:center}`
const SessionTitle = styled.h2`font:clamp(48px,5vw,76px)/.72 Impact,'Arial Black',sans-serif;letter-spacing:-.06em;margin:0 30px 0 0;min-width:250px;em{font-style:normal;color:${RED}}`
const SessionIntro = styled.p`font-size:12px;line-height:1.25;min-width:220px;margin:0 20px 0 0;`
const SessionFeature = styled.div`display:flex;align-items:center;gap:12px;border-left:1px solid #fff;padding-left:24px;min-width:130px;img{width:35px;height:35px;object-fit:contain;filter:none}span{font-size:10px;font-weight:700;line-height:1.15}`
const SessionCTA = styled.a`margin-left:auto;background:${RED};color:#fff;padding:13px 19px;font-size:9px;font-weight:900;border-radius:4px;display:flex;gap:24px;align-items:center;white-space:nowrap;span{font-size:17px}@media(max-width:1050px){margin-left:0}`

const Clients = styled.section`padding:95px clamp(36px,8vw,130px) 80px;background:${PAPER};text-align:center;h2{font:clamp(48px,5.5vw,80px)/.78 Impact,'Arial Black',sans-serif;letter-spacing:-.05em;margin:14px 0 45px;em{font-style:normal;color:${RED}}}`
const ClientGrid = styled.div`max-width:1120px;margin:auto;display:grid;grid-template-columns:repeat(5,1fr);gap:38px 30px;align-items:center;@media(max-width:850px){grid-template-columns:repeat(3,1fr)}@media(max-width:520px){grid-template-columns:repeat(2,1fr)}`
const Client = styled.span<{ $weight:string }>`font-family:${p=>p.$weight==='heavy'?'Impact':'Arial Black'},Arial,sans-serif;font-size:clamp(15px,1.8vw,25px);font-weight:900;letter-spacing:-.04em;white-space:nowrap;`

const Works = styled.section`padding:75px clamp(36px,7vw,110px) 110px;background:${PAPER};`
const WorksHeader = styled.div`display:flex;justify-content:space-between;align-items:end;max-width:1260px;margin:0 auto 32px;h2{font:clamp(48px,5vw,75px)/.78 Impact,'Arial Black',sans-serif;letter-spacing:-.05em;margin:13px 0 0;em{font-style:normal;color:${RED}}}`
const WorksButton = styled.a`background:${BLACK};color:#fff;padding:12px 18px;font-size:9px;font-weight:900;display:flex;gap:22px;align-items:center;span{color:${RED};font-size:16px}@media(max-width:600px){display:none}`
const WorkGrid = styled.div`display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:1260px;margin:auto;@media(max-width:850px){grid-template-columns:repeat(2,1fr)}@media(max-width:520px){grid-template-columns:1fr}`
const WorkCard = styled.article`min-width:0;`
const WorkImage = styled.div`position:relative;height:220px;overflow:hidden;border:2px solid ${BLACK};background:#111;img{width:100%;height:100%;object-fit:cover;filter:grayscale(1) contrast(1.1);transform:scale(1.03);transition:.4s} &:hover img{transform:scale(1.08)}`
const WorkShade = styled.div`position:absolute;inset:0;background:linear-gradient(135deg,rgba(239,27,20,.1),rgba(0,0,0,.5));mix-blend-mode:multiply;`
const Play = styled.span`position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:42px;height:42px;border-radius:50%;background:#fff;color:${BLACK};display:grid;place-items:center;font-size:13px;padding-left:3px;`
const WorkNumber = styled.span`position:absolute;left:10px;top:8px;color:#fff;font-size:9px;font-weight:900;letter-spacing:.1em;`
const WorkMeta = styled.div`display:flex;justify-content:space-between;gap:10px;padding:10px 3px;font-size:9px;font-weight:900;span{color:#777}`

const Contact = styled.section`position:relative;overflow:hidden;background:${RED};color:#fff;padding:70px clamp(36px,9vw,140px);display:grid;grid-template-columns:1.2fr .8fr auto;gap:30px;align-items:center;min-height:230px;h2{font:clamp(45px,5vw,74px)/.78 Impact,'Arial Black',sans-serif;letter-spacing:-.055em;margin:14px 0 0}h2 em{font-style:normal;color:#fff}.ContactCopy{}@media(max-width:850px){grid-template-columns:1fr;}.ContactCopy{font-size:13px;line-height:1.25;font-weight:700}.ContactCopy br{display:none}`
const ContactDecor = styled.div`position:absolute;left:25px;top:28px;width:75px;img{width:100%;filter:brightness(0) invert(1);}`
const ContactCopy = styled.p`font-size:13px;line-height:1.3;font-weight:700;margin:0;`
const ContactCamera = styled.div`position:absolute;right:30px;bottom:15px;width:85px;img{width:100%;filter:brightness(0);}`

const Footer = styled.footer`background:${BLACK};color:#fff;min-height:78px;padding:17px clamp(25px,5vw,80px);display:flex;align-items:center;justify-content:space-between;gap:25px;font-size:9px;position:relative;@media(max-width:900px){flex-wrap:wrap}.FooterLogo{min-width:90px}`
const FooterLogo = styled.div`min-width:90px;`
const FooterItem = styled.div`display:flex;align-items:center;gap:9px;line-height:1.2;white-space:nowrap;b{font-size:14px}`
const FooterBolt = styled.div`font-size:42px;color:${RED};font-family:Arial Black,sans-serif;line-height:.7;transform:rotate(12deg);`
