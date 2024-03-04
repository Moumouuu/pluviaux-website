"use client";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { cn } from "@/lib/utils";
import TextShimmer from "../ui/text-shimmer";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Fade } from "react-awesome-reveal";

const words =
  "Optez pour un site web unique, conçu sur mesure par un expert en développement. Confiez-moi votre vision et je la transformerai en réalité numérique exceptionnelle.";
export function SpotlightPreview() {
  return (
    <Fade triggerOnce>
      <div className="bg-grid-white/[0.02] relative flex w-full overflow-hidden rounded-md pt-32 antialiased md:h-[35rem] md:items-center md:justify-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="white"
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-7xl">
            <span className="rounded-xl border bg-gradient-to-r from-white to-yellow-500 bg-clip-text px-4 py-2 text-transparent">
              Pluviaux
            </span>
            <br />
            votre développeur{" "}
            <span className="mx-1 rounded-xl border bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              web
            </span>{" "}
            .
          </h1>
          <div className="mx-auto mt-4 max-w-4xl text-center text-base font-normal text-neutral-300">
            <TextGenerate />
          </div>
          <TextShimmerBadge />
        </div>
      </div>
    </Fade>
  );
}

export function TextGenerate() {
  return <TextGenerateEffect words={words} />;
}

export async function TextShimmerBadge() {
  return (
    <div className="z-10 my-5 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-white/5 bg-neutral-900 text-base text-white transition-all ease-in hover:cursor-pointer  hover:bg-neutral-800",
        )}
      >
        <TextShimmer className="inline-flex items-center justify-center px-4 py-1">
          <span>✨ Vos rêves, notre passion</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </TextShimmer>
      </div>
    </div>
  );
}
