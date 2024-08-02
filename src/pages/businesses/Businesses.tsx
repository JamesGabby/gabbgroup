import { Helmet } from "react-helmet-async";
import SectionTwo from "./section-two/section-two.component";

const Businesses = () => {

  return (
    <div className="App">
      <Helmet>
        <title>Vacancies</title>
        <meta 
          name='description' 
          content='GabbGroup Recruitment Consultancy Vacancies, Tech Jobs' 
        />
      </Helmet>
      <SectionTwo />
    </div>
  );
}

export default Businesses;