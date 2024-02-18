import Logo from "@/components/logo";
import {PatternLeft, PatternRight} from "@/components/patterns";
import Title from "@/components/title";

export default function Home() {
  return (
    <>
    <main className={`font-sans max-w-screen-xl my-0 mx-auto relative`}>
      <Logo/>
      <Title/>
    </main>
    <PatternLeft/>
    <PatternRight/>
    </>
  );
}