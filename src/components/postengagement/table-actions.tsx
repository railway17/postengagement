import { IconSearch, IconCaretDown } from "../../assets/svgs";

type TableActionsProps = {
    searchQuery: string,
    onSearchChange: (query: string) => void,
    bulkActions: { label: string, action: () => void }[]
}

const TableActions = ({ searchQuery, onSearchChange, bulkActions }: TableActionsProps) => {
    return (
        <div className="flex flex-row items-end gap-2 mb-2">
            <div className="grow truncate">
                <h4 className="truncate text-xl">Post Engagements</h4>
            </div>

            <div className="form-control hidden md:flex">
                <div className="join items-center border border-neutral bg-base-100 rounded-md">
                    <input
                        type="text"
                        value={searchQuery}
                        placeholder="Search…"
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="input input-sm h-[30px] focus:outline-none join-item border-0"
                    />
                    <span className="join-item px-1">
                        <IconSearch />
                    </span>
                </div>
            </div>

            <div role="listbox" className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-sm btn-outline rounded-md">
                    Bulk Actions
                    <IconCaretDown />
                </label>
                <ul
                    role="menu"
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-md menu-sm z-[1] mt-1 w-48"
                >
                {bulkActions.map((el, idx) => (
                    <li key={idx}>
                        <button
                            onClick={(e) => {
                            e.preventDefault();
                            el.action();
                            }}
                            className="block w-full text-left"
                        >
                            {el.label}
                        </button>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
}

export default TableActions;
