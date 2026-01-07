import { Brain, Monitor, Plug, Sparkles } from "lucide-react";
const problems = [{
  icon: Brain,
  title: "Vendor-locked software",
  description: "ZebraDesigner in podobni programi zahtevajo ure učenja. Vi potrebujete etiketo zdaj."
}, {
  icon: Monitor,
  title: "Namestitev na vsak računalnik",
  description: "Licence, namestitve, posodobitve... Za vsako delovno postajo posebej."
}, {
  icon: Plug,
  title: "Povezava s tiskalnikom je nočna mora",
  description: "Gonilniki, nastavitve porta, ZPL koda... Zakaj mora biti tiskanje etiket tako zapleteno?"
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
                    Label Designer PTI vse to <span className="gradient-text">poenostavi</span>
                  </h3>
                  <p className="text-lg text-muted-foreground max-w-2xl">
                    Odprite brskalnik, oblikujte etiketo z vlečenjem elementov, kliknite Natisni. Končano. Deluje na vsakem računalniku, brez namestitve, brez licenc za vsako delovno postajo.
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