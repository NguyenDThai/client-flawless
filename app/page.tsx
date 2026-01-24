import Banner from "@/app/components/Banner";
import IntroWeb from "@/app/components/IntroWeb";
import NewArrivals from "@/app/components/NewArrivals";
import OptionBanner from "@/app/components/OptionBanner";
import SkincareRegimen from "@/app/components/SkincareRegimen";

export default function Home() {
  return (
    <>
      <Banner />
      <NewArrivals />
      <IntroWeb />
      <OptionBanner />
      <SkincareRegimen />
    </>
  );
}
