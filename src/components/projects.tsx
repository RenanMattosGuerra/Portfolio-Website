import { ExternalLink } from "lucide-react";
import Image from "next/image";

type projectProps = {
  title: string;
  description: string;
  techno: string;
  href: string;
  src: string;
  alt: string;
};

export function Project({
  title,
  description,
  techno,
  href,
  src,
  alt,
}: projectProps) {
  return (
    <a
      href={href}
      title={title}
      target="_blank"
      className="bg-(--color-light-background) flex flex-col p-md rounded-lg gap-sm shadow-xl w-70 h-90 transition-all duration-400 hover:bg-(--color-secondary) border border-(--color-light-background) hover:border-(--color-text-muted)"
    >
      <div className="flex justify-center items-center w-full h-45 rounded-lg overflow-hidden relative">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover hover:scale-115 opacity-90 transition-all duration-400 hover:opacity-100"
        ></Image>
      </div>
      <span className="font-text text-(--color-text) text-size-sm">
        {techno}
      </span>
      <span className="flex justify-between items-center">
        <h3 className="font-heading text-(--color-primary) text-size-lg">
          {title}
        </h3>
        <ExternalLink></ExternalLink>
      </span>
      <p className="font-text text-(--color-text-muted) text-size-sm">
        {description}
      </p>
    </a>
  );
}
