import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = ({ content }) => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <section
      id="stack"
      className="relative min-h-screen w-full overflow-hidden bg-[#04050b]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.12),transparent_24%),linear-gradient(180deg,rgba(4,5,11,0.96),rgba(7,7,18,1))]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:42px_42px]" />

      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5 px-5 sm:px-10">
        <p className="font-general text-sm uppercase md:text-[10px]">
          {content.kicker}
        </p>

        <h2 className="special-font max-w-5xl text-center text-4xl font-zentry uppercase leading-[0.9] text-[#dfdff2] md:text-6xl">
          {content.title}
        </h2>

        <div className="about-subtext">
          <p>{content.description}</p>
          <p className="text-white/60">{content.highlights.join(" | ")}</p>
        </div>
      </div>

      <div className="h-dvh w-full" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src={content.image}
            alt={content.imageAlt}
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
