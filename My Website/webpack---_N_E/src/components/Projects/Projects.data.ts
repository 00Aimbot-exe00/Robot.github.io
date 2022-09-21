import type { ProjectProps } from "./Projects.types";

export const PROJECTS: ProjectProps[] = [
  {
    name: "Cruuunchify",
    title: "Cruuun",
    titleTwo: "chify",
    fullTitle: "Cruuunchify",
    shortDescription: "An analysis and discovery tool for spotify users",
    description:
      "A music streaming analysis and discovery tool built on Spotify's Web API. Cruunchify provides an appealing interactive experience leveraging users listening data.",
    role: "Product Engineering",
    year: "2020",
    coverPhotoUrl: "/images/cruuunchify-cover.jpg",
    link: "https://cruuunchify.com",
    modalBg: "#535E5A",
    mediaUrls: [
      "/images/cruuunchify-01.jpg",
      "/images/cruuunchify-02.jpg",
      "/images/cruuunchify-03.jpg",
      "/images/cruuunchify-04.jpg",
      "/images/cruuunchify-05.jpg",
    ],
  },
  {
    name: "Intelia",
    title: "Intelia",
    fullTitle: "Intelia",
    shortDescription:
      "Global tech team augmentation service of top-class talents",
    description:
      "Corporate website for Intelia, a tech team augumentation service provider.",
    client: "Intelia",
    role: "Front end development",
    year: "2017",
    coverPhotoUrl: "/images/intelia-cover.jpg",
    link: "https://intelia.io",
    modalBg: "#535c5c",
    mediaUrls: [
      "/images/intelia-01.jpg",
      "/images/intelia-02.jpg",
      "/images/intelia-03.jpg",
      "/images/intelia-04.jpg",
    ],
  },
];

export const LABS: ProjectProps[] = [
  {
    name: "Pension App",
    title: "Pension",
    titleTwo: "App",
    fullTitle: "Pension App",
    shortDescription: "Concept pension provider microsite",
    description:
      "A microsite showcasing stories of customers of a concept pension provider.",
    role: "Front end development",
    year: "2021",
    coverPhotoUrl: "/images/pension-app-cover.jpg",
    link: "https://apensionapp.richardekwonye.com",
    modalBg: "#564d4d",
    mediaUrls: [
      "/images/pension-app-01.jpg",
      "/images/pension-app-02.jpg",
      "/images/pension-app-03.jpg",
    ],
  },
  {
    name: "Controller",
    title: "Contro",
    titleTwo: "ller",
    fullTitle: "Controller",
    shortDescription: "An experiment using three JS basic geometries",
    description:
      "An experiment of DualShock 2 controller shapes using three JS basic geometries and a RectAreaLight.",
    role: "Front end development",
    year: "2021",
    coverPhotoUrl: "/images/controller-cover.jpg",
    link: "https://pscontrols.richardekwonye.com",
    modalBg: "#535E5A",
    mediaUrls: ["/images/controller-01.jpg", "/images/controller-02.jpg"],
  },
  {
    name: "Game Dashboard",
    title: "Dash",
    titleTwo: "board",
    fullTitle: "Dashboard",
    shortDescription: "A concept video game dashboard interface",
    description:
      "A concept video game loading and interactive dashboard experience.",
    role: "Front end development",
    year: "2018",
    coverPhotoUrl: "/images/dashboard-cover.jpg",
    link: "https://gamedashboard-a3201.web.app",
    modalBg: "#535E5A",
    mediaUrls: ["/images/dashboard-01.jpg", "/images/dashboard-02.jpg"],
  },
];

export const TOTAL_PROJECTS = PROJECTS.length;
export const TOTAL_LABS = LABS.length;
export const MODAL_EXIT_DURATION = 680;
