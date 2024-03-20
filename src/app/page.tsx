import Logo from "@/components/logo";
import {PatternLeft, PatternRight} from "@/components/patterns";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import StoreLink from "@/components/store-link";
import Phone from "@/components/phoneImage";
import Bubbles from "@/components/bubbles";
import Card from "@/components/card";
import cup from "@/icons/cup.svg";
import hamburger from "@/icons/hamburger.svg";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className='relative h-screen overflow-hidden font-sans'>
      <div className={`flex flex-col items-center max-w-[1200px] min-h-screen my-0 mx-auto relative text-center`}>
        <Logo/>
        <Title/>
        <Subtitle/>
        <StoreLink link="#"/>
        <Phone/>
      </div>
      <Bubbles/>
			<Card icon={hamburger} category="Food delivery" top={46} left={57} spent={96}/>
			<Card icon={cup} category="Breakfast" top={58} left={26} spent={25.16} split="Bogdan" total={57} comment="We went to the restaurant after a morning jog"/>
      <PatternLeft/>
      <PatternRight/>
      <Footer/>
    </main>
  );
}