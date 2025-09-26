import Layout from "../components/Layout";
import EventCard from "../components/EventCard";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual General Meeting",
      date: "Month ##-##, 202#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-agm",
    },
    {
      title: "VP Coffee Chats",
      date: "Month ##-##, 202#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-coffee",
    },
    {
      title: "Summit Case Competition",
      date: "October 1-2, 2025",
      description:
        "Gain valuable case competition experience, network with sponsor representatives, and work on creating solutions to real world business problems",
      register: "https://example.com/register-summit",
    },
    {
      title: "Steve Jobs Night",
      date: "Month ##-##, 202#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-steve-jobs",
    },
    {
      title: "Careers Panel",
      date: "Month ##-##, 202#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-careers",
    },
    {
      title: "Innovation Sprint",
      date: "Month ##-##, 202#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-sprint",
    },
    {
      title: "Internship Program",
      date: "Month ##-##, 202#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-internship",
    },
    {
      title: "Accelerator Program",
      date: "Month ##-##, 202#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-accelerator",
    },
    {
      title: "Designathon",
      date: "Month ##-##, 202#",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      register: "https://example.com/register-designathon",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-white min-h-[35vh] mt-16 flex items-center">
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
      <section className="bg-white pb-24">
        <div className="container-w5">
          <div className="space-y-8">
            {upcomingEvents.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg cursor-pointer shadow-sm border border-gray-200 p-6 flex items-start space-x-6 transition-all duration-300 ease-out hover:scale-102 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Image placeholder */}
                <div className="bg-gray-100 w-32 h-32 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm text-gray-500">Image</span>
                </div>
                {/* Event details */}
                <div className="flex-1">
                  <div className="text-md font-helvetica text-gray-700 tracking-tight font-medium">
                    {event.date}
                  </div>
                  <div className="text-3xl font-helvetica font-medium tracking-tight text-black mb-1">
                    {event.title}
                  </div>
                  <div className="text-md font-helvetica text-gray-500 tracking-snug mb-2">
                    {event.description}
                  </div>
                  <a
                    href={event.register}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-4 py-1 rounded bg-gray-100 border border-black text-sm tracking-tight font-helvetica text-gray-800 hover:bg-gray-200 transition">
                      Register
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
