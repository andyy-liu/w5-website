import Layout from "../components/Layout";

// Team member interface
interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedin?: string;
}

const Team = () => {
  // Team members data - easily editable
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Andy Liu",
      position: "President",
      image: "/photos/andy-headshot.webp",
      linkedin: "https://linkedin.com/in/aliu24",
    },
    {
      id: 2,
      name: "Jessica Chen",
      position: "President",
      image: "/photos/jessica-headshot.webp",
      linkedin: "https://linkedin.com/in/jessicachen",
    },
    {
      id: 3,
      name: "JiaYi Hong",
      position: "VP Accelerator",
      image: "/photos/jiayi-headshot.webp",
      linkedin: "https://linkedin.com/in/jia-yi-hong",
    },
    {
      id: 4,
      name: "Kathy Dong",
      position: "VP Accelerator",
      image: "/photos/kathy-headshot.webp",
      linkedin: "https://linkedin.com/in/kathydong",
    },
    {
      id: 5,
      name: "Anson Wang",
      position: "VP Catalyst",
      image: "/photos/anson-headshot.webp",
      linkedin: "https://linkedin.com/in/ansonwang",
    },
    {
      id: 6,
      name: "Raelyn Xu",
      position: "VP Catalyst",
      image: "/photos/raelyn-headshot.webp",
      linkedin: "https://linkedin.com/in/raelynxu",
    },
    {
      id: 7,
      name: "Clara Chen",
      position: "VP Development",
      image: "/photos/clara-headshot.webp",
      linkedin: "https://linkedin.com/in/clarachen",
    },
    {
      id: 8,
      name: "Harry Yang",
      position: "VP Development",
      image: "/photos/harry-headshot.webp",
      linkedin: "https://linkedin.com/in/harryyang",
    },
    {
      id: 9,
      name: "Albert Zhuang",
      position: "VP Innovation",
      image: "/photos/albert-headshot.webp",
      linkedin: "https://linkedin.com/in/albertzhuang",
    },
    {
      id: 10,
      name: "Arryan Rao",
      position: "VP Innovation",
      image: "/photos/arryan-headshot.webp",
      linkedin: "https://linkedin.com/in/arryanrao",
    },
    {
      id: 11,
      name: "Chloe Zou",
      position: "VP Marketing",
      image: "/photos/chloe-headshot.webp",
      linkedin: "https://linkedin.com/in/chloezou",
    },
    {
      id: 12,
      name: "Lillian Wei",
      position: "VP Marketing",
      image: "/photos/lillian-headshot.webp",
      linkedin: "https://linkedin.com/in/lillianwei",
    },
  ];

  return (
    <Layout>
      <section className="bg-black">
        {/* Hero Section */}
        <section className="bg-cream min-h-[35vh] mt-16 flex items-center">
          <div className="container-w5 w-full">
            <div className="max-w-5xl">
              <h1 className="text-7xl md:text-9xl lg:text-10xl font-apple-garamond font-normal text-black">
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
            <h2 className="text-5xl md:text-6xl font-apple-garamond font-normal text-on-light mb-12">
              2025-2026
            </h2>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="group bg-cream rounded-xl p-4 border-2 border-[#D9D9D9] transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "0 0 8px rgba(0, 4, 0, 0.1)" }}
                >
                  {/* Image Container - Square aspect ratio */}
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 mb-2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover scale-125"
                    />
                  </div>

                  {/* Info Container */}
                  <div>
                    <div className="flex items-center justify-between gap-2 -my-1">
                      <h3 className="text-2xl font-helvetica font-medium text-[#00000A] tracking-tight flex-1 min-w-0">
                        {member.name}
                      </h3>

                      {/* LinkedIn Icon */}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 flex items-center justify-center rounded"
                          aria-label={`${member.name}'s LinkedIn profile`}
                        >
                          <img
                            src="/linkedin.svg"
                            alt="LinkedIn"
                            className="w-7 h-7"
                          />
                        </a>
                      )}
                    </div>
                    <p className="text-md font-helvetica tracking-tight text-[#00000A]/60 -mb-1.5">
                      {member.position}
                    </p>
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

export default Team;
