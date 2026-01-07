import { Factory, Utensils, Truck, Warehouse, Search } from "lucide-react";

const useCases = [
  {
    icon: Factory,
    title: "Production labeling",
    description: "Serial numbers, batch codes, and production dates for manufacturing.",
  },
  {
    icon: Utensils,
    title: "Food & date labeling",
    description: "Expiration dates, ingredients, and nutritional information.",
  },
  {
    icon: Truck,
    title: "Logistics and pallets",
    description: "Shipping labels, tracking codes, and delivery information.",
  },
  {
    icon: Warehouse,
    title: "Warehouse identification",
    description: "Location labels, inventory codes, and bin markers.",
  },
  {
    icon: Search,
    title: "Industrial traceability",
    description: "Asset tracking, quality control, and compliance labels.",
  },
];

const UseCasesSection = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Use <span className="gradient-text">cases</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From production floors to warehouses, our label designer adapts to your needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-lg border border-border/50 card-hover opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <useCase.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{useCase.title}</h3>
              <p className="text-sm text-muted-foreground">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
