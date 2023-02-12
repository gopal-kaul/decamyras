import Head from "next/head";
export default function Services() {
  return (
    <>
      <Head>
        <title>Services | Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="grid place-items-center min-h-full bg-bgWhite px-4 md:px-20 gap-y-5 md:gap-0">
        <div className="rounded-2xl w-full bg-white shadow-2xl px-5 py-4 hover:scale-105 transition-all duration-300 hover:border-4 border-gold ease-in-out">
          <h2 className="font-bold text-xl md:text-2xl">Redesigning</h2>
          <hr />
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            saepe rem veniam, perferendis quae, repudiandae recusandae magni sed
            facilis similique voluptatem laudantium pariatur at, corporis
            reiciendis repellendus distinctio ad suscipit?
          </p>
        </div>
        <div className="rounded-2xl w-full bg-white shadow-2xl px-5 py-4 hover:scale-105 transition-all duration-300 hover:border-4 border-gold ease-in-out">
          <h2 className="font-bold text-xl md:text-2xl">Refurbishment</h2>
          <hr />
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            saepe rem veniam, perferendis quae, repudiandae recusandae magni sed
            facilis similique voluptatem laudantium pariatur at, corporis
            reiciendis repellendus distinctio ad suscipit?
          </p>
        </div>
        <div className="rounded-2xl w-full bg-white shadow-2xl px-5 py-4 hover:scale-105 transition-all duration-300 hover:border-4 border-gold ease-in-out">
          <h2 className="font-bold text-xl md:text-2xl">Replenishment</h2>
          <hr />
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            saepe rem veniam, perferendis quae, repudiandae recusandae magni sed
            facilis similique voluptatem laudantium pariatur at, corporis
            reiciendis repellendus distinctio ad suscipit?
          </p>
        </div>
      </div>
    </>
  );
}
