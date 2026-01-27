import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    'hero.role': 'Software Engineer',
    'hero.desc': 'Full Stack with product vision. I build robust solutions that solve real problems and scale with the business.',
    'hero.btn.projects': 'View Projects',
    'hero.btn.contact': 'Contact Me',
    'hero.scroll': 'Scroll',

    'work.subtitle': 'Selected Works',
    'work.title': 'Engineering',
    'work.title.span': 'Cases',
    'work.hover': 'Click to explore technical details.',
    'work.view': 'View Project',

    'about.subtitle': 'About Me',
    'about.title': 'Digital',
    'about.title.span': 'Alchemist',
    'about.desc': '+3 years of Full Stack development experience, focused on building solid and well-architected solutions. Software Engineering student, turning coffee into clean, scalable, production-ready code.',

    'contact.bg': 'CONNECT',
    'contact.title': 'Ready to scale?',
    'contact.desc': 'I am available for new opportunities in full-stack development. Let\'s build something robust together.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.btn': 'Send Message',
    'contact.footer': 'All rights reserved.',
  },
  pt: {
    'nav.home': 'Início',
    'nav.work': 'Projetos',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',

    'hero.role': 'Engenheiro de Software',
    'hero.desc': 'Full Stack com visão de produto. Crio soluções robustas que resolvem problemas reais e escalam com o negócio.',
    'hero.btn.projects': 'Ver Projetos',
    'hero.btn.contact': 'Entre em Contato',
    'hero.scroll': 'Role',

    'work.subtitle': 'Trabalhos Selecionados',
    'work.title': 'Casos de',
    'work.title.span': 'Engenharia',
    'work.hover': 'Clique para explorar os detalhes técnicos.',
    'work.view': 'Ver Projeto',

    'about.subtitle': 'Sobre Mim',
    'about.title': 'Alquimista',
    'about.title.span': 'Digital',
    'about.desc': '+3 anos de experiência em desenvolvimento Full Stack, com foco em construção de soluções sólidas e bem arquitetadas. Estudante de Engenharia de Software, transformando café em código limpo, escalável e pronto pra produção.',

    'contact.bg': 'CONEXÃO',
    'contact.title': 'Pronto para escalar?',
    'contact.desc': 'Estou disponível para novas oportunidades em desenvolvimento full-stack. Vamos construir algo robusto juntos.',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.message': 'Mensagem',
    'contact.form.btn': 'Enviar Mensagem',
    'contact.footer': 'Todos os direitos reservados.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};