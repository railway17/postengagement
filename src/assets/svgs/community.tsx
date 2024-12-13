import { IconProps } from "./type";

export const IconCommunity = ({width = 16, height = 16, className = "h-5 w-5"}: IconProps) => (
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
            <path d="M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8"></path>
            <path d="M13 7l0 .01"></path>
            <path d="M17 7l0 .01"></path>
            <path d="M17 11l0 .01"></path>
            <path d="M17 15l0 .01"></path>
    </svg>
)

export default IconCommunity;