import FooterSection from "../components/Footer";
import NewsSection from "../components/News";
import ImonialSection from "../components/TestImonials";
import Aboutus from "../components/aboutUs";

function Home() {
  return (
    <div>
      <Aboutus />
      <NewsSection/>
      <ImonialSection/>
      <FooterSection/>
    </div>
  );
}

export default Home;
