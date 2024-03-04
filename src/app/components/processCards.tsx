"use client";
import TextShine from "./ui/text-shine";
import { ThreeDCard, ThreeDCardProps } from "./ui/threeDCard";
import { Fade } from "react-awesome-reveal";

export default function ProcessCards() {
  const cards: ThreeDCardProps[] = [
    {
      title: "01 - Récupérer les besoins",
      description:
        "Nous commençons par discuter avec vous de vos besoins, de vos attentes et de vos inspirations.",
      imageUrl:
        "https://images.unsplash.com/photo-1586936893354-362ad6ae47ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGN1c3RvbWVyc3xlbnwwfHwwfHx8MA%3D%3D",
      secondaryButtonText: "En savoir plus -> ",
      primaryButtonText: "Commencer",
    },
    {
      title: "02 - Devis & Signature",
      description:
        "Nous vous envoyons un devis détaillé en fonction de vos besoins.",
      imageUrl:
        "https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1c3RvbWVyfGVufDB8fDB8fHww",
      primaryButtonText: "Commencer",
      secondaryButtonText: "En savoir plus -> ",
    },
    {
      title: "03 - Réalisation des maquettes",
      description:
        "Si vous ne possédez pas de maquette, nous en créerons une pour vous. Une fois les maquettes réalisées, une phase de validation intervient.",
      imageUrl:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      primaryButtonText: "Commencer",
      secondaryButtonText: "En savoir plus -> ",
    },
    {
      title: "04 - Développement",
      description:
        "Une fois les maquettes validées, nous passons à la phase de développement.",
      imageUrl:
        "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      primaryButtonText: "Commencer",
      secondaryButtonText: "En savoir plus -> ",
    },
    {
      title: "05 - Livraison & Formation",
      description:
        "Nous vous livrons votre site web et vous formons à son utilisation si besoin.",
      imageUrl:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      primaryButtonText: "Commencer",
      secondaryButtonText: "En savoir plus -> ",
    },
  ];

  return (
    <div id="process" className="my-10 flex flex-col items-center text-6xl">
      <Fade triggerOnce>
        <h2 className="mb-5 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
          Notre Processus
        </h2>
      </Fade>

      <div className=" flex flex-col items-center justify-center md:flex-row md:flex-wrap">
        <Fade cascade triggerOnce delay={500}>
          {cards.map((card, index) => {
            return <ThreeDCard key={index} {...card} />;
          })}
        </Fade>
      </div>
    </div>
  );
}
