interface SectionTitleProps {
  title?: string;
  subtitle?: string;
}

export default function SectionTitle({ title = '', subtitle = '' }: SectionTitleProps) {
  return (
    <div className="mb-8 md:mb-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1B1D20]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg md:text-xl text-[#6ABBCD] mt-2">
          {subtitle}
        </p>
      )}
    </div>
  );
}
