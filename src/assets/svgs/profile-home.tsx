import { IconProps } from "./type";

export const IconProfileHome = ({width = 16, height = 16, className = "h-5 w-5"}: IconProps) => (
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
        <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path>
    </svg>
)

export default IconProfileHome;