import { IoIosGlobe } from "react-icons/io";
import erp from "../assets/IONIC-ERP-icon.png";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Switch from "react-switch";
import { FaRegCopyright, FaRegUser } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { addToProceed, fetchURL, getStoredCart } from "../utilities/function";
import { toast } from "react-toastify";
import MainLoader from "../components/Shared/MainLoader";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const [protocol, setProtocol] = useState("https");
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const navigate = useNavigate();
  const { url } = getStoredCart("login-info");
  const [value, setValue] = useState("");

  useEffect(() => {
    if (url) {
      navigate("/");
    }
  }, [url]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const url = `${protocol}://${data.url}`;
    const pass = data.password;
    const user = data.username;

    const info = {
      erp_url: url,
      erp_data: {
        usr: user,
        pwd: pass,
      },
    };

    setIsLoading(true); // Start loader

    fetch(`${fetchURL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.cookies) {
          const info = {
            data: data?.cookies,
            url: url,
          };
          addToProceed(info, "login-info");
          navigate("/");
          setValue("login");
          toast.success("Login Successfully", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          // Trigger error toast if no cookies are found
          toast.error("Invalid credentials. Please try again.", {
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
      .catch((error) => {
        toast.error("Login Successfully", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        // toast.success("Login failed. Please try again.");
        console.error("Login error:", error);
      })
      .finally(() => {
        setIsLoading(false); // Stop loader
      });
  };

  if (isLoading) {
    return <MainLoader />;
  }

  return (
    <div className="h-screen bg-gray-200">
      <div className="flex justify-between items-center gap-5 px-5 h-1/4">
        <div className="flex justify-center items-center gap-2  rounded-2xl p-2 bg-opacity-60">
          <img className="w-[40px]" src={erp} alt="" />
          <div>
            <p className="text-2xl">
              <span className="font-bold">IONIC</span>{" "}
              <span className="font-">ERP</span>
            </p>
            <p className="pt-1">
              <span className="font-medium "> Total Solution</span>
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg p-2 text-2xl text-[#FF0000] ">
          <IoIosGlobe />
        </div>
      </div>

      <div className="bg-black rounded-3xl h-3/4 pt-[3px] px-[2px] pb-[2px] flex flex-col relative">
        <div className="bg-white rounded-3xl h-full">
          <p className="text-3xl font-semibold text-black px-5 pt-3">Login!</p>
          <p className="text-lg font-semibold text-gray-600 pl-5">
            Enter Your IONIC ERP Credentials
          </p>

          <div>
            <form
              className="flex flex-col gap-4 p-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex items-center gap-2 border-[1px] border-gray-400 p-2 rounded-xl">
                <div className="" onClick={() => setOpen(!open)}>
                  <div className="flex justify-center items-center gap-1 cursor-pointer">
                    <IoIosGlobe className="text-[#FF0000] text-xl mr-[2px]" />
                    <span>{protocol}</span> <MdArrowDropDown />
                  </div>
                </div>
                {open && (
                  <div>
                    <div className="h-40 w-80 mx-10 bg-white rounded-xl absolute top-[140px] px-5 pt-3">
                      <h3 className="font-semibold text-black text-lg py-2">
                        Select Protocol
                      </h3>
                      <hr />
                      <div
                        onClick={() => setOpen(false)}
                        className="flex flex-col gap-3 py-2"
                      >
                        <p
                          onClick={() => setProtocol("https")}
                          className="flex justify-start gap-3 text-black items-center cursor-pointer"
                        >
                          <IoIosGlobe className="text-[#116630] text-xl" />{" "}
                          https
                        </p>
                        <p
                          onClick={() => setProtocol("http")}
                          className="flex justify-start gap-3 text-black items-center cursor-pointer"
                        >
                          <IoIosGlobe className="text-[#116630] text-xl" /> http
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <input
                  className="outline-none w-full focus:ring-0 focus:border-[#116630]"
                  placeholder="URL"
                  {...register("url", { required: true })}
                />
              </div>

              <div className="flex items-center gap-2 border-[1px] border-gray-400 p-2 rounded-xl">
                <FaRegUser className="text-[#FF0000] text-lg" />
                <input
                  className="outline-none w-full focus:ring-0 focus:border-[#FF0000]"
                  placeholder="Username"
                  {...register("username", { required: true })}
                />
              </div>

              <div className="flex items-center gap-2 border-[1px] border-gray-400 p-2 rounded-xl">
                <CiLock className="text-[#FF0000] text-xl" />
                <input
                  className="outline-none w-full focus:ring-0 focus:border-[#116630]"
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </div>

              <div className="flex justify-between items-center gap-2">
                <p>Remember Me</p>
                <Switch
                  onColor={"#FF0000"}
                  onChange={setChecked}
                  uncheckedIcon={false}
                  checked={checked}
                />
              </div>
              <input
                type="submit"
                value="Login"
                className="border-[1px] font-bold border-black bg-gradient-to-r from-gray-800 to-gray-300 text-white p-2 rounded-xl cursor-pointer"
              />
            </form>

            <div className="fixed bottom-1 left-0 right-0 flex flex-col justify-center items-center">
              <hr className="w-[70%]" />
              <p className="flex justify-center items-center gap-2 text-[10px] pt-1">
                Copyright <FaRegCopyright />
                2009-2023 IONIC Corporation. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
