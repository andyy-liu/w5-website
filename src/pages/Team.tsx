import Layout from "../components/Layout";

const Team = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-hero py-32">
        <div className="container-w5">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-on-gradient leading-tight mb-8">
              Our Team
            </h1>
            <p className="text-xl md:text-2xl text-on-gradient/90 max-w-3xl">
              Meet the passionate individuals driving Western's largest entrepreneurial community forward.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="bg-white py-24">
        <div className="container-w5">
          <div className="text-center">
            <p className="text-lg text-muted mb-8">Coming Soon</p>
            <p className="text-on-light">Our team page is under construction. Check back soon to meet our amazing team!</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;