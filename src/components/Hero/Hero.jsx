import React from "react";
import heroImg from "../../assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="relative bg-white dark:bg-gray-900 overflow-hidden flex items-center justify-center"
      style={{
        minHeight: "600px",
      }}
    >
      <img
        src={heroImg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none select-none"
        aria-hidden="true"
      />

      <div className="relative px-4 mx-auto max-w-screen-xl text-center lg:px-12 flex flex-col items-center">
        <h1 className=" tracking-tight leading-none text-white text-6xl font-extrabold [text-shadow:_1px_1px_2px_black]">
          Befektetünk a világ frissességébe!
        </h1>
        <p className="mt-8 mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-900">
          A Fruito-nál a legfrissebb, legfinomabb gyümölcsöket hozzuk el neked,
          közvetlenül a termelőktől.
        </p>
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-gray-900 uppercase">
            MEGJELENTÜNK ITT IS
          </span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
            <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              <a href="#">
                <img
                  src="src/icons/facebook.svg"
                  alt="Facebook"
                  className="w-8 h-8"
                />
              </a>
            </span>
            <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              <div className="flex gap-4">
                <a href="#">
                  <img
                    src="src/icons/instagram.svg"
                    alt="Instagram"
                    className="w-8 h-8"
                  />
                </a>
              </div>
            </span>
            <span className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
              <a href="#">
                <img
                  src="src/icons/tiktok.svg"
                  alt="TikTok"
                  className="w-8 h-8"
                />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
