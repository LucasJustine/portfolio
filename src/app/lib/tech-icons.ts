import { siAndroid, siAngular, siApachetomcat, siDocker, siGit, siHtml5, siJavascript, siJsonwebtokens, siKotlin, siLaravel, siLivewire, siMysql, siOpenapiinitiative, siOpenjdk, siPhp, siRedis, siSpringboot, siSqlite, siTailwindcss, siTypescript, siVuedotjs } from 'simple-icons';

const ICONS = [siAndroid, siAngular, siApachetomcat, siDocker, siGit, siHtml5, siJavascript, siJsonwebtokens, siKotlin, siLaravel, siLivewire, siMysql, siOpenapiinitiative, siOpenjdk, siPhp, siRedis, siSpringboot, siSqlite, siTailwindcss, siTypescript, siVuedotjs];

export const TECH_ICON_PATHS: Record<string, string> = Object.fromEntries(
    ICONS.map((icon) => [icon.slug, icon.path]),
);