import { Instagram, Linkedin, Link } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#00000A]">
      <div className="container-w5 py-12">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social Links */}
          <div className="flex items-center space-x-16">
            <a
              href="https://www.instagram.com/w5uwo/"
              className="text-on-gradient hover:text-primary-medium transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-auto" />
            </a>
            <a
              href="https://www.linkedin.com/company/w5uwo"
              className="text-on-gradient hover:text-primary-medium transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-auto" />
            </a>
            <a
              href="https://linktr.ee/w5uwo"
              className="text-on-gradient hover:text-primary-medium transition-colors duration-200"
              aria-label="Link"
            >
              <Link className="w-6 h-auto" />
            </a>
          </div>

          {/* <div className="text-white text-sm font-helvetica tracking-tight text-center">
            <p>&copy; 2025 W5 - Western Entrepreneurship Association.</p>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
