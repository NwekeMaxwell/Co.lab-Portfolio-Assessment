import Lendsqr from "../Assets/lendsqr.png";
import Forkify from "../Assets/forkify.png";
import Bankist from "../Assets/bankist.png";

const ProjData = [
  {
    id: 1,
    title: "Lendsqr",
    image: Lendsqr,
    link: "https://nweke-maxwell-lendsqr-fe-test.netlify.app",
    github: "https://github.com/NwekeMaxwell/lendsqr-fe-test",
    description:
      "A 4-page Admin Panel website accessing and showing over 500 user details from external Library / API.",
    stack: ["TypeScript", "React", "SCSS"],
    projectFocus: ["Typescript", "SCSS", "ReactJS"],
  },
  {
    id: 2,
    title: "Forkify",
    image: Forkify,
    link: "https://forkify2023.netlify.app",
    github: "https://github.com/NwekeMaxwell/Forkify-app",
    description:
      "A model food website where you search for recipes and get a list of different food, directions to cook, and ingredients to prepare it.",
    stack: ["JavaScript", "SCSS"],
    projectFocus: [
      "Asynchronous javaScript",
      "Promises",
      "Error Handling",
      "MVC Architecture",
      "Local Storage API",
      "Polyfilling",
      "Flowchart",
    ],
  },
  {
    id: 3,
    title: "Bankist App",
    image: Bankist,
    link: "https://bankist2022.netlify.app",
    github: "https://github.com/NwekeMaxwell/Bankist",
    description: "A model bank advert webpage",
    stack: ["JavaScript"],
    projectFocus: [
      "Lazy Image loading",
      "website consolidation",
      "Slider",
      "Smooth scroll",
      "Tabbed grouping",
    ],
  },
];

export default ProjData;
