import { CoverDemo } from './Pages/CoverDemo';
import { GoogleGeminiEffectDemo } from './Pages/Footer';

import Home from './Pages/Home';
import { TabsDemo } from './Pages/TabDemo';
import Team from './Pages/Team';
import { TimelineDemo } from './Pages/TimelineDemo';

const App = () => {
  return (
    <div>
      <Home />
      <div className="cover mb-30">
        <CoverDemo />
      </div>
      <div className="tab bg-[#171c2a] mt-[-11%]">
          <TabsDemo />
      </div>
      <TimelineDemo />
      <Team />
      <GoogleGeminiEffectDemo />
    </div>
  );
};

export default App;