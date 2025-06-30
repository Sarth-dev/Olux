import Image from "next/image";
import Navbar from "./Component/utils/Navbar";
import Footer from "./Component/utils/Footer";
import BikeBrandsSection from "./Component/BikeBrands";
import FeaturedBikes from "./Component/FeaturedBikes";
import SportsBikes from "./Component/SportsBikes";
import ElectricPromo from "./Component/ElectricPromo";
import ElectricBikeSlider from "./Component/BikeSlider";
import CustomerReviews from "./Component/Reviews";

export default function Home() {
  return (
    <>
     <Navbar/>
     <BikeBrandsSection/>
     <ElectricPromo/>
     <FeaturedBikes/>
     <SportsBikes/>
     <ElectricBikeSlider/>
     <CustomerReviews/>
     <Footer/>
    </>
  );
}
