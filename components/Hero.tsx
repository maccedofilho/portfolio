import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import Scene from './Scene';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-neutral-900 to-black">
      
      <div className="absolute inset-0 w-full h-full z-0 opacity-60 md:opacity-100">
         <Scene />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center h-full pointer-events-none">
        <div className="w-full md:w-1/2 pt-20 md:pt-0 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2 
              className="text-purple-500 font-semibold tracking-wide uppercase mb-4 text-sm md:text-base flex items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span 
                className="w-8 h-[2px] bg-purple-500 inline-block"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              />
              Ricardo Macedo
            </motion.h2>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6 mix-blend-difference"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Full Stack <br />
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {t('hero.role')}
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-gray-400 text-lg md:text-xl max-w-lg mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('hero.desc')}
            </motion.p>

            <motion.div 
              className="flex items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a href="#work" className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300">
                {t('hero.btn.projects')}
              </a>
              <a href="#contact" className="px-8 py-3 border border-gray-700 rounded-full hover:border-purple-500 hover:text-purple-500 hover:scale-105 transition-all duration-300">
                {t('hero.btn.contact')}
              </a>
            </motion.div>

            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
               <SocialIcon icon={<Linkedin size={20} />} href="https://www.linkedin.com/in/ricardomacedofilho/" label="LinkedIn" />
               <SocialIcon icon={<Github size={20} />} href="https://github.com/maccedofilho" label="GitHub" />
               <SocialIcon icon={<Mail size={20} />} href="mailto:ricardomacedodev@gmail.com" label="Email" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 hidden md:flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">{t('hero.scroll')}</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

const SocialIcon = ({ icon, href, label }: { icon: React.ReactNode; href: string, label: string }) => {
  const isExternal = href.startsWith('http');
  
  return (
    <a
      href={href}
      aria-label={label}
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-purple-500 hover:text-white hover:bg-purple-500/10 hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
    >
      {icon}
    </a>
  );
};

export default Hero;