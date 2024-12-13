export type TableHeaders = Array<{
    key: string;
    label: string;
    sortable?: boolean;
    className?: string;
    render?: (value: any, index?: number, rowData?: TableRowDataType) => React.ReactNode;
}>;

export type ToolsOption = Array<{
    label: string;
    url: string;
    svg?: JSX.Element;
}>;

export type TableRowDataType = {
    id: string;
    [key: string]: string | number;
};

export type TableSortOrder = "asc" | "desc" | "reset";

export type SelectOptionType = {
    value: string;
    label: string;
    [key: string]: string;
};

export type TableRowActionType = {
    label: string;
    action?: (param: {navigate: NavigateFunction, value: string}) => void;
};

export type ReactionsType = Array<{ key: string; label: string }>;


export type Breadcrumb = {
    label: string;
    url?: string;
};

export type ButtonShape = "rectangle" | "rounded" | "circle"