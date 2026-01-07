import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Unlimited label creation",
  "Cloud storage",
  "Export to ZPL format",
  "All barcode and QR code types",
  "Images and logos",
  "Support for 203, 300, and 600 DPI",
  "Priority support",
];

const PricingSection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple <span className="gradient-text">pricing</span>
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
                  Pro subscription
                </span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl md:text-6xl font-bold gradient-text">€9.99</span>
                  <span className="text-muted-foreground">/month</span>
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
              <Button variant="gradient" size="xl" className="w-full" asChild>
                <a href="https://app.perko-tehtnice.si/">
                  Start your free 14-day trial
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
