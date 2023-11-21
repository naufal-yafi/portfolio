import Button from "@component/Button";
import {
  ContentButton,
  ContentDescription,
  ContentText,
  ContentTitle,
} from "@component/ContentText";
import iconDownloadCloud from "@image/download-cloud.svg";
import Image from "next/image";

const Home = () => {
  return (
    <main className="h-screen md:h-[80vh] overflow-hidden flex justify-center items-center">
      <div className="flex justify-center items-center w-full">
        <Image
          src="/homepage.webp"
          alt="homepage"
          width={450}
          height={450}
          quality={100}
          className="w-full blur-md scale-[2] lg:scale-100"
          priority
        />
      </div>
      <ContentText>
        <ContentTitle>Make your website more lively</ContentTitle>
        <ContentDescription>
          At this time I am currently taking 5rd semester lectures at STMIK
          Widya Pratama at the bachelor&apos;s degree in Informatics
          Engineering.
        </ContentDescription>
        <ContentButton>
          <Button
            color="yellow"
            link="https://mail.google.com/mail/u/1/#inbox?compose=DmwnWrRqhbxjNQVXctwMBdrCvjLTMfVvNKlpCdkVfWfDgwMBWvQHQzzqHlTmtXhpKLLTVxvXKrmb"
            openNewTab={false}
          >
            Contact.me
          </Button>
          <Button type="outline" icon={iconDownloadCloud} openNewTab={false}>
            Download CV
          </Button>
        </ContentButton>
      </ContentText>
    </main>
  );
};

export default Home;
