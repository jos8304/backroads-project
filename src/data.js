import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
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
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "orem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: tour1,
    date: "october 1th, 2020",
    title: "best of java",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: "indonesia",
    duration: 6,
    price: "from $1400",
  },
  {
    id: 2,
    image: tour2,
    date: "october 1th, 2020",
    title: "best of java",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: "indonesia",
    duration: 6,
    price: "from $1400",
  },
  {
    id: 3,
    image: tour3,
    date: "october 1th, 2020",
    title: "best of java",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: "indonesia",
    duration: 6,
    price: "from $1400",
  },
  {
    id: 4,
    image: tour4,
    date: "october 1th, 2020",
    title: "best of java",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    location: "indonesia",
    duration: 6,
    price: "from $1400",
  },
];
