import { useNavigate, NavigateFunction } from "react-router-dom";
import { TableRowActionType } from "../../types/global";

type TableRowActionProps = {
    value: any,
    actions: TableRowActionType[],  
}

type RowActionHandler = (param: {navigate: NavigateFunction, value: string}) => void;

const TableRowAction = ({ value, actions }: TableRowActionProps) => {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, handleRowAction?: RowActionHandler) => {
        e.preventDefault();
        if (typeof handleRowAction === 'function')  {
            handleRowAction({ navigate, value });
        }
    }
  
    return (
        <div role="listbox" className={`dropdown dropdown-end`}>
            <label tabIndex={1}>
                <button className="btn btn-xs btn-outline rounded-sm">Actions</button>
            </label>
            <ul
                tabIndex={1}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-sm menu-xs z-[1]"
                role="menu"
            >
                {actions.map((el: TableRowActionType, index: number) => (
                <li key={index} role="menuitem">
                    <button
                        onClick={(e) => handleClick(e, el.action)}
                        className="w-full text-left"
                    >
                        {el.label}
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default TableRowAction;
