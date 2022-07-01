// Components
import Banner from "../components/Banner";
import Search from "../components/Search";
import SpecialOffers from "../components/SpecialOffers";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <Banner />

      <div className="container px-4">
        <Search />
        <SpecialOffers />
        <AboutUs />
      </div>
    </>
  )
}
