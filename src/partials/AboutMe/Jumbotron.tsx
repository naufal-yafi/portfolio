import Button from "@component/Button";
import {
  ContentButton,
  ContentText,
  ContentTitle,
} from "@component/ContentText";
import imgAbout from "@image/img-about.webp";
import Image from "next/image";

const Jumbotron = () => {
  return (
    <main className="h-screen md:h-[80vh] overflow-hidden flex justify-center items-center">
      <div className="flex justify-center items-center w-full">
        <Image
          src={imgAbout}
          alt="homepage"
          width={450}
          height={450}
          quality={100}
          className="w-full blur-[2px] scale-[2] lg:scale-100"
          priority
        />
      </div>
      <ContentText>
        <ContentTitle>Why do you want to know about me?</ContentTitle>

        <ContentButton>
          <Button color="yellow" openNewTab={false}>
            Back to home
          </Button>
        </ContentButton>
      </ContentText>
    </main>
  );
};

export default Jumbotron;
