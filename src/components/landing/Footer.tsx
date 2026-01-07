import { Printer, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & company */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
              <Printer className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Label Designer PTI</span>
          </div>
          
          {/* Contact */}
          <div className="flex items-center gap-2 text-background/70">
            <Mail className="w-4 h-4" />
            <a href="mailto:info@labeldesigner.com" className="hover:text-background transition-colors">
              info@labeldesigner.com
            </a>
          </div>
          
          {/* Legal links */}
          <div className="flex items-center gap-6 text-background/70">
            <Link to="/zasebnost" className="hover:text-background transition-colors">
              Privacy policy
            </Link>
            <Link to="/pogoji-uporabe" className="hover:text-background transition-colors">
              Terms of service
            </Link>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-background/10 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Label Designer PTI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
