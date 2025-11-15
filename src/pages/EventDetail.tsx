import { useParams } from "react-router-dom";
import { Network, Calendar } from "lucide-react";
import Layout from "../components/Layout";
import { getEventById, getPortfolioByName } from "../data";

const EventDetail = () => {
  const { eventId } = useParams<{ eventId: string }>();

  const event = getEventById(eventId || "");
  const portfolio = event ? getPortfolioByName(event.portfolio) : null;

  // Define consistent sections structure
  const sections = event
    ? [
        {
          title: `What is ${event.title}?`,
          content: event.whatIs,
          tag: "Core Functions",
        },
        {
          title: `Why ${event.title}?`,
          content: event.why,
          tag: null,
        },
        {
          title: "Additional Details",
          content: event.additionalDetails,
          tag: "Event Info",
        },
        {
          title: "Images",
          content: event.images,
          tag: null,
        },
      ]
    : [];

  if (!event) {
    return (
      <Layout>
        <div className="bg-cream min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-apple-garamond text-black mb-4">
              Event Not Found
            </h1>
            <p className="text-lg font-helvetica text-gray-600">
              The event you're looking for doesn't exist.
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
                {event.title}
              </h1>
              {portfolio && (
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-2xl text-sm font-normal tracking-tight text-black mb-6"
                  style={{
                    backgroundColor: `${portfolio.color}50`,
                  }}
                >
                  <img
                    src={portfolio.icon}
                    alt={`${portfolio.name} icon`}
                    className="w-4 h-4"
                  />
                  {portfolio.name.toUpperCase()}
                </div>
              )}
            </div>

            {/* Content Sections */}
            <div className="space-y-16">
              {sections.map((section, index: number) => (
                <div
                  key={index}
                  className="max-w-full"
                >
                  {section.tag && portfolio && (
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
                        ) : section.tag === "Event Info" ? (
                          <Calendar size={16} />
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
                  {section.title === "Additional Details" ? (
                    <div className="text-base md:text-lg font-helvetica text-black/70 tracking-tight leading-relaxed">
                      {(typeof section.content === "string"
                        ? section.content
                        : section.content.join("\n")
                      )
                        .split("\n")
                        .map((line: string, lineIndex: number) => (
                          <div
                            key={lineIndex}
                            className="mb-2"
                          >
                            {line.trim()}
                          </div>
                        ))}
                    </div>
                  ) : section.title === "Images" ? (
                    <div>
                      {event.images && event.images.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                          {event.images.map(
                            (image: string, imageIndex: number) => (
                              <div
                                key={imageIndex}
                                className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 hover:scale-[1.01] transition-transform duration-300"
                              >
                                <img
                                  src={image}
                                  alt={`${event.title} - Image ${
                                    imageIndex + 1
                                  }`}
                                  className="w-full h-full object-cover "
                                />
                              </div>
                            )
                          )}
                        </div>
                      ) : (
                        <p className="text-base md:text-lg font-helvetica text-black/40 tracking-tight leading-relaxed italic">
                          No images available for this event.
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

export default EventDetail;
