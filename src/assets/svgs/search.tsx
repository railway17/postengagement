import { IconProps } from "./type";

export const IconSearch = ({width = 16, height = 16, className = "h-4 w-4"}: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`${className}`}
      height={`${height}px`}
      width={`${width}px`}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-6-6m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0"
      ></path>
    </svg>
  );
  
  export default IconSearch;