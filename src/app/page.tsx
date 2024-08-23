import Navbar from "./components/NavBar";
import "./animations.css"

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-6xl my-28 slide-in">Mindblow : a blog about philosophy</h1>
    </>
  );
}
