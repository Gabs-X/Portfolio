export type Language = 'pt' | 'en';

export interface ProjectTranslation {
  title: string;
  category: string;
  description: string;
  tags: string[];
  highlights: string[];
}

export interface Translations {
  header: {
    sobre: string;
    projetos: string;
    contato: string;
    openMenu: string;
    closeMenu: string;
    language: string;
  };
  about: {
    sectionLabel: string;
    tabs: {
      sobre: string;
      skills: string;
      experiencia: string;
    };
    sobre: {
      headline: string;
      paragraphs: string[];
    };
    skills: {
      categories: { label: string; items: string }[];
    };
    experiencia: {
      company: string;
      role: string;
      period: string;
      items: string[];
    };
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    viewProjects: string;
    contact: string;
  };
  projects: {
    sectionLabel: string;
    title: string;
    featured: string;
    moreDetails: string;
    modal: {
      close: string;
      highlights: string;
      technologies: string;
    };
    items: ProjectTranslation[];
  };
  footer: {
    title: string;
    subtitle: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    header: {
      sobre: '/sobre',
      projetos: '/projetos',
      contato: '/contato',
      openMenu: 'Abrir menu',
      closeMenu: 'Fechar menu',
      language: 'Idioma',
    },
    about: {
      sectionLabel: '// Sobre Mim',
      tabs: {
        sobre: 'Sobre Mim',
        skills: 'Skills',
        experiencia: 'Experiência',
      },
      sobre: {
        headline: 'Transformando processos complexos em software.',
        paragraphs: [
          'Sou Gabriel Anthony, Desenvolvedor Full Stack formado em Sistemas de Informação, com experiência em desenvolvimento e sustentação de sistemas corporativos, integrações financeiras, aplicações web e bancos de dados SQL Server.',
          'Minha trajetória foi construída atuando diretamente em ambientes de negócio reais, participando desde o levantamento de requisitos até a entrega e manutenção de soluções utilizadas por diferentes áreas da empresa.',
          'Tenho experiência com React, TypeScript, Next.js, .NET, C#, SQL Server, além de forte atuação em integrações entre sistemas, regras de negócio, autenticação OAuth, logística, estoque e processos financeiros.',
          'Gosto de entender o problema antes de escrever código. Meu foco é criar soluções simples, confiáveis e que gerem impacto real para o negócio.',
        ],
      },
      skills: {
        categories: [
          { label: 'Front-End', items: 'React • TypeScript • JavaScript • SCSS • HTML5 • CSS3' },
          { label: 'Back-End', items: '.NET • C# • Node.js • APIs REST • OAuth' },
          { label: 'Banco de Dados', items: 'SQL Server • MySQL • Modelagem de Dados' },
          { label: 'Infraestrutura', items: 'IIS • Docker • Git • Monitoramento • Logs' },
          { label: 'Domínio de Negócio', items: 'Integrações • ERP • Financeiro • Logística • Sustentação' },
        ],
      },
      experiencia: {
        company: 'Eletrozema S/A',
        role: 'Desenvolvedor Full Stack',
        period: 'Março 2021 — Outubro 2025',
        items: [
          'Desenvolvimento e sustentação de sistemas corporativos.',
          'APIs REST e integrações financeiras.',
          'Desenvolvimento de aplicações React e .NET.',
          'Modelagem e consultas SQL Server.',
          'Sistemas de estoque, logística, assistência técnica e processos financeiros.',
          'Investigação e resolução de incidentes em produção.',
        ],
      },
    },
    hero: {
      badge: 'Desenvolvedor Full Stack',
      title: 'Construindo sistemas corporativos de ponta a ponta.',
      description:
        'Desenvolvedor Full Stack formado em Sistemas de Informação, com experiência em desenvolvimento e sustentação de sistemas corporativos utilizando React, TypeScript, .NET, SQL Server e integrações entre aplicações. Atuo do levantamento de requisitos à produção — APIs REST, regras de negócio e ambientes de negócio reais.',
      viewProjects: 'Ver Projetos',
      contact: 'Contato',
    },
    projects: {
      sectionLabel: '// Experiência Profissional',
      title: 'Projetos e experiências profissionais',
      featured: 'Projeto Destaque',
      moreDetails: 'Mais detalhes',
      modal: {
        close: 'Fechar',
        highlights: 'Destaques',
        technologies: 'Tecnologias',
      },
      items: [
        {
          title: 'Sistema Corporativo de Almoxarifado',
          category: 'Full Stack • ERP • Gestão de Estoque',
          description:
            'Desenvolvimento full stack de uma aplicação corporativa para gestão de almoxarifado, abrangendo modelagem relacional do banco de dados, desenvolvimento da API com Next.js, frontend em React e implementação das regras de negócio. O sistema automatizou processos internos, controle de estoque, movimentações, emissão de notas de uso e consumo e eliminou a necessidade de uma solução terceirizada.',
          tags: [
            'React',
            'TypeScript',
            'Next.js',
            'SQL Server',
            'REST API',
            'Modelagem Relacional',
            'Arquitetura em Camadas',
            'Business Rules',
          ],
          highlights: [
            'Modelagem completa do banco de dados e definição das regras de negócio.',
            'Desenvolvimento da API utilizando Next.js.',
            'Frontend em React com TypeScript focado em produtividade e experiência do usuário.',
            'Automação dos processos de estoque, movimentações e emissão de notas.',
            'Substituição de solução terceirizada, reduzindo custos operacionais.',
          ],
        },
    
        {
          title: 'Portal de Segurança da Informação',
          category: 'Full Stack • Gestão de Acessos',
          description:
            'Desenvolvimento de um portal corporativo para gerenciamento seguro de cadastros de clientes em empresas terceiras. A aplicação centralizou solicitações de acesso, gerenciamento de permissões, rastreabilidade das operações e padronização do processo de cadastro entre diferentes parceiros.',
          tags: [
            'React',
            'TypeScript',
            'Next.js',
            'REST API',
            'Access Control',
            'Authentication',
            'Business Rules',
            'Corporate Systems',
          ],
          highlights: [
            'Centralização do gerenciamento de cadastros de clientes.',
            'Fluxo de aprovação para empresas terceiras.',
            'Implementação de regras de acesso e validações de segurança.',
            'Desenvolvimento Full Stack utilizando React e Next.js.',
            'Padronização do processo de cadastro corporativo.',
          ],
        },
    
        {
          title: 'Integrações Financeiras Corporativas',
          category: 'Backend • Sistemas Críticos',
          description:
            'Atuação na sustentação e evolução de aplicações responsáveis pelo processamento financeiro da empresa, implementando integrações entre sistemas, autenticação OAuth, manutenção de regras de negócio, consultas SQL Server e investigação de incidentes em produção.',
          tags: [
            '.NET',
            'C#',
            'OAuth',
            'REST API',
            'SQL Server',
            'Integrações',
            'Business Rules',
            'Troubleshooting',
          ],
          highlights: [
            'Integração entre aplicações utilizando APIs REST.',
            'Implementação de autenticação OAuth.',
            'Manutenção e evolução de regras financeiras.',
            'Consultas SQL Server para análise de inconsistências.',
            'Investigação e resolução de incidentes em produção.',
          ],
        },
    
        {
          title: 'Observabilidade e Performance de Aplicações',
          category: 'Infraestrutura • Produção',
          description:
            'Diagnóstico e resolução de incidentes em produção através da análise de logs, monitoramento de IIS Application Pools, investigação de consumo de CPU, análise de stack traces e otimização de consultas SQL, aumentando a estabilidade dos sistemas corporativos.',
          tags: [
            'IIS',
            'Application Pools',
            'SQL Server',
            'Performance Tuning',
            'Logging',
            'Monitoring',
            'Troubleshooting',
          ],
          highlights: [
            'Análise de logs e stack traces.',
            'Monitoramento de IIS Application Pools.',
            'Investigação de gargalos de performance.',
            'Otimização de consultas SQL.',
            'Maior estabilidade das aplicações em produção.',
          ],
        },
    
        {
          title: 'Motor de Cálculos Financeiros',
          category: 'Backend • Regras de Negócio',
          description:
            'Desenvolvimento e otimização de componentes responsáveis pelo processamento de cálculos financeiros complexos, incluindo juros compostos, validações de negócio e algoritmos utilizados em operações financeiras corporativas.',
          tags: [
            '.NET',
            'C#',
            'SQL Server',
            'Financial Rules',
            'Business Rules',
            'Algorithm Optimization',
            'Clean Code',
          ],
          highlights: [
            'Implementação de algoritmos para juros compostos.',
            'Validação das regras financeiras.',
            'Otimização de performance do processamento.',
            'Garantia da consistência dos cálculos.',
            'Evolução contínua das regras de negócio.',
          ],
        },
        {
          title: 'Integração OAuth em Aplicações Legadas',
          category: 'Backend • Autenticação • Modernização de Sistemas',
        
          description:
            'Projeto de modernização da autenticação de aplicações corporativas legadas através da implementação do protocolo OAuth 2.0. A solução permitiu integrar sistemas existentes a provedores de identidade externos, mantendo compatibilidade com os fluxos já utilizados e minimizando impactos na arquitetura legada.',
        
          tags: [
            '.NET',
            'C#',
            'OAuth 2.0',
            'OpenID Connect',
            'Autenticação',
            'Autorização',
            'Sistemas Legados',
            'REST API',
            'Integração de Sistemas',
          ],
        
          highlights: [
            'Implementação de autenticação OAuth 2.0 em aplicações corporativas legadas.',
            'Integração segura com provedores de identidade externos.',
            'Preservação da compatibilidade com os fluxos existentes da aplicação.',
            'Modernização da camada de autenticação sem impacto significativo na arquitetura.',
            'Aumento da segurança e redução da dívida técnica dos sistemas.',
          ],
        },
      ],
    },
    footer: {
      title: 'Vamos conversar.',
      subtitle: 'Estou aberto a oportunidades como Desenvolvedor Full Stack.',
    },
  },
  en: {
    header: {
      sobre: '/about',
      projetos: '/projects',
      contato: '/contact',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      language: 'Language',
    },
    about: {
      sectionLabel: '// About Me',
      tabs: {
        sobre: 'About Me',
        skills: 'Skills',
        experiencia: 'Experience',
      },
      sobre: {
        headline: 'Turning complex processes into software.',
        paragraphs: [
          "I'm Gabriel Anthony, a Full Stack Developer with a degree in Information Systems, experienced in developing and maintaining enterprise systems, financial integrations, web applications, and SQL Server databases.",
          'My career has been built working directly in real business environments, participating from requirements gathering to delivery and maintenance of solutions used across different areas of the company.',
          'I have experience with React, TypeScript, Next.js, .NET, C#, and SQL Server, along with strong work in system integrations, business rules, OAuth authentication, logistics, inventory, and financial processes.',
          'I like to understand the problem before writing code. My focus is creating simple, reliable solutions that generate real business impact.',
        ],
      },
      skills: {
        categories: [
          { label: 'Front-End', items: 'React • TypeScript • JavaScript • SCSS • HTML5 • CSS3' },
          { label: 'Back-End', items: '.NET • C# • Node.js • REST APIs • OAuth' },
          { label: 'Database', items: 'SQL Server • MySQL • Data Modeling' },
          { label: 'Infrastructure', items: 'IIS • Docker • Git • Monitoring • Logs' },
          { label: 'Business Domain', items: 'Integrations • ERP • Finance • Logistics • Maintenance' },
        ],
      },
      experiencia: {
        company: 'Eletrozema S/A',
        role: 'Full Stack Developer',
        period: 'March 2021 — October 2025',
        items: [
          'Development and maintenance of enterprise systems.',
          'REST APIs and financial integrations.',
          'React and .NET application development.',
          'SQL Server modeling and queries.',
          'Inventory, logistics, technical support, and financial process systems.',
          'Production incident investigation and resolution.',
        ],
      },
    },
    hero: {
      badge: 'Full Stack Developer',
      title: 'Building end-to-end enterprise systems.',
      description:
        'Full Stack Developer with a degree in Information Systems, experienced in building and maintaining enterprise systems using React, TypeScript, .NET, SQL Server and application integrations. I work from requirements gathering to production — REST APIs, business rules and real-world business environments.',
      viewProjects: 'View Projects',
      contact: 'Contact',
    },
    projects: {
      sectionLabel: '// Professional Experience',
      title: 'Selected Projects',
      featured: 'Featured Project',
      moreDetails: 'More details',
      modal: {
        close: 'Close',
        highlights: 'Highlights',
        technologies: 'Technologies',
      },
      items: [
        {
          title: 'Corporate Warehouse Management System',
          category: 'Full Stack • ERP • Inventory Management',
          description:
            'Full Stack development of a corporate warehouse management application, including relational database modeling, Next.js backend development, React frontend implementation, REST APIs and business rule implementation. The solution automated inventory control, internal stock movements, usage and consumption invoices, replacing a third-party system and reducing operational costs.',
          tags: [
            'React',
            'TypeScript',
            'Next.js',
            'SQL Server',
            'REST API',
            'Relational Database Modeling',
            'Layered Architecture',
            'Business Rules',
          ],
          highlights: [
            'Designed the relational database model and core warehouse business rules.',
            'Developed backend APIs using Next.js.',
            'Built a React + TypeScript interface focused on usability and operational efficiency.',
            'Automated inventory management, stock movements and internal documentation.',
            'Replaced a third-party solution, reducing operational costs.',
          ],
        },
    
        {
          title: 'Information Security Portal',
          category: 'Full Stack • Access Management',
          description:
            'Designed and developed a corporate portal for secure customer registration management across third-party companies. The application centralized registration requests, permission management, approval workflows and auditability, improving security and standardizing onboarding processes.',
          tags: [
            'React',
            'TypeScript',
            'Next.js',
            'REST API',
            'Authentication',
            'Authorization',
            'Access Control',
            'Business Rules',
          ],
          highlights: [
            'Centralized customer registration management for external partners.',
            'Implemented approval workflows and access validation.',
            'Developed business rules for secure registration processes.',
            'Built the application using React, TypeScript and Next.js.',
            'Improved governance and standardization of third-party registrations.',
          ],
        },
    
        {
          title: 'Corporate Financial Integrations',
          category: 'Backend • Mission-Critical Systems',
          description:
            'Contributed to the maintenance and evolution of mission-critical financial applications by implementing REST integrations, OAuth authentication, business rules, SQL Server queries and production troubleshooting for high-availability corporate systems.',
          tags: [
            '.NET',
            'C#',
            'OAuth 2.0',
            'REST APIs',
            'SQL Server',
            'System Integration',
            'Business Rules',
            'Production Support',
          ],
          highlights: [
            'Developed and maintained REST integrations between financial systems.',
            'Implemented OAuth authentication flows.',
            'Maintained complex financial business rules.',
            'Performed SQL Server analysis and data validation.',
            'Resolved production incidents in critical environments.',
          ],
        },
    
        {
          title: 'Application Observability & Performance',
          category: 'Infrastructure • Production Support',
          description:
            'Diagnosed and resolved production incidents through log analysis, IIS Application Pool monitoring, CPU usage investigation, stack trace analysis and SQL query optimization, improving application stability and overall system performance.',
          tags: [
            'IIS',
            'Application Pools',
            'SQL Server',
            'Performance Tuning',
            'Logging',
            'Monitoring',
            'Troubleshooting',
          ],
          highlights: [
            'Performed production incident analysis using logs and stack traces.',
            'Monitored IIS Application Pools and application health.',
            'Identified performance bottlenecks and optimized SQL queries.',
            'Improved stability and availability of enterprise applications.',
          ],
        },
    
        {
          title: 'Financial Calculation Engine',
          category: 'Backend • Business Rules',
          description:
            'Developed and optimized backend components responsible for complex financial calculations, including compound interest algorithms, business validations and performance improvements, ensuring consistency and reliability across financial operations.',
          tags: [
            '.NET',
            'C#',
            'SQL Server',
            'Financial Rules',
            'Business Rules',
            'Algorithm Optimization',
            'Clean Code',
          ],
          highlights: [
            'Implemented compound interest calculation algorithms.',
            'Developed financial validation rules.',
            'Optimized processing performance for financial calculations.',
            'Ensured consistency and reliability across financial operations.',
          ],
        },
        {
          title: 'Legacy Application OAuth Integration',
          category: 'Backend • Authentication • Legacy Modernization',
        
          description:
            'Designed and implemented OAuth 2.0 authentication in legacy enterprise applications, modernizing the authentication flow without impacting existing business processes. The solution enabled secure integration with external identity providers while maintaining backward compatibility and minimizing changes to the legacy architecture.',
        
          tags: [
            '.NET',
            'C#',
            'OAuth 2.0',
            'OpenID Connect',
            'Authentication',
            'Authorization',
            'Legacy Systems',
            'REST APIs',
            'System Integration',
          ],
        
          highlights: [
            'Integrated OAuth 2.0 authentication into legacy enterprise applications.',
            'Maintained backward compatibility with existing business workflows.',
            'Implemented secure authentication flows with external identity providers.',
            'Reduced technical debt by modernizing legacy authentication mechanisms.',
            'Improved application security while minimizing impact on production systems.',
          ],
        },
      ],
    },
    footer: {
      title: "Let's talk.",
      subtitle: "I'm open to opportunities as a Full Stack Developer.",
    },
  },
};
