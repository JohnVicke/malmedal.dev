import { Heading } from "@/components/heading";

export default function GuestbookHeading() {
  return (
    <Heading topDecoration={<TopHeadingDecoration />} bottomDecoration={<BottomHeadingDecoration />}>
      Guestbook
    </Heading>
  );
}

const TopHeadingDecoration = () => (
  <svg
    className="absolute left-[7.5rem] top-1"
    width="27"
    height="2"
    viewBox="0 0 27 2"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M1 0L0 0V2L1 2V0ZM27 0L25.7 0V2H27V0ZM20.5 0L12.7 0V2L20.5 2V0ZM2.3 0L1 0V2H2.3V0Z" fill="white" />
  </svg>
);

const BottomHeadingDecoration = () => (
  <svg
    className="absolute -bottom-1 left-2"
    width="110"
    height="4"
    viewBox="0 0 110 4"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 0.5C1.17158 0.5 0.5 1.17157 0.5 2C0.5 2.82843 1.17158 3.5 2 3.5V0.5ZM110 0.5L108.92 0.5V3.5H110V0.5ZM104.6 0.5L98.12 0.5V3.5L104.6 3.5V0.5ZM89.48 0.5L87.32 0.5V3.5H89.48V0.5ZM83 0.5L76.52 0.5V3.5L83 3.5V0.5ZM67.88 0.5L65.72 0.5V3.5H67.88V0.5ZM61.4 0.5L54.92 0.5V3.5L61.4 3.5V0.5ZM46.28 0.5L44.12 0.5V3.5H46.28V0.5ZM39.8 0.5L33.32 0.5V3.5L39.8 3.5V0.5ZM24.68 0.5L22.52 0.5V3.5H24.68V0.5ZM18.2 0.5L11.72 0.5V3.5L18.2 3.5V0.5ZM3.07999 0.5L2 0.5V3.5H3.07999V0.5Z"
      fill="white"
    />
  </svg>
);
