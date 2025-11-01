import type { ReactNode } from "react";

export type PageSectionProps = {
  title: string;
  description?: string;
  eyebrow?: string;
  children: ReactNode;
  variant?: "default" | "muted" | "contrast";
  className?: string;
  containerClassName?: string;
};

const variantClasses: Record<Required<PageSectionProps>["variant"], string> = {
  default: "bg-white",
  muted: "bg-slate-100",
  contrast: "bg-slate-900 text-white",
};

export default function PageSection({
  title,
  description,
  eyebrow,
  children,
  variant = "default",
  className,
  containerClassName,
}: PageSectionProps) {
  const sectionClassName = [variantClasses[variant], "py-16", className]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={sectionClassName}>
      <div
        className={["mx-auto w-full max-w-5xl px-4", containerClassName]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="max-w-3xl space-y-4">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {title}
          </h2>
          {description ? (
            <p className="text-base text-slate-600">{description}</p>
          ) : null}
        </div>
        <div className="mt-10 space-y-8 text-slate-600 [&>*+*]:mt-8">{children}</div>
      </div>
    </section>
  );
}
