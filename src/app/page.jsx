"use client";

import { useEffect, useMemo, useState } from "react";

const services = [
  {
    title: "Protocol Design & Architecture",
    description:
      "Design resilient on-chain systems with clear governance and failure boundaries.",
    bullets: [
      "Blockchain protocol design",
      "On-chain and off-chain architecture",
      "Upgradeability and governance patterns",
      "Threat modeling and failure analysis",
    ],
  },
  {
    title: "Smart Contract Engineering",
    description:
      "Build production-ready Solidity systems with predictable execution and upgrade paths.",
    bullets: [
      "Solidity (EVM) development",
      "Production-ready contracts",
      "Gas optimization",
      "Upgrade patterns (UUPS, Diamond, etc.)",
    ],
  },
  {
    title: "DeFi & Token Mechanics",
    description:
      "Design economic systems that are coherent under stress and adversarial conditions.",
    bullets: [
      "AMMs, lending, staking, vesting",
      "Tokenomics design and review",
      "Incentive alignment",
      "Economic attack vectors",
    ],
  },
  {
    title: "Identity, Attestation & Compliance",
    description:
      "Implement identity and attestations with strict access control and auditability.",
    bullets: [
      "DID and on-chain identity systems",
      "Attestation frameworks",
      "Access control and gating",
      "Compliance-aware architecture",
    ],
  },
  {
    title: "Cross-Chain & Infrastructure",
    description:
      "Ship interoperability and deployment infrastructure for multi-chain systems.",
    bullets: [
      "Cross-chain messaging",
      "Bridges and interoperability",
      "Deployment automation",
      "CI/CD for smart contracts",
    ],
  },
  {
    title: "Code Review, Cleanup & Audits",
    description:
      "Prepare codebases for production through rigorous review and refactoring.",
    bullets: [
      "Pre-audit reviews",
      "Legacy contract cleanup",
      "Refactors and test coverage",
      "Deployment readiness checks",
    ],
  },
];

const steps = [
  "Technical scoping call",
  "Architecture and risk review",
  "Implementation or review",
  "Deployment and handover",
  "Optional long-term advisory",
];

const demos = [
  {
    name: "CipherMint",
    description:
      "Compliant confidential ERC-20 POC using Zama privacy tooling.",
    status: "Ready",
    statusTone: "ready",
    href: "https://ciphermint.stevensba.com",
  },
  {
    name: "CipherRWA",
    description:
      "Compliant confidential RWA, close to production readiness for customer demos.",
    status: "Coming Q1 2026",
    statusTone: "upcoming",
    href: "#",
  },
  {
    name: "CipherDashboard",
    description: "Dashboard to deploy compliant confidential RWAs at scale.",
    status: "Coming Q2 2026",
    statusTone: "upcoming",
    href: "#",
  },
];

const trustedBy = [
  { name: "Consensys", src: "/Consensys_logo_2023.svg.png" },
  { name: "Dowgo", src: "/dowgo-logo.png" },
  { name: "PureStake", src: "/purestake-logo.png" },
  { name: "Compilot", src: "/compilot-logo.svg" },
  { name: "Hypernet", src: "/hypernet-logo.png" },
  { name: "Vibe Bio", src: "/vibe-bio-logo.webp" },
];

