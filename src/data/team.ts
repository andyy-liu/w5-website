export interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  linkedin?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Andy Liu",
    position: "President",
    image: "/team/andy-headshot.webp",
    linkedin: "https://linkedin.com/in/aliu24",
  },
  {
    id: 2,
    name: "Jessica Chen",
    position: "President",
    image: "/team/jessica-headshot.webp",
    linkedin: "https://www.linkedin.com/in/jessica-chen051214/",
  },
  {
    id: 3,
    name: "JiaYi Hong",
    position: "VP Accelerator",
    image: "/team/jiayi-headshot.webp",
    linkedin: "https://www.linkedin.com/in/jiayiihong/",
  },
  {
    id: 4,
    name: "Kathy Dong",
    position: "VP Accelerator",
    image: "/team/kathy-headshot.webp",
    linkedin: "https://www.linkedin.com/in/kathy-jy-dong/",
  },
  {
    id: 5,
    name: "Anson Wang",
    position: "VP Catalyst",
    image: "/team/anson-headshot.webp",
    linkedin: "https://www.linkedin.com/in/ansonwnng/",
  },
  {
    id: 6,
    name: "Raelyn Xu",
    position: "VP Catalyst",
    image: "/team/raelyn-headshot.webp",
    linkedin: "https://www.linkedin.com/in/raelynxu/",
  },
  {
    id: 7,
    name: "Clara Chen",
    position: "VP Development",
    image: "/team/clara-headshot.webp",
    linkedin: "https://www.linkedin.com/in/clara-k-chen/",
  },
  {
    id: 8,
    name: "Harry Yang",
    position: "VP Development",
    image: "/team/harry-headshot.webp",
    linkedin: "https://www.linkedin.com/in/harryyangzy/",
  },
  {
    id: 9,
    name: "Albert Zhuang",
    position: "VP Innovation",
    image: "/team/albert-headshot.webp",
    linkedin: "https://www.linkedin.com/in/albert-zhuang-b0a50529a/",
  },
  {
    id: 10,
    name: "Arryan Rao",
    position: "VP Innovation",
    image: "/team/arryan-headshot.webp",
    linkedin: "https://www.linkedin.com/in/arryanrao126/",
  },
  {
    id: 11,
    name: "Chloe Zou",
    position: "VP Marketing",
    image: "/team/chloe-headshot.webp",
    linkedin: "https://www.linkedin.com/in/chloe-zou/",
  },
  {
    id: 12,
    name: "Lillian Wei",
    position: "VP Marketing",
    image: "/team/lillian-headshot.webp",
    linkedin: "https://www.linkedin.com/in/lillianhwei/",
  },
];
