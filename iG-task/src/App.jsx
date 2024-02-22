

import CoreFetaures from "./Component/CoreFetaures";
import Faq from "./Component/Faq";
import Features from "./Component/Features";
import Footer from "./Component/Footer";
import FreeTutorial from "./Component/FreeTutorial";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Plan from "./Component/Plan";
import QualityFeatures from "./Component/QualityFeatures";
import ReadyToLearn from "./Component/ReadyToLearn";
import WorkFlow from "./Component/WorkFlow";



function App() {
  return (
    <div className="px-4 py-3 max-w-5xl mx-auto">
<Navbar/>
<Hero/>
<Features/>
<CoreFetaures/>
<QualityFeatures/>
<WorkFlow/>
<Plan/>
<FreeTutorial/>
<Faq/>
<ReadyToLearn/>
<Footer/>
    </div>
  );
}

export default App;
