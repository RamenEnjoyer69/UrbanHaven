import { RiShieldCheckFill } from "react-icons/ri";
import { MdOutlineWorkOutline } from "react-icons/md";

const LandlordInfo = () => {
  return (
    <div>
      <div className="grid grid-cols-3 items-center w-[380px] h-[230px] rounded-3xl custom-shadow ">
        <div className="grid col-span-2 place-items-center">
          <div className="relative">
            <img
              src="/images/a.jpg"
              alt=""
              className="w-28 h-28 rounded-full"
            />
            <div className="absolute bottom-2 right-0 grid place-items-center bg-purple-500 w-8 h-8 rounded-full">
              <RiShieldCheckFill className="text-white" />
            </div>
          </div>

          <p className="mt-3 font-bold text-[1.75rem] leading-none">Ana</p>
          <p>Landlord</p>
        </div>

        <div className="grid place-items-start pr-9">
          <div>
            <p className="font-bold text-[1.5rem]">37</p>
            <p className="text-[0.7rem]">Properties</p>
          </div>
          <hr className="w-full border-gray-300 my-2" />
          <div>
            <p className="font-bold text-[1.5rem]">0</p>
            <p className="text-[0.7rem]">Violations</p>
          </div>
          <hr className="w-full border-gray-300 my-2" />
          <div>
            <p className="font-bold text-[1.5rem]">5</p>
            <p className="text-[0.7rem]">Years Hosting</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center gap-3">
          <MdOutlineWorkOutline />
          <p>My work: Actress</p>
        </div>
        <p>hi</p>
        <p>hi</p>
      </div>
    </div>
  );
};

export default LandlordInfo;
