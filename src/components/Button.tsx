import Image from "next/image";
import Link from "next/link";

const Button = (props: any) => {
  let style;

  if (props.type === "outline") {
    style = `bg-transparent border-2 ${
      props.color === "white"
        ? "border-neutral-50 text-neutral-50"
        : "border-yellow text-yellow"
    }`;
  } else {
    style = `text-neutral-900 border-2 ${
      props.color === "white"
        ? "border-neutral-50 bg-neutral-50"
        : "border-2 border-yellow bg-yellow"
    }`;
  }

  return (
    <Link href={props.link} target={props.openNewTab ? "_blank" : "_self"}>
      <button
        className={`w-full md:w-auto text-sm font-medium rounded-full px-8 h-12 hover:opacity-80 flex ${
          props.right_position_icon ? "flex-row-reverse" : "flex-row"
        } gap-4 items-center ${style}`}
      >
        {props.icon !== "" ? (
          <Image src={props.icon} alt="icon" width={24} height={24} />
        ) : null}
        {props.children}
      </button>
    </Link>
  );
};

Button.defaultProps = {
  link: "/",
  children: "Your Label",
  type: "bg-fill", // bg-fill or outline
  color: "white", // white or yellow
  right_position_icon: false, // false or true
  icon: "", // url image
  openNewTab: true,
};

export default Button;
