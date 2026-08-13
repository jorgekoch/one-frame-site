import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './styles/global'

const A='/assets/'
const RED='#ed1c16'
const BLACK='#090909'
const PAPER='#f5f1e8'
const WHITE='#fffdf7'

const services=[
  ['01','PRODUÇÃO\nMOBILE','Seja um evento, um aniversário, um after ou um vídeo para registrar a vida. Capturamos instantes que merecem ser sentidos e lembrados.','icon-camera.png'],
  ['02','MÍDIAS\nSOCIAIS','Planejamos, criamos e impulsionamos campanhas completas para sua marca crescer. Do tráfego pago à gestão de mídias sociais.','icon-sparks.png'],
  ['03','ONE\nSESSIONS','Cobertura mobile de eventos, shows e experiências. Captamos a energia do momento e entregamos vídeos rápidos e impactantes.','icon-bolt.png'],
  ['04','CONTEÚDO\nRECORRENTE','Geramos presença constante para sua marca através de conteúdo frequente, estratégico e com estética forte.','icon-fire.png'],
] as const

const clients=['allure.','INTERDRINKS 1D','✺ CEASA','TORK','FITOSSÊNCIA','VR VALOR REAL','180 bpm','MAD BRAZIL','CONEC TOWN']
const projects=[
  ['01','Produção mobile','lines-01.webp'],['02','Mídias sociais','lines-02.webp'],['03','One Sessions','lines-03.webp'],
  ['04','Conteúdo recorrente','lines-04.webp'],['05','Campanha','lines-05.webp'],['06','Produção mobile','lines-06.webp']
]

