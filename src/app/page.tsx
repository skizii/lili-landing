import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-plus-jakarta-sans'
})

export default function Home() {
  return (
    <main className={`${plusJakartaSans.variable} font-sans`}>
      <h1>Hello world!</h1>
    </main>
  );
}