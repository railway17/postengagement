import { IconProps } from "./type";

export const IconKnowledgeBase = ({width = 16, height = 16, className = "h-5 w-5"}: IconProps) => (
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
      <path d="m8 9 5 5v7H8v-4m0 4H3v-7l5-5m1 1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17h-8M13 7v.01M17 7v.01M17 11v.01M17 15v.01"></path>
    </svg>
  );
  
  export default IconKnowledgeBase;
  