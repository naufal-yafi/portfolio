import Jumbotron from "@partial/AboutMe/Jumbotron";
import { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "About me - Muhammad Naufal Yafi' | Portfolio",
};

const Journey = dynamic(() => import("@partial/AboutMe/Journey"));
const Footer = dynamic(() => import("@partial/Footer"));

export default function AboutMe() {
  return (
    <>
      <Jumbotron />
      <Journey />
      <Footer />
    </>
  );
}
