import { useEffect, useState } from "react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const [submitted, setSubmitted] = useState(false);
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <footer id="contact" aria-labelledby="contact-heading" className="bg-[#172231] px-5 pb-7 pt-20 text-[#f7f4ed] sm:px-8 sm:pt-28 lg:px-12 lg:pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="mb-5 flex items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-[#d1bd91]"><span className="h-px w-8 bg-[#c9b58a]" /> Have a good one in mind?</p>
            <h2 id="contact-heading" className="max-w-[10ch] font-serif text-5xl leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[4.5rem]">Let’s make it <span className="italic text-[#d1bd91]">matter.</span></h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#f7f4ed]/65">Tell us a little about what you’re imagining. We’d love to hear where it could go.</p>
            <div className="mt-10 space-y-5">
              <a href="mailto:hello@aurastudio.co" className="group inline-flex items-center gap-3 text-sm text-[#f7f4ed] transition-colors hover:text-[#d1bd91]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[#d1bd91] transition-colors group-hover:border-[#d1bd91]" aria-hidden="true">@</span>
                hello@aurastudio.co
              </a>
              <p className="flex items-center gap-3 text-sm text-[#f7f4ed]/65"><span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-[#d1bd91]" aria-hidden="true">⌖</span> London, United Kingdom</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" aria-describedby={submitted ? "form-success" : undefined}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[#f7f4ed]/70">Name</label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required onChange={() => setSubmitted(false)} className="w-full border-b border-white/25 bg-transparent px-0 py-3 text-sm text-[#f7f4ed] outline-none transition-colors placeholder:text-white/35 focus:border-[#d1bd91]" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[#f7f4ed]/70">Email</label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required onChange={() => setSubmitted(false)} className="w-full border-b border-white/25 bg-transparent px-0 py-3 text-sm text-[#f7f4ed] outline-none transition-colors placeholder:text-white/35 focus:border-[#d1bd91]" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label htmlFor="contact-message" className="mb-2 block text-[0.65rem] font-medium uppercase tracking-[0.15em] text-[#f7f4ed]/70">Message</label>
              <textarea id="contact-message" name="message" rows="4" required onChange={() => setSubmitted(false)} className="w-full resize-y border-b border-white/25 bg-transparent px-0 py-3 text-sm text-[#f7f4ed] outline-none transition-colors placeholder:text-white/35 focus:border-[#d1bd91]" placeholder="A few words about your project…" />
            </div>
            <div className="flex flex-col items-start gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <button type="submit" className="group inline-flex items-center gap-5 rounded-full bg-[#d1bd91] px-6 py-4 text-xs font-semibold uppercase tracking-[0.12em] text-[#172231] transition duration-300 hover:bg-[#eadbb8]">
                Send your note <span aria-hidden="true" className="text-base transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </button>
              {submitted && <p id="form-success" role="status" aria-live="polite" className="text-sm text-[#d1bd91]">Thank you — your message is ready. We’ll be in touch soon.</p>}
            </div>
          </form>
        </div>

        <div className="mt-16 border-t border-white/15 pt-7 sm:mt-24">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <a href="#home" className="inline-flex items-center gap-3" aria-label="Aura Studio — back to home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c9b58a]/70 text-[#d1bd91]" aria-hidden="true">A</span>
              <span className="font-serif text-xl tracking-[-0.03em]">Aura <span className="font-sans text-[0.56rem] font-medium uppercase tracking-[0.22em] text-[#f7f4ed]/55">Studio</span></span>
            </a>
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((item) => <a key={item.href} href={item.href} className="text-[0.64rem] uppercase tracking-[0.13em] text-[#f7f4ed]/60 transition-colors hover:text-[#d1bd91]">{item.label}</a>)}
            </nav>
            <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="group inline-flex items-center gap-3 self-start text-[0.64rem] uppercase tracking-[0.13em] text-[#d1bd91] transition-colors hover:text-[#f7f4ed] sm:self-auto">
              Back to top <span aria-hidden="true" className="transition-transform duration-200 group-hover:-translate-y-1">↑</span>
            </button>
          </div>
          <div className="mt-7 flex flex-col gap-2 border-t border-white/10 pt-5 text-[0.58rem] uppercase tracking-[0.12em] text-[#f7f4ed]/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} Aura Studio. Made with intention.</p>
            <p>Independent by nature · London by home</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
