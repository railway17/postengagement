import { 
    IconStack, 
    IconGraph, 
    IconMagnet,
    IconMessage, 
    IconAudience, 
    IconSettings, 
    IconDashboard, 
    IconBroadcast, 
    IconAutomation,
    IconStatus,
    IconCommunity,
    IconKnowledgeBase,
    IconProfileHome,
    IconProfileBilling,
    IconProfileAccount,
    IconProfileLogout,
 } from "../assets/svgs";

const SIDEBAR_MENU = [
    {
        label: "Dashboard",
        url: "dashboard",
        component: <IconDashboard />,
    },
    {
        label: "Audience",
        url: "audience",
        component: <IconAudience />,
    },
    {
        label: "Messager",
        url: "message",
        component: <IconMessage />,
    },
    {
        label: "Capture Tools",
        url: "capture-tools",
        component: <IconMagnet />,
    },
    {
        label: "Broadcasts",
        url: "broadcasts",
        component: <IconBroadcast />,
    },
    {
        label: "Automation",
        url: "automation",
        component: <IconAutomation />,
    },
    {
        label: "Stack",
        url: "stack",
        component: <IconStack />,
    },
    {
        label: "Graph",
        url: "graph",
        component: <IconGraph />,
    },
    {
        label: "Settings",
        url: "settings",
        component: <IconSettings />,
    },
];

const PROFILE_DROPDOWN_OPTIONS = [
    {
        url: "/",
        key: 'home',
        label: "Home",
        svg: <IconProfileHome />,
    },
    {
        url: "/",
        key: 'billing',
        label: "Billing",
        svg: <IconProfileBilling />,
    },
    {
        url: "/",
        key: 'account',
        label: "Account",
        svg: <IconProfileAccount />,
    },
    {
        url: "/",
        key: 'logout',
        label: "Logout",
        svg: <IconProfileLogout />,
    },
];

const STATUS_OPTIONS = [
    {
      label: "Status",
      svg: IconStatus,
    },
    {
      label: "Community",
      svg: IconCommunity,
    },
    {
      label: "Knowledge Base",
      svg: IconKnowledgeBase,
    },
];


export { SIDEBAR_MENU, PROFILE_DROPDOWN_OPTIONS, STATUS_OPTIONS };