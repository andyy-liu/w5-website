import { Instagram, Linkedin, Link } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-deep/95 border-t border-white/10">
      <div className="container-w5 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/w5uwo/"
              className="text-on-gradient hover:text-primary-pink transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-8 h-auto" />
            </a>
            <a
              href="https://www.linkedin.com/company/w5uwo"
              className="text-on-gradient hover:text-primary-pink transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-8 h-auto" />
            </a>
            <a
              href="https://linktr.ee/w5uwo"
              className="text-on-gradient hover:text-primary-pink transition-colors duration-200"
              aria-label="Link"
            >
              <Link className="w-8 h-auto" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-on-gradient/60 text-md text-white font-helvetica-neue text-center">
            <p>&copy; 2025 W5 - Western Entrepreneurship Association.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
