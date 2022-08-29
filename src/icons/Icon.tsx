import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type BaseIconProps = {
  isActive: boolean;
  tooltip: string;
  initial: boolean;
};

export const BaseIcon = ({
  Icon,
  isActive,
  initial,
  tooltip,
}: BaseIconProps & {
  Icon: (props: { color: string }) => JSX.Element;
}) => {
  const [hover, setHover] = useState(false);

  const containerAnim = isActive ? { scale: 1.05 } : undefined;

  const tooltipAnimation = {
    initial: {
      y: -10,
      opacity: 0,
      scale: 0.2,
    },
    animate: {
      y: -50,
      opacity: 1,
      scale: 1,
    },
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 150,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        onHoverStart={(_) => setHover(true)}
        onHoverEnd={(_) => setHover(false)}
        whileHover={{
          scale: 1.05,
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
        animate={containerAnim}
        className="p-2 bg-neutral-700 relative hover:bg-neutral-600 w-full min-w-[64px] cursor-pointer h-16 rounded-xl items-center justify-center flex"
      >
        <Icon
          color={hover || isActive ? "fill-neutral-300" : "fill-neutral-400"}
        />
        <AnimatePresence initial={initial}>
          {(hover || isActive) && (
            <motion.div {...tooltipAnimation} className="absolute">
              <p className=" text-sm">{tooltip}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};
