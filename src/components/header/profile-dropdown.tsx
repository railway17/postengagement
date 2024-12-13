import { Link } from "react-router-dom";
import { PROFILE_DROPDOWN_OPTIONS } from "../../constants";

const ProfileDropdown = () => {
    return (
        <div role="listbox" className="dropdown dropdown-end">
            <label tabIndex={0}>
                <button className="btn avatar btn-circle btn-ghost">
                    <div className="w-10 rounded-full">
                        <img
                            alt="User Profile"
                            loading="lazy"
                            src="https://static.vecteezy.com/system/resources/thumbnails/000/439/863/small/Basic_Ui__28186_29.jpg"
                        />
                    </div>
                </button>
            </label>

            <ul
                role="menu"
                tabIndex={0}
                className="dropdown-content menu bg-base-100 p-2 mt-3 w-48 shadow rounded-box"
            >
                {
                    PROFILE_DROPDOWN_OPTIONS.map((item) => {
                        return (
                            <li role="menuitem" key={item.key}>
                                <Link to={item.url}>
                                    {item.svg}{" "}{item.label}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default ProfileDropdown;