import { useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Link } from "react-router-dom";

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

// Constants for animation behavior
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 30; // Auto advance every 10 seconds
const DRAG_BUFFER = 50; // Minimum drag distance to trigger a slide change

const SPRING_OPTIONS = {
  type: "spring" as const,
  mass: 1,
  stiffness: 400,
  damping: 100,
};

const EventCarousel = ({ events }: EventCarouselProps) => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  // Auto-advance carousel with infinite scrolling
  useEffect(() => {
    // Define normalized index inside the effect to avoid dependency issues
    const advanceToNextSlide = () => {
      setImgIndex((prev) => (prev + 1) % events.length);
    };

    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        advanceToNextSlide();
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, events.length]);

  // Function removed as we're using inline calculations

  // Handle drag end to change slides with infinite scrolling
  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER) {
      // Go forward (with infinite scrolling)
      setImgIndex((prev) => (prev + 1) % events.length);
    } else if (x >= DRAG_BUFFER) {
      // Go backward (with infinite scrolling)
      setImgIndex((prev) => (prev - 1 + events.length) % events.length);
    }

    // Reset drag position after animation completes
    setTimeout(() => {
      dragX.set(0);
    }, 300);
  };

  // Navigation functions with infinite scrolling
  const goToNext = () => {
    setImgIndex((prev) => (prev + 1) % events.length);
  };

  const goToPrev = () => {
    setImgIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className="relative">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center mx-auto">
          <div className="flex items-center">
            <h2 className="text-4xl md:text-5xl font-apple-garamond font-normal text-on-light">
              Flagship W5 Events
            </h2>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex justify-center">
          <motion.div
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
              width: `${events.length * 100}%`,
            }}
            animate={{
              translateX: `calc(-${imgIndex * 60}% + ${(100 - 60) / 2}%)`,
            }}
            transition={SPRING_OPTIONS}
            onDragEnd={onDragEnd}
            className="flex cursor-grab active:cursor-grabbing select-none"
          >
            {events.map((event, idx) => (
              <motion.div
                key={event.id}
                animate={{
                  scale: imgIndex === idx ? 1 : 0.85,
                  opacity:
                    Math.abs(imgIndex - idx) <= 1 ||
                    Math.abs(imgIndex - idx) === events.length - 1
                      ? 1
                      : 0.5,
                  filter: imgIndex === idx ? "grayscale(0%)" : "grayscale(40%)",
                }}
                transition={SPRING_OPTIONS}
                className="w-[60%] flex-shrink-0 p-2 md:p-4 pointer-events-auto"
              >
                <div className="relative overflow-hidden">
                  {/* Image - wrapped in div to prevent default drag behavior */}
                  <div className="relative w-full h-[280px] rounded-xl overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover pointer-events-none"
                      draggable="false"
                    />
                    {/* Dark overlay on image only */}
                    <div className="absolute inset-0 bg-black/30 pointer-events-none" />
                  </div>

                  {/* Title overlay - positioned at top left */}
                  <div className="absolute top-4 left-4">
                    <h3 className="text-xl md:text-xl font-helvetica font-normal text-white drop-shadow-xl tracking-tight">
                      {event.title}
                    </h3>
                  </div>

                  {/* Bottom section with date, category and button */}
                  <div className="px-2 py-3 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-helvetica text-gray-700 font-medium">
                        {event.date || "Month DD-DD, 202#"}
                      </p>
                      <div>
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded-2xl text-xs font-normal tracking-tight text-[#00000A]/60 ${
                            event.badgeColor || "bg-[#5BA05B]"
                          }`}
                        >
                          {event.category}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/events/${event.id}`}
                      className="px-3 py-1 bg-black text-white text-md font-light tracking-tight rounded-lg inline-block text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EventCarousel;
