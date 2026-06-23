import Navbar from "@/components/Navbar";

import HeroSlider from "@/components/HeroSlider";

import WelcomeSection from "@/components/WelcomeSection";

import YoutubeSection from "@/components/YoutubeSection";

import InstagramSection from "@/components/InstagramSection";

import SketchGallery from "@/components/SketchGallery";

import Timeline from "@/components/Timeline";

export default function Home() {

  return (

    <>

      <Navbar />

      <HeroSlider />

      <WelcomeSection />

      <YoutubeSection />

      <InstagramSection />

      <SketchGallery />

      <Timeline />

    </>

  );

}