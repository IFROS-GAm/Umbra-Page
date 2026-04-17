import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const renderMedia = ({
  media,
  mediaType,
  alt,
  fit = "contain",
  objectPosition = "center",
  className = "",
}) => {
  const sharedProps = {
    className: `size-full ${fit === "contain" ? "object-contain" : "object-cover"} ${className}`,
    style: { objectPosition },
  };

  if (mediaType === "video") {
    return (
      <video
        src={media}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        {...sharedProps}
      />
    );
  }

  return <img src={media} alt={alt} loading="lazy" {...sharedProps} />;
};

const Fragment = ({ item, className, objectPosition }) => (
  <div
    data-fragment
    className={`pointer-events-none absolute overflow-hidden rounded-[1.15rem] border border-white/10 bg-black/60 shadow-[0_18px_45px_rgba(0,0,0,0.34)] backdrop-blur-md ${className}`}
  >
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),transparent)]" />
    <div className="relative size-full">
      {renderMedia({
        media: item.fragmentMedia ?? item.media,
        mediaType: item.fragmentMediaType ?? item.mediaType,
        alt: item.fragmentAlt ?? item.alt ?? item.title,
        fit: item.fragmentFit ?? "cover",
        objectPosition: item.fragmentObjectPosition ?? objectPosition,
        className: item.fragmentClassName ?? "scale-[1.08]",
      })}
    </div>
  </div>
);

const FunctionalitySections = ({ content }) => {
  const articleRefs = useRef([]);

  useGSAP(() => {
    articleRefs.current.forEach((article, index) => {
      if (!article) return;

      const stage = article.querySelector("[data-stage]");
      const fragments = article.querySelectorAll("[data-fragment]");

      gsap.fromTo(
        article,
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: article,
            start: "top 82%",
          },
        }
      );

      if (stage) {
        gsap.to(stage, {
          y: index % 2 === 0 ? -10 : 10,
          repeat: -1,
          yoyo: true,
          duration: 4.2 + index * 0.25,
          ease: "sine.inOut",
        });
      }

      fragments.forEach((fragment, fragmentIndex) => {
        gsap.to(fragment, {
          y: fragmentIndex % 2 === 0 ? -8 : 8,
          x: fragmentIndex === 1 ? 6 : -6,
          rotate: fragmentIndex === 0 ? -7 : fragmentIndex === 1 ? 8 : 4,
          repeat: -1,
          yoyo: true,
          duration: 3.2 + fragmentIndex * 0.3,
          ease: "sine.inOut",
        });
      });
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#05050d] px-5 py-24 sm:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(139,92,246,0.12),transparent_24%),radial-gradient(circle_at_84%_12%,rgba(56,189,248,0.09),transparent_22%),linear-gradient(180deg,rgba(6,6,14,0.98),rgba(10,10,20,1))]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:44px_44px]" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="font-general text-xs uppercase tracking-[0.28em] text-violet-300">
            {content.kicker}
          </p>
          <h2 className="special-font mt-6 text-4xl font-zentry uppercase leading-[0.9] text-[#dfdff2] md:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 font-circular-web text-base leading-7 text-white/60 md:text-lg">
            {content.description}
          </p>
        </div>

        <div className="mt-16 space-y-10">
          {content.items.map((item, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={item.title}
                ref={(node) => {
                  articleRefs.current[index] = node;
                }}
                className={`grid gap-8 rounded-[2rem] border border-white/10 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.32)] sm:p-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)] ${
                  index % 2 === 0
                    ? "bg-[linear-gradient(180deg,rgba(18,16,40,0.92),rgba(7,7,18,0.96))]"
                    : "bg-[linear-gradient(180deg,rgba(10,18,36,0.92),rgba(7,7,18,0.96))]"
                }`}
              >
                <div className={`flex flex-col justify-center ${reverse ? "lg:order-2" : ""}`}>
                  <p className="font-general text-[10px] uppercase tracking-[0.28em] text-violet-300">
                    {item.kicker}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight text-[#dfdff2] md:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-xl font-circular-web text-base leading-7 text-white/65 md:text-lg">
                    {item.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {item.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-general text-[10px] uppercase tracking-[0.18em] text-white/70"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`relative min-h-[24rem] ${reverse ? "lg:order-1" : ""}`}>
                  <div
                    data-stage
                    className="relative flex h-full min-h-[24rem] items-center justify-center overflow-hidden rounded-[1.8rem] border border-white/10 bg-[radial-gradient(circle_at_20%_15%,rgba(196,181,253,0.16),transparent_28%),radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.18),transparent_34%),linear-gradient(180deg,rgba(16,16,34,0.96),rgba(8,8,18,0.98))] px-5 py-8 shadow-[0_28px_80px_rgba(0,0,0,0.3)]"
                  >
                    <div className="absolute left-1/2 top-8 h-24 w-2/3 -translate-x-1/2 rounded-full bg-violet-300/15 blur-3xl" />
                    {renderMedia({
                      media: item.media,
                      mediaType: item.mediaType,
                      alt: item.alt ?? item.title,
                      fit: "contain",
                      className: "relative z-10 max-h-full max-w-full drop-shadow-[0_28px_60px_rgba(0,0,0,0.4)]",
                    })}
                  </div>

                  {!item.hideFragments && (
                    <>
                      <Fragment
                        item={item}
                        objectPosition="18% 25%"
                        className="left-[-0.5rem] top-8 h-24 w-32 rotate-[-7deg] sm:h-32 sm:w-44"
                      />
                      <Fragment
                        item={item}
                        objectPosition="82% 18%"
                        className="right-[-0.35rem] top-[-0.5rem] h-24 w-32 rotate-[8deg] sm:h-32 sm:w-44"
                      />
                      <Fragment
                        item={item}
                        objectPosition="50% 82%"
                        className="bottom-[-0.75rem] right-8 h-24 w-36 rotate-[4deg] sm:h-32 sm:w-52"
                      />
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FunctionalitySections;
