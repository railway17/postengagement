import { useCallback, useEffect, useState } from "react";
import RoundedButton from "./round-btn";
import {
    IconPaginationFirst,
    IconPaginationPrev,
    IconPaginationNext,
    IconPaginationLast,
} from "../../assets/svgs";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    const [inputValue, setInputValue] = useState<string>(String(currentPage)); // Keep input as string

    // Sync inputValue with currentPage when props change
    useEffect(() => {
        setInputValue(String(currentPage));
    }, [currentPage]);

    // Helper functions for navigation logic
    const navigateToFirst = useCallback(() => onPageChange(1), [onPageChange]);
    const navigateToPrev = useCallback(
        () => onPageChange(Math.max(1, currentPage - 1)),
        [currentPage, onPageChange]
    );
    const navigateToNext = useCallback(
        () => onPageChange(Math.min(totalPages, currentPage + 1)),
        [currentPage, totalPages, onPageChange]
    );
    const navigateToLast = useCallback(() => onPageChange(totalPages), [totalPages, onPageChange]);

    // Handle input validation
    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if ((!inputValue || !inputValue.trim()) && value === '0' ) {
            return;
        }
        // Allow only numbers and prevent leading zeros
        if (/^\d*$/.test(value)) {
            setInputValue(value);
        }
    }, [inputValue]);

    const handleInputBlur = useCallback(() => {
        const numValue = Number(inputValue);
        if (inputValue === "" || numValue < 1 || numValue > totalPages) {
            setInputValue(String(currentPage)); // Reset to currentPage if invalid
        } else {
            onPageChange(numValue);
        }
    }, [inputValue, currentPage, totalPages, onPageChange]);

    const handleInputKeyDown = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                handleInputBlur();
            }
            },
        [handleInputBlur]
    );

    return (
        <div className="flex items-center justify-center gap-4 py-4">
        {/* Navigation Buttons */}
        <RoundedButton disabled={currentPage === 1} onClick={navigateToFirst}>
            <IconPaginationFirst />
        </RoundedButton>

        <RoundedButton disabled={currentPage === 1} onClick={navigateToPrev}>
            <IconPaginationPrev />
        </RoundedButton>

        <RoundedButton disabled={currentPage === totalPages} onClick={navigateToNext}>
            <IconPaginationNext />
        </RoundedButton>

        <RoundedButton disabled={currentPage === totalPages} onClick={navigateToLast}>
            <IconPaginationLast />
        </RoundedButton>

        {/* Page Information */}
        <span className="flex items-center gap-1">
            <div>Page</div>
            <span>
            {currentPage} of {totalPages}
            </span>
        </span>

        {/* Go to Page Input */}
        <span className="hidden items-center gap-1 md:flex">
            · Go to page:
            <input
                type="text" // Keep input as text to avoid issues with leading zeros
                min={1}
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                onKeyDown={handleInputKeyDown}
                className="input w-16 p-1 input-sm input-bordered focus:outline-offset-0"
            />
        </span>
        </div>
    );
};

export default Pagination;
