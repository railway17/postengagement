import React from "react";

const SubHeader = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className="border-b border-b-base-300 pb-1 font-semibold">
            {children}
        </h1>
    );
}

export default SubHeader;