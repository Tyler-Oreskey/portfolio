import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import ContactForm from "../components/Contact/Contact";

const routes = [
  {
    location: "/about",
    label: "About",
    component: About,
    redirect: false,
  },
  {
    location: "/experience",
    label: "Experience",
    component: Experience,
    redirect: false,
  },
  {
    location: "/projects",
    label: "Projects",
    component: Projects,
    redirect: false,
  },
  {
    location: "/contact",
    label: "Contact",
    component: ContactForm,
    redirect: false,
  },
  {
    location: "/",
    redirect: true,
    from: "/",
    to: "/about",
  },
].map((navItem, index) => ({ ...navItem, id: index }));

export default routes;
