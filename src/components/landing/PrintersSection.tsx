import { Printer, Check } from "lucide-react";

const printers = [
  "ZD420, ZD620, ZD421",
  "ZT410, ZT420, ZT610",
  "GK420d, GK420t",
  "GX420d, GX420t",
  "ZT230, ZT231",
  "...in vsi drugi z ZPL podporo",
];

const resolutions = ["203 DPI", "300 DPI", "600 DPI"];

const PrintersSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Deluje z <span className="gradient-text">vsemi Zebra tiskalniki</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Label Designer PTI generira standardno ZPL kodo, ki jo razumejo vsi Zebra termični tiskalniki.
          </p>
        </div>
        
        <div className="bg-card rounded-3xl shadow-xl border border-border/50 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left - Printers list */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center">
                  <Printer className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Podprti modeli</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {printers.map((printer, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{printer}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right - DPI support */}
            <div className="bg-muted/30 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-6">Podpora za različne resolucije</h3>
              
              <div className="flex flex-wrap gap-4">
                {resolutions.map((resolution, index) => (
                  <div 
                    key={index}
                    className="px-6 py-4 bg-card rounded-2xl shadow-md border border-border/50 opacity-0 animate-scale-in"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <span className="text-2xl font-bold gradient-text">{resolution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrintersSection;
