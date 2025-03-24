

// Define types for the props
interface CustomButtonProps {
  textName: string;
  handleAnything: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ textName, handleAnything }) => {


  return (
    <button
      onClick={handleAnything}
      className="relative px-6 py-3 font-bold text-white rounded-lg group"
    >
      <span className="absolute inset-0 rounded-full w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-blue-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="absolute inset-0 rounded-full w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-purple-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
      <span className="relative">{textName}</span>
    </button>
  );
};

export default CustomButton;
