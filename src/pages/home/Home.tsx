import Hero from "../../components/home/Hero";
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/shared/Footer";

const Home = () => {
  return (
    <div className="container w-full mx-auto min-h-screen">
      <Navbar />
      <div className="min-h-[28vh] my-4 flex justify-center items-center gap-4">
        <Hero/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
