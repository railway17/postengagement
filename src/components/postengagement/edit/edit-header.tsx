import React from "react";
import { ENGAGEMENT_BREADCRUMBS } from "../../../constants";
import Breadcrumbs from "../../common/breadcrumbs";

const EditHeader = () => {
    return (
        <div className="flex items-center justify-between px-8 mt-2 mb-2">
            {/* Reusable Breadcrumbs Component */}
            <Breadcrumbs breadcrumbs={ENGAGEMENT_BREADCRUMBS} />

            {/* Save Button */}
            <div>
                <button className="btn btn-sm btn-primary rounded-md">
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditHeader;
