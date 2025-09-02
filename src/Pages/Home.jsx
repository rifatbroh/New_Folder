import OrbitingSkills from '../Components/Orbiting';
import AuroraView from '../Components/Aurora';


const Home = () => {
  return (
    <div className="bg-[#171c2a] min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <AuroraView />

      <div className="absolute w-full flex justify-center z-20">
        <OrbitingSkills />
      </div>
    </div>
    
  );
};

export default Home;