export function App(){
 const [open,setOpen]=useState(false)
 useEffect(()=>{const f=(e:KeyboardEvent)=>e.key==='Escape'&&setOpen(false);addEventListener('keydown',f);return()=>removeEventListener('keydown',f)},[])
 const close=()=>setOpen(false)
 return <><GlobalStyle/><Page id="top">
  <Header>
   <Logo href="#top" onClick={close}><img src={`${A}logo-symbol-black.png`} alt="One Frame"/><b>ONE<br/>FRAME</b></Logo>
   <Nav $open={open}><a href="#sobre" onClick={close}>SOBRE NÓS</a><a href="#servicos" onClick={close}>SERVIÇOS</a><a href="#sessions" onClick={close}>ONE SESSIONS</a><a href="#trabalhos" onClick={close}>TRABALHOS</a><a href="#contato" onClick={close}>CONTATO</a></Nav>
   <Socials><span>◎</span><span>◉</span></Socials><Menu onClick={()=>setOpen(!open)} aria-label="menu"><i/><i/></Menu>
  </Header>
  <main>
   <Hero>
    <HeroDecor src={`${A}icon-sparks.png`} $size={48} $top="12%" $left="3%"/><HeroDecor src={`${A}icon-bolt.png`} $size={52} $top="31%" $right="7%"/><HeroDecor src={`${A}icon-crown.png`} $size={72} $bottom="14%" $right="4%"/><HeroDecor src={`${A}icon-speaker.png`} $size={60} $top="43%" $right="2%"/>
    <HeroCopy><Mini>ONE FRAME</Mini><h1>CADA<br/>FRAME<br/><em>IMPORTA</em></h1><p>Studio Mobile onde criamos vídeos<br/>que geram <strong>presença real.</strong></p><CTA href="#contato">FALE CONOSCO <b>→</b></CTA></HeroCopy>
    <Phone><PhoneBar><span>9:41</span><b>● ● ●</b></PhoneBar><PhonePhoto><PhotoLines/><PhoneLogo>ONE<br/><strong>FRAME</strong></PhoneLogo><PhoneCaption>STUDIO MOBILE / CURITIBA</PhoneCaption></PhonePhoto></Phone>
   </Hero>
   <PaperTear/>
   <About id="sobre"><AboutVisual><Paint/><img src={`${A}icon-headphones.png`} className="head"/><img src={`${A}icon-fire.png`} className="fire"/><CameraMock><Lens/><span>REC</span></CameraMock></AboutVisual><AboutCopy><Eyebrow>02 / SOBRE NÓS</Eyebrow><h2>Somos a produtora mobile que decidiu <em>fazer diferente.</em></h2><p>Nada de vídeos genéricos, nada de conteúdos sem alma. Aqui a gente cria material rápido, com personalidade, estética forte e aquela energia que faz o público parar de rolar o feed.</p><p>Nosso trabalho é simples: fazer sua marca aparecer <strong>do jeito certo, na hora certa.</strong></p><p>Se você quer conteúdo que prende atenção, gera presença e faz sua marca parecer viva, é aqui que começa.</p><TextLink href="#contato">Bora dar um upgrade na forma como o mundo vê você? <b>→</b></TextLink></AboutCopy></About>
   <Services id="servicos"><SectionTitle><Eyebrow>03 / SERVIÇOS</Eyebrow><h2>O QUE <em>VOCÊ</em><br/>PROCURA?</h2></SectionTitle><ServiceGrid>{services.map(([n,t,d,i])=><Service key={n}><div><small>{n}</small><img src={`${A}${i}`} alt=""/></div><h3>{t.split('\n').map((x,j)=><span key={j}>{x}</span>)}</h3><p>{d}</p></Service>)}</ServiceGrid></Services>
   <BlackBand><BandLead><b>ONE<br/><em>SESSIONS</em></b><span>Cobertura mobile de eventos, shows<br/>e experiências com entrega rápida.</span></BandLead><BandItems><div><img src={`${A}icon-bolt.png`}/>Entrega<br/>no mesmo dia</div><div><img src={`${A}icon-camera.png`}/>Vídeos curtos<br/>e impactantes</div><div><img src={`${A}icon-fire.png`}/>Energia real<br/>do momento</div><div><img src={`${A}icon-headphones.png`}/>Conteúdo<br/>que viraliza</div></BandItems><CTA href="#contato">SAIBA MAIS <b>→</b></CTA></BlackBand>
   <Sessions id="sessions"><Eyebrow>04 / ONE SESSIONS</Eyebrow><h2>O momento <em>não espera.</em></h2><p>Cobertura mobile de eventos, shows e experiências. Captamos a energia do momento e entregamos vídeos rápidos e impactantes para o mesmo dia.</p><CTA href="#contato">QUERO UMA ONE SESSION <b>→</b></CTA></Sessions>
   <Clients><SectionTitle><Eyebrow>05 / CLIENTES</Eyebrow><h2>QUEM JÁ<br/><em>VIVEU O FRAME.</em></h2></SectionTitle><ClientGrid>{clients.map(c=><span key={c}>{c}</span>)}</ClientGrid></Clients>
   <Projects id="trabalhos"><SectionTitle><Eyebrow>06 / NOSSOS TRABALHOS</Eyebrow><h2>NOSSOS <em>TRABALHOS:</em></h2></SectionTitle><ProjectGrid>{projects.map(([n,t,img])=><Project key={n}><div><img src={`${A}${img}`} alt=""/><i>▶</i><b>{n}</b></div><strong>{t}</strong></Project>)}</ProjectGrid><ProjectsCTA href="#contato">VER TODOS <b>→</b></ProjectsCTA></Projects>
   <Contact id="contato"><img className="contact-icon crown" src={`${A}icon-crown.png`}/><img className="contact-icon cam" src={`${A}icon-camera.png`}/><h2>VAMOS CRIAR ALGO<br/><em>INCRÍVEL JUNTOS?</em></h2><p>Fale com a OneFrame e descubra como podemos transformar sua marca com conteúdo que gera presença real.</p><CTA href="mailto:oneframebr@gmail.com">FALE CONOSCO <b>→</b></CTA></Contact>
  </main>
  <Footer><Logo href="#top"><img src={`${A}logo-symbol-black.png`} alt=""/><b>ONE<br/>FRAME</b></Logo><div><span>✉</span> oneframebr@gmail.com</div><div><span>◉</span> (41) 9 9662-8438</div><div>OneFrame Studio Criativo<br/>Luen Lopes de Araujo</div><small>CNPJ: 63.264.511/0001-30</small></Footer>
 </Page></>
}

