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
                  className="bg-cream rounded-lg cursor-pointer p-5 flex items-stretch space-x-6 border-2 border-[#D9D9D9] transition-all duration-300 ease-out hover:-translate-y-0.5"
                  style={{ boxShadow: "0 0 8px rgba(0, 4, 0, 0.1)" }}
                  onClick={() => navigate(`/events/${event.id}`)}
                >
                  {/* Event Image */}
                  <div className="w-36 flex-shrink-0 flex items-center justify-center">
                    <div className="w-36 h-36 rounded-lg overflow-hidden bg-gray-100">
                      {event.image ? (
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-sm text-gray-500">
                            No Image
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* Event details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-sm md:text-md font-helvetica text-black tracking-tight font-medium -mb-2 ml-0.5">
                        {event.date}
                      </div>
                      {/* {event.portfolio && (
                        <div
                          className="justify-center px-2 py-0.5 rounded-2xl text-xs font-normal tracking-tight text-black -mb-2"
                          style={{
                            backgroundColor: event.portfolioColor
                              ? `${event.portfolioColor}50`
                              : "#000020",
                          }}
                        >
                          {event.portfolio}
                        </div>
                      )} */}
                    </div>
                    <div className="text-xl md:text-2xl lg:text-3xl font-helvetica font-medium tracking-tight text-black mb-1">
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
