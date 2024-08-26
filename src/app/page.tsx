import Navbar from "./components/NavBar";
import "./animations.css"
import ImagesGrid from "./components/ImagesGrid";
import ActionSection from "./components/ActionsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl my-20 md:text-6xl md:my-28 slide-in">Mindblow : a blog about philosophy</h1>
      <ImagesGrid/>
      <ActionSection/>      
      <Footer></Footer>
    </>
  );
}
