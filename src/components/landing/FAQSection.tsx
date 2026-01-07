import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the application tied to a specific printer manufacturer?",
    answer: "No. The application is fully vendor-agnostic. It works with all thermal printers that support standard printer languages such as ZPL, TSPL, EPL, CPCL, or RAW output.",
  },
  {
    question: "Do I need special drivers or additional software for printing?",
    answer: "Not necessarily. Labels can be printed directly over the network (IP + port) without drivers. If your environment requires it, alternative options are available, such as a local print agent or file export for external printing.",
  },
  {
    question: "Are label dimensions and element positions accurate?",
    answer: "Yes. The application uses a precise WYSIWYG editor, where all positions and sizes are calculated based on the actual label dimensions and the selected DPI (203 / 300 / 600).",
  },
  {
    question: "Can I save and reuse label templates?",
    answer: "Absolutely. Labels can be saved as templates, reopened at any time, modified, and reused, significantly speeding up day-to-day operations.",
  },
  {
    question: "Is the application GDPR compliant?",
    answer: "Yes. The application is designed according to GDPR principles (privacy by design). Only the data required for proper operation of the service is processed (such as user accounts and saved label templates).",
  },
  {
    question: "What personal data is stored?",
    answer: "Only essential data required to provide the service is stored: Email address (for authentication), User ID, and saved label templates (if the user chooses to store them). The content of the labels remains fully under the user's control.",
  },
  {
    question: "Where is the data stored?",
    answer: "Data is stored in a secure cloud environment with restricted access and appropriate security mechanisms (authentication and user-level data isolation). Each user can access only their own data.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">FAQ</span>
          </h2>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card rounded-2xl border border-border/50 px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left py-6 hover:no-underline">
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
