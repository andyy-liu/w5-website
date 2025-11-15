import { useParams } from "react-router-dom";
import { Network, Calendar, Users, Target } from "lucide-react";
import Layout from "../components/Layout";
import { getPortfolioById, getEventsByPortfolio } from "../data";

const PortfolioDetail = () => {
  const { portfolioId } = useParams<{ portfolioId: string }>();

  const portfolio = getPortfolioById(portfolioId || "");
  const portfolioEvents = portfolio ? getEventsByPortfolio(portfolio.name) : [];

  // Define consistent sections structure
  const sections = portfolio
    ? [
        {
          title: `What Does ${portfolio.name} Do?`,
          content: portfolio.whatDo,
          tag: "Core Functions",
        },
        {
          title: `Join ${portfolio.name} if`,
          content: portfolio.joinIf,
          tag: null,
        },
        {
          title: "Events",
          content: portfolio.events,
          tag: "Events",
        },
        {
          title: "Team",
          content: portfolio.teamImages,
          tag: null,
        },
      ]
    : [];

  if (!portfolio) {
    return (
      <Layout>
        <div className="bg-cream min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-apple-garamond text-black mb-4">
              Portfolio Not Found
            </h1>
            <p className="text-lg font-helvetica text-gray-600">
              The portfolio you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-black">
        <section className="bg-cream min-h-screen pt-48 pb-24 rounded-b-[4rem]">
          <div className="container-w5">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-apple-garamond font-normal text-black mb-4">
                {portfolio.name}
              </h1>
            </div>

            {/* Content Sections */}
            <div className="space-y-16">
              {sections.map((section, index: number) => (
                <div
                  key={index}
                  className="max-w-full"
                >
                  {section.tag && (
                    <div
                      className="inline-flex items-center px-2 py-2 mb-4"
                      style={{
                        border: `1px solid ${portfolio.color}`,
                        borderRadius: "9999px",
                      }}
                    >
                      <span
                        className="text-sm md:text-md font-helvetica mr-2"
                        style={{
                          color: portfolio.color,
                        }}
                      >
                        {section.tag === "Core Functions" ? (
                          <Network size={16} />
                        ) : section.tag === "Events" ? (
                          <Calendar size={16} />
                        ) : section.tag === "Team" ? (
                          <Users size={16} />
                        ) : null}
                      </span>
                      <span
                        className="text-sm md:text-md font-helvetica tracking-tight"
                        style={{
                          color: portfolio.color,
                        }}
                      >
                        {section.tag}
                      </span>
                    </div>
                  )}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-apple-garamond font-normal text-black mb-4">
                    {section.title}
                  </h2>
                  {section.title === "Events" ? (
                    <div>
                      {portfolioEvents && portfolioEvents.length > 0 ? (
                        <div className="space-y-4">
                          {portfolioEvents.map((event, eventIndex: number) => (
                            <div
                              key={eventIndex}
                              className="p-4 bg-cream rounded-lg border-2 border-[#D9D9D9] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5"
                              style={{
                                boxShadow: "0 0 8px rgba(0, 4, 0, 0.1)",
                              }}
                              onClick={() =>
                                (window.location.href = `/events/${event.id}`)
                              }
                            >
                              <h3 className="text-lg font-helvetica font-medium text-black mb-1">
                                {event.title}
                              </h3>
                              <p className="text-sm font-helvetica text-gray-600 mb-1">
                                {event.date}
                              </p>
                              <p className="text-base font-helvetica text-black/70">
                                {event.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-base md:text-lg font-helvetica text-black/40 tracking-tight leading-relaxed italic">
                          No events available for this portfolio.
                        </p>
                      )}
                    </div>
                  ) : section.title === "Team" ? (
                    <div>
                      {portfolio.teamImages &&
                      portfolio.teamImages.length > 0 ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                          {portfolio.teamImages.map(
                            (image: string, imageIndex: number) => (
                              <div
                                key={imageIndex}
                                className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 hover:scale-[1.01] transition-transform duration-300"
                              >
                                <img
                                  src={image}
                                  alt={`${portfolio.name} team photo ${
                                    imageIndex + 1
                                  }`}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )
                          )}
                        </div>
                      ) : (
                        <p className="text-base md:text-lg font-helvetica text-black/40 tracking-tight leading-relaxed italic">
                          No team images available for this portfolio.
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="text-base md:text-lg font-helvetica text-black/70 tracking-tight leading-relaxed">
                      {section.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PortfolioDetail;
