import "@/styles/globals.css";
import "@/fonts/ArtifexCF/style.css";
import localFont from "@next/font/local";
const artifexCF = localFont({
  src: "../fonts/ArtifexCF/ArtifexCF-Regular.woff2",
  variable: "--font-artifexCF",
});
const utsaah = localFont({
  src:[
    {
      path:"../fonts/Utsaah/utsaah.ttf",
      weight:'400',
      style:'normal',
    },
    {
      path:"../fonts/Utsaah/utsaahb.ttf",
      weight:'700',
      style:'normal',
    },
    {
      path:"../fonts/Utsaah/utsaahi.ttf",
      weight:'400',
      style:'italic',
    },
    {
      path:"../fonts/Utsaah/utsaahbi.ttf",
      weight:'700',
      style:'italic',
    },
  ],
  variable:"--font-utsaah"
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${artifexCF.variable} ${utsaah.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
