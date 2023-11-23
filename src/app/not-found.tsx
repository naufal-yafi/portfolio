import Button from "@component/Button";
import {
  ContentButton,
  ContentDescription,
  ContentText,
  ContentTitle,
} from "@component/ContentText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Portfolio",
};

export default function NotFound() {
  return (
    <main className="h-screen md:h-[100vh] overflow-hidden flex justify-center items-center">
      <ContentText>
        <ContentTitle>404 - Page Not Found</ContentTitle>
        <ContentDescription>
          You may get lost in the wrong address, please do not change the URL
          address carelessly.
        </ContentDescription>
        <ContentButton>
          <Button color="yellow" openNewTab={false}>
            Back to home
          </Button>
        </ContentButton>
      </ContentText>
    </main>
  );
}
