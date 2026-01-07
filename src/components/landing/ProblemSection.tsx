import { Brain, Monitor, Plug, Sparkles } from "lucide-react";
const problems = [{
  icon: Brain,
  title: "Vendor-locked software",
  description: "Many label tools only work with a specific printer brand, limiting flexibility and increasing long-term costs when hardware needs to change."
}, {
  icon: Monitor,
  title: "Complex desktop installations",
  description: "Installation often requires drivers, local setup and IT support, making deployment slow and difficult across multiple workstations."
}, {
  icon: Plug,
  title: "Inconsistent print results",
  description: "What you see on screen does not always match the printed label due to DPI differences, fonts or printer-specific behavior."
}];
const ProblemSection = () => {
  return <section className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Problems */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Label printing should not be complicated.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {problems.map((problem, index) => <div key={index} className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 card-hover opacity-0 animate-fade-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>)}
        </div>
        
        {/* Solution */}
        <div className="relative">
          <div className="gradient-border">
            <div className="bg-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Label Designer PTI simplifies  <span className="gradient-text">everything</span>
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    Open your browser, design the label by dragging elements, click Print. Done.
Works on any computer — no installation, no per-workstation licenses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ProblemSection;