const UiUx = ({ content }) => {
  return (
    <section
      className="relative overflow-hidden bg-[#04060d] px-5 py-24 sm:px-10"
      id="uiux"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.12),transparent_22%),radial-gradient(circle_at_18%_82%,rgba(125,211,252,0.08),transparent_24%),linear-gradient(180deg,rgba(4,6,13,0.98),rgba(7,8,18,1))]" />

      <div className="relative mx-auto max-w-[1440px] rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,18,34,0.82),rgba(7,8,18,0.9))] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.22)] backdrop-blur-sm md:p-10">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1fr)]">
        <div>
          <p className="font-general text-xs uppercase tracking-[0.28em] text-violet-300">
            {content.kicker}
          </p>
          <h2 className="special-font mt-6 text-4xl font-zentry uppercase leading-[0.9] text-[#dfdff2] md:text-6xl">
            {content.title}
          </h2>
          <p className="mt-6 max-w-xl font-circular-web text-base leading-7 text-white/60 md:text-lg">
            {content.description}
          </p>

          <div className="mt-10 space-y-5">
            {content.steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex gap-4 rounded-[1.35rem] border p-5 ${
                  index % 2 === 0
                    ? "border-sky-300/15 bg-sky-300/[0.05]"
                    : "border-violet-300/15 bg-violet-300/[0.05]"
                }`}
              >
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-violet-300/25 bg-violet-300/10 font-general text-xs tracking-[0.2em] text-violet-300">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#dfdff2]">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-circular-web text-white/60">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          {content.gallery.map((item, index) => (
            <div
              key={item.src}
              className={`overflow-hidden rounded-[1.6rem] border p-3 shadow-[0_25px_80px_rgba(0,0,0,0.3)] ${
                index === 0
                  ? "border-sky-300/15 bg-sky-300/[0.04]"
                  : "border-violet-300/15 bg-violet-300/[0.04]"
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={`w-full rounded-[1.1rem] object-cover ${
                  index === 0 ? "max-h-[420px]" : "max-h-[360px]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default UiUx;
