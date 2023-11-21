import { limitText } from "@/libs/util";
import iconArrowRightUpBlack from "@image/arrow-right-up-black.svg";
import Button from "./Button";

const ProjectCard = (props: any) => {
  return (
    <div
      className={`w-[300px] h-[500px] rounded-md overflow-hidden ${
        props.disable ? "" : "hover:w-auto group"
      }`}
    >
      <div
        className={`w-[300px] h-[500px] ${
          props.disable
            ? "bg-gradient-to-r from-neutral-800 to-neutral-900"
            : "bg-neutral-800 group-hover:w-[500px] group-hover:h-[320px] transition-all duration-500"
        }`}
      ></div>
      {props.disable ? null : (
        <div className="mt-[75px]">
          <p className="mb-5">
            {limitText("I made this project to learn nextjs and tailwind.", 60)}
          </p>
          <Button
            color="yellow"
            icon={iconArrowRightUpBlack}
            openNewTab={false}
            right_position_icon={true}
          >
            See Project
          </Button>
        </div>
      )}
    </div>
  );
};

ProjectCard.defaultProps = {
  disable: false,
};

export default ProjectCard;
