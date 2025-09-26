import Layout from "../components/Layout";
import PortfolioCard from "../components/PortfolioCard";
import { useState } from "react";

const Home = () => {
  const sponsors = [
    "Deloitte",
    "RBC",
    "TD",
    "KPMG",
    "BDO",
    "BMO",
    "PwC",
    "BCG",
    "Accenture",
    "Amazon",
    "Uber",
    "Adobe",
  ];

  // Track which portfolio is currently active (shows primary variant)
  const [activePortfolio, setActivePortfolio] = useState<string>("Accelerator");

  const portfolios = [
    "Accelerator",
    "Catalyst",
    "Community",
    "Development",
    "Innovation",
    "Marketing",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero min-h-[86vh] flex items-center">
        <div className="container-w5 w-full">
          <div className="flex justify-start">
            <div className="max-w-4xl">
              <h1 className="text-7xl md:text-9xl lg:text-10xl font-apple-garamond font-normal text-on-gradient mb-8">
                A Startup
                <br />
                for Startups.
              </h1>
              <p className="font-helvetica text-xl md:text-3xl font-normal text-[#FFFFFF] text-on-gradient/90 max-w-4xl">
                The largest entrepreneurship community at Western University.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-primary-light/90 py-12">
        <div className="container-w5">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex-shrink-0"
              >
                <span className="text-base md:text-lg font-medium text-on-light whitespace-nowrap">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is W5 Section */}
      <section className="bg-primary-light/90 py-24">
        <div className="container-w5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-apple-garamond font-600 text-on-light mb-8">
                What is W5?
              </h2>
              <p className="font-helvetica text-lg md:text-xl text-on-light leading-relaxed">
                W5 is Western's largest entrepreneurial community — a launchpad
                for students who want to build, create, and explore bold ideas.
                Through immersive events, real-world startup exposure, and a
                tight-knit peer network, we're here to help students turn
                curiosity into action.
              </p>
            </div>
            <div className="bg-gray-300 rounded-[var(--radius)] h-64 lg:h-80"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-primary-light/90 py-16 md:py-24">
        <div className="container-w5">
          <div className="bg-muted rounded-[var(--radius)] p-8 md:p-16 lg:p-24">
            <div className="text-center mx-auto max-w-5xl">
              <p className="md:text-2xl font-helvetica text-on-light mb-4 md:mb-6 tracking-wide">
                Our Mission
              </p>
              <h2 className="font-apple-garamond font-normal text-on-light leading-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl break-normal mx-auto">
                To make entrepreneurship accessible to everyone.
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolios Section */}
      <section className="bg-primary-light/90 py-24">
        <div className="container-w5">
          <div className="mb-16">
            <h2 className="text-5xl font-apple-garamond md:text-6xl font-normal text-on-light mb-4">
              Our Portfolios
            </h2>
            <p className="text-xl text-on-light">
              Want to know what each of W5's portfolios does blah blah blah?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolios.map((p) => (
              <PortfolioCard
                key={p}
                title={p}
                variant={activePortfolio === p ? "primary" : "secondary"}
                onMouseEnter={() => setActivePortfolio(p)}
                onClick={() => setActivePortfolio(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section with placeholders */}
      <section className="bg-primary-light/90 py-24">
        <div className="container-w5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-300 rounded-[var(--radius)] h-64"></div>
            <div className="bg-gray-300 rounded-[var(--radius)] h-64"></div>
            <div className="bg-gray-300 rounded-[var(--radius)] h-64"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
