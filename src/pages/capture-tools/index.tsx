import { Outlet, useParams } from "react-router-dom";
import { CAPTURE_TOOLS_OPTION } from "../../constants/capture-tools";
import Navigator from "../../components/navigation/navigator";

const CaptureToolsPage = () => {
    const { engagementId } = useParams();

    return (
        <>
            {!engagementId &&
                <div className="grid grid-cols-1 gap-0 lg:grid-cols-9 mt-8">
                    <Navigator title="Capture Tools" options={CAPTURE_TOOLS_OPTION} />
                    <Outlet />
                </div>
            }
            {engagementId && <Outlet />}
        </>
    );
}

export default CaptureToolsPage;