import { IconProps } from "./type";

export const IconStack = ({width = 16, height = 16, className = "h-5 w-5"}: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={`${className}`}
      height={`${height}px`}
      width={`${width}px`}
      viewBox="0 0 24 24"
    >
      <path d="M12 2 2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
  );
  
  export default IconStack;