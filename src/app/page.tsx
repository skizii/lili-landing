import Logo from "@/components/logo";
import {PatternLeft, PatternRight} from "@/components/patterns";
import Title from "@/components/title";
import Subtitle from "@/components/subtitle";
import StoreLink from "@/components/store-link";
import PhoneImage from "@/components/phoneImage";
import Bubbles from "@/components/bubbles";

export default function Home() {
  return (
    <>
    <main className={`font-sans max-w-screen-xl my-0 mx-auto relative text-center`}>
      <Logo/>
      <Title/>
      <Subtitle/>
      <StoreLink link="#"/>
    </main>
    <Bubbles/>
    <PatternLeft/>
    <PatternRight/>
    <PhoneImage/>
    </>
  );
}