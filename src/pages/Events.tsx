import Layout from "../components/Layout";
import EventCard from "../components/EventCard";
import { useNavigate } from "react-router-dom";
import { EVENTS } from "../data";

const Events = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <section className="bg-black">
        {/* Hero Section */}
        <section className="bg-cream min-h-[35vh] mt-16 flex items-center">
          <div className="container-w5 w-full">
            <div className="max-w-5xl">
              <h1 className="text-8xl md:text-9xl lg:text-10xl font-apple-garamond font-normal text-black">
                Events
              </h1>
              <p className="text-xl md:text-2xl font-helvetica text-black tracking-tight max-w-6xl">
                Always announced on our Instagram, @w5uwo.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="bg-cream pb-24 rounded-b-[4rem]">
          <div className="container-w5">
            <div className="space-y-8">
              {EVENTS.map((event, idx) => (
                <div
                  key={idx}
                  className="bg-cream rounded-lg cursor-pointer p-5 flex flex-col md:flex-row md:items-stretch md:space-x-6 border-2 border-[#D9D9D9] transition-all duration-300 ease-out hover:-translate-y-0.5"
                  style={{ boxShadow: "0 0 8px rgba(0, 4, 0, 0.1)" }}
                  onClick={() => navigate(`/events/${event.id}`)}
                >
                  {/* Event Image */}
                  <div className="w-full md:w-36 flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
                    <div className="w-full aspect-[4/3] md:w-36 md:h-36 md:aspect-auto rounded-lg overflow-hidden bg-gray-200">
                      {event.image ? (
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg
                            className="w-12 h-12 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Event details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-sm md:text-md font-helvetica text-black tracking-tight font-medium -mb-2 md:ml-0.5">
                        {event.date}
                      </div>
                    </div>
                    <div className="text-2xl md:text-2xl lg:text-3xl font-helvetica font-medium tracking-tight text-black mb-1">
                      {event.title}
                    </div>
                    <div className="text-base/5 md:text-lg/5 font-helvetica text-black/60 tracking-tight -mt-0.5 mb-3">
                      {event.description}
                    </div>
                    {event.isRegistrationOpen ? (
                      <a
                        href={event.register}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button className="px-3 py-2 rounded-lg bg-[#E3E3E3] border border-[#767676] text-sm tracking-tight font-helvetica text-gray-800 hover:bg-gray-200 transition">
                          Register
                        </button>
                      </a>
                    ) : (
                      <div className="relative">
                        <button
                          disabled
                          className="group px-3 py-2 rounded-lg bg-[#E3E3E3] border border-[#767676]/40 text-sm tracking-tight font-helvetica text-gray-400"
                        >
                          Register
                          <span className="pointer-events-none absolute -top-8 -left-6 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2">
                            Registration is closed
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Events;
