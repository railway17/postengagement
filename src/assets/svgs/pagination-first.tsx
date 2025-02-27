import { IconProps } from "./type";

export const IconPaginationFirst = ({width = 16, height = 16, className = "h-5 w-5"}: IconProps) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        className={`${className}`}
        height={`${height}px`}
        width={`${width}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M485.6 249.9L198.2 498c-8.3 7.1-8.3 20.8 0 27.9l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9zm320 0L518.2 498a18.6 18.6 0 0 0-6.2 14c0 5.2 2.1 10.4 6.2 14l287.4 248.2c10.7 9.2 26.4.9 26.4-14V263.8c0-14.8-15.7-23.2-26.4-13.9z"></path>
    </svg>
  );
  
  export default IconPaginationFirst;