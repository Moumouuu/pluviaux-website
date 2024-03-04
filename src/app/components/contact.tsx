"use client";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  return (
    <div className="bg-grid-white/[0.2] relative flex w-full items-center justify-center bg-black py-10">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20 w-full bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        <div className="flex w-full flex-col items-center justify-center text-white ">
          <Fade triggerOnce>
            <h3 className="mb-3 text-center text-5xl font-bold">
              Me <br />{" "}
              <span className="text-6xl font-extrabold text-black" id="outline">
                Contacter
              </span>
            </h3>
          </Fade>
          <div className="flex">
            <Fade delay={500} cascade triggerOnce>
              <ContactLink
                icon={<MailIcon className="mr-2" size={30} />}
                href="mailto:robin@pluviaux.fr"
                text="Mail"
              />
              <ContactLink
                icon={<LinkedinIcon className="mr-2" size={30} />}
                href="https://www.linkedin.com/in/robin-pluviaux/"
                text="LinkedIn"
              />
              <ContactLink
                icon={<GithubIcon className="mr-2" size={30} />}
                href="https://github.com/Moumouuu"
                text="GitHub"
              />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContactLinkProps {
  icon: React.ReactNode;
  href: string;
  text: string;
}

function ContactLink({ icon, href, text }: ContactLinkProps) {
  return (
    <div className="mx-1 flex items-center rounded-xl border p-2 ">
      {icon}
      <Link className="text-left text-2xl font-medium" href={href}>
        {text}
      </Link>
    </div>
  );
}
