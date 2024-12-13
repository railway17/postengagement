import { memo } from 'react';
import { TableHeaders, TableSortOrder } from '../../types/global';
import SortArrow from '../../components/common/arrow';

type TableHeaderProp = {
    header: TableHeaders[number];
    handleSort: (key: string) => void;
    sortDirection: TableSortOrder
}

const TableHeaderCol = ({
    header,
    handleSort,
    sortDirection
}: TableHeaderProp) => (
    <th key={header.key} colSpan={1} className={header.className}>
        <div
            onClick={() => header.sortable && handleSort(header.key)}
            className={`px-1 ${header.sortable ? "cursor-pointer sheaderect-none" : ""}`}
        >
            {header.label}
            {header.sortable && <SortArrow sortDirection={sortDirection} />}
        </div>
    </th>
)

export default memo(TableHeaderCol);