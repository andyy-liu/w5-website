import { Instagram, Linkedin, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary border-t border-white/10">
      <div className="container-w5 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-on-gradient hover:text-primary-pink transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-on-gradient hover:text-primary-pink transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-on-gradient hover:text-primary-pink transition-colors duration-200"
              aria-label="Website"
            >
              <Globe className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-on-gradient/60 text-sm text-center">
            <p>&copy; 2024 W5. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;