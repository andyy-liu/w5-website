import { ArrowUpRight } from "lucide-react";
import { MouseEventHandler } from "react";

interface PortfolioCardProps {
  title: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
}

const PortfolioCard = ({
  title,
  variant = "secondary",
  onClick,
  onMouseEnter,
}: PortfolioCardProps) => {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`relative group card-w5 p-6 cursor-pointer min-h-[200px] flex flex-col justify-between overflow-hidden transition-[transform,box-shadow] duration-300 ease-out ${
        isPrimary
          ? "scale-[1.02] shadow-[0_0_24px_-4px_rgba(85,62,204,0.45)]"
          : "scale-100 shadow-none"
      }`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {/* Animated gradient layer */}
      <div
        className={`absolute inset-0 bg-gradient-primary transition-opacity duration-300 ease-out ${
          isPrimary ? "opacity-100" : "opacity-0"
        }`}
      />
      {/* Base background (shows when not primary) */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ease-out ${
          isPrimary ? "opacity-0" : "opacity-100 bg-white"
        }`}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1 justify-between">
        <div className="flex justify-end">
          <ArrowUpRight
            className={`card-arrow transition-all duration-300 ease-out ${
              isPrimary ? "text-white" : "text-primary"
            }`}
          />
        </div>
        <div>
          <h3
            className={`text-2xl font-helvetica-neue font-light transition-colors duration-100 ${
              isPrimary ? "text-white" : "text-on-light"
            }`}
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
