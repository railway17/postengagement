import SettingsAndResponse from "./settings-and-response";
import PostSelectionAndUrl from "./post-selection-and-url";

const EditTools = () => {
    return (
        <div className="mx-6">
            <div aria-label="Card" className="card bg-base-100 p-0 shadow-sm card-bordered">
                <div className="card-body gap-0 p-0">
                    {/* Optionally add a title or other header here */}
                    <div className="card-title" />

                    {/* Flex container for better alignment of the child components */}
                    <div className="flex flex-row gap-4">
                        <SettingsAndResponse />
                        <PostSelectionAndUrl />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditTools;
