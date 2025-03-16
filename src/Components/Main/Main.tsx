import Home from './Home/Home';
import Characteristics from './Characteristics/Characteristics';
import Doctors from './Doctors/Doctors';
import Reviews from './Review/Reviews';

const Main = () => {
  return (
    <div className="m-auto max-w-[1250px] px-5 md:px-16">
      <Home />
      <Characteristics />
      <Doctors />
      <Reviews />
    </div>
  );
};

export default Main;
