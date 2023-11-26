import Button from "@component/Button";
import ProjectCard from "@component/ProjectCard";
import iconArrowRightUpYellow from "@image/arrow-right-up-yellow.svg";
import imgProjectCollosal from "@image/img-project-collosal.webp";

export function ProjectsDesktopView() {
  return (
    <section className="ps-20 w-fit flex flex-col lg:flex-row items-end gap-5 py-32">
      <div className="w-[420px]">
        <p className="mb-8 text-lg transition-all">
          Several projects that I have completed...
        </p>
        <Button
          icon={iconArrowRightUpYellow}
          color="yellow"
          type="outline"
          openNewTab={false}
          disable={true}
        >
          More Projects
        </Button>
      </div>

      <ProjectCard
        img={imgProjectCollosal}
        title="Slicing Design Using NextJS and TailwindCSS"
        link="https://github.com/naufal-yafi/collosal-slicing-design"
      />
      <ProjectCard disable={true} />
    </section>
  );
}

export function ProjectsMobileView() {
  return (
    <section className="px-6 w-full pt-32 pb-0 sm:pb-32">
      <div className="text-center flex flex-col items-center mb-10">
        <p className="mb-4 text-lg transition-all">
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

      <div className="flex flex-col sm:flex-row gap-4 mt-5">
        <ProjectCard
          img={imgProjectCollosal}
          title="Slicing Design Using NextJS and TailwindCSS"
          link="https://github.com/naufal-yafi/collosal-slicing-design"
        />
        <ProjectCard disable={true} />
      </div>
    </section>
  );
}
