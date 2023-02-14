import React from "react";
import DiachiBuuCuc from "./DiachiBuuCuc";
import Location from "../../../app/map-location/Location";
import Map from "./Map";

export default function MapLocation() {
  return (
    <div className="mt-32 bg-[#f5f5f5] laptop:my-20 pb-24 laptop:rounded-2xl">
      <div className="text-left pt-32 pb-16 laptop:pl-32 mobile:text-center">
        <h2 className="font-bold text-5xl text-[#00467f]">
          CÁC BƯU ĐIỆN
          <span className="text-primary"> GHN</span>
        </h2>
      </div>
      <div className="tablet:block laptop:flex laptop:justify-between laptop:w-[1100px] m-auto">
        <div className="laptop:w-[350px]">
          <Location />
          <DiachiBuuCuc />
        </div>
        <Map />
      </div>
    </div>
  );
}
