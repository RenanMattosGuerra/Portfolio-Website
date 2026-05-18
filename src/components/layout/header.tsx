import Link from "next/link";
import { ThemeToggle } from "../elements/mode";

export function Header() {
  return (
    <header className="w-full top-0 sticky p-md border-b-2 border-(--color-border) text-(--color-text) font-heading flex justify-center items-center z-50 backdrop-blur-lg">
      <nav className="flex justify-between items-center text-size-xs md:text-size-sm w-full max-w-300">
        <Link href="/#" title="Home" className="hidden md:block">
          <div className="font-heading text-(--color-text) text-size-md font-bold transition-all duration-200 hover:scale-115 hover:text-(--color-primary)">
            &lt; /&gt;
          </div>
        </Link>
        <div>
          <ul className="flex gap-xs">
            <li className="hover:scale-102 transition-all duration-200 relative before:content-[''] before:left-0 before:-bottom-0.5 before:absolute before:w-0 before:h-0.5 before:bg-(--color-primary) before:transition-all before:duration-300 hover:before:w-full">
              <Link href="/#skills">Habilidades</Link>
            </li>
            <li className="hover:scale-102 transition-all duration-200 relative before:content-[''] before:left-0 before:-bottom-0.5 before:absolute before:w-0 before:h-0.5 before:bg-(--color-primary) before:transition-all before:duration-300 hover:before:w-full">
              <Link href="/#proj">Projetos</Link>
            </li>
            <li className="hover:scale-102 transition-all duration-200 relative before:content-[''] before:left-0 before:-bottom-0.5 before:absolute before:w-0 before:h-0.5 before:bg-(--color-primary) before:transition-all before:duration-300 hover:before:w-full">
              <Link href="/#performance">Desempenho</Link>
            </li>
            <li className="hover:scale-102 transition-all duration-200 relative before:content-[''] before:left-0 before:-bottom-0.5 before:absolute before:w-0 before:h-0.5 before:bg-(--color-primary) before:transition-all before:duration-300 hover:before:w-full">
              <Link href="/#contact">Contato</Link>
            </li>
            <li className="hover:scale-102 transition-all duration-200 relative before:content-[''] before:left-0 before:-bottom-0.5 before:absolute before:w-0 before:h-0.5 before:bg-(--color-primary) before:transition-all before:duration-300 hover:before:w-full">
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
