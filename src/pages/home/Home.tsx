import SectionOne from "./section-one/section-one.component";
import HomeNav from "./home-nav/home-nav.component";
import SectionTwo from "./section-two/section-two.component";

const Home = () => (
  <div className="App">
    <SectionOne />
    <SectionTwo />
    <HomeNav />
  </div>
);

export default Home;