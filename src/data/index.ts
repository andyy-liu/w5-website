// Portfolio Types
export interface Portfolio {
  id: string;
  name: string;
  color: string;
  description: string;
  icon: string;
  path: string;
  // Portfolio detail specific fields
  whatDo?: string;
  events?: string[];
  joinIf?: string;
  teamImages?: string[];
}

// Event Types
export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  portfolio: string;
  image?: string;
  register?: string;
  isRegistrationOpen?: boolean;
  // Event detail specific fields
  whatIs?: string;
  why?: string;
  additionalDetails?: string;
  images?: string[];
}

// Team Member Types
export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedin?: string;
}

// Portfolio Data
export const PORTFOLIOS: Portfolio[] = [
  {
    id: "accelerator",
    name: "Accelerator",
    color: "#D15B4B",
    description: "Accelerator is for students who are passionate about entrepreneurship and want to be at the forefront of helping new ideas grow into real startups.",
    icon: "/accelerator.svg",
    path: "/about?section=accelerator",
    whatDo: "The Accelerator portfolio is built for students who are passionate about entrepreneurship and want to be at the forefront of helping new ideas grow into real startups. Accelerator runs high-impact, hands-on events and programs that lower the barrier to building or working in startups.",
    joinIf: "you want to see real businesses take shape, and give firsthand experience in startup development, mentorship planning, and program execution.",
    teamImages: ["/team/accelerator-1.webp", "/team/accelerator-2.webp"]
  },
  {
    id: "catalyst",
    name: "Catalyst",
    color: "#D7C16B",
    description: "Catalyst is the operations engine of W5, managing everything behind the scenes—from financials and grant writing to venue booking and logistics.",
    icon: "/catalyst.svg",
    path: "/about?section=catalyst",
    whatDo: "Catalyst is the operations engine of W5, managing everything behind the scenes—from financial planning and grant writing to venue booking and logistics. We ensure smooth operations across all portfolios and maintain the infrastructure that keeps W5 running effectively.",
    joinIf: "you’re interested in developing hands-on skills in finance, logistics, and operational planning—all while being at the core of everything W5 does.",
    teamImages: ["/team/catalyst-1.webp", "/team/catalyst-2.webp"]
  },
  {
    id: "community",
    name: "Community",
    color: "#E6A6C7",
    description: "Community is the portfolio that unites W5. It focuses on creating an inclusive environment for both internal members and the broader student body.",
    icon: "/community.svg",
    path: "/about?section=community",
    whatDo: "Community is the portfolio that unites W5. It focuses on creating a welcoming, inclusive, and engaging environment for both internal members and the broader student body. By organizing social events, mentorship mixers, and community-building initiatives, Community ensures that every member feels connected and part of something bigger.",
    joinIf: "you love planning meaningful events and helping foster a strong sense of belonging and culture in W5.",
    teamImages: ["/team/community-1.webp", "/team/community-2.webp"]
  },
  {
    id: "development",
    name: "Development",
    color: "#5BA05B",
    description: "The Development portfolio is the powerhouse behind W5's most high-profile events, leading major projects and initiatives that make a real impact.",
    icon: "/development.svg",
    path: "/about?section=development",
    whatDo: "The Development portfolio is the powerhouse behind W5’s biggest and most high-profile events. If you're someone who loves detailed planning, working with external partners, and seeing large-scale ideas come to life, this is where you’ll thrive. Development members gain experience in event execution, sponsorship outreach, and corporate relations.",
    joinIf: "you want to lead major projects, build relationships with corporate partners, and run events that make a real impact at Western.",
    teamImages: ["/team/development-1.webp", "/team/development-2.webp"]
  },
  {
    id: "innovation",
    name: "Innovation",
    color: "#5B9ED1",
    description: "Innovation is where curiosity meets opportunity; hosting events to cultivate the entrepreneurial spirit in students who want to take the next step.",
    icon: "/innovation.svg",
    path: "/about?section=innovation",
    whatDo: "Innovation is where curiosity meets opportunity. Our portfolio is focused on making entrepreneurship accessible and fun by providing hands-on exposure to the startup world. Innovation creates and organizes events that aim to spark the entrepreneurial spirit within students who are curious and want to take the next step.",
    joinIf: "you love brainstorming innovative and original event ideas that cater to those lesser-explored niches.",
    teamImages: ["/team/innovation-1.webp", "/team/innovation-2.webp"]
  },
  {
    id: "marketing",
    name: "Marketing",
    color: "#6B5BD1",
    description: "Marketing is the creative voice of W5. It's how people hear about us; through eye-catching visuals, clever branding, and engaging campaigns.",
    icon: "/marketing.svg",
    path: "/about?section=marketing",
    whatDo: "Marketing is the creative voice of W5. It’s how people hear about our initiatives; through eye-catching visuals, clever branding, and engaging campaigns. From Instagram posts to design events, we work with every portfolio to share what’s happening and grow W5’s presence across campus.",
    joinIf: "you want to push creative boundaries in innovative ways and bring more design opportunities to Western.",
    teamImages: ["/team/marketing-1.webp", "/team/marketing-2.webp"]
  }
];

