import { useRef } from "react";
import { LuSearch } from "react-icons/lu";

interface Props {
  handleSubmit: (city: string) => void;
}

const Header = ({ handleSubmit }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputRef.current) handleSubmit(inputRef.current.value);
      }}
      className="flex justify-center"
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter a city..."
        className="flex flex-grow rounded-full p-2 mr-3 bg-[#e8fcfc] placeholder:text-[#626262] text-lg focus:outline-2 focus:outline-white focus:outline-offset-1 transition-all ease-linear	duration-200 outline-[#109090] outline-offset-1 outline-2 outline"
      />
      <button className="bg-[#e8fcfc] rounded-full cursor-pointer p-4">
        <LuSearch size="16px" />
      </button>
    </form>
  );
};

export default Header;
