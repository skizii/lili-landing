import Logo from "@/components/logo";
import {PatternLeft, PatternRight} from "@/components/patterns";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import StoreLink from "@/components/store-link";
import PhoneImage from "@/components/phoneImage";
import Bubbles from "@/components/bubbles";
import Card from "@/components/card";
import cup from "@/icons/cup.svg";
import hamburger from "@/icons/hamburger.svg";

export default function Home() {
  return (
    <main className='font-sans'>
    <div className={`max-w-screen-xl my-0 mx-auto relative text-center`}>
      <Logo/>
      <Title/>
      <Subtitle/>
      <StoreLink link="#"/>
    </div>
    <Bubbles/>
    <PatternLeft/>
    <PatternRight/>
    <PhoneImage/>
    <Card icon={hamburger} category="Food delivery" width={306} top={46} left={57} spent={96}/>
    <Card icon={cup} category="Breakfast" width={294} top={58} left={26} spent={25.16} split="Bogdan" total={57} 
    comment="We went to the restaurant after a morning jog"/>
    </main>
  );
}