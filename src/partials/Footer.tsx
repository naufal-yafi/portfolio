import Button from "@component/Button";
import iconArrowUp from "@image/arrow-up.svg";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center py-24">
      <Button
        type="outline"
        icon={iconArrowUp}
        right_position_icon={true}
        link="#"
        openNewTab={false}
      >
        Back to top
      </Button>
    </footer>
  );
};

export default Footer;
