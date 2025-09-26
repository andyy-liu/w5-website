import Layout from "../components/Layout";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Clock4 } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="bg-black">
        {/* Hero Section */}
        <section className="bg-white min-h-[35vh] mt-16 flex items-center">
          <div className="container-w5 w-full">
            <div className="max-w-5xl">
              <h1 className="text-7xl md:text-9xl lg:text-10xl font-apple-garamond font-normal text-black">
                About Us
              </h1>
              <p className="text-xl md:text-2xl font-helvetica text-black tracking-tight max-w-6xl">
                Meet the team behind Western's largest entrepreneurial
                community.
              </p>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="bg-white py-12">
          <div className="container-w5">
            <div className="max-w-6xl">
              <div className="inline-flex items-center px-2 py-2 border-round mb-4">
                <span className="text-sm md:text-md font-helvetica text-border mr-2">
                  <Clock4 size={16} />
                </span>
                <span className="text-sm md:text-md font-helvetica text-border">
                  Our Story
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-apple-garamond font-normal text-on-light mb-2">
                History
              </h2>
              <p className="text-lg md:text-xl text-on-light font-helvetica tracking-tight leading-relaxed">
                W5 was founded in 2016 by Braden Ream, Zach Friedman and Kirill
                Kokorin, with the goal of giving idea-stage student
                entrepreneurs the mentorship, accountability, and resources they
                couldn’t find elsewhere on campus. What began as a three-person
                pilot program has since grown into a thriving community of over
                2500 student entrepreneurs, alumni, and mentors.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolios Section - Clickable Grid */}
        <section className="bg-white pb-24 rounded-b-[4rem]">
          <div className="container-w5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Accelerator",
                  color: "#D15B4B",
                  svg: "/accelerator.svg",
                },
                {
                  title: "Catalyst",
                  color: "#D7C16B",
                  svg: "/catalyst.svg",
                },
                {
                  title: "Community",
                  color: "#E6A6C7",
                  svg: "/community.svg",
                },
                {
                  title: "Development",
                  color: "#5BA05B",
                  svg: "/development.svg",
                },
                {
                  title: "Innovation",
                  color: "#5B9ED1",
                  svg: "/innovation.svg",
                },
                {
                  title: "Marketing",
                  color: "#6B5BD1",
                  svg: "/marketing.svg",
                },
              ].map((portfolio, idx) => (
                <div
                  key={portfolio.title}
                  className="rounded-lg cursor-pointer flex flex-col justify-between p-6 h-72 transition-all duration-300 ease-out hover:scale-102 hover:-translate-y-1 hover:shadow-2xl"
                  style={{ background: portfolio.color }}
                  onClick={() =>
                    (window.location.href = `/portfolio/${portfolio.title.toLowerCase()}`)
                  }
                >
                  <div className="flex justify-start">
                    <img
                      src={portfolio.svg}
                      alt={portfolio.title}
                      style={{
                        filter: "invert(1) brightness(2)",
                        width: "2.5em",
                        height: "2.5em",
                        display: "block",
                      }}
                    />
                  </div>
                  <div className="mt-auto">
                    <span className="text-3xl font-helvetica font-medium tracking-tight text-white">
                      {portfolio.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default About;
