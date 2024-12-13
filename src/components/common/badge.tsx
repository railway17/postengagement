import React, { useMemo } from "react";
import classNames from "classnames";

export type BadgeProps = {
    label: string | React.ReactNode;
    onClose: () => void;
    reactionWidth?: number;
    reactionHeight?: number;
    reaction?: { key: string; label: string };
    closeIcon?: React.ReactNode; // Allow custom close icon
    className?: string; // Additional custom classes for badge
};

const Badge = ({
    reactionWidth = 18,
    reactionHeight = 18,
    label,
    reaction,
    onClose,
    closeIcon = "✕", // Default close icon
    className = "",
}: BadgeProps) => {
    // Memoized reaction element for optimization
    const reactionNode = useMemo(() => {
        if (!reaction) return null;

        return (
        <span
            className={classNames(
            `badge-reaction inline-block bg-contain mr-1`,
            `like-${reaction.key}`
            )}
            style={{ width: reactionWidth, height: reactionHeight }}
            aria-label={reaction.label}
        />
        );
    }, [reaction, reactionWidth, reactionHeight]);

    // Memoized close button for optimization
    const closeButton = useMemo(() => (
        <button
            type="button"
            onClick={onClose}
            className="ml-1 cursor-pointer text-xs hover:text-error pt-0.5"
            aria-label="Close badge"
        >
            {closeIcon}
        </button>
    ), [onClose, closeIcon]);

    return (
        <div className={classNames("badge flex items-center", className)}>
            {reactionNode}
            <span>{label}</span>
            {closeButton}
        </div>
    );
};

export default Badge;
