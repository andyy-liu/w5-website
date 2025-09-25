import { ArrowUpRight } from "lucide-react";

interface EventCardProps {
  title: string;
  onClick?: () => void;
}

const EventCard = ({ title, onClick }: EventCardProps) => {
  return (
    <div
      className="group card-w5 p-6 cursor-pointer min-h-[200px] flex flex-col justify-between bg-gradient-card relative overflow-hidden transition-[transform,box-shadow] duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_24px_-4px_rgba(85,62,204,0.45)]"
      onClick={onClick}
    >
      <div className="flex justify-end">
        <ArrowUpRight className="card-arrow text-black" />
      </div>
      <div>
        <h3 className="text-xl font-helvetica font-light text-black">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default EventCard;
