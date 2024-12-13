import { TableHeaders, ReactionsType, Breadcrumb } from "../types/global";
import TableRowAction from "../components/table/table-row-action";

import { IconInstagram, IconMessageBlurple } from "../assets/svgs";

const INSTAGRAM = "instagram";
const MESSENGER = "messenger";

const ENGAGEMENT_BREADCRUMBS: Breadcrumb[] = [
    {
        label: "Capture Tools",
        url: "/capture-tools",
    },
    {
        label: "Post Engagement",
        url: "/capture-tools/post-engagement",
    },
    {
        label: "Edit",
    },
];

const TABLE_DATA = [
    {
        id: "1a2b",
        name: "Quality",
        engaged: "50 / 25",
        acquired: 66,
        conversion: "10%",
        platform: MESSENGER,
    },
    {
        id: "2b3c",
        name: "Branding",
        engaged: "50 / 25",
        acquired: 66,
        conversion: "10%",
        platform: INSTAGRAM,
    },
    {
        id: "3c4d",
        name: "Data",
        engaged: "50 / 25",
        acquired: 66,
        conversion: "10%",
        platform: MESSENGER,
    },
    {
        id: "4d5e",
        name: "Mobility",
        engaged: "50 / 25",
        acquired: 66,
        conversion: "10%",
        platform: MESSENGER,
    },
    {
        id: "5e6f",
        name: "Quality",
        engaged: "50 / 25",
        acquired: 66,
        conversion: "10%",
        platform: INSTAGRAM,
    },
    {
        id: "6f7g",
        name: "Applications",
        engaged: "50 / 25",
        acquired: 66,
        conversion: "10%",
        platform: MESSENGER,
    },
    {
        id: "7g8h",
        name: "Interactions",
        engaged: "50 / 25",
        acquired: 66,
        conversion: "10%",
        platform: INSTAGRAM,
    },
    {
        id: "8h9i",
        name: "Branding",
        engaged: "50 / 25",
        acquired: 66,
        conversion: "10%",
        platform: INSTAGRAM,
    },
    {
        id: "9i0j",
        name: "Paradigm",
        engaged: "50 / 25",
        acquired: 66,
        conversion: "10%",
        platform: MESSENGER,
    },
    {
        id: "0j1k",
        name: "Markets",
        engaged: "50 / 25",
        acquired: 66,
        conversion: "10%",
        platform: INSTAGRAM,
    },
    {
        id: "1k2l",
        name: "Innovation",
        engaged: "60 / 30",
        acquired: 70,
        conversion: "15%",
        platform: MESSENGER,
    },
    {
        id: "2l3m",
        name: "Strategy",
        engaged: "45 / 20",
        acquired: 55,
        conversion: "12%",
        platform: INSTAGRAM,
    },
    {
        id: "3m4n",
        name: "Optimization",
        engaged: "70 / 35",
        acquired: 80,
        conversion: "18%",
        platform: MESSENGER,
    },
    {
        id: "4n5o",
        name: "Development",
        engaged: "65 / 30",
        acquired: 75,
        conversion: "14%",
        platform: MESSENGER,
    },
    {
        id: "5o6p",
        name: "Analysis",
        engaged: "55 / 25",
        acquired: 60,
        conversion: "11%",
        platform: INSTAGRAM,
    },
    {
        id: "6p7q",
        name: "Research",
        engaged: "40 / 20",
        acquired: 50,
        conversion: "10%",
        platform: MESSENGER,
    },
    {
        id: "7q8r",
        name: "Growth",
        engaged: "80 / 40",
        acquired: 90,
        conversion: "20%",
        platform: INSTAGRAM,
    },
    {
        id: "8r9s",
        name: "Scalability",
        engaged: "30 / 15",
        acquired: 40,
        conversion: "8%",
        platform: MESSENGER,
    },
    {
        id: "9s0t",
        name: "Automation",
        engaged: "50 / 25",
        acquired: 60,
        conversion: "10%",
        platform: INSTAGRAM,
    },
    {
        id: "0t1u",
        name: "Efficiency",
        engaged: "45 / 22",
        acquired: 55,
        conversion: "12%",
        platform: MESSENGER,
    },
    {
        id: "1u2v",
        name: "Customer",
        engaged: "70 / 35",
        acquired: 80,
        conversion: "18%",
        platform: INSTAGRAM,
    },
    {
        id: "2v3w",
        name: "Revenue",
        engaged: "55 / 27",
        acquired: 65,
        conversion: "15%",
        platform: MESSENGER,
    },
    {
        id: "3w4x",
        name: "Leads",
        engaged: "60 / 30",
        acquired: 70,
        conversion: "16%",
        platform: INSTAGRAM,
    },
];

