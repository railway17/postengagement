import React, { ForwardedRef, forwardRef } from 'react';
import { TableHeaders, TableSortOrder } from 'types/global';
import TableHeaderCol from './table-header-col';

type TableHeaderRowProps = {
    headers: TableHeaders;
    selectable: boolean;
    handleSelectAll: () => void;
    onClickSort: (key: string) => void;
    sortDirection: TableSortOrder; 
}
const TableHeaderRow = forwardRef(({
    headers,
    selectable,
    handleSelectAll,
    onClickSort,
    sortDirection,
}: TableHeaderRowProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <tr>
            {selectable && (
                <th colSpan={1} className="w-5">
                    <div className="px-1">
                        <input
                            ref={ref}
                            type="checkbox"
                            onClick={handleSelectAll}
                            className="checkbox checkbox-sm rounded-sm"
                        />
                    </div>
                </th>
            )}
            {headers.map((el) => (
                <TableHeaderCol
                    key={el.key}
                    header={el}
                    handleSort={onClickSort}
                    sortDirection={sortDirection}
                />
            ))}
        </tr>
    );
})

export default TableHeaderRow;