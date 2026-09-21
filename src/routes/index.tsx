import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hamza Kaya — Backend Developer" },
      {
        name: "description",
        content:
          "Portfolio of Hamza Kaya, a backend developer in Istanbul building APIs, microservices, and cloud systems with Python, Go, and TypeScript.",
      },
      { property: "og:title", content: "Hamza Kaya — Backend Developer" },
      {
        property: "og:description",
        content:
          "Backend developer building APIs, microservices, and cloud systems with Python, Go, and TypeScript.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
];

const EXPERIENCE = [
  {
    company: "Defacto",
    role: "Backend Developer",
    period: "Mar 2026 — Present",
    points: [
      "Building backend services and AI integrations for one of Turkey's largest fashion retailers.",
      "Implementing backend features across the e-commerce stack, with occasional frontend work.",
    ],
    tags: ["Backend", "AI Integrations", "E-commerce", "Frontend"],
  },
  {
    company: "Bestcloudforme",
    role: "Backend Developer",
    period: "Oct 2023 — Feb 2026",
    points: [
      "Developed backend services and APIs with Flask and FastAPI for analytics and efficiency management.",
      "Automated team follow-up via the Trello API and generated reports and PDFs through Google Docs, Slides, and Sheets APIs.",
      "Managed SQL databases with SQLAlchemy and Pydantic, integrating them with third-party applications, plus NoSQL and realtime databases for analytics.",
    ],
    tags: ["Python", "Flask", "FastAPI", "SQLAlchemy", "Pydantic", "NoSQL"],
  },
  {
    company: "Parny",
    role: "Backend Developer",
    period: "Jan 2024 — Jan 2025",
    points: [
      "Built analytic tools and alert management applications in a microservice architecture with Golang and Flask for DevOps teams.",
      "Used Kafka and Redis for real-time alert handling, queues, and caching.",
      "Applied AI tools and LLM models to optimize alert responses and recommendations for DevOps and support teams, using AWS services such as S3, Amazon Connect, and Bedrock.",
    ],
    tags: ["Golang", "Kafka", "Redis", "AWS", "LLM", "Microservices"],
  },
  {
    company: "Olcsan",
    role: "Cyber Security Intern",
    period: "Aug 2022 — Sep 2022",
    points: [
      "Studied digital forensics and cyber security regulations.",
      "Presented OSI network layers and simulated penetration testing in the TryHackMe environment.",
    ],
    tags: ["Security", "Digital Forensics", "Networking"],
  },
];

const PROJECTS = [
  {
    title: "Pneumonia Detection from Chest X-Ray",
    description:
      "ML-powered system that analyzes chest X-rays through a simple web interface to detect pneumonia automatically.",
    tags: ["Python", "JavaScript", "Machine Learning"],
  },
  {
    title: "Cloud-Based IoT Computing",
    description:
      "Cloud-based IoT system using Kubernetes and Golang microservices to remotely control ESP32 devices and read sensor data.",
    tags: ["Golang", "Kubernetes", "ESP32", "IoT"],
  },
  {
    title: "Transaction Simulation API",
    description:
      "Secure role-based transaction management API with authentication, filtering, and reporting features.",
    tags: ["TypeScript", "NestJS", "Auth", "REST"],
  },
  {
    title: "Wireless Seismic Data Transmission",
    description:
      "Real-time system to detect earthquakes and locate survivors, with a web interface to visualize signals. Wireless, scalable, and cost-effective for disaster zones.",
    tags: ["Embedded", "Real-time", "Web", "Search & Rescue"],
  },
];

const CERTIFICATES = [
  { name: "Golang Certificate", issuer: "HackerRank" },
  { name: "Python Certificate", issuer: "HackerRank" },
  { name: "REST API", issuer: "HackerRank" },
  { name: "Basic Linux 101–401", issuer: "Turkcell" },
  { name: "The Bits and Bytes of Computer Networking", issuer: "Google" },
  { name: "Technical Support Fundamentals", issuer: "Google" },
  { name: "API and API Test", issuer: "BTK Academy" },
  { name: "Basic Network Technologies", issuer: "BTK Academy" },
  { name: "A'dan Z'ye Docker", issuer: "Udemy" },
];

const SKILLS = [
  "Python",
  "Golang",
  "TypeScript",
  "Flask",
  "FastAPI",
  "NestJS",
  "PostgreSQL",
  "SQLAlchemy",
  "Redis",
  "Kafka",
  "Docker",
  "Kubernetes",
  "AWS",
  "Linux",
  "REST APIs",
  "Microservices",
];

