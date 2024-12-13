import { IconProps } from "./type";

export const IconPaginationNext = ({width = 16, height = 16, className = "h-5 w-5"}: IconProps) => (
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
        d="M10.02 6 8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6z"
      ></path>
    </svg>
  );
  
  export default IconPaginationNext;
  