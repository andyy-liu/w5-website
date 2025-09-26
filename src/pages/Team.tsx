import Layout from "../components/Layout";

const Team = () => {
  return (
    <Layout>
      <section className="bg-black">
        {/* Hero Section */}
        <section className="bg-gradient-hero min-h-[86vh] flex items-center">
          <div className="container-w5 w-full">
            <div className="max-w-4xl">
              <h1 className="text-7xl md:text-9xl lg:text-10xl font-apple-garamond font-normal text-on-gradient leading-tight mb-8">
                Our Team
              </h1>
              <p className="text-xl md:text-2xl font-helvetica text-white font-normal max-w-4xl">
                Meet the passionate individuals driving Western's largest
                entrepreneurial community forward.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="bg-white py-24 rounded-b-[4rem]">
          <div className="container-w5">
            <div className="text-center">
              <p className="text-lg text-muted mb-8">Coming Soon</p>
              <p className="text-on-light">
                Our team page is under construction. Check back soon to meet our
                amazing team!
              </p>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Team;
