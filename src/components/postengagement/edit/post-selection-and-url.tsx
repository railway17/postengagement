import { useState } from "react";
import PostUrl from "./post-url";
import SelectPost from "./select-post";

const PostSelectionAndUrl = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="basis-3/5">
            <div 
                role="tablist" 
                className="tabs h-12 bg-base-100 p-0 child:!rounded-none rounded-b-none border-b border-b-base-300 tabs-boxed tabs-lg"
            >
                <button
                    role="tab"
                    aria-selected={tabIndex === 0}
                    aria-controls="select-post-tab"
                    className={`tab ${tabIndex === 0 ? 'tab-active' : ''}`}
                    onClick={() => setTabIndex(0)}
                >
                    Select A Post
                </button>
                <button
                    role="tab"
                    aria-selected={tabIndex === 1}
                    aria-controls="post-url-tab"
                    className={`tab ${tabIndex === 1 ? 'tab-active' : ''}`}
                    onClick={() => setTabIndex(1)}
                >
                    Post ID / URL
                </button>
            </div>

            <div className="tab-content">
                {tabIndex === 0 && (
                <div role="tabpanel" id="select-post-tab" aria-labelledby="Select A Post">
                    <SelectPost />
                </div>
                )}
                {tabIndex === 1 && (
                <div role="tabpanel" id="post-url-tab" aria-labelledby="Post ID / URL">
                    <PostUrl />
                </div>
                )}
            </div>
        </div>
    );
};

export default PostSelectionAndUrl;
