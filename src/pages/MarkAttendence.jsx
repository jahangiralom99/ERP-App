import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import TimeAttendence from "../components/TimeAttendence";
import { PiHandTapLight } from "react-icons/pi";
import { BsFileImage, BsFillFileImageFill } from "react-icons/bs";
import BottomCheckIn from "../components/BottomCheckIn";
// import Location from '../components/Location';
import { useState, useRef } from "react";
import Webcam from "react-webcam";
import { fetchURL, getStoredCart } from "../utilities/function";
import image10 from "../assets/IONIC-ERP-icon.png";
import { toast } from "react-toastify";
import MainLoader from "../components/Shared/MainLoader";

const MarkAttendence = () => {
  const camera = useRef(null);
  const [image, setImage] = useState(null);
  const [image1, setImage1] = useState(null);
  const [open2, setOpen2] = useState(false);
  const [open1, setOpen1] = useState(false);
  // address for Check in page
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState("");
  // check in out status
  const [isCheckedIn, setIsCheckedIn] = useState(false); // State for Check In/Out status
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  // base user
  const { url } = getStoredCart("login-info");
  // loader
  const [loader, setLoader] = useState(false);

  const webcamRef = useRef(null);
  const webcamRef2 = useRef(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);
  // image
  const [imageFile , setImageFile] = useState(null);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (!imageSrc) return;

    const blob = await fetch(imageSrc).then((res) => res.blob());
    const shortUrl = URL.createObjectURL(blob); // Temporary URL for displaying
    setImageUrl(shortUrl); // Set shorter URL for <img> tag
  };
  const capture2 = async () => {
    const imageSrc = webcamRef2.current.getScreenshot();
    if (!imageSrc) return;

    const blob = await fetch(imageSrc).then((res) => res.blob());
    const shortUrl = URL.createObjectURL(blob); // Temporary URL for displaying
    setImageUrl2(shortUrl); // Set shorter URL for <img> tag
  };

  console.log(imageUrl);

  const body = {
    server: url,
    doctype: "Employee Checkin",
    data: {
      employee: "HR-EMP-00001",
      log_type: "IN",
      custom_upload_font_image: imageFile,
      custom_upload_back_image: imageFile,
      latitude: latitude,
      longitude: longitude,
    },
  };

  // console.log(image10);

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
      const currentTime = new Date().toLocaleTimeString();
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
            // Setting Check-In
            setCheckInTime(currentTime);
            setIsCheckedIn(true);
            setLoader(false);
            console.log(data);
            if (data?.response_data?.data) {
              console.log(data?.response_data?.data);
              const formData = new FormData();
              formData.append("file", imageFile); // Append the file object
              formData.append("server", url);
              formData.append("doctype_name", "Employee Checkin");
              formData.append("document_name", data?.response_data?.data?.name);
              // console.log("Form Data:", formData);
              fetch("https://erp-backend-black.vercel.app/file", {
                method: "POST",
                body: formData, // Use FormData as the body
              })
                .then((res) => {
                  if (!res.ok) {
                    throw new Error("Network response was not ok");
                  }
                  return res.json();
                })
                .then((data) => {
                  console.log("Success:", data);
                  // setResponseMessage("File uploaded successfully!");
                })
                .catch((error) => {
                  console.error("Error posting data:", error);
                  // setResponseMessage("Error: " + error.message);
                });
              console.log(data?.response_data?.data.name);
            }
          })
          .catch((err) => {
            console.error(err);
            setLoader(false);
          });
      } else {
        // if check in het the this route
        // Setting Check-Out
        // console.log("fdgdfghgdfjjhdg");
        setCheckOutTime(currentTime);
        setIsCheckedIn(false);
        setLoader(false);
      }
    }

    // if (imageUrl2 == null || imageUrl == null) {
    //   alert("please Image ");
    // } else if (longitude == null || latitude == null) {
    //   alert("please longitude");
    // }

    // alert("checkIN");
  };

  // fetch;

  if (loader) {
    return <MainLoader />;
  }
  console.log(checkOutTime, checkOutTime);

  return (
    <div className="bg-white h-screen  text-black">
      {/* header */}
      <div className="">
        <div className="flex justify-between items-center h-14 w-full bg-gray-200 text-black px-6 ">
          <div className="flex items-center gap-4">
            <Link to="/orders">
              <IoMdArrowBack className="text-lg text-[#FF0000]" />
            </Link>
            <p className=" font-medium">Mark Attendence</p>
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
              isCheckedIn ? "border-green-500" : "border-[#FF0000]"
            }  bg-gray-100 border-2 rounded-full flex justify-center items-center`}
          >
            <PiHandTapLight
              className={`text-6xl ${
                isCheckedIn ? "text-green-500" : "text-[#FF0000]"
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

        <div className="flex  justify-evenly items-center mx-5 pb-12   rounded-xl  px-6 ">
          <div
            onClick={() => setOpen1(!open1)}
            className="flex flex-col justify-evenly items-center py-1   w-full  rounded-xl  px-6 "
          >
            {open1 && (
              <div className="flex flex-col fixed left-8 right-8  bottom-32  border-[#FF0000] bg-gray-100 border-[1px] rounded-xl">
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
              <div className="flex flex-col fixed left-8 right-8  bottom-32  border-[#FF0000] bg-gray-100 border-[1px] rounded-xl">
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
        />
      </div>
    </div>
  );
};

export default MarkAttendence;
