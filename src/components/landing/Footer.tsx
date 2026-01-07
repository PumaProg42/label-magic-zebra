import { Printer, Mail } from "lucide-react";
import { Link } from "react-router-dom";

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
              Professional label design for thermal printers. Simple, fast, no installation required.
            </p>
            <div className="flex items-center gap-2 text-background/70">
              <Mail className="w-4 h-4" />
              <a href="mailto:prodaja@perko-tehtnice.si" className="hover:text-background transition-colors">
                prodaja@perko-tehtnice.si
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="#funkcionalnosti" className="hover:text-background transition-colors">Features</a>
              </li>
              <li>
                <a href="#cenik" className="hover:text-background transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#tiskalniki" className="hover:text-background transition-colors">Supported printers</a>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="#faq" className="hover:text-background transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#kontakt" className="hover:text-background transition-colors">Contact</a>
              </li>
              <li>
                <Link to="/dokumentacija" className="hover:text-background transition-colors">Documentation</Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="#o-nas" className="hover:text-background transition-colors">About us</a>
              </li>
              <li>
                <Link to="/pogoji-uporabe" className="hover:text-background transition-colors">Terms of use</Link>
              </li>
              <li>
                <Link to="/zasebnost" className="hover:text-background transition-colors">Privacy policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Label Designer PTI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
