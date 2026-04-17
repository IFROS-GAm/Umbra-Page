import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TiLocationArrow } from "react-icons/ti";
import { useMemo, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ content }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = content.slides.length;

  const activeSlide = content.slides[currentIndex];
  const nextSlide = useMemo(
    () => content.slides[(currentIndex + 1) % totalSlides],
    [content.slides, currentIndex, totalSlides]
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-full overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <div
                onClick={() =>
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
                }
                className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <img
                  src={nextSlide.src}
                  alt={nextSlide.alt}
                  className="size-64 origin-center scale-150 object-cover object-center"
                />
              </div>
            </VideoPreview>
          </div>

          <img
            src={activeSlide.src}
            alt={activeSlide.alt}
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.12),transparent_18%),linear-gradient(180deg,rgba(5,5,12,0.18),rgba(6,6,14,0.76))]" />
          <div className="fractured-hero-overlay" />
          <div className="hero-fractal-shard hero-fractal-shard-1" />
          <div className="hero-fractal-shard hero-fractal-shard-2" />
          <div className="hero-fractal-shard hero-fractal-shard-3" />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-[#dfdff2]">
          U<b>M</b>BRA
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full overflow-hidden" id="inicio">
          <div className="relative size-full px-5 pb-28 pt-28 sm:px-10 sm:pb-32 sm:pt-32">
            <div className="max-w-2xl">
              <p className="font-general text-xs uppercase tracking-[0.35em] text-violet-300">
                {content.eyebrow}
              </p>

              <h1 className="special-font hero-heading mt-5 text-[#dfdff2]">
                u<b>m</b>bra
              </h1>
            </div>

            <div className="absolute bottom-28 left-5 z-50 max-w-[19rem] sm:bottom-32 sm:left-10 sm:max-w-[24rem] md:max-w-[30rem]">
              <h2 className="special-font font-zentry text-[clamp(2.9rem,7vw,5.4rem)] uppercase leading-[0.82] text-[#dfdff2]">
                {content.subtitle ?? content.headlinePrimary}
                <br />
                {content.tagline ?? content.headlineSecondary}
              </h2>

              <p className="hero-subcopy mt-3 max-w-[18rem] sm:max-w-[22rem] md:max-w-[26rem]">
                {content.description}
              </p>
            </div>

            <div className="absolute inset-x-4 bottom-5 z-50 flex justify-center sm:inset-x-10 sm:bottom-8">
              <div className="hero-cta-shell flex w-full max-w-[42rem] flex-wrap items-center justify-center gap-3 px-4 py-3">
                <Button
                  id="primary-cta"
                  title={content.primaryButton.title}
                  leftIcon={<TiLocationArrow />}
                  href={content.primaryButton.href}
                  target={content.primaryButton.external ? "_blank" : undefined}
                  rel={content.primaryButton.external ? "noreferrer" : undefined}
                  containerClass="hero-route-button !px-5 !py-3 flex-center gap-2"
                />
                <Button
                  id="secondary-cta"
                  title={content.secondaryButton.title}
                  href={content.secondaryButton.href}
                  containerClass="hero-route-button !px-5 !py-3 flex-center gap-2"
                />
                <Button
                  id="tertiary-cta"
                  title={content.tertiaryButton.title}
                  href={content.tertiaryButton.href}
                  target={content.tertiaryButton.external ? "_blank" : undefined}
                  rel={content.tertiaryButton.external ? "noreferrer" : undefined}
                  containerClass="!px-5 !py-3 border border-white/12 bg-black/55 !text-[#dfdff2] backdrop-blur-sm flex-center gap-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-violet-300">
        U<b>M</b>BRA
      </h1>
    </div>
  );
};

export default Hero;
