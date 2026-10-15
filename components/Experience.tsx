import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Languages } from 'lucide-react';
import { ExperienceItem } from '../types';

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Auto Crivo",
    role: "Full Stack Software Developer",
    type: "Contractor · Remote",
    period: "Sep 2024 — Oct 2025",
    highlights: [
      "Built and maintained 50+ REST APIs with Node.js, NestJS and TypeScript.",
      "Owned every screen of the platform's front end, built with React and Next.js.",
      "Optimized back-end queries and flows, cutting request response times.",
      "Connected interfaces, back-end services and PostgreSQL in a system used daily by hundreds of users.",
      "Took part in architecture decisions, feature work, testing, code review, deploys and maintenance."
    ],
    tags: ["Node.js", "NestJS", "TypeScript", "React", "Next.js", "PostgreSQL", "Docker", "CI/CD"]
  },
  {
    id: 2,
    company: "Freelance",
    role: "Full Stack Web Developer",
    type: "Contractor · Remote",
    period: "Jun 2022 — Present",
    highlights: [
      "Delivered 10+ web systems that centralize internal processes, connect teams and simplify operations.",
      "Built and launched 10+ landing pages focused on presenting services and converting clients.",
      "Implemented APIs, business rules and integrations with Java, Spring Boot, Node.js and NestJS.",
      "Shipped AI-powered features, integrating language models into web systems and automation flows.",
      "Created AI bots for WhatsApp and Telegram that automate conversations and operational tasks.",
      "Deployed and ran apps on DigitalOcean VPS servers, with front ends and landing pages on Vercel."
    ],
    tags: ["Java", "Spring Boot", "Node.js", "NestJS", "React", "Next.js", "Angular", "PostgreSQL", "MySQL", "LLMs"]
  }
];

const skills = [
  { group: "Back-end", items: ["Java", "Spring Boot", "Node.js", "NestJS", "TypeScript", "REST APIs"] },
  { group: "Front-end", items: ["React", "Next.js", "Angular", "JavaScript", "HTML5", "CSS3"] },
  { group: "AI & Automation", items: ["LLMs", "LangChain", "n8n", "WhatsApp & Telegram bots", "Claude Code", "Codex"] },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "SQL", "Relational modeling"] },
  { group: "DevOps & Tools", items: ["Docker", "Git", "GitHub", "Postman", "DigitalOcean", "Vercel", "CI/CD"] },
  { group: "Architecture", items: ["OOP", "SOLID", "Clean Code", "Clean Architecture", "Microservices"] }
];

const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative bg-neutral-950 py-32 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
             <h2 className="text-sm font-mono text-gray-400 mb-4 tracking-widest uppercase">
               Career
             </h2>
             <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
               Professional <span className="text-gray-500">Experience</span>
             </h3>
          </div>
          <p className="text-gray-400 max-w-sm md:text-right">
            4+ years building, evolving and maintaining web applications in production.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {experiences.map((experience) => (
            <motion.div
              key={experience.id}
              className="border-t border-white/10 py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="md:col-span-4">
                <span className="font-mono text-sm text-purple-400">
                  {experience.period}
                </span>
                <h4 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-2">
                  {experience.company}
                </h4>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                  {experience.type}
                </span>
              </div>

              <div className="md:col-span-8">
                <h5 className="text-xl md:text-2xl font-semibold text-white mb-6">
                  {experience.role}
                </h5>
                <ul className="space-y-3 mb-8">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-gray-300 leading-relaxed">
                      <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-purple-500" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 flex-wrap">
                  {experience.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-16 grid grid-cols-1 md:grid-cols-12 gap-12">

          <motion.div
            className="md:col-span-4 space-y-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div>
              <h4 className="text-sm font-mono text-gray-400 mb-6 tracking-widest uppercase flex items-center gap-2">
                <GraduationCap size={16} aria-hidden="true" /> Education
              </h4>
              <p className="text-xl font-semibold text-white mb-1">B.Sc. in Software Engineering</p>
              <p className="text-gray-400 mb-2">Centro Universitário Católica de Santa Catarina</p>
              <span className="font-mono text-sm text-purple-400">2025 — Expected Dec 2028</span>
            </div>

            <div>
              <h4 className="text-sm font-mono text-gray-400 mb-6 tracking-widest uppercase flex items-center gap-2">
                <Languages size={16} aria-hidden="true" /> Languages
              </h4>
              <p className="text-gray-300">Portuguese <span className="text-gray-500">— Native</span></p>
              <p className="text-gray-300">English <span className="text-gray-500">— Intermediate</span></p>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h4 className="text-sm font-mono text-gray-400 mb-6 tracking-widest uppercase">
              Tech Stack
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <div key={skill.group}>
                  <p className="text-white font-semibold mb-3">{skill.group}</p>
                  <div className="flex gap-2 flex-wrap">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full text-gray-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
