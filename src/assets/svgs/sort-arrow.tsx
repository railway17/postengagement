import { IconProps } from "./type";

export const IconSortArrow = ({width = 16, height = 16, className = ""}: IconProps) => (
    <svg 
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className={className}
        width={`${width}px`}
        height={`${height}px`}
        xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m11.998 17 7-8h-14z"></path>
    </svg>
  );
  
  export default IconSortArrow;
  