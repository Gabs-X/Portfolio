export type Language = 'pt' | 'en';

export interface ProjectTranslation {
  title: string;
  category: string;
  description: string;
  tags: string[];
  highlights: string[];
  links?: { label: string; url: string }[];
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
    }[];
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
      links: string;
    };
    items: ProjectTranslation[];
  };
  sideProjects: {
    sectionLabel: string;
    title: string;
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
      experiencia: [
        {
          company: 'Projetos independentes',
          role: 'Desenvolvedor Full Stack (autônomo)',
          period: 'Novembro 2025 — Atual',
          items: [
            'StackMatch: plataforma que conecta empresas e desenvolvedores, do zero ao ar em 3 semanas.',
            'Chatbot com IA (React, Node.js e Gemini) entregue em 24 horas como desafio técnico.',
            'Kanban automatizado com GitHub Projects, GitHub Actions e GraphQL.',
          ],
        },
        {
          company: 'Eletrozema S/A',
          role: 'Desenvolvedor Full Stack',
          period: 'Agosto 2023 — Outubro 2025',
          items: [
            'Desenvolvimento e sustentação de sistemas corporativos.',
            'APIs REST e integrações financeiras.',
            'Desenvolvimento de aplicações React e .NET.',
            'Modelagem e consultas SQL Server.',
            'Sistemas de estoque, logística, assistência técnica e processos financeiros.',
            'Investigação e resolução de incidentes em produção.',
          ],
        },
        {
          company: 'Eletrozema S/A',
          role: 'Estagiário de Desenvolvimento Full Stack',
          period: 'Agosto 2022 — Julho 2023',
          items: [],
        },
        {
          company: 'Eletrozema S/A',
          role: 'Jovem Aprendiz • Assistente Administrativo',
          period: 'Março 2021 — Agosto 2022',
          items: [],
        },
      ],
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
        links: 'Links',
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
    sideProjects: {
      sectionLabel: '// Projetos Pessoais',
      title: 'Produtos e estudos independentes',
      items: [
        {
          title: 'StackMatch',
          category: 'Produto próprio • Full Stack • IA',
          description:
            'Plataforma que conecta empresas e desenvolvedores, construída e colocada no ar em 3 semanas. O dev tem um perfil padronizado e um mural de vagas com a compatibilidade calculada para ele; a empresa faz a triagem em cards e acompanha cada candidato em um funil de contratação.',
          tags: ['React 19', 'TypeScript', 'TanStack Start', 'PostgreSQL', 'Drizzle ORM', 'Claude API', 'Vitest', 'Playwright'],
          highlights: [
            'Vagas com funil de contratação, do "salvo" ao "contratado", com histórico de cada etapa.',
            'Match entre vaga e dev calculado em SQL e explicado critério por critério, sem "dar nota" para pessoas.',
            'Propostas de conversa com aceite, remarcação e convite de agenda (.ics).',
            'Ada, assistente de suporte com IA (Claude), com teto de gasto mensal e limites por uso.',
            'Tradução automática PT ⇄ EN de perfis e vagas.',
            'Segurança de conta: confirmação por código, limite de tentativas de login e telas que não revelam quais e-mails estão cadastrados.',
          ],
          links: [{ label: 'stackmatch.dev.br', url: 'https://stackmatch.dev.br' }],
        },
        {
          title: 'Gemini Chatbot',
          category: 'Full Stack • IA • Desafio técnico',
          description:
            'Chatbot com IA desenvolvido em apenas 24 horas, como desafio técnico. Front-end em React e back-end em Node.js com Express integrado à API do Gemini, com testes automatizados e tratamento de erros.',
          tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Gemini API', 'Vitest', 'Supertest', 'Tailwind CSS'],
          highlights: [
            'Entregue em 24 horas, do zero ao funcionamento completo.',
            'Back-end organizado em Route → Controller → Service.',
            'Testes automatizados de controller, service e rotas com Vitest e Supertest.',
            'Tratamento de mensagem vazia, configuração ausente e falha na API.',
          ],
          links: [{ label: 'GitHub', url: 'https://github.com/Gabs-X/gemini-chatbot' }],
        },
        {
          title: 'GitHub Projects Lab',
          category: 'DevOps • Automação',
          description:
            'Kanban automatizado com GitHub Projects (V2) e GitHub Actions, em que os cards andam sozinhos pelo fluxo de desenvolvimento: Issue, branch, PR em rascunho, review e merge.',
          tags: ['GitHub Actions', 'GraphQL', 'GitHub Projects', 'Python', 'Shell'],
          highlights: [
            'Automação idempotente: consulta o estado real do PR via GraphQL a cada execução.',
            'Reconciliação agendada que corrige eventos perdidos.',
            'GitHub App como credencial (o GITHUB_TOKEN não acessa Projects V2).',
            'Script em Python que migra um roadmap em markdown para Issues com campos e sub-issues.',
            'Manual passo a passo com 62 descobertas documentadas e uma variante pronta para uso.',
          ],
          links: [
            { label: 'GitHub', url: 'https://github.com/Gabs-X-Lab/github-projects-lab' },
            { label: 'kanban-automation', url: 'https://github.com/Gabs-X-Lab/kanban-automation' },
          ],
        },
        {
          title: 'SampleBankOperations',
          category: 'Backend • .NET • Testes',
          description:
            'Aplicação de operações bancárias em C#/.NET 9 organizada em camadas (Core, Application, Infrastructure e App), com regras de saque, transferência e juros injetáveis e uma suíte de testes automatizados.',
          tags: ['C#', '.NET 9', 'xUnit', 'Moq', 'FluentAssertions', 'Bogus', 'Arquitetura em Camadas'],
          highlights: [
            '63 testes automatizados com xUnit, Moq, FluentAssertions e Bogus.',
            'Regras de saque e transferência recebidas como predicados, sem alterar o serviço.',
            'Repositório e logger atrás de interfaces, com injeção de dependência.',
            'Relatório de cobertura de testes com coverlet.',
          ],
          links: [{ label: 'GitHub', url: 'https://github.com/Gabs-X/SampleBankOperationsTest' }],
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
      experiencia: [
        {
          company: 'Independent projects',
          role: 'Full Stack Developer (self-employed)',
          period: 'November 2025 — Present',
          items: [
            'StackMatch: a platform that connects companies and developers, built and launched in 3 weeks.',
            'AI chatbot (React, Node.js and Gemini) delivered in 24 hours as a technical challenge.',
            'Automated Kanban with GitHub Projects, GitHub Actions and GraphQL.',
          ],
        },
        {
          company: 'Eletrozema S/A',
          role: 'Full Stack Developer',
          period: 'August 2023 — October 2025',
          items: [
            'Development and maintenance of enterprise systems.',
            'REST APIs and financial integrations.',
            'React and .NET application development.',
            'SQL Server modeling and queries.',
            'Inventory, logistics, technical support, and financial process systems.',
            'Production incident investigation and resolution.',
          ],
        },
        {
          company: 'Eletrozema S/A',
          role: 'Full Stack Development Intern',
          period: 'August 2022 — July 2023',
          items: [],
        },
        {
          company: 'Eletrozema S/A',
          role: 'Apprentice • Administrative Assistant',
          period: 'March 2021 — August 2022',
          items: [],
        },
      ],
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
        links: 'Links',
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
    sideProjects: {
      sectionLabel: '// Personal Projects',
      title: 'Independent products and studies',
      items: [
        {
          title: 'StackMatch',
          category: 'Own product • Full Stack • AI',
          description:
            'A platform that connects companies and developers, built and launched in 3 weeks. Developers get a standardized profile and a job board with the match calculated for them; companies screen candidates through cards and track each one in a hiring funnel.',
          tags: ['React 19', 'TypeScript', 'TanStack Start', 'PostgreSQL', 'Drizzle ORM', 'Claude API', 'Vitest', 'Playwright'],
          highlights: [
            'Jobs with a hiring funnel, from "saved" to "hired", with the history of each stage.',
            'Job-to-developer match calculated in SQL and explained criterion by criterion, without rating people.',
            'Call proposals with acceptance, rescheduling and calendar invites (.ics).',
            'Ada, an AI support assistant (Claude) with a monthly spending cap and usage limits.',
            'Automatic PT ⇄ EN translation of profiles and jobs.',
            'Account security: code confirmation, sign-in attempt limits and screens that never reveal which e-mails are registered.',
          ],
          links: [{ label: 'stackmatch.dev.br', url: 'https://stackmatch.dev.br' }],
        },
        {
          title: 'Gemini Chatbot',
          category: 'Full Stack • AI • Technical challenge',
          description:
            'An AI chatbot built in just 24 hours as a technical challenge. React front end and a Node.js/Express back end integrated with the Gemini API, with automated tests and error handling.',
          tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Gemini API', 'Vitest', 'Supertest', 'Tailwind CSS'],
          highlights: [
            'Delivered in 24 hours, from scratch to fully working.',
            'Back end organized as Route → Controller → Service.',
            'Automated tests for controller, service and routes with Vitest and Supertest.',
            'Handles empty messages, missing configuration and API failures.',
          ],
          links: [{ label: 'GitHub', url: 'https://github.com/Gabs-X/gemini-chatbot' }],
        },
        {
          title: 'GitHub Projects Lab',
          category: 'DevOps • Automation',
          description:
            'An automated Kanban with GitHub Projects (V2) and GitHub Actions, where cards move on their own through the development flow: Issue, branch, draft PR, review and merge.',
          tags: ['GitHub Actions', 'GraphQL', 'GitHub Projects', 'Python', 'Shell'],
          highlights: [
            'Idempotent automation: reads the real PR state through GraphQL on every run.',
            'Scheduled reconciliation that fixes missed events.',
            'GitHub App as the credential (GITHUB_TOKEN cannot access Projects V2).',
            'Python script that migrates a markdown roadmap into Issues with fields and sub-issues.',
            'Step-by-step manual with 62 documented findings and a ready-to-use variant.',
          ],
          links: [
            { label: 'GitHub', url: 'https://github.com/Gabs-X-Lab/github-projects-lab' },
            { label: 'kanban-automation', url: 'https://github.com/Gabs-X-Lab/kanban-automation' },
          ],
        },
        {
          title: 'SampleBankOperations',
          category: 'Backend • .NET • Testing',
          description:
            'A banking operations application in C#/.NET 9 organized in layers (Core, Application, Infrastructure and App), with injectable withdrawal, transfer and interest rules and an automated test suite.',
          tags: ['C#', '.NET 9', 'xUnit', 'Moq', 'FluentAssertions', 'Bogus', 'Layered Architecture'],
          highlights: [
            '63 automated tests with xUnit, Moq, FluentAssertions and Bogus.',
            'Withdrawal and transfer rules passed in as predicates, without changing the service.',
            'Repository and logger behind interfaces, wired with dependency injection.',
            'Test coverage report with coverlet.',
          ],
          links: [{ label: 'GitHub', url: 'https://github.com/Gabs-X/SampleBankOperationsTest' }],
        },
      ],
    },
    footer: {
      title: "Let's talk.",
      subtitle: "I'm open to opportunities as a Full Stack Developer.",
    },
  },
};
