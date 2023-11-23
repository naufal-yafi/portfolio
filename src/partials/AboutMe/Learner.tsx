import Button from "@component/Button";
import {
  ContentButton,
  ContentDescription,
  ContentText,
  ContentTitle,
} from "@component/ContentText";
import GroupButton from "@component/GroupButton";
import imgDesign from "@image/img-design.webp";
import imgEditing from "@image/img-editing.webp";
import imgJobEditor from "@image/img-job-editor.webp";
import Image from "next/image";

const Learner = () => {
  return (
    <>
      <section className="px-6 lg:px-32 mt-24">
        <h1 className="text-3xl md:text-5xl text-center">
          Apart from that, I also learned other things
        </h1>
      </section>

      <section className="h-screen md:h-[80vh] overflow-hidden flex justify-center items-center mt-14 group cursor-zoom-out">
        <div className="flex justify-center items-center w-full">
          <Image
            src={imgEditing}
            alt="homepage"
            width={450}
            height={450}
            quality={100}
            className="w-full blur-[2px] scale-[2] lg:scale-100 group-hover:blur-none group-hover:scale-[0.8] transition-all saturate-[.3] group-hover:saturate-100"
            loading="lazy"
          />
        </div>
        <ContentText>
          <ContentTitle>Learn New Software Video Editing</ContentTitle>
          <ContentDescription>
            First time use Davinci Resolve
          </ContentDescription>
        </ContentText>
      </section>

      <section className="w-full h-screen md:h-[80vh] overflow-hidden flex justify-center items-center group cursor-zoom-out">
        <div className="flex justify-center items-center w-full">
          <Image
            src={imgJobEditor}
            alt="homepage"
            width={450}
            height={450}
            quality={100}
            className="w-full blur-[2px] scale-[2] lg:scale-100 group-hover:blur-none group-hover:scale-[0.8] transition-all saturate-[.3] group-hover:saturate-100"
            loading="lazy"
          />
        </div>

        <ContentText align="right">
          <ContentTitle>Editor Broadcasting WPi TV</ContentTitle>
          <ContentDescription>
            I edited the interview video to be made into a video tape (VT) while
            on air
          </ContentDescription>
          <ContentButton align="right">
            <Button link="https://www.youtube.com/watch?v=ltgev0qIrvI">
              Watch now
            </Button>
          </ContentButton>
        </ContentText>
      </section>

      <section className="h-screen md:h-[80vh] overflow-hidden flex justify-center items-center mt-14 group cursor-zoom-out">
        <div className="flex justify-center items-center w-full">
          <Image
            src={imgDesign}
            alt="homepage"
            width={450}
            height={450}
            quality={100}
            className="w-full blur-[2px] scale-[2] lg:scale-100 group-hover:blur-none group-hover:scale-[0.8] transition-all saturate-[.3] group-hover:saturate-100 opacity-40 group-hover:opacity-100"
            loading="lazy"
          />
        </div>
        <ContentText>
          <ContentTitle>
            <span className="translate-x-[0%] group-hover:translate-x-[-1000%] transition-transform duration-700">
              UI/UX Design, Graphic Design
            </span>
          </ContentTitle>
          <ContentDescription>
            My hobby is in the field of design, one of which is UI UX Design I
            uploaded it on Behance. I also create my own poster designs upload
            it on Dribbble.
          </ContentDescription>
          <ContentButton>
            <GroupButton>
              <Button color="yellow" link="https://www.behance.net/naufal-yafi">
                Behance
              </Button>
              <Button type="outline" link="https://dribbble.com/naufal_yaf">
                Dribbble
              </Button>
            </GroupButton>
          </ContentButton>
        </ContentText>
      </section>
    </>
  );
};

export default Learner;
