import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="bg-[#462ac9] flex flex-col mt-40 w-full max-w-[540px] h-fit p-10 rounded-lg">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Layout;
