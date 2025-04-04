import Navbar from "./components/navbar";
import HomeComponent from "./components/home";
import AboutComponent from "./components/about";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <HomeComponent />
        <AboutComponent />
      </div>
    </div>
  );
}
