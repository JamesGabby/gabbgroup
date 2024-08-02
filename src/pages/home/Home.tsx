import SectionOne from "./section-one/section-one.component";
import HomeNav from "./home-nav/home-nav.component";
import SectionTwo from "./section-two/section-two.component";
import { Helmet } from "react-helmet-async";

const Home = () => (
  <div className="App">
    <Helmet>
      <title>Home</title>
      <meta 
        name='description' 
        content='GabbGroup Tech Recruitment Consultancy Homepage' 
      />
    </Helmet>
    <SectionOne />
    <SectionTwo />
    <HomeNav />
  </div>
);

export default Home;