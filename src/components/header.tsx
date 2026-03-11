import Link from "next/link";
import { ThemeToggle } from "./mode";

export function Header() {
  return (
    <header className="w-full top-0 sticky p-md border-b-2 border-(--color-border) text-(--color-text) font-heading flex justify-center items-center z-50 backdrop-blur-lg">
      <nav className="flex justify-between items-center text-size-xs md:text-size-sm w-full max-w-300">
        <Link href="/#" title="Home" className="hidden md:block">
          <div className="font-heading text-(--color-text) text-size-md font-bold transition-all duration-200 hover:scale-120 hover:text-(--color-primary)">
            &lt; /&gt;
          </div>
        </Link>
        <div>
          <ul className="flex gap-xs">
            <li className="hover:scale-105 transition-all duration-200 border-b-2 border-transparent hover:border-(--color-primary)">
              <Link href="/#skills">Habilidades</Link>
            </li>
            <li className="hover:scale-105 transition-all duration-200 border-b-2 border-transparent hover:border-(--color-primary)">
              <Link href="/#proj">Projetos</Link>
            </li>
            <li className="hover:scale-105 transition-all duration-200 border-b-2 border-transparent hover:border-(--color-primary)">
              <Link href="/#performance">Desempenho</Link>
            </li>
            <li className="hover:scale-105 transition-all duration-200 border-b-2 border-transparent hover:border-(--color-primary)">
              <Link href="/#contact">Contato</Link>
            </li>
            <li className="hover:scale-105 transition-all duration-200 border-b-2 border-transparent hover:border-(--color-primary)">
              <Link href="/about">Sobre</Link>
            </li>
          </ul>
        </div>
        <div>
          <ThemeToggle></ThemeToggle>
        </div>
      </nav>
    </header>
  );
}
