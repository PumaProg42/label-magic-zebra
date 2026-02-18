import { ArrowRight, Printer, QrCode, Barcode, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import labelDesignerPreview from "@/assets/label-designer-preview.png";

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
            <header className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Online Label Designer for{" "}
                <span className="gradient-text">Zebra & Thermal Printers</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Browser-based barcode label software. Design shipping labels, warehouse labels, and product labels with barcodes and QR codes. 
                Export to ZPL — no installation required.
              </p>
            </header>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href="https://app.perko-tehtnice.si/">
                  Try for free
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Right content - Editor preview image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card">
              <img 
                src={labelDesignerPreview} 
                alt="Label Designer PTI - Professional label design interface" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground p-3 rounded-2xl shadow-lg animate-float">
              <Barcode className="w-6 h-6" />
            </div>
            <div 
              className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground p-3 rounded-2xl shadow-lg animate-float"
              style={{ animationDelay: '1s' }}
            >
              <QrCode className="w-6 h-6" />
            </div>
            <div 
              className="absolute top-1/3 -right-6 bg-card text-foreground p-3 rounded-2xl shadow-lg border border-border animate-float"
              style={{ animationDelay: '2s' }}
            >
              <Printer className="w-6 h-6" />
            </div>
            <div 
              className="absolute top-1/2 -left-6 bg-card text-foreground p-3 rounded-2xl shadow-lg border border-border animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <Type className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;