import Navbar from "./components/navbar";
import HomeComponent from "./components/home";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <HomeComponent />
      </div>
    </div>
  );
}
