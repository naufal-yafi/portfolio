import iconFirebase from "@image/firebase-icon.png";
import iconGit from "@image/git-icon.png";
import iconNext from "@image/next-icon.png";
import iconReact from "@image/react-icon.png";
import iconTailwind from "@image/tailwind-icon.png";
import Image from "next/image";

const TechStack = () => {
  const techStacks = [
    {
      id: 1,
      img: iconNext,
    },
    {
      id: 2,
      img: iconReact,
    },
    {
      id: 3,
      img: iconTailwind,
    },
    {
      id: 4,
      img: iconGit,
    },
    {
      id: 5,
      img: iconFirebase,
    },
  ];

  return (
    <section className="w-full flex justify-center items-center gap-10 pt-10 h-[80px]">
      {techStacks.map((tech) => (
        <div key={tech.id}>
          <Image
            src={tech.img}
            alt="tech icon"
            width={80}
            height={80}
            className="w-fit h-[40px] hover:h-[60px] saturate-0 opacity-50 hover:saturate-100 hover:opacity-100 cursor-zoom-in transition-all duration-500"
          />
        </div>
      ))}
    </section>
  );
};

export default TechStack;
