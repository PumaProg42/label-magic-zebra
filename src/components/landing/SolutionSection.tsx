import { Globe, Eye, Languages, Printer, Save, Sparkles } from "lucide-react";

const keyPoints = [
  {
    icon: Globe,
    title: "Browser-based label designer",
    description: "No installation required. Works on any device.",
  },
  {
    icon: Eye,
    title: "Accurate WYSIWYG layout",
    description: "What you see is what you print.",
  },
  {
    icon: Languages,
    title: "Multiple printer languages",
    description: "ZPL, TSPL, EPL, CPCL and more.",
  },
  {
    icon: Printer,
    title: "Multiple print methods",
    description: "Network, local agent, or file export.",
  },
  {
    icon: Save,
    title: "Save and reuse templates",
    description: "Cloud storage for all your labels.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="relative mb-16">
          <div className="gradient-border">
            <div className="bg-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    One tool. <span className="gradient-text">Full control.</span>
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    Our platform lets you design labels visually and print them on any thermal printer.
                    No drivers. No vendor lock-in. No unnecessary complexity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key points grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyPoints.map((point, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 card-hover opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                <point.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
