import { HeaderCarousel } from "../components/atoms/HeaderCarousel/HeaderCarousel.jsx";
import { Carousel } from "../components/molecules/Carousel/Carousel.jsx";
import { Information } from "../components/organisms/Information/Information.jsx";
export default function Home() {
  return (
    <>
      <Carousel />
      <HeaderCarousel />
      <Information />
    </>
  );
}
