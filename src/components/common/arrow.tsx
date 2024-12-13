import React from "react";
import classNames from "classnames";
import IconSortArrow from "../../assets/svgs/sort-arrow";
import { TableSortOrder } from "../../types/global";

export type SortArrowProps = {
    sortDirection: TableSortOrder; // 'asc', 'desc', or 'reset'
    className?: string;
    size?: number; // Custom size for the icon
    icon?: React.ElementType; // Allow passing a custom icon component
};

const SortArrow = ({
    sortDirection,
    className = "",
    size,
    icon: Icon = IconSortArrow,
}: SortArrowProps) => {
    // Define dynamic classes for rotation and visibility
    const sortIconClass = classNames(
        "inline-block transition-transform duration-200",
        {
        "rotate-180": sortDirection === "asc", // Rotated when ascending
        "opacity-0": sortDirection === "reset", // Hidden when reset
        "rotate-0": sortDirection === "desc", // No rotation for descending
        },
        className
    );

    return (
        <Icon
            className={sortIconClass}
            width={size}
            height={size}
        />
    );
};

export default SortArrow;
