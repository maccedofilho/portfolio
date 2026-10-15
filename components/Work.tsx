import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Project } from '../types';
import { reveal, revealLine } from '../animations';

const Work: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null!);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Custom Systems",
      category: "Full Stack Development",
      description: "10+ tailor-made web systems that centralize internal processes, connect teams and simplify day-to-day operations. APIs, business rules and integrations designed for each workflow, with ongoing maintenance and support.",
      tags: ["Java", "Spring Boot", "NestJS", "React", "Angular", "PostgreSQL", "MySQL"]
    },
    {
      id: 2,
      title: "Study SaaS",
      category: "Study Platform",
      description: "SaaS platform for studying and ENEM/university entrance exam prep, with practice tests and performance tracking. Turborepo monorepo with a Next.js front end and a NestJS API backed by PostgreSQL, Prisma, Redis and BullMQ, containerized with Docker.",
      tags: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Turborepo"]
    },
    {
      id: 3,
      title: "Security SaaS",
      category: "Security Platform",
      description: "Multi-tenant SaaS for automated vulnerability scanning across source code, web applications, REST/GraphQL APIs and infrastructure, returning actionable findings with remediation guidance. Java 21 microservices orchestrated over Kafka, a React dashboard and CI security gates.",
      tags: ["Java 21", "Spring Boot 3", "Kafka", "React", "TypeScript", "Docker", "Helm"],
      link: "https://github.com/maccedofilho/virtualrift"
    },
    {
      id: 4,
      title: "AI Bots",
      category: "Automation",
      description: "WhatsApp and Telegram bots with AI capabilities that handle conversations and operational tasks automatically, integrated with the systems and data each business already runs on.",
      tags: ["WhatsApp", "Telegram", "LLMs", "n8n", "Node.js"]
    },
    {
      id: 5,
      title: "Landing Pages",
      category: "Web Development",
      description: "10+ conversion-driven landing pages built and launched to present services and turn visitors into clients. Fast, SEO-friendly layouts with fluid motion, deployed on Vercel.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
    }
  ];

  const handleItemClick = (index: number) => {
    setExpandedIndex(prev => prev === index ? null : index);
  };

  return (
    <section
      ref={containerRef}
      id="work"
      className="relative bg-black py-32 min-h-screen flex flex-col justify-center overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <motion.div
          style={{ y: yBackground }}
          className="absolute top-0 right-0 left-0 bottom-0 flex items-center justify-center pointer-events-none select-none z-0"
      >
          <h1 className="text-[12rem] md:text-[24rem] font-bold text-white opacity-[0.03] tracking-tighter whitespace-nowrap">
              WORK
          </h1>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">

        <motion.div
          className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div>
             <h2 className="text-sm font-mono text-gray-400 mb-4 tracking-widest uppercase">
               Selected Works
             </h2>
             <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
               Engineering <span className="text-gray-500">Cases</span>
             </h3>
          </div>
          <p className="text-gray-400 max-w-sm text-right hidden md:block">
            Click to explore technical details.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              isOpen={expandedIndex === index}
              onClick={() => handleItemClick(index)}
              hasOpenOne={expandedIndex !== null}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

interface ProjectItemProps {
  project: Project;
  index: number;
  isOpen: boolean;
  onClick: () => void;
  hasOpenOne: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  project,
  index,
  isOpen,
  onClick,
  hasOpenOne
}) => {

  return (
    <div
      onClick={onClick}
      className={`group relative cursor-pointer
        ${hasOpenOne && !isOpen ? 'opacity-30' : 'opacity-100'} transition-opacity duration-300
      `}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-px bg-white/10 origin-left"
        {...revealLine()}
      />

      <div className="py-10 md:py-14 flex flex-col md:flex-row md:items-baseline justify-between gap-6">

        <div className="flex items-baseline gap-6 md:gap-12 transition-transform duration-300 ease-out group-hover:translate-x-4">
          <motion.span className="font-mono text-sm text-gray-500 group-hover:text-white transition-colors duration-300" {...reveal(0, 16)}>
            0{index + 1}
          </motion.span>
          <motion.h2 className="text-4xl md:text-7xl font-bold text-white group-hover:text-gray-400 transition-colors duration-300" {...reveal(0.08, 48)}>
            {project.title}
          </motion.h2>
        </div>

        <motion.div className="flex items-center justify-between md:justify-end gap-8 min-w-[200px]" {...reveal(0.2, 16)}>
          <span className="text-xs font-bold tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors duration-300">
            {project.category}
          </span>
          <div className={`transition-all duration-300 ${isOpen ? 'rotate-45 text-white' : 'text-gray-500 group-hover:text-white'}`}>
            <ArrowUpRight size={28} aria-hidden="true" />
          </div>
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="pb-12 pt-4 md:pl-20 md:pr-10 flex flex-col md:flex-row justify-between items-start gap-8">

              <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-col gap-4 items-start md:items-end">
                <div className="flex gap-2 flex-wrap justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono border border-white/20 rounded-full text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-purple-400 transition-colors duration-300"
                  >
                    <Github size={16} aria-hidden="true" />
                    View on GitHub
                  </a>
                )}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;
