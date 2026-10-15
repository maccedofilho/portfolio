import React from 'react';
import { motion } from 'framer-motion';
import { ExperienceItem } from '../types';
import { reveal, revealLine } from '../animations';

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
            <div
              key={experience.id}
              className="relative py-12 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-8"
            >
              <motion.div
                className="absolute top-0 left-0 w-full h-px bg-white/10 origin-left"
                {...revealLine()}
              />

              <div className="md:col-span-4">
                <motion.span className="block font-mono text-sm text-purple-400" {...reveal(0, 16)}>
                  {experience.period}
                </motion.span>
                <motion.h4 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-2" {...reveal(0.08)}>
                  {experience.company}
                </motion.h4>
                <motion.span className="block text-xs font-bold tracking-widest uppercase text-gray-400" {...reveal(0.16, 16)}>
                  {experience.type}
                </motion.span>
              </div>

              <div className="md:col-span-8">
                <motion.h5 className="text-xl md:text-2xl font-semibold text-white mb-6" {...reveal(0.1)}>
                  {experience.role}
                </motion.h5>
                <ul className="space-y-3 mb-8">
                  {experience.highlights.map((highlight, i) => (
                    <motion.li
                      key={highlight}
                      className="flex gap-3 text-gray-300 leading-relaxed"
                      {...reveal(0.15 + i * 0.06, 20)}
                    >
                      <span className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-purple-500" aria-hidden="true" />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex gap-2 flex-wrap">
                  {experience.tags.map((tag, i) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full text-gray-300"
                      {...reveal(0.1 + i * 0.04, 12)}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
