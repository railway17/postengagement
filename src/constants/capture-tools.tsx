
import { 
    IconLinksLibrary,
    IconJsonGenerator,
    IconMessengerCode,
    IconPostEngagement,
    IconSendToMessage,
    IconConnector
} from "../assets/svgs";

const CAPTURE_TOOLS_OPTION = [
    {
        label: "Links Library",
        url: "links-library",
        svg: <IconLinksLibrary />,
    },
    {
        label: "JSON Generator",
        url: "json-generator",
        svg: <IconJsonGenerator />,
    },
    {
        label: "Checkbox Plugin",
        url: "checkbox-plugin",
        svg: <IconConnector />,
    },
    {
        label: "Messenger Code",
        url: "messenger-code",
        svg: <IconMessengerCode />,
    },
    {
        label: "Post Engagement",
        url: "post-engagement",
        svg: <IconPostEngagement />,
    },
    {
        label: "Send To Messenger",
        url: "send-to-messenger",
        svg: <IconSendToMessage />,
    },
];

export { CAPTURE_TOOLS_OPTION };