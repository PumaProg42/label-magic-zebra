import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Neomejeno ustvarjanje etiket",
  "Shranjevanje v oblaku",
  "Izvoz v ZPL format",
  "Direktno tiskanje na Zebra tiskalnike",
  "Vsi tipi črtnih kod in QR kod",
  "Slike in logotipi",
  "Podpora za 203, 300 in 600 DPI",
  "Prednostna podpora",
];

const PricingSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Preprosto <span className="gradient-text">oblikovanje cen</span>
          </h2>
        </div>
        
        <div className="relative max-w-lg mx-auto">
          {/* Glow effect */}
          <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-20" />
          
          <div className="relative gradient-border">
            <div className="bg-card rounded-3xl p-8 md:p-10 shadow-xl">
              {/* Header */}
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 text-sm font-medium gradient-bg text-primary-foreground rounded-full mb-4">
                  Pro naročnina
                </span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold gradient-text">9,99 €</span>
                  <span className="text-muted-foreground">/mesec</span>
                </div>
              </div>
              
              {/* Features */}
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-3 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA */}
              <Button variant="gradient" size="xl" className="w-full">
                Začnite brezplačni 14-dnevni preizkus
                <ArrowRight className="w-5 h-5" />
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                Brez kreditne kartice. Prekličite kadarkoli.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
