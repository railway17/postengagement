import { IconProps } from "./type";

export const IconHeaderStatus = ({width = 16, height = 16, className = "h-5 w-5"}: IconProps) => (
    <svg 
        stroke="currentColor" 
        fill="none" 
        strokeWidth="2" 
        viewBox="0 0 24 24" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={`${className}`}
        height={`${height}px`}
        width={`${width}px`}
        xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
            <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line>
            <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line>
            <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line>
            <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
            <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>
    </svg>
  );
  
  export default IconHeaderStatus;