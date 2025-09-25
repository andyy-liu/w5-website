import { ArrowUpRight } from "lucide-react";

interface EventCardProps {
  title: string;
  onClick?: () => void;
}

const EventCard = ({ title, onClick }: EventCardProps) => {
  return (
    <div
      className="group card-w5 p-6 cursor-pointer min-h-[200px] flex flex-col justify-between bg-gradient-card"
      onClick={onClick}
    >
      <div className="flex justify-end">
        <ArrowUpRight className="card-arrow text-white" />
      </div>
      <div>
        <h3 className="text-xl font-medium text-white">{title}</h3>
      </div>
    </div>
  );
};

export default EventCard;