import Image from "next/image";
import Link from "next/link";

// src/app/page.tsx
type Project = {
  title: string;
  description: string;
  code?: string;   // GitHub link
  docs?: string;   // docs page / PDF
  video?: string;  // demo video
  tags?: string[];
  image?: string;     // NEW
  imageAlt?: string;  // NEW
};

const projects: Project[] = [
  {
    title: "UWB Indoor Localization",
    description: "DW3000 anchors + tags, ToF/TDoA, live 2D/3D map; < 20 cm median error.",
    code: "https://github.com/you/uwb-rtls",
    docs: "/docs/uwb-rtls.html",
    video: "/media/uwb-demo.mp4",
    tags: ["RF", "Embedded", "Fusion"],
  },
  {
    title: "SDR OFDM Link",
    description: "GNU Radio baseband + embedded front-end; adaptive MCS with BER plots.",
    code: "https://github.com/you/sdr-link",
    docs: "/docs/sdr-link.html",
    tags: ["DSP", "Comms"],
  },
  {
    title: "Digital Power / FOC Drive",
    description: "C2000 closed-loop control; efficiency & transient KPIs with PyVISA sweeps.",
    code: "https://github.com/you/digital-power",
    tags: ["Power", "Control"],
  },
  {
    title: "FPGA DDR3 Pipeline",
    description: "MIG DDR3 + AXI stream; throughput/latency report @ 1080p60.",
    code: "https://github.com/you/fpga-ddr-pipe",
    tags: ["FPGA", "High-Speed"],
  },
  {
    title: "Edge-AI Vision Sorter",
    description: "Jetson + OAK-D; part/defect detection → actuator; end-to-end latency logged.",
    code: "https://github.com/you/edge-vision-sorter",
    tags: ["AI/CV", "Robotics"],
  },
  {
    title: "Automated Test Bench",
    description: "SCPI + PyVISA orchestration; repeatable sweeps with plots & CSV artifacts.",
    code: "https://github.com/you/auto-test-bench",
    tags: ["Test", "CI"],
  },
  {
    title: "High-Speed Imaging FPGA",
    description: "Modular hardware vision engine: edges/keys/flow on-chip, DDR buffering, 10 GbE/PCIe output.",
    docs: "/projects/high-speed-imaging-fpga",   // <— internal page
    tags: ["FPGA", "Vision", "High-Speed"],
    image: "/images/hs-imaging/cover.png",
    imageAlt: "Cyberpunk cover of High-Speed Imaging FPGA pipeline",
  },
];

export default function Home() {
  return (
    <main className="min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
      {/* HEADER / NAV */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <Link href="/" className="text-lg font-semibold">YourName</Link>
          <div className="space-x-6 text-sm">
              <Link href="#projects" className="hover:text-[--color-brand]">Projects</Link>
              <Link href="#about" className="hover:text-[--color-brand]">About</Link>
              <Link href="#contact" className="hover:text-[--color-brand]">Contact</Link>
              <Link href="/projects/high-speed-imaging-fpga" className="hover:text-[--color-brand]">
                HS Imaging (FPGA)</Link>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Electrical Engineer • Embedded • Power • RF
          </h1>
          <p className="mt-4 text-lg text-[--color-muted]">
            I build industry-grade systems: power converters, UWB, SDR, robotics, FPGA, and test automation.
          </p>
          <div className="mt-6 space-x-3">
            <a
              href="#projects"
              className="inline-block rounded-[--radius-card] border px-5 py-3 hover:bg-black/5"
            >
              See Projects
            </a>
            <a
              href="/resume.pdf"
              className="inline-block rounded-[--radius-card] bg-[--color-brand] px-5 py-3 text-white hover:bg-[--color-brand-600]"
            >
              Download CV
            </a>
          </div>
        </div>
        <div className="aspect-video rounded-[--radius-card] border border-black/10 bg-black/5" />
      </section>

      {/* PROJECTS GRID */}
      <section id="projects" className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="mb-6 text-2xl font-semibold">Featured Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
                key={p.title}
                className="group rounded-[--radius-card] border border-black/10 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg overflow-hidden"
              >
                {/* Image block */}
                {p.image && (
                  <div className="relative aspect-video w-full bg-black/5 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.imageAlt ?? p.title}
                      fill
                      className="object-cover card-img"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* soft bottom gradient that fades in a bit on hover */}
                    <div className="pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-200 group-hover:opacity-100"
                        style={{ background: "linear-gradient( to top, rgba(0,0,0,0.35), rgba(0,0,0,0.0) 45% )" }} />

                    {/* small corner badge */}
                    <span className="absolute left-2 top-2 rounded-full bg-white/80 px-2 py-0.5 text-[11px] font-medium backdrop-blur">
                      FPGA • Vision
                    </span>
                  </div>
                )}

                {/* Text content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-[--color-muted] leading-relaxed">{p.description}</p>

                  {p.tags && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-black/10 bg-black/5 px-2 py-0.5 text-xs text-[--color-muted]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-3 flex gap-3 text-sm">
                    {p.code && <a className="underline hover:text-[--color-brand]" href={p.code}>Code</a>}
                    {p.docs && <a className="underline hover:text-[--color-brand]" href={p.docs}>Docs</a>}
                    {p.video && <a className="underline hover:text-[--color-brand]" href={p.video}>Video</a>}
                  </div>
                </div>
              </article>
          ))}
        </div>
      </section>
      {/* ABOUT */}
<section id="about" className="mx-auto max-w-6xl px-4 pb-20">
  <h2 className="mb-4 text-2xl font-semibold">About</h2>
  <p className="max-w-3xl text-[--color-muted]">
    I’m an Electrical Engineer focused on embedded systems, power electronics, RF/communications,
    robotics/AI, and FPGA. I build end-to-end systems and document performance with repeatable tests.
  </p>
  <ul className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
    <li className="rounded-[--radius-card] border border-black/10 p-3">Embedded & RTOS</li>
    <li className="rounded-[--radius-card] border border-black/10 p-3">Power & Control (C2000)</li>
    <li className="rounded-[--radius-card] border border-black/10 p-3">RF / SDR / UWB</li>
    <li className="rounded-[--radius-card] border border-black/10 p-3">FPGA (AXI/MIG)</li>
    <li className="rounded-[--radius-card] border border-black/10 p-3">Robotics (ROS 2)</li>
    <li className="rounded-[--radius-card] border border-black/10 p-3">Test Automation (SCPI/PyVISA)</li>
  </ul>
</section>

{/* CONTACT */}
<section id="contact" className="mx-auto max-w-6xl px-4 pb-24">
  <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
  <p className="max-w-3xl text-[--color-muted]">
    The fastest way to reach me is email. I’ll add a proper contact form later.
  </p>

  {/* simple mailto button for now */}
  <a
    href="mailto:your.name@email.com"
    className="mt-4 inline-block rounded-[--radius-card] bg-[--color-brand] px-5 py-3 text-white hover:bg-[--color-brand-600]"
  >
    Email me
  </a>

  {/* (optional) form skeleton – not wired yet */}
  {/* <form className="mt-6 max-w-xl space-y-3">
    <input className="w-full rounded-[--radius-card] border p-3" placeholder="Your email" />
    <textarea className="w-full rounded-[--radius-card] border p-3" rows={5} placeholder="Message" />
    <button className="rounded-[--radius-card] bg-[--color-brand] px-5 py-3 text-white hover:bg-[--color-brand-600]">Send</button>
  </form> */}
</section>

    </main>
  );
}
