"use client";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Fade } from "react-awesome-reveal";
import { Spotlight } from "../ui/Spotlight";
import { SparklesCore } from "../ui/sparkles";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import TextShimmer from "../ui/text-shimmer";

const words =
  "Ce n'est pas impossible, c'est juste que personne ne l'a encore fait.";
export function SpotlightPreview() {
  return (
    <Fade triggerOnce>
      <div className="bg-grid-white/[0.02] relative flex w-full overflow-hidden rounded-md md:pt-20 antialiased h-[30rem] md:h-[40rem] md:items-center md:justify-center">
        <div className="h-[35rem] md:h-[45rem] relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
          <Spotlight
            className="-top-20 left-0 md:-top-20 md:left-50"
            fill="white"
          />

          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="tsparticlesfullpage"
              background="transparent"
              minSize={0.6}
              maxSize={1.5}
              particleDensity={20}
              className="w-full h-full"
              particleColor="#FFFFFF"
            />
          </div>
          <div className="relative flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center text-white relative z-20 w-[85%] lg:w-[70%]">
              <span className="border px-2 py-1 rounded-xl hover:rounded-black  animation ease  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-800 text-3xl md:text-4xl lg:text-6xl">
                Pluviaux
              </span>
              - Création de site professionnel à moindre coût !
            </h1>
            {/* Gradients  TODO */}
            <div className="absolute inset-x-0 bottom-[60%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-[50%] blur-sm translate-x-1/2" />
            <div className="absolute inset-x-0 bottom-[60%] bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-[50%] translate-x-1/2" />
            <div className="absolute inset-x-0 bottom-[60%] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-[50%] blur-sm translate-x-1/2" />
            <div className="absolute inset-x-0 bottom-[60%] bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-[50%] translate-x-1/2" />

            <div className="mt-8 flex flex-col items-center">
              <TextGenerate />
              <TextShimmerBadge />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export function TextGenerate() {
  return (
    <div className="w-[80%] text-center">
      <TextGenerateEffect words={words} />
    </div>
  );
}

export async function TextShimmerBadge() {
  return (
    <div className="z-10 my-5 flex items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-white/5 bg-neutral-900 text-base text-white transition-all ease-in hover:bg-neutral-800"
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
