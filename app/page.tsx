import Banner from "@/app/components/Banner";
import CustomerSay from "@/app/components/CustomerSay";
import IntroWeb from "@/app/components/IntroWeb";
import LovedByCustomers from "@/app/components/LovedByCustomers";
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
      <LovedByCustomers />
      <CustomerSay />
    </>
  );
}
