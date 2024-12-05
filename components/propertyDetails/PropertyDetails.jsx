import { GrHomeRounded } from "react-icons/gr";
import { LuClock } from "react-icons/lu";
import { IoIosCalendar } from "react-icons/io";
import { MdOutlinePets } from "react-icons/md";

const PropertyDetails = () => {
  return (
    <section className="mt-8 ">
      <p className="font-bold text-[22px] mb-8">Property Details</p>

      <section className="grid grid-cols-3">
        <div className="flex items-center gap-4 mb-8 ">
          <GrHomeRounded size={25} />

          <div>
            <p className="text-[1.15rem] font-semibold">Apartment</p>
            <p className="text-sm">Property-type</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-8 ">
          <LuClock size={25} />

          <div>
            <p className="text-[1.15rem] font-semibold">1 day ago</p>
            <p className="text-sm">Last updated</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-8 ">
          <IoIosCalendar size={25} />

          <div>
            <p className="text-[1.15rem] font-semibold text-purple-500 hover:text-purple-700 cursor-pointer">
              Check Avaiilability
            </p>
            <p className="text-sm">Availability</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-8 ">
          <MdOutlinePets size={25} />

          <div>
            <p className="text-[1.15rem] font-semibold">Pets ok</p>
            <p className="text-sm">Learn more</p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PropertyDetails;
