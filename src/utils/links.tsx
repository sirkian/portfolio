type LinkType = {
  id: number;
  title: string;
  iconUrl?: string;
  url: string;
};

export const links: LinkType[] = [
  { id: 1, title: "Projects", url: "/projects" },
  { id: 2, title: "Placeholder 1", url: "/" },
  {
    id: 3,
    title: "Github",
    iconUrl: "/github.svg",
    url: "https://github.com/sirkian",
  },
  {
    id: 4,
    title: "LinkedIn",
    iconUrl: "/linkedin.svg",
    url: "https://www.linkedin.com/in/anssisirkia/",
  },
];
