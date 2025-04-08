import Link from 'next/link';
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Mission from "@/components/Mission";
import Campaigns from "@/components/Campaigns";
import Donors from "@/components/Donors";
import SkillTrainingSection from "@/components/SkillTrainingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar /> 
      <Link href="/donation"> </Link>
      <HeroSlider />
      <Mission /> 
      <Campaigns />
      <Donors />
      <SkillTrainingSection />
      <Footer />
      
 

    </div>
    
  );
}
