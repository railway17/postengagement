import { IconProps } from "./type";

export const IconSendToMessage = ({width = 16, height = 16, className = "h-4 w-4"}: IconProps) => (
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
      <path d="m3 20 1.3-3.9A9 8 0 1 1 7.7 19z"></path>
      <path d="m8 13 3-2 2 2 3-2"></path>
    </svg>
  );
  
  export default IconSendToMessage;