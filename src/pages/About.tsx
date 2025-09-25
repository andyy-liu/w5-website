import Layout from "../components/Layout";

const About = () => {
  const portfolios = [
    {
      title: "ACCELERATOR",
      description: "The Accelerator portfolio is built for students who are passionate about entrepreneurship and want to be at the forefront of helping new ideas grow into real startups. Accelerator runs high-impact, hands-on events and programs that lower the barrier to building or working in startups.",
      events: ["Event Name", "Event Name", "Event Name"]
    },
    {
      title: "ACCELERATOR",
      description: "The Accelerator portfolio is built for students who are passionate about entrepreneurship and want to be at the forefront of helping new ideas grow into real startups. Accelerator runs high-impact, hands-on events and programs that lower the barrier to building or working in startups.",
      events: ["Event Name", "Event Name", "Event Name"]
    },
    {
      title: "ACCELERATOR",
      description: "The Accelerator portfolio is built for students who are passionate about entrepreneurship and want to be at the forefront of helping new ideas grow into real startups. Accelerator runs high-impact, hands-on events and programs that lower the barrier to building or working in startups.",
      events: ["Event Name", "Event Name", "Event Name"]
    },
    {
      title: "ACCELERATOR",
      description: "The Accelerator portfolio is built for students who are passionate about entrepreneurship and want to be at the forefront of helping new ideas grow into real startups. Accelerator runs high-impact, hands-on events and programs that lower the barrier to building or working in startups.",
      events: ["Event Name", "Event Name", "Event Name"]
    },
    {
      title: "ACCELERATOR",
      description: "The Accelerator portfolio is built for students who are passionate about entrepreneurship and want to be at the forefront of helping new ideas grow into real startups. Accelerator runs high-impact, hands-on events and programs that lower the barrier to building or working in startups.",
      events: ["Event Name", "Event Name", "Event Name"]
    },
    {
      title: "ACCELERATOR",
      description: "The Accelerator portfolio is built for students who are passionate about entrepreneurship and want to be at the forefront of helping new ideas grow into real startups. Accelerator runs high-impact, hands-on events and programs that lower the barrier to building or working in startups.",
      events: ["Event Name", "Event Name", "Event Name"]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-32">
        <div className="container-w5">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-on-gradient leading-tight mb-8">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-on-gradient/90 max-w-3xl">
              W5 is Western's largest entrepreneurial community — a launchpad for students who want 
              to build, create, and explore bold ideas. Through immersive events, real world startup 
              exposure.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white py-24">
        <div className="container-w5">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-light mb-8">
              History
            </h2>
            <p className="text-lg text-on-light leading-relaxed">
              W5 was founded in 2016 by Braden Ream, Zach Friedman and Kirill Kokokrev, with the goal 
              of giving idea-stage student entrepreneurs the mentorship, accountability, and resources 
              they couldn't find elsewhere on campus. What began as a three-person pilot project is 
              now Western's fastest growing organization with over 2000 student entrepreneurs, alumni, and 
              mentors.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolios Section */}
      <section className="bg-white pb-24">
        <div className="container-w5">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-light">
              Portfolios
            </h2>
          </div>

          <div className="space-y-24">
            {portfolios.map((portfolio, index) => (
              <div key={index} className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-on-light mb-4">
                    {portfolio.title}
                  </h3>
                  <p className="text-lg text-on-light leading-relaxed max-w-4xl">
                    {portfolio.description}
                  </p>
                </div>
                
                <div>
                  <p className="text-lg text-on-light mb-6">Events Include:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {portfolio.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="bg-primary/10 rounded-[var(--radius)] h-48 flex items-end p-6"
                      >
                        <span className="text-xl font-medium text-on-light">
                          {event}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;