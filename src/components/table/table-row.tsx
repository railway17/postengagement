import { memo } from 'react';
import { TableHeaders, TableRowDataType } from '../../types/global';
  
type TableRowProps = {
    rowData: TableRowDataType;
    index: number;
    selectable?: boolean;
    selected?: boolean;
    keys: TableHeaders;
    onSelectRow: (index: number) => void;
}

// Memoizing row rendering for performance optimization
const TableRow = ({ 
    rowData, 
    selectable, 
    index, 
    selected, 
    keys,
    onSelectRow 
} :TableRowProps) => (
    <tr key={rowData.id}>
        {selectable && (
        <td className="w-5">
            <div className="px-1">
            <input
                type="checkbox"
                className="checkbox checkbox-sm rounded-sm"
                checked={selected}
                onChange={() => onSelectRow(index)}
            />
            </div>
        </td>
        )}
        {keys.map((columnHeader) => (
        <td key={columnHeader.key + "-" + rowData.id} className={columnHeader.className}>
            {columnHeader.render ? columnHeader.render(rowData[columnHeader.key], index, rowData) : rowData[columnHeader.key]}
        </td>
        ))}
    </tr>
);

export default memo(TableRow);