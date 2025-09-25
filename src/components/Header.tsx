import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    {
      label: "Events",
      path: "/events",
    },
    {
      label: "Team",
      path: "/team",
    },
    {
      label: "About Us",
      path: "/about",
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-deep/30 backdrop-blur-md border-b border-white/5">
      <div className="container-w5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
          >
            <img
              src="/w5logo.png"
              alt="W5 Logo"
              className="h-6 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-20">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`font-helvetica text-on-gradient transition-opacity duration-200 ${
                  isActive(item.path)
                    ? "opacity-100"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="font-helvetica btn-w5-primary">
            Get Involved
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
