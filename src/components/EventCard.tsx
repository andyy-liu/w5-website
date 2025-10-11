import { ArrowUpRight } from "lucide-react";

interface EventCardProps {
  title: string;
  date?: string;
  portfolio?: string;
  portfolioColor?: string;
  onClick?: () => void;
}

const EventCard = ({
  title,
  date,
  portfolio,
  portfolioColor,
  onClick,
}: EventCardProps) => {
  return (
    <div
      className="group card-w5 p-6 cursor-pointer min-h-[200px] flex flex-col justify-between bg-gradient-card relative overflow-hidden transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_24px_-4px_rgba(85,62,204,0.45)]"
      onClick={onClick}
    >
      <div className="flex justify-between items-start">
        {portfolio && (
          <span
            className="px-2.5 py-0.5 rounded-full text-xs font-medium"
            style={{
              backgroundColor: portfolioColor
                ? `${portfolioColor}40`
                : "#00000020",
              color: portfolioColor || "#000000",
            }}
          >
            {portfolio}
          </span>
        )}
        <ArrowUpRight className="card-arrow text-black" />
      </div>
      <div>
        {date && (
          <p className="text-sm font-helvetica text-gray-700 font-medium mb-1">
            {date}
          </p>
        )}
        <h3 className="text-xl font-helvetica font-light text-black">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default EventCard;
