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
  previewDescription: string;
  description: string[];
  frontend?: string[];
  backend?: string[];
  images: { filename: string; caption: string }[];
  githubUrl: string;
  publishedUrl?: string;
  tags: string[];
  categories: (typeof categoryList)[number][];
  featured: boolean;
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "TicketGuru",
    previewDescription:
      "Fullstack application with RESTful backend and React client.",
    description: [
      "TicketGuru is a group project for Haaga-Helia's Software Project 1 -course. The application has a REST_API that we implemented using Spring Boot and a front end with React.",
      "The main focus for the project was to design, implement and document a RESTful API as a team using SCRUM methodology. We planned everything from the database schema and relations to the endpoints that follow good practices of REST.",
      "Front-end was implemented with React and it uses the endpoints from our backend, that was hosted on Azure.",
    ],
    frontend: ["JavaScript", "React", "React Redux", "Robot Framework"],
    backend: ["Java", "Spring", "JUnit", "REST-API", "MySQL", "Azure"],
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
    featured: true,
  },
  {
    id: 2,
    title: "imgstr",
    previewDescription:
      "A website for uploading images, made with Spring Boot.",
    description: [
      "Course project for Haaga-Helia's Backend Programming -course.",
    ],
    frontend: ["Thymeleaf"],
    backend: ["Java", "Spring", "MariaDB"],
    images: [
      { filename: "imgstr1.png", caption: "ADD CAPTION" },
      { filename: "imgstr2.png", caption: "ADD CAPTION" },
      { filename: "imgstr3.png", caption: "ADD CAPTION" },
      { filename: "imgstr4.png", caption: "ADD CAPTION" },
    ],
    githubUrl: "https://github.com/sirkian/Backend-Harjoitustyo",
    tags: ["Java", "Thymeleaf", "MariaDB"],
    categories: ["java", "backend", "school work"],
    featured: true,
  },
  {
    id: 3,
    title: "recipes!",
    previewDescription:
      "React single page application, course work for Front-End Development",
    description: [
      "Course project for Haaga-Helia's Front-End Programming -course.",
    ],
    frontend: ["JavaScript", "React", "Material UI"],
    backend: [
      "Express.js",
      "SQLite",
      "Firebase Realtime Database",
      "Firebase Authentication",
    ],
    images: [
      { filename: "recipes2.png", caption: "ADD CAPTION" },
      { filename: "recipes1.png", caption: "ADD CAPTION" },
      { filename: "recipes3.png", caption: "ADD CAPTION" },
      { filename: "recipes4.png", caption: "ADD CAPTION" },
    ],
    githubUrl: "https://github.com/sirkian/Frontend-Harjoitustyo",
    tags: ["ReactJS", "Express.js", "Material UI"],
    categories: ["front-end", "react", "school work"],
    featured: true,
  },
  {
    id: 4,
    title: "FAUX",
    previewDescription: "Website for a restaurant, school work",
    description: [
      "Responsive web page for an imaginary restaurant, made on my first year in Haaga-Helia as a course work for Orientation to Digital Services course in 2021. Made with HTML and CSS only.",
    ],
    frontend: ["HTML", "CSS"],
    images: [{ filename: "faux1.png", caption: "ADD CAPTION" }],
    githubUrl: "https://github.com/sirkian/FAUX",
    publishedUrl: "https://sirkian.github.io/FAUX/index.html",
    tags: ["HTML", "CSS"],
    categories: ["front-end", "school work"],
    featured: true,
  },
  {
    id: 5,
    title: "Faux",
    previewDescription: "Website for a restaurant, school work",
    description: [
      "Responsive web page for an imaginary restaurant, made on my first year in Haaga-Helia as a course work for Orientation to Digital Services course. Made with HTML and CSS only.",
    ],
    frontend: ["HTML", "CSS"],
    images: [{ filename: "faux1.png", caption: "ADD CAPTION" }],
    githubUrl: "https://github.com/sirkian/Faux",
    publishedUrl: "https://myy.haaga-helia.fi/~bgu129/",
    tags: ["HTML", "CSS"],
    categories: ["front-end", "school work"],
    featured: false,
  },
];
