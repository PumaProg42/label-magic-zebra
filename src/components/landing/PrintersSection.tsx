import { Printer, Check } from "lucide-react";

const printerLanguages = [
  "ZPL",
  "TSPL",
  "EPL",
  "CPCL",
  "RAW text output",
];

const PrintersSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Works with <span className="gradient-text">all major thermal printers.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The platform is printer-agnostic and supports multiple printer languages.
          </p>
        </div>
        
        <div className="bg-card rounded-3xl shadow-xl border border-border/50 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left - Printer languages */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center">
                  <Printer className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Supported languages</h3>
              </div>
              
              <div className="space-y-4">
                {printerLanguages.map((language, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{language}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Compatible brands */}
            <div className="bg-muted/30 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-6">Compatible printers</h3>
              
              <p className="text-muted-foreground">
                Compatible with Zebra, TSC, CAB, Bixolon and many others.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintersSection;