// Event Data
export const EVENTS: Event[] = [
  {
    id: "on-the-road",
    title: "On The Road",
    date: "August 15, 2025",
    description: "Come to On The Road, W5’s first in-person event of the summer—a chance to gain a deeper insight into what working at a startup is actually like.",
    portfolio: "INNOVATION",
    image: "/events/otr-1.webp",
    register: "https://example.com/register-agm",
    isRegistrationOpen: false,
    whatIs: "On The Road (OTR) is a trip to some of Toronto’s most exciting high-growth startups. Participants will visit multiple companies, meet the teams building them, and hear candid stories about product development, scaling, fundraising, and company culture. Whether you’re curious about entrepreneurship or just want a fresh perspective, this event immerses you directly into the space.",
    why: "On The Road gives you personal access to Toronto’s startup culture. You’ll experience company culture up close, ask real questions, and see how different teams within the firm think, build, and execute. Past tours have featured networking sessions, exclusive hiring insights, and behind-the-scenes looks at operations that you won’t find at typical networking events. ",
    additionalDetails: "Date: August 15th \n Time: 1:00 - 4:00PM \n Location: Downtown Toronto \n Cost: Free for all students \n Attendance: Open to all Western University students interested in entrepreneurship.",
    images: ["/events/otr-1.webp", "/events/otr-2.webp", "/events/otr-3.webp", "/events/otr-4.webp", "/events/otr-5.webp", "/events/otr-6.webp"]
  },
  {
    id: "summer-dinner",
    title: "Summer Dinner",
    date: "August 16, 2025",
    description: "A summer meetup for incoming Western students to learn about W5, connect with our team, and hear insights from one of our founders.",
    portfolio: "COMMUNITY",
    image: "/events/summer-dinner-1.webp",
    register: "https://example.com/register-agm",
    isRegistrationOpen: false,
    whatIs: "Summer Dinner is an early touchpoint for new Western students entering first year. The event brings together the internal executive team, eager incoming students, and a W5 founder for an evening of conversation and community. Guests enjoy dinner, network with peers, and take part in a fireside chat with Braden Ream, gaining an inside look at W5 and the people behind it.",
    why: "Summer Dinner gives first-year students a chance to plug into Western’s entrepreneurial ecosystem before classes even begin. It creates space to meet the executive team, build early mentorship connections, and learn the story behind W5 from one of its founders. It’s the first large-scale introduction to the club and a meaningful starting point for anyone curious about entrepreneurship at Western.",
    additionalDetails: "Date: August 16th \n Time: 6:00PM - 8:00PM \n Location: Voiceflow Office (30 Duncan Street) \n Cost: Free for all students \n Attendance: Open to all incoming first-year Western University students.",
    images: ["/events/summer-dinner-1.webp", "/events/summer-dinner-2.webp", "/events/summer-dinner-3.webp", "/events/summer-dinner-4.webp", "/events/summer-dinner-5.webp", "/events/summer-dinner-6.webp", "/events/summer-dinner-7.webp", "/events/summer-dinner-8.webp", "/events/summer-dinner-9.webp"]
  },
  {
    id: "annual-general-meeting",
    title: "Annual General Meeting",
    date: "September 13, 2025",
    description: "Kick off the year with W5's Annual General Meeting; an opportunity to learn about our mission, meet the executive team, and explore ways to get involved.",
    portfolio: "COMMUNITY",
    image: "/events/agm-2.webp",
    register: "https://example.com/register-agm",
    isRegistrationOpen: false,
    whatIs: "The Annual General Meeting (AGM) marks the start of W5’s academic year. It brings together over 150 students to hear from the executive team about W5’s mission, structure, and the initiatives led by each portfolio. Attendees gain an inside look at how the club operates and what it means to be part of Western’s entrepreneurial community.",
    why: "The AGM is the best place to connect directly with the executive team before director applications open. Unlike other large-scale events or coffee chats, the AGM offers access to the entire executive team - giving you the chance to ask questions, build connections, and find your fit within the club early on.",
    additionalDetails: "Date: September 13th \n Time: 2:00PM - 4:00PM \n Location: Morrissette Institute for Entrepreneurship \n Cost: Free for all students \n Attendance: Open to all Western University students interested in entrepreneurship.",
    images: ["/events/agm-1.webp", "/events/agm-2.webp", "/events/agm-3.webp", "/events/agm-4.webp", "/events/agm-5.webp", "/events/agm-6.webp", "/events/agm-7.webp", "/events/agm-8.webp", "/events/agm-9.webp"]
  },
  {
    id: "summit-case-competition",
    title: "Summit Case Competition",
    date: "October 3–4, 2025",
    description: "Compete in W5's flagship event—Summit Case Competition, Western's largest beginner friendly case competition bringing together top students and industry leaders.",
    portfolio: "DEVELOPMENT",
    image: "/events/summit.jpg",
    register: "https://example.com/register-summit",
    isRegistrationOpen: false,
    whatIs: "Summit Case Competition is W5's annual flagship event, drawing over 100 competitors. Whether you're a first-time participant or a regular case competitor, Summit offers a platform to showcase your analytical and presentation skills. Over 24 hours, students take on a case and present their solutions to representatives from leading firms such as Boston Consulting Group (BCG), Deloitte, and Bank of Montreal (BMO).",
    why: "Summit is the first case competition of the school year, designed to help students build confidence, develop problem-solving skills, and connect with industry leaders. Through guided workshops, mentorship, and resource drives, competitors gain the tools to craft impactful presentations and tackle business challenges with confidence.",
    additionalDetails: "Date: October 4th \n Time: 8:00AM - 6:00PM \n Location: Morrissette Institute for Entrepreneurship & Somerville House \n Cost: $20 for members and $25 for non-members \n Attendance: Open to students of all academic years and programs that register.",
    images: ["/events/summit.jpg", "/events/summit-2.webp", "/events/summit-3.webp"]
  },
  {
    id: "steve-jobs-night",
    title: "Steve Jobs Night",
    date: "October 10, 2025",
    description: "Steve Jobs Night is a casual pitch competition where students come to sharpen their pitch competition skills, meet other students, and potentially win prizes.",
    portfolio: "INNOVATION",
    image: "/events/steve-jobs-3.webp",
    register: "https://example.com/register-steve-jobs",
    isRegistrationOpen: false,
    whatIs: "During Steve Jobs Night, students pitch a product based on various different factors such as industry, product, and target demographic. While preparing, students will be met with the challenge of building a physical prototype with random items. Whether you are curious about entrepreneurship or want to improve your case competition skills, Steve Jobs Night is here to spark that passion.",
    why: "Steve Jobs Night aims to provide a casual environment for students to practice their presentation and case competition skills, students walk away with a unique experience and get to be hands on with their product building in a fun environment.",
    additionalDetails: "Date: October 9th \n Time: 6:00 - 8:00PM \n Location: Social Science Centre \n Cost: Free for all students \n Attendance: Open to all Western University students.",
    images: ["/events/steve-jobs-1.webp", "/events/steve-jobs-2.webp", "/events/steve-jobs-3.webp", "/events/steve-jobs-4.webp", "/events/steve-jobs-5.webp", "/events/steve-jobs-6.webp", "/events/steve-jobs-7.webp", "/events/steve-jobs-8.webp", "/events/steve-jobs-9.webp"]
  },
  {
    id: "careers-panel",
    title: "Careers Panel",
    date: "October 28-29, 2025",
    description: "Discover diverse career paths at Careers Panel—a two-day event connecting students with HBA1 and HBA2 mentors in finance, consulting, tech, and entrepreneurship.",
    portfolio: "DEVELOPMENT",
    image: "/events/careers-panel.webp",
    register: "https://example.com/register-careers",
    isRegistrationOpen: false,
    whatIs: "Careers Panel is a collaborative event between W5, PBSN, and WFN designed to help students explore a wide range of career opportunities. Over two days, 12 HBA1 and HBA2 students share their experiences—discussing what motivated their career choices, how they navigated recruitment, and what it’s like working in their respective fields.",
    why: "Many incoming business students at Western begin their journey with a limited view of available career paths. Careers Panel broadens those horizons by showcasing diverse industries and experiences, helping students understand what different roles involve, identify areas that align with their interests, and gain clarity on how to prepare for their own professional journey.",
    additionalDetails: "Date: October 28th and 30th \n Time: 5:30 - 6:30PM \n Location: Ivey Business School \n Cost: Free for all students \n Attendance: Open to all Western University students",
    images: []
  },
  {
    id: "toronto-firms-trip",
    title: "Toronto Firms Trip",
    date: "November 14, 2025",
    description: "Get an inside look at the world of finance and consulting through W5's Toronto Firms Trip—a one-day experience connecting students directly with industry professionals.",
    portfolio: "DEVELOPMENT",
    image: "/events/firms-5.webp",
    register: "https://example.com/register-designathon",
    isRegistrationOpen: false,
    whatIs: "Toronto Firms Trip is a one-day excursion organized by W5, offering first- and second-year students the opportunity to visit leading finance and consulting firms in Toronto, such as Deloitte, National Bank, and McKinsey. Throughout the day, participants take part in office tours, company presentations, and networking sessions with professionals who share insights into their work, company culture, and recruitment processes.",
    why: "The Firms Trip provides students with a firsthand look at how top firms operate. Taking place during peak recruitment season, the trip offers valuable exposure, practical advice, and direct networking opportunities with recruiters and professionals. By engaging with firms early on, students gain a clearer understanding of potential career paths and a competitive edge when pursuing future internship opportunities.",
    additionalDetails: "Date: November 14th \n Time: 6:00AM - 8:00PM \n Location: Downtown Toronto \n Cost: $35 for members, $40 for non-members \n Attendance: Select partcipants from registered applicants.",
    images: ["/events/firms-1.webp", "/events/firms-2.webp", "/events/firms-3.webp", "/events/firms-4.webp", "/events/firms-5.webp", "/events/firms-6.webp"]
  },
  {
    id: "innovation-sprint",
    title: "Innovation Sprint",
    date: "November 15–16, 2025",
    description: "Experience W5’s Innovation Sprint—an immersive 24-hour entrepreneurship challenge to turn bold ideas into impactful solutions and connect with leaders from TD Invent.",
    portfolio: "ACCELERATOR", 
    image: "/events/inno-sprint.jpg",
    register: "https://example.com/register-sprint",
    isRegistrationOpen: true,
    whatIs: "Innovation Sprint is a unique take on a case competition—designed to lower barrier to entry and cultivate entrepreneurship among the Western student body. Over the course of 24 hours, participants immerse themselves in the founder’s journey by developing their own business idea in response to a challenge posed by TD Invent.",
    why: "Innovation Sprint is designed to foster innovative thinking and empower emerging business leaders to turn their ideas into action. Through mentorship, hands-on workshops, and opportunities to engage with industry professionals, participants gain the confidence and skills to develop impactful ventures. A key highlight of the competition is the chance to connect with TD Invent—offering exclusive rewards, valuable industry insights, and potential career opportunities that support students on their entrepreneurial journey.",
    additionalDetails: "Date: November 15-16th \n Location: Morrissette Institute for Entrepreneurship and Somerville House \n Cost: $20 for members and $25 for non-members \n Attendance: Open to all Western University students.",
    images: [
      "/events/inno-sprint-1.webp",
      "/events/inno-sprint-2.webp",
      "/events/inno-sprint-3.webp",
      "/events/inno-sprint-4.webp",
      "/events/inno-sprint-5.webp",
      "/events/inno-sprint-6.webp"
    ]
  },
  {
    id: "internship-program",
    title: "Internship Program",
    date: "November 23, 2025",
    description: "Kickstart your career this winter term through a remote internship with one of our partner startups—featuring hands-on work experience, mentorship, and a guided application process run by W5’s Launch program.",
    portfolio: "INNOVATION",
    register: "https://example.com/register-internship",
    isRegistrationOpen: false,
    whatIs: "The Launch Internship Program is a Winter 2026 internship program run by W5 in collaboration with various startups. Students will attend an information session hosted by W5, apply through a structured screening process managed by W5, and selected candidates will complete a four-month remote internship from January to April 2026. ",
    why: "Unlike typical job postings or open applications, Launch offers students a guided pathway into startup roles. W5 handles resume screening and first-round interviews to ensure applicants receive support and feedback during the hiring process. Partner companies provide hands-on work, tight-knit team environments, and opportunities to contribute directly to product, marketing, operations, and strategy—not just observe, all while studying.",
    additionalDetails: "Info Session Date: November 23rd \n Time: 1:00 - 2:30PM \n Location: Somerville House6 \n Application period: 7 days following the info session \n Internship Duration: January - April 2026 (4 months) \n Cost: Free for all students \n Attendance: Open to all Western University students.",
    images: []
  },
  {
    id: "accelerator-program",
    title: "Accelerator Program",
    date: "January 2025",
    description: "Begin your startup journey through W5’s Accelerator Program— a 4 week long incubator where you work with successful founders to build a product.",
    portfolio: "ACCELERATOR",
    image: "/events/accelerator-program-2.webp",
    register: "https://example.com/register-accelerator",
    isRegistrationOpen: false,
    whatIs: "W5’s Accelerator Program is a four-week incubator designed to help aspiring entrepreneurs develop their startup ideas. Participants receive mentorship from experienced founders, engage in hands-on workshops, and collaborate with peers to build viable products and business models.",
    why: "Entrepreneurship often feels both out of reach and risky for university students. The Accelerator Program offers a more intimate setting to overcome those early challenges and build alongside a supportive community. ",
    additionalDetails: "Date: January 2026 \n Time: Weekly sessions (TBD) \n Location: Morrissette Institute for Entrepreneurship \n Cost: $10 for members, $15 for non-members \n Attendance: Open to all Western University students.",
    images: ["/events/accelerator-program-1.webp", "/events/accelerator-program-2.webp", "/events/accelerator-program-3.webp"]
  },
  {
    id: "iterate-designathon",
    title: "Iterate Designathon",
    date: "January 9-10, 2026",
    description: "Jumpstart your design journey with Iterate Designathon—W5 Marketing’s flagship event featuring our annual Figma and Notion workshops.",
    portfolio: "MARKETING",
    image: "/events/optimize-2.webp",
    register: "https://example.com/register-designathon",
    isRegistrationOpen: false,
    whatIs: "Iterate Designathon is W5 Marketing’s signature design-focused initiative. The event brings together students interested in UI/UX, product design, and digital creation for a full day of hands-on workshops and guided project building. Through beginner-friendly Figma and Notion sessions, attendees gain practical experience and leave with completed designs they can showcase in their portfolios. The Designathon creates a collaborative environment where participants can experiment, learn, and bring their ideas to life.",
    why: "Addresses the lack of product design opportunities at Western by providing a hands-on competition that builds practical skills and results in portfolio-quality projects.",
    additionalDetails: "Date: January 9 - 11 \n Time: 5:00 - 9:00PM (Jan 9); 9:00AM - 3:00PM (Jan 10) \n Location: Virtual \n Cost: $10 entry fee \n Attendance: Open to all university students across Canada.",
    images: ["/events/optimize-1.webp", "/events/optimize-2.webp", "/events/optimize-3.webp"]
  },
  {
    id: "vision",
    title: "Vision",
    date: "January 18, 2026",
    description: "Step into the shoes of a venture capital associate and analyze companies from a quantitative, investment-driven lens while also thinking creatively and innovatively, embracing your entrepreneurial side.",
    portfolio: "CATALYST",
    register: "https://example.com/register-vision",
    isRegistrationOpen: false,
    whatIs: "Think stock pitch, but for startups. Less formal than a stock pitch but more formal than Steve Jobs Night. Focused on education and exposure rather than full competition.",
    why: "This event also appeals to creative thinkers who value entrepreneurship and innovation but want to pursue a career in a more practical industry (finance).",
    additionalDetails: "Date: January 18th \n Time: TBD \n Location: TBD \n Cost: TBD \n Attendance: Open to all Western University students.",
    images: []
  },
  {
    id: "pitch5",
    title: "Pitch5",
    date: "February 28 - March 1, 2026",
    description: "An alternative pitch competition focused on student creativity and business feasibility, the thesis of the Accelerator Program",
    portfolio: "ACCELERATOR",
    register: "https://example.com/register-designathon",
    isRegistrationOpen: false,
    whatIs: "Pitch5 builds directly off of the Accelerator program, allowing students to pitch any business idea that they have with limited parameters. Pitch5 is a two-day event, where students will learn more about the various aspects of entrepreneurship through workshops on the first day and get to pitch their own business ideas to industry professionals on the second day. ",
    why: "Pitch5 gives students a different angle on case competitions by removing the rigid structure and letting them test their own ideas. By pushing students to think independently, validate assumptions, and communicate a business concept under real constraints, Pitch5 encourages creativity and practical problem-solving—skills that translate directly into stronger performance in traditional case settings and in the 2257 feasibility project.",
    additionalDetails: "Date: February 28 - March 1, 2025 \n Time: TBD \n Location: TBD \n Cost: TBD \n Attendance: Open to all Western University students.",
    images: []
  },
  {
    id: "alchemy",
    title: "Alchemy",
    date: "Late February, Early March",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    portfolio: "CATALYST",
    register: "https://example.com/register-designathon",
    isRegistrationOpen: false
  },
  {
    id: "suit-down-get-social",
    title: "Suit Down & Get Social",
    date: "March 20-21, 2026",
    description: "A casual year-end mixer bringing together Western’s leading business clubs for an evening of connection, conversation, and community.",
    portfolio: "COMMUNITY",
    register: "https://example.com/register-designathon",
    isRegistrationOpen: false,
    whatIs: "Suit Down & Get Social is a collaborative mixer hosted by W5, PBSN, WFN, and WMA—four of Western’s largest undergraduate business clubs. The event offers a relaxed space to meet executive teams, learn about each club, and connect with students from across campus. It’s designed as an informal, no-suits gathering to wind down the year and build community across Western’s business ecosystem.",
    why: "The mixer gives students the chance to meet leaders from multiple business clubs in one place, without the pressure of a professional setting. It encourages cross-club connection, helps students explore different communities on campus, and provides a fun, low-stakes environment to socialize before the year wraps up.",
    additionalDetails: "Date: March 20-21, 2026 \n Time: TBA \n Location: TBA \n Cost: Free for all students \n Attendance: Open to all undergraduate students at Western University.",
    images: []
  }
];

