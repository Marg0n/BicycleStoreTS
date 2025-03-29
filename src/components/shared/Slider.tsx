/* eslint-disable @typescript-eslint/no-explicit-any */
import { Carousel } from "antd";

// import image
import cycle from "../../assets/images/img/bicycle.jpg";
import { ItemData, ItemsCardProps } from "./ItemsCard";

const contentStyle: React.CSSProperties = {
  height: "100%",
  color: "#fff",
  //   lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  padding: "0px",
  backgroundImage: ` url(${cycle})`,
};

const Slider: React.FC<ItemsCardProps> = ({ data, isPending }) => {
  console.log(isPending);
  console.log("product data ==>", data);

  return (
    <Carousel
      autoplay={{ dotDuration: true }}
      autoplaySpeed={2000}
      className="min-w-full min-h-[55vh]"
      // style={contentStyle}
    >
      {data?.map((d: ItemData) => (
        <div
          key={d?._id}
          // className="bg-red-700  flex justify-center items-center h-full lg:flex-row flex-col gap-[50px] lg:gap-0 lg:mt-3"
          className="flex flex-row"
        >
          {/* description */}          
          <header className="flex min-h-[55vh] h-full lg:flex-row flex-col gap-[50px] lg:gap-0 justify-center items-center bg-green-400 rounded-4xl">
            <div className="px-8 mt-8 lg:mt-0 w-full lg:w-[50%]">
              <h1 className="text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] font-[500]">
                {d?.name}
              </h1>
              <p className="text-[16px] mt-2">{d?.description}</p>
            </div>

            {/* image */}
            <div className="w-full lg:w-[50%] object-cover p-10 flex justify-between items-center rounded-4xl ">
              <img
                src={d?.image || cycle}
                // src="https://i.ibb.co/kGnQZJ5/free-iphone-12-mini-mockup-scene-1-removebg-preview.png"
                alt="image"
                className="w-96 h-80 rounded-4xl"
              />
            </div>
          </header>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
