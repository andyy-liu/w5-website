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
    "Designathon"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-32">
        <div className="container-w5">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-on-gradient leading-tight mb-8">
              Sign Up For<br />
              Our Events
            </h1>
            <p className="text-xl md:text-2xl text-on-gradient/90 max-w-3xl">
              W5 is Western's largest entrepreneurial community — a launchpad for students who want 
              to build, create, and explore bold ideas. Through immersive events, real-world startup 
              exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-white py-24">
        <div className="container-w5">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-light">
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