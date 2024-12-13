import React, { useCallback, useEffect, useRef, useState } from "react";
import { TableSortOrder } from "../../types/global";
import Pagination from "../common/pagination";
import Table from "../common/table";
import TableActions from "./table-actions";
import { TABLE_DATA, POST_ENGAGEMENT_HEADERS, ROWS_PER_PAGE } from "../../constants";

const PostEngagement = () => {
    const [sortOrder, setSortOrder] = useState<TableSortOrder>('reset');
    const [sortedData, setSortedData] = useState(TABLE_DATA);

    const [searchQuery, setSearchQuery] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [rowsPerPage] = useState(ROWS_PER_PAGE);

    const [selectedRows, setSelectedRows] = useState<number[]>([]);
    const selectAllRef = useRef<HTMLInputElement>(null);

    const filteredData = sortedData.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const startRow = (currentPage - 1) * rowsPerPage;
    const tableData = filteredData.slice(startRow, startRow + rowsPerPage);

    const handlePageChange = useCallback((page: number) => {
        setCurrentPage(page);
    }, [setCurrentPage]);

    const handleSearchChange = useCallback((query: string) => {
        setSearchQuery(query);
        setCurrentPage(1);
    }, [setSearchQuery, setCurrentPage]);

    const handleSelectRow = useCallback((index: number) => {
        setSelectedRows(prev => prev.includes(index) ? prev.filter(idx => idx !== index) : [...prev, index]);
    }, [setSelectedRows]);

    const handleSelectAll = useCallback(() => {
        if (selectAllRef.current?.checked) {
            const newSelectedRows = tableData.map((_, idx) => startRow + idx);
            setSelectedRows(newSelectedRows);
        } else {
            setSelectedRows([]);
        }
    }, [tableData, startRow, setSelectedRows]);

    const handleBulkDelete = useCallback(() => {
        const newData = sortedData.filter((_, idx) => !selectedRows.includes(idx));
        setSortedData(newData);
        setSelectedRows([]);
    }, [sortedData, selectedRows, setSortedData, setSelectedRows]);

    const handleSort = useCallback((key: string) => {
        let newOrder: TableSortOrder = 'reset';
        let sortedArray = [...sortedData];

        if (sortOrder === 'reset') {
            newOrder = 'asc';
            sortedArray.sort((a, b) => (a[key as keyof typeof a] as string).localeCompare(b[key as keyof typeof b] as string));
        } else if (sortOrder === 'asc') {
            newOrder = 'desc';
            sortedArray.sort((a, b) => (b[key as keyof typeof b] as string).localeCompare(a[key as keyof typeof a] as string));
        } else {
            newOrder = 'reset';
            sortedArray = TABLE_DATA;
        }

        setSortOrder(newOrder);
        setSortedData(sortedArray);
    }, [sortOrder, sortedData, setSortOrder, setSortedData]);

    useEffect(() => {
        if (selectAllRef.current) {
            selectAllRef.current.indeterminate = selectedRows.length > 0 && selectedRows.length < tableData.length;
            selectAllRef.current.checked = selectedRows.length === tableData.length;
        }
    }, [selectedRows, tableData.length]);

    return (
        <div className="lg:col-span-7">
            <div className="px-6">
                <TableActions
                    searchQuery={searchQuery}
                    onSearchChange={handleSearchChange}
                    bulkActions={[{ label: 'Delete', action: handleBulkDelete }]}
                />

                <Table
                    ref={selectAllRef}
                    data={tableData}
                    sortOrder={sortOrder}
                    handleSort={handleSort}
                    selectedRows={selectedRows}
                    handleSelectAll={handleSelectAll}
                    handleSelectRow={handleSelectRow}
                    headers={POST_ENGAGEMENT_HEADERS}
                />

                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
}

export default PostEngagement;