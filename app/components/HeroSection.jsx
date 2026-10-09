const services = [
  {
    number: "01",
    name: "Branding",
    description: "Distinctive identities built from the inside out—clear in purpose, memorable in every detail.",
    icon: "orbit",
  },
  {
    number: "02",
    name: "UI/UX Design",
    description: "Thoughtful digital journeys that feel effortless to use and impossible to forget.",
    icon: "flow",
  },
  {
    number: "03",
    name: "Web Design",
    description: "Beautifully considered websites that bring your story to life on every screen.",
    icon: "screen",
  },
];

export default function HeroSection() {
  return (
    <main>
      <section id="home" aria-labelledby="hero-heading" className="relative overflow-hidden bg-[#172231] text-[#f7f4ed]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full border border-[#c9b58a]/10 md:right-[27%] md:top-12" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-12 sm:px-8 md:pb-20 md:pt-16 lg:min-h-[690px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-12 lg:py-16">
          <div className="relative z-10 max-w-2xl lg:py-10">
            <p className="mb-7 flex items-center gap-3 text-[0.66rem] font-medium uppercase tracking-[0.23em] text-[#d1bd91]">
              <span className="h-px w-8 bg-[#c9b58a]" /> Independent creative studio · London
            </p>
            <h1 id="hero-heading" className="max-w-[11ch] font-serif text-[3.55rem] font-normal leading-[0.99] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[5.55rem]">
              Bringing Ideas <span className="block pt-2 font-light italic text-[#d1bd91]">to Life.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-[#d9dce0]/75 sm:text-lg sm:leading-8">
              We shape thoughtful brands and digital experiences with clarity, character, and a little bit of magic.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#contact" className="group inline-flex items-center gap-5 rounded-full bg-[#d1bd91] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#172231] transition duration-300 hover:bg-[#eadbb8]">
                Let’s create something <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </a>
              <a href="#about" className="inline-flex items-center gap-2 px-3 py-3 text-xs font-medium uppercase tracking-[0.12em] text-[#f7f4ed]/75 transition-colors hover:text-[#d1bd91]">
                Discover Aura <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="mt-12 flex items-center gap-4 border-t border-white/15 pt-5 text-[0.62rem] uppercase tracking-[0.18em] text-[#f7f4ed]/50 sm:mt-16">
              <span>Brand</span><span className="h-1 w-1 rounded-full bg-[#c9b58a]" /><span>Digital</span><span className="h-1 w-1 rounded-full bg-[#c9b58a]" /><span>Web</span>
              <span className="ml-auto hidden text-right sm:block">Purposeful by design</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px] lg:ml-auto">
            <div className="absolute -inset-3 rounded-[2px] border border-[#d1bd91]/35 sm:-inset-4" />
            <div className="relative aspect-[1.12/1] overflow-hidden bg-[#273444] sm:aspect-[1.18/1] lg:aspect-[0.96/1]">
              <img src="/hero.jpg" alt="Sculptural champagne-gold forms and warm ivory paper in a midnight-blue studio" fetchPriority="high" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.035]" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#111a27]/55 via-transparent to-[#111a27]/10" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[#f7f4ed] sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-[#d1bd91]">The Aura approach</p>
                  <p className="mt-1 font-serif text-xl italic sm:text-2xl">Quietly distinctive.</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-lg" aria-hidden="true">↗</span>
              </div>
            </div>
            <div className="absolute -right-2 -top-5 flex h-[5.6rem] w-[5.6rem] rotate-6 flex-col items-center justify-center rounded-full border border-[#d1bd91]/65 bg-[#172231] text-center text-[0.48rem] uppercase leading-[1.55] tracking-[0.18em] text-[#d1bd91] sm:-right-7 sm:-top-7 sm:h-24 sm:w-24 sm:text-[0.52rem]">
              Made with  
intention  
<span className="text-base">✳</span>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="h-px bg-gradient-to-r from-transparent via-[#c9b58a]/40 to-transparent" />
      </section>

      <section id="about" aria-labelledby="about-heading" className="bg-[#f7f4ed] px-5 py-20 text-[#172231] sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#9d8454]"><span className="h-px w-8 bg-[#b69d6c]" /> A little about us</p>
            <h2 id="about-heading" className="max-w-[12ch] font-serif text-4xl leading-[1.1] tracking-[-0.04em] sm:text-5xl lg:text-[3.65rem]">Good design makes room for <span className="italic text-[#a68d5e]">meaning.</span></h2>
          </div>
          <div className="flex flex-col justify-between gap-10 lg:pt-12">
            <p className="max-w-2xl text-lg leading-8 text-[#53575a] sm:text-xl sm:leading-9">
              Aura Studio is an independent creative agency based in London. We help ambitious brands express who they are through modern, minimalist design—bringing clear thinking, strong visuals, and thoughtful storytelling to every touchpoint.
            </p>
            <div className="grid gap-6 border-t border-[#172231]/15 pt-6 sm:grid-cols-2 sm:gap-10">
              <div><p className="font-serif text-2xl italic text-[#a68d5e]">From brand to browser</p><p className="mt-2 text-xs uppercase tracking-[0.13em] text-[#77766f]">One coherent experience</p></div>
              <div><p className="font-serif text-2xl italic text-[#a68d5e]">London, thoughtfully</p><p className="mt-2 text-xs uppercase tracking-[0.13em] text-[#77766f]">Working everywhere</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" aria-labelledby="services-heading" className="bg-[#eeeae1] px-5 py-20 text-[#172231] sm:px-8 sm:py-28 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:mb-16 sm:flex-row sm:items-end">
            <div>
              <p className="mb-5 flex items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#9d8454]"><span className="h-px w-8 bg-[#b69d6c]" /> What we do</p>
              <h2 id="services-heading" className="font-serif text-4xl leading-none tracking-[-0.04em] sm:text-5xl lg:text-6xl">Small details.  
<span className="italic text-[#a68d5e]">Lasting impression.</span></h2>
            </div>
            <p className="max-w-sm text-base leading-7 text-[#686a68]">A considered set of creative disciplines, working together to make your next chapter unmistakably yours.</p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-5">
            {services.map((service) => (
              <article key={service.number} className="group flex min-h-[290px] flex-col border border-[#172231]/12 bg-[#f7f4ed] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b69d6c]/70 hover:shadow-[0_18px_45px_-30px_rgba(23,34,49,0.35)] sm:p-8 lg:min-h-[320px]">
                <div className="flex items-start justify-between">
                  <span className="text-[0.63rem] tracking-[0.18em] text-[#a68d5e]">{service.number} / 03</span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#c9b58a]/55 text-[#9a8050] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#172231] group-hover:text-[#d1bd91]">
                    <svg viewBox="0 0 32 32" aria-hidden="true" className="h-6 w-6 fill-none stroke-current" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      {service.icon === "orbit" && <><circle cx="16" cy="16" r="9" /><ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(-32 16 16)" /><circle cx="24.5" cy="9" r="1.5" fill="currentColor" /></>}
                      {service.icon === "flow" && <><rect x="4.5" y="5" width="9" height="9" rx="1.5" /><rect x="18.5" y="5" width="9" height="9" rx="1.5" /><rect x="11.5" y="18" width="9" height="9" rx="1.5" /><path d="M13.5 9.5h5M16 14v4" /></>}
                      {service.icon === "screen" && <><rect x="4" y="5" width="24" height="17" rx="1.5" /><path d="M12 27h8m-4-5v5M8 10h16" /></>}
                    </svg>
                  </span>
                </div>
                <div className="mt-auto pt-12">
                  <h3 className="font-serif text-3xl tracking-[-0.03em]">{service.name}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#666966]">{service.description}</p>
                  <a href="#contact" aria-label={`Ask us about ${service.name}`} className="mt-6 inline-flex items-center gap-2 text-[0.63rem] font-semibold uppercase tracking-[0.15em] text-[#9a8050] transition-all duration-200 group-hover:gap-3">
                    Explore the possibilities <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
