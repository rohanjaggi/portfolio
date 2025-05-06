import Navbar from "./components/navbar";
import HomeComponent from "./components/home";
import AboutComponent from "./components/about";
import ExperienceComponent from "./components/experience";
import ProjectsComponent from "./components/projects";
import ContactComponent from "./components/contact-me";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <HomeComponent />
        <AboutComponent />
        <ExperienceComponent />
        <ProjectsComponent />
        <ContactComponent />
      </div>
    </div>
  );
}