function SectionHeading({ children }: { children: string }) {
  return (
    <h2 className="flex items-center gap-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
      {children}
      <span className="h-px flex-1 bg-border" />
    </h2>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground">
      {children}
    </span>
  );
}

function Portfolio() {
  return (
    <div className="mx-auto min-h-screen max-w-6xl lg:flex">
      {/* Left — fixed intro panel */}
      <aside className="px-6 pt-16 pb-10 sm:px-12 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-20 lg:pl-6 lg:pr-16">
        <div>
          <p className="font-display text-sm font-medium tracking-widest text-primary uppercase">
            Backend Developer
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-glow sm:text-6xl">
            Hamza Kaya
          </h1>
          <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
            I build the systems behind the product — APIs, microservices, and
            cloud infrastructure with Python, Go, and TypeScript.
          </p>

          <nav className="mt-12 hidden lg:block">
            <ul className="space-y-3">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group flex items-center gap-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="h-px w-8 bg-muted-foreground transition-all group-hover:w-12 group-hover:bg-primary" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 space-y-3 text-sm text-muted-foreground lg:mt-0">
          <a
            href="mailto:kaya.hamza59@hotmail.com"
            className="flex items-center gap-3 transition-colors hover:text-foreground"
          >
            <Mail className="size-4 text-primary" />
            kaya.hamza59@hotmail.com
          </a>
          <p className="flex items-center gap-3">
            <MapPin className="size-4 text-primary" />
            Istanbul, Türkiye
          </p>
          <div className="flex items-center gap-4 pt-3">
            <a
              href="https://github.com/hamzakaya5"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-kaya-/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </aside>

      {/* Right — scrolling content */}
      <main className="px-6 pb-24 sm:px-12 lg:w-[58%] lg:py-20 lg:pr-6 lg:pl-0">
        <section id="about" className="scroll-mt-20">
          <SectionHeading>About</SectionHeading>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            I'm a backend developer based in Istanbul, currently completing a
            Master's in Computer Science at Istanbul Technical University. For
            the past two years I've been building analytics platforms, alert
            management systems, and internal tooling — mostly in{" "}
            <span className="text-foreground">Python</span> and{" "}
            <span className="text-foreground">Go</span> — with a focus on
            microservices, message queues, and cloud infrastructure. I like
            work where reliability matters: systems that stay up, alerts that
            reach the right people, and data that arrives on time.
          </p>
        </section>

        <section id="experience" className="mt-20 scroll-mt-20">
          <SectionHeading>Experience</SectionHeading>
          <div className="mt-8 space-y-4">
            {EXPERIENCE.map((job) => (
              <article
                key={job.company}
                className="card-hover rounded-xl border border-border bg-card/60 p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">
                    {job.role} · <span className="text-primary">{job.company}</span>
                  </h3>
                  <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {job.period}
                  </p>
                </div>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-20 scroll-mt-20">
          <SectionHeading>Projects</SectionHeading>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="card-hover flex flex-col rounded-xl border border-border bg-card/60 p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-base font-semibold leading-snug">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="mt-20 scroll-mt-20">
          <SectionHeading>Education</SectionHeading>
          <div className="mt-8 rounded-xl border border-border bg-card/60 p-6">
            <h3 className="font-display text-lg font-semibold">
              Istanbul Technical University
            </h3>
            <div className="mt-4 space-y-4 text-sm">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-foreground">
                  M.Sc. Computer Science
                </p>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  2025 — Present
                </p>
              </div>
              <div className="h-px bg-border" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="text-foreground">
                  B.Sc. Electronics &amp; Communication Engineering
                </p>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  2020 — 2025 · GPA 2.99
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="certificates" className="mt-20 scroll-mt-20">
          <SectionHeading>Certificates</SectionHeading>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {CERTIFICATES.map((cert) => (
              <div
                key={cert.name}
                className="flex items-baseline justify-between gap-3 rounded-lg border border-border bg-card/60 px-4 py-3"
              >
                <p className="text-sm font-medium">{cert.name}</p>
                <p className="shrink-0 text-xs text-muted-foreground">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <SectionHeading>Toolbox</SectionHeading>
          <div className="mt-8 flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-xl border border-border bg-gradient-to-br from-card to-indigo-deep/40 p-8 text-center">
          <h2 className="font-display text-2xl font-bold">
            Let's build something reliable.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            I'm open to backend roles and interesting projects. The fastest way
            to reach me is email.
          </p>
          <a
            href="mailto:kaya.hamza59@hotmail.com"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-display text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
            <ArrowUpRight className="size-4" />
          </a>
        </section>

        <footer className="mt-16 text-center text-xs text-muted-foreground">
          © 2026 Hamza Kaya · Istanbul
        </footer>
      </main>
    </div>
  );
}
