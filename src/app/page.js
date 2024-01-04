"use client";

import Section from "../components/section/Section";
import SliderImges from "../components/Slider/SliderImges";
import Discover from "../components/DiscoverComponent/Discover";
import Center from "../components/center/Center";
import Footer from "../components/footer/Footer";
import { Provider } from "react-redux";
import store from "../store/store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Section />
        <SliderImges />
        <Discover />
      </Provider>
      <Center />
      <Footer />
    </>
  );
}
