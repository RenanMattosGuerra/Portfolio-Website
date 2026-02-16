export function Footer() {
  return (
    <footer className="w-full border-t-2 border-(--color-border) p-md text-(--color-text-muted) font-text text-xs flex justify-center items-center">
      <div className="max-w-300 w-full flex flex-col md:flex-row justify-between items-center gap-sm">
        <p>
          © Copyright 2026 Renan Guerra Portfolio - Built with Next.JS |
          Tailwind | Typescript
        </p>
        <span className="flex justify-center items-center gap-md">
          <a
            href="https://www.linkedin.com/in/renan-mattos-guerra/"
            target="_blank"
            rel="noopener"
            className="transition-all duration-200 hover:text-(--color-text)"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/RenanMattosGuerra"
            target="_blank"
            rel="noopener"
            className="transition-all duration-200 hover:text-(--color-text)"
          >
            Github
          </a>
          <a
            href="https://www.instagram.com/renanguerraguitar/"
            target="_blank"
            rel="noopener"
            className="transition-all duration-200 hover:text-(--color-text)"
          >
            Instagram
          </a>
        </span>
      </div>
    </footer>
  );
}
