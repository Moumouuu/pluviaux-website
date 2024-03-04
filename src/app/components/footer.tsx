import Image from "next/image";

export default function Footer() {
  return (
    <div className="border-t">
      <div className="mx-auto max-w-2xl py-10 text-white">
        <div className="flex justify-center">
          <Image
            alt="Pluviaux logo"
            src="/assets/images/logo-pluviaux-small.png"
            width={70}
            height={70}
            className="rounded-md bg-white p-1"
          />
        </div>
        <div className="mt-10 flex flex-col items-center text-sm text-gray-400 md:flex-row md:justify-between">
          <p className="order-2 mt-8 md:order-1 md:mt-0">
            {" "}
            &copy; 2024 Pluviaux. All rights reserved.
          </p>
          <div className="order-1 md:order-2">
            <a
              href="#projects"
              className="mr-4 transition duration-300 hover:text-gray-300"
            >
              Nos projets
            </a>
            <a
              href="#pricing"
              className="mr-4 transition duration-300 hover:text-gray-300"
            >
              Nos tarifs
            </a>
            <a
              href="#process"
              className="mr-4 transition duration-300 hover:text-gray-300"
            >
              Nos processus
            </a>
            <a
              href="#contact"
              className="transition duration-300 hover:text-gray-300"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
