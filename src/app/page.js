"use client";

export default function Home() {
  return (
    <>
      {/* Sticky Header Nav */}
      <nav className="sticky top-0 z-50 bg-paper border-b-2 border-line">
        <div className="max-w-[1080px] mx-auto px-8 py-[18px] flex justify-between items-center">
          <div className="font-serif font-semibold text-[1.05rem] text-ink select-none">
            Ishaan Khandelwal
          </div>
          <div className="flex gap-4 sm:gap-[28px]">
            <a
              href="#work"
              className="font-mono text-[0.78rem] text-ink-soft hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-3"
            >
              work
            </a>
            <a
              href="#about"
              className="font-mono text-[0.78rem] text-ink-soft hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-3"
            >
              about
            </a>
            <a
              href="#process"
              className="font-mono text-[0.78rem] text-ink-soft hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-3"
            >
              process
            </a>
            <a
              href="#contact"
              className="font-mono text-[0.78rem] text-ink-soft hover:text-ink transition-colors focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-3"
            >
              contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero pt-[72px] pb-[56px] px-8 max-w-[1080px] mx-auto">
        <div>
          <span className="eyebrow font-mono text-[0.72rem] text-purple-text bg-purple-fill px-3 py-[5px] rounded-full inline-block mb-[18px] select-none capitalize">
            full stack developer · Bengalore
          </span>
          <h1 className="font-serif font-semibold text-[2.6rem] sm:text-[3.5rem] md:text-[4.6rem] leading-[1.02] max-w-[780px] text-ink">
            I build clean APIs, fast user interfaces, and systems that don't break under load.{" "}
            <span className="text-coral-mid italic select-none">Make it scale.</span>
          </h1>
          <p className="mt-6 text-[1.05rem] text-ink-soft max-w-[480px] leading-[1.65] font-light">
            Four projects below, each a different kind of bottleneck I resolved — slow database queries, broken server-side renders, lagging real-time dashboards, and high API latency.
          </p>
          <div className="hero-cta mt-[32px] flex gap-[14px] flex-wrap">
            <a href="#work" className="btn btn-solid font-mono text-[0.8rem] px-[22px] py-[13px] border-2 border-line rounded-[10px] bg-ink text-paper cursor-pointer transition-transform duration-120 hover:-translate-y-[2px] focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-3 inline-block">
              see the work
            </a>
            <a href="#contact" className="btn font-mono text-[0.8rem] px-[22px] py-[13px] border-2 border-line rounded-[10px] bg-transparent cursor-pointer transition-transform duration-120 hover:-translate-y-[2px] focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-3 inline-block">
              get in touch
            </a>
          </div>
        </div>
      </header>

      {/* Filmstrip Section */}
      <div className="filmstrip-wrap pb-[96px] px-8 max-w-[1080px] mx-auto">
        <div>
          <div className="filmstrip-label font-mono text-[0.72rem] text-ink-soft mb-[18px] select-none lowercase">
            scroll through the set →
          </div>
          <div className="filmstrip flex gap-[16px] overflow-x-auto pb-[14px] scrollbar-custom scroll-snap-x proximity">
            {/* Tile 01 */}
            <button
              onClick={() => document.getElementById('case-cooksmart')?.scrollIntoView({ behavior: 'smooth' })}
              className="film-tile flex-[0_0_168px] scroll-snap-align-start cursor-pointer border-none bg-none p-0 text-left focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-4 focus-visible:rounded-[14px] group"
            >
              <div className="film-box h-[130px] rounded-[14px] border-2 border-line flex items-center justify-center mb-[10px] transition-transform duration-150 group-hover:-translate-y-[5px] overflow-hidden relative">
                <img
                  src="/cooksmart.png"
                  alt="CookSmart AI Thumbnail"
                  className="w-full h-full object-cover object-top select-none"
                />
              </div>
              <span className="film-num font-mono text-[0.72rem] text-ink-soft mb-[2px] block">01</span>
              <span className="film-name font-serif font-semibold text-[1.05rem] text-ink">CookSmart AI</span>
            </button>

            {/* Tile 02 */}
            <button
              onClick={() => document.getElementById('case-vasuli')?.scrollIntoView({ behavior: 'smooth' })}
              className="film-tile flex-[0_0_168px] scroll-snap-align-start cursor-pointer border-none bg-none p-0 text-left focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-4 focus-visible:rounded-[14px] group"
            >
              <div className="film-box h-[130px] rounded-[14px] border-2 border-line flex items-center justify-center mb-[10px] transition-transform duration-150 group-hover:-translate-y-[5px] overflow-hidden relative">
                <img
                  src="/vasuli.png"
                  alt="Vasuli Thumbnail"
                  className="w-full h-full object-cover object-top select-none"
                />
              </div>
              <span className="film-num font-mono text-[0.72rem] text-ink-soft mb-[2px] block">02</span>
              <span className="film-name font-serif font-semibold text-[1.05rem] text-ink">Vasuli</span>
            </button>

            {/* Tile 03 */}
            <button
              onClick={() => document.getElementById('case-getpdfx')?.scrollIntoView({ behavior: 'smooth' })}
              className="film-tile flex-[0_0_168px] scroll-snap-align-start cursor-pointer border-none bg-none p-0 text-left focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-4 focus-visible:rounded-[14px] group"
            >
              <div className="film-box h-[130px] rounded-[14px] border-2 border-line flex items-center justify-center mb-[10px] transition-transform duration-150 group-hover:-translate-y-[5px] overflow-hidden relative">
                <img
                  src="/getpdfx.png"
                  alt="getPdfX Thumbnail"
                  className="w-full h-full object-cover object-top select-none"
                />
              </div>
              <span className="film-num font-mono text-[0.72rem] text-ink-soft mb-[2px] block">03</span>
              <span className="film-name font-serif font-semibold text-[1.05rem] text-ink">getPdfX</span>
            </button>

            {/* Tile 04 */}
            <button
              onClick={() => document.getElementById('case-dmx')?.scrollIntoView({ behavior: 'smooth' })}
              className="film-tile flex-[0_0_168px] scroll-snap-align-start cursor-pointer border-none bg-none p-0 text-left focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-4 focus-visible:rounded-[14px] group"
            >
              <div className="film-box h-[130px] rounded-[14px] border-2 border-line flex items-center justify-center mb-[10px] transition-transform duration-150 group-hover:-translate-y-[5px] overflow-hidden relative">
                <img
                  src="/dmx.png"
                  alt="DMX Academy Thumbnail"
                  className="w-full h-full object-cover object-top select-none"
                />
              </div>
              <span className="film-num font-mono text-[0.72rem] text-ink-soft mb-[2px] block">04</span>
              <span className="film-name font-serif font-semibold text-[1.05rem] text-ink">DMX Academy</span>
            </button>
          </div>
        </div>
      </div>

      {/* Selected Work Section */}
      <section id="work" className="scroll-mt-24 py-[96px] border-t border-line/10">
        <div className="wrap max-w-[1080px] mx-auto px-8">
          <div className="section-head border-b-2 border-line pb-[28px] mb-[48px]">
            <span className="section-tab inline-block font-mono text-[0.75rem] text-paper bg-ink px-[14px] py-[6px] rounded-t-[7px] -mb-[30px] relative z-10 select-none">
              selected work
            </span>
            <h2 className="font-serif font-semibold text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] max-w-[600px] leading-tight text-ink mt-8">
              Four bottlenecks, four architectures.
            </h2>
            <p className="text-ink-soft mt-[10px] max-w-[480px] leading-[1.6]">
              Each system is its own stack below — click through for the database schema, the API design, and what actually changed.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[28px]">
            {/* Card 01 */}
            <a
              id="case-cooksmart"
              href="https://cooksmartai.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="card relative border-[2.5px] border-line rounded-[18px] p-[26px] cursor-pointer transition-transform duration-180 bg-paper hover:rotate-0 hover:-translate-y-[6px] focus-visible:rotate-0 focus-visible:-translate-y-[6px] focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-4 group rotate-[-1.4deg] c-purple bg-purple-fill text-purple-text block"
            >
              <div>
                <span className="card-tab absolute top-[-14px] left-[22px] font-mono text-[0.7rem] text-paper px-[11px] py-[4px] rounded-[6px] bg-purple-dark">
                  project 01
                </span>
                <h3 className="font-serif font-semibold text-[1.5rem] mt-[14px] mb-[8px] text-purple-dark">
                  CookSmart AI
                </h3>
                <p className="desc text-[0.92rem] leading-[1.55] mb-[20px]">
                  An AI-powered recipe assistant that transforms ingredient lists into meal suggestions. Optimized LLM response times and concurrent search indexing.
                </p>
              </div>
              <div className="meta flex justify-between items-center font-mono text-[0.74rem] border-t-[1.5px] pt-[12px] opacity-85 border-purple-mid">
                <span>FULL STACK / OPENAI · 2025</span>
                <span className="arrow text-[0.74rem] font-medium transition-transform duration-150 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] font-mono">
                  cooksmartai.xyz ↗
                </span>
              </div>
            </a>

            {/* Card 02 */}
            <a
              id="case-vasuli"
              href="https://vasuli.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="card relative border-[2.5px] border-line rounded-[18px] p-[26px] cursor-pointer transition-transform duration-180 bg-paper hover:rotate-0 hover:-translate-y-[6px] focus-visible:rotate-0 focus-visible:-translate-y-[6px] focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-4 group rotate-[1.6deg] c-coral bg-coral-fill text-coral-text block"
            >
              <div>
                <span className="card-tab absolute top-[-14px] left-[22px] font-mono text-[0.7rem] text-paper px-[11px] py-[4px] rounded-[6px] bg-coral-dark">
                  project 02
                </span>
                <h3 className="font-serif font-semibold text-[1.5rem] mt-[14px] mb-[8px] text-coral-dark">
                  Vasuli
                </h3>
                <p className="desc text-[0.92rem] leading-[1.55] mb-[20px]">
                  A peer-to-peer expense splitter and debt settlement tracker. Rebuilt payment flows and ledgers to guarantee zero transaction mismatch.
                </p>
              </div>
              <div className="meta flex justify-between items-center font-mono text-[0.74rem] border-t-[1.5px] pt-[12px] opacity-85 border-coral-mid">
                <span>WEB APP / TAILWIND · 2024</span>
                <span className="arrow text-[0.74rem] font-medium transition-transform duration-150 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] font-mono">
                  vasuli.vercel.app ↗
                </span>
              </div>
            </a>

            {/* Card 03 */}
            <a
              id="case-getpdfx"
              href="https://getpdfx.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="card relative border-[2.5px] border-line rounded-[18px] p-[26px] cursor-pointer transition-transform duration-180 bg-paper hover:rotate-0 hover:-translate-y-[6px] focus-visible:rotate-0 focus-visible:-translate-y-[6px] focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-4 group rotate-[1.1deg] c-teal bg-teal-fill text-teal-text block"
            >
              <div>
                <span className="card-tab absolute top-[-14px] left-[22px] font-mono text-[0.7rem] text-paper px-[11px] py-[4px] rounded-[6px] bg-teal-dark">
                  project 03
                </span>
                <h3 className="font-serif font-semibold text-[1.5rem] mt-[14px] mb-[8px] text-teal-dark">
                  getPdfX
                </h3>
                <p className="desc text-[0.92rem] leading-[1.55] mb-[20px]">
                  A fast online utility for PDF operations (merge, split, compress). Crafted server-side file buffers to process files securely in under 2 seconds.
                </p>
              </div>
              <div className="meta flex justify-between items-center font-mono text-[0.74rem] border-t-[1.5px] pt-[12px] opacity-85 border-teal-mid">
                <span>BACKEND / NODE.JS · 2024</span>
                <span className="arrow text-[0.74rem] font-medium transition-transform duration-150 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] font-mono">
                  getpdfx.com ↗
                </span>
              </div>
            </a>

            {/* Card 04 */}
            <a
              id="case-dmx"
              href="https://dmx-academy.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="card relative border-[2.5px] border-line rounded-[18px] p-[26px] cursor-pointer transition-transform duration-180 bg-paper hover:rotate-0 hover:-translate-y-[6px] focus-visible:rotate-0 focus-visible:-translate-y-[6px] focus-visible:outline-2 focus-visible:outline-purple-mid focus-visible:outline-offset-4 group rotate-[-1.8deg] c-pink bg-pink-fill text-pink-text block"
            >
              <div>
                <span className="card-tab absolute top-[-14px] left-[22px] font-mono text-[0.7rem] text-paper px-[11px] py-[4px] rounded-[6px] bg-pink-dark">
                  project 04
                </span>
                <h3 className="font-serif font-semibold text-[1.5rem] mt-[14px] mb-[8px] text-pink-dark">
                  DMX Academy
                </h3>
                <p className="desc text-[0.92rem] leading-[1.55] mb-[20px]">
                  An interactive online learning platform for digital marketing and SEO. Refactored static generation queries, boosting SEO indexing rates.
                </p>
              </div>
              <div className="meta flex justify-between items-center font-mono text-[0.74rem] border-t-[1.5px] pt-[12px] opacity-85 border-pink-mid">
                <span>FULL STACK / POSTGRES · 2023</span>
                <span className="arrow text-[0.74rem] font-medium transition-transform duration-150 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] font-mono">
                  dmx-academy.vercel.app ↗
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 py-[96px] border-t border-line/10 bg-ink/[0.01]">
        <div className="wrap max-w-[1080px] mx-auto px-8">
          <div className="section-head border-b-2 border-line pb-[28px] mb-[48px]">
            <span className="section-tab inline-block font-mono text-[0.75rem] text-paper bg-ink px-[14px] py-[6px] rounded-t-[7px] -mb-[30px] relative z-10 select-none">
              about
            </span>
            <h2 className="font-serif font-semibold text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] max-w-[600px] leading-tight text-ink mt-8">
              The short version.
            </h2>
          </div>

          <div className="about-grid grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-[48px] items-start">
            <div className="about-photo aspect-square rounded-[18px] border-[2.5px] border-line bg-teal-fill flex items-center justify-center font-serif text-[4rem] font-semibold text-teal-dark rotate-[-1.5deg] select-none">
              IK
            </div>
            <div className="about-body">
              <p className="text-[1.18rem] text-ink font-semibold leading-relaxed mb-[18px]">
                I'm a full stack developer based in Jodhpur, six years into building web applications that are clean, fast, and maintainable.
              </p>
              <p className="text-[1.02rem] leading-[1.75] text-ink-soft mb-[18px]">
                Most of my work starts with a codebase that technically works but struggles to scale — a slow database, a laggy UI, or a fragile integration. I spend my time optimizing database indexes, building type-safe APIs, and ensuring the front-end loads in milliseconds.
              </p>
              <p className="text-[1.02rem] leading-[1.75] text-ink-soft mb-[18px]">
                Before this I worked as a core engineer at two early-stage fintechs, which is where my obsession with web performance and secure architecture started.
              </p>
              <div className="tags flex flex-wrap gap-[8px] mt-[24px]">
                <span className="tag font-mono text-[0.72rem] border-[1.5px] border-line rounded-full px-[13px] py-[6px] select-none hover:bg-ink/5 transition-colors cursor-default">
                  full stack development
                </span>
                <span className="tag font-mono text-[0.72rem] border-[1.5px] border-line rounded-full px-[13px] py-[6px] select-none hover:bg-ink/5 transition-colors cursor-default">
                  next.js / react
                </span>
                <span className="tag font-mono text-[0.72rem] border-[1.5px] border-line rounded-full px-[13px] py-[6px] select-none hover:bg-ink/5 transition-colors cursor-default">
                  node.js / go
                </span>
                <span className="tag font-mono text-[0.72rem] border-[1.5px] border-line rounded-full px-[13px] py-[6px] select-none hover:bg-ink/5 transition-colors cursor-default">
                  database optimization
                </span>
                <span className="tag font-mono text-[0.72rem] border-[1.5px] border-line rounded-full px-[13px] py-[6px] select-none hover:bg-ink/5 transition-colors cursor-default">
                  system architecture
                </span>
                <span className="tag font-mono text-[0.72rem] border-[1.5px] border-line rounded-full px-[13px] py-[6px] select-none hover:bg-ink/5 transition-colors cursor-default">
                  typescript
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="scroll-mt-24 py-[96px] border-t border-line/10">
        <div className="wrap max-w-[1080px] mx-auto px-8">
          <div className="section-head border-b-2 border-line pb-[28px] mb-[48px]">
            <span className="section-tab inline-block font-mono text-[0.75rem] text-paper bg-ink px-[14px] py-[6px] rounded-t-[7px] -mb-[30px] relative z-10 select-none">
              how I work
            </span>
            <h2 className="font-serif font-semibold text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] max-w-[600px] leading-tight text-ink mt-8">
              Same four steps, every project above.
            </h2>
            <p className="text-ink-soft mt-[10px] max-w-[480px] leading-[1.6]">
              The order matters here — each step depends on what the last one found.
            </p>
          </div>

          <div className="process-list flex flex-col">
            {/* Step 01 */}
            <div className="process-row grid grid-cols-[40px_1fr] sm:grid-cols-[64px_1fr_1.4fr] gap-[24px] py-[26px] border-b-[1.5px] border-line first:border-t-[1.5px] items-start">
              <span className="process-num font-mono text-[0.95rem] text-ink-soft">01</span>
              <span className="process-title font-serif font-semibold text-[1.2rem] text-ink">
                Measure, don't guess
              </span>
              <span className="process-desc text-ink-soft text-[0.95rem] leading-[1.6] col-start-2 sm:col-start-3">
                Server logs, database query plans, and Core Web Vitals before writing any code. System metrics show the exact bottlenecks; assumptions do not.
              </span>
            </div>

            {/* Step 02 */}
            <div className="process-row grid grid-cols-[40px_1fr] sm:grid-cols-[64px_1fr_1.4fr] gap-[24px] py-[26px] border-b-[1.5px] border-line first:border-t-[1.5px] items-start">
              <span className="process-num font-mono text-[0.95rem] text-ink-soft">02</span>
              <span className="process-title font-serif font-semibold text-[1.2rem] text-ink">
                Isolate the main bottleneck
              </span>
              <span className="process-desc text-ink-soft text-[0.95rem] leading-[1.6] col-start-2 sm:col-start-3">
                Every system has a single bottleneck limiting its throughput or response times. Optimize that first — refactoring everything at once introduces silent bugs.
              </span>
            </div>

            {/* Step 03 */}
            <div className="process-row grid grid-cols-[40px_1fr] sm:grid-cols-[64px_1fr_1.4fr] gap-[24px] py-[26px] border-b-[1.5px] border-line first:border-t-[1.5px] items-start">
              <span className="process-num font-mono text-[0.95rem] text-ink-soft">03</span>
              <span className="process-title font-serif font-semibold text-[1.2rem] text-ink">
                Build a testable benchmark
              </span>
              <span className="process-desc text-ink-soft text-[0.95rem] leading-[1.6] col-start-2 sm:col-start-3">
                The simplest code path that solves the bottleneck. Run load tests and stress tests locally to verify performance gains before deploying to production.
              </span>
            </div>

            {/* Step 04 */}
            <div className="process-row grid grid-cols-[40px_1fr] sm:grid-cols-[64px_1fr_1.4fr] gap-[24px] py-[26px] border-b-[1.5px] border-line first:border-t-[1.5px] items-start">
              <span className="process-num font-mono text-[0.95rem] text-ink-soft">04</span>
              <span className="process-title font-serif font-semibold text-[1.2rem] text-ink">
                Deploy and monitor
              </span>
              <span className="process-desc text-ink-soft text-[0.95rem] leading-[1.6] col-start-2 sm:col-start-3">
                Monitor real-world telemetry post-deployment. The cycle repeats as user behavior changes and new database patterns emerge under scale.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 py-[96px] border-t border-line/10 bg-ink/[0.01]">
        <div className="wrap max-w-[1080px] mx-auto px-8">
          <div className="contact border-[2.5px] border-line rounded-[22px] p-[56px] bg-coral-fill flex justify-between items-end flex-wrap gap-[28px] rotate-[-0.6deg]">
            <h2 className="font-serif font-semibold text-coral-dark text-[1.8rem] sm:text-[2.8rem] max-w-[460px] leading-tight">
              Got a system that needs to scale or a product to build?
            </h2>
            <div className="contact-links flex flex-col gap-[10px]">
              <a
                href="ishaankhandelwal2007@gmail.com"
                className="font-mono text-[0.95rem] text-coral-dark hover:underline flex items-center gap-[8px] focus-visible:outline-2 focus-visible:outline-coral-dark focus-visible:outline-offset-3"
              >
                mail ↗
              </a>
              <a
                href="https://www.linkedin.com/in/ishaan-khandelwal-109a6135b"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.95rem] text-coral-dark hover:underline flex items-center gap-[8px] focus-visible:outline-2 focus-visible:outline-coral-dark focus-visible:outline-offset-3"
              >
                linkedin ↗
              </a>
              <a
                href="https://www.pdffiller.com/s/aQLDE76k"
                className="font-mono text-[0.95rem] text-coral-dark hover:underline flex items-center gap-[8px] focus-visible:outline-2 focus-visible:outline-coral-dark focus-visible:outline-offset-3"
              >
                read.resume ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-[32px] pb-[48px] bg-paper">
        <div className="wrap max-w-[1080px] mx-auto px-8 flex justify-between text-ink-soft font-mono text-[0.72rem] flex-wrap gap-[8px]">
          <span>Ishaan Khandelwal, Bengalore</span>
          <span>built 2026</span>
        </div>
      </footer>
    </>
  );
}
