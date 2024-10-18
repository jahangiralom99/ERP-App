import { useState } from "react";
import {
  clearStoredCart,
  fetchURL,
  getStoredCart,
} from "../utilities/function";
import { useNavigate } from "react-router-dom";
import MainLoader from "./Shared/MainLoader";

const LogoutModal = ({ setOpen8 }) => {
  const { url } = getStoredCart("login-info");
  const [vale, setValue] = useState("");
  const navigate = useNavigate();

  // logout info
  const handleLogOut = () => {
    setValue("logout");
    const postBody = {
      erp_url: url,
    };
    console.log(postBody);
    fetch(`${fetchURL}/logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          clearStoredCart("login-info");
          clearStoredCart("order-info");
          clearStoredCart("item-all-data");
          navigate("/login");
          window.location.reload();
          toast.success("Logout successfully", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      })
      .then((err) => console.log(err));
  };

  return (
    <div className="h-screen fixed top-0 flex justify-center items-center  w-full z-10">
      <div
        onClick={() => setOpen8(false)}
        className="bg-black opacity-30 fixed h-screen w-full top-0"
      ></div>
      {vale == "" ? (
        <div className="bg-white p-8 w-72 h-40 rounded-2xl z-10">
          <p className="text-[#FF0000] text-[16px] font-bold cursor-pointer">
            Logout
          </p>
          <p className="pt-3 text-black font-semibold">
            Do you really want to logout?
          </p>
          <div className="flex justify-end gap-5 pt-8">
            <button
              onClick={() => {
                setOpen8(false);
              }}
              className="font-bold cursor-pointer"
            >
              Cancel
            </button>
            <div
              onClick={handleLogOut}
              className="text-[#FF0000] font-bold cursor-pointer"
            >
              Yes
            </div>
          </div>
        </div>
      ) : (
        <MainLoader />
      )}
    </div>
  );
};

export default LogoutModal;
