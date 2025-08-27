// src/app/projects/high-speed-imaging-fpga/page.tsx
import Image from "next/image";

type Item = {
  category: string;
  name: string;
  notes?: string;
  status: "to buy" | "ordered" | "received" | "tested";
};

const cover = "/images/hs-imaging/cover.png"; // or .jpg if you used jpg

const components: Item[] = [
  { category: "FPGA board", name: "Zynq-7000 (Zybo/Zed) or ZCU104", notes: "DDR on-board; PCIe/10G on higher-end", status: "to buy" },
  { category: "High-speed link", name: "10 GbE SFP+ FMC or PCIe", notes: "choose based on board", status: "to buy" },
  { category: "Camera sensor", name: "Sony Pregius IMX250 / onsemi PYTHON", notes: "global shutter; LVDS/MIPI", status: "to buy" },
  { category: "Lens & lighting", name: "C-mount lens + LED panel", notes: "consistent exposure", status: "to buy" },
  { category: "Sync/trigger", name: "PTP/trigger board", notes: "timestamp alignment", status: "to buy" },
  { category: "Bench tools", name: "12V PSU, scope/LA, tripod/fixtures", status: "to buy" },
];

function StatusPill({ s }: { s: Item["status"] }) {
  const styles: Record<Item["status"], string> = {
    "to buy": "bg-gray-100 text-gray-700",
    "ordered": "bg-amber-100 text-amber-800",
    "received": "bg-blue-100 text-blue-800",
    "tested": "bg-green-100 text-green-800",
  };
  return <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${styles[s]}`}>{s}</span>;
}

export default function Page() {
  return (
    <main className="text-[var(--foreground)]">
      {/* HERO / COVER */}
      <section className="relative h-[44vh] min-h-[300px] w-full overflow-hidden">
        {/* blurred backdrop */}
        <Image
            src={cover}
            alt=""
            fill
            priority
            aria-hidden
            className="object-cover blur-xl scale-110 opacity-40"
            sizes="100vw"
        />
        {/* the full image on top */}
        <Image
            src={cover}
            alt="High-Speed Imaging FPGA cover"
            fill
            priority
            className="object-contain"
            sizes="100vw"
        />
        {/* cyberpunk darkening gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        {/* title block */}
        <div className="absolute left-65 top-45 max-w-lg">
            <h1 className="text-3xl font-bold text-white drop-shadow md:text-4xl">
                High-Speed Imaging with FPGA — <span className="opacity-90">Reusable Vision Engine</span>
            </h1>
            <p className="mt-2 text-sm text-white/80 md:text-base">
                Ingest high-speed camera streams, process edges/keypoints/motion in hardware, and stream compact
                results via 10GbE/PCIe. Same platform, different pipelines for factory, robotics, and labs.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
                {["FPGA", "Vision", "High-Speed I/O", "DDR", "10GbE/PCIe"].map((t) => (
                <span
                    key={t}
                    className="rounded-lg bg-black/40 p-4 backdrop-blur"
                >
                    {t}
                </span>
                ))}
            </div>
            </div>
      </section>

      {/* BODY: sticky TOC + content */}
      <section className="mx-auto grid max-w-5xl gap-6 px-4 py-8 md:grid-cols-[220px_1fr]">
        {/* TOC */}
        <aside className="hidden md:block">
          <nav className="sticky top-24 rounded-lg border border-black/10 p-3 text-sm">
            <div className="mb-2 font-semibold">On this page</div>
            <ul className="space-y-2">
              {[
                ["#purpose", "Purpose"],
                ["#whats-new", "What’s New"],
                ["#components", "Components"],
                ["#architecture", "Architecture"],
                ["#toolbox", "Vision Toolbox"],
                ["#roadmap", "Roadmap"],
                ["#refs", "References"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a className="text-[--color-muted] hover:text-[--color-brand] underline" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* CONTENT */}
        <div className="prose prose-zinc max-w-none dark:prose-invert">
          {/* Purpose */}
          <section id="purpose" className="not-prose">
            <div className="rounded-xl border border-black/10 p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Purpose</h2>
              <p className="mt-2 text-[--color-muted]">
                Build a reusable, low-latency <strong>FPGA vision engine</strong> that ingests high-speed camera streams,
                buffers safely in DDR, runs modular blocks (edges, corners, motion) in hardware, and outputs reduced results
                over 10 GbE/PCIe. Different users load different pipelines.
              </p>
            </div>
          </section>

          {/* What's New */}
          <section id="whats-new" className="not-prose mt-6">
            <div className="rounded-xl border border-black/10 p-5 shadow-sm">
              <h2 className="text-xl font-semibold">What’s New / Why it Matters</h2>
              <ul className="mt-2 grid list-disc gap-2 pl-5 sm:grid-cols-2">
                <li><strong>Deterministic latency:</strong> pixels-in → features-out in microseconds.</li>
                <li><strong>Bandwidth reduction:</strong> stream ROIs/keys/flow, not raw frames.</li>
                <li><strong>Reusable platform:</strong> same hardware, different pipelines.</li>
                <li><strong>Industry fit:</strong> mirrors real work in robotics, vision, and test.</li>
              </ul>
            </div>
          </section>

          {/* Components table */}
          <section id="components" className="not-prose mt-6">
            <div className="rounded-xl border border-black/10 p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Components & Modules</h2>
              <div className="mt-3 overflow-x-auto">
                <table className="w-full border-separate border-spacing-0 text-sm">
                  <thead>
                    <tr>
                      <th className="sticky top-0 bg-white px-3 py-2 text-left">Category</th>
                      <th className="sticky top-0 bg-white px-3 py-2 text-left">Part / Name</th>
                      <th className="sticky top-0 bg-white px-3 py-2 text-left">Notes</th>
                      <th className="sticky top-0 bg-white px-3 py-2 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {components.map((it, i) => (
                      <tr key={i} className="border-t">
                        <td className="px-3 py-2">{it.category}</td>
                        <td className="px-3 py-2">{it.name}</td>
                        <td className="px-3 py-2">{it.notes ?? "—"}</td>
                        <td className="px-3 py-2"><StatusPill s={it.status} /></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-[--color-muted]">
                Update the table by editing the <code>components</code> array at the top of this file.
              </p>
            </div>
          </section>

          {/* Architecture (keep your SVG here if you want) */}
          <section id="architecture" className="not-prose mt-6">
            <div className="rounded-xl border border-black/10 p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Architecture</h2>
              <ol className="mt-2 list-decimal pl-5 text-[--color-muted]">
                <li>Sensor ingest (MIPI/LVDS → AXI)</li>
                <li>DDR buffering (no drops; measured margins)</li>
                <li>Pluggable vision stage</li>
                <li>Reducer (ROIs / keypoints / flow / stats)</li>
                <li>10 GbE/PCIe output; optional PTP timestamps</li>
              </ol>
              {/* drop your existing SVG diagram below */}
              {/* <svg>…</svg> */}
            </div>
          </section>

          {/* Toolbox */}
          <section id="toolbox" className="not-prose mt-6">
            <div className="rounded-xl border border-black/10 p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Vision Toolbox (hardware blocks)</h2>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-black/10 p-3">
                  <h3 className="font-medium">Edges & Gradients</h3>
                  <p className="text-sm text-[--color-muted]">Sobel / Canny for clean outlines</p>
                </div>
                <div className="rounded-lg border border-black/10 p-3">
                  <h3 className="font-medium">Corners & Keypoints</h3>
                  <p className="text-sm text-[--color-muted]">FAST + ORB descriptors</p>
                </div>
                <div className="rounded-lg border border-black/10 p-3">
                  <h3 className="font-medium">Motion</h3>
                  <p className="text-sm text-[--color-muted]">Lucas–Kanade (sparse) / dense flow</p>
                </div>
                <div className="rounded-lg border border-black/10 p-3">
                  <h3 className="font-medium">Reducers</h3>
                  <p className="text-sm text-[--color-muted]">ROIs, keypoints+descriptors, flow vectors</p>
                </div>
              </div>

              <h3 className="mt-4 font-medium">Use-case templates</h3>
              <ul className="mt-1 list-disc pl-5 text-sm text-[--color-muted]">
                <li><strong>Factory:</strong> Canny → blob/shape → stream defect ROIs</li>
                <li><strong>Robotics:</strong> FAST/ORB → LK flow → stream tracks (box + velocity)</li>
                <li><strong>Lab:</strong> threshold/edges → centroid/size → CSV time-series</li>
              </ul>
            </div>
          </section>

          {/* Roadmap */}
          <section id="roadmap" className="not-prose mt-6">
            <div className="rounded-xl border border-black/10 p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Roadmap</h2>
              <ol className="mt-2 list-decimal pl-5 text-[--color-muted]">
                <li>CSI-2/LVDS bring-up → RAW10/12 unpack → checksum</li>
                <li>DDR buffering with stress-gen + checker (no under/over-runs)</li>
                <li>Vision v1 (Sobel/FAST) → v2 (ORB/LK flow) with latency/throughput/power</li>
                <li>10 GbE/PCIe streaming + timestamps; host viewer/API</li>
                <li>Benchmarks vs CPU/GPU (accuracy, latency, energy/FPS)</li>
              </ol>
            </div>
          </section>

          {/* References */}
          <section id="refs" className="not-prose mt-6">
            <div className="rounded-xl border border-black/10 p-5 shadow-sm">
              <h2 className="text-xl font-semibold">References (reputable)</h2>
              <ol className="mt-2 list-decimal pl-5">
                <li><a href="https://docs.opencv.org/4.x/da/d22/tutorial_py_canny.html">OpenCV Canny</a></li>
                <li><a href="https://www.edwardrosten.com/work/rosten_2006_machine.pdf">FAST Corner (Rosten &amp; Drummond)</a></li>
                <li><a href="https://ieeexplore.ieee.org/document/6126544">ORB (Rublee et al., 2011)</a></li>
                <li><a href="https://www.cs.cmu.edu/~16385/s17/Slides/11.1_Lucas_Kanade.pdf">Lucas–Kanade (CMU notes)</a></li>
                <li><a href="https://docs.opencv.org/4.x/d4/dee/tutorial_optical_flow.html">OpenCV Optical Flow</a></li>
                <li><a href="https://docs.amd.com/r/en-US/Vitis_Libraries/vision">AMD/Xilinx Vitis Vision</a></li>
                <li><a href="https://docs.amd.com/r/en-US/pg232-csi2-rx/MIPI-CSI-2-Receiver-Subsystem">AMD/Xilinx MIPI CSI-2 RX (PG232)</a></li>
                <li><a href="https://www.ieee1588.com/">IEEE-1588 PTP</a></li>
              </ol>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
