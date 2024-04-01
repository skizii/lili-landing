import Logo from "@/components/logo";
import {PatternLeft, PatternRight} from "@/components/patterns";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import StoreLink from "@/components/store-link";
import Phone from "@/components/phone";
import Bubbles from "@/components/bubbles";
import Footer from "@/components/footer";

import YMetrika from "./YMetrika";

export default function Home() {
  return (
    <main className='relative h-dvh overflow-hidden font-sans'>
      <div className={`relative flex flex-col justify-between md:justify-normal items-center max-w-[1200px] min-h-full my-0 mx-auto text-center`}>
        <Logo/>
        <Title/>
        <Subtitle/>
        <StoreLink link="#"/>
        <Phone/>
      </div>
      <Bubbles/>
      <PatternLeft/>
      <PatternRight/>
      <Footer/>
      <YMetrika counter={96878953}/>
    </main>
  );
}