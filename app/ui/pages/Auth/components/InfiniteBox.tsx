import BlueBox from "../../../../assets/logo/blue-box.svg";
import RedBox from "../../../../assets/logo/red-box.svg";
import BeigeBox from "../../../../assets/logo/beige-box.svg";
import BrownBox from "../../../../assets/logo/brown-box.svg";
import { useEffect, useState } from "react";

const boxes = [BlueBox, BrownBox, BeigeBox, RedBox];

export default function InfiniteSlider() {
  return (
    <div className="InfiniteSlider">
      <div className="infinite-boxes-track">
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
      </div>
      <div className="infinite-boxes-track">
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
      </div>
      <div className="infinite-boxes-track">
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
      </div>
      <div className="infinite-boxes-track">
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
      </div>
      <div className="infinite-boxes-track">
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
        {boxes.map((box, index) => {
          return <img key={index} src={box} alt="Box Icon" />;
        })}
      </div>
    </div>
  );
}
