import { ArrowRight, Printer, QrCode, Barcode } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container-wide relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Profesionalne etikete za Zebra tiskalnike —{" "}
                <span className="gradient-text">brez zapletene programske opreme</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Oblikujte etikete vizualno, dodajte črtne kode in QR kode, nato natisnite direktno na vaš Zebra tiskalnik. Vse v brskalniku, brez namestitve.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                Preizkusite brezplačno 14 dni
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Brez kreditne kartice. Brez obveznosti.
            </p>
          </div>
          
          {/* Right content - Editor preview */}
          <div className="relative">
            <div className="relative bg-card rounded-3xl shadow-xl overflow-hidden border border-border/50">
              {/* Editor header */}
              <div className="bg-muted/50 px-4 py-3 border-b border-border/50 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                  <div className="w-3 h-3 rounded-full bg-green-400/60" />
                </div>
                <span className="text-sm text-muted-foreground ml-2">Label Designer PTI</span>
              </div>
              
              {/* Editor content */}
              <div className="p-6 md:p-8">
                {/* Label preview */}
                <div className="bg-background rounded-2xl p-6 border-2 border-dashed border-border shadow-inner">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Lokacija</span>
                      <span className="font-bold text-lg">A-01-02</span>
                    </div>
                    
                    <div className="flex justify-center py-4">
                      <div className="flex items-center gap-1">
                        {[...Array(20)].map((_, i) => (
                          <div 
                            key={i} 
                            className="bg-foreground" 
                            style={{ 
                              width: Math.random() > 0.5 ? '2px' : '3px',
                              height: '40px'
                            }} 
                          />
                        ))}
                      </div>
                    </div>
                    
                    <div className="text-center text-sm font-mono text-muted-foreground">
                      5901234123457
                    </div>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-border/50">
                      <div className="w-16 h-16 bg-foreground rounded-lg flex items-center justify-center">
                        <QrCode className="w-12 h-12 text-background" />
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">Izdelek XYZ</p>
                        <p className="text-2xl font-bold gradient-text">€ 24,99</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-2xl shadow-lg animate-float">
                  <Barcode className="w-6 h-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-3 rounded-2xl shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                  <QrCode className="w-6 h-6" />
                </div>
                <div className="absolute top-1/2 -right-6 bg-card text-foreground p-3 rounded-2xl shadow-lg border border-border animate-float" style={{ animationDelay: '2s' }}>
                  <Printer className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
