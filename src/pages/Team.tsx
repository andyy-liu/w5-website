import Layout from "../components/Layout";
import { TeamMemberCard } from "../components/TeamMemberCard";
import { TEAM_MEMBERS } from "../data/team";

const Team = () => {
  return (
    <Layout>
      <section className="bg-black">
        {/* Hero Section */}
        <section className="bg-cream min-h-[35vh] mt-16 flex items-center">
          <div className="container-w5 w-full">
            <div className="max-w-5xl">
              <h1 className="text-8xl md:text-9xl lg:text-10xl font-apple-garamond font-normal text-black">
                Our Team
              </h1>
              <p className="text-xl md:text-2xl font-helvetica text-black tracking-tight max-w-6xl">
                Meet the passionate individuals driving Western's largest
                entrepreneurial community forward.
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="bg-cream pb-24 rounded-b-[4rem]">
          <div className="container-w5">
            {/* Year Header */}
            <h2 className="text-5xl md:text-6xl font-apple-garamond font-normal text-on-light mb-6">
              2025-2026
            </h2>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {TEAM_MEMBERS.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  member={member}
                />
              ))}
            </div>

            {/* Full Team Photos Section */}
            <div className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/team/full-team.webp"
                    alt="W5 Full Team Photo 2025-2026"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden">
                  <img
                    src="/team/full-team-2.webp"
                    alt="W5 Full Team Photo 2025-2026 - Second Photo"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};

export default Team;
