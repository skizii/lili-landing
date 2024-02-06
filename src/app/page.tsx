import { Plus_Jakarta_Sans } from "next/font/google";

import Logo from "@/components/logo";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plus-jakarta-sans'
})

export default function Home() {
  return (
    <main className={`${plusJakartaSans.variable} font-sans max-w-screen-xl my-0 mx-auto`}>
      <h1 className="text-accent">Hello world!</h1>
      <Logo/>
    </main>
  );
}