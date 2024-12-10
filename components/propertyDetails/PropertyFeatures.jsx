import React from "react";
import { BsSnow2 } from "react-icons/bs";
import {
  PiCityLight,
  PiFireExtinguisher,
  PiSecurityCamera,
} from "react-icons/pi";
import { AiOutlineCar } from "react-icons/ai";
import { MdBalcony } from "react-icons/md";
import { TbAlarmSmoke, TbElevator } from "react-icons/tb";

const PropertyFeatures = () => {
  return (
    <section className="my-8">
      <p className="font-bold text-[22px] mb-5">What this place offers</p>

      <div className="grid grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <PiCityLight size={25} />
            <p>City skyline view</p>
          </div>
          <div className="flex items-center gap-3">
            <MdBalcony size={25} />
            <p>Patio or balcony</p>
          </div>
          <div className="flex items-center gap-3">
            <BsSnow2 size={25} />
            <p>Air conditioning</p>
          </div>
          <div className="flex items-center gap-3">
            <PiSecurityCamera size={25} />
            <p>Exterior security camera</p>
          </div>
          <div className="flex items-center gap-3">
            <AiOutlineCar size={25} />
            <p>Free parking</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <PiFireExtinguisher size={25} />
            <p>Fire extinguisher</p>
          </div>
          <div className="flex items-center gap-3">
            <TbElevator size={25} />
            <p>Elevator</p>
          </div>
          <div className="flex items-center gap-3">
            <TbAlarmSmoke size={25} />
            <p>Carbon monoxide alarm</p>
          </div>
          <div className="flex items-center gap-3">
            <TbAlarmSmoke size={25} />
            <p>Smoke alarm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFeatures;
