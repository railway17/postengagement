import { useState, useCallback } from "react";
import PostSettings from "./post-settings";
import AutoResponse from "./auto-response";

const tabs = [
    { label: "Settings", component: <PostSettings /> },
    { label: "Auto Response", component: <AutoResponse /> }
];

const SettingsAndResponse = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = useCallback((index: number) => {
        setTabIndex(index);
    }, []);

    return (
        <div className="basis-2/5">
            <div role="tablist" className="tabs child:!border-b child:!text-sm tabs-bordered tabs-lg">
                {tabs.map((tab, index) => (
                <button
                    key={index}
                    role="tab"
                    onClick={() => handleTabChange(index)}
                    className={`tab ${tabIndex === index ? 'tab-active' : ''}`}
                    style={{ borderBottomWidth: '1px' }}
                >
                    {tab.label}
                </button>
                ))}
            </div>

            <div className="h-[75vh] overflow-y-auto px-6 py-4 text-sm">
                {tabs[tabIndex]?.component}
            </div>
        </div>
    );
};

export default SettingsAndResponse;
