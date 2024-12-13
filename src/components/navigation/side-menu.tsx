import { SIDEBAR_MENU } from "../../constants";
import { Link, useLocation } from "react-router-dom";

const SideMenu = () => {
    const { pathname } = useLocation();

    return (
        <div className="drawer-side z-10">
            <label className="drawer-overlay" htmlFor="drawer"></label>

            <ul className="menu border-r border-r-base-300 min-h-full bg-base-100 pt-20">
                {
                    SIDEBAR_MENU.map(menuItem => {
                        const isActive = menuItem.url === pathname.split("/")[1];
                        return (
                            <li key={menuItem.url}>
                                <Link className={`${isActive ? 'active ' : ''}py-4`} to={menuItem.url}>
                                    {menuItem.component}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default SideMenu;