import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import React from "react";
import { v4 } from "uuid";
import { BrowserSvg } from "../icons/BrowserIcon";
import { GithubIcon, GithubSvg } from "../icons/GithubIcon";

type Project = {
  id: string;
  title: string;
  tech: string[];
  website?: { href: string };
  github: { href: string };
  year: number;
  description: string;
};

const projects: Project[] = [
  {
    id: v4(),
    website: {
      href: "https://marketplace.visualstudio.com/items?itemName=ViktorMalmedal.monorepo-auto-import",
    },
    github: {
      href: "https://github.com/JohnVicke/monorepo-fix-imports",
    },
    tech: ["Node", "TypeScript", "webpack"],
    title: "Monorepo-fix-imports",
    year: 2021,
    description: `An VS-Code extensions developed during my time at Schibsted to automatically fix broken imports / change imports to use package-imports instead of relative ones.`,
  },
  {
    id: v4(),
    website: {
      href: "https://time-keeper-rose.vercel.app/",
    },
    github: {
      href: "https://github.com/JohnVicke/napa",
    },
    tech: ["NextJS", "TypeScript", "tRPC", "tailwind", "Prisma", "PostgresQL"],
    title: "Not another productivity app",
    year: 2022,
    description: `Not another productivity app (napa) is a full-stack project which enables users to "clock" their time at work. Users can keep track of the number of hours worked, how much is in the "flex account" and get an overview of what one spends the most time on. Napa is also integrated with google tasks so users can save, create and clock their tasks during the day.`,
  },
  {
    id: v4(),
    github: { href: "https://github.com/JohnVicke/snuber" },
    tech: ["React Native", "Express", "NextJS", "GraphQL", "Apollo"],
    title: "Snuber",
    year: 2020,
    description: "Snuber",
  },
];

type ProjectProps = {
  project: Project;
};

const ProjectIcon = ({
  icon: Icon,
  href,
}: {
  icon: ({ color }: { color: string }) => JSX.Element;
  href: string;
}) => {
  const [hover, setHover] = React.useState(false);
  return (
    <motion.a
      href={href}
      target="_blank"
      onHoverStart={(_) => setHover(true)}
      onHoverEnd={(_) => setHover(false)}
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", damping: 5 },
      }}
    >
      <Icon color={hover ? "fill-neutral-300" : "fill-neutral-400"} />
    </motion.a>
  );
};

const Project = ({ project }: ProjectProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const { website, title, tech, year, description, id, github } = project;

  return (
    <motion.div className="flex flex-col gap-4 rounded-lg p-4">
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex justify-between gap-4 items-center cursor-pointer"
      >
        <h3 className="font-bold">{title}</h3>
        <span className="flex-1 border-b"></span>
        <h4 className="font-bold">{year}</h4>
      </div>
      <motion.div
        key={id}
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        exit={{ x: -10, opacity: 0 }}
        className="w-full flex"
      >
        <div className="flex w-full flex-col">
          <div className="flex ">
            <div className="flex-1">
              <p className="text-neutral-200 flex-wrap">{description}</p>
            </div>
            <div className="gap-2 flex flex-col">
              <ProjectIcon icon={GithubSvg} href={github.href} />
              {website && <ProjectIcon icon={BrowserSvg} href={website.href} />}
            </div>
          </div>
          <div className="flex gap-2 mt-2 flex-wrap items-center">
            {tech.map((t) => (
              <div key={`id-${t}`} className="text-xs ">
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <div className="flex flex-col gap-2">
      {projects.map((project, i) => (
        <motion.div
          key={project.id}
          initial={{ y: -10, opacity: 0 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              delay: i / 10,
              type: "spring",
              damping: 5,
            },
          }}
        >
          <Project project={project} />
        </motion.div>
      ))}
    </div>
  );
};
