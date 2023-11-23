import Button from "@component/Button";
import {
  ContentButton,
  ContentDescription,
  ContentText,
  ContentTitle,
} from "@component/ContentText";
import imgFace from "@image/img-light.webp";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <section className="flex justify-center items-center w-full px-6 lg:px-32 mt-24">
      <Image
        src={imgFace}
        alt="my face"
        width={450}
        height={450}
        className="saturate-50 scale-[.8] hover:saturate-[1] hover:scale-100 transition-all duration-700 cursor-zoom-in"
      />
      <ContentText absolute={false}>
        <ContentTitle>Find out more about me</ContentTitle>
        <ContentDescription></ContentDescription>
        <ContentButton>
          <Button link="https://www.instagram.com/yaf.tsx/" type="outline">
            My Instagram
          </Button>
        </ContentButton>
      </ContentText>
    </section>
  );
};

export default SocialMedia;
