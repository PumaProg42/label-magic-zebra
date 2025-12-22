import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ali potrebujem kaj namestiti?",
    answer: "Ne. Label Designer PTI deluje neposredno v brskalniku (Chrome, Edge, Firefox). Za tiskanje preko omrežja potrebujete le IP naslov vašega Zebra tiskalnika.",
  },
  {
    question: "Kateri Zebra tiskalniki so podprti?",
    answer: "Vsi Zebra termični tiskalniki, ki podpirajo ZPL jezik — to so praktično vsi modeli (ZD420, ZT410, GK420d, itd.). Podpiramo resolucije 203, 300 in 600 DPI.",
  },
  {
    question: "Kako povežem tiskalnik?",
    answer: "Vaš Zebra tiskalnik mora biti povezan v omrežje (ethernet ali WiFi). Vnesite njegov IP naslov v aplikacijo in lahko tiskate. Alternativno lahko izvozite ZPL kodo za vaš ERP sistem.",
  },
  {
    question: "Kaj so placeholderji?",
    answer: "Placeholderji so dinamična polja (npr. {{NAZIV_IZDELKA}}), ki jih lahko zamenja vaš ERP ali WMS sistem. Tako ustvarite predlogo etikete enkrat, podatke pa posreduje vaš sistem.",
  },
  {
    question: "Ali lahko preizkusim brezplačno?",
    answer: "Da! Ponujamo 14-dnevni brezplačni preizkus z vsemi funkcionalnostmi. Kreditna kartica ni potrebna.",
  },
  {
    question: "Kako prekličem naročnino?",
    answer: "Naročnino lahko kadarkoli prekličete v uporabniškem portalu. Brez vprašanj, brez skritih stroškov.",
  },
  {
    question: "Ali so moje etikete varno shranjene?",
    answer: "Da. Vse etikete so shranjene v varnem oblaku in dostopne samo vam. Uporabljamo enkripcijo in varno avtentikacijo.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pogosta <span className="gradient-text">vprašanja</span>
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
