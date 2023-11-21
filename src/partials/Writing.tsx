import Button from "@component/Button";
import {
  ContentButton,
  ContentDescription,
  ContentText,
  ContentTitle,
} from "@component/ContentText";
import imgReadBook from "@image/img-read-book.webp";
import Image from "next/image";

const Writing = () => {
  return (
    <main className="h-[90vh] overflow-hidden flex justify-center items-center pt-44">
      <div className="flex justify-center items-center w-full">
        <Image
          src={imgReadBook}
          alt="read book"
          width={450}
          height={450}
          quality={100}
          className="w-full blur-sm scale-[2] lg:scale-100"
          priority
        />
      </div>
      <ContentText align="right">
        <ContentTitle>Always and continue to learn</ContentTitle>
        <ContentDescription>
          I write whatever it is as a trace of my thoughts and what I learned.
        </ContentDescription>
        <ContentButton align="right">
          <Button
            color="yellow"
            link="https://medium.com/@muhammadnaufalyafi00"
          >
            Read my writing
          </Button>
        </ContentButton>
      </ContentText>
    </main>
  );
};

export default Writing;
