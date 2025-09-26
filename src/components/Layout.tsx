import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  variant?: "landing" | "default";
}

const Layout = ({ children, variant = "default" }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant={variant} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
