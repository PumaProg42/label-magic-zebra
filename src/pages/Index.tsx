import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import FeaturesSection from "@/components/landing/FeaturesSection";

import UseCasesSection from "@/components/landing/UseCasesSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import AIDescriptionBlock from "@/components/landing/AIDescriptionBlock";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <div id="kako-deluje">
          <HowItWorksSection />
        </div>
        <div id="funkcionalnosti">
          <FeaturesSection />
        </div>
        <UseCasesSection />
        <div id="faq">
          <FAQSection />
        </div>
        <CTASection />
        <AIDescriptionBlock />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
