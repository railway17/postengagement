import { IconProps } from "./type";

export const IconGraph = ({width = 16, height = 16, className = "h-5 w-5"}: IconProps) => (
    <svg 
        stroke="currentColor" 
        fill="currentColor" 
        strokeWidth="0" 
        viewBox="0 0 16 16" 
        className={`${className}`}
        height={`${height}px`}
        width={`${width}px`}
        xmlns="http://www.w3.org/2000/svg">
            <path d="M15 13V14H1.5L1 13.5V0H2V13H15Z"></path>
            <path d="M13 3.20714L7.85353 8.35359H7.14642L5.49998 6.70714L1.85353 10.3536L1.14642 9.64648L5.14642 5.64648H5.85353L7.49998 7.29293L12.6464 2.14648H13.3535L15.3535 4.14648L14.6464 4.85359L13 3.20714Z"></path>
        </svg>
)

export default IconGraph;