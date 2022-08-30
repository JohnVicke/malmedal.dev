import React from "react";
import { GodComponent, BaseIconProps } from "./Icon";

const MailSvg = ({ color }: { color: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="24 / basic / mail">
      <path
        className={color}
        id="icon"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H3C1.89543 21 1 20.1046 1 19V5C1 3.89543 1.89543 3 3 3ZM3 9.61811V19H21V9.61853L12 14.1185L3 9.61811ZM3 7.38199L12 11.8825L21 7.38247V5H3V7.38199Z"
        fill="black"
      />
    </g>
  </svg>
);

export const MailIcon = (props: BaseIconProps) => (
  <GodComponent {...props} Icon={MailSvg} />
);
