import Head from "next/head";
import Marquee from "react-fast-marquee";
import Modal from "react-modal";
import { useState } from "react";
export default function AboutUs() {
  const [company, setCompany] = useState(false);
  const [team, setTeam] = useState(false);
  return (
    <>
      <Head>
        <title>About Us | Decamyra&apos;s</title>
        <meta name="description" content="Decamyra's" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-bgWhite min-h-full grid place-items-center px-4 md:px-20 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-evenly font-bold justify-between w-full text-3xl gap-y-5 md:gap-10">
          <button
            onClick={() => setCompany(true)}
            className="shadow-lg md:shadow-2xl py-20 rounded-2xl text-center hover:scale-105 transition-all duration-300 ease-in-out hover:border-4 border-gold"
          >
            Our Company
          </button>
          <button
            onClick={() => setTeam(true)}
            className="shadow-lg md:shadow-2xl py-20 rounded-2xl text-center hover:scale-105 transition-transform duration-300 ease-in-out hover:border-4 border-gold"
          >
            Our Team
          </button>
        </div>
        <div className=" space-y-10">
          <h2 className="text-center hover:scale-105 transition-transform duration-300 ease-in-out font-bold text-3xl">
            Our Clientele
          </h2>
          <Marquee
            speed={"50"}
            gradient={false}
            className="bg-black py-10 rounded-full"
          >
            <div className="flex flex-row gap-10">
              <img src="/carousel/1.jpg" className="object-cover h-[10vh]" />
              <img src="/carousel/2.jpg" className="object-cover h-[10vh]" />
              <img src="/carousel/3.jpg" className="object-cover h-[10vh]" />
              <img src="/carousel/1.jpg" className="object-cover h-[10vh]" />
              <img src="/carousel/2.jpg" className="object-cover h-[10vh]" />
              <img src="/carousel/3.jpg" className="object-cover h-[10vh]" />
            </div>
          </Marquee>
          <Modal
            isOpen={company}
            shouldCloseOnOverlayClick
            onRequestClose={() => setCompany(false)}
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                transform: "translate(-50%, -50%)",
              },
              overlay: {
                backdropFilter: "blur(15px)",
                zIndex: "10",
              },
            }}
          >
            <h2 className="font-bold text-2xl text-black">Our Company</h2>
            <div className="w-16 bg-gold h-1 my-1" />
            <p className="text-lg pt-4">
              Aanyah Management is a management consulting firm which provides
              business solutions to organizations by focusing on their
              efficiency and performance. We are a team of enthusiastic and
              passionate professionals providing in-depth guidance to key
              strategic issues through leveraging our industry expertise and
              using analytical rigor. We focus on results that go beyond
              financials and have a customized, realistic, holistic approach
              towards sustainable growth. Our strength lies in the fact that we
              work in synergy with the team to help the organization meet its
              strategic challenges and take advantage of opportunities. We
              specialize in establishing your business, or turning it around to
              profitability. With a collective experience of over 150 years, the
              Aanyah Management team members are proven experts in their
              respective fields across industries and have been successfully
              involved in launching new projects and revitalising existing
              businesses. With Aanyah, you can expect a one-stop solution to all
              your business requirements – General Operations Management, Human
              Resources Management, Learning and Development, Financial
              Planning, Process and System Development, Material Management,
              Public Relations & Marketing Management, Brand Architecture,
              Customer Relationship Management, General Administration, Business
              Excellence Standards, Organizational Development and Strategic
              Business Development. Take a step forward with us, and see the
              difference it makes to your business.
            </p>
            <button
              onClick={() => setCompany(false)}
              className="absolute top-1 right-2 p-0"
            >
              X
            </button>
          </Modal>
          <Modal
            isOpen={team}
            shouldCloseOnOverlayClick
            onRequestClose={() => setTeam(false)}
            style={{
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                transform: "translate(-50%, -50%)",
                display: "relative",
              },
              overlay: {
                backdropFilter: "blur(15px)",
                zIndex: "10",
              },
            }}
          >
            <h2 className="font-bold text-2xl text-black">Our Team</h2>
            <div className="w-16 bg-gold h-1 my-1" />
            <div className="flex flex-col gap-4 pt-5">
              <div className="flex flex-row items-center gap-5">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  className="rounded-full h-40 w-40"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Person 1</h2>
                  <p>Description about this person</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid voluptatem perspiciatis quae totam laudantium fuga
                    repellat, sit mollitia a ducimus consequatur ipsum sequi
                    quia culpa consectetur odit inventore delectus excepturi?
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center gap-5">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  className="rounded-full h-40 w-40"
                />
                <div className="flex flex-col text-right">
                  <h2 className="font-bold">Person 2</h2>
                  <p>Description about this person</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid voluptatem perspiciatis quae totam laudantium fuga
                    repellat, sit mollitia a ducimus consequatur ipsum sequi
                    quia culpa consectetur odit inventore delectus excepturi?
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-5">
                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  className="rounded-full h-40 w-40"
                />
                <div className="flex flex-col">
                  <h2 className="font-bold">Person 3</h2>
                  <p>Description about this person</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid voluptatem perspiciatis quae totam laudantium fuga
                    repellat, sit mollitia a ducimus consequatur ipsum sequi
                    quia culpa consectetur odit inventore delectus excepturi?
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setTeam(false)}
              className="absolute top-1 right-2 p-0"
            >
              X
            </button>
          </Modal>
        </div>
      </div>
    </>
  );
}
