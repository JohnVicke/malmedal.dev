import { motion } from "framer-motion";
import React from "react";
import { v4 } from "uuid";

import { BrowserIcon } from "../icons/BrowserIcon";
import { GithubIcon } from "../icons/GithubIcon";

type Project = {
  id: string;
  title: string;
  tech: string[];
  website?: { href: string; label: string };
  github: { href: string; label: string };
  year: number;
  description: string;
};

const projects: Project[] = [
  {
    id: v4(),
    website: {
      label: "Kodverk",
      href: "https://docs.kodverk.se/",
    },
    github: {
      label: "Github kodverk",
      href: "https://github.com/kodverk",
    },
    tech: [
      "Next",
      "TypeScript",
      "Tailwind",
      "Vercel",
      "Cloudflare",
      "Netlify",
      "mdx",
    ],
    title: "Kodverk",
    year: 2023,
    description: `I founded Kodverk together with my friend to simplify API integration and provide a user-friendly, type-safe solution. We noticed the lack of such tools during our university studies and wanted to empower developers to focus on their projects without the complexities of data retrieval. Kodverk offers clear documentation, SDKs, and supports hackathon enthusiasts, indie developers, startups, and students in various disciplines.`,
  },
  {
    id: v4(),
    website: {
      label: "Dreamquest",
      href: "https://dream-quest.vercel.app/",
    },
    github: {
      label: "Github dream quest",
      href: "https://github.com/johnvicke/dream-quest",
    },
    tech: [
      "Next",
      "TypeScript",
      "Tailwind",
      "Vercel",
      "Turborepo",
      "Drizzle ORM",
      "Planetscale",
    ],
    title: "Dreamquest",
    year: 2023,
    description: `Dreamquest is a reddit clone created for the sole purpose of exploring the new Next13 app router. Currently it supports creating communities, posts and interacting with them (upvote, comment, create threads).`,
  },
  {
    id: v4(),
    website: {
      label: "VSCode marketplace",
      href: "https://marketplace.visualstudio.com/items?itemName=ViktorMalmedal.monorepo-auto-import",
    },
    github: {
      label: "Github monorepo fix imports",
      href: "https://github.com/JohnVicke/monorepo-fix-imports",
    },
    tech: ["Node", "TypeScript", "webpack"],
    title: "Monorepo-fix-imports",
    year: 2021,
    description: `A VS code extension I developed during my time at Schibsted to automatically fix buggy imports / change imports to use package imports instead of relative imports.`,
  },
  {
    id: v4(),
    github: {
      label: "Github snuber",
      href: "https://github.com/JohnVicke/snuber",
    },
    tech: [
      "React-Native",
      "Express",
      "TypeScript",
      "NextJS",
      "GraphQL",
      "Apollo",
      "Pusher",
    ],
    title: "Snuber",
    year: 2020,
    description: `The name is probably self-explanatory to most people. Snuber is a social media and delivery service aimed at the average snus connoisseur. The idea came about when I was playing video games with my friends and one person called out in a panic that they were out of snus. "It would be so nice if all I'd to do was push a button and someone would deliver it to me!" That's basically the idea behind Snuber. It's a React Native app that lets you send snus distress calls to friends or people near you. When someone delivers snus, they are rewarded with points in the app. Unfortunately, I can't publish it due to tobacco regulations 🔞.`,
  },
];

type ProjectProps = {
  project: Project;
};

const ProjectIcon = ({
  icon: Icon,
  label,
  href,
}: {
  icon: () => JSX.Element;
  label: string;
  href: string;
}) => {
  const [hover, setHover] = React.useState(false);
  return (
    <motion.a
      href={href}
      aria-label={label}
      target="_blank"
      onHoverStart={(_) => setHover(true)}
      onHoverEnd={(_) => setHover(false)}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", damping: 5 },
      }}
    >
      <Icon />
    </motion.a>
  );
};

const Project = ({ project }: ProjectProps) => {
  const { website, title, tech, year, description, github } = project;

  return (
    <div className="flex flex-col gap-8 rounded-lg p-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className=" font-bold">{title}</h2>
        <span className="flex-1 border-b border-foreground/20"></span>
        <time>{year}</time>
      </div>
      <div className="flex w-full flex-col ">
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-8">
          <div className="flex-1 flex-wrap">
            <p>{description}</p>
          </div>
          <div className="flex flex-row gap-2 sm:flex-col">
            <ProjectIcon
              label={github.label}
              icon={GithubIcon}
              href={github.href}
            />
            {website && (
              <ProjectIcon
                label={website.label}
                icon={BrowserIcon}
                href={website.href}
              />
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {tech.map((t) => (
            <div key={`id-${t}`} className="text-xs ">
              <p>{t}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <div className="flex flex-col gap-4">
      {projects.map((project, i) => (
        <motion.div key={project.id}>
          <Project project={project} />
        </motion.div>
      ))}
    </div>
  );
};
