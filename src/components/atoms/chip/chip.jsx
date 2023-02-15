import React from "react";
import { useState } from "react";

export default function ChipComponent(props) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div class="flex flex-wrap justify-center">
      <span
        onClick={handleClick}
        class={
          active
            ? "px-4 py-2 rounded-full text-neutral-50 bg-purple-500 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
            : "px-4 py-2 rounded-full text-purple-500 bg-violet-100 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease"
        }
      >
        {props.text}
      </span>
    </div>
  );
}
