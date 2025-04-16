import Link from 'next/link';
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
      <Navbar /> 
      <Link href="/about"> </Link>
      <Link href="/donation"> </Link>
      <Link href="/signin" legacyBehavior>
        <a>
          <button className="signin-button"></button>
        </a>
      </Link>
      <HeroSlider />
      <Mission /> 
      <Campaigns />
      <Donors />
      <SkillTrainingSection />
      <Footer />
    </div>
  );
}
