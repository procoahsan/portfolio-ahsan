interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
}

const SectionHeader = ({ title, subtitle, description }: SectionHeaderProps) => {
  return (
    <div className="text-center mb-16 animate-fade-in-up">
      <h2 className="text-6xl md:text-8xl font-bold text-muted-foreground/10 mb-4">
        {title}
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6 -mt-16">
        {subtitle}
      </h3>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;