export default function Home() {
  const navItems = useMemo(
    () => [
      { id: "top", label: "Overview" },
      { id: "services", label: "Services" },
      { id: "process", label: "How we work" },
      { id: "about", label: "About" },
      { id: "demos", label: "Demos" },
      { id: "trusted", label: "Trusted" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (!sections.length) {
      return;
    }

    const updateActive = () => {
      const offset = 120;
      let current = sections[0]?.id ?? "top";
      for (const section of sections) {
        const top = section.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = section.id;
        } else {
          break;
        }
      }
      setActiveSection(current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [navItems]);

  return (
    <main className="min-h-screen text-ink">
      <nav className="sticky top-0 z-50 border-b border-border bg-white/80 backdrop-blur">
        <div className="mx-auto flex w-full items-center justify-between px-10 py-3">
          <a
            href="#top"
            className="flex items-center gap-3 text-sm font-semibold text-ink"
          >
            <span className="flex items-center justify-center">
              <img
                src="/sba-logo.png"
                alt="Stevens Blockchain Advisory logo"
                className="h-10 w-auto"
              />
            </span>
            Stevens Blockchain Advisory
          </a>
          <div className="flex items-center gap-8">
            <div className="flex flex-wrap items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`pb-1 transition ${
                    activeSection === item.id
                      ? "border-b-2 border-accent text-ink"
                      : "border-b-2 border-transparent hover:border-accent/40 hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <a
                className="inline-flex items-center justify-center rounded-md border border-border bg-white/90 px-4 py-2 text-xs font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                href="#contact"
              >
                Talk to us
              </a>
              <a
                className="inline-flex items-center justify-center rounded-md border border-border bg-white/90 px-4 py-2 text-xs font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                href="#demos"
              >
                View demos
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section
        id="top"
        className="border-b border-border bg-gradient-to-b from-surface via-white to-white"
      >
        <div className="mx-auto max-w-6xl px-6 pb-24 pt-20">
          <div className="flex flex-wrap items-center justify-between gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted">
            Stevens Blockchain Advisory
            <span className="rounded-full border border-border bg-white/80 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.35em] text-ink">
              Protocol systems
            </span>
          </div>
          <div className="mt-8 h-1 w-12 rounded-full bg-accent" aria-hidden />
          <h1 className="mt-8 max-w-3xl text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Production-grade web3 engineering &amp; protocol advisory
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Design, implementation, and review of blockchain systems — from
            smart contracts to cross-chain architecture.
          </p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            10 years operating in Web3
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center justify-center rounded-md border border-border bg-white/90 px-6 py-3 text-sm font-semibold text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              href="#contact"
            >
              Get in touch
            </a>
            <a
              className="cta-glow inline-flex items-center justify-center rounded-md border border-accent/70 px-6 py-3 text-sm font-semibold text-ink shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              href="#demos"
            >
              View demos
            </a>
          </div>
        </div>
      </section>

      <section id="demos" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Demos
          </p>
          <div className="mt-4 h-1 w-10 rounded-full bg-accent" aria-hidden />
          <h2 className="mt-6 text-3xl font-semibold text-ink">
            RWA privacy demos with Zama
          </h2>
          <p className="mt-4 text-base text-muted">
            Demonstrations of compliant, confidential RWAs built with Zama
            tooling.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {demos.map((demo) => (
              <a
                key={demo.name}
                className={`flex items-start justify-between rounded-2xl border px-6 py-6 text-sm text-ink shadow-md transition hover:-translate-y-0.5 hover:shadow-lg ${
                  demo.statusTone === "ready"
                    ? "border-accent/60 bg-gradient-to-br from-white via-white to-surface/70"
                    : "border-border bg-white/95"
                }`}
                href={demo.href}
              >
                <div>
                  <p className="text-base font-semibold text-ink">
                    {demo.name}
                  </p>
                  <p className="mt-3 text-sm text-muted">{demo.description}</p>
                </div>
                <span
                  className={`rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.2em] ${
                    demo.statusTone === "ready"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-surface text-muted"
                  }`}
                >
                  {demo.status}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Services
            </p>
            <div className="mt-4 h-1 w-10 rounded-full bg-accent" aria-hidden />
            <h2 className="mt-6 text-3xl font-semibold text-ink">
              Core capabilities
            </h2>
            <p className="mt-4 text-base text-muted">
              A clear service taxonomy designed for protocol teams and CTOs who
              need production-grade delivery, with deep experience in ZKPs and
              FHE using Zama tooling.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border border-border bg-white/95 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted">{service.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span
                        className="mt-2 h-1.5 w-1.5 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            How we work
          </p>
          <div className="mt-4 h-1 w-10 rounded-full bg-accent" aria-hidden />
          <h2 className="mt-6 text-3xl font-semibold text-ink">
            Structured engagement, minimal noise
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step}
                className="rounded-lg border border-border bg-white/90 p-5"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{`0${
                  index + 1
                }`}</div>
                <p className="mt-4 text-sm text-ink">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            About
          </p>
          <div className="mt-4 h-1 w-10 rounded-full bg-accent" aria-hidden />
          <h2 className="mt-6 text-3xl font-semibold text-ink">
            Stevens Blockchain Advisory
          </h2>
          <p className="mt-6 max-w-3xl text-base text-muted">
            We are a technical consulting firm focused on production blockchain
            systems, smart contract engineering, and protocol architecture. Our
            work spans DeFi, identity, and cross-chain systems, with a focus on
            real users and multi-chain deployments. We bring 10 years of Web3
            experience and deep expertise in ZKPs and FHE with Zama tooling.
          </p>
          <p className="mt-4 max-w-3xl text-base text-muted">
            Background includes work with major Web3 protocols and startups. We
            prioritize clarity, code quality, and deployment readiness over
            marketing.
          </p>
        </div>
      </section>

      <section id="trusted" className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Trusted by
          </p>
          <div className="mt-4 h-1 w-10 rounded-full bg-accent" aria-hidden />
          <h2 className="mt-6 text-3xl font-semibold text-ink">
            Teams that rely on us
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {trustedBy.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center rounded-lg border border-border bg-white/90 px-6 py-12 text-sm font-semibold text-muted shadow-sm"
              >
                <img
                  src={company.src}
                  alt={`${company.name} logo`}
                  className="h-12 max-w-[200px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Contact
          </p>
          <div className="mt-4 h-1 w-10 rounded-full bg-accent" aria-hidden />
          <h2 className="mt-6 text-3xl font-semibold text-ink">
            Start a conversation
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted">
            Email is the fastest route. We typically reply within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <a
              className="rounded-md border border-border bg-white/90 px-5 py-3 font-semibold text-ink shadow-sm"
              href="mailto:contact@stevensba.com"
            >
              contact@stevensba.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
