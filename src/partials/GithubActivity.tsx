import Button from "@component/Button";
import imgGithubActivity from "@image/github-activity.svg";
import iconGithub from "@image/github-icon.svg";
import Image from "next/image";

const GithubActivity = () => {
  return (
    <section className="w-full flex justify-center items-center px-48 mt-24">
      <Image
        src={imgGithubActivity}
        alt="github activity"
        width={450}
        height={450}
        className="w-[750px] blur-md"
        quality={100}
        loading="lazy"
      />
      <div className="absolute">
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
