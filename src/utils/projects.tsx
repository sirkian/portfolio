export const categoryList = [
  "school work",
  "front-end",
  "backend",
  "fullstack",
  "react",
  "java",
] as const;

export type ProjectType = {
  id: number;
  title: string;
  featureDescription?: string;
  description: string;
  images: { filename: string; caption: string }[];
  githubUrl: string;
  publishedUrl?: string;
  tags: string[];
  categories: (typeof categoryList)[number][];
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "TicketGuru",
    featureDescription:
      "Fullstack application with RESTful backend and React client.",
    description:
      "TicketGuru is a project for Software Project 1 -course. The application has a REST api that we implemented using Spring Boot and a front end with React.",
    images: [
      {
        filename: "ticketguru1.png",
        caption: "Front page when logged in as an admin",
      },
      {
        filename: "ticketguru2.png",
        caption: "Sell tickets -view with different tickets selected",
      },
    ],
    githubUrl: "https://github.com/sirkian/TicketGuru",
    tags: ["Java", "ReactJS", "MySQL"],
    categories: ["java", "react", "school work"],
  },
  {
    id: 2,
    title: "imgstr",
    featureDescription:
      "A website for uploading images, made with Spring Boot.",
    description: "",
    images: [
      { filename: "imgstr1.png", caption: "ADD CAPTION" },
      { filename: "imgstr2.png", caption: "ADD CAPTION" },
      { filename: "imgstr3.png", caption: "ADD CAPTION" },
      { filename: "imgstr4.png", caption: "ADD CAPTION" },
    ],
    githubUrl: "https://github.com/sirkian/Backend-Harjoitustyo",
    tags: ["Java", "Thymeleaf", "MariaDB"],
    categories: ["java", "backend", "school work"],
  },
  {
    id: 3,
    title: "recipes!",
    featureDescription:
      "React single page application, course work for Front-End Development",
    description: "",
    images: [
      { filename: "recipes2.png", caption: "ADD CAPTION" },
      { filename: "recipes1.png", caption: "ADD CAPTION" },
      { filename: "recipes3.png", caption: "ADD CAPTION" },
      { filename: "recipes4.png", caption: "ADD CAPTION" },
    ],
    githubUrl: "https://github.com/sirkian/Frontend-Harjoitustyo",
    tags: ["ReactJS", "Express.js", "Material UI"],
    categories: ["front-end", "react", "school work"],
  },
  {
    id: 4,
    title: "FAUX",
    featureDescription: "Website for a restaurant, school work",
    description:
      "Responsive web page for an imaginary restaurant, made on my first year in Haaga-Helia as a course work for Orientation to Digital Services course in 2021. Made with HTML and CSS only.",
    images: [{ filename: "faux1.png", caption: "ADD CAPTION" }],
    githubUrl: "https://github.com/sirkian/FAUX",
    publishedUrl: "https://sirkian.github.io/FAUX/index.html",
    tags: ["HTML", "CSS"],
    categories: ["front-end", "school work"],
  },
  {
    id: 5,
    title: "Faux",
    description:
      "Responsive web page for an imaginary restaurant, made on my first year in Haaga-Helia as a course work for Orientation to Digital Services course. Made with HTML and CSS only.",
    images: [{ filename: "faux1.png", caption: "ADD CAPTION" }],
    githubUrl: "https://github.com/sirkian/Faux",
    publishedUrl: "https://myy.haaga-helia.fi/~bgu129/",
    tags: ["HTML", "CSS"],
    categories: ["front-end", "school work"],
  },
];
