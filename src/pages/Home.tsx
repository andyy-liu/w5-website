import Layout from "../components/Layout";
import PortfolioCard from "../components/PortfolioCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRound, Rocket } from "lucide-react";

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

  const navigate = useNavigate();

  const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Layout variant="landing">
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
      <section className="bg-white py-12">
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
      <section className="bg-white py-28">
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
      <section className="bg-white py-16 md:py-28">
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
      <section className="bg-white py-24">
        <div className="container-w5">
          <div className="mb-4">
            <div className="inline-flex items-center border-round mb-2">
              <span className="text-sm md:text-md font-helvetica text-border mr-2">
                📁
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
            <div
              className="bg-white rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => navigate(`/about?section=accelerator`)}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gray-200 rounded-lg aspect-square w-28 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">🏃</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-helvetica font-normal tracking-tighter text-on-light">
                    Accelerator
                  </h3>
                  <p className="text-sm font-helvetica text-gray-600 leading-snug">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg  hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => navigate(`/about?section=catalyst`)}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gray-200 rounded-lg aspect-square w-28 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">⚡</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-helvetica font-normal tracking-tighter text-on-light ">
                    Catalyst
                  </h3>
                  <p className="text-sm font-helvetica text-gray-600 leading-snug">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg  hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => navigate(`/about?section=community`)}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gray-200 rounded-lg aspect-square w-28 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">👥</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-helvetica font-normal tracking-tighter text-on-light ">
                    Community
                  </h3>
                  <p className="text-sm font-helvetica text-gray-600 leading-snug">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg  hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => navigate(`/about?section=development`)}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gray-200 rounded-lg aspect-square w-28 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">⚙️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-helvetica font-normal tracking-tighter text-on-light ">
                    Development
                  </h3>
                  <p className="text-sm font-helvetica text-gray-600 leading-snug">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg  hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => navigate(`/about?section=innovation`)}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gray-200 rounded-lg aspect-square w-28 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">💡</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-helvetica font-normal tracking-tighter text-on-light ">
                    Innovation
                  </h3>
                  <p className="text-sm font-helvetica text-on-light/30 leading-snug">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-white rounded-lg  hover:bg-gray-50 transition-colors cursor-pointer"
              onClick={() => navigate(`/about?section=marketing`)}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gray-200 rounded-lg aspect-square w-28 flex items-center justify-center flex-shrink-0">
                  <span className="text-4xl">🎯</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl  font-helvetica font-normal tracking-tighter text-on-light ">
                    Marketing
                  </h3>
                  <p className="text-sm font-helvetica text-gray-600 leading-snug">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section with placeholders */}
      <section className="bg-white py-24">
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
