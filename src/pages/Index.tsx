import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import PrintersSection from "@/components/landing/PrintersSection";
import PrintingOptionsSection from "@/components/landing/PrintingOptionsSection";
import UseCasesSection from "@/components/landing/UseCasesSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <div id="kako-deluje">
          <HowItWorksSection />
        </div>
        <div id="tiskalniki">
          <PrintersSection />
        </div>
        <PrintingOptionsSection />
        <UseCasesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
