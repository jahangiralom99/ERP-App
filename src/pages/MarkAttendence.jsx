import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import TimeAttendence from "../components/TimeAttendence";
import { PiHandTapLight } from "react-icons/pi";
import { BsFileImage, BsFillFileImageFill } from "react-icons/bs";
import BottomCheckIn from "../components/BottomCheckIn";
// import Location from '../components/Location';
import { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import {
  fetchURL,
  getStoredCart,
  UploadAttachmentFile,
} from "../utilities/function";
import image10 from "../assets/IONIC-ERP-icon.png";
import { toast } from "react-toastify";
import MainLoader from "../components/Shared/MainLoader";
import CommonBackButton from "../components/Button/CommonBackButton";

const MarkAttendence = () => {
  const [open2, setOpen2] = useState(false);
  const [open1, setOpen1] = useState(false);
  // address for Check in page
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState("");
  // check in out status
  const [isCheckedIn, setIsCheckedIn] = useState(
    JSON.parse(localStorage.getItem("isCheckedIn")) || false
  ); // State for Check In/Out status
  const [checkInTime, setCheckInTime] = useState(
    localStorage.getItem("checkInTime") || null
  );
  const [checkOutTime, setCheckOutTime] = useState(
    localStorage.getItem("checkOutTime") || null
  );
  // base user
  const { url, data } = getStoredCart("login-info");
  // loader
  const [loader, setLoader] = useState(false);
  // duration
  const [duration, setDuration] = useState("");

  const webcamRef = useRef(null);
  const webcamRef2 = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);
  // image
  // const [imageFile, setImageFile] = useState(null);
  // name sate
  const [name, setName] = useState({});

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;
    // const blob = await fetch(imageSrc).then((res) => res.blob());
    // const shortUrl = URL.createObjectURL(blob); // Temporary URL for displaying
    setImageUrl(imageSrc); // Set shorter URL for <img> tag
  };
  const capture2 = async () => {
    const imageSrc = webcamRef2.current.getScreenshot();
    if (!imageSrc) return;

    // const blob = await fetch(imageSrc).then((res) => res.blob());
    // const shortUrl = URL.createObjectURL(blob); // Temporary URL for displaying
    setImageUrl2(imageSrc); // Set shorter URL for <img> tag
  };

  // console.log(checkInTime);
  // console.log(checkOutTime);

  // check IN
  const body = {
    server: url,
    doctype: "Employee Checkin",
    data: {
      employee: name,
      log_type: "IN",
      custom_upload_font_image: imageUrl,
      custom_upload_back_image: imageUrl2,
      latitude: latitude,
      longitude: longitude,
    },
  };
  // check out
  const body2 = {
    server: url,
    doctype: "Employee Checkin",
    data: {
      employee: name,
      log_type: "OUT",
      custom_upload_font_image: imageUrl,
      custom_upload_back_image: imageUrl2,
      latitude: latitude,
      longitude: longitude,
    },
  };
  // email decode URL
  const email = decodeURIComponent(data?.user_id);

  // console.log(body);

  // sfdgdfgdgf
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Employee`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        const findEmail = result?.data?.find(
          (item) => item?.prefered_email === email
        );
        setName(findEmail?.name);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [url, email]);

  console.log(name);
  useEffect(() => {
    localStorage.setItem("isCheckedIn", JSON.stringify(isCheckedIn));
  }, [isCheckedIn]);

  useEffect(() => {
    fetch(`${fetchURL}/duration?server=${url}&employee=${name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, [url, name]);

  // duration api call
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`${fetchURL}/duration?server=${url}&employee=${name}`)
        .then((res) => res.json())
        .then((result) => {
          setDuration(result?.duration);
        })
        .catch((err) => console.log(err));
    }, 1000); // Adjust the interval as needed (e.g., every 5 seconds)

    return () => clearInterval(interval);
  }, [url, name, isCheckedIn]); // Will reset interval whenever dependencies change

  const currentTime = new Date().toLocaleTimeString();
  // console.log(currentTime);
  // console.log(currentTime);
  const handleCheckIn = () => {
    // Check if images and location data are provided
    if (!imageUrl || !imageUrl2) {
      return toast.info("Please Take Picture", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (!longitude || !latitude) {
      return toast.info("Please On Location", {
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
      setLoader(true);
      if (!isCheckedIn) {
        // if check out het the this route
        fetch(`${fetchURL}/post_data`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("success", data);
            // Setting Check-In
            setIsCheckedIn(true);
            setLoader(false);
            // post for front image
            if (data?.response_data?.data) {
              setCheckInTime(currentTime);
              localStorage.setItem("checkInTime", currentTime);
              UploadAttachmentFile(
                imageUrl,
                url,
                data?.response_data?.data?.name,
                "front-image.jpg"
              );
              // post for back camera image
              UploadAttachmentFile(
                imageUrl2,
                url,
                data?.response_data?.data?.name,
                "back-image.jpg"
              );
            }
          })
          .catch((err) => {
            console.log(err);
            setLoader(false);
          });
      } else {
        // if check in het the this route
        // Setting Check-Out
        // console.log("fdgdfghgdfjjhdg");
        // if check out het the this route
        fetch(`${fetchURL}/post_data`, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body2),
        })
          .then((res) => res.json())
          .then((data) => {
            setIsCheckedIn(false);
            setLoader(false);
            setImageUrl2(null);
            setImageUrl(null);
            console.log("success", data);
            // Setting Check-In
            // setCheckInTime(currentTime);
            setLoader(false);
            // post for front image
            if (data?.response_data?.data) {
              setCheckOutTime(currentTime);
              localStorage.setItem("checkOutTime", currentTime);
              UploadAttachmentFile(
                imageUrl,
                url,
                data?.response_data?.data?.name,
                "front-image.jpg"
              );
              // post for back camera image
              UploadAttachmentFile(
                imageUrl2,
                url,
                data?.response_data?.data?.name,
                "back-image.jpg"
              );
            }
          })
          .catch((err) => {
            console.log(err);
            setLoader(false);
          });
      }
    }
  };

  if (loader) {
    return <MainLoader />;
  }
  // console.log(checkOutTime, checkOutTime);

  return (
    <div className="bg-white h-screen text-black">
      {/* header */}
      <div className="">
        <div className="flex justify-between items-center mt-[66px] w-full  text-black px-6 ">
          <div className="flex items-center gap-4">
            <Link to="/">
              <CommonBackButton value="Back" />
            </Link>
          </div>
          <div>{/* <TfiPencil className="text-lg text-blue-600" /> */}</div>
        </div>
      </div>

      <div className="">
        <TimeAttendence />

        {/* <div>
          <input onChange={(e)=> setImageFile(e.target.files[0])} type="file" name="" id="" />
        </div> */}
        {/* check in finger */}

        <div
          onClick={handleCheckIn}
          className={`flex flex-col justify-evenly cursor-pointer items-center pb-3 pt-2 w-44 mx-auto rounded-xl px-6 ${
            isCheckedIn ? "" : " text-black"
          }`}
        >
          <div
            className={`w-24 h-24 ${
              isCheckedIn
                ? "bg-green-500 border-black"
                : "bg-[#FF0000] border-black"
            }  border-2 rounded-full flex justify-center items-center`}
          >
            <PiHandTapLight
              className={`text-6xl ${
                isCheckedIn ? "text-white" : "text-white"
              } `}
            />
          </div>
          <p
            onClick={handleCheckIn}
            className={`text-2xl ${
              isCheckedIn ? "text-green-500" : ""
            }  font-bold`}
          >
            {isCheckedIn ? "Check Out" : "Check In"}
          </p>
        </div>

        {/* photo part */}

        <div className="flex  justify-evenly items-center mx-5 pb-12 rounded-xl mt-6 px-6 ">
          <div
            onClick={() => setOpen1(!open1)}
            className="flex flex-col justify-evenly items-center py-1  w-full  rounded-xl  px-6 "
          >
            {open1 && (
              <div className="flex flex-col top-[66px] fixed left-8 right-8 border-[#FF0000] bg-gray-100 border-[1px] rounded-xl">
                <div className=" flex justify-center pt-5 ">
                  {/* camera area */}

                  {/* <div className="bg-white h-72 w-[80%] rounded-xl ">
                    <div>
                      <Camera ref={camera} />
                      <button
                        onClick={() => setImage(camera.current.takePhoto())}
                      >
                        Take photo
                      </button>
                      <img src={image} alt="Taken photo" />
                    </div>
                  </div> */}

                  <div>
                    {/* Webcam component with front camera */}
                    <Webcam
                      audio={false}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      videoConstraints={{ facingMode: "user" }} // front camera
                    />

                    {/* <button>Capture</button> */}
                  </div>
                </div>

                {/* button */}
                <div className="flex justify-evenly items-center py-3 px-5 gap-2">
                  <button className="border-[1px] p-2 w-full rounded-xl border-[#FF0000]  text-[#FF0000] font-medium">
                    Cancel
                  </button>
                  <button
                    onClick={capture}
                    className="border-[1px] p-2 w-full rounded-xl  bg-gradient-to-r from-black to-gray-400 text-white font-medium"
                  >
                    Capture
                  </button>
                </div>
              </div>
            )}

            <div className="w-14 h-14 border-[#FF0000] bg-gray-100 border-2 rounded-full flex justify-center items-center">
              {!imageUrl ? (
                <BsFileImage className="text-3xl" />
              ) : (
                <img className="rounded-full h-14 w-16" src={imageUrl} alt="" />
              )}
            </div>
            <p className="text-center text-xs ">
              Take <br /> Front Image
            </p>
          </div>

          <div
            onClick={() => setOpen2(!open2)}
            className="flex flex-col justify-evenly items-center py-1   w-full  rounded-xl  px-6 "
          >
            {open2 && (
              <div className="flex flex-col fixed left-8 right-8  top-[66px]  border-[#FF0000] bg-gray-100 border-[1px] rounded-xl">
                <div className=" flex justify-center pt-5 ">
                  {/* camera area */}

                  <div className="">
                    <div>
                      {/* <Camera ref={camera} /> */}
                      <Webcam
                        className=""
                        audio={false}
                        ref={webcamRef2}
                        screenshotFormat="image/jpeg"
                        videoConstraints={{ facingMode: "environment" }} // Switches to back camera
                      />
                      {/* <button
                         onClick={capture}
                      >
                        Take photo
                      </button> */}
                      {/* {!imageUrl2 ? (
                        <BsFileImage className="text-3xl" />
                      ) : (
                        <img
                          className="rounded-full h-14 w-16"
                          src={imageUrl2}
                          alt=""
                        />
                      )} */}
                    </div>
                  </div>
                </div>

                {/* button */}
                <div className="flex justify-evenly items-center py-3 px-5 gap-2">
                  <button className="border-[1px] p-2 w-full rounded-xl border-[#FF0000]  text-[#FF0000] font-medium">
                    Cancel
                  </button>
                  <button
                    onClick={capture2}
                    className="border-[1px] p-2 w-full rounded-xl  bg-gradient-to-r from-black to-gray-400 text-white font-medium"
                  >
                    Capture
                  </button>
                </div>
              </div>
            )}

            <div className="w-14 h-14 border-[#FF0000] bg-gray-100 border-2 rounded-full flex justify-center items-center">
              {!imageUrl2 ? (
                <BsFileImage className="text-3xl" />
              ) : (
                <img
                  className="rounded-full h-14 w-16"
                  src={imageUrl2}
                  alt=""
                />
              )}
              {/* <BsFillFileImageFill className="text-3xl" /> */}
            </div>
            <p className="text-center text-xs">
              Take <br /> Back Image
            </p>
          </div>
        </div>

        <BottomCheckIn
          latitude={latitude}
          setLatitude={setLatitude}
          longitude={longitude}
          setLongitude={setLongitude}
          address={address}
          setAddress={setAddress}
          checkOutTime={checkOutTime}
          checkInTime={checkInTime}
          duration={duration}
        />
      </div>
    </div>
  );
};

export default MarkAttendence;
