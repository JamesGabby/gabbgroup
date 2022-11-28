import { Helmet } from "react-helmet-async";
import SectionTwo from "./section-two/section-two.component";

const Accounting = () => (
  <div className="App">
    <Helmet>
      <title>About</title>
      <meta 
        name='description' 
        content='GabbGroup FinTech Recruitment Consultancy About Page' 
      />
    </Helmet>
    <SectionTwo />
  </div>
);

export default Accounting;