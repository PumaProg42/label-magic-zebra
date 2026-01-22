import { Warehouse, Truck, ShoppingBag, Factory } from "lucide-react";
import labelWarehouse from "@/assets/label-warehouse.png";
import labelShipping from "@/assets/label-shipping.png";
import labelPrice from "@/assets/label-price.png";
import labelTracking from "@/assets/label-tracking.png";

const useCases = [
  {
    icon: Warehouse,
    title: "Warehouse labels",
    description: "Shelf location, product barcode, name, and quantity. Simplify inventory and product search.",
    tag: "Warehouse",
    image: labelWarehouse,
  },
  {
    icon: Truck,
    title: "Shipping labels",
    description: "QR code for shipment tracking, recipient address, company logo. Professional labels for every package.",
    tag: "Transport",
    image: labelShipping,
  },
  {
    icon: ShoppingBag,
    title: "Price labels",
    description: "EAN-13 barcode for checkout, price, product name. Quick price updates.",
    tag: "Retail",
    image: labelPrice,
  },
  {
    icon: Factory,
    title: "Tracking labels",
    description: "Serial number, Code 128 barcode, production date. Complete product traceability.",
    tag: "Manufacturing",
    image: labelTracking,
  },
];

const UseCasesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Labels for <span className="gradient-text">every industry</span>
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
              
              {/* Label preview image */}
              <div className="px-4 sm:px-8 pb-6 sm:pb-8">
                <div className="bg-white rounded-xl p-2 sm:p-3 border border-border/50 shadow-sm group-hover:shadow-md transition-all duration-300 [perspective:1000px]">
                  <img 
                    src={useCase.image} 
                    alt={`${useCase.title} - ${useCase.description} - Label Designer PTI thermal printer label example`}
                    className="w-full max-w-[200px] sm:max-w-[280px] mx-auto h-auto rounded-lg transition-transform duration-500 group-hover:[transform:rotateY(5deg)_rotateX(3deg)_scale(1.02)]"
                  />
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
