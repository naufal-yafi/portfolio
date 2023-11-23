import Jumbotron from "@partial/AboutMe/Jumbotron";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "About me - Muhammad Naufal Yafi' | Portfolio",
};

const Journey = dynamic(() => import("@partial/AboutMe/Journey"));
const Education = dynamic(() => import("@partial/AboutMe/Education"));
const Footer = dynamic(() => import("@partial/Footer"));
const Learner = dynamic(() => import("@partial/AboutMe/Learner"));
const SocialMedia = dynamic(() => import("@partial/AboutMe/SocialMedia"));

export default function AboutMe() {
  return (
    <>
      <Jumbotron />
      <Journey />
      <SocialMedia />
      <Education />
      <Learner />
      <Footer />
    </>
  );
}
