import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <div className="h-screen bg-red"></div>
        <div className="h-screen bg-gold"></div>
      </>
    </>
  );
}
