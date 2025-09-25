import { ArrowUpRight } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

const PortfolioCard = ({
  title,
  variant = "secondary",
  onClick,
}: PortfolioCardProps) => {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`group card-w5 p-6 cursor-pointer min-h-[200px] flex flex-col justify-between ${
        isPrimary ? "bg-gradient-primary" : "bg-white"
      }`}
      onClick={onClick}
    >
      <div className="flex justify-end">
        <ArrowUpRight
          className={`card-arrow ${isPrimary ? "text-white" : "text-primary"}`}
        />
      </div>
      <div>
        <h3
          className={`text-xl font-helvetica-neue font-normal ${
            isPrimary ? "text-white" : "text-on-light"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
};

export default PortfolioCard;
