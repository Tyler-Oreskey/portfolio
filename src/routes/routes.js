import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
// import Experience from "../components/Experience/Experience";
import Contact from "../components/Contact/Contact";

const routes = [
  {
    label: "Home",
    component: Home,
  },
  {
    label: "About",
    component: About,
  },
  {
    label: "Projects",
    component: Projects,
  },
  // {
  //   label: "Experience",
  //   component: Experience,
  // },
  {
    label: "Contact",
    component: Contact,
  },
];

export default routes;
