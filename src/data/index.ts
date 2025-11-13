// Portfolio Types
export interface Portfolio {
  id: string;
  name: string;
  color: string;
  description: string;
  icon: string;
  path: string;
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
    description: "Accelerator is built for students who are passionate about entrepreneurship and want to be at the forefront of helping new ideas grow into real startups.",
    icon: "/accelerator.svg",
    path: "/about?section=accelerator"
  },
  {
    id: "catalyst",
    name: "Catalyst",
    color: "#D7C16B",
    description: "Catalyst is the operations engine of W5, managing everything behind the scenes—from financial planning and grant writing to venue booking and logistics.",
    icon: "/catalyst.svg",
    path: "/about?section=catalyst"
  },
  {
    id: "community",
    name: "Community",
    color: "#E6A6C7",
    description: "Community is the portfolio that unites W5. It focuses on creating an inclusive environment for both internal members and the broader student body.",
    icon: "/community.svg",
    path: "/about?section=community"
  },
  {
    id: "development",
    name: "Development",
    color: "#5BA05B",
    description: "The Development portfolio is the powerhouse behind W5's most high-profile events, leading major projects and initiatives that make a real impact.",
    icon: "/development.svg",
    path: "/about?section=development"
  },
  {
    id: "innovation",
    name: "Innovation",
    color: "#5B9ED1",
    description: "Innovation is where curiosity meets opportunity; organizing events to cultivate the entrepreneurial spirit within students who want to take the next step.",
    icon: "/innovation.svg",
    path: "/about?section=innovation"
  },
  {
    id: "marketing",
    name: "Marketing",
    color: "#6B5BD1",
    description: "Marketing is the creative voice of W5. It's how people hear about us; through eye-catching visuals, clever branding, and engaging campaigns.",
    icon: "/marketing.svg",
    path: "/about?section=marketing"
  }
];

// Event Data
export const EVENTS: Event[] = [
  {
    id: "on-the-road",
    title: "On The Road",
    date: "August 15, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    portfolio: "COMMUNITY",
    image: "/events/agm-2025.jpg",
    register: "https://example.com/register-agm",
    isRegistrationOpen: false
  },
  {
    id: "summer-dinner",
    title: "Summer Dinner",
    date: "August 16, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    portfolio: "COMMUNITY",
    image: "/events/agm-2025.jpg",
    register: "https://example.com/register-agm",
    isRegistrationOpen: false
  },
  {
    id: "annual-general-meeting",
    title: "Annual General Meeting",
    date: "September 13, 2025",
    description: "Kick off the year with W5's Annual General Meeting; an opportunity to learn about our mission, meet the executive team, and explore ways to get involved.",
    portfolio: "COMMUNITY",
    image: "/events/agm-2025.jpg",
    register: "https://example.com/register-agm",
    isRegistrationOpen: false
  },
  {
    id: "summit-case-competition",
    title: "Summit Case Competition",
    date: "October 3–4, 2025",
    description: "Compete in W5's flagship event—Summit Case Competition, Western's largest beginner friendly case competition bringing together top students and industry leaders.",
    portfolio: "DEVELOPMENT",
    image: "/photos/summit.jpg",
    register: "https://example.com/register-summit",
    isRegistrationOpen: false,
    whatIs: "Summit Case Competition is W5's annual flagship event, drawing over 100 competitors. Whether you're a first-time participant or a regular case competitor, Summit offers a platform to showcase your analytical and presentation skills. Over 24 hours, students take on a case and present their solutions to representatives from leading firms such as Boston Consulting Group (BCG), Deloitte, and Bank of Montreal (BMO).",
    why: "Summit is the first case competition of the school year, designed to help students build confidence, develop problem-solving skills, and connect with industry leaders. Through guided workshops, mentorship, and resource drives, competitors gain the tools to craft impactful presentations and tackle business challenges with confidence.",
    additionalDetails: "Date: October 4th \n Time: 8AM - 6PM \n Location: Morrissette Institute for Entrepreneurship & Somerville House \n Cost: $20 for members and $25 for non-members \n Attendance: Open to students of all academic years and programs that register.",
    images: []
  },
  {
    id: "steve-jobs-night",
    title: "Steve Jobs Night",
    date: "October 10, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    portfolio: "INNOVATION",
    image: "/events/steve-jobs-night.jpg",
    register: "https://example.com/register-steve-jobs",
    isRegistrationOpen: false
  },
  {
    id: "careers-panel",
    title: "Careers Panel",
    date: "October 28-29, 2025",
    description: "Discover diverse career paths at Careers Panel—a two-day event connecting students with HBA1 and HBA2 mentors in finance, consulting, tech, and entrepreneurship.",
    portfolio: "DEVELOPMENT",
    register: "https://example.com/register-careers",
    isRegistrationOpen: false
  },
  {
    id: "toronto-firms-trip",
    title: "Toronto Firms Trip",
    date: "November 14, 2025",
    description: "Get an inside look at the world of finance and consulting through W5's Toronto Firms Trip—a one-day experience connecting students directly with industry professionals.",
    portfolio: "DEVELOPMENT",
    register: "https://example.com/register-designathon",
    isRegistrationOpen: false
  },
  {
    id: "innovation-sprint",
    title: "Innovation Sprint",
    date: "November 15–16, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    portfolio: "ACCELERATOR", 
    image: "/photos/inno-sprint.jpg",
    register: "https://example.com/register-sprint",
    isRegistrationOpen: true,
    whatIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    why: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    additionalDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop"
    ]
  },
  {
    id: "internship-program",
    title: "Internship Program",
    date: "November 23, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    portfolio: "ACCELERATOR",
    register: "https://example.com/register-internship",
    isRegistrationOpen: false
  },
  {
    id: "accelerator-program",
    title: "Accelerator Program",
    date: "January 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    portfolio: "ACCELERATOR",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1770&auto=format&fit=crop",
    register: "https://example.com/register-accelerator",
    isRegistrationOpen: false,
    whatIs: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    why: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    additionalDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    images: []
  },
  {
    id: "iterate-designathon",
    title: "Iterate Designathon",
    date: "January 9-10, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    portfolio: "INNOVATION",
    register: "https://example.com/register-designathon",
    isRegistrationOpen: false
  },
  {
    id: "pitchquest",
    title: "PitchQuest",
    date: "January 18, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    portfolio: "ACCELERATOR",
    register: "https://example.com/register-designathon",
    isRegistrationOpen: false
  },
  {
    id: "pitch5",
    title: "Pitch5",
    date: "February 28 - March 1, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    portfolio: "ACCELERATOR",
    register: "https://example.com/register-designathon",
    isRegistrationOpen: false
  },
  {
    id: "suit-down-get-social",
    title: "Suit Down & Get Social",
    date: "March 20-21, 2025",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    portfolio: "COMMUNITY",
    register: "https://example.com/register-designathon",
    isRegistrationOpen: false
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
    ["accelerator-program", "summit-case-competition", "innovation-sprint"].includes(event.id)
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