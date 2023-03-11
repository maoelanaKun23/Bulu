import React from "react";

function fileIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="10"
      fill="none"
      viewBox="0 0 8 10"
      {...props}
    >
      <path
        fill="#EF444B"
        d="M4.5 3.5V.75L7.25 3.5M1 0C.445 0 0 .445 0 1v8a1 1 0 001 1h6a1 1 0 001-1V3L5 0H1z"
      ></path>
    </svg>
  );
}

export default fileIcon;
