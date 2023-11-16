export const categoryList = ["school work", "react", "java"] as const;

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
      "A ticket sales system for a ticket office. Made as a team project using Scrum.",
    description: [
      "TicketGuru is a group project for Haaga-Helia's Software Project 1 -course. The application has a REST-API that we implemented using Spring Boot and a front end with React.",
      "The main focus for the project was to design, implement and document a RESTful API as a team using SCRUM methodology. We planned everything from the database schema and relations to the endpoints that follow good practices of REST. The backend was deployed to Azure.",
      "Front-end was implemented with React and it's main purpose was to work as a proof of concept (and a nicer way to demonstrate our endpoints), since the course was more focused on the backend development and working as an agile team.",
    ],
    frontend: ["JavaScript", "React", "React Redux", "Robot Framework"],
    backend: ["Java", "Spring", "JUnit", "REST", "MySQL", "Azure"],
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
      "A website for uploading stock photos, made with Spring Boot and Thymeleaf.",
    description: [
      "Course project for Haaga-Helia's Server Programming -course. The site features user management (sign up, login), image uploading to the server and a 'like'-feature where other users can like photos and they'd be saved in their own profile.",
      "The application was hosted on Heroku and I'm currently working on modifying the project so that I can deploy a simplified demo somewhere else.",
    ],
    frontend: ["Thymeleaf", "CSS"],
    backend: ["Java", "Spring", "MariaDB"],
    images: [
      { filename: "imgstr1.png", caption: "Front page (images: pexels.com)" },
      {
        filename: "imgstr2.png",
        caption:
          "When uploading an image you can add title and description and select a category",
      },
      {
        filename: "imgstr3.png",
        caption:
          "View when an image is clicked. Amount of likes is shown below the uploader's nickname",
      },
      {
        filename: "imgstr4.png",
        caption: "Profile page, where liked and uploaded files can be found",
      },
    ],
    githubUrl: "https://github.com/sirkian/Backend-Harjoitustyo",
    tags: ["Java", "Thymeleaf", "MariaDB"],
    categories: ["java", "school work"],
    featured: true,
  },
  {
    id: 3,
    title: "recipes!",
    previewDescription:
      "Web page made with React for sharing recipes with other people.",
    description: [
      "Course project for Haaga-Helia's Front-End Programming -course. Some of the features of this React single page applications are user authentication, commenting and liking with full CRUD backend, where only the owner of the recipe can edit or delete it.",
      "The main feature in this project (at least for me) is the dynamic amount of incredients when adding a new recipe. As seen on image 3, new input fields can be added as needed, making the user experience better.",
    ],
    frontend: ["JavaScript", "React", "Material UI"],
    backend: [
      "Express.js",
      "Node.js",
      "SQLite",
      "Firebase Realtime Database",
      "Firebase Authentication",
    ],
    images: [
      { filename: "recipes2.png", caption: "Front page, browsing recipes" },
      {
        filename: "recipes1.png",
        caption:
          "Front page with light theme, recipe card expanded to show the full recipe",
      },
      {
        filename: "recipes3.png",
        caption:
          "Adding a new recipe with 3 incredients: 'INCREDIENT 1, 2 & 3'",
      },
      { filename: "recipes4.png", caption: "Comment section of a recipe" },
    ],
    githubUrl: "https://github.com/sirkian/Frontend-Harjoitustyo",
    tags: ["ReactJS", "Express.js", "Material UI"],
    categories: ["react", "school work"],
    featured: true,
  },
  {
    id: 4,
    title: "FAUX",
    previewDescription: "Fully responsive website for a restaurant.",
    description: [
      "Responsive web page for an imaginary restaurant, designed and coded on my first year in Haaga-Helia as a course work for Orientation to Digital Services course back in 2021. Made with HTML and CSS only.",
    ],
    frontend: ["HTML", "CSS"],
    images: [
      { filename: "faux1.png", caption: "Landing page" },
      { filename: "faux2.png", caption: "Figma design" },
    ],
    githubUrl: "https://github.com/sirkian/FAUX",
    publishedUrl: "https://sirkian.github.io/FAUX/index.html",
    tags: ["HTML", "CSS"],
    categories: ["school work"],
    featured: true,
  },
];
