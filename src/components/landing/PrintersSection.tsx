import { Printer, Check } from "lucide-react";

const printerLanguages = [
  { code: "ZPL", description: "Zebra Programming Language" },
  { code: "TSPL", description: "TSC Printer Language" },
  { code: "EPL", description: "Eltron Programming Language" },
  { code: "CPCL", description: "Comtec Printer Control Language" },
  { code: "RAW", description: "Raw text output" },
];

const compatibleBrands = [
  "Zebra",
  "TSC",
  "CAB",
  "Bixolon",
  "Honeywell",
  "SATO",
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
                    <div>
                      <span className="text-foreground font-semibold">{language.code}</span>
                      <span className="text-muted-foreground ml-2">— {language.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - Compatible brands */}
            <div className="bg-muted/30 p-8 lg:p-12">
              <h3 className="text-xl font-semibold mb-6">Compatible brands</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {compatibleBrands.map((brand, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="font-medium">{brand}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-muted-foreground text-sm">
                ...and many other thermal printers that support standard printer languages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintersSection;
