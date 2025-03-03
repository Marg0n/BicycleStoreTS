import Hero from "../../components/home/Hero";
import Navbar from "../../components/home/Navbar";
import FeaturedBicycles from "./FeaturedBicycles";

const Home = () => {
  return (
    <div className="container w-full mx-auto min-h-screen space-y-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="min-h-[28vh] my-4 flex flex-col justify-center items-center gap-8 sm:gap-12 lg:gap-16">
      <Hero/>
      <FeaturedBicycles/>
      </div>
    </div>
  );
};

export default Home;
