import { Suspense } from "react";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import YandexMetrika from "./lib/yandex-metrika";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '800'],
  variable: '--font-plus-jakarta-sans'
})

export const metadata = {
  title: "lili",
  description: "Simplify Your Budget Control",
  icons: {
    icon: 'icons/icon.svg',
    apple: 'icons/apple-icon.png',
    other: {
      rel: 'icon',
      url: 'icons/favicon.ico',
    }
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(96878953, "init", {
            defer:true,
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true,
            ecommerce:"dataLayerYa"
          });`,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<div><img src="https://mc.yandex.ru/watch/96878953" style="position:absolute; left:-9999px;" alt="" /></div>`,
          }}
        />
      </head>
      <Suspense>
        <YandexMetrika/>
      </Suspense>
      <body className={`${plus_jakarta_sans.variable} bg-main bg-bottom bg-net-pattern bg-no-repeat bg-repeat-x text-white`}>{children}</body>
    </html>
  );
}