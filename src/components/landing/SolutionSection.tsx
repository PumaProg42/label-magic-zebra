import { Globe, Eye, Languages, Printer, Save } from "lucide-react";

const keyPoints = [
  {
    icon: Globe,
    title: "Browser-based label designer",
  },
  {
    icon: Eye,
    title: "Accurate WYSIWYG layout",
  },
  {
    icon: Languages,
    title: "Multiple printer languages",
  },
  {
    icon: Printer,
    title: "Multiple print methods",
  },
  {
    icon: Save,
    title: "Save and reuse templates",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            One tool. <span className="gradient-text">Full control.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform lets you design labels visually and print them on any thermal printer.
            No drivers. No vendor lock-in. No unnecessary complexity.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {keyPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 bg-card rounded-2xl px-6 py-4 shadow-lg border border-border/50 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <point.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-medium">{point.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
