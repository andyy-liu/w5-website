import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      label: "Events",
      path: "/events",
      hasDropdown: true,
    },
    {
      label: "Team",
      path: "/team",
      hasDropdown: true,
    },
    {
      label: "About Us",
      path: "/about",
      hasDropdown: true,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="container-w5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-on-gradient">W5</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 text-on-gradient transition-opacity duration-200 ${
                    isActive(item.path) ? "opacity-100" : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="btn-w5-ghost">
            Get Involved
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;