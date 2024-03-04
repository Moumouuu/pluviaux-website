"use client";
import React from "react";
import { TextRevealCard } from "./ui/text-reveal-card";

export function StartProjectCTA() {
  return (
    <div className="my-10 flex flex-col items-center justify-center">
      <TextRevealCard
        text="Ce n'est pas impossible, c'est juste que personne ne l'a encore fait."
        revealText="Débuter votre projet avec nous."
      ></TextRevealCard>
    </div>
  );
}
