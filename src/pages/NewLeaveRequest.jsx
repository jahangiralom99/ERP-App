import { BsMoonStars } from "react-icons/bs";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import CancelButton from "../components/CancelButton";
import BlueButton from "../components/BlueButton";
import SubHeading from "../components/SubHeading";
import InputDateDesign from "../components/InputDateDesign";
import InputDesign from "../components/InputDesign";
import Arrow from "../components/Arrow";
import BottomModal from "../components/BottomModal";

const NewLeaveRequest = () => {
  const [open1, setOpen1] = useState(false);
  return (
    <div className="pt-28 text-black font-bold">
      <SubHeading title="Back" />

      <form className="flex flex-col gap-3 mt-5 mx-5">
        <div className="flex gap-2">
          <InputDateDesign
            label={"Start Date"}
            popperPlacement={"bottom-end"}
          />
          <InputDateDesign label={"End Date"} popperPlacement={"bottom-end"} />
        </div>

        <InputDesign
          setonclick={setOpen1}
          onclick={open1}
          label={"Select Leave Type"}
          inputicon={<BsMoonStars />}
          placeholder={"Select Leave Type"}
          readOnly={true}
          arrow={<Arrow setonclick={setOpen1} onclick={open1} />}
        />

        {/* Leave Type bottom modal */}

        {open1 && (
          <BottomModal
            setonclick={setOpen1}
            title={" Select Leave Type"}
            item={"Tech Solution inc."}
          />
        )}

        <p className="text-zinc-500">Add half day</p>

        <textarea
          className="textarea textarea-bordered   border-gray-600 w-full h-32 rounded-xl mb-3"
          placeholder="Type reason here..."
        ></textarea>

        <div className="flex gap-2">
          <CancelButton path={"/leave"} />
          <BlueButton name={"Apply"} />
        </div>
      </form>
    </div>
  );
};

export default NewLeaveRequest;
