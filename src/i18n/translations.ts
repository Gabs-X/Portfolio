export type Language = 'pt' | 'en';

export interface ProjectTranslation {
  title: string;
  category: string;
  description: string;
  tags: string[];
  highlights: string[];
  links?: { label: string; url: string }[];
  /** Print do projeto em public/projects/. null = print pendente (o placeholder só aparece em dev). */
  image?: string | null;
}

export interface Translations {
  header: {
    sobre: string;
    projetos: string;
    contato: string;
    cv: string;
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
    downloadCv: string;
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
    screenshotAlt: string;
    screenshotPending: string;
    items: ProjectTranslation[];
  };
  sideProjects: {
    sectionLabel: string;
    title: string;
    items: ProjectTranslation[];
  };
  footer: {
    sectionLabel: string;
    title: string;
    subtitle: string;
    email: string;
    downloadCv: string;
  };
}

export const translations: Record<Language, Translations> = {
  pt: {
    header: {
      sobre: '/sobre',
      projetos: '/projetos',
      contato: '/contato',
      cv: 'Baixar CV',
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
        headline: 'Do banco SQL Server à tela em React.',
        paragraphs: [
          'Sou Gabriel Anthony, Desenvolvedor Full Stack formado em Sistemas de Informação. Construo sistemas que precisam funcionar todo dia, do banco SQL Server à tela em React, passando pela API e pelo servidor em produção.',
          'Passei mais de 3 anos desenvolvendo na Zema, de estagiário a desenvolvedor full stack: criei do zero o sistema de almoxarifado, mantive em C#/.NET os sistemas de empréstimos e operações financeiras, com tabelas de mais de 300 colunas e cálculos de juros compostos, e resolvi incidentes de produção no IIS.',
          'Desde outubro de 2026 sou AI Engineer na Pixaflow, desenvolvendo com Claude e Codex em um projeto de cliente com equipe internacional e comunicação em inglês. Por conta própria, mantenho o StackMatch e o Ohara.',
          'Busco vagas Full Stack em que o back-end pese: C#/.NET ou Node.js com SQL, e React no front.',
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
          company: 'Pixaflow',
          role: 'AI Engineer (PJ • Remoto)',
          period: 'Outubro 2026 — Atual',
          items: [
            'Desenvolvimento com Claude e Codex em projeto de cliente, com equipe internacional.',
            'Toda a comunicação do time em inglês.',
          ],
        },
        {
          company: 'Projetos independentes',
          role: 'Desenvolvedor Full Stack (autônomo)',
          period: 'Novembro 2025 — Atual',
          items: [
            'StackMatch: plataforma que conecta empresas e desenvolvedores, colocada no ar em 3 semanas, com 460 testes automatizados.',
            'Ohara: app desktop em Electron que orquestra o Claude Code e o Codex.',
            'Kanban automatizado com GitHub Projects, GitHub Actions e GraphQL.',
          ],
        },
        {
          company: 'Eletrozema S/A (Zema)',
          role: 'Desenvolvedor Full Stack',
          period: 'Agosto 2023 — Outubro 2025',
          items: [
            'Efetivado em agosto de 2023, depois de 1 ano de estágio no mesmo time.',
            'Criei do zero o sistema de almoxarifado (SQL Server, API em Next.js e front-end em React/TypeScript), que substituiu uma solução terceirizada e passou a emitir as notas de uso e consumo.',
            'Mantive e evoluí em C#/.NET e SQL Server os sistemas de empréstimos e operações financeiras, com tabelas de mais de 300 colunas, stored procedures e cálculos de juros compostos.',
            'Integrei a logística reversa, as ordens de serviço e a garantia entre a empresa, fabricantes e transportadoras.',
            'Implementei OAuth 2.0 em aplicações legadas .NET e desenvolvi em React/Next.js um portal de cadastro de clientes em empresas terceiras, com fluxo de aprovação, permissões e rastreabilidade.',
            'Diagnostiquei incidentes em produção por logs, dumps, IIS Application Pools e consumo de CPU.',
            'Mentorei estagiários e novos devs, com onboarding e code review.',
          ],
        },
        {
          company: 'Eletrozema S/A (Zema)',
          role: 'Estagiário de Desenvolvimento Full Stack',
          period: 'Agosto 2022 — Julho 2023',
          items: ['Estágio no time de desenvolvimento, em sistemas corporativos internos. Efetivado depois de 12 meses.'],
        },
        {
          company: 'Eletrozema S/A (Zema)',
          role: 'Jovem Aprendiz • Assistente Administrativo',
          period: 'Março 2021 — Agosto 2022',
          items: [],
        },
      ],
    },
    hero: {
      badge: 'Desenvolvedor Full Stack',
      title: 'Full stack com base em .NET e SQL Server, hoje construindo com React e IA.',
      description:
        'Passei mais de 3 anos na Zema criando e sustentando sistemas corporativos e integrações financeiras, do banco SQL Server à interface em React. Hoje sou AI Engineer na Pixaflow e mantenho projetos próprios como o StackMatch e o Ohara.',
      viewProjects: 'Ver Projetos',
      contact: 'Contato',
      downloadCv: 'Baixar CV',
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
      screenshotAlt: 'Captura de tela do projeto',
      screenshotPending: 'Print pendente',
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
          category: 'Backend • Sistemas Financeiros',
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
            'Desenvolvimento e otimização dos componentes em C#/.NET que fazem os cálculos financeiros da empresa, como juros compostos e as validações de negócio das operações financeiras.',
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
          image: '/projects/stackmatch.webp',
        },
        {
          title: 'Ohara',
          category: 'App desktop • IA • Automação',
          description:
            'App desktop para Windows que usa as assinaturas do Claude Code e do Codex como um assistente para o PC inteiro. Para cada pedido, escolhe a IA, o modelo e o nível de esforço mais adequados e acompanha a cota de cada assinatura.',
          tags: ['Electron', 'Node.js', 'JavaScript', 'Claude Code', 'Codex', 'Whisper', 'electron-builder'],
          highlights: [
            'Roteamento local por palavras-chave, sem gastar token para decidir, que aprende com as trocas manuais de modelo.',
            'Gestão de cota: troca Opus por Sonnet acima de 70% e passa para o Codex acima de 90%.',
            'Agentes que trabalham em arquivos, repositórios, comandos do Windows e na web, com captura de tela.',
            'Resolve ou aprende: quando falta uma capacidade, oferece se alterar e implementa a mudança no próprio código.',
            'Correção de texto em qualquer app por atalho global (Ctrl+Alt+C), mantendo o estilo de quem escreveu.',
            'Reuniões resumidas a partir das transcrições, painel de demandas e automações agendadas.',
            'Integrações com agenda (iCal), GitHub, Slack e Whisper local, com segredos criptografados (DPAPI).',
            'Instalador e versão portátil gerados com electron-builder.',
          ],
          links: [{ label: 'GitHub', url: 'https://github.com/Gabs-X/ohara' }],
          image: null, // pendente: public/projects/ohara.webp
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
          image: null, // pendente: public/projects/github-projects-lab.webp
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
          image: null, // pendente: public/projects/samplebankoperations.webp
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
          image: null, // pendente: public/projects/gemini-chatbot.webp
        },
      ],
    },
    footer: {
      sectionLabel: '// Contato',
      title: 'Vamos conversar.',
      subtitle: 'Estou aberto a oportunidades como Desenvolvedor Full Stack.',
      email: 'E-mail',
      downloadCv: 'Baixar CV (PDF)',
    },
  },
  en: {
    header: {
      sobre: '/about',
      projetos: '/projects',
      contato: '/contact',
      cv: 'Download CV',
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
        headline: 'From the SQL Server database to the React screen.',
        paragraphs: [
          "I'm Gabriel Anthony, a Full Stack Developer with a degree in Information Systems. I build systems that have to work every day, from the SQL Server database to the React screen, including the API and the production server.",
          'I spent over 3 years as a developer at Zema, going from intern to full stack developer: I built the warehouse system from scratch, maintained the loan and financial operations systems in C#/.NET, with tables of 300+ columns and compound-interest calculations, and fixed production incidents on IIS.',
          "Since October 2026 I've been an AI Engineer at Pixaflow, building with Claude and Codex on a client project with an international team, with all communication in English. On my own, I maintain StackMatch and Ohara.",
          "I'm looking for Full Stack roles where the back end matters: C#/.NET or Node.js with SQL, and React on the front end.",
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
          company: 'Pixaflow',
          role: 'AI Engineer (Contractor • Remote)',
          period: 'October 2026 — Present',
          items: [
            'Building with Claude and Codex on a client project with an international team.',
            'All team communication in English.',
          ],
        },
        {
          company: 'Independent projects',
          role: 'Full Stack Developer (self-employed)',
          period: 'November 2025 — Present',
          items: [
            'StackMatch: a platform that connects companies and developers, built and launched in 3 weeks, with 460 automated tests.',
            'Ohara: an Electron desktop app that orchestrates Claude Code and Codex.',
            'Automated Kanban with GitHub Projects, GitHub Actions and GraphQL.',
          ],
        },
        {
          company: 'Eletrozema S/A (Zema)',
          role: 'Full Stack Developer',
          period: 'August 2023 — October 2025',
          items: [
            'Promoted to Full Stack Developer in August 2023, after a one-year internship on the same team.',
            'Built the warehouse management system from scratch (SQL Server, Next.js API, React/TypeScript front end). It replaced an outsourced solution and issues internal-use and consumption invoices.',
            'Maintained and extended the loan and financial operations systems in C#/.NET and SQL Server, with tables of 300+ columns, stored procedures and compound-interest calculations.',
            'Integrated reverse logistics, service orders and warranty flows between the company, manufacturers and carriers.',
            'Implemented OAuth 2.0 in legacy .NET applications and built a React/Next.js portal for registering clients in third-party companies, with approval workflows, permissions and audit trails.',
            'Diagnosed production incidents through logs, memory dumps, IIS Application Pools and CPU usage.',
            'Mentored interns and new developers through onboarding and code review.',
          ],
        },
        {
          company: 'Eletrozema S/A (Zema)',
          role: 'Full Stack Development Intern',
          period: 'August 2022 — July 2023',
          items: ['Internship on the development team, working on internal corporate systems. Promoted after 12 months.'],
        },
        {
          company: 'Eletrozema S/A (Zema)',
          role: 'Apprentice • Administrative Assistant',
          period: 'March 2021 — August 2022',
          items: [],
        },
      ],
    },
    hero: {
      badge: 'Full Stack Developer',
      title: 'Full stack developer grounded in .NET and SQL Server, now building with React and AI.',
      description:
        "I spent over 3 years at Zema building and maintaining corporate systems and financial integrations, from the SQL Server database to the React interface. Today I'm an AI Engineer at Pixaflow, and I maintain my own projects such as StackMatch and Ohara.",
      viewProjects: 'View Projects',
      contact: 'Contact',
      downloadCv: 'Download CV (PT)',
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
      screenshotAlt: 'Project screenshot',
      screenshotPending: 'Screenshot pending',
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
          category: 'Backend • Financial Systems',
          description:
            "Maintained and evolved the company's financial processing applications: REST integrations between systems, OAuth authentication, business rules, SQL Server queries and production incident investigation.",
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
            'Maintained and evolved financial business rules.',
            'Performed SQL Server analysis and data validation.',
            'Investigated and resolved production incidents.',
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
            "Developed and optimized the C#/.NET components that run the company's financial calculations, such as compound interest and the business validations of financial operations.",
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
          image: '/projects/stackmatch.webp',
        },
        {
          title: 'Ohara',
          category: 'Desktop app • AI • Automation',
          description:
            'A Windows desktop app that turns Claude Code and Codex subscriptions into an assistant for the whole PC. For each request it picks the most suitable AI, model and effort level, and tracks the quota of each subscription.',
          tags: ['Electron', 'Node.js', 'JavaScript', 'Claude Code', 'Codex', 'Whisper', 'electron-builder'],
          highlights: [
            'Local keyword-based routing that spends no tokens to decide and learns from manual model switches.',
            'Quota management: swaps Opus for Sonnet above 70% and hands off to Codex above 90%.',
            'Agents that work on files, repositories, Windows commands and the web, with screen capture.',
            'Solves or learns: when a capability is missing, it offers to change itself and implements the change in its own code.',
            'Text correction in any app via a global hotkey (Ctrl+Alt+C), keeping the author’s style.',
            'Meetings summarized from transcripts, a task board and scheduled automations.',
            'Integrations with calendar (iCal), GitHub, Slack and local Whisper, with encrypted secrets (DPAPI).',
            'Installer and portable build generated with electron-builder.',
          ],
          links: [{ label: 'GitHub', url: 'https://github.com/Gabs-X/ohara' }],
          image: null, // pendente: public/projects/ohara.webp
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
          image: null, // pendente: public/projects/github-projects-lab.webp
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
          image: null, // pendente: public/projects/samplebankoperations.webp
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
          image: null, // pendente: public/projects/gemini-chatbot.webp
        },
      ],
    },
    footer: {
      sectionLabel: '// Contact',
      title: "Let's talk.",
      subtitle: "I'm open to opportunities as a Full Stack Developer.",
      email: 'E-mail',
      downloadCv: 'Download CV (PDF, in Portuguese)',
    },
  },
};
