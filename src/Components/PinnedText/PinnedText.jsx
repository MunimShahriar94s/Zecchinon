import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PinnedText = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=100vh', // pin for the height of 1 viewport
        pin: textRef.current,
        scrub: true,
        markers: false, // set to true to debug
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ height: '200vh', position: 'relative' }}>
      <div
        ref={textRef}
        style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '3rem 1rem',
          background: '#fff',
        }}
      >
        Your kitchen
      </div>
    </section>
  );
};

export default PinnedText;
