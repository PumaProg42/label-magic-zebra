import { Factory, Utensils, Truck, Warehouse, Search } from "lucide-react";

const useCases = [
  {
    icon: Factory,
    title: "Production labeling",
  },
  {
    icon: Utensils,
    title: "Food & date labeling",
  },
  {
    icon: Truck,
    title: "Logistics and pallets",
  },
  {
    icon: Warehouse,
    title: "Warehouse identification",
  },
  {
    icon: Search,
    title: "Industrial traceability",
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
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 bg-card rounded-full px-6 py-4 shadow-lg border border-border/50 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <useCase.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium">{useCase.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
