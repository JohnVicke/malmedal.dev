import { Heading } from "@/components/heading";

export default function About() {
  return (
    <>
      <Heading>About me</Heading>
      <p className="font-semibold">
        TL;DR <span className="font-normal italic opacity-80">I Like to create cool stuff</span>
      </p>
    </>
  );
}
