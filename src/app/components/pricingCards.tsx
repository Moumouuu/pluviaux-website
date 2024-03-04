"use client";
import { RocketIcon, SketchLogoIcon } from "@radix-ui/react-icons";
import React from "react";
import { Fade } from "react-awesome-reveal";

// Définition du type des fonctionnalités
type Feature = string;

// Propriétés attendues pour une carte de tarification
interface PricingCardProps {
  title: string;
  price?: string;
  logo?: React.ReactNode;
  description: string;
  features: Feature[];
  backgroundColor: string;
}

// Composant pour une carte de tarification
const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  logo,
  features,
  backgroundColor,
}) => {
  return (
    <div
      className={`min-w-lg mx-auto flex flex-col items-start space-y-8 rounded-3xl border border-gray-200 bg-white p-6 text-gray-900 xl:p-8`}
      style={{ backgroundColor }}
    >
      <h3 className="flex items-center font-semibold">
        {logo}
        {title}
      </h3>
      {price && (
        <div className="my-8 flex items-baseline justify-center ">
          <span className="mr-2 text-5xl font-extrabold">{price}</span>
          <span className="text-gray-600">accès à vie</span>
        </div>
      )}
      <p className="font-light text-gray-600 sm:text-sm">{description}</p>

      {price && (
        <a className="inline-block w-full transform rounded-md bg-gray-900 py-3 text-center text-sm font-semibold text-white shadow-md transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
          Commencer mon projet
        </a>
      )}
      <ul
        role="list"
        className="mb-8 space-y-4 text-left text-sm text-gray-600"
      >
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="h-5 w-5 flex-shrink-0 rounded-full bg-gray-900 p-0.5 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Composant pour contenir toutes les cartes de tarification
const PricingCardsContainer: React.FC = () => {
  return (
    <div id="pricing" className="flex items-center justify-center bg-[#000]">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="mx-auto mb-8 max-w-screen-md  text-center lg:mb-12">
          <Fade triggerOnce>
            <h2 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
              Paiement unique, accès à vie !
            </h2>
          </Fade>
        </div>
        <div className="space-y-8  md:grid-cols-3 lg:grid lg:gap-10 lg:space-y-0">
          <Fade cascade delay={500} triggerOnce>
            <PricingCard
              title="Standard"
              logo=<RocketIcon height={25} width={25} className="mr-2" />
              price="500€"
              description="Idéal pour un site vitrine ou un blog."
              features={[
                "3 Pages",
                "Design Personnalisé",
                "Adapté sur tout les écrans",
                "Optimisé pour le référencement",
                "Développement sur mesure",
              ]}
              backgroundColor="#FFFFFF"
            />
            <PricingCard
              logo=<SketchLogoIcon height={25} width={25} className="mr-2" />
              title="Premium"
              price="1000€"
              description="Idéal pour un site intéractif & plus complet."
              features={[
                "5 Pages",
                "Tous les avantages de la formule standard",
                "Deux options offertes",
                "Maquette offerte",
                "Conseils et accompagnement",
              ]}
              backgroundColor="#FFED66"
            />
            <PricingCard
              title="Options"
              description="Ceci sont les options que vous pouvez ajouter à votre site."
              features={[
                "Page supplémentaire",
                "Espace membre",
                "Espace administrateur",
                "Analyse du trafic",
                "Formulaire de contact",
                "Maquettes",
                "Et bien plus encore...",
              ]}
              backgroundColor="#DCA6F3"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default PricingCardsContainer;
