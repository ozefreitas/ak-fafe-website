import React from "react";

const Button = (props: { label: string; to: string }) => {
  return (
    <button className="bg-red-500 px-6 p-3 rounded-full text-white font-monts flex leading-none items-center gap-2 justify-center w-fit">
      <a href={props.to}>{props.label}</a>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
        />
      </svg>
    </button>
  );
};

export default Button;
