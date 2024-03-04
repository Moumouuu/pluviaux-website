"use client";
import Marquee from "../ui/marquee";
import Image from "next/image";
import { BorderBeam } from "../ui/border-beam";
import { cn } from "@/lib/utils";
import { Fade } from "react-awesome-reveal";

const logos = [
  {
    name: "EduFiche",
    img: "/assets/images/edufiche.png",
  },
  {
    name: "Juiher Nature",
    img: "/assets/images/juiher.png",
  },
  {
    name: "Jalla Mulhouse",
    img: "/assets/images/jalla.png",
  },
  {
    name: "Portfolio - Robin Pluviaux",
    img: "/assets/images/robinpluviaux.png",
  },
];

const generateRandomSize = () => {
  // generate a random number between 200 and 400
  return Math.floor(Math.random() * 200) + 200;
};

const generateRandomColor = () => {
  // generate a random hex color code
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const generateRandomDuration = () => {
  // generate a random number between 5 and 20
  return Math.floor(Math.random() * 15) + 5;
};

const Logo = ({ name, img }: { name: string; img: string }) => {
  return (
    <div
      id="projects"
      className={cn(
        "grayscale-100 relative cursor-pointer filter hover:grayscale",
      )}
    >
      <Image
        className="m-2 rounded-xl"
        src={img}
        alt={name}
        width={600}
        height={20}
      />
      <BorderBeam
        size={generateRandomSize()}
        duration={generateRandomDuration()}
        delay={4}
        colorFrom={generateRandomColor()}
        colorTo={generateRandomColor()}
      />
    </div>
  );
};

export const MarqueeLogos = () => {
  return (
    <Fade triggerOnce>
      <div className="md:shadow-2xl2xl relative my-14 flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg ">
        <Marquee className="[--gap:3rem]">
          {logos.map((logo, idx) => (
            <Logo key={idx} {...logo} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 "></div>
        <div className=" pointer-events-none absolute inset-y-0 right-0 w-1/3 "></div>
      </div>
    </Fade>
  );
};
