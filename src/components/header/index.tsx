import AppLogo from "components/header/logo";
import HeaderClientLink from "components/header/link";
import ShieldOption from "components/header/shield-option";
import ThemeToggle from "components/header/theme-toggle";
import StatusOptions from "components/header/status-options";
import ProfileDropdown from "components/header/profile-dropdown";

const Header = () => {
    return (
        <div className="navbar fixed max-w-full z-40 border-b border-b-base-300 bg-base-100 flex items-center justify-between ">
            <div className="header-left flex items-center">
                <AppLogo />
                <HeaderClientLink />
            </div>

            <div className="header-right">
                <div className="flex items-center">
                    <ShieldOption />
                    <ThemeToggle />
                    <StatusOptions />
                    <ProfileDropdown />
                </div>
            </div>
        </div>
    );
}

export default Header;