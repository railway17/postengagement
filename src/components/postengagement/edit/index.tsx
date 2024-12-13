import EditTools from "./edit-tools";
import EditHeader from "./edit-header";
import { PostEngagementEditProvider } from "../../../utils/contexts/engagement-context";

const PostEngagementEdit = () => {
    return (
        <PostEngagementEditProvider>
            <EditHeader />
            <EditTools />
        </PostEngagementEditProvider>
    );
}

export default PostEngagementEdit;