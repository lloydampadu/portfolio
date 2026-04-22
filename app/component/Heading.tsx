import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
<<<<<<< HEAD
        "font-[family-name:var(--font-heading)] font-bold leading-tight tracking-tight text-[#e4e4ed]",
=======
        "font-bold leading-tight tracking-tight  text-slate-300",
>>>>>>> d9a8fcb28aa01cc1a71bfec332e0550747bb66ae
        size === "xl" && "text-7xl md:text-9xl",
        size === "lg" && "text-6xl md:text-8xl",
        size === "md" && "text-5xl md:text-6xl",
        size === "sm" && "text-3xl md:text-4xl",
        className
      )}
    >
      {children}
    </Comp>
  );
}
