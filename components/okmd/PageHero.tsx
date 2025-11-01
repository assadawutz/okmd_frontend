import type { ReactNode } from "react";

export type PageHeroProps = {
  title: string;
  description: string;
  eyebrow?: string;
  actions?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({
  title,
  description,
  eyebrow,
  actions,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-800 via-sky-700 to-sky-500 py-16 text-white">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_60%)] md:block" aria-hidden />
      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 space-y-6">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{title}</h1>
          <p className="max-w-xl text-base text-white/80 sm:text-lg">{description}</p>
          {actions ? <div className="flex flex-col gap-3 sm:flex-row">{actions}</div> : null}
        </div>
        {children ? <div className="flex-1">{children}</div> : null}
      </div>
    </section>
  );
}
