import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 gradient-bg rounded-3xl blur-3xl opacity-20" />
          
          <div className="relative bg-card rounded-3xl p-10 md:p-16 shadow-xl border border-border/50 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-secondary/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Create your first label in{" "}
                <span className="gradient-text">5 minutes</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
                Free trial. No credit card.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="https://app.perko-tehtnice.si/">
                  Start for free
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
