import Link from "next/link";
export default function notFound() {
  return (
    <main className="flex-1 flex flex-col gap-xl items-center justify-center">
      <h2 className="font-heading text-(--color-text) text-size-lg">
        Erro 404. Página não encontrada.
      </h2>
      <Link
        href="/"
        className="font-text text-(--color-text) text-size-md p-xs bg-(--color-secondary) rounded-2xl transition-all duration-300 hover:scale-105 hover:bg-(--color-light-background) border border-(--color-border) shadow-lg"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
