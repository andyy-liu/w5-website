import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

interface Event {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  badgeColor?: string;
  portfolio?: string;
  portfolioColor?: string;
}

interface EventCarouselProps {
  events: Event[];
}

const EventCarousel = ({ events }: EventCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Center the middle card on initial load and resize
  useEffect(() => {
    const centerMiddleCard = () => {
      if (scrollRef.current && events.length > 0) {
        const container = scrollRef.current;
        const containerWidth = container.clientWidth;

        // Get responsive values based on screen size
        const getResponsiveValues = () => {
          const screenWidth = window.innerWidth;

          if (screenWidth >= 1024) {
            // lg breakpoint
            return { cardWidth: 672, gap: 48, leftPadding: 80 }; // w-[42rem], gap-12, px-20
          } else if (screenWidth >= 768) {
            // md breakpoint
            return { cardWidth: 384, gap: 32, leftPadding: 32 }; // w-96, gap-8, px-8
          } else {
            // mobile
            return { cardWidth: 320, gap: 24, leftPadding: 16 }; // w-80, gap-6, px-4
          }
        };

        const { cardWidth, gap, leftPadding } = getResponsiveValues();
        const middleIndex = Math.floor(events.length / 2);

        // Calculate scroll position to center the middle card
        const scrollPosition =
          leftPadding +
          (cardWidth + gap) * middleIndex -
          containerWidth / 2 +
          cardWidth / 2;

        container.scrollLeft = Math.max(0, scrollPosition);
      }
    };

    // Center on mount and when events change
    centerMiddleCard();

    // Recenter on window resize
    window.addEventListener("resize", centerMiddleCard);

    return () => {
      window.removeEventListener("resize", centerMiddleCard);
    };
  }, [events.length]);
  let isDown = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown = true;
    if (scrollRef.current) {
      startX = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center mx-auto">
          <div className="flex items-center">
            <h2 className="text-4xl lg:text-5xl font-apple-garamond font-normal text-on-light">
              Upcoming W5 Events
            </h2>
          </div>
        </div>
      </div>

      {/* Horizontal scrolling container with drag functionality */}
      <div
        ref={scrollRef}
        className="overflow-x-scroll overflow-y-hidden pb-4 cursor-grab active:cursor-grabbing scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div
          className="flex gap-6 md:gap-8 lg:gap-12 px-4 md:px-8 lg:px-20"
          style={{ width: "max-content" }}
        >
          {events.map((event) => (
            <div
              key={event.id}
              className="flex-shrink-0 w-80 md:w-96 lg:w-[42rem] select-none"
            >
              <div className="relative overflow-hidden bg-cream rounded-xl">
                {/* Event Image */}
                <div className="relative w-full h-48 md:h-64 lg:h-80 bg-gray-200 rounded-xl overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable="false"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40" />

                  {/* Event title overlay */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4">
                    <h3 className="text-white text-lg md:text-xl font-helvetica font-normal tracking-tight drop-shadow-lg">
                      {event.title}
                    </h3>
                  </div>
                </div>

                {/* Bottom section with date, category and button */}
                <div className="px-1 py-2 bg-cream flex items-center justify-between">
                  <div>
                    <p className="text-sm md:text-md lg:text-lg font-helvetica text-gray-700 font-medium -mb-1 md:mb-0">
                      {event.date || "Month DD-DD, 202#"}
                    </p>
                    <span
                      className={`inline-block px-1.5 md:px-2.5 rounded-2xl text-[0.65rem] md:text-xs lg:text-sm font-normal tracking-tighter text-black/70 ${
                        event.badgeColor || "bg-[#5BA05B]/50"
                      }`}
                    >
                      {event.category}
                    </span>
                  </div>
                  <Link
                    to={`/events/${event.id}`}
                    className="px-3 py-1.5 bg-black text-white text-xs md:text-sm lg:text-base font-helvetica tracking-tight rounded-lg hover:bg-gray-800 transition-colors pointer-events-auto"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
