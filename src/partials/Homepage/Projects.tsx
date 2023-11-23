import Button from "@component/Button";
import ProjectCard from "@component/ProjectCard";
import iconArrowRightUpYellow from "@image/arrow-right-up-yellow.svg";

const Projects = () => {
  return (
    <section className="ps-20 w-fit flex items-end gap-5 py-32">
      <div className="w-[420px]">
        <p className="mb-8 text-lg transition-all">
          Several projects that I have completed...
        </p>
        <Button
          icon={iconArrowRightUpYellow}
          color="yellow"
          type="outline"
          openNewTab={false}
        >
          More Projects
        </Button>
      </div>

      <ProjectCard />
      <ProjectCard disable={true} />
    </section>
  );
};

export default Projects;
