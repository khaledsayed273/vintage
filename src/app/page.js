import Section from "../components/section/Section";
import SliderImges from "../components/Slider/SliderImges";
import Discover from "../components/DiscoverComponent/Discover";
import Center from "../components/center/Center";
import Footer from "../components/footer/Footer";

// async function getData() {
//   let loading = true
//   try {
//     const res = await BaseURL.get("sliderr");
//     const data = await res.data;
//     loading = false
//     return {data , loading};
//   } catch (e) {
//     loading = false
//     return {e , loading}
//   }
// }

// export const revalidate = +process.env.revalidate

export default async function Home() {
  // const {data , loading } = await getData();

  const baseUrl = process.env.baseUrl

  return (
    <>
      <Section />
      <SliderImges baseUrl={baseUrl} />
      <Discover />
      <Center />
      <Footer />
    </>
  );
}
