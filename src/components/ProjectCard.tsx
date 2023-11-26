import { limitText } from "@/libs/util";
import iconArrowRightUpBlack from "@image/arrow-right-up-black.svg";
import Image from "next/image";
import Button from "./Button";

const ProjectCard = (props: any) => {
  return (
    <div
      className={`w-[300px] h-[500px] rounded-md overflow-hidden ${
        props.disable ? "cursor-not-allowed" : "hover:w-auto group"
      }`}
    >
      <div
        className={`w-[300px] h-[500px] ${
          props.disable
            ? "bg-gradient-to-b sm:bg-gradient-to-r from-neutral-800 to-neutral-900"
            : "bg-neutral-800 group-hover:w-[500px] group-hover:h-[280px] sm:group-hover:h-[320px] transition-all duration-500 cursor-zoom-in"
        }`}
      >
        <div className="flex w-full h-full justify-center items-center">
          <Image
            src={props.img}
            alt="project display"
            width={1920}
            height={960}
            className="object-cover h-full w-full flex justify-center items-center"
            quality={100}
            loading="lazy"
          />
        </div>
      </div>
      {props.disable ? null : (
        <div className="mt-[75px]">
          <p className="mb-5">{limitText(props.title, 60)}</p>
          <Button
            color="yellow"
            icon={iconArrowRightUpBlack}
            openNewTab={false}
            right_position_icon={true}
            link={props.link}
          >
            See Project
          </Button>
        </div>
      )}
    </div>
  );
};

ProjectCard.defaultProps = {
  title: "Your Title",
  disable: false,
  link: "",
  img: "",
};

export default ProjectCard;
