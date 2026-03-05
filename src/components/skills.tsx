import Image from "next/image";

type skillProps = {
  name: string;
  logo: string;
  alt: string;
};

export function Skill({ name, logo, alt }: skillProps) {
  return (
    <div className="p-sm bg-(--color-secondary) w-40 h-30 rounded-xl flex flex-col justify-center items-center gap-md text-(--color-text) font-text text-size-sm transition-all duration-400 hover:scale-105  border-transparent border-2 hover:border-(--color-primary) shadow-lg">
      <div>
        <Image src={logo} alt={alt} width={40} height={40}></Image>
      </div>
      <h3>{name}</h3>
    </div>
  );
}
