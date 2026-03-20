import { Heading } from "@/components/elements/headings";
import Image from "next/image";

export default function About() {
  return (
    <main className="flex-1 flex flex-col gap-xxl pb-xxl">
      <section className="w-full flex flex-col justify-center items-center gap-xxl pt-xxl px-sm">
        <Heading title="Sobre Mim"></Heading>

        <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center max-w-400 w-full lg:gap-0 gap-xxl">
          <article className="p-md border-2 border-(--color-text-muted) rounded-br-3xl rounded-tl-3xl shadow-md shadow-gray-700 bg-(--color-backtext-2) hover:-translate-y-3 transition-all duration-300">
            <p className="font-text text-(--color-text) max-w-90 text-justify indent-lg ">
              Desenvolvedor Front-End com experiência em criação de interfaces e
              páginas web responsivas e mobile first, utilizando NextJS,
              ReactJS, TailwindCSS, HTML5 semântico, CSS3, TypeScript,
              JavaScript, integração com RESTful APIs e Git / GitHub. Tenho
              forte paixão por arte, criação, composição e também sou músico e
              produtor. Estou constantemente evoluindo no front-end e em noções
              de design. Também viso aprender back-end para me tornar um
              desenvolvedor full-stack.
            </p>
          </article>
          <div className="flex flex-col items-center justify-center gap-xs">
            <Image
              src="/images/about.webp"
              alt="Foto Renan Guerra"
              width={300}
              height={300}
              className="rounded-lg shadow-lg"
            ></Image>
            <p className="text-(--color-text) font-text text-size-sm">
              Foto por @alefukugava
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col justify-center items-center gap-xxl pt-xxl px-sm">
        <Heading title="Formação"></Heading>

        <div className="absolute m-auto top-362 sm:top-350 lg:top-255 w-2 h-138 bg-linear-to-b from-gradient to-(--color-primary) rounded-md z-0">
          <div className="w-6 h-6 rounded-full bg-(--color-text) shadow-md shadow-gray-500 relative top-12 right-2 flex justify-center items-center"></div>
          <div className="w-6 h-6 rounded-full bg-(--color-text) shadow-md shadow-gray-500 relative top-60 right-2 flex justify-center items-center"></div>
          <div className="w-6 h-6 rounded-full bg-(--color-text) shadow-md shadow-gray-500 relative top-106 right-2 flex justify-center items-center"></div>
        </div>

        <div className="grid grid-cols-1 grid-rows-3 gap-y-xxl gap-x-0 w-full max-w-180 justify-items-center lg:grid-cols-[1fr_2px_1fr] z-20">
          <article className="border-2 border-(--color-text-muted) p-md rounded-br-3xl rounded-tl-3xl max-w-76 shadow-md shadow-gray-800 bg-(--color-backtext-2) lg:col-start-3 transition-all duration-300 hover:scale-105 hover:bg-(--color-backtext-1) hover:shadow-gray-700">
            <h3 className="font-heading text-(--color-text) font-semibold">
              Graduação em Sistemas de Informação
            </h3>
            <span className="font-text text-(--color-primary) font-semibold">
              2017 - 2023
            </span>
            <p className="font-text">Faculdade Estácio de Sá</p>
          </article>

          <article className="border-2 border-(--color-text-muted) p-md rounded-tr-3xl rounded-bl-3xl max-w-76 shadow-md shadow-gray-800 bg-(--color-backtext-2) lg:col-start-1 transition-all duration-300 hover:scale-105 hover:bg-(--color-backtext-1) hover:shadow-gray-700">
            <h3 className="font-heading text-(--color-text) font-semibold">
              Cursos HTML5, CSS3, Javascript e Git/Github
            </h3>
            <span className="font-text text-(--color-primary) font-semibold">
              2024 - 2025
            </span>
            <p className="font-text">Curso em Vídeo</p>
          </article>

          <article className="border-2 border-(--color-text-muted) p-md rounded-br-3xl rounded-tl-3xl max-w-76 shadow-md shadow-gray-800 bg-(--color-backtext-2) lg:col-start-3 lg:row-start-3 transition-all duration-300 hover:scale-105 hover:bg-(--color-backtext-1) hover:shadow-gray-700">
            <h3 className="font-heading text-(--color-text) font-semibold">
              Cursos ReactJS, Tailwind e Figma
            </h3>
            <span className="font-text text-(--color-primary) font-semibold">
              2025 - 2026
            </span>
            <p className="font-text">Udemy</p>
          </article>
        </div>
      </section>
    </main>
  );
}
