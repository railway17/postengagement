import React, { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ToolsOption } from "../../types/global";

export type NavigatorProps = {
    title?: string;
    options: ToolsOption;
};

const Navigator = ({ title, options }: NavigatorProps) => {
    const { pathname } = useLocation();

    // Memoize the options to prevent unnecessary re-renders.
    const memoizedOptions = useMemo(() => options, [options]);

    return (
        <div className="col-span-2 hidden px-6 lg:block">
            <ul role="menu" className="menu rounded-md bg-base-100 menu-vertical">
                {title && (
                    <li role="menuitem" className="menu-title">
                        <span>{title}</span>
                    </li>
                )}

                {memoizedOptions.map((el) => {
                // Dynamically check if the current URL matches the option
                const isActive = el.url === pathname.split("/")[2];

                return (
                    <li role="menuitem" key={el.url}>
                        <Link
                            to={el.url}
                            className={`${
                            isActive ? "active" : ""
                            } flex items-center gap-2`} // Added gap for spacing
                        >
                            {el.svg && <span>{el.svg}</span>} {/* Render SVG if exists */}
                            {el.label}
                        </Link>
                    </li>
                );
                })}
            </ul>
        </div>
    );
};

export default Navigator;
