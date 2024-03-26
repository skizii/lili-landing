import Logo from "@/components/logo";
import {PatternLeft, PatternRight} from "@/components/patterns";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import StoreLink from "@/components/store-link";
import Phone from "@/components/phone";
import Bubbles from "@/components/bubbles";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className='relative h-screen overflow-hidden font-sans'>
      <div className={`relative flex flex-col items-center max-w-[1200px] min-h-screen my-0 mx-auto text-center`}>
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
    </main>
  );
}