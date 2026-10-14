import {
    siAdonisjs, siAngular, siApachemaven, siBluetooth, siCircleci, siClaude, siCplusplus, siCss3,
    siDart, siDocker, siExpress, siFlutter, siGit, siGithub, siGithubactions, siGitlab, siGo,
    siGradle, siGraphql, siHaskell, siHibernate, siHtml5, siJavascript, siJenkins, siJira,
    siJunit5, siLaravel, siLeptos, siLinux, siLivewire, siMongodb, siMysql, siNestjs, siNextdotjs,
    siNodedotjs, siOpenapiinitiative, siOpenjdk, siPhp, siPostgresql, siPostman, siPython,
    siRabbitmq, siRaylib, siReact, siReactivex, siRedis, siRust, siSass, siSolidity, siSpring,
    siSpringboot, siSupabase, siTailwindcss, siThirdweb, siTypescript, siVite, siVitest, siVuedotjs,
} from 'simple-icons';

const ICONS = [
    siAdonisjs, siAngular, siApachemaven, siBluetooth, siCircleci, siClaude, siCplusplus, siCss3,
    siDart, siDocker, siExpress, siFlutter, siGit, siGithub, siGithubactions, siGitlab, siGo,
    siGradle, siGraphql, siHaskell, siHibernate, siHtml5, siJavascript, siJenkins, siJira,
    siJunit5, siLaravel, siLeptos, siLinux, siLivewire, siMongodb, siMysql, siNestjs, siNextdotjs,
    siNodedotjs, siOpenapiinitiative, siOpenjdk, siPhp, siPostgresql, siPostman, siPython,
    siRabbitmq, siRaylib, siReact, siReactivex, siRedis, siRust, siSass, siSolidity, siSpring,
    siSpringboot, siSupabase, siTailwindcss, siThirdweb, siTypescript, siVite, siVitest, siVuedotjs,
];

export const TECH_ICON_PATHS: Record<string, string> = Object.fromEntries(
    ICONS.map((icon) => [icon.slug, icon.path]),
);