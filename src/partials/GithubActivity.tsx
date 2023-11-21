import Button from "@component/Button";
import imgGithubActivity from "@image/github-activity.svg";
import iconGithub from "@image/github-icon.svg";
import Image from "next/image";

const GithubActivity = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center px-48 mt-24 mb-20 group h-[140px] hover:h-[250px] overflow-hidden transition-all duration-500 cursor-zoom-in">
      <p className="text-xs mb-4 group-hover:mb-0 group-hover:opacity-0 transition-opacity">
        336 contributions in the last year
      </p>
      <Image
        src={imgGithubActivity}
        alt="github activity"
        width={450}
        height={450}
        className="w-[350px] group-hover:blur-md group-hover:w-[650px] transition-all duration-500"
        quality={100}
        loading="lazy"
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <Button
          icon={iconGithub}
          link="https://github.com/naufal-yafi?tab=repositories"
        >
          See all activity
        </Button>
      </div>
    </section>
  );
};

export default GithubActivity;
