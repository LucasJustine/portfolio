import { TECH_ICON_PATHS } from './tech-icons';

export type TechEntry = {
    slug: string;
    hex: string;
    mono: string;
    fg?: string;
    home: string;
};

export const TECH_REGISTRY = {
    // Frontend & Web
    Angular: { slug: "angular", hex: "dd0031", mono: "Ng", home: "https://angular.dev" },
    TypeScript: { slug: "typescript", hex: "3178c6", mono: "TS", home: "https://www.typescriptlang.org" },
    JavaScript: {
        slug: "javascript",
        hex: "f7df1e",
        mono: "JS",
        fg: "#1a1a1a",
        home: "https://developer.mozilla.org/docs/Web/JavaScript",
    },
    "JavaScript (ES6+)": {
        slug: "javascript",
        hex: "f7df1e",
        mono: "JS",
        fg: "#1a1a1a",
        home: "https://developer.mozilla.org/docs/Web/JavaScript",
    },
    HTML5: { slug: "html5", hex: "e34f26", mono: "H5", home: "https://developer.mozilla.org/docs/Web/HTML" },
    "HTML5 & CSS3": { slug: "html5", hex: "e34f26", mono: "H5", home: "https://developer.mozilla.org/docs/Web/HTML" },
    CSS3: { slug: "css3", hex: "1572b6", mono: "C3", home: "https://developer.mozilla.org/docs/Web/CSS" },
    Sass: { slug: "sass", hex: "cc6699", mono: "Sa", home: "https://sass-lang.com" },
    Tailwind: { slug: "tailwindcss", hex: "06b6d4", mono: "Tw", home: "https://tailwindcss.com" },
    "Tailwind CSS": { slug: "tailwindcss", hex: "06b6d4", mono: "Tw", home: "https://tailwindcss.com" },
    RxJS: { slug: "reactivex", hex: "b7178c", mono: "Rx", home: "https://rxjs.dev" },
    React: { slug: "react", hex: "149eca", mono: "Re", home: "https://react.dev" },
    "React-Native": { slug: "react", hex: "149eca", mono: "RN", home: "https://reactnative.dev" },
    Vue: { slug: "vuedotjs", hex: "42b883", mono: "Vu", home: "https://vuejs.org" },
    "Vue.js": { slug: "vuedotjs", hex: "42b883", mono: "Vu", home: "https://vuejs.org" },
    Livewire: { slug: "livewire", hex: "fb70a9", mono: "Lw", home: "https://livewire.laravel.com" },
    "Next.js": { slug: "nextdotjs", hex: "000000", mono: "Nx", home: "https://nextjs.org" },
    Vite: { slug: "vite", hex: "646cff", mono: "Vi", home: "https://vite.dev" },
    Leptos: { slug: "leptos", hex: "ef3939", mono: "Lp", home: "https://leptos.dev" },
    "TanStack Start": { slug: "", hex: "ff4154", mono: "Ts", home: "https://tanstack.com/start" },

    // Backend & Langages
    PHP: { slug: "php", hex: "777bb4", mono: "PHP", home: "https://www.php.net" },
    Laravel: { slug: "laravel", hex: "ff2d20", mono: "Lv", home: "https://laravel.com" },
    Java: { slug: "openjdk", hex: "ed8b00", mono: "Jv", home: "https://openjdk.org" },
    "Spring Boot": { slug: "springboot", hex: "6db33f", mono: "Sb", home: "https://spring.io/projects/spring-boot" },
    Spring: { slug: "spring", hex: "6db33f", mono: "Sp", home: "https://spring.io" },
    "JPA / Hibernate": { slug: "hibernate", hex: "59666c", mono: "Hb", home: "https://hibernate.org" },
    Hibernate: { slug: "hibernate", hex: "59666c", mono: "Hb", home: "https://hibernate.org" },
    REST: { slug: "openapiinitiative", hex: "6ba539", mono: "API", home: "https://www.openapis.org" },
    "Node.js": { slug: "nodedotjs", hex: "5fa04e", mono: "Nd", home: "https://nodejs.org" },
    NestJS: { slug: "nestjs", hex: "e0234e", mono: "Ns", home: "https://nestjs.com" },
    Express: { slug: "express", hex: "000000", mono: "Ex", home: "https://expressjs.com" },
    Python: { slug: "python", hex: "3776ab", mono: "Py", home: "https://www.python.org" },
    Rust: { slug: "rust", hex: "000000", mono: "Rs", home: "https://www.rust-lang.org" },
    Go: { slug: "go", hex: "00add8", mono: "Go", home: "https://go.dev" },
    "C/C++": { slug: "cplusplus", hex: "00599c", mono: "C+", home: "https://isocpp.org" },
    Haskell: { slug: "haskell", hex: "5e5086", mono: "Hs", home: "https://www.haskell.org" },
    Flutter: { slug: "flutter", hex: "02569b", mono: "Fl", home: "https://flutter.dev" },
    Dart: { slug: "dart", hex: "0175c2", mono: "Dt", home: "https://dart.dev" },
    Adonis: { slug: "adonisjs", hex: "5a45ff", mono: "Ad", home: "https://adonisjs.com" },

    // Bases de données
    Postgres: { slug: "postgresql", hex: "4169e1", mono: "Pg", home: "https://www.postgresql.org" },
    PostgreSQL: { slug: "postgresql", hex: "4169e1", mono: "Pg", home: "https://www.postgresql.org" },
    MySQL: { slug: "mysql", hex: "4479a1", mono: "My", home: "https://www.mysql.com" },
    MongoDB: { slug: "mongodb", hex: "47a248", mono: "Mg", home: "https://www.mongodb.com" },
    Redis: { slug: "redis", hex: "dc382d", mono: "Rd", home: "https://redis.io" },
    Supabase: { slug: "supabase", hex: "3ecf8e", mono: "Sb", fg: "#1a1a1a", home: "https://supabase.com" },

    // DevOps, Build & Outils
    Docker: { slug: "docker", hex: "2496ed", mono: "Dk", home: "https://www.docker.com" },
    Git: { slug: "git", hex: "f05032", mono: "Gt", home: "https://git-scm.com" },
    "Git & GitHub / GitLab": { slug: "git", hex: "f05032", mono: "Gt", home: "https://git-scm.com" },
    GitHub: { slug: "github", hex: "181717", mono: "Gh", home: "https://github.com" },
    GitLab: { slug: "gitlab", hex: "fc6d26", mono: "GL", home: "https://gitlab.com" },
    "GitLab CI": { slug: "gitlab", hex: "fc6d26", mono: "GL", home: "https://docs.gitlab.com/ee/ci/" },
    "CI / CD": { slug: "githubactions", hex: "2088ff", mono: "CI", home: "https://github.com/features/actions" },
    "GitHub Actions": { slug: "githubactions", hex: "2088ff", mono: "GA", home: "https://github.com/features/actions" },
    Linux: { slug: "linux", hex: "fcc624", fg: "#1a1a1a", mono: "Lx", home: "https://www.kernel.org" },
    "Linux & Terminal": { slug: "linux", hex: "fcc624", fg: "#1a1a1a", mono: "Lx", home: "https://www.kernel.org" },
    "Maven / Gradle": { slug: "apachemaven", hex: "c71a36", mono: "Mv", home: "https://maven.apache.org" },
    Maven: { slug: "apachemaven", hex: "c71a36", mono: "Mv", home: "https://maven.apache.org" },
    Gradle: { slug: "gradle", hex: "02303a", mono: "Gd", home: "https://gradle.org" },
    Jenkins: { slug: "jenkins", hex: "d24939", mono: "Jk", home: "https://www.jenkins.io" },
    CircleCI: { slug: "circleci", hex: "343434", mono: "Cr", home: "https://circleci.com" },
    Dokploy: { slug: "", hex: "ec5d5e", mono: "Dk", home: "https://dokploy.com" },
    Postman: { slug: "postman", hex: "ff6c37", mono: "Pm", home: "https://www.postman.com" },

    // Tests & Qualité
    PHPUnit: { slug: "phpunit", hex: "3b97d3", mono: "PU", home: "https://phpunit.de" },
    "Tests (PHPUnit)": { slug: "phpunit", hex: "3b97d3", mono: "PU", home: "https://phpunit.de" },
    Vitest: { slug: "vitest", hex: "6e9f18", mono: "Vt", home: "https://vitest.dev" },
    JUnit: { slug: "junit5", hex: "25a162", mono: "JU", home: "https://junit.org/junit5/" },
    "Tests & Qualité (Vitest, JUnit)": { slug: "vitest", hex: "6e9f18", mono: "TQ", home: "https://vitest.dev" },

    // Méthodologies & Soft skills
    "Méthodes Agiles (Scrum / Kanban)": { slug: "jira", hex: "0052cc", mono: "Ag", home: "https://www.scrum.org" },
    "Clean Code & Design Patterns": { slug: "", hex: "000091", mono: "CC", home: "https://en.wikipedia.org/wiki/Clean_Code" },
    Jira: { slug: "jira", hex: "0052cc", mono: "Jr", home: "https://www.atlassian.com/software/jira" },

    // Réseau, Web3 & Autres
    GraphQL: { slug: "graphql", hex: "e10098", mono: "GQ", home: "https://graphql.org" },
    gRPC: { slug: "", hex: "244c5a", mono: "gR", home: "https://grpc.io" },
    RabbitMQ: { slug: "rabbitmq", hex: "ff6600", mono: "Rb", home: "https://www.rabbitmq.com" },
    WebSocket: { slug: "", hex: "6188dd", mono: "Ws", home: "https://websocket.org" },
    Bluetooth: { slug: "bluetooth", hex: "0082fc", mono: "Bt", home: "https://www.bluetooth.com" },
    Solidity: { slug: "solidity", hex: "363636", mono: "Sl", home: "https://soliditylang.org" },
    thirdweb: { slug: "thirdweb", hex: "f213a4", mono: "tw", home: "https://thirdweb.com" },
    "Aleph.cloud": { slug: "", hex: "00d1ff", fg: "#1a1a1a", mono: "Ac", home: "https://aleph.cloud" },
    ENS: { slug: "", hex: "5298ff", mono: "EN", home: "https://ens.domains" },
    Scroll: { slug: "", hex: "ff684b", mono: "Sc", home: "https://scroll.io" },
    Raylib: { slug: "raylib", hex: "ffffff", fg: "#1a1a1a", mono: "Rl", home: "https://www.raylib.com" },
    "Claude Code": { slug: "claude", hex: "d97757", mono: "Cc", home: "https://claude.com/claude-code" },
    Rekordbox: { slug: "", hex: "e60912", mono: "Rb", home: "https://www.rekordbox.com" },
    opencode: { slug: "", hex: "080808", mono: "oc", home: "https://opencode.ai" },
} satisfies Record<string, TechEntry>;

export type TechName = keyof typeof TECH_REGISTRY;

export const getTechEntry = (name: TechName | string): TechEntry | undefined => {
    return TECH_REGISTRY[name as TechName];
};

export const getTechHome = (name: TechName | string): string | undefined => {
    return getTechEntry(name)?.home;
};


export const getTechIconPath = (name: TechName | string): string | undefined => {
    const entry = getTechEntry(name);
    return entry?.slug ? TECH_ICON_PATHS[entry.slug] : undefined;
};
/** Récupère la couleur hexadécimale associée */
export const getTechColor = (name: TechName | string): string | undefined => {
    const entry = getTechEntry(name);
    return entry ? `#${entry.hex}` : undefined;
};

/** Récupère le monogramme (ex: "Ng", "TS", "Jv") */
export const getTechMono = (name: TechName | string): string => {
    const entry = getTechEntry(name);
    if (entry?.mono) return entry.mono;
    return name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
};
