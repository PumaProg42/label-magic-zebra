import { MousePointer2, FileText, Printer } from "lucide-react";
const steps = [{
  icon: MousePointer2,
  step: "01",
  title: "Design the label",
  description: "Drag text, barcodes, QR codes and images onto the workspace. Set the label size in millimeters and adjust the DPI to match your printer."
}, {
  icon: FileText,
  step: "02",
  title: "Dodajte vsebino",
  description: "Vnesite podatke za črtne kode, besedilo za etiketo, naložite logotip. Vidite natančen predogled, kako bo etiketa izgledala."
}, {
  icon: Printer,
  step: "03",
  title: "Natisnite na Zebra tiskalnik",
  description: "Vnesite IP naslov tiskalnika in kliknite Natisni. Etiketa se natisne v sekundah. Lahko tudi izvozite ZPL kodo za vaš ERP sistem."
}];
const HowItWorksSection = () => {
  return <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Create your label in    <span className="gradient-text">3 steps </span>
          </h2>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary transform -translate-y-1/2 opacity-20" />
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((item, index) => <div key={index} className="relative opacity-0 animate-fade-up" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 card-hover h-full">
                  {/* Step number */}
                  <div className="absolute -top-4 left-8 px-4 py-1 gradient-bg rounded-full">
                    <span className="text-sm font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  
                  <div className="pt-4">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;