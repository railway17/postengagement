import { IconProps } from "./type";

export const IconPaginationPrev = ({width = 16, height = 16, className = "h-5 w-5"}: IconProps) => (
  <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      className={`${className}`}
      height={`${height}px`}
      width={`${width}px`}
      viewBox="0 0 24 24"
    >
      <path fill="none" stroke="none" d="M0 0h24v24H0z"></path>
      <path
        stroke="none"
        d="M15.61 7.41 14.2 6l-6 6 6 6 1.41-1.41L11.03 12z"
      ></path>
    </svg>
  );
  
  export default IconPaginationPrev;
  