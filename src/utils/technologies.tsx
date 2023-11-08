export type TechType = {
  id: number;
  title: string;
  iconUrl: string;
  featured: boolean;
};

// ICONS: DEVICONS https://github.com/devicons/devicon

export const technologies: TechType[] = [
  {
    id: 1,
    title: "Javascript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    featured: true,
  },
  {
    id: 2,
    title: "React",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    featured: true,
  },
  {
    id: 3,
    title: "Java",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    featured: true,
  },
  {
    id: 4,
    title: "TailwindCSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    featured: true,
  },
  {
    id: 5,
    title: "HTML",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    featured: false,
  },
  {
    id: 6,
    title: "CSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    featured: false,
  },
];
