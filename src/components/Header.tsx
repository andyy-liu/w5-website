import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

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
          <button className="hidden md:inline-flex font-helvetica btn-w5-primary">
            Get Involved
          </button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className="inline-flex items-center text-white justify-center rounded-md p-2 text-on-gradient/90 hover:text-on-gradient"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className="bg-primary-light/90 backdrop-blur supports-[backdrop-filter]:bg-primary-light/80 max-h-[85vh] overflow-y-auto rounded-t-[var(--radius)]"
              >
                <div className="mt-10 space-y-6">
                  {navItems.map((item) => (
                    <SheetClose
                      asChild
                      key={item.label}
                    >
                      <Link
                        to={item.path}
                        className={`block px-2 font-helvetica text-xl ${
                          isActive(item.path)
                            ? "text-foreground"
                            : "text-foreground/80 hover:text-foreground"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}

                  <div className="pt-4">
                    <SheetClose asChild>
                      <button className="w-full font-helvetica btn-w5-primary">
                        Get Involved
                      </button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
