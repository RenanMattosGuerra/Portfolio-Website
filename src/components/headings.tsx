type headingProps = {
  title: string;
};

export function Heading({ title }: headingProps) {
  return (
    <span className="flex gap-xs items-center justify-center lg:justify-start">
      <div className="w-1 h-6 bg-(--color-border)"></div>
      <h2 className="text-(--color-text) font-heading text-size-lg">{title}</h2>
    </span>
  );
}
