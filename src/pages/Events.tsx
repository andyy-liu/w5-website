import Layout from "../components/Layout";
import EventCard from "../components/EventCard";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual General Meeting",
      date: "September 13, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-agm",
      portfolio: "FULL TEAM",
      portfolioColor: "#E6A6C7", // Black for full team events
      isRegistrationOpen: false, // Event has passed
    },
    {
      title: "VP Coffee Chats",
      date: "September 15-19, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-coffee",
      portfolio: "FULL TEAM",
      portfolioColor: "#E6A6C7", // Community color
      isRegistrationOpen: false, // Event has passed
    },
    {
      title: "Summit Case Competition",
      date: "October 3-4, 2025",
      description:
        "Gain valuable case competition experience, network with sponsor representatives, and work on creating solutions to real world business problems",
      register: "https://example.com/register-summit",
      portfolio: "DEVELOPMENT",
      portfolioColor: "#5BA05B", // Development color
      isRegistrationOpen: false, // Event has passed
    },
    {
      title: "Steve Jobs Night",
      date: "October 10, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-steve-jobs",
      portfolio: "INNOVATION",
      portfolioColor: "#5B9ED1", // Marketing color
      isRegistrationOpen: false, // Today's event, registration still open
    },
    {
      title: "Careers Panel",
      date: "October 28-29, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-careers",
      portfolio: "DEVELOPMENT",
      portfolioColor: "#5BA05B", // Development color
      isRegistrationOpen: false, // Upcoming event
    },
    {
      title: "Toronto Firms Trip",
      date: "February 7, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-designathon",
      portfolio: "DEVELOPMENT",
      portfolioColor: "#5BA05B", // Community color
      isRegistrationOpen: false, // Not open yet
    },
    {
      title: "Innovation Sprint",
      date: "November 15-16, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-sprint",
      portfolio: "ACCELERATOR",
      portfolioColor: "#D15B4B", // Innovation color
      isRegistrationOpen: true, // Upcoming event
    },
    {
      title: "Internship Program",
      date: "November 23, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-internship",
      portfolio: "INNOVATION",
      portfolioColor: "#5B9ED1", // Development color
      isRegistrationOpen: false, // Upcoming event
    },
    {
      title: "Accelerator Program",
      date: "December-January, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-accelerator",
      portfolio: "Accelerator",
      portfolioColor: "#D15B4B", // Accelerator color
      isRegistrationOpen: false, // Not open yet
    },
    {
      title: "Designathon",
      date: "January 9-10, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-designathon",
      portfolio: "MARKETING",
      portfolioColor: "#6B5BD1", // Innovation color
      isRegistrationOpen: false, // Not open yet
    },
    {
      title: "VC Case Competition",
      date: "January 18, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-designathon",
      portfolio: "CATALYST",
      portfolioColor: "#D7C16B", // Catalyst color
      isRegistrationOpen: false, // Not open yet
    },
    {
      title: "Pitch5",
      date: "February 28 - March 1, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-designathon",
      portfolio: "Accelerator",
      portfolioColor: "#D15B4B", // Accelerator color
      isRegistrationOpen: false, // Not open yet
    },
  ];

  return (
    <Layout>
      <section className="bg-black">
        {/* Hero Section */}
        <section className="bg-cream min-h-[35vh] mt-16 flex items-center">
          <div className="container-w5 w-full">
            <div className="max-w-5xl">
              <h1 className="text-7xl md:text-9xl lg:text-10xl font-apple-garamond font-normal text-black">
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
              {upcomingEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="bg-cream rounded-lg cursor-pointer p-5 flex items-start space-x-6 border-2 border-[#D9D9D9] transition-all duration-300 ease-out hover:-translate-y-0.5"
                  style={{ boxShadow: "0 0 8px rgba(0, 4, 0, 0.1)" }}
                >
                  {/* Image placeholder */}
                  <div className="bg-gray-100 w-32 h-32 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm text-gray-500">Image</span>
                  </div>
                  {/* Event details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-md font-helvetica text-gray-700 tracking-tight font-medium">
                        {event.date}
                      </div>
                      {event.portfolio && (
                        <div
                          className="justify-center px-2 py-0.5 rounded-2xl text-xs font-normal tracking-tight text-black/90"
                          style={{
                            backgroundColor: event.portfolioColor
                              ? `${event.portfolioColor}50`
                              : "#000020",
                          }}
                        >
                          {event.portfolio}
                        </div>
                      )}
                    </div>
                    <div className="text-3xl font-helvetica font-medium tracking-tight text-black mb-1">
                      {event.title}
                    </div>
                    <div className="text-md font-helvetica text-gray-500 tracking-snug mb-2">
                      {event.description}
                    </div>
                    {event.isRegistrationOpen ? (
                      <a
                        href={event.register}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="px-4 py-1 rounded bg-gray-100 border border-black text-sm tracking-tight font-helvetica text-gray-800 hover:bg-gray-200 transition">
                          Register
                        </button>
                      </a>
                    ) : (
                      <div className="relative group">
                        <button
                          disabled
                          className="px-4 py-1 rounded bg-gray-100 border border-gray-300 text-sm tracking-tight font-helvetica text-gray-400"
                        >
                          Register
                        </button>
                        <span className="pointer-events-none absolute -top-8 -left-6 w-max opacity-0 transition-opacity group-hover:opacity-100 bg-gray-800 text-white text-xs rounded py-1 px-2">
                          Registration is closed
                        </span>
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
