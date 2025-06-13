import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./Components/Navbar/navbar";
import Bullet from "./Components/Bullet/Bullet";
import Paragraph from "./Components/Paragraph/Paragraph";
import SwiperCarousel from "./Components/SwiperCarousel/SwiperCarousel"
import "./App.css";
import Lenis from '@studio-freight/lenis'

const lenis = new Lenis({
  smooth: true,
  duration: 1.75,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

// Animation loop
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}
requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger);
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
  lenis.raf(time * 1000)
})

function App() {
  const pinText = useRef(null);
  const main_container = useRef(null);
  const vid_container = useRef(null);

  const transitionCenter = useRef(null)
  const transition = useRef(null)
  const galleryText = useRef(null)

  const AreaProffesionistiRefs = {
    "container": useRef(null),
    "left": useRef(null),
    "center": useRef(null),
    "right": useRef(null)
  }

  const madeInItalyImg = useRef(null)

  const prefootPin = useRef(null)

  let vid_style = {
      height: "auto",
      marginBottom: "10vh",
    }
  
  if (window.innerWidth <= 768){
        vid_style = {
        height: "95vh"
      }
    }

  
  useEffect(() => {
    
    let bottomY_of_vid_container = vid_container.current.offsetTop + vid_container.current.offsetHeight;
    
    console.log(bottomY_of_vid_container)
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: pinText.current,
        start: "top top",
        end: () => `+=${bottomY_of_vid_container * 0.95}, center`,
        pin: true,
        scrub: true,
      });
    }, main_container); // scoped to main

    return () => ctx.revert();
  }, []);

  useEffect(() => {
  const ctx = gsap.context(() => {
    
    gsap.set(transitionCenter.current, {
      filter: "brightness(100%)"
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: transition.current,
        start: "center+=100 center",
        end: "bottom+=500 center",
        scrub: true,
        pin: true,
        markers: false
        
      }
    });

    
    tl.to(transitionCenter.current, {
      width: "100vw",
      height: "125%",
      filter: "brightness(50%)",
      ease: "none"
    }, 0);
    tl.from(galleryText.current, {
      y: 100,
      opacity: 0,
      duration: 0.2,
    }, 0.35)

    
  }, main_container);

  return () => ctx.revert();
}, []);


  useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: AreaProffesionistiRefs["container"].current,
        start:  "top+=25% bottom",
        end:    "bottom center",
        scrub:  true,
      }
    });

    // 0% → first segment
    tl.to(
      AreaProffesionistiRefs["right"].current,
      { y: "-8vw",  backgroundPosition: "center 40%", duration: 0.5 }
    );
    // then 100% → second segment
    tl.to(
      AreaProffesionistiRefs["center"].current,
      { y: "-16vw",  backgroundPosition: "center 80%", duration: 1 }, 0
    );

  }, main_container);

  return () => ctx.revert();
}, []);
  
useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.to(madeInItalyImg.current,
       { y: "8vw", backgroundPosition: "center 100%", scrollTrigger:{
        trigger: madeInItalyImg.current,
        start: "top bottom",
        scrub: true
       }}
    );
  }, main_container);

  return () => ctx.revert();
}, []);

useEffect(() => {
  const ctx = gsap.context(() => {

    gsap.to(prefootPin.current, {
      y: 0,
      scrollTrigger:{
        trigger: prefootPin.current,
        start: "top top",
        pin: true,
        scrub: true,
      },
    })    
  }, main_container);

  return () => ctx.revert();
}, []);
  
  return (
    <div ref={main_container} className="main">
      <section>
        <Navbar />
    
        <div
          ref={pinText}
          className="pin"
        
        >
          <span>Your kitchen</span>
          <span>Live every moment.</span>
        </div>

      <div style={vid_style} ref={vid_container} className="vid">
        <div className="spacer"></div>
        <video autoPlay loop muted style={vid_style} src="https://www.zecchinon.com/img/homepage/zecchinon.mp4"></video>
      </div>
      </section>
      <section className="YourMoments">
        <div className="left">
          <div>Your Moments</div>
        </div>
        <div className="right">
          <Paragraph text="Tu fai le cose a modo tuo. Questo è ciò che ti rende unico. E la tua nuova cucina non è solo un luogo dove cucinare. È parte di te. È il cuore della tua casa. È il tuo modo di vivere. Perché il vero lusso è uno stato d'animo." bulletText="lasciati ispirare"/>
        </div>
      </section>
      <section ref={transition}className="transition-wrapper">
        <div  className="transition">
          <div className="left side"></div>
          <div className="mid left"></div>
          <div ref={transitionCenter} className="center"></div>
          <div className="mid right"></div>
          <div className="right side"></div>
        </div>
        <div ref={galleryText} className="galleryText">
          Nel cuore della casa, la cucina esprime personalità e diventa la cornice di momenti indimenticabili.
          <Bullet text="Scopri le cucine zecchinon" />
        </div>
      </section>
      <section ref={AreaProffesionistiRefs["container"]} className="area-proffesionisti">
        <div className="top">
          <div className="left"><Bullet text="area proffesionisti"/></div>
          <div className="right">
            <Paragraph text="Un luogo esclusivo creato per architetti, designer e rivenditori. Dalla materioteca alla co-progettazione, dalle consulenze dedicate agli eventi formativi, offriamo strumenti preziosi per trasformare visioni creative in progetti straordinari." bulletText="Scopri kitchen lab"/>
          </div>
        </div>
        <div className="bottom">
          <div ref={AreaProffesionistiRefs["left"]} className="left"></div>
          <div ref={AreaProffesionistiRefs["center"]} className="center"></div>
          <div ref={AreaProffesionistiRefs["right"]} className="right"></div>
        </div>
      </section>
      <section className="made-in-italy">
        <div className="gray-sheet"></div>
        <div className="badge">100% made in italy</div>
        <div className="right"></div>
        <div className="left">
          <Paragraph text="Siamo un'azienda con solide radici venete e una visione internazionale. Il nostro know-how artigianale prende vita in uno stabilimento di 10.000 mq, dove 90 persone lavorano con passione dal progetto alla produzione." bulletText="scopri chi siamo"/>
          <div ref={madeInItalyImg} className="img"></div>
        </div>
      </section>
      <section className="catalogi">
        <div className="badge">Cataloghi</div>
        <SwiperCarousel />
      </section>
      <section className="prefooter">
  <div
    ref={prefootPin}
    style={{
      position: "absolute",
      zIndex: 10,
      fontFamily: "'Lora', serif",
      fontSize: "3.75vw",
      fontWeight: 100,
      paddingLeft: "4.75%",
      paddingTop: "7%",
    }}
  >
    <div className="text">
      <div style={{ color: "#F7F6F1" }}>Progetta con noi</div>
      <div style={{ color: "#757575" }}>la cucina dei tuoi sogni</div>
    </div>
    <Bullet text="rete vendita" invert />
  </div>
  <img
    src="https://www.zecchinon.com/img/prefooter/rete-vendita-zecchinon-cucine-L.webp"
    alt=""
    style={{ width: "100%", scale: "1.05" }}
  />
</section>
      <section className="footer">
      </section>
    </div>
  );
}

export default App;
