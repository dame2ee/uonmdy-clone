import Announcements from "@/components/Announcements";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import MainNav from "@/components/MainNav";
import NavHelper from "@/components/NavHelper";
import PhotoGallery from "@/components/PhotoGallery";
import SpotlightOne from "@/components/SpotlightOne";
import SpotlightTwo from "@/components/SpotlightTwo";

export default function Home() {
  return (
    <>
      <Header />
      <MainNav />
      <HeroSlider />
      <Announcements />
      <SpotlightOne />
      <PhotoGallery />
      <SpotlightTwo />
      <NavHelper />
      <Footer />
    </>
  );
}
