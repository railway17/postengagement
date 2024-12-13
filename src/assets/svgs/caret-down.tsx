import { IconProps } from "./type";

export const IconCaretDown = ({width = 16, height = 16, className = "h-4 w-4"}: IconProps) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        className={`${className}`}
        height={`${height}px`}
        width={`${width}px`}
        xmlns="http://www.w3.org/2000/svg"
        >
        <path d="m11.998 17 7-8h-14z"></path>
    </svg>
)

export default IconCaretDown;