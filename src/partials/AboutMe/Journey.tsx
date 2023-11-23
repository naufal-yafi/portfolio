"use client";

import Button from "@component/Button";
import Link from "next/link";
import { useState } from "react";

const Journey = () => {
  const [show, setShow] = useState(false);

  const HandleShowText = () => {
    setShow(!show);
  };

  return (
    <section className="px-6 lg:px-32 mt-14 flex flex-col">
      <div
        className={`overflow-hidden ${
          show ? "h-full" : "h-[350px]"
        } transition-all flex flex-col justify-start items-start`}
      >
        <h1 className="italic font-light text-4xl mb-8">My Journey</h1>
        <p className="font-light leading-loose tracking-wide">
          You could say I have a high curiosity, which makes me Personally want
          and continue to learn. Apart from that, I also have perfectionist
          nature that takes quite a long time to fix it until it&apos;s as good
          as possible. Also sufficient adaptation time taking a long time in a
          new environment is one of my shortcomings.
          <br /> <br />I got to know the world of programming when I was in SMP
          02 Wiradesa class 2, At that time, I only learned HTML and CSS, and
          went deeper again when I was in grade 2 at SMAN 01 Wiradesa, where
          That time is very suitable for learning programming, because of the
          activities teaching and learning is done online. So, I can learn
          things others and pursue what I love. Even though I&apos;m still
          learning HTML, CSS, Javascript from Mr. Sandika Galih (
          <Link href="https://www.youtube.com/@sandhikagalihWPU">
            <span className="underline italic text-yellow">
              Web Programming Unpas
            </span>
          </Link>
          ).
          <br /> <br />
          High school has ended. While waiting for an announcement from
          university or college, I bought the book &quot;Logic Basic Algorithms
          and Programming&quot; written by Rosa A.S. Book This made me know more
          deeply than the basic concepts programming.
          <br /> <br />
          The new school year has started, I am studying many languages
          programming on campus starting from Java, PHP, CSS Framework, Python.
          But of all these languages, I fell in love more JavaScript. Because I
          prefer the visual part and the framework for The FrontEnd itself uses
          mostly Javascript, so I learning React and also Next, until now.
          <br /> <br />
          <span className="text-xs" id="text">
            November 22, 2023
          </span>
        </p>
      </div>
      <div
        className={`${
          show
            ? "relative h-auto mt-8 justify-start"
            : "absolute h-[350px] justify-center"
        } w-full flex items-end left-0 bg-gradient-to-t from-neutral-900 to-transparent`}
      >
        <div onClick={HandleShowText}>
          <Button
            color={show ? "white" : "yellow"}
            type={show ? "outline" : "bg-fill"}
            link="#text"
            openNewTab={false}
          >
            {show ? "Read Less" : "Read More"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Journey;