const MESSAGE_TYPES = [
    {
        value: "flow",
        label: "Flow",
    },
    {
        value: "single-message",
        label: "Single Message",
    },
];

const MESSAGE_FLOWS = [
    {
        value: "welcome-message",
        label: "Welcome Message",
    },
    {
        value: "default-reply",
        label: "Default Reply",
    },
];

const TEXT_CARDS = [
    {
        value: "text-card-1",
        label: "Text Card #1",
    },
    {
        value: "text-card-2",
        label: "Text Card #2",
    },
];

const COMMENT_TYPES = [
    {
        value: "static",
        label: "Static",
    },
    {
        value: "openai",
        label: "Open AI",
    },
];

const INTEGRATION_TYPES = [
    {
        value: "integration-1",
        label: "Integration 1",
    },
    {
        value: "integration-2",
        label: "Integration 2",
    },
];

const ASSISTANCE_TYPES = [
    {
        value: "assistance-1",
        label: "Assistance 1",
    },
    {
        value: "assistance-2",
        label: "Assistance 2",
    },
];

const POST_ENGAGEMENT_HEADERS: TableHeaders = [
    {
        key: "platform",
        label: "",
        className: "w-5",
        render: (value) => (
            value === MESSENGER ? <IconMessageBlurple width={20} height={20} /> : <IconInstagram width={20} height={20} />
        )
    },
    {
        key: "name",
        label: "Name",
        sortable: true,
        className: "w-[150px]",
    },
    {
        key: "engaged",
        label: "Engaged / Unique",
        className: "w-[150px]",
    },
    {
        key: "acquired",
        label: "Acquired",
        sortable: true,
        className: "w-[150px]",
    },
    {
        key: "conversion",
        label: "Conversion",
        sortable: true,
        className: "w-[150px]",
    },
    {
        key: "id",
        label: "Action",
        className: "w-5",
        render: (value) => {
        return (
            <TableRowAction
                value={value}
                actions={[
                    {
                    label: 'Edit',
                    action: ({ navigate }) => navigate(value + '/edit')
                    },
                    {
                    label: 'Rename',
                    },
                    {
                    label: 'Delete',
                    }
                ]}
            />
        );
        },
    },
];

const POSITIVE_REACTIONS: ReactionsType = [
    {
        key: "reaction-like",
        label: "Like"
    },
    {
        key: "reaction-love",
        label: "Love"
    },
    {
        key: "reaction-haha",
        label: "Haha"
    },
    {
        key: "reaction-wow",
        label: "Wow"
    },
    {
        key: "reaction-sad",
        label: "Sad"
    },
    {
        key: "reaction-angry",
        label: "Angry"
    }
];

export {
    INSTAGRAM,
    MESSENGER,
    TEXT_CARDS,
    MESSAGE_TYPES,
    COMMENT_TYPES,
    MESSAGE_FLOWS,
    TABLE_DATA,
    ASSISTANCE_TYPES,
    INTEGRATION_TYPES,
    POSITIVE_REACTIONS,
    POST_ENGAGEMENT_HEADERS,
    ENGAGEMENT_BREADCRUMBS,
}