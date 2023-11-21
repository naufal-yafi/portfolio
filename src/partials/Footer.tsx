import Button from "@component/Button";
import iconArrowUp from "@image/arrow-up.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col justify-center items-center pt-24 pb-14">
      <Button
        type="outline"
        icon={iconArrowUp}
        right_position_icon={true}
        link="#"
        openNewTab={false}
      >
        Back to top
      </Button>

      <p className="pt-14 text-center leading-loose text-sm font-light">
        <span className="opacity-100">
          Copyright © 2023 Muhammad Naufal Yafi&apos;
          <br />
        </span>
        <span className="opacity-70">
          This project is licensed under the MIT License - see the{" "}
        </span>
        <Link
          href="https://github.com/naufal-yafi/portfolio/blob/main/LICENSE"
          target="_blank"
        >
          <span className="underline text-yellow opacity-100 hover:opacity-70">
            LICENSE.md
          </span>
        </Link>{" "}
        <span className="opacity-70">file for details.</span>
      </p>
    </footer>
  );
};

export default Footer;
