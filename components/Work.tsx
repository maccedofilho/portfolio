import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Work: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { t, language } = useLanguage();
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const projects: Project[] = [
    {
      id: 1,
      title: "Vehicle SaaS",
      category: language === 'pt' ? "SaaS Full Stack" : "Full Stack SaaS",
      description: language === 'pt' 
        ? "Plataforma para gestão veicular, com foco em controle operacional, organização de dados, automação de processos e escalabilidade. Desenvolvida com boas práticas, arquitetura sólida e pronta para crescimento real."
        : "Vehicle management platform focused on operational control, data organization, process automation and scalability. Built with best practices, solid architecture and ready for real growth.",
      tags: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker"]
    },
    {
      id: 2,
      title: "Core Auth API",
      category: language === 'pt' ? "Engenharia de Segurança" : "Security Engineering",
      description: language === 'pt'
        ? "Sistema de autenticação pronto para produção com RBAC, rotação de refresh token, controle de sessão, rate limiting e bloqueio de conta. Totalmente documentado com OpenAPI."
        : "Production-ready authentication system featuring RBAC, refresh token rotation, session control, rate limiting and account lockout. Fully documented with OpenAPI.",
      tags: ["Java 21", "Spring Boot 3", "Security", "JWT"]
    },
    {
      id: 3,
      title: "Metrics Dashboard",
      category: language === 'pt' ? "Visualização de Dados" : "Data Visualization",
      description: language === 'pt'
        ? "Dashboard de visualização de dados e métricas operacionais voltado para gestão de obras, projetado para uma equipe de cerca de 20 pessoas. Suporta o armazenamento e acompanhamento de múltiplos projetos, com foco em organização, visibilidade do progresso e apoio à tomada de decisão."
        : "Data visualization and operational metrics dashboard for construction management, designed for a team of around 20 people. Supports storage and tracking of multiple projects, focusing on organization, progress visibility and decision-making support.",
      tags: ["React", "TypeScript", "PostgreSQL"]
    },
    {
      id: 4,
      title: "Payment Gateway",
      category: language === 'pt' ? "Engenharia Financeira" : "Financial Engineering",
      description: language === 'pt'
        ? "Simulador de gateway de pagamento estilo Stripe, focado em engenharia financeira real: máquina de estados, idempotência, webhooks assinados e ledger interno, com arquitetura sólida, segurança e zero dependência externa."
        : "Stripe-style payment gateway simulator focused on real financial engineering: state machine, idempotency, signed webhooks and internal ledger, with solid architecture, security and zero external dependencies.",
      tags: ["Java 21", "Spring Boot 3", "PostgreSQL", "Docker"]
    },
    {
      id: 5,
      title: "Landing Pages",
      category: language === 'pt' ? "Desenvolvimento Web" : "Web Development",
      description: language === 'pt'
        ? "Landing pages de alta conversão com foco em performance, SEO e experiência do usuário. Desenvolvidas com código limpo, animações fluidas e otimização para Core Web Vitals, maximizando engajamento e geração de leads."
        : "High-conversion landing pages focused on performance, SEO and user experience. Built with clean code, fluid animations and Core Web Vitals optimization, maximizing engagement and lead generation.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"]
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
              {language === 'pt' ? 'PROJETOS' : 'WORK'}
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
             <h2 className="text-sm font-mono text-gray-500 mb-4 tracking-widest uppercase">
               {t('work.subtitle')}
             </h2>
             <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
               {t('work.title')} <span className="text-gray-600">{t('work.title.span')}</span>
             </h3>
          </div>
          <p className="text-gray-400 max-w-sm text-right hidden md:block">
            {t('work.hover')}
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
      className={`group relative border-t border-white/10 cursor-pointer
        ${hasOpenOne && !isOpen ? 'opacity-30' : 'opacity-100'} transition-opacity duration-300
      `}
    >
      <div className="py-10 md:py-14 flex flex-col md:flex-row md:items-baseline justify-between gap-6">
        
        <div className="flex items-baseline gap-6 md:gap-12 transition-transform duration-300 ease-out group-hover:translate-x-4">
          <span className="font-mono text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
            0{index + 1}
          </span>
          <h2 className="text-4xl md:text-7xl font-bold text-white group-hover:text-gray-400 transition-colors duration-300">
            {project.title}
          </h2>
        </div>

        <div className="flex items-center justify-between md:justify-end gap-8 min-w-[200px]">
          <span className="text-xs font-bold tracking-widest uppercase text-gray-500 group-hover:text-white transition-colors duration-300">
            {project.category}
          </span>
          <div className={`transition-all duration-300 ${isOpen ? 'rotate-45 text-white' : 'text-gray-600 group-hover:text-white'}`}>
            <ArrowUpRight size={28} />
          </div>
        </div>
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
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Work;