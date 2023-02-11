"use client";

import { LastVisit } from "@/types/last-visit";
import { AnimatePresence, AnimationProps, motion } from "framer-motion";
import React from "react";
import useSWR from "swr";

async function fetcher<TOuput = any>(input: RequestInfo, init?: RequestInit): Promise<TOuput> {
  const res = await fetch(input, init);
  return res.json();
}

const container: AnimationProps["variants"] = {
  hidden: { x: -10 },
  visible: { x: 0, transition: { staggerChildren: 0.1, type: "spring" } },
};

const span: AnimationProps["variants"] = {
  hidden: { x: -40, opacity: 0 },
  visible: { x: 0, opacity: 0.5 },
};

export const LastVisitText = () => {
  const { data } = useSWR<LastVisit>("/api/last-visit", fetcher);
  return (
    <AnimatePresence>
      {data?.city && data?.country && (
        <motion.p className="absolute -top-8 font-sans text-xs" variants={container} initial="hidden" animate="visible">
          <motion.span variants={span}>👋 last visit from </motion.span>
          <motion.span variants={span}>{data?.country} </motion.span>
          <motion.span variants={span}>{data?.city}</motion.span>
        </motion.p>
      )}
    </AnimatePresence>
  );
};
