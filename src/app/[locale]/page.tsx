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
    <main className='relative h-dvh overflow-hidden font-sans'>
      <div className={`relative flex flex-col justify-between md:justify-normal items-center max-w-[1200px] min-h-full my-0 mx-auto text-center`}>
        <Logo className='pt-[30px]'/>
        {/* @ts-ignore */}
        <Title>Take control<br/>of your money</Title>
        <Subtitle>Explore and analyze your budget with a very intuitive interface</Subtitle>
        <StoreLink link="https://apps.apple.com/hr/app/lili-expense-money-tracker/id6450484559"/>
        <Phone/>
      </div>
      <Bubbles/>
      <PatternLeft/>
      <PatternRight/>
      <Footer/>
    </main>
  );
}
