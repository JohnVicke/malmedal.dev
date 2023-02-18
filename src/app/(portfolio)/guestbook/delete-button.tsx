"use client";

import React from "react";
import { TrashIcon } from "@/components/icons";

export default function Deletebutton() {
  const handleDeletePost = () => {
    // save unified in database as a reaction
    console.log("not implemented");
  };

  return (
    <button className="h-8 w-8 rounded-md p-1" onClick={handleDeletePost}>
      <TrashIcon />
    </button>
  );
}
