import Layout from "../components/Layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRound, Rocket, Folder, Calendar } from "lucide-react";
import EventCarousel from "../components/EventCarousel";
import { getFeaturedEvents, PORTFOLIOS } from "../data";

const Home = () => {
  const upcomingEvents = getFeaturedEvents();

  const navigate = useNavigate();

  return (
    <Layout variant="landing">
      <section className="bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-hero min-h-[86vh] flex items-center">
          <div className="container-w5 w-full">
            <div className="flex justify-start">
              <div className="max-w-4xl">
                <h1 className="text-7xl md:text-9xl lg:text-10xl font-apple-garamond font-normal text-cream mb-8">
                  A Startup
                  <br />
                  for Startups.
                </h1>
                <p className="font-helvetica text-xl md:text-3xl tracking-tight font-normal text-cream max-w-4xl">
                  The largest entrepreneurship community at Western University.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Logo Scrolling Section */}
        <section className="bg-cream py-8">
          <div className="overflow-hidden w-full group/sponsors-scroll">
            <div className="relative w-full h-24">
              <div
                className="absolute flex animate-scroll-sponsors"
                style={{ minWidth: "200%", height: "96px" }}
              >
                <img
                  src="/sponsors.png"
                  alt="Sponsors"
                  style={{
                    height: "96px",
                    width: "auto",
                    minWidth: "min-content",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
                <img
                  src="/sponsors.png"
                  alt="Sponsors"
                  style={{
                    height: "96px",
                    width: "auto",
                    minWidth: "min-content",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* What is W5 Section */}
        <section className="bg-cream py-28">
          <div className="container-w5">
            <div className="max-w-5xl">
              <div className="inline-flex items-center px-2 py-2 border-round mb-4">
                <span className="text-sm md:text-md font-helvetica text-border mr-2">
                  <UserRound size={16} />
                </span>
                <span className="text-sm md:text-md font-helvetica text-border">
                  What is W5?
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-apple-garamond font-normal text-on-light mb-2">
                A launchpad for students who want to{" "}
                <em className="italic">build, create,</em> and{" "}
                <em className="italic">explore</em> bold ideas.
              </h2>
              <p className="font-helvetica text-md md:text-xl text-on-light leading-relaxed tracking-tight max-w-3xl">
                Through immersive events, real-world startup exposure, and a
                tight-knit peer network, we're here to help students turn
                curiosity into action.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="bg-cream py-16 md:py-28">
          <div className="container-w5">
            <div className="text-center mx-auto max-w-4xl">
              <div className="inline-flex items-center border-round px-2 py-2 mb-2">
                <span className="text-sm md:text-md font-helvetica text-border mr-2">
                  <Rocket size={16} />
                </span>
                <span className="text-sm md:text-md font-helvetica text-border">
                  Our Mission
                </span>
              </div>
              <h2 className="font-apple-garamond font-normal text-on-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl break-normal mx-auto">
                To make entrepreneurship accessible for{" "}
                <em className="italic">everyone.</em>
              </h2>
            </div>
          </div>
        </section>

        {/* Portfolios Section */}
        {/* Portfolios Section */}
        <section className="bg-cream py-24">
          <div className="container-w5">
            <div className="mb-4">
              <div className="inline-flex items-center border-round mb-2">
                <span className="text-sm md:text-md font-helvetica text-border mr-2">
                  <Folder size={16} />
                </span>
                <span className="text-sm md:text-md font-helvetica text-border">
                  Portfolios
                </span>
              </div>
              <p className="text-md md:text-xl font-helvetica tracking-tight max-w-2xl">
                W5 functions through 6 portfolios.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PORTFOLIOS.map((portfolio) => (
                <div
                  key={portfolio.id}
                  className="bg-cream rounded-lg transition duration-300 transform hover:translate-y-[-4px] cursor-pointer"
                  onClick={() => navigate(`/portfolio/${portfolio.id}`)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gray-200 rounded-lg aspect-square w-28 flex items-center justify-center flex-shrink-0">
                      <span className="text-4xl flex items-center justify-center">
                        <img
                          src={portfolio.icon}
                          alt={portfolio.name}
                          className="transition-transform duration-300 group-hover:scale-110"
                          style={{
                            filter: "brightness(2)",
                            width: "1.25em",
                            height: "1.25em",
                            display: "block",
                          }}
                        />
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-helvetica font-normal tracking-tighter text-on-light">
                        {portfolio.name}
                      </h3>
                      <p className="text-sm/4 md:text-sm font-helvetica text-gray-600 tracking-tight leading-snug">
                        {portfolio.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Carousel Section */}
        <section className="bg-cream py-24 relative">
          <div className="container-w5">
            <div className="flex justify-center mb-2">
              <div className="inline-flex items-center border-round">
                <span className="text-sm md:text-md font-helvetica text-border mr-2">
                  <Calendar size={16} />
                </span>
                <span className="text-sm md:text-md font-helvetica text-border">
                  Events
                </span>
              </div>
            </div>
          </div>
          <EventCarousel events={upcomingEvents} />
        </section>
        <section className="bg-cream py-16 md:py-28 rounded-b-[4rem]">
          <div className="container-w5">
            <div className="text-center mx-auto max-w-4xl">
              <h2 className="font-helvetica font-medium text-on-light text-xl sm:text-2xl md:text-4xl tracking-tight mx-auto mb-6">
                A Startup for Startups.
              </h2>
              <a
                href="https://buy.stripe.com/dRm8wO4ZMcYAcjrdKTaAw00"
                target="_blank"
                rel="noopener noreferrer"
                className="md:inline-flex font-helvetica btn-w5-primary text-white text-sm md:text-base"
              >
                Join Us!
              </a>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Home;
