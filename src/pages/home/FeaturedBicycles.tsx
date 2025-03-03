/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import ItemsCard, { ItemData } from "../../components/shared/ItemsCard";
import Loading from "../../components/shared/Loading";
import { toast } from "sonner";
import useAxiosCommon from "../../hooks/useAxiosCommon";

const FeaturedBicycles = () => {

  const axiosCommon = useAxiosCommon();

  // fetching the featured Bicycles
  const { isPending, data } = useQuery({
    queryKey: ["featuredBicycles"],
    queryFn: async () => {
      try {
        // const response = await axios(`${import.meta.env.VITE_SERVER}/api/products`);
        const response = await axiosCommon(`/api/products`);
        // console.log("response ==>",response);

        if (response.status !== 200) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // return the featured Bicycles
        return response.data.data;
      } 
      catch (error: any) {
        console.error("Error fetching featured bicycles:", error);

        // toast
        toast.error(error.message);
        throw error;
      }
    },
  });

  if (isPending) return <Loading />;
  console.log(isPending);
  console.log("product data ==>",data)

  //   if (error) return 'An error has occurred: ' + error.message + console.log(error, data)

  return (
    <div className="w-full min-h-[55vh] rounded-4xl shadow-purple-600 shadow-2xl p-16">
      {/* header */}
      <header className="flex h-full lg:flex-row flex-col gap-[50px] lg:gap-0 justify-center items-center lg:mt-3">
        <div className="px-8 mt-8 lg:mt-0 w-full lg:w-[50%]">
          <h1 className="text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] font-[500]">
            Featured Bicycles
          </h1>
          <p className="text-[16px] mt-2">
            Check out our new and exciting bicycles.
          </p>
          <button className="py-2 px-6 min-w-fit bg-blue-400 text-white rounded-full hover:bg-transparent hover:border-black hover:text-black transition-all duration-200 border">
            View All Bicycles
          </button>
          <div className="flex items-center gap-[20px] mt-6">
            <button className="py-2 px-6 min-w-fit bg-purple-200 text-white rounded-full hover:bg-transparent hover:border-black hover:text-black transition-all duration-200 border">
              Explore by Color
            </button>
            <button className="py-2 px-6 min-w-fit bg-purple-200 text-white rounded-full hover:bg-transparent hover:border-black hover:text-black transition-all duration-200 border">
              Explore by Price
            </button>
          </div>
        </div>
      </header>

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] px-8 mt-10">
        {
          data?.map((d : ItemData) => <ItemsCard key={d._id} data={d} isPending={isPending}/>)          
        }
      </div>
    </div>
  );
};

export default FeaturedBicycles;
