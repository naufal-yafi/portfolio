import Button from "@component/Button";
import iconCycleArrow from "@image/cycle-arrow.svg";
import iconLinkedin from "@image/linkedin-icon.svg";

const MyName = () => {
  return (
    <section className="text-center mt-28 mb-8 font-bold flex flex-col justify-start items-center">
      <h1 className="absolute translate-y-[-5px] text-2xl">My name...</h1>
      <h2 className="text-8xl w-1/2 tracking-wide text-neutral-800">
        <span className="fill-transparent stroke-2 stroke-neutral-50">
          MUHAMMAD{" "}
        </span>
        <span className="text-neutral-50 font-light italic">NAUFAL </span>
        <span>YAFI&apos;</span>
      </h2>

      <div className="flex gap-4 mt-10">
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
      </div>
    </section>
  );
};

export default MyName;
