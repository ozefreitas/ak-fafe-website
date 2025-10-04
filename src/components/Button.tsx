import React from "react";

const Button = (props: {
  label: string;
  to: string;
  icon: string;
  disableHover?: boolean;
  disableRoute?: boolean;
  onHover?: any;
  onHoverOut?: any;
  onClick?: any;
}) => {
  return (
    <button
      onMouseEnter={props.onHover}
      onMouseLeave={props.onHoverOut}
      onClick={props.onClick}
      className={`bg-akfafe-red border-1 ${
        !props.disableHover
          ? "hover:bg-transparent hover:border-akfafe-red hover:text-akfafe-red hover:scale-110 cursor-pointer"
          : null
      } px-6 p-3 rounded-full text-white font-monts flex leading-none items-center gap-4 justify-center w-fit transition-transform duration-200`}
    >
      {props.icon === "eye" ? (
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
            d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ) : null}
      {!props.disableRoute ? <a href={props.to}>{props.label}</a> : props.label}
      {props.icon === "front" ? (
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
      ) : props.icon === "cursor" ? (
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
            d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
          />
        </svg>
      ) : null}
    </button>
  );
};

export default Button;
