import { Outlet } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";

const Root = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      <div className="fixed bottom-0 left-0 right-0 flex justify-center ">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
