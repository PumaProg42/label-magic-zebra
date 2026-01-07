import { Type, BarChart3, QrCode, Image, Ruler, Cloud } from "lucide-react";
const features = [{
  icon: Type,
  title: "Text and placeholders",
  description: "Dodajte fiksno besedilo ali dinamična polja, ki jih zamenja vaš ERP/WMS sistem. Nastavite pisavo, velikost in poravnavo."
}, {
  icon: BarChart3,
  title: "Vse vrste črtnih kod",
  description: "EAN-8, EAN-13, Code 128 — z avtomatičnim izračunom kontrolne številke. Nastavite širino in višino po želji."
}, {
  icon: QrCode,
  title: "QR kode",
  description: "Generirajte QR kode za sledenje, spletne povezave ali poljubne podatke. Izberite velikost in stopnjo popravka napak."
}, {
  icon: Image,
  title: "Slike in logotipi",
  description: "Naložite PNG ali JPG slike. Avtomatično se pretvorijo v format, primeren za termični tisk."
}, {
  icon: Ruler,
  title: "Natančno pozicioniranje",
  description: "Ravnila v milimetrih, pametne vodilne črte za poravnavo, koordinate v pikslih. Profesionalna natančnost."
}, {
  icon: Cloud,
  title: "Shranjevanje v oblaku",
  description: "Shranite etikete v oblak in dostopajte do njih s kateregakoli računalnika. Nikoli več izgubljenih datotek."
}];
const FeaturesSection = () => {
  return <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need for  <span className="gradient-text">professional labels</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => <div key={index} className="group bg-card rounded-2xl p-6 lg:p-8 shadow-md border border-border/50 card-hover opacity-0 animate-fade-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default FeaturesSection;