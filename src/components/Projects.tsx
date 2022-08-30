import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import React, { useEffect } from "react";
import { v4 } from "uuid";
import { BrowserSvg } from "../icons/BrowserIcon";
import { GithubIcon, GithubSvg } from "../icons/GithubIcon";

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
      label: "Napa vercel app",
      href: "https://time-keeper-rose.vercel.app/",
    },
    github: {
      label: "Github napa",
      href: "https://github.com/JohnVicke/napa",
    },
    tech: ["NextJS", "TypeScript", "tRPC", "tailwind", "Prisma", "PostgresQL"],
    title: "Not another productivity app",
    year: 2022,
    description: `Not another productivity app (napa) is a full-stack project that allows users to "clock" their time at work. Users can track the number of hours worked, how much is in the "flex account" and get an overview of what you spend most of your time on. Napa also integrates with Google Tasks, allowing users to save, create and stamp their tasks throughout the day.`,
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
  icon: ({ color }: { color: string }) => JSX.Element;
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
      <Icon
        color={
          hover
            ? "fill-neutral-700 dark:fill-neutral-300"
            : "fill-neutral-500 dark:fill-neutral-400"
        }
      />
    </motion.a>
  );
};

const Project = ({ project }: ProjectProps) => {
  const { website, title, tech, year, description, id, github } = project;

  return (
    <div className="flex flex-col gap-4 rounded-lg p-4">
      <div className="text-neutral-800 dark:text-neutral-200 flex justify-between gap-4 items-center">
        <h2 className=" font-bold">{title}</h2>
        <span className="flex-1 border-b border-neutral-300 dark:border-neutral-700"></span>
        <h2 className="font-bold">{year}</h2>
      </div>
      <div className="text-neutral-700 dark:text-neutral-300 flex w-full flex-col">
        <div className="flex ">
          <div className="flex-1">
            <p className=" flex-wrap">{description}</p>
          </div>
          <div className="gap-2 flex flex-col ml-4">
            <ProjectIcon
              label={github.label}
              icon={GithubSvg}
              href={github.href}
            />
            {website && (
              <ProjectIcon
                label={website.label}
                icon={BrowserSvg}
                href={website.href}
              />
            )}
          </div>
        </div>
        <div className="flex gap-2 mt-4 flex-wrap items-center">
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
    <div className="flex flex-col gap-2">
      {projects.map((project, i) => (
        <motion.div key={project.id}>
          <Project project={project} />
        </motion.div>
      ))}
    </div>
  );
};
