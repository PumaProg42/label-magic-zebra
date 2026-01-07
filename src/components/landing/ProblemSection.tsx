import { Lock, Monitor, Printer, Code, FileX } from "lucide-react";

const problems = [
  {
    icon: Lock,
    title: "Vendor-locked software",
  },
  {
    icon: Monitor,
    title: "Complex desktop installations",
  },
  {
    icon: Printer,
    title: "Inconsistent print results",
  },
  {
    icon: Code,
    title: "Difficult ZPL / TSPL editing",
  },
  {
    icon: FileX,
    title: "No simple way to reuse templates",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Problems */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Label printing should not be complicated.
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 bg-card rounded-full px-6 py-3 shadow-md border border-border/50 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <problem.icon className="w-5 h-5 text-destructive" />
              <span className="text-sm font-medium">{problem.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
