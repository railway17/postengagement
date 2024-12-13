import React from "react";

type RoundButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    ariaLabel?: string; // Optional for accessibility
};

const RoundedButton = ({ children, disabled, onClick, ariaLabel }: RoundButtonProps) => {
    const isDisabled = disabled ?? false;

    return (
        <button
            className="btn btn-circle btn-primary btn-sm"
            disabled={isDisabled}
            aria-disabled={isDisabled}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default RoundedButton;
