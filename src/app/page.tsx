import Navbar from "./components/navbar";
import HomeComponent from "./components/home";
import AboutComponent from "./components/about";
import ExperienceComponent from "./components/experience";

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
      </div>
    </div>
  );
}
