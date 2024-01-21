// "use client";

import Section from "../components/section/Section";
import SliderImges from "../components/Slider/SliderImges";
import Discover from "../components/DiscoverComponent/Discover";
import Center from "../components/center/Center";
import Footer from "../components/footer/Footer";
import BaseURL from "../store/BaseURL";
// import { Provider } from "react-redux";
// import store from "../store/store";

async function getData() {
  try {
    const res = await BaseURL.get("slider");
    const data = await res.data.data;
    return data;
  } catch (e) {
    console.log(e);
  }
}

export default async function Home() {
  const data = await getData();

  console.log(data);

  return (
    <>
      {/* <Provider store={store}> */}
      <Section />
      <SliderImges data={data} />
      <Discover />
      {/* </Provider> */}
      <Center />
      <Footer />
    </>
  );
}
