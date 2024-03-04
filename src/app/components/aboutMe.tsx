"use client";
import Image from "next/image";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Fade } from "react-awesome-reveal";

const words =
  "Étudiant en informatique, passionné de sport et de développement web, j'ai commencé à explorer le monde du web pendant le confinement du Covid-19. Créatif de nature, j'ai réalisé divers projets personnels, dont mon portfolio et Edu-Fiche, pour générer des fiches de révision. Mon objectif est que tout le monde puisse accéder à un service professionnel à moindre coût.";
export default function AboutMe() {
  return (
    <div className="my-10 flex w-full flex-col items-center justify-center">
      <Fade triggerOnce>
        <h2 className="mb-5 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
          À propos de moi
        </h2>
      </Fade>
      <div className="flex w-[70%] flex-col items-center lg:flex-row">
        <TextGenerateEffect words={words} />
        <Image
          alt="Me"
          src={"/assets/images/robin.jpeg"}
          height={100}
          width={400}
          className="ml-4 mt-10 h-[500px] w-auto rounded-2xl object-cover"
        />
      </div>
    </div>
  );
}
