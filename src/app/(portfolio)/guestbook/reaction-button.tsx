"use client";

import React from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { ReactionIcon } from "@/components/icons";

interface EmojiMeta {
  id: string;
  keywords: string[];
  name: string;
  native: string;
  shortcodes: string;
  unified: string;
}

export default function ReactionButton() {
  const [showEmojiPicker, setShowEmojiPicker] = React.useState(false);
  const toggleEmojiPicker = () => setShowEmojiPicker(!showEmojiPicker);

  const handleEmojiSelect = ({ unified }: EmojiMeta) => {
    // save unified in database as a reaction
    console.log({ unified });
  };

  return (
    <div className="relative">
      <button className="h-8 w-8 rounded-md p-1 " onClick={toggleEmojiPicker}>
        <ReactionIcon />
      </button>
      {showEmojiPicker && (
        <div className="absolute top-8 right-0 z-10">
          <Picker data={data} onEmojiSelect={handleEmojiSelect} onClickOutside={toggleEmojiPicker} autoFocus />
        </div>
      )}
    </div>
  );
}
