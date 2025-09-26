import Layout from "../components/Layout";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const portfolios = [
    {
      title: "ACCELERATOR",
      description:
        "The Accelerator portfolio is built for students who are passionate about entrepreneurship and want to be at the forefront of helping new ideas grow into real startups. Accelerator runs high-impact, hands-on events and programs that lower the barrier to building or working in startups. We focus on developing execution skills—across product, marketing, data, and development—through mentorship and community, even before you have an idea in place.",
      events: ["Innovation Sprint", "Accelerator Program", "Event Name"],
    },
    {
      title: "CATALYST",
      description:
        "Catalyst is the operations engine of W5. This portfolio manages everything behind the scenes—from financial planning and grant writing to venue booking and logistics. It’s ideal for detail-oriented students who enjoy structure, organization, and having a direct hand in making events possible. Catalyst also plans a major cross-club event and brand-new VC-focused competition.",
      events: ["Alchemy", "VC Event", "Event Name"],
    },
    {
      title: "COMMUNITY",
      description:
        "Community is the portfolio that unites W5. It focuses on creating a welcoming, inclusive, and engaging environment for both internal members and the broader student body. By organizing social events, mentorship mixers, and community-building initiatives, Community ensures that every member feels connected and part of something bigger.",
      events: ["Summer Dinner", "Annual General Meeting", "Socials"],
    },
    {
      title: "DEVELOPMENT",
      description:
        "The Development portfolio is the powerhouse behind W5’s biggest and most high-profile events. If you're someone who loves detailed planning, working with external partners, and seeing large-scale ideas come to life, this is where you’ll thrive. Development members gain experience in event execution, sponsorship outreach, and corporate relations—skills that are incredibly valuable in any business career.",
      events: ["Summit Case Competition", "Toronto Firms Trip", "Designathon"],
    },
    {
      title: "INNOVATION",
      description:
        "Innovation is where curiosity meets opportunity. Our portfolio is focused on making entrepreneurship accessible and fun by providing hands-on exposure to the startup world. Innovation creates and organizes events that aim to spark the entrepreneurial spirit within students who are curious and want to take the next step.",
      events: ["On The Road", "Steve Jobs Night", "Internship Program"],
    },
    {
      title: "MARKETING",
      description:
        "Marketing is the creative voice of W5. This portfolio brings our events, initiatives, and identity to life through engaging visuals, strong branding, and creative storytelling. You’ll work on everything from Instagram posts and promo videos to full event packages. Marketing members collaborate with every portfolio to promote events and grow W5’s presence.",
      events: ["Figma Workshop", "Designathon", "Marketing Bootcamp"],
    },
  ];

  const location = useLocation();

  const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");
    if (section) {
      // Wait for paint, then scroll
      requestAnimationFrame(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }, [location.search]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero min-h-[86vh] flex items-center">
        <div className="container-w5 w-full">
          <div className="max-w-5xl">
            <h1 className="text-7xl md:text-9xl lg:text-10xl font-apple-garamond font-normal text-on-gradient leading-tight mb-8">
              About Us
            </h1>
            <p className="text-xl md:text-2xl font-helvetica text-white max-w-5xl">
              W5 is Western's largest entrepreneurial community — a launchpad
              for students who want to build, create, and explore bold ideas.
              Through immersive events, real world startup exposure.
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-primary-light/90 py-24">
        <div className="container-w5">
          <div className="max-w-6xl">
            <h2 className="text-5xl md:text-6xl font-apple-garamond font-normal text-on-light mb-8">
              History
            </h2>
            <p className="text-lg md:text-xl text-on-light font-helvetica leading-relaxed">
              W5 was founded in 2016 by Braden Ream, Zach Friedman and Kirill
              Kokokrev, with the goal of giving idea-stage student entrepreneurs
              the mentorship, accountability, and resources they couldn't find
              elsewhere on campus. What began as a three-person pilot project is
              now Western's fastest growing organization with over 2000 student
              entrepreneurs, alumni, and mentors.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolios Section */}
      <section className="bg-primary-light/90 pb-24">
        <div className="container-w5">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-apple-garamond font-normal text-on-light">
              Portfolios
            </h2>
          </div>

          <div className="space-y-24">
            {portfolios.map((portfolio, index) => (
              <div
                key={index}
                id={toSlug(portfolio.title)}
                className="space-y-8 scroll-mt-28"
              >
                <div>
                  <h3 className="text-2xl font-helvetica font-bold text-on-light mb-4">
                    {portfolio.title}
                  </h3>
                  <p className="text-lg md:text-xl text-on-light font-helvetica leading-relaxed max-w-6xl">
                    {portfolio.description}
                  </p>
                </div>

                <div>
                  <p className="text-lg md:text-xl font-helvetica text-on-light mb-6">
                    Events Include:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {portfolio.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="bg-slate-300 rounded-[var(--radius)] h-48 flex items-end p-6"
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
