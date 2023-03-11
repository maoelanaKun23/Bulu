import React from 'react';

function DescIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="15"
      fill="none"
      viewBox="0 0 9 15"
      {...props}>
      <path
        fill="#979797"
        d="M5.366 13.5a1 1 0 01-1.732 0L1.469 9.75a1 1 0 01.866-1.5h4.33a1 1 0 01.866 1.5L5.366 13.5z"></path>
      <path
        fill="#323C49"
        d="M3.634 1.5a1 1 0 011.732 0l2.165 3.75a1 1 0 01-.866 1.5h-4.33a1 1 0 01-.866-1.5L3.634 1.5z"></path>
    </svg>
  );
}

export default DescIcon;
