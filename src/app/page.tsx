"use client";

import Image from "next/image";
import { Skill } from "@/components/skills";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Mail,
  Linkedin,
  Github,
  Link,
  MessageCircle,
  ExternalLink,
  Download,
  ChevronDown,
} from "lucide-react";
import { Project } from "@/components/projects";
import { Heading } from "@/components/headings";

export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    slidesToScroll: 1,
    align: "start",
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <main className="flex-1 flex flex-col gap-xxl pb-xxl">
      <section className="m-auto w-full my-xxl max-w-375 flex flex-col-reverse md:flex-row justify-evenly items-center gap-xxl p-md">
        <section className="flex flex-col gap-lg" data-aos="zoom-in">
          <span className="font-text text-(--color-text-muted) font-semibold text-size-md lg:text-size-lg">
            Desenvolvedor Front-End
          </span>
          <h1 className="font-heading font-semibold text-size-xl lg:text-size-xxl text-(--color-text)">
            Sou Renan Guerra
          </h1>
          <p className="font-text text-size-md lg:text-size-lg text-(--color-text-muted) max-w-100 text-justify">
            Transformo ideias em interfaces{" "}
            <span className="text-(--color-primary) font-semibold">
              modernas, acessíveis e performáticas
            </span>
            , criando experiências digitais intuitivas através de código limpo e
            atenção aos detalhes.
          </p>
          <div className="flex w-full justify-between items-center font-heading text-sm gap-xs">
            <a
              href="/assets/CV_RenanGuerra.pdf"
              download="CV_RenanGuerra.pdf"
              type="application/pdf"
              className="w-35 text-center flex justify-between items-center p-2 shadow-md bg-linear-to-br from-gradient to-(--color-primary) rounded-md transition-all hover:scale-105 duration-300 text-(--color-secondary) font-semibold hover:from-(--color-primary) hover:to-gradient"
            >
              Download CV <Download></Download>
            </a>
            <a
              href="#proj"
              className="w-35 text-center bg-(--color-secondary) flex justify-between items-center p-2 shadow-md rounded-md transition-all hover:scale-105 duration-300 border border-(--color-secondary) text-(--color-text) hover:border-(--color-primary)"
            >
              Projetos <ChevronDown></ChevronDown>
            </a>
          </div>
        </section>
        <Image
          src="/images/mainimage.webp"
          alt="Renan Guerra"
          width={270}
          height={270}
          className="object-cover object-center rounded-xl shadow-lg"
          data-aos="zoom-in"
        ></Image>
      </section>
      <section
        id="skills"
        className="m-auto flex flex-col justify-center max-w-260 gap-xxl lg:w-full mb-xxl p-md"
        data-aos="fade-up"
      >
        <Heading title="Habilidades"></Heading>

        <div className="grid grid-cols-2 gap-lg md:grid-cols-3 lg:grid-cols-5">
          <Skill
            name="NextJS"
            logo="/images/icons/icons8-nextjs.svg"
            alt="NextJS logo"
          ></Skill>
          <Skill
            name="TypeScript"
            logo="/images/icons/icons8-typescript.svg"
            alt="TypeScript logo"
          ></Skill>
          <Skill
            name="TailwindCSS"
            logo="/images/icons/icons8-tailwind-css.svg"
            alt="Tailwind logo"
          ></Skill>
          <Skill
            name="React"
            logo="/images/icons/icons8-react.svg"
            alt="React logo"
          ></Skill>
          <Skill
            name="HTML5"
            logo="/images/icons/icons8-html5.svg"
            alt="HTML5 logo"
          ></Skill>
          <Skill
            name="CSS3"
            logo="/images/icons/icons8-css3.svg"
            alt="CSS3 logo"
          ></Skill>
          <Skill
            name="JavaScript"
            logo="/images/icons/icons8-javascript.svg"
            alt="JavaScript logo"
          ></Skill>
          <Skill
            name="Git/Github"
            logo="/images/icons/icons8-git.svg"
            alt="Git logo"
          ></Skill>
          <Skill
            name="Figma"
            logo="/images/icons/icons8-figma.svg"
            alt="Figma logo"
          ></Skill>
        </div>
      </section>

      <section
        id="proj"
        className="m-auto flex flex-col justify-center w-full max-w-260 gap-xxl p-md"
      >
        <Heading title="Projetos"></Heading>

        <div className="embla">
          <div
            ref={emblaRef}
            className="embla__viewport overflow-hidden w-full px-md"
          >
            <div className="embla__container flex">
              <div className="embla__slide flex-[0_0_auto] mr-lg">
                <Project
                  title="Portfolio"
                  description="Meu Site/Portfolio"
                  techno="NextJS + TypeScript + TailwindCSS"
                  href="#"
                  src="/images/projects/portfoliopage.webp"
                  alt="Portfolio Page"
                ></Project>
              </div>
              <div className="embla__slide flex-[0_0_auto] mr-lg">
                <Project
                  title="Da Vinci Website"
                  description="E se Leonardo Da Vinci tivesse um site hoje em dia? Loja e Landing Page"
                  techno="NextJS + TypeScript + TailwindCSS"
                  href="https://leo-da-vinci-website.vercel.app/"
                  src="/images/projects/davinciprint.webp"
                  alt="Da Vinci Page"
                ></Project>
              </div>
              <div className="embla__slide flex-[0_0_auto] mr-lg">
                <Project
                  title="Image Editor"
                  description="Editor de imagens. Faça o upload, edite e baixe!"
                  techno="HTML5 + CSS3 + JavaScript"
                  href="https://renanmattosguerra.github.io/Portfolio/ImageEditor/index.html"
                  src="/images/projects/imageeditorprint.webp"
                  alt="Image Editor Page"
                ></Project>
              </div>
              <div className="embla__slide flex-[0_0_auto] mr-lg">
                <Project
                  title="Stellar Vision"
                  description="Site de uma empresa fictícia de viagem ao espaço"
                  techno="ReactJS"
                  href="https://stellarvision-renanguerra.netlify.app/"
                  src="/images/projects/stellarvisionprint.webp"
                  alt="Stellar Vision Page"
                ></Project>
              </div>
              <div className="embla__slide flex-[0_0_auto] mr-lg">
                <Project
                  title="Music Player"
                  description="Reprodutor de música"
                  techno="HTML5 + CSS3 + JavaScript"
                  href="https://renanmattosguerra.github.io/Portfolio/MusicPlayer/index.html"
                  src="/images/projects/musicplayerprint.webp"
                  alt="Music Player Page"
                ></Project>
              </div>
              <div className="embla__slide flex-[0_0_auto] mr-lg">
                <Project
                  title="Tela de Login"
                  description="Formulário de login"
                  techno="HTML5 + CSS3 + JavaScript"
                  href="https://renanmattosguerra.github.io/Portfolio/TelaLogin/TelaLogin.html"
                  src="/images/projects/loginprint.webp"
                  alt="Login Page"
                ></Project>
              </div>
              <div className="embla__slide flex-[0_0_auto] mr-lg">
                <Project
                  title="Aquarium"
                  description="Selecione os peixes e adicione no seu aquário"
                  techno="HTML5 + CSS3 + JavaScript"
                  href="https://renanmattosguerra.github.io/Portfolio/Aquarium/aquarium.html"
                  src="/images/projects/aquariumpage.webp"
                  alt="Aquarium Page"
                ></Project>
              </div>
              <div className="embla__slide flex-[0_0_auto] mr-lg">
                <Project
                  title="Jump Game"
                  description="Desvie da cobra! Jogo de browser. Apenas desktop"
                  techno="HTML5 + CSS3 + JavaScript"
                  href="https://renanmattosguerra.github.io/Portfolio/jumpgame/jumpgame.html"
                  src="/images/projects/jumpgameprint.webp"
                  alt="Jump Game Page"
                ></Project>
              </div>
              <div className="embla__slide flex-[0_0_auto] mr-lg">
                <Project
                  title="Harry Potter Lore API"
                  description="Integração com uma API de Harry Potter"
                  techno="HTML5 + CSS3 + JavaScript + API"
                  href="https://renanmattosguerra.github.io/Portfolio/HarryPotterLoreApi/index.html"
                  src="/images/projects/harrypotterprint.webp"
                  alt="Harry Potter Page"
                ></Project>
              </div>
              <div className="embla__slide flex-[0_0_auto] mr-lg">
                <Project
                  title="Sports Store"
                  description="Loja fictícia de produtos esportivos. Landing Page"
                  techno="HTML5 + CSS3 + JavaScript"
                  href="https://renanmattosguerra.github.io/Portfolio/SportsStore/index.html"
                  src="/images/projects/sportsprint.webp"
                  alt="Sports Store Page"
                ></Project>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none flex justify-between items-center max-260 m-auto w-full relative bottom-65">
          <button
            onClick={scrollPrev}
            type="button"
            title="scrollPrev"
            className="embla__prev pointer-events-auto text-(--color-secondary) bg-(--color-text) rounded-full transition-colors hover:bg-(--color-primary) hover:text-(--color-text) cursor-pointer leading-none w-9 h-9 flex justify-center items-center relative lg:right-4 xl:right-8"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollNext}
            type="button"
            title="scrollNext"
            className="embla__next pointer-events-auto text-(--color-secondary) bg-(--color-text) rounded-full transition-colors hover:bg-(--color-primary) hover:text-(--color-text) cursor-pointer leading-none w-9 h-9 flex justify-center items-center relative lg:left-4 xl:left-8"
          >
            <ChevronRight />
          </button>
        </div>
      </section>

      <section
        id="performance"
        className="w-full max-w-260 flex flex-col p-md m-auto gap-xxl"
      >
        <Heading title="Desempenho"></Heading>
        <div className="flex flex-col gap-xl w-full justify-center items-center p-md">
          <Image
            src="/images/performancePC.webp"
            alt="Desktop Performance"
            width={770}
            height={587}
            className="object-cover object-center rounded-lg shadow-lg transition-all duration-300 border-2 border-(--color-border) hover:-translate-y-3 hover:border-(--color-primary)"
          ></Image>
          <Image
            src="/images/performanceMobile.webp"
            alt="Mobile Performance"
            width={770}
            height={587}
            className="object-cover object-center rounded-lg shadow-lg transition-all duration-300 border-2 border-(--color-border) hover:-translate-y-3 hover:border-(--color-primary)"
          ></Image>
        </div>
      </section>

      <section
        id="contact"
        className="w-full max-w-260 flex flex-col p-xl lg:p-md m-auto gap-xxl"
      >
        <Heading title="Contato"></Heading>

        <div className="flex w-full gap-xxl flex-col lg:flex-row justify-center items-start">
          <div className="flex flex-col gap-xl lg:w-1/2 w-full">
            <h3 className="text-size-xl font-heading text-(--color-text) font-bold">
              Estou em busca de novas oportunidades
            </h3>
            <p className="text-size-md font-text text-(--color-text-muted)">
              Disponível para atuação integral ou freelancer, presencial ou
              remota
            </p>
            <span className="flex flex-col gap-lg">
              <a
                href="mailto:rguerra1998@gmail.com"
                title="Email"
                className="flex justify-evenly items-center text-size-sm p-3 bg-(--color-secondary) text-(--color-text) rounded-full transition-all duration-200  border-2 border-(--color-border) hover:border-(--color-primary)"
              >
                <Mail></Mail> rguerra1998@gmail.com <Link></Link>
              </a>
              <a
                href="https://wa.me/5521998754318"
                title="Whats App"
                className="flex justify-evenly items-center text-size-sm p-3 bg-(--color-secondary) text-(--color-text) rounded-full transition-all duration-200  border-2 border-(--color-border) hover:border-(--color-primary)"
                target="_blank"
                rel="noopener"
              >
                <MessageCircle></MessageCircle> +55 (21) 99875-4318
                <ExternalLink></ExternalLink>
              </a>
              <a
                href="https://www.linkedin.com/in/renan-mattos-guerra/"
                title="Linkedin"
                className="flex justify-evenly items-center text-size-sm p-3 bg-(--color-secondary) text-(--color-text) rounded-full transition-all duration-200  border-2 border-(--color-border) hover:border-(--color-primary)"
                target="_blank"
                rel="noopener"
              >
                <Linkedin></Linkedin> @renanmattosguerra
                <ExternalLink></ExternalLink>
              </a>
              <a
                href="https://github.com/RenanMattosGuerra"
                title="Github"
                className="flex justify-evenly items-center text-size-sm p-3 bg-(--color-secondary) text-(--color-text) rounded-full transition-all duration-200  border-2 border-(--color-border) hover:border-(--color-primary)"
                target="_blank"
                rel="noopener"
              >
                <Github></Github> @RenanMattosGuerra
                <ExternalLink></ExternalLink>
              </a>
            </span>
          </div>
          <form
            action="https://formsubmit.co/ed8d32be398180a03ab882855fb43a29"
            method="POST"
            className="flex flex-col w-full lg:w-1/2 gap-sm font-text bg-(--color-light-background) p-lg rounded-xl text-(--color-text) border-2 border-(--color-border)"
          >
            <label htmlFor="name">Nome :</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Seu nome"
              className="p-2 border-b-2 border-(--color-text) rounded-t-md outline-0 focus-within:scale-102 transition-all duration-200 focus-within:bg-(--color-border)"
              required
            />
            <label htmlFor="email">E-mail :</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Seu e-mail"
              className="p-2 border-b-2 border-(--color-text) rounded-t-md outline-0 focus-within:scale-102 transition-all duration-200 focus-within:bg-(--color-border)"
            />
            <label htmlFor="subject">Assunto :</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              placeholder="Assunto que deseja abordar"
              className="p-2 border-b-2 border-(--color-text) rounded-t-md outline-0 focus-within:scale-102 transition-all duration-200 focus-within:bg-(--color-border)"
            />
            <label htmlFor="message">Mensagem :</label>
            <textarea
              name="message"
              id="message"
              placeholder="Digite sua mensagem"
              className="p-2 border-b-2 border-(--color-text) rounded-t-md outline-0 min-h-30 focus-within:scale-102 transition-all duration-200 focus-within:bg-(--color-border)"
              required
            ></textarea>
            <input
              type="submit"
              value="Enviar"
              className="p-2 bg-(--color-text) rounded-xl cursor-pointer transition-all duration-200 text-(--color-secondary) hover:bg-(--color-secondary) hover:text-(--color-text) font-bold"
            />
          </form>
        </div>
      </section>
    </main>
  );
}
