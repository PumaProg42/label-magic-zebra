import { Printer, Mail, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Logo & description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                <Printer className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">Label Designer PTI</span>
            </div>
            <p className="text-background/70 mb-6 max-w-sm">
              Profesionalno oblikovanje etiket za Zebra tiskalnike. Enostavno, hitro, brez namestitve.
            </p>
            <div className="flex items-center gap-2 text-background/70">
              <Mail className="w-4 h-4" />
              <a href="mailto:podpora@labeldesigner.si" className="hover:text-background transition-colors">
                podpora@labeldesigner.si
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Produkt</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="#funkcionalnosti" className="hover:text-background transition-colors">Funkcionalnosti</a>
              </li>
              <li>
                <a href="#cenik" className="hover:text-background transition-colors">Cenik</a>
              </li>
              <li>
                <a href="#tiskalniki" className="hover:text-background transition-colors">Podprti tiskalniki</a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Podpora</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="#faq" className="hover:text-background transition-colors">Pogosta vprašanja</a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-background transition-colors">Kontakt</a>
              </li>
              <li>
                <a href="#dokumentacija" className="hover:text-background transition-colors">Dokumentacija</a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Podjetje</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="#o-nas" className="hover:text-background transition-colors">O nas</a>
              </li>
              <li>
                <a href="#pogoji" className="hover:text-background transition-colors">Pogoji uporabe</a>
              </li>
              <li>
                <a href="#zasebnost" className="hover:text-background transition-colors">Politika zasebnosti</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Label Designer PTI. Vse pravice pridržane.
          </p>
          
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
