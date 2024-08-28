import shortit from "./images/shortit.jpg";
import coplate from "./images/coplate.jpg";
import codeitmall from "./images/codeitmall.jpg";
// import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "About Me" },
  { id: 3, href: "#skills", text: "Skills" },
  { id: 4, href: "#experience", text: "Experience" },
  { id: 5, href: "#personal_project", text: "Project" },
  { id: 6, href: "#education", text: "Education & Certifications" },
];

export const socialLinks = [
  { id: 1, href: "https://github.com/jos8304", className: "fab fa-github" },
  {
    id: 2,
    href: "https://www.linkedin.com/in/jason-yoo-3575b1266/",
    className: "fab fa-linkedin",
  },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-solid fa-terminal",
    title: "Web Programming Languages",
    text: "Python, Django, PHP, JavaScript, HTML, React,NEXT.js",
  },
  {
    id: 2,
    icon: "fas fa-solid fa-database",
    title: "Database",
    text: "MySQL, MSSQL, MongoDB",
  },
  {
    id: 3,
    icon: "fas fa-solid fa-server",
    title: "Development tools and server",
    text: "Visual Studio ,PyCharm,Windows server 2008 R2, GitHub, Docker ",
  },
];

export const tours = [
  {
    id: 1,
    image: coplate,
    title: "Restaurant Review Site",
    info: `Implemented login, sign-up, review, and member following functions.`,
    location: "Python 3.7, Django 2.2",
    href: "https://jyou8304.pythonanywhere.com/",
  },
  {
    id: 2,
    image: codeitmall,
    title: "CodeItMall",
    info: `Developed an e-commerce site.`,
    location: "React, JavaScript",
    href: "https://codeitmall-azure.vercel.app/",
  },
  {
    id: 3,
    image: shortit,
    title: "URL Shortener",
    info: `Developed a site that converts long URLs to short URLs.`,
    location: "NEXT.js,MongoDB",
    href: "https://shortit-azure.vercel.app/",
  },
];
