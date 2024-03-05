"use client";
import { Fade } from "react-awesome-reveal";

interface FAQQuestion {
  question: string;
  answer: string;
}

export default function FAQ() {
  const questions: FAQQuestion[] = [
    {
      answer:
        "Vous pouvez me contacter par mail, par téléphone ou via les réseaux pour discuter de votre projet. Nous pourrons ensuite convenir d'un rendez-vous pour discuter de votre projet plus en détails.",
      question: "Comment commencez un projet ?",
    },
    {
      question: "Quels sont vos tarifs ?",
      answer:
        "Les tarifs varient en fonction de la complexité du projet. Cependant vous pouvez regarder les tarifs affichés sur le site ou bien, je vous invite à me contacter pour discuter de votre projet et obtenir un devis.",
    },
    {
      question: "Quels sont vos délais de livraison ?",
      answer:
        "Les délais de livraison varient en fonction de la complexité du projet. Cependant, je m'engage à vous tenir informé de l'avancée du projet et à respecter les délais convenus. En général un site vitrine prends entre 2 et 4 semaines à être développé.",
    },
    {
      question: "Quels sont vos moyens de paiement ?",
      answer: "Je propose seulement le paiement par virement bancaire.",
    },
    {
      question: "Comment faire si les maquettes ne me conviennent pas ?",
      answer:
        "Je m'engage à vous fournir des maquettes qui vous conviennent. Cependant, si les maquettes ne vous conviennent pas, je les retravaillerai jusqu'à ce que vous soyez satisfait.",
    },
    {
      question: "Faites-vous tout vous-même ?",
      answer:
        "Actuellement, je travaille en solo et je développe tous mes projets sans recourir à des outils no code.",
    },
  ];

  return (
    <div className="p-3 my-10 flex flex-col items-center justify-center text-white">
      <Fade triggerOnce>
        <h2 className="mb-5 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent md:text-5xl">
          Les questions fréquemment posées
        </h2>
      </Fade>
      <Fade
        triggerOnce
        cascade
        delay={500}
        className="flex w-full justify-center"
      >
        {questions.map((question, index) => (
          <div
            key={index}
            className="collapse-arrow collapse m-2 border border-white/20 md:w-[70%]"
          >
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              {question.question}
            </div>
            <div className="collapse-content">
              <p>{question.answer}</p>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
}
