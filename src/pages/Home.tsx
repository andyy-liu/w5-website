import Layout from "../components/Layout";
import PortfolioCard from "../components/PortfolioCard";

const Home = () => {
  const sponsors = [
    "Deloitte", "RBC", "TD", "KPMG", "BDO", "BMO", "PwC", "BCG", 
    "Accenture", "Amazon", "Uber", "Adobe", "Microsoft"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero min-h-[80vh] flex items-center">
        <div className="container-w5">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-on-gradient leading-tight mb-8">
              A Startup<br />
              for Startups.
            </h1>
            <p className="text-xl md:text-2xl text-on-gradient/90 max-w-2xl">
              The largest entrepreneurship community at Western University.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="bg-white py-12">
        <div className="container-w5">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="flex-shrink-0">
                <span className="text-base md:text-lg font-medium text-muted whitespace-nowrap">
                  {sponsor}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What is W5 Section */}
      <section className="bg-white py-24">
        <div className="container-w5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-light mb-8">
                What is W5?
              </h2>
              <p className="text-lg text-on-light leading-relaxed">
                W5 is Western's largest entrepreneurial community — a launchpad for students who want 
                to build, create, and explore bold ideas. Through immersive events, real-world startup 
                exposure, and a tight-knit peer network, we're here to help students turn curiosity into action.
              </p>
            </div>
            <div className="bg-gray-300 rounded-[var(--radius)] h-64 lg:h-80"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-muted py-24">
        <div className="container-w5">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg text-on-light mb-6">Our Mission</p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-on-light leading-tight">
              To make entrepreneurship accessible to everyone.
            </h2>
          </div>
        </div>
      </section>

      {/* Portfolios Section */}
      <section className="bg-white py-24">
        <div className="container-w5">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-on-light mb-4">
              Our Portfolios
            </h2>
            <p className="text-lg text-muted">
              Want to know what each of W5's portfolios does blah blah blah?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PortfolioCard title="Accelerator" variant="primary" />
            <PortfolioCard title="Accelerator" />
            <PortfolioCard title="Accelerator" />
            <PortfolioCard title="Accelerator" />
            <PortfolioCard title="Accelerator" />
            <PortfolioCard title="Accelerator" />
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