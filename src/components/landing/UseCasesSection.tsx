import { Warehouse, Truck, ShoppingBag, Factory } from "lucide-react";

const useCases = [
  {
    icon: Warehouse,
    title: "Skladiščne etikete",
    description: "Lokacija police, črtna koda izdelka, naziv in količina. Poenostavite inventuro in iskanje izdelkov.",
    tag: "Skladišče",
  },
  {
    icon: Truck,
    title: "Transportne etikete",
    description: "QR koda za sledenje pošiljke, naslov prejemnika, logotip podjetja. Profesionalne etikete za vsak paket.",
    tag: "Transport",
  },
  {
    icon: ShoppingBag,
    title: "Cenovne etikete",
    description: "EAN-13 črtna koda za blagajno, cena, naziv izdelka. Hitro posodabljanje cen.",
    tag: "Maloprodaja",
  },
  {
    icon: Factory,
    title: "Etikete za sledenje",
    description: "Serijska številka, Code 128 črtna koda, datum proizvodnje. Popolna sledljivost izdelkov.",
    tag: "Proizvodnja",
  },
];

const UseCasesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Etikete za <span className="gradient-text">vsako panogo</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg border border-border/50 card-hover opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="px-3 py-1 text-xs font-medium gradient-bg text-primary-foreground rounded-full">
                    {useCase.tag}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </div>
              
              {/* Mock label preview */}
              <div className="px-8 pb-8">
                <div className="bg-muted/50 rounded-xl p-4 border border-border/50">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Primer etikete</span>
                    <div className="flex gap-1">
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="w-0.5 h-4 bg-muted-foreground/50" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
