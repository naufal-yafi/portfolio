"use client";

import Button from "@component/Button";
import useShowState from "@hook/useShowState";

const Education = () => {
  const { show, handleToggleShow } = useShowState();

  return (
    <section className="px-6 lg:px-32 mt-24 pb-10">
      <h1 className="text-4xl italic font-light" id="education">
        Education History
      </h1>

      <div className="flex flex-col justify-start items-start">
        <ul
          className={`mt-5 list-disc ps-4 lg:ps-8 overflow-hidden ${
            show ? "h-full" : "h-[430px]"
          }`}
        >
          <li>
            <h2 className="text-2xl text-yellow font-light">
              STMIK Widya Pratama Pekalongan
            </h2>
            <h3 className="text-sm opacity-80 font-light">
              Informatics Engineering
            </h3>

            <h4 className="mt-5 italic font-light text-lg">Organization: </h4>
            <ul className="font-light ps-2 opacity-80">
              <li>- Broadcasting WPi TV</li>
            </ul>

            <h4 className="mt-2 italic font-light text-lg">Interested: </h4>
            <ul className="font-light ps-2 opacity-80">
              <li>- Web Developer</li>
              <li>- Design</li>
              <li>- Public Speaking</li>
            </ul>
          </li>

          <li className="mt-6">
            <h2 className="text-2xl text-yellow font-light">
              SMAN 01 Wiradesa
            </h2>
            <h3 className="text-sm opacity-80 font-light">Social Science</h3>

            <h4 className="mt-5 italic font-light text-lg">Events: </h4>
            <ul className="font-light ps-2 opacity-80">
              <li>- Poster</li>
            </ul>

            <h4 className="mt-2 italic font-light text-lg">Interested: </h4>
            <ul className="font-light ps-2 opacity-80">
              <li>- Sociology</li>
              <li>- Bahasa</li>
              <li>- Photography</li>
            </ul>
          </li>

          <li className="mt-6">
            <h2 className="text-2xl text-yellow font-light">
              SMPN 02 Wiradesa
            </h2>

            <h4 className="mt-2 italic font-light text-lg">Interested: </h4>
            <ul className="font-light ps-2 opacity-80">
              <li>- Design</li>
              <li>- Web Developer</li>
              <li>- Drawing</li>
            </ul>
          </li>

          <li className="mt-6">
            <h2 className="text-2xl text-yellow font-light">SDN 01 Pekuncen</h2>

            <h4 className="mt-2 italic font-light text-lg">Interested: </h4>
            <ul className="font-light ps-2 opacity-80">
              <li>- Drawing</li>
            </ul>
          </li>

          <li className="mt-6">
            <h2 className="text-2xl text-yellow font-light">
              TK Mekar Sari Mayangan
            </h2>

            <h4 className="mt-2 italic font-light text-lg">Interested: </h4>
            <ul className="font-light ps-2 opacity-80">
              <li>- Drawing</li>
            </ul>
          </li>
        </ul>
        <div
          className={`${
            show
              ? "relative h-auto justify-start mt-8"
              : "absolute h-[460px] justify-center"
          } w-full flex items-end left-0 bg-gradient-to-t from-neutral-900 to-transparent`}
        >
          <div
            onClick={handleToggleShow}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleToggleShow();
              }
            }}
          >
            <Button
              type={show ? "outline" : "bg-fill"}
              link="#education"
              openNewTab={false}
            >
              {show ? "Read Less" : "Read More"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
