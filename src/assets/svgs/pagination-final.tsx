import { IconProps } from "./type";

export const IconPaginationLast = ({width = 16, height = 16, className = "h-5 w-5"}: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      className={`${className}`}
      height={`${height}px`}
      width={`${width}px`}
      viewBox="0 0 1024 1024"
    >
      <path
        stroke="none"
        d="M825.8 498 538.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L825.8 526c8.3-7.2 8.3-20.8 0-28m-320 0L218.4 249.9c-10.7-9.2-26.4-.9-26.4 14v496.3c0 14.9 15.7 23.2 26.4 14L505.8 526c4.1-3.6 6.2-8.8 6.2-14s-2.1-10.4-6.2-14"
      ></path>
    </svg>
  );
  
  export default IconPaginationLast;
  