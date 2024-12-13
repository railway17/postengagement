import { IconProps } from "./type";

export const IconMagnet = ({width = 16, height = 16, className = "h-5 w-5"}: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      className={`${className}`}
      height={`${height}px`}
      width={`${width}px`}
      viewBox="0 0 16 16"
    >
      <path
        stroke="none"
        d="M14 0h-4l1 9a3 3 0 1 1-6 0l1-9H2L1 9a7 7 0 1 0 14 0zm-1.846 13.154c-1.11 1.11-2.585 1.721-4.154 1.721s-3.045-.611-4.154-1.721a5.83 5.83 0 0 1-1.72-4.095l.564-5.075h1.736l-.55 4.953v.062c0 1.102.429 2.138 1.208 2.917s1.815 1.208 2.917 1.208 2.138-.429 2.917-1.208a4.1 4.1 0 0 0 1.208-2.917v-.062l-.007-.062-.543-4.891h1.736l.564 5.075a5.84 5.84 0 0 1-1.72 4.095z"
      ></path>
    </svg>
  );
  
  export default IconMagnet;