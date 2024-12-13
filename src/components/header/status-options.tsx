import { STATUS_OPTIONS } from "../../constants";
import { IconHeaderStatus } from "../../assets/svgs"

const StatusOptions = () => {
    return (
        <div role="listbox" className="dropdown hidden md:inline-block dropdown-end">
            <label tabIndex={0}>
                <button className="btn btn-circle btn-ghost">
                    <IconHeaderStatus />
                </button>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box mt-3 w-52" role="menu">
                {
                    STATUS_OPTIONS.map(({label, svg: Icon}) => {
                        return (
                            <li role="menuitem" key={label}>
                                <span>
                                    <Icon />{" "}{label}
                                </span>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default StatusOptions;