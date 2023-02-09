import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-orange-600 font-bold text-xl pb-2">Merhaba! Ben,</p>
        <div>
          <h1 className="text-5xl sm:text-7xl font-bold flex flex-row text-[#ccd6f6]">
            Emre{" "}
          </h1>
          <h1 className="text-5xl sm:text-7xl font-bold flex flex-row text-orange-600">
            Doğramacı
          </h1>
        </div>
        <h2 className="text-2xl sm:text-4xl py-3 font-bold text-[#8892b0]">
          Junior Front End Developer
        </h2>
        <p className="text-m sm:text-lg text-[#8892b0] py-4 max-w-[700px]">
          Front End, React geliştirme ile ilgileniyorum. Yaptığım işlerin
          demolarına ve kaynak kodlarına aşağıdaki bölümden ulaşabilirsiniz.{" "}
        </p>
        <div className="flex justify-start cursor-pointer">
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-600 hover:border-orange-600"
          >
            {" "}
            Yaptıklarım
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
