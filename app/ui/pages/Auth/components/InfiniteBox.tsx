import Boxes from "../../../../assets/logo/boxes.png";
import { useEffect, useState } from "react";

export default function InfiniteSlider() {
  const boxesRowNumber = 5;

  return (
    <div className="InfiniteSlider">
      <div className="infinite-boxes-track">
        <img src={Boxes} alt="Box Icon" />
      </div>
      <div className="infinite-boxes-track">
        <img src={Boxes} alt="Box Icon" />
      </div>
      <div className="infinite-boxes-track">
        <img src={Boxes} alt="Box Icon" />
      </div>
      <div className="infinite-boxes-track">
        <img src={Boxes} alt="Box Icon" />
      </div>
      <div className="infinite-boxes-track">
        <img src={Boxes} alt="Box Icon" />
      </div>
    </div>
  );
}
