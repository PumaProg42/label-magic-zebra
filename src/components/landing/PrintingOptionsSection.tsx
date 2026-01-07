import { Network, Monitor, Box, Download } from "lucide-react";

const printingOptions = [
  {
    icon: Network,
    title: "Direct network printing (IP + port)",
  },
  {
    icon: Monitor,
    title: "Local Windows print agent",
  },
  {
    icon: Box,
    title: "QZ Tray",
  },
  {
    icon: Download,
    title: "Download printer code",
  },
];

const PrintingOptionsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Flexible <span className="gradient-text">printing options.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the method that fits your environment.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {printingOptions.map((option, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 text-center opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-medium">{option.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrintingOptionsSection;
