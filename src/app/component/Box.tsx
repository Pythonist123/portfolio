import Image, { StaticImageData } from "next/image";
import React from "react";

interface BoxProps {
  title: string;
  image: string;
  style: string;
}

function Box(props: BoxProps) {
  return (
    <div
      className={`bg-white w-52 h-52 m-8 flex flex-col items-center justify-center ${props.style}`}
    >
      <div>
        <img src={props.image} alt="card" />
      </div>

      <h2 className="text-background pt-4 px-2">{props.title}</h2>
    </div>
  );
}

export default Box;