// Utility functions
export const getPortfolioByName = (name: string): Portfolio | undefined => {
  return PORTFOLIOS.find(portfolio => 
    portfolio.name.toLowerCase() === name.toLowerCase()
  );
};

export const getPortfolioById = (id: string): Portfolio | undefined => {
  return PORTFOLIOS.find(portfolio => portfolio.id === id);
};

export const getEventById = (id: string): Event | undefined => {
  return EVENTS.find(event => event.id === id);
};

export const getEventsByPortfolio = (portfolioName: string): Event[] => {
  return EVENTS.filter(event => 
    event.portfolio.toLowerCase() === portfolioName.toLowerCase()
  );
};

export const getFeaturedEvents = (): Event[] => {
  // Return specific events for carousel/featured display
  return EVENTS.filter(event => 
    ["accelerator-program", "summit-case-competition", "innovation-sprint", "steve-jobs-night", "summer-dinner"].includes(event.id)
  );
};

// Constants
export const PORTFOLIO_NAMES = PORTFOLIOS.map(p => p.name);

export const COMPANY_INFO = {
  name: "W5",
  fullName: "Western Entrepreneurship Association",
  tagline: "A Startup for Startups",
  description: "The largest entrepreneurship community at Western University.",
  mission: "To make entrepreneurship accessible for everyone.",
  founded: "2016",
  founders: ["Braden Ream", "Zach Friedman", "Kirill Kokorin"],
  memberCount: "2500+",
  instagram: "@w5uwo",
  membershipLink: "https://buy.stripe.com/dRm8wO4ZMcYAcjrdKTaAw00"
};