import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import clsx from "clsx";

const Header = ({
  variant = "default",
}: {
  variant?: "landing" | "default";
}) => {
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

  const headerBg =
    variant === "landing"
      ? "bg-primary-deep/30 backdrop-blur-md border-b border-white/5"
      : "bg-white/80 backdrop-blur-md border-b border-black/10";
  const textColor = variant === "landing" ? "text-white" : "text-black";

  return (
    <header className={clsx("fixed top-0 left-0 right-0 z-50", headerBg)}>
      <div className="container-w5">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className={clsx("flex items-center", textColor)}
          >
            <img
              src={variant === "landing" ? "/w5logo.png" : "/w5logo_dark.png"}
              alt="W5 Logo"
              className="h-6 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center tracking-tight font-medium space-x-20">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={clsx(
                  "font-helvetica transition-opacity duration-200",
                  textColor,
                  isActive(item.path)
                    ? "opacity-100"
                    : "opacity-80 hover:opacity-100"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <button className="hidden md:inline-flex font-helvetica btn-w5-primary text-white">
            Get Involved
          </button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button
                  aria-label="Open menu"
                  className={clsx(
                    "inline-flex items-center justify-center rounded-md p-2",
                    textColor
                  )}
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="bottom"
                className={clsx(
                  "backdrop-blur supports-[backdrop-filter]:bg-primary-light/80 max-h-[85vh] overflow-y-auto rounded-t-[var(--radius)]",
                  variant === "landing"
                    ? "bg-white/90 border-t border-primary-light/30"
                    : "bg-primary-light/90"
                )}
              >
                <div className="mt-10 space-y-6">
                  {navItems.map((item) => (
                    <SheetClose
                      asChild
                      key={item.label}
                    >
                      <Link
                        to={item.path}
                        className={clsx(
                          "block px-2 font-helvetica text-xl",
                          textColor,
                          isActive(item.path)
                            ? "text-foreground"
                            : "text-foreground/80 hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}

                  <div className="pt-4">
                    <SheetClose asChild>
                      <button
                        className={clsx(
                          "w-full font-helvetica btn-w5-primary",
                          textColor
                        )}
                      >
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
