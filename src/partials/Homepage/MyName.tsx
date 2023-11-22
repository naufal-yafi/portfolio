import Button from "@component/Button";
import GroupButton from "@component/GroupButton";
import iconCycleArrow from "@image/cycle-arrow.svg";
import iconLinkedin from "@image/linkedin-icon.svg";

const MyName = () => {
  return (
    <section className="px-6 text-center mt-44 mb-8 font-bold flex flex-col justify-start items-center">
      <h1 className="absolute translate-y-[-10px] md:translate-y-[-5px] text-xl md:2xl">
        My name...
      </h1>
      <h2 className="text-5xl md:text-8xl w-full lg:w-1/2 tracking-wide text-neutral-800 text-center mb-10">
        <span className="fill-transparent stroke-2 stroke-neutral-50">
          MUHAMMAD{" "}
        </span>
        <span className="text-neutral-50 font-light italic">NAUFAL </span>
        <span>YAFI&apos;</span>
      </h2>

      <GroupButton centerEver={true}>
        <Button
          icon={iconLinkedin}
          link="https://www.linkedin.com/in/naufal-yafi/"
        >
          linked.in/naufal-yafi
        </Button>
        <Button
          type="outline"
          icon={iconCycleArrow}
          openNewTab={false}
          link="/about-me"
        >
          Find out about it...
        </Button>
      </GroupButton>
    </section>
  );
};

export default MyName;
