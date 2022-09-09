import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import { useState } from "react";

export type BaseIconProps = {
  isActive: boolean;
  tooltip: string;
  initial: boolean;
};

export const GodComponent = ({
  Icon,
  component,
  isActive,
  initial,
  tooltip,
  onClick,
}: BaseIconProps & {
  Icon?: (props: { color: string }) => JSX.Element;
  onClick: () => void;
  component?: JSX.Element;
}) => {
  const [hover, setHover] = useState(false);

  const containerAnim = isActive
    ? {
        animate: { scale: 1.05, y: -5 },
        initial: { scale: 1, y: 5 },
        transition: { duration: 0.5 },
      }
    : undefined;

  const tooltipAnimation: AnimationProps = {
    initial: {
      y: 30,
      opacity: 0,
    },
    animate: {
      y: 45,
      opacity: 1,
      scale: 1,
    },
    exit: {
      scale: 0.5,
      y: 40,
      opacity: 0,
    },
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 150,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        onClick={onClick}
        onHoverStart={(_) => setHover(true)}
        onHoverEnd={(_) => setHover(false)}
        whileHover={{
          scale: 1.05,
          y: -10,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 150,
          },
        }}
        whileTap={{
          scale: 1.1,
          transition: { type: "spring", damping: 5, stiffness: 150 },
        }}
        {...containerAnim}
        className="p-2 mb-4 bg-neutral-300 dark:bg-neutral-700 relative hover:bg-neutral-400 dark:hover:bg-neutral-600 sm:w-full sm:h-16 w-full cursor-pointer h-12 rounded-xl items-center justify-center flex"
      >
        {Icon && (
          <Icon
            color={
              hover || isActive
                ? "fill-neutral-700 dark:fill-neutral-300"
                : "fill-neutral-500 dark:fill-neutral-400"
            }
          />
        )}
        {component && component}
        <AnimatePresence initial={initial} mode="wait">
          {(hover || isActive) && (
            <motion.div {...tooltipAnimation} className="absolute">
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {tooltip}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
