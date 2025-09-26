import Layout from "../components/Layout";
import EventCard from "../components/EventCard";

const Events = () => {
  const upcomingEvents = [
    "Annual General Meeting",
    "VP Coffee Chats",
    "Summit Case Competition",
    "Fail Factor",
    "Careers Panel",
    "Innovation Sprint",
    "Internship Program",
    "Accelerator Program",
    "Designathon",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero min-h-[86vh] flex items-center">
        <div className="container-w5 w-full">
          <div className="max-w-5xl">
            <h1 className="text-7xl md:text-9xl lg:text-10xl font-apple-garamond font-normal text-on-gradient mb-8">
              Our Events
            </h1>
            <p className="text-xl md:text-2xl font-helvetica text-white text-on-gradient/90 max-w-6xl">
              W5 is Western's largest entrepreneurial community — a launchpad
              for students who want to build, create, and explore bold ideas.
              Through immersive events, real-world startup exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-primary-light/90 py-24">
        <div className="container-w5">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-apple-garamond font-normal text-on-light mb-8">
              Upcoming Events
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard
                key={index}
                title={event}
                onClick={() => console.log(`Clicked on ${event}`)}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