const Page=styled.div`background:${PAPER};color:${BLACK};overflow:hidden;`
const Header=styled.header`position:fixed;z-index:100;top:0;left:0;width:100%;height:76px;padding:8px 4vw;display:flex;align-items:center;background:${BLACK};color:#fff;justify-content:space-between;&:after{content:'';position:absolute;left:0;right:0;bottom:-17px;height:25px;background:url('${A}torn-white-divider.webp') center/100% 100% no-repeat;}`
const Logo=styled.a`display:flex;align-items:center;gap:7px;color:#fff;font:18px/.72 Impact,'Arial Black',sans-serif;letter-spacing:-.06em;z-index:2;img{width:45px;height:45px;object-fit:contain;filter:invert(1)}b{font:inherit}`
const Nav=styled.nav<{ $open:boolean }>`display:flex;gap:28px;margin-left:auto;margin-right:28px;font-size:9px;font-weight:900;letter-spacing:.08em;@media(max-width:850px){display:${p=>p.$open?'flex':'none'};position:absolute;top:76px;left:0;right:0;flex-direction:column;background:${BLACK};padding:28px 6vw;gap:18px;font-size:13px}`
const Socials=styled.div`display:flex;gap:13px;font-size:21px;color:#fff;`
const Menu=styled.button`display:none;border:0;background:transparent;padding:8px;@media(max-width:850px){display:grid;gap:5px}i{display:block;width:25px;height:3px;background:#fff}`
const Hero=styled.section`position:relative;min-height:610px;padding:125px 7vw 70px;display:flex;align-items:center;gap:5vw;background:${PAPER};background-image:radial-gradient(rgba(0,0,0,.08) .7px,transparent .7px);background-size:6px 6px;@media(max-width:850px){padding:120px 7vw 60px;display:block}`
const HeroCopy=styled.div`position:relative;z-index:3;flex:1;max-width:560px;`
const Mini=styled.div`font:22px/.7 Impact,'Arial Black';margin-bottom:24px;transform:rotate(-2deg)`
const HeroTitle=styled.h1`font:clamp(76px,9.5vw,145px)/.76 Impact,'Arial Black',sans-serif;letter-spacing:-.065em;margin:0;text-transform:uppercase;text-shadow:3px 3px 0 rgba(237,28,22,.15);em{font-style:normal;color:${RED}}`
const HeroCopyP=styled.p``
const HeroDecor=styled.img<{ $size:number;$top?:string;$bottom?:string;$left?:string;$right?:string }>`position:absolute;width:${p=>p.$size}px;height:${p=>p.$size}px;object-fit:contain;z-index:2;top:${p=>p.$top||'auto'};bottom:${p=>p.$bottom||'auto'};left:${p=>p.$left||'auto'};right:${p=>p.$right||'auto'}`
const CTA=styled.a`display:inline-flex;align-items:center;gap:24px;background:${RED};color:#fff;border:2px solid ${BLACK};padding:12px 18px;font-size:9px;font-weight:900;letter-spacing:.08em;box-shadow:3px 4px 0 ${BLACK};transition:.2s;&:hover{transform:translate(-2px,-2px);box-shadow:6px 7px 0 ${BLACK}}b{font-size:17px;line-height:.6}`
const Phone=styled.div`width:min(350px,32vw);aspect-ratio:.53;min-width:245px;border:6px solid ${BLACK};border-radius:34px;padding:7px;background:#111;transform:rotate(2deg);box-shadow:10px 13px 0 rgba(237,28,22,.22);position:relative;z-index:3;@media(max-width:850px){width:220px;margin:55px auto 0}`
const PhoneBar=styled.div`height:22px;border-radius:18px 18px 0 0;background:${RED};color:#fff;display:flex;justify-content:space-between;padding:5px 11px;font-size:6px;font-weight:900`
const PhonePhoto=styled.div`height:calc(100% - 22px);background:${RED};position:relative;overflow:hidden;display:grid;place-items:center`
const PhotoLines=styled.div`position:absolute;inset:-20%;background:url('${A}lines-03.webp') center/cover;mix-blend-mode:multiply;opacity:.7;filter:contrast(1.3) brightness(.8)`
const PhoneLogo=styled.div`position:relative;color:#fff;text-align:center;font:clamp(42px,5vw,65px)/.68 Impact,'Arial Black';letter-spacing:-.07em;text-shadow:4px 4px ${BLACK};strong{color:${BLACK}}`
const PhoneCaption=styled.small`position:absolute;bottom:16px;left:13px;color:#fff;font-size:6px;letter-spacing:.18em;font-weight:900`
const PaperTear=styled.div`height:30px;background:url('${A}torn-white-divider.webp') center/100% 100% no-repeat;position:relative;z-index:5;margin-top:-2px`
const About=styled.section`display:grid;grid-template-columns:42% 58%;gap:5vw;padding:75px 8vw 70px;align-items:center;background:${WHITE};@media(max-width:850px){grid-template-columns:1fr;padding:60px 7vw}`
const AboutVisual=styled.div`height:330px;position:relative;display:grid;place-items:center;overflow:hidden;.head{position:absolute;width:58px;top:12px;left:8px}.fire{position:absolute;width:68px;bottom:10px;left:8px}`
const Paint=styled.div`position:absolute;width:85%;height:72%;background:${RED};transform:rotate(-4deg);clip-path:polygon(2% 12%,8% 4%,18% 10%,31% 3%,43% 12%,55% 4%,70% 11%,84% 5%,96% 14%,92% 30%,99% 45%,92% 62%,98% 79%,87% 91%,73% 85%,58% 96%,44% 88%,29% 96%,16% 87%,4% 91%,9% 72%,1% 58%,8% 43%,2% 28%)`
const CameraMock=styled.div`position:relative;width:235px;height:145px;background:#111;border:5px solid #171717;transform:rotate(-8deg);box-shadow:12px 12px 0 rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center;color:${RED};font:bold 9px Arial;span{position:absolute;top:9px;right:10px}.lens{width:100px;height:100px;border-radius:50%;background:#191919;border:12px solid #333;box-shadow:inset 0 0 0 8px #070707;}`
const Lens=styled.div`width:100px;height:100px;border-radius:50%;background:#171717;border:12px solid #333;box-shadow:inset 0 0 0 8px #070707`
const AboutCopy=styled.div`max-width:650px`
const Eyebrow=styled.span`font-size:9px;font-weight:900;letter-spacing:.1em;display:block;margin-bottom:13px`
const AboutH=styled.h2``
const SectionTitle=styled.div`text-align:center;h2{font:clamp(50px,6vw,82px)/.82 Impact,'Arial Black';letter-spacing:-.05em;margin:0}em{font-style:normal;color:${RED}}`
const AboutCopyText=styled.p``
const TextLink=styled.a`font-size:11px;font-weight:900;display:inline-flex;gap:10px;border-bottom:2px solid ${RED};padding-bottom:4px;margin-top:6px`
const Services=styled.section`padding:65px 6vw 75px;background:${WHITE}`
const ServiceGrid=styled.div`display:grid;grid-template-columns:repeat(4,1fr);gap:16px;max-width:1180px;margin:35px auto 0;@media(max-width:950px){grid-template-columns:repeat(2,1fr)}@media(max-width:550px){grid-template-columns:1fr}`
const Service=styled.article`min-height:280px;border:2px solid ${BLACK};padding:19px 17px 24px;position:relative;background:${WHITE};box-shadow:5px 7px 0 rgba(237,28,22,.35);transition:.2s;&:hover{transform:translateY(-4px)}>div{display:flex;justify-content:space-between;align-items:start}small{font-weight:900;font-size:9px}img{width:45px;height:45px;object-fit:contain}h3{font:25px/.82 Impact,'Arial Black';margin:12px 0 14px}h3 span{display:block}p{font-size:10px;line-height:1.35;font-weight:600;margin:0}`
const BlackBand=styled.section`position:relative;background:${BLACK};color:#fff;padding:42px 6vw 50px;display:flex;align-items:center;gap:35px;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px);background-size:100% 5px;@media(max-width:850px){flex-wrap:wrap}`
const BandLead=styled.div`display:flex;align-items:center;gap:20px;min-width:270px;b{font:45px/.72 Impact,'Arial Black';em{font-style:normal;color:${RED}}}span{font-size:9px;line-height:1.3}`
const BandItems=styled.div`display:flex;flex:1;justify-content:center;gap:25px;>div{border-left:1px solid #666;padding-left:18px;font-size:8px;font-weight:900;line-height:1.3}img{width:38px;height:38px;object-fit:contain;margin-bottom:5px;filter:brightness(0) invert(1)}`
const Sessions=styled.section`min-height:320px;padding:75px 10vw;background:${PAPER};text-align:center;display:flex;flex-direction:column;align-items:center;h2{font:clamp(52px,7vw,90px)/.8 Impact,'Arial Black';margin:0 0 22px}em{font-style:normal;color:${RED}}p{max-width:650px;font-size:11px;line-height:1.45}`
const Clients=styled.section`padding:65px 7vw 85px;background:${WHITE};position:relative`
const ClientGrid=styled.div`max-width:1000px;margin:35px auto 0;display:grid;grid-template-columns:repeat(5,1fr);gap:35px 40px;align-items:center;text-align:center;span{font-weight:900;font-size:18px;letter-spacing:-.04em}span:nth-child(2),span:nth-child(6){font-size:13px}span:nth-child(5),span:nth-child(8){font-size:14px}@media(max-width:800px){grid-template-columns:repeat(3,1fr);gap:25px 12px}@media(max-width:500px){grid-template-columns:repeat(2,1fr)}}`
const Projects=styled.section`padding:65px 7vw 75px;background:${PAPER}`
const ProjectGrid=styled.div`max-width:1160px;margin:35px auto 24px;display:grid;grid-template-columns:repeat(6,1fr);gap:7px;@media(max-width:800px){grid-template-columns:repeat(3,1fr)}@media(max-width:500px){grid-template-columns:repeat(2,1fr)}`
const Project=styled.article`div{height:145px;position:relative;border:2px solid ${BLACK};overflow:hidden;background:${BLACK};img{width:100%;height:100%;object-fit:cover;filter:contrast(1.2) brightness(.65)}i{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:34px;height:34px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.88);font-style:normal;font-size:10px;color:${BLACK}}b{position:absolute;top:6px;left:7px;color:#fff;font-size:9px}}strong{display:block;font-size:8px;margin-top:6px;text-transform:uppercase}`
const ProjectsCTA=styled(CTA)`display:flex;width:max-content;margin:10px 0 0 auto`
const Contact=styled.section`position:relative;background:${RED};color:#fff;padding:80px 8vw 90px;min-height:300px;overflow:hidden;h2{font:clamp(52px,7vw,100px)/.78 Impact,'Arial Black';margin:0 0 18px;letter-spacing:-.06em}em{font-style:normal;color:#fff}p{max-width:430px;font-size:11px;line-height:1.35;font-weight:700}.contact-icon{position:absolute;object-fit:contain;filter:brightness(0);opacity:.9}.crown{width:100px;right:8%;top:20px}.cam{width:105px;right:10%;bottom:18px}`
const Footer=styled.footer`background:${BLACK};color:#fff;padding:25px 6vw;display:flex;align-items:center;justify-content:space-between;gap:30px;font-size:9px;@media(max-width:800px){flex-wrap:wrap}.${Logo}{color:#fff}span{font-size:14px}small{font-size:8px}`
