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
    "HTML5 & CSS3": { slug: "html5", hex: "e34f26", mono: "H5", home: "https://developer.mozilla.org/docs/Web/HTML" },
    "Tailwind CSS": { slug: "tailwindcss", hex: "06b6d4", mono: "Tw", home: "https://tailwindcss.com" },
    DSFR: { slug: "dsfr", hex: "000091", mono: "DSFR", home: "https://www.systeme-de-design.gouv.fr/version-courante/fr" },
    "Vue.js": { slug: "vuedotjs", hex: "42b883", mono: "Vu", home: "https://vuejs.org" },
    Livewire: { slug: "livewire", hex: "fb70a9", mono: "Lw", home: "https://livewire.laravel.com" },

    // Backend & Langages
    PHP: { slug: "php", hex: "777bb4", mono: "PHP", home: "https://www.php.net" },
    Laravel: { slug: "laravel", hex: "ff2d20", mono: "Lv", home: "https://laravel.com" },
    Java: { slug: "openjdk", hex: "ed8b00", mono: "Jv", home: "https://openjdk.org" },
    "Spring Boot": { slug: "springboot", hex: "6db33f", mono: "Sb", home: "https://spring.io/projects/spring-boot" },
    REST: { slug: "openapiinitiative", hex: "6ba539", mono: "API", home: "https://www.openapis.org" },
    "JWT & OAuth 2.0": { slug: "jsonwebtokens", hex: "d63aff", mono: "JWT", home: "https://oauth.net/2/" },
    Kotlin: { slug: "kotlin", hex: "7f52ff", mono: "Kt", home: "https://kotlinlang.org" },
    Android: { slug: "android", hex: "34a853", mono: "An", home: "https://developer.android.com" },
    Tomcat: { slug: "apachetomcat", hex: "f8dc75", fg: "#1a1a1a", mono: "Tc", home: "https://tomcat.apache.org" },
    C: { slug: "c", hex: "a8b9cc", mono: "C", home: "https://en.wikipedia.org/wiki/C_(programming_language)" },

    // Bases de données
    MySQL: { slug: "mysql", hex: "4479a1", mono: "My", home: "https://www.mysql.com" },
    SQLite: { slug: "sqlite", hex: "003b57", mono: "Sq", home: "https://www.sqlite.org" },
    Redis: { slug: "redis", hex: "dc382d", mono: "Rd", home: "https://redis.io" },

    // DevOps, Build & Outils
    Docker: { slug: "docker", hex: "2496ed", mono: "Dk", home: "https://www.docker.com" },
    Git: { slug: "git", hex: "f05032", mono: "Gt", home: "https://git-scm.com" },

    // Réseau, Web3 & Autres
    WebSocket: { slug: "", hex: "6188dd", mono: "Ws", home: "https://websocket.org" },
    Nginx: { slug: "nginx", hex: "009639", mono: "Ngx", home: "https://www.nginx.com" },
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
export const getTechColor = (name: TechName | string): string | undefined => {
    const entry = getTechEntry(name);
    return entry ? `#${entry.hex}` : undefined;
};

export const getTechMono = (name: TechName | string): string => {
    const entry = getTechEntry(name);
    if (entry?.mono) return entry.mono;
    return name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase() || "?";
};
