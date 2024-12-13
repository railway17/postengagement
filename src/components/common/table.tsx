import React, { ForwardedRef, forwardRef } from "react";
import TableRow from "../../components/table/table-row";
import { TableHeaders, TableRowDataType, TableSortOrder } from "../../types/global";
import TableHeaderRow from "components/table/table-header-row";

export type TableProps = {
    selectable?: boolean;
    headers: TableHeaders;
    selectedRows: number[];
    sortOrder?: TableSortOrder;
    handleSelectAll: () => void;
    data: Array<TableRowDataType>;
    handleSort: (key: string) => void;
    handleSelectRow: (index: number) => void;    
};

const Table = forwardRef(({
    data,
    headers,
    handleSort,
    selectedRows,    
    handleSelectAll,
    handleSelectRow,
    selectable = true,
    sortOrder = "reset",
}: TableProps, ref: ForwardedRef<HTMLInputElement>) => (
    <div className="overflow-y-hidden overflow-x-scroll">
        <table className="table table-sm bg-base-100 px-6 rounded-md" style={{ position: "initial" }}>
            <thead>
                <TableHeaderRow 
                    headers={headers}
                    selectable={selectable}
                    ref={ref}
                    sortDirection={sortOrder}
                    handleSelectAll={handleSelectAll}
                    onClickSort={handleSort}          
                />
            </thead>

            <tbody>
                {data.map((rowData, idx) => (
                <TableRow 
                    key={rowData.id} 
                    index={idx} 
                    rowData={rowData}
                    keys={headers} 
                    selectable={selectable} 
                    selected={selectedRows.includes(idx)}
                    onSelectRow={handleSelectRow}
                />
                ))}
            </tbody>
        </table>
    </div>
));

export default Table;
