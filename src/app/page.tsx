import Navbar from "./components/navbar";
import HomeComponent from "./components/home";
import AboutComponent from "./components/about";
import ExperienceComponent from "./components/experience";
import ProjectsComponent from "./components/projects";

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
      </div>
    </div>
  );
}